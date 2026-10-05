import {
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  OnInit,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { CvsService } from '../../core/services/cvs.service';
import { Cv } from '../../core/models/cv.model';

/**
 * Sélecteur de CV, partagé par le header et la page contact.
 *
 * Sources de vérité : `assets/data/cvs.json` (liste des versions) et
 * `CvsService.selectedId` (version choisie). Ajouter une version ne demande
 * qu'une entrée de JSON — aucun template à modifier.
 *
 * Accessibilité : bouton `aria-haspopup` / `aria-expanded`, panneau
 * `role="menu"`, entrées `role="menuitemradio"` avec `aria-checked`,
 * navigation clavier ↑ ↓ Home End, Échap avec restitution du focus.
 */
@Component({
  selector: 'app-cv-picker',
  standalone: true,
  imports: [],
  templateUrl: './cv-picker.html',
  styleUrl: './cv-picker.css',
})
export class CvPicker implements OnInit {
  private readonly cvsService = inject(CvsService);
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  readonly cvs = this.cvsService.cvs;
  readonly loading = this.cvsService.loading;
  readonly error = this.cvsService.error;
  readonly selectedCv = this.cvsService.selectedCv;

  readonly open = signal(false);
  /** Index de l'entrée qui a le focus dans le menu (navigué au clavier). */
  readonly activeIndex = signal(0);

  /** Variante d'affichage : `header` (bouton) ou `inline` (liste, page contact). */
  readonly variant = signal<'header' | 'inline'>('header');

  private readonly trigger = viewChild<ElementRef<HTMLButtonElement>>('trigger');
  private readonly menu = viewChild<ElementRef<HTMLElement>>('menu');

  /** Un seul CV : inutile d'afficher un menu, un lien direct suffit. */
  readonly singleCv = computed(() => (this.cvs().length === 1 ? this.cvs()[0] : null));

  ngOnInit(): void {
    this.cvsService.load();
  }

  setVariant(v: 'header' | 'inline'): void {
    this.variant.set(v);
  }

  toggle(): void {
    this.open.update((o) => !o);
    if (this.open()) {
      const idx = this.cvs().findIndex((c) => c.id === this.selectedCv()?.id);
      this.activeIndex.set(idx >= 0 ? idx : 0);
    }
  }

  close(restoreFocus = false): void {
    if (!this.open()) return;
    this.open.set(false);
    if (restoreFocus) {
      this.trigger()?.nativeElement.focus();
    }
  }

  /** Sélectionne une version et ferme le menu. */
  choose(cv: Cv): void {
    this.cvsService.select(cv.id);
    this.close();
    this.trigger()?.nativeElement.focus();
  }

  onTriggerKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.toggle();
      if (this.open()) this.focusActive();
    }
  }

  onMenuKeydown(event: KeyboardEvent): void {
    const items = this.cvs();
    if (items.length === 0) return;

    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.close(true);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.activeIndex.update((i) => (i + 1) % items.length);
        this.focusActive();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.activeIndex.update((i) => (i - 1 + items.length) % items.length);
        this.focusActive();
        break;
      case 'Home':
        event.preventDefault();
        this.activeIndex.set(0);
        this.focusActive();
        break;
      case 'End':
        event.preventDefault();
        this.activeIndex.set(items.length - 1);
        this.focusActive();
        break;
      case 'Tab':
        // Tab ferme le menu sans piéger l'utilisateur dedans.
        this.close();
        break;
    }
  }

  private focusActive(): void {
    const el = this.menu()?.nativeElement.querySelectorAll<HTMLElement>('[role="menuitemradio"]');
    el?.[this.activeIndex()]?.focus();
  }

  /** Échap ferme le menu même si le focus est sorti du panneau. */
  @HostListener('document:keydown.escape')
  onDocumentEscape(): void {
    this.close(true);
  }

  /** Clic à l'extérieur du composant : ferme le menu. */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.open()) return;
    const el = this.host.nativeElement;
    if (!el.contains(event.target as Node)) {
      this.close();
    }
  }
}