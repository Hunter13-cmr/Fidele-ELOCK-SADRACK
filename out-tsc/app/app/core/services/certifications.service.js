import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';
import * as i0 from "@angular/core";
/**
 * Charge les certifications depuis un JSON local via HttpClient.
 */
export class CertificationsService {
    http = inject(HttpClient);
    dataUrl = 'assets/data/certifications.json';
    _certifications = signal([], /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_certifications" }] : /* istanbul ignore next */ []));
    _loading = signal(false, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_loading" }] : /* istanbul ignore next */ []));
    _error = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_error" }] : /* istanbul ignore next */ []));
    loaded = false;
    /** Organisation active pour le filtre. null = toutes. */
    _activeOrg = signal(null, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "_activeOrg" }] : /* istanbul ignore next */ []));
    certifications = this._certifications.asReadonly();
    loading = this._loading.asReadonly();
    error = this._error.asReadonly();
    activeOrg = this._activeOrg.asReadonly();
    filteredCertifications = computed(() => {
        const org = this._activeOrg();
        if (!org)
            return this._certifications();
        return this._certifications().filter((c) => c.organization === org);
    }, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "filteredCertifications" }] : /* istanbul ignore next */ []));
    certificationsCount = computed(() => this._certifications().length, /* @ts-ignore */
    ...(ngDevMode ? [{ debugName: "certificationsCount" }] : /* istanbul ignore next */ []));
    load() {
        if (this.loaded || this._loading())
            return;
        this._loading.set(true);
        this._error.set(null);
        this.http
            .get(this.dataUrl)
            .pipe(tap((items) => {
            this._certifications.set(items);
            this.loaded = true;
        }), catchError(() => {
            this._error.set('Impossible de charger les certifications pour le moment.');
            return of([]);
        }), finalize(() => this._loading.set(false)))
            .subscribe();
    }
    setActiveOrg(org) {
        this._activeOrg.set(org);
    }
    static ɵfac = function CertificationsService_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || CertificationsService)(); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CertificationsService, factory: CertificationsService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CertificationsService, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=certifications.service.js.map