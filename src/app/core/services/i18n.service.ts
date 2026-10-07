import { Injectable, computed, inject } from '@angular/core';

import { EN } from '../i18n/en';
import { FR } from '../i18n/fr';
import { PreferencesService } from './preferences.service';

export type I18nParams = Record<string, string | number>;

/**
 * Traduction de l'interface (UI chrome).
 *
 * - Dictionnaires TypeScript embarques dans le bundle : aucun appel HTTP,
 *   aucun decodage a l'execution — le cout perf est nul.
 * - `t()` lit un `computed` lie au signal `lang` : appeler `t()` depuis un
 *   template re-rend automatiquement ce template au changement de langue
 *   (suivi des signaux pendant la detection de changement zoneless).
 * - Clé inconnue => retombe sur le FR puis sur la cle elle-meme (jamais de
 *   trou visuel ; `_chk_i18n.cjs` garantit la parite des deux dictionnaires).
 */
@Injectable({ providedIn: 'root' })
export class I18nService {
  private readonly prefs = inject(PreferencesService);

  /** Signal de langue partage (source : PreferencesService). */
  readonly lang = this.prefs.lang;

  private readonly dict = computed(() => (this.lang() === 'fr' ? FR : EN));

  t(key: string, params?: I18nParams): string {
    let text = this.dict()[key] ?? FR[key] ?? key;
    if (params) {
      for (const [name, value] of Object.entries(params)) {
        text = text.split(`{${name}}`).join(String(value));
      }
    }
    return text;
  }
}

/**
 * À appeler en contexte d'injection (champ de composant) :
 * `protected readonly t = injectT();` puis `{{ t('nav.about') }}` en template.
 * La référence est stable et `t()` lit le signal `lang` à chaque évaluation :
 * le binding se re-rend au changement de langue, sans pipe ni service agrégé.
 */
export function injectT(): (key: string, params?: I18nParams) => string {
  const i18n = inject(I18nService);
  return (key, params) => i18n.t(key, params);
}
