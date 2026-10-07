import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { localizeCv } from '../i18n/translate';
import { Cv } from '../models/cv.model';
import { I18nService } from './i18n.service';

/**
 * Charge les versions de CV depuis un JSON local via HttpClient.
 *
 * Le sélecteur du header et celui de la page contact consomment ce service :
 * ajouter une troisième version du CV ne demande qu'une entrée dans
 * `assets/data/cvs.json`. `cvs` est localisé (FR/EN).
 */
@Injectable({ providedIn: 'root' })
export class CvsService {
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(I18nService);
  private readonly dataUrl = 'assets/data/cvs.json';

  private readonly _cvs = signal<Cv[]>([]);
  private readonly _loading = signal(false);
  /** Clé de dictionnaire (`error.*`) — traduite à l'affichage par `t()`. */
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  readonly cvs = computed(() => {
    const lang = this.i18n.lang();
    const list = this._cvs();
    return lang === 'fr' ? list : list.map((c) => localizeCv(c, lang));
  });
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  /**
   * Sélection en cours. `null` = « aucune version choisie » ; le sélecteur
   * retombe alors sur la première entrée de la liste.
   */
  readonly selectedId = signal<string | null>(null);

  /** CV actuellement proposé, ou `null` si aucun CV n'est disponible. */
  readonly selectedCv = computed<Cv | null>(() => {
    const all = this.cvs();
    if (all.length === 0) return null;
    const id = this.selectedId();
    return all.find((c) => c.id === id) ?? all[0];
  });

  load(): void {
    if (this.loaded || this._loading()) return;

    this._loading.set(true);
    this._error.set(null);

    this.http
      .get<Cv[]>(this.dataUrl)
      .pipe(
        tap((items) => {
          this._cvs.set(items);
          this.loaded = true;
        }),
        catchError(() => {
          this._error.set('error.cvs');
          return of([] as Cv[]);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe();
  }

  select(id: string): void {
    this.selectedId.set(id);
  }
}
