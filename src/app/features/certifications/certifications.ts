import { Component, OnInit, inject, signal } from '@angular/core';
import { CertificationsService } from '../../core/services/certifications.service';
import { Certification, CertificationOrg } from '../../core/models/certification.model';

@Component({
  selector: 'app-certifications',
  standalone: true,
  templateUrl: './certifications.html',
  styleUrl: './certifications.css',
})
export class Certifications implements OnInit {
  private readonly certificationsService = inject(CertificationsService);

  readonly certifications = this.certificationsService.filteredCertifications;
  readonly loading = this.certificationsService.loading;
  readonly error = this.certificationsService.error;
  readonly activeOrg = this.certificationsService.activeOrg;

  readonly selectedCert = signal<Certification | null>(null);
  readonly modalOpen = signal(false);

  ngOnInit(): void {
    this.certificationsService.load();
  }

  setFilter(org: CertificationOrg | null): void {
    this.certificationsService.setActiveOrg(org);
  }

  openModal(cert: Certification): void {
    this.selectedCert.set(cert);
    this.modalOpen.set(true);
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.modalOpen.set(false);
    document.body.style.overflow = '';
  }

  onBackdropClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).classList.contains('cert-modal-backdrop')) {
      this.closeModal();
    }
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeModal();
    }
  }
}