import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
  viewChild,
} from '@angular/core';

/**
 * Nom de l'organisme « Orange Digital Center ».
 *
 * « Orange » et « Digital Center » sont réunis dans une seule pastille
 * blanche, sur deux lignes.
 *
 * Si ces deux lignes ne tiennent pas — « Digital Center » passe alors sur
 * plusieurs lignes dans un conteneur étroit — le composant bascule sur le
 * sigle « ODC » en orange, sans pastille. La bascule est mesurée au nombre
 * réel de lignes rendues (ResizeObserver), et non d'après la largeur de
 * l'écran : elle se déclenche donc aussi bien sur mobile que sur desktop,
 * par exemple dans une colonne étroite.
 *
 * Deux oranges sont nécessaires : sur la pastille blanche il faut un orange
 * soutenu (#C2410C, 4,7:1) pour rester lisible, alors que sur le fond sombre
 * du site l'orange de marque (#FF7900, 7,4:1) est bien plus contrasté.
 */
@Component({
  selector: 'app-odc-brand',
  standalone: true,
  imports: [],
  template: `
    <span class="odc-wrap" [class.odc-wrap-compact]="compact()">
      <span #full class="odc-full">
        <span class="odc-line odc-orange">Orange</span>
        <span class="odc-line odc-center">Digital Center</span>
      </span>
      <span class="odc-abbr">ODC</span>
    </span>
    <span class="sr-only">{{ label() }}</span>
  `,
  styles: [
    `
      :host {
        display: inline-block;
        max-width: 100%;
      }

      .odc-wrap {
        display: inline-flex;
        align-items: center;
        max-width: 100%;
      }

      /* Pastille unique contenant les deux lignes. */
      .odc-full {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        background: #f2f4f8;
        border-radius: 3px;
        padding: 2px 8px;
        line-height: 1.15;
      }
      .odc-orange {
        color: #c2410c;
        font-weight: 600;
      }
      .odc-center {
        color: #0a0e14;
        font-weight: 600;
      }

      /* Sigle court : orange de marque, sans pastille. */
      .odc-abbr {
        display: none;
        color: #ff7900;
        font-weight: 600;
      }

      /* En mode compact la pastille est repliee mais reste dans le flux de
         mise en page des enfants : ils conservent leur largeur et peuvent
         toujours etre mesures. */
      .odc-wrap-compact .odc-full {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        overflow: hidden;
        visibility: hidden;
      }
      .odc-wrap-compact .odc-abbr {
        display: inline;
      }

      .sr-only {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
    `,
  ],
})
export class OdcBrand {
  /** Texte annonce aux lecteurs d'ecran lorsque le sigle remplace le nom. */
  readonly label = input('Orange Digital Center');

  /** Vrai quand le nom complet deborde : le sigle prend le relais. */
  protected readonly compact = signal(false);

  private readonly full = viewChild<ElementRef<HTMLElement>>('full');
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const host = this.full()?.nativeElement.parentElement;
      if (!host) return;
      const ro = new ResizeObserver(() => this.measure());
      ro.observe(host);
      this.destroyRef.onDestroy(() => ro.disconnect());
      this.measure();
    });
  }

  /** Compte les lignes reellement rendues ; au-dela de deux, on abrege. */
  private measure(): void {
    const full = this.full()?.nativeElement;
    if (!full) return;
    const lineHeight = parseFloat(getComputedStyle(full).lineHeight) || 13;
    let lines = 0;
    for (const child of Array.from(full.children) as HTMLElement[]) {
      lines += Math.max(1, Math.round(child.offsetHeight / lineHeight));
    }
    this.compact.set(lines > 2);
  }
}