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
 * blanche, sur deux lignes alignées à gauche (jamais « Orange » centré
 * au-dessus de « Digital Center »).
 *
 * Si le nom complet occupe plus de deux lignes dans un conteneur étroit,
 * le composant bascule sur le sigle « ODC » en orange, sans pastille.
 * La bascule est mesurée au nombre réel de lignes rendues (ResizeObserver),
 * et non d'après la largeur de l'écran : elle se déclenche donc aussi bien
 * sur mobile que sur desktop, par exemple dans une colonne étroite.
 *
 * En mode compact, la pastille reste dans le flux (invisible, à hauteur
 * nulle) : elle conserve la largeur sur laquelle le texte se retourne, ce
 * qui rend la mesure stable et réversible dans les deux sens. Le sigle est
 * un bloc posé au bord gauche, à la même abscisse et à la même hauteur de
 * ligne que les libellés d'organisme des cartes (ALX, FORTINET, TME).
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

      /* Colonne : la pastille est au-dessus, le sigle compact en dessous,
         tous deux calés à gauche sur la même abscisse. */
      .odc-wrap {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        max-width: 100%;
      }

      /* Pastille unique contenant les deux lignes, alignées à gauche :
         « Orange » n'est pas centré au-dessus de « Digital Center ».
         white-space: normal garantit le retournement du texte quel que soit
         le conteneur d'accueil (certains imposent nowrap). */
      .odc-full {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        background: #f2f4f8;
        border-radius: 3px;
        padding: 2px 8px;
        line-height: 1.15;
        white-space: normal;
      }
      /* Les lignes ne rétrécissent pas : dans la pastille repliée
         (height: 0) elles gardent leur hauteur réelle, indispensable au
         comptage du nombre de lignes. */
      .odc-line {
        flex-shrink: 0;
      }
      .odc-orange {
        color: #c2410c;
        font-weight: 600;
      }
      .odc-center {
        color: #0a0e14;
        font-weight: 600;
      }

      /* Sigle court : orange de marque, sans pastille. Mêmes métriques que
         les libellés d'organisme des cartes .cert-org — font-weight 500,
         letter-spacing 0.06em — pour s'aligner avec ALX, FORTINET, TME. */
      .odc-abbr {
        display: none;
        color: #ff7900;
        font-weight: 500;
        letter-spacing: 0.06em;
      }

      /* Mode compact : la pastille reste dans le flux — elle conserve la
         largeur sur laquelle le texte se retourne, ce qui rend la mesure
         stable et réversible — mais elle prend ni hauteur ni visibilité.
         Le sigle, en bloc sous elle, s'affiche donc au bord gauche, à la
         même abscisse que le texte des autres organisations. */
      .odc-wrap-compact .odc-full {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        overflow: hidden;
        visibility: hidden;
      }
      .odc-wrap-compact .odc-abbr {
        display: block;
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