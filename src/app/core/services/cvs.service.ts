import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { Cv } from '../models/cv.model';

/**
 * Charge les versions de CV depuis un JSON local via HttpClient.
 *
 * Le sélecteur du header et celui de la page contact consomment ce service :
 * ajouter une troisième version du CV ne demande qu'une entrée dans
 * `assets/data/cvs.json`.
 */
@Injectable({ providedIn: 'root' })
export class CvsService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/cvs.json';

  private readonly _cvs = signal<Cv[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  readonly cvs = this._cvs.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  /**
   * Sélection en cours. `null` = « aucune version choisie » ; le sélecteur
   * retombe alors sur la première entrée de la liste.
   */
  readonly selectedId = signal<string | null>(null);

  /** CV actuellement proposé, ou `null` si aucun CV n'est disponible. */
  readonly selectedCv = computed<Cv | null>(() => {
    const all = this._cvs();
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
          this._error.set('Sélection du CV indisponible pour le moment.');
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