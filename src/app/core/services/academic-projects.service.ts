import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { localizeAcademic } from '../i18n/translate';
import { AcademicProject } from '../models/academic-project.model';
import { I18nService } from './i18n.service';

/**
 * Charge les projets académiques (travaux de formation ALX / ODC) depuis un
 * JSON local via HttpClient.
 *
 * Ces projets ne sont pas affichés dans la page « Projets » : ils servent
 * uniquement à alimenter le compteur « Projets académiques » de la barre de
 * statistiques de la page d'accueil. Ajouter ou supprimer une entrée dans
 * `assets/data/academic-projects.json` met le compteur à jour automatiquement.
 */
@Injectable({ providedIn: 'root' })
export class AcademicProjectsService {
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(I18nService);
  private readonly dataUrl = 'assets/data/academic-projects.json';

  private readonly _projects = signal<AcademicProject[]>([]);
  private readonly _loading = signal(false);
  /** Clé de dictionnaire (`error.*`) — traduite à l'affichage par `t()`. */
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  readonly projects = computed(() => {
    const lang = this.i18n.lang();
    const list = this._projects();
    return lang === 'fr' ? list : list.map((p) => localizeAcademic(p, lang));
  });
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  /** Nombre de projets académiques — source unique de ce compteur. */
  readonly projectsCount = computed(() => this._projects().length);

  /** Déclenche le chargement une seule fois (mis en cache côté signal). */
  load(): void {
    if (this.loaded || this._loading()) {
      return;
    }
    this._loading.set(true);
    this._error.set(null);

    this.http
      .get<AcademicProject[]>(this.dataUrl)
      .pipe(
        tap((projects) => {
          this._projects.set(projects);
          this.loaded = true;
        }),
        catchError(() => {
          this._error.set('error.academic');
          return of([] as AcademicProject[]);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe();
  }
}