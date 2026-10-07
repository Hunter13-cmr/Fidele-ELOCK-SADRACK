import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { localizeProject } from '../i18n/translate';
import { Project } from '../models/project.model';
import { I18nService } from './i18n.service';

/**
 * Charge les projets depuis un JSON local via HttpClient (démonstration
 * volontaire d'un flux Observable -> Signal, sans backend fictif).
 *
 * `projects` est localisé (FR/EN) : le `computed` se recalcule au changement
 * de langue, les templates re-rendent sans recharger le JSON.
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(I18nService);
  private readonly dataUrl = 'assets/data/projects.json';

  private readonly _projects = signal<Project[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  readonly projects = computed(() => {
    const lang = this.i18n.lang();
    const list = this._projects();
    return lang === 'fr' ? list : list.map((p) => localizeProject(p, lang));
  });
  readonly loading = this._loading.asReadonly();
  /** Clé de dictionnaire (`error.*`) — traduite à l'affichage par `t()`. */
  readonly error = this._error.asReadonly();

  readonly featuredProjects = computed(() => this.projects().filter((p) => p.featured));

  /**
   * Nombre total de projets — source unique du compteur « Projets réalisés »
   * de la barre de statistiques (page d'accueil).
   */
  readonly projectsCount = computed(() => this._projects().length);

  /** Déclenche le chargement une seule fois (mis en cache côté signal). */
  load(): void {
    if (this.loaded || this._loading()) {
      return;
    }
    this._loading.set(true);
    this._error.set(null);

    this.http
      .get<Project[]>(this.dataUrl)
      .pipe(
        tap((projects) => {
          this._projects.set(projects);
          this.loaded = true;
        }),
        catchError(() => {
          this._error.set('error.projects');
          return of([] as Project[]);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe();
  }

  getBySlug(slug: string): Project | undefined {
    return this.projects().find((p) => p.slug === slug);
  }
}

