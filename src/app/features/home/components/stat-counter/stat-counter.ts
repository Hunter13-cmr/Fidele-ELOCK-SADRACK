import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  effect,
  inject,
  input,
  signal,
  untracked,
} from '@angular/core';

/**
 * Compteur animé de la barre de statistiques.
 *
 * Le nombre affiché est purement dérivé de `value` : ce composant ne stocke
 * aucune donnée. branché sur un `computed` (issu d'un service), il suit donc
 * automatiquement les ajouts et suppressions :
 *
 *  - premier affichage : animation 0 → N quand l'élément entre à l'écran ;
 *  - mise à jour       : animation de la valeur affichée → la nouvelle valeur
 *                        (incrément comme décrément), sans passer par 0.
 *
 * `prefers-reduced-motion` : la valeur finale est écrite directement.
 */
@Component({
  selector: 'app-stat-counter',
  standalone: true,
  templateUrl: './stat-counter.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'stat-num' },
})
export class StatCounter {
  /** Valeur cible, calculée par le parent (jamais codée en dur dans le template). */
  readonly value = input.required<number>();

  /** Suffixe affiché après le nombre (« + » par défaut, chaîne vide pour un total). */
  readonly suffix = input<string>('+');

  /** Valeur actuellement affichée, interpolée par l'animation. */
  protected readonly display = signal(0);

  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  private observer?: IntersectionObserver;
  private frame?: number;
  private visible = false;
  private started = false;
  private reducedMotion = false;

  constructor() {
    // Suit `value` : à chaque changement, on anime depuis la valeur affichée.
    // `untracked` évite que la lecture de `display` dans l'animation ne
    // ré-abonne l'effet à lui-même.
    effect(() => {
      const target = this.value();
      untracked(() => this.animateTo(target));
    });

    afterNextRender(() => {
      this.reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            this.visible = true;
            this.observer?.unobserve(entry.target);
            this.animateTo(untracked(this.value));
          }
        },
        { threshold: 0.5 }
      );
      this.observer.observe(this.host.nativeElement);
    });

    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      if (this.frame !== undefined) {
        cancelAnimationFrame(this.frame);
        this.frame = undefined;
      }
    });
  }

  /**
   * Anime la valeur affichée jusqu'à `target`. Sans effet avant que l'élément
   * soit visible, et sans animation si la valeur ne change pas.
   */
  private animateTo(target: number): void {
    if (!this.visible) return;

    const safeTarget = Number.isFinite(target) ? target : 0;

    if (this.reducedMotion) {
      if (this.frame !== undefined) {
        cancelAnimationFrame(this.frame);
        this.frame = undefined;
      }
      this.display.set(safeTarget);
      this.started = true;
      return;
    }

    if (this.frame !== undefined) {
      cancelAnimationFrame(this.frame);
      this.frame = undefined;
    }

    const from = this.display();
    if (from === safeTarget) return;

    // Premier remplissage : 2 s pour le geste d'ouverture. Les mises à jour
    // suivantes sont plus courtes et proportionnelles à l'écart parcouru.
    const distance = Math.abs(safeTarget - from);
    const duration = this.started ? Math.min(1200, Math.max(500, distance * 200)) : 2000;
    const start = performance.now();
    this.started = true;

    const step = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);

      if (p < 1) {
        this.display.set(Math.round(from + (safeTarget - from) * eased));
        this.frame = requestAnimationFrame(step);
      } else {
        this.frame = undefined;
        this.display.set(safeTarget);
      }
    };

    this.frame = requestAnimationFrame(step);
  }
}