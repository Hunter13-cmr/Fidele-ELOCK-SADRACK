import { Component, OnInit, inject } from '@angular/core';
import { CertificationsService } from '../../core/services/certifications.service';
import { injectT } from '../../core/services/i18n.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements OnInit {
  private readonly certificationsService = inject(CertificationsService);

  protected readonly t = injectT();

  readonly year = new Date().getFullYear();

  /** Nombre de certifications issu des données : plus de total en dur à maintenir. */
  readonly certificationsCount = this.certificationsService.certificationsCount;

  ngOnInit(): void {
    this.certificationsService.load();
  }
}
