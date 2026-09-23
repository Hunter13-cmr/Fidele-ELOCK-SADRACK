import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { Certification, CertificationOrg } from '../models/certification.model';

/**
 * Charge les certifications depuis un JSON local via HttpClient.
 */
@Injectable({ providedIn: 'root' })
export class CertificationsService {
  private readonly http = inject(HttpClient);
  private readonly dataUrl = 'assets/data/certifications.json';

  private readonly _certifications = signal<Certification[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  /** Organisation active pour le filtre. null = toutes. */
  private readonly _activeOrg = signal<CertificationOrg | null>(null);

  readonly certifications = this._certifications.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly activeOrg = this._activeOrg.asReadonly();

  readonly filteredCertifications = computed(() => {
    const org = this._activeOrg();
    if (!org) return this._certifications();
    return this._certifications().filter((c) => c.organization === org);
  });

  readonly certificationsCount = computed(() => this._certifications().length);

  load(): void {
    if (this.loaded || this._loading()) return;

    this._loading.set(true);
    this._error.set(null);

    this.http
      .get<Certification[]>(this.dataUrl)
      .pipe(
        tap((items) => {
          this._certifications.set(items);
          this.loaded = true;
        }),
        catchError(() => {
          this._error.set('Impossible de charger les certifications pour le moment.');
          return of([] as Certification[]);
        }),
        finalize(() => this._loading.set(false))
      )
      .subscribe();
  }

  setActiveOrg(org: CertificationOrg | null): void {
    this._activeOrg.set(org);
  }
}