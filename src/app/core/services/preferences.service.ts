import { Injectable, effect, signal } from '@angular/core';

import {
  APP_LANG_KEY,
  APP_THEME_KEY,
  type AppLang,
  type AppTheme,
} from '../models/preferences.model';

/** Lecture defensife de localStorage (mode navigation privee = exception). */
function readStored(key: string, allowed: readonly string[], fallback: string): string {
  try {
    const value = localStorage.getItem(key);
    if (value && allowed.includes(value)) return value;
  } catch {
    /* stockage indisponible : on garde la valeur par defaut */
  }
  return fallback;
}

const LANGS: readonly AppLang[] = ['fr', 'en'];
const THEMES: readonly AppTheme[] = ['dark', 'light'];

/** Descriptions meta : le SEO francais reste en dur dans index.html (crawl non-JS). */
const META_DESCRIPTION: Record<AppLang, string> = {
  fr: `Portfolio de Fidèle Elock Sadrack, développeur Front-End Angular / Full Stack Junior, Douala, Cameroun. Angular Talent Lab 2026 — Orange Digital Center.`,
  en: `Portfolio of Fidèle Elock Sadrack, Front-End Angular / Junior Full Stack developer, Douala, Cameroon. Angular Talent Lab 2026 — Orange Digital Center.`,
};

const THEME_COLOR: Record<AppTheme, string> = { dark: '#0A0E14', light: '#F7F8FB' };

/**
 * Prefs utilisateur : langue (fr/en) et theme (dark/light).
 *
 * - Deux `signal` source de verite, consommes par `I18nService` et les templates.
 * - Persistance `localStorage` + application immediate sur `<html>`
 *   (`lang`, `data-theme`, meta `theme-color`).
 * - Le preboot inline de `index.html` applique les memes cles avant le
 *   bootstrap Angular : aucun flash de theme ni de langue.
 */
@Injectable({ providedIn: 'root' })
export class PreferencesService {
  readonly lang = signal<AppLang>(
    readStored(APP_LANG_KEY, LANGS, 'fr') as AppLang
  );
  readonly theme = signal<AppTheme>(
    readStored(APP_THEME_KEY, THEMES, 'dark') as AppTheme
  );

  constructor() {
    // Application initiale synchronne (l'effet ne tourne qu'apres le 1er CD).
    this.applyLang(this.lang());
    this.applyTheme(this.theme());

    effect(() => {
      const lang = this.lang();
      this.applyLang(lang);
      try {
        localStorage.setItem(APP_LANG_KEY, lang);
      } catch {
        /* ignore */
      }
    });

    effect(() => {
      const theme = this.theme();
      this.applyTheme(theme);
      try {
        localStorage.setItem(APP_THEME_KEY, theme);
      } catch {
        /* ignore */
      }
    });
  }

  toggleLang(): void {
    this.lang.update((l) => (l === 'fr' ? 'en' : 'fr'));
  }

  toggleTheme(): void {
    this.theme.update((t) => (t === 'dark' ? 'light' : 'dark'));
  }

  private applyLang(lang: AppLang): void {
    document.documentElement.lang = lang;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', META_DESCRIPTION[lang]);
  }

  private applyTheme(theme: AppTheme): void {
    document.documentElement.setAttribute('data-theme', theme);
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', THEME_COLOR[theme]);
  }
}
