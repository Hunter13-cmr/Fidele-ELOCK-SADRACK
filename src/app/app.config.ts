import { ApplicationConfig, provideZonelessChangeDetection } from '@angular/core';
import {
  PreloadAllModules,
  TitleStrategy,
  provideRouter,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { I18nTitleStrategy } from './core/services/i18n-title.strategy';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' }),
      // Les 8 routes sont en lazy-loading ; on précharge leurs chunks dès le
      // premier rendu pour que la navigation soit immédiate (perf percée).
      withPreloading(PreloadAllModules)
    ),
    provideHttpClient(),
    // Titre de document localisé (FR/EN), réappliqué au changement de langue.
    { provide: TitleStrategy, useClass: I18nTitleStrategy },
  ],
};

