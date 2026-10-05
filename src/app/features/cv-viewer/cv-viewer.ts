import { HttpClient } from '@angular/common/http';
import {
  Component,
  ElementRef,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';
// pdf.js (Mozilla) affiche la page du PDF dans un <canvas>. Contrairement a
// <object type="application/pdf">, cette solution ne depend pas du lecteur
// PDF du navigateur : elle fonctionne sur Safari mobile, Chrome Android et
// Firefox Android, ou l'apercu natif reste vide.
import {
  GlobalWorkerOptions,
  getDocument,
  type PDFDocumentProxy,
  type PDFDocumentLoadingTask,
  type PDFPageProxy,
} from 'pdfjs-dist';

// pdf.js a besoin de son worker separe. Angular ne transforme pas
// statiquement un `new URL(..., import.meta.url)` ici : le build aboutissait
// sans fichier .mjs et le worker retombait sur « ./pdf.worker.mjs » (404), ce
// qui faisait echouer l'apercu a l'execution — sans erreur de compilation.
//
// Le worker est donc copie tel quel dans les assets (angular.json) et charge
// depuis ce chemin.
GlobalWorkerOptions.workerSrc = '/assets/pdf.worker.min.mjs';

import { Cv } from '../../core/models/cv.model';
import { CvsService } from '../../core/services/cvs.service';

type CvState = 'loading' | 'ready' | 'missing' | 'unknown-id';

/**
 * Page de consultation d'un CV : `/cv/:id`.
 *
 * Le site étant statique, un PDF manquant ne provoque aucune erreur de build :
 * il faut interroger le serveur. On envoie donc une requête `HEAD` sur le
 * fichier — un 404 signifie « à pourvoir » et la page affiche un état 404
 * plutôt qu'un lecteur PDF vide.
 */
@Component({
  selector: 'app-cv-viewer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './cv-viewer.html',
  styleUrl: './cv-viewer.css',
})
export class CvViewer {
  private readonly route = inject(ActivatedRoute);
  private readonly http = inject(HttpClient);
  private readonly cvsService = inject(CvsService);
  private readonly title = inject(Title);

  private readonly params = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  /** Version de CV demandée par l'URL. */
  readonly cv = signal<Cv | null>(null);
  readonly state = signal<CvState>('loading');

  /** Empêche une réponse HEAD obsolète d'écraser un état plus récent. */
  private probeToken = 0;

  /**
 * URL absolue du PDF.
 *
 * `fileUrl` est stocké en relatif (« assets/cvs/… ») pour rester portable. Or
 * sur la page /cv/:id, un lien relatif est resolu par le navigateur contre le
 * chemin courant et non contre la racine : il pointait vers
 * « /cv/assets/cvs/… » et renvoyait un 404 — d'ou un apercu vide ET des
 * boutons de telechargement inoperants. On prefixe donc par « / ».
 */
readonly pdfUrl = computed(() => {
  const url = this.cv()?.fileUrl;
  if (!url) return '';
  return url.startsWith('/') ? url : '/' + url;
});

  constructor() {
    this.cvsService.load();

    effect(() => {
      const id = this.params()?.get('id');
      const list = this.cvsService.cvs();
      const loading = this.cvsService.loading();

      // Tant que la liste est vide, on ne peut conclure ni dans un sens ni
      // dans l'autre : `loading` peut déjà être repassé à false entre deux
      // exécutions de cet effet, ce qui ferait conclure à tort à un id
      // inconnu. On se base donc sur la seule liste.
      if (list.length === 0) {
        if (!loading && !this.cvsService.error()) {
          // Les donnees sont arrivees et ne contiennent aucun CV : URL invalide.
          this.state.set('unknown-id');
          this.title.setTitle('CV introuvable — Fidèle Elock Sadrack');
        } else {
          this.state.set('loading');
        }
        return;
      }

      const found = list.find((c) => c.id === id);
      if (!found) {
        this.state.set('unknown-id');
        this.title.setTitle('CV introuvable — Fidèle Elock Sadrack');
        return;
      }

      this.cv.set(found);
      this.title.setTitle(`${found.label} — Fidèle Elock Sadrack`);
      void this.probe(found);
    });

    // Charge le document des que l'etat « ready » est atteint : le canvas
    // n'existe dans le DOM qu'a ce moment-la. L'effet depend de `state` et
    // `pdfUrl`, donc il ne se rejoue pas a chaque re-rendu.
    effect(() => {
      if (this.state() !== 'ready') return;
      const url = this.pdfUrl();
      if (!url) return;
      void this.loadDocument(url);
    });
  }

  /** Vérifie que le fichier est bien servi avant d'afficher le lecteur. */
  private async probe(cv: Cv): Promise<void> {
    const token = ++this.probeToken;
    this.state.set('loading');
    // Même résolution que pdfUrl() : la requête part de la racine du site,
    // sinon elle viserait /cv/assets/... et conclurait à tort « missing ».
    const url = '/' + cv.fileUrl.replace(/^\/+/, '');
    try {
      await firstValueFrom(this.http.head(url, { observe: 'response', responseType: 'blob' }));
      if (token === this.probeToken) this.state.set('ready');
    } catch {
      if (token === this.probeToken) this.state.set('missing');
    }
  }

  /** Les autres versions, pour proposer une alternative sur la page 404. */
  readonly otherCvs = computed(() =>
    this.cvsService.cvs().filter((c) => c.id !== this.cv()?.id)
  );

  // ---------- Rendu du PDF (pdf.js) ----------

  /** Canvas qui reçoit la page rasterisee. */
  private readonly canvas = viewChild<ElementRef<HTMLCanvasElement>>('pdfCanvas');

  readonly page = signal(1);
  readonly pageCount = signal(0);
  readonly renderError = signal<string | null>(null);
  readonly rendering = signal(false);
  /** Telechargement et rasterisation du document par pdf.js en cours. */
  readonly docLoading = signal(false);
  /** Le canvas a recu au moins une page : on peut l'afficher. */
  readonly docReady = signal(false);

  /** Vrai tant qu'aucune page n'est affichee et qu'aucune erreur n'est survenue. */
  readonly showSkeleton = computed(
    () => this.docLoading() && !this.docReady() && !this.renderError()
  );

  readonly hasPrev = computed(() => this.page() > 1);
  readonly hasNext = computed(() => this.page() < this.pageCount());

  private loadingTask: PDFDocumentLoadingTask | null = null;
  private doc: PDFDocumentProxy | null = null;
  private renderToken = 0;

  private async loadDocument(url: string): Promise<void> {
    const token = ++this.renderToken;
    this.renderError.set(null);
    // Le state « ready » est deja atteint (le fichier existe) : on affiche
    // desormais la zone d'apercu, mais elle est vide tant que pdf.js n'a pas
    // rasterise la page. Ce second chargement doit avoir son propre message.
    this.docLoading.set(true);
    try {
      // C'est la loadingTask — et non le document — qui porte destroy() :
      // elle interrompt les requetes reseau et libere le worker.
      await this.loadingTask?.destroy();
      this.doc = null;

      this.loadingTask = getDocument({ url });
      this.doc = await this.loadingTask.promise;
      if (token !== this.renderToken) return;
      this.pageCount.set(this.doc.numPages);
      this.page.set(1);
      await this.renderPage();
    } catch {
      if (token === this.renderToken) {
        this.renderError.set("Ce CV n'a pas pu être affiché. Utilisez les boutons ci-dessous.");
      }
    } finally {
      if (token === this.renderToken) this.docLoading.set(false);
    }
  }

  /** Rasterise la page courante dans le canvas, ajusté à sa largeur. */
  private async renderPage(): Promise<void> {
    const doc = this.doc;
    const el = this.canvas()?.nativeElement;
    if (!doc || !el || this.rendering()) return;

    const token = this.renderToken;
    this.rendering.set(true);
    try {
      const page: PDFPageProxy = await doc.getPage(this.page());
      const ctx = el.getContext('2d');
      if (!ctx || token !== this.renderToken) return;

      // Premier passage a dpi 1 pour connaître la taille de base.
      const base = page.getViewport({ scale: 1 });
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const scale = (el.clientWidth || base.width) / base.width;

      const viewport = page.getViewport({ scale: scale * ratio });
      el.width = Math.floor(viewport.width);
      el.height = Math.floor(viewport.height);
      el.style.width = Math.floor(viewport.width / ratio) + 'px';
      el.style.height = Math.floor(viewport.height / ratio) + 'px';

      await page.render({ canvas: el, canvasContext: ctx, viewport }).promise;
      if (token === this.renderToken) this.docReady.set(true);
    } catch {
      /* le rendu peut echouer si la page a change entre-temps */
    } finally {
      this.rendering.set(false);
    }
  }

  async goToPage(n: number): Promise<void> {
    if (n < 1 || n > this.pageCount()) return;
    this.page.set(n);
    // Le squelette ne concerne que le premier chargement : ensuite on garde
    // la page affichee pendant que la suivante se rasterise.
    this.rendering.set(true);
    await this.renderPage();
  }

  async prevPage(): Promise<void> {
    await this.goToPage(this.page() - 1);
  }

  async nextPage(): Promise<void> {
    await this.goToPage(this.page() + 1);
  }
}