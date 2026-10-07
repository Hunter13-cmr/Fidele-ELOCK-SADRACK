import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CvsService } from '../../core/services/cvs.service';
import { I18nParams, I18nService } from '../../core/services/i18n.service';
import { PreferencesService } from '../../core/services/preferences.service';
import { CvPicker } from '../../shared/cv-picker/cv-picker';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CvPicker],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header implements OnInit {
  private readonly cvsService = inject(CvsService);
  private readonly i18n = inject(I18nService);

  /** Préférences (langue + thème) exposées pour les toggles du header. */
  protected readonly prefs = inject(PreferencesService);

  /**
   * Raccourci de traduction lié à un `arrow function` (référence stable) :
   * `t()` lit le signal `lang` à chaque évaluation, donc chaque binding du
   * template se re-rend au changement de langue (zoneless, sans pipe).
   */
  protected readonly t = (key: string, params?: I18nParams): string =>
    this.i18n.t(key, params);

  readonly menuOpen = signal(false);

  ngOnInit(): void {
    this.cvsService.load();
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

