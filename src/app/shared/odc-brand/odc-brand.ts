import { Component, input } from '@angular/core';

/**
 * Nom de l'organisme « Orange Digital Center ».
 *
 * « Orange » en orange de marque au-dessus de « Digital Center ». Ce dernier
 * est en noir — la demande initiale du titulaire — sur une pastille claire :
 * le fond du site étant très sombre (#0A0E14), du noir y serait invisible
 * (contraste 1,09:1). La pastille rend le noir lisible partout, sans avoir à
 * déplacer ni changer la teinte du fond.
 *
 * En dessous de 640 px, le nom long tiendrait sur trois lignes et gondolerait
 * la mise en page : le sigle « ODC » en orange prend alors le relais.
 */
@Component({
  selector: 'app-odc-brand',
  standalone: true,
  imports: [],
  template: `
    <span class="odc-full">
      <span class="odc-orange">Orange</span>
      <span class="odc-center">Digital Center</span>
    </span>
    <span class="odc-abbr">ODC</span>
    <span class="sr-only">{{ label() }}</span>
  `,
  styles: [
    `
      :host { display: inline-block; }

      .odc-full {
        display: inline-flex;
        flex-direction: column;
        align-items: flex-start;
        line-height: 1.1;
        vertical-align: middle;
      }
      .odc-orange {
        color: #ff7900;
        font-weight: 600;
      }
      .odc-center {
        color: #0a0e14;
        background: #f2f4f8;
        border-radius: 2px;
        padding: 0 4px;
        font-weight: 600;
      }
      .odc-abbr {
        color: #ff7900;
        font-weight: 600;
        display: none;
      }

      /* Sur mobile, le nom complet tiendrait sur plusieurs lignes : le sigle
         court prend sa place. */
      @media (max-width: 640px) {
        .odc-full { display: none; }
        .odc-abbr { display: inline; }
      }

      /* Reserve aux lecteurs d'ecran : le contenu visuel est purement decoratif. */
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
  /** Texte annonce aux lecteurs d'ecran lorsque le nom est abrege a l'ecran. */
  readonly label = input('Orange Digital Center');
}