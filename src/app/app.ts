import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Footer } from './layout/footer/footer';
import { ProfileCard } from './features/home/components/profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly destroyRef = inject(DestroyRef);
  private introTimeout?: ReturnType<typeof setTimeout>;

  /**
   * La route d'accueil est lazy : aucun pixel ne s'affiche tant que le chunk
   * `home` n'est pas téléchargé. L'intro est donc montée ICI, dans la racine,
   * et non plus dans `Home` : `ProfileCard` entre ainsi dans le bundle initial
   * et devient le premier élément rendu à l'ouverture du site.
   *
   * Résolu de façon synchrone au construit pour être présent dès le premier
   * paint, et uniquement sur la page d'accueil (l'intro n'a aucun sens sur
   * `/projects`). `typeof window` protège le cas d'un rendu serveur.
   */
  private readonly homeEntry =
    typeof window !== 'undefined' &&
    (window.location.pathname === '/' || window.location.pathname.endsWith('/index.html'));

  readonly showProfileIntro = signal(this.homeEntry);

  constructor() {
    afterNextRender(() => {
      if (!this.homeEntry) return;
      this.introTimeout = setTimeout(() => this.showProfileIntro.set(false), 2000);
    });

    this.destroyRef.onDestroy(() => {
      if (this.introTimeout) {
        clearTimeout(this.introTimeout);
      }
    });
  }
}
