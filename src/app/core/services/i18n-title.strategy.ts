import { Injectable, effect, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

import { I18nService } from './i18n.service';

/** Cle de titre de route pour une URL donnee (`/projects/:slug` => detail). */
function titleKeyFor(url: string): string {
  const path = url.split('?')[0].split('#')[0];
  if (path === '/') return 'title.home';
  if (path === '/about') return 'title.about';
  if (path === '/projects') return 'title.projects';
  if (path.startsWith('/projects/')) return 'title.projectDetail';
  if (path === '/certifications') return 'title.certifications';
  if (path === '/contact') return 'title.contact';
  if (path.startsWith('/cv/')) return 'title.cv';
  return 'title.notFound';
}

/**
 * Titre de document localise, remplaçant la `TitleStrategy` par defaut.
 *
 * - A chaque navigation, le titre est pris dans le dictionnaire courant.
 * - Un `effect` reapplique le titre quand la langue change (memes routes,
 *   meme URL, titre traduit sans recharger la page).
 */
@Injectable({ providedIn: 'root' })
export class I18nTitleStrategy extends TitleStrategy {
  private readonly i18n = inject(I18nService);
  private readonly title = inject(Title);
  private lastSnapshot?: RouterStateSnapshot;

  constructor() {
    super();
    effect(() => {
      this.i18n.lang();
      if (this.lastSnapshot) {
        this.updateTitle(this.lastSnapshot);
      }
    });
  }

  override updateTitle(snapshot: RouterStateSnapshot): void {
    this.lastSnapshot = snapshot;
    this.title.setTitle(this.i18n.t(titleKeyFor(snapshot.url)));
  }
}
