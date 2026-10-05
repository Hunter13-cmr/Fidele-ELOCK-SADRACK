import { HttpClient } from '@angular/common/http';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { firstValueFrom } from 'rxjs';

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
}