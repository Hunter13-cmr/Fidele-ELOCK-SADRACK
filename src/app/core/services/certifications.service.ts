import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { catchError, finalize, of, tap } from 'rxjs';

import { localizeCertification } from '../i18n/translate';
import { Certification, CertificationOrg } from '../models/certification.model';
import { I18nService } from './i18n.service';

/**
 * Charge les certifications depuis un JSON local via HttpClient.
 * `certifications` est localisé (FR/EN) via `localizeCertification`.
 */
@Injectable({ providedIn: 'root' })
export class CertificationsService {
  private readonly http = inject(HttpClient);
  private readonly i18n = inject(I18nService);
  private readonly dataUrl = 'assets/data/certifications.json';

  private readonly _certifications = signal<Certification[]>([]);
  private readonly _loading = signal(false);
  /** Clé de dictionnaire (`error.*`) — traduite à l'affichage par `t()`. */
  private readonly _error = signal<string | null>(null);
  private loaded = false;

  /** Organisation active pour le filtre. null = toutes. */
  private readonly _activeOrg = signal<CertificationOrg | null>(null);

  readonly certifications = computed(() => {
    const lang = this.i18n.lang();
    const list = this._certifications();
    return lang === 'fr' ? list : list.map((c) => localizeCertification(c, lang));
  });
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();
  readonly activeOrg = this._activeOrg.asReadonly();

  /** Organisations réellement présentes dans le JSON, triées par libellé. */
  readonly organizations = computed<{ id: CertificationOrg; label: string }[]>(() => {
    const map = new Map<CertificationOrg, string>();
    for (const c of this._certifications()) map.set(c.organization, c.organizationLabel);
    return [...map.entries()]
      .map(([id, label]) => ({ id, label }))
      .sort((a, b) => a.label.localeCompare(b.label, 'en'));
  });

  /** Nombre de certifications d'une organisation donnée. */
  countFor(org: CertificationOrg): number {
    return this._certifications().filter((c) => c.organization === org).length;
  }

  readonly filteredCertifications = computed(() => {
    const org = this._activeOrg();
    const list = this.certifications();
    if (!org) return list;
    return list.filter((c) => c.organization === org);
  });

  readonly certificationsCount = computed(() => this._certifications().length);

  /**
   * Nombre d'organisations distinctes ayant délivré les certifications — source
   * unique du compteur « Organisations certifiantes » de la barre de
   * statistiques. Se recalcule automatiquement si une certification est
   * ajoutée ou retirée de `assets/data/certifications.json`.
   */
  readonly organizationsCount = computed(
    () => new Set(this._certifications().map((c) => c.organization)).size
  );

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
          this._error.set('error.certs');
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
