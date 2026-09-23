import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Charge les projets depuis un JSON local via HttpClient (démonstration
 * volontaire d'un flux Observable -> Signal, sans backend fictif).
 */
export class ProjectsService {
    http = inject(HttpClient);
    dataUrl = 'assets/data/projects.json';
    _projects = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_projects" }] : /* istanbul ignore next */ []));
    _loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_loading" }] : /* istanbul ignore next */ []));
    _error = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_error" }] : /* istanbul ignore next */ []));
    loaded = false;
    projects = this._projects.asReadonly();
    loading = this._loading.asReadonly();
    error = this._error.asReadonly();
    featuredProjects = computed(() => this._projects().filter((p) => p.featured), /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "featuredProjects" }] : /* istanbul ignore next */ []));
    /** Déclenche le chargement une seule fois (mis en cache côté signal). */
    load() {
        if (this.loaded || this._loading()) {
            return;
        }
        this._loading.set(true);
        this._error.set(null);
        this.http
            .get(this.dataUrl)
            .pipe(tap((projects) => {
            this._projects.set(projects);
            this.loaded = true;
        }), catchError(() => {
            this._error.set('Impossible de charger les projets pour le moment.');
            return of([]);
        }), finalize(() => this._loading.set(false)))
            .subscribe();
    }
    getBySlug(slug) {
        return this._projects().find((p) => p.slug === slug);
    }
    static ɵfac = function ProjectsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || ProjectsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ProjectsService, factory: ProjectsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProjectsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=projects.service.js.map