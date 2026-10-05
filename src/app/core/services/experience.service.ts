import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { ExperienceEntry } from '../models/experience.model';

/**
 * Charge le parcours (postes + formations) depuis un JSON local via HttpClient.
 *
 * La page « À propos » ne contient plus de contenu en dur : ajouter une ligne
 * à `assets/data/experience.json` suffit à la voir apparaître.
 */
@Injectable({ providedIn: 'root' })
export class ExperienceService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/experience.json';

  private readonly _entries = signal<ExperienceEntry[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  readonly entries = this._entries.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  /** Postes et formations, du plus récent au plus ancien. */
  readonly jobs = computed(() => this._entries().filter((e) => e.kind === 'job'));
  readonly training = computed(() => this._entries().filter((e) => e.kind === 'training'));

  /** Durée totale d'expérience professionnelle, en mois. */
  readonly jobsCount = computed(() => this.jobs().length);

  load(): void {
    if (this.loaded || this._loading()) return;

    this._loading.set(true);
    this._error.set(null);

    this.http
      .get<ExperienceEntry[]>(this.dataUrl)
      .pipe(
        tap((items) => {
          this._entries.set(items);
          this.loaded = true;
        }),
        catchError(() => {
          this._error.set('Parcours indisponible pour le moment.');
          return of([] as ExperienceEntry[]);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe();
  }
}