import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
  computed,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CertificationsService } from '../../core/services/certifications.service';
import { Certification, CertificationOrg } from '../../core/models/certification.model';
import { OdcBrand } from '../../shared/odc-brand/odc-brand';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [OdcBrand],
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications implements OnInit {
  private readonly certificationsService = inject(CertificationsService);
  private readonly destroyRef = inject(DestroyRef);

  readonly certifications = this.certificationsService.filteredCertifications;
  readonly allCertifications = this.certificationsService.certifications;
  readonly loading = this.certificationsService.loading;
  readonly error = this.certificationsService.error;
  readonly activeOrg = this.certificationsService.activeOrg;

  /** Compteurs de la barre de filtres : toujours calculés sur la liste complète. */
  readonly countAll = computed(() => this.allCertifications().length);
  /** Organisations présentes dans le JSON — la barre de filtres se construit dessus. */
  readonly organizations = this.certificationsService.organizations;
  readonly countFor = (org: CertificationOrg) => this.certificationsService.countFor(org);

  readonly selectedCert = signal<Certification | null>(null);
  readonly modalOpen = signal(false);

  private previousFocus: HTMLElement | null = null;
  private readonly modal = viewChild<ElementRef<HTMLElement>>('certModal');

  constructor() {
    // Amène le focus dans la boîte de dialogue dès qu'elle est rendue.
    effect(() => {
      if (this.modalOpen() && this.modal()) {
        this.modal()!.nativeElement.focus();
      }
    });

    // Sécurité : libère le scroll du body si la vue est détruite avec le modal ouvert.
    this.destroyRef.onDestroy(() => {
      if (this.modalOpen()) {
        document.body.style.overflow = '';
      }
    });
  }

  ngOnInit(): void {
    this.certificationsService.load();
  }

  setFilter(org: CertificationOrg | null): void {
    this.certificationsService.setActiveOrg(org);
  }

  openModal(cert: Certification): void {
    this.previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    this.selectedCert.set(cert);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    if (!this.modalOpen()) return;
    this.modalOpen.set(false);
    this.selectedCert.set(null);
    document.body.style.overflow = '';
    const target = this.previousFocus;
    this.previousFocus = null;
    if (target && target.isConnected) {
      target.focus();
    }
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('cert-modal-backdrop')) {
      this.closeModal();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
      return;
    }
    if (event.key !== 'Tab') return;

    // Piège de focus : on reste dans la boîte de dialogue (WCAG 2.4.3).
    const dialog = this.modal()?.nativeElement;
    if (!dialog) return;
    const focusables = Array.from(
      dialog.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
    );
    if (focusables.length === 0) {
      event.preventDefault();
      return;
    }
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    const active = document.activeElement;
    if (event.shiftKey && (active === first || active === dialog)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /** Escape fonctionne même si le focus est sorti de la boîte de dialogue. */
  @HostListener('document:keydown.escape')
  onDocumentEscape(): void {
    this.closeModal();
  }
}