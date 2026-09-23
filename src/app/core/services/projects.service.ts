import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { Project } from '../models/project.model';

/**
 * Charge les projets depuis un JSON local via HttpClient (démonstration
 * volontaire d'un flux Observable -> Signal, sans backend fictif).
 */
@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/projects.json';

  private readonly _projects = signal<Project[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  readonly projects = this._projects.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly featuredProjects = computed(() => this._projects().filter((p) => p.featured));

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
          this._error.set('Impossible de charger les projets pour le moment.');
          return of([] as Project[]);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe();
  }

  getBySlug(slug: string): Project | undefined {
    return this._projects().find((p) => p.slug === slug);
  }
}
