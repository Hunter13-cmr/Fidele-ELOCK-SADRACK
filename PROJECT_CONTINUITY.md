# 📄 PROJECT CONTINUITY — Portfolio Angular

> **Document de continuation du projet**  
> Ce fichier agit comme une source de vérité unique pour tout nouvel agent IA (ou humain) amené à intervenir sur ce projet. Il doit être **mis à jour régulièrement** au fur et à mesure de l'avancement.
>
> **Dernière mise à jour :** 1er octobre 2026 — (Africa/Douala, UTC+1)  
> **Mis à jour par :** Agent IA courant

---

## 1. Résumé exécutif

Portfolio personnel de **Fidèle Elock Sadrack**, développeur Front-End Angular basé à Douala, Cameroun. Application Angular 22 (standalone components, zoneless change detection, signals, RxJS) présentant un CV interactif, des projets, des certifications et un formulaire de contact. Design sombre premium avec effets visuels avancés (globe 3D canvas, particules, animations CSS, effet tilt, curseur personnalisé).

---

## 2. Stack technique

| Couche | Technologie | Version |
|---|---|---|
| Framework | Angular | 22.0.0 |
| Langage | TypeScript | ~6.0.0 |
| Architecture | Standalone Components + Signal-based | — |
| Change Detection | Zoneless (`provideZonelessChangeDetection`) | — |
| Reactive | RxJS | ~7.8.0 |
| HTTP | `@angular/common/http` | — |
| CLI | `@angular/cli` | 22.0.0 |
| Déploiement | Vercel | — |
| Polices | Space Grotesk, Inter, JetBrains Mono | — |

### Scripts npm

```bash
npm start    # ng serve (dev, port 4200)
npm run build  # ng build (production)
npm run watch  # ng build --watch --configuration development
npm test     # ng test
```

### Variables CSS globales (design tokens)

Définies dans `src/styles.css` :
- Couleurs : `--color-bg` (#0A0E14), `--color-primary` (#F0A93E), `--color-secondary` (#4EC9A0), `--color-accent` (#7AA2F7), etc.
- Polices : `--font-display`, `--font-body`, `--font-mono`
- Ombres et grilles : `--shadow-card`, `--radius`, `--gradient-mesh`, etc.

---

## 3. Architecture du projet

```
portfolio-angular/
├── angular.json              # Configuration Angular CLI (build, serve)
├── package.json              # Dépendances et scripts
├── tsconfig.json             # Config TypeScript (strict mode)
├── tsconfig.app.json         # Config app (extends tsconfig.json)
├── vercel.json               # Configuration déploiement Vercel (SPA rewrite)
├── PROJECT_CONTINUITY.md     # ← Ce fichier
├── src/
│   ├── index.html            # HTML d'entrée (app-root)
│   ├── main.ts               # Bootstrap de l'application
│   ├── styles.css            # Styles globaux (tokens, utilitaires, responsive)
│   ├── app/
│   │   ├── app.ts            # Composant racine (app-root)
│   │   ├── app.html          # Template racine (header, intro carte, router-outlet, footer)
│   │   ├── app.css           # Styles racine
│   │   ├── app.config.ts     # Configuration (zonaless, router, http)
│   │   ├── app.routes.ts     # Routes (lazy loading)
│   │   ├── core/             # Services et modèles (singleton)
│   │   │   ├── models/
│   │   │   │   ├── project.model.ts
│   │   │   │   └── certification.model.ts
│   │   │   └── services/
│   │   │       ├── projects.service.ts
│   │   │       └── certifications.service.ts
│   │   ├── features/          # Pages par fonctionnalité
│   │   │   ├── home/          # Page d'accueil
│   │   │   │   ├── home.ts / home.html / home.css
│   │   │   │   └── components/
│   │   │   │   ├── globe/     # Globe 3D canvas
│   │   │   │   └── profile-card/  # Carte code stylisée (importée par app.ts → bundle initial)
│   │   │   ├── about/          # À propos (parcours)
│   │   │   ├── projects/        # Liste projets + filtres
│   │   │   ├── project-detail/  # Détail projet par slug
│   │   │   ├── certifications/  # Certifications + modal
│   │   │   ├── contact/          # Formulaire contact (Reactive Forms)
│   │   │   └── not-found/        # 404
│   │   └── layout/             # Layout global
│   │       ├── header/
│   │       └── footer/
│   └── assets/
│       ├── data/
│       │   ├── projects.json
│       │   └── certifications.json
│       └── images/
│           └── projects/
│               ├── le-calao-dore.webp
│               ├── chatapp.webp
│               └── wattmboa-237.webp
└── .gitignore
```

### Principes architecturaux

1. **Standalone Components** : Tous les composants sont `standalone: true`. Aucun module Angular (`NgModule`).
2. **Zoneless Change Detection** : `provideZonelessChangeDetection()` dans `app.config.ts`. Plus besoin de `zone.js` pour le rendu.
3. **Signals + Computed** : Les services utilisent `signal`, `computed`, `effect` pour la gestion d'état réactive.
4. **Lazy Loading** : Toutes les routes utilisent `loadComponent` (lazy loading au niveau des composants).
5. **Services root-injectables** : `@Injectable({ providedIn: 'root' })` pour les services singletons.
6. **Reactive Forms** : Le formulaire de contact utilise `FormBuilder` + `Validators`.
7. **Données statiques** : Projets et certifications sont chargés depuis des fichiers JSON dans `assets/data/`.

---

## 4. Décisions architecturales

| Décision | Contexte | Justification |
|---|---|---|
| Zoneless change detection | Angular 18+ | Moins de surcharge, contrôle fin du rendu, meilleures performances |
| Signals au lieu de `@Input()`/`@Output()` pour l'état | Services globaux | Approche moderne Angular, évite les `async` pipe dans certains cas |
| Standalone components | Angular 19+ | Moins de boilerplate, imports explicites, bundle plus léger |
| Canvas 2D pour le globe | Performance | Rendu personnalisé, contrôle total sur les particules et animations |
| Canvas pour les particules | Même chose | Effet visuel d'arrière-plan performant |
| JSON local pour les données | Pas de backend | Architecture décrite comme "démontration d'un flux Observable → Signal, sans backend fictif" |
| Verrouillage du scroll en modal | UX | `document.body.style.overflow = 'hidden'` |

---

## 5. Tâches déjà réalisées ✅

### Infrastructure & configuration
- [x] Initialisation du projet Angular 22 avec CLI
- [x] Configuration du build (`angular.json`) avec budget de 500KB (warning) / 1MB (error)
- [x] Configuration zoneless + router + HttpClient dans `app.config.ts`
- [x] Configuration TypeScript stricte (strict mode, strictTemplates, etc.)
- [x] Configuration du déploiement Vercel (SPA rewrite)
- [x] Configuration des polices Google Fonts (Space Grotesk, Inter, JetBrains Mono)

### Design system & styles globaux
- [x] Création des design tokens CSS (`src/styles.css`)
- [x] Implémentation du système de grille `.container`, `.section`, `.section-head`
- [x] Implémentation des badges `.eyebrow`, `.btn` (`.btn-primary`, `.btn-ghost`)
- [x] Implémentation de l'effet `reveal` (défilement) + `data-tilt` (inclinaison)
- [x] Implémentation de l'effet `cursor-glow` (suivi de la souris)
- [x] Implémentation des orbes flottantes (`.orb`)
- [x] Implémentation de la grille de particules Canvas 2D
- [x] Responsive design (breakpoints 900px et 640px)
- [x] Support `prefers-reduced-motion`

### Layout (header / footer)
- [x] Header sticky avec navigation responsive (menu burger mobile)
- [x] RouterLink + RouterLinkActive pour la navigation active
- [x] Footer avec liens sociaux, copyright dynamique

### Page d'accueil (Home)
- [x] Hero section avec titre, effet machine à écrire, boutons d'action
- [x] Section des compétences (grille, barres de progression, reveal on scroll)
- [x] Section "À propos" (aperçu) avec box "Ce que je cherche"
- [x] Stats bar avec compteurs animés (IntersectionObserver + requestAnimationFrame)
- [x] Tech marquee (défilement infini)
- [x] Section processus (méthodologie de travail)
- [x] Architecture strip (flux Component → Service → HttpClient → RxJS → Signal → UI)

### Composants Home
- [x] **Globe 3D** (Canvas 2D, sphere de Fibonacci, points lumineux, connexions, effet atmosphère)
- [x] **Profile Card** (carte code stylisée avec commentaires colorés, badges flottants)

### Core (services & modèles)
- [x] `Project` model (interface complète)
- [x] `Certification` model (avec types d'icônes, organizations)
- [x] `ProjectsService` (HttpClient → Observable → Signal, cache, loading/error states, computed `featuredProjects`)
- [x] `CertificationsService` (HttpClient → Signal, filtres par organisation, computed)
- [x] Données JSON : 3 projets (1 featured) + 7 certifications (4 ALX, 3 ODC)

### Pages feature
- [x] **About** : Timeline parcours + box "Ce que je cherche"
- [x] **Projects** : Liste projets avec filtres (Tous, Angular, Front-End, Full Stack, API)
- [x] **Project Detail** : Page détail projet par slug (route `/projects/:slug`)
- [x] **Certifications** : Grille certifications + filtres par organisation + modal de détail
- [x] **Contact** : Formulaire réactif (Reactive Forms) avec validation, envoi par mailto
- [x] **NotFound** : Page 404 avec RouterLink de retour

---

## 6. Tâches restantes à faire ⏳

### Priorité haute
- [x] **Corriger l'erreur de build** : balise `<code>` non fermée dans `profile-card.html` (résolu — voir section 7)
- [x] **Remplacer les placeholders** dans `projects.html` : `<span>CAPTURE À AJOUTER</span>` → remplacé par un état honnête « Aperçu à ajouter » (2026-08-21) ; Le Calao Doré dispose de 4 captures réelles
- [x] **Vérifier les images** : `src/assets/images/projects/` contient 5 fichiers, **tous JPEG**, et chaque référence de `projects.json` pointe vers un fichier existant (audit `_refs.js` : TOUTES LES REFERENCES EXISTENT)
- [ ] **Ajouter le CV PDF** : `assets/cv-fidele-elock-sadrack.pdf` référencé dans le header mais fichier absent du workspace → **impossible sans le fichier fourni par le titulaire**

### Priorité moyenne
- [x] **Tester le formulaire contact** : `mailto:` construit avec `encodeURIComponent`, pot de miel vérifié avant, destinataire `felocksadrack@gmail.com` cohérent footer/contact/header (relecture de code ; test navigateur manuel recommandé)
- [x] **Vérifier le scroll vers les ancres** : `withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })` dans `app.config.ts` + `id="skills"` / `id="about-preview"` présents dans `home.html`
- [ ] **Polir les animations** : vérifier que les compteurs, le typing, et le tilt fonctionnent sans bugs sur mobile (test manuel requis)
- [x] **Valider le SEO** : méta description/OG/Twitter/robots/theme-color/favicon SVG/preconnect présents dans `src/index.html`

### Priorité basse
- [ ] **Tests unitaires** : ajouter `@angular/core` testing pour les services et composants (aucun test n'existe pour le moment)
- [x] **Optimisation du bundle** : budget initial largeement respecté (~143 kB dans le controle `_verify.js`, seuils 500 kB / 1 MB)
- [ ] **Accessibilité** : audit plus poussé (aria-label, contraste, navigation clavier)

### Données attendues de la part du titulaire
1. Le PDF du CV (`src/assets/cv-fidele-elock-sadrack.pdf`).
2. Les captures d'écran de **ChatApp** et **WattMboa 237** (puis renseigner `image`/`images[]` dans `projects.json`).

---

## 7. Problèmes rencontrés & solutions appliquées 🔧

### ❌ Problème 1 : Erreur de compilation Angular — NG5002

**Symptôme :** `npm start` échoue avec :
```
X [ERROR] NG5002: Unexpected closing tag "pre". It may happen when the tag has already been closed by another tag.
    src/app/features/home/components/profile-card/profile-card.html:42:34
```

**Cause :** Dans `profile-card.html`, la balise `<code>` est ouverte sur la ligne 34 (`<pre><code>...`) mais jamais fermée. La balise `</pre>` sur la ligne 42 ferme le bloc `<pre>` alors que `<code>` est toujours ouvert, ce qui invalide la structure HTML selon le parseur du compilateur Angular.

**Fichier concerné :** `src/app/features/home/components/profile-card/profile-card.html`

**Solution appliquée :** Ajouter la balise fermante `</code>` avant `</pre>` :
```diff
- <span class="code-cursor">|</span></pre>
+ <span class="code-cursor">|</span></code></pre>
```

**Statut :** ✅ Corrigé — à vérifier avec `npm start`

### ❌ Problème 2 potentiel : Images de projets manquantes

**Symptôme potentiel :** Les fichiers `assets/images/projects/*.webp` sont référencés dans `projects.json` mais n'apparaissent pas dans le workspace (le dossier `assets/images/projects/` est vide ou inexistant).

**Cause possible :** Images non encore ajoutées au projet.

**Solution recommandée :**
1. Vérifier l'existence des fichiers avec `ls -la src/assets/images/projects/`
2. Si absents, les créer ou utiliser un placeholder temporaire.

**Statut :** ✅ Résolu (2026-10-01) — le dossier contient 4 captures JPEG/PNG pour Le Calao Doré ; références `projects.json`/`home.html` corrigées (`.PNG` → `.jpg`) et vérifiées. ChatApp et WattMboa 237 restent sans capture (« Aperçu à ajouter »).

### ❌ Problème 3 potentiel : CV PDF manquant

**Symptôme :** Le header référence `assets/cv-fidele-elock-sadrack.pdf` mais ce fichier n'existe pas dans le workspace.

**Solution recommandée :** Ajouter un fichier PDF de CV à cet emplacement, ou retirer temporairement le lien.

**Statut :** ⏳ À investiguer

---

### ❌ Problème 4 : Affichage cassé de la page d'accueil — `<section>` hero non fermé

**Symptôme :** Sur la page d'accueil, les sections sous le hero (marquee, stats, à propos, compétences, certifications, projets, processus) s'affichaient écrasées sur une seule rangée, tronquées — la page « n'affichait pas correctement » ses éléments.

**Cause :** Le commit `457300f` (« Fichier html de la page d'accueil ») a supprimé le bloc « scroll indicator » **et** la balise `</section>` qui fermait le `.hero` (9 lignes retirées). Le parseur HTML ferme alors implicitement le tag à la fin du template : tout le contenu suivant devenait enfant de `<section class="hero">` (`display: flex; overflow: hidden; align-items: center`) → chaque section était rendue comme flex-item écrasé horizontalement, masqué par `overflow: hidden`. Le build passait (EXIT 0), le bug était purement runtime/visuel.

**Fichier concerné :** `src/app/features/home/home.html`

**Solution appliquée :** Restauration du bloc `.scroll-indicator` (les styles existaient déjà dans `home.css`, ajoutés par le commit suivant `dcd5df6`) et de la balise `</section>` manquante. Contrôle automatisé d'équilibre des balises sur tous les templates (`src/**/*.html`) : plus aucun déséquilibre.

**Statut :** ✅ Corrigé — à vérifier avec `npm start`

---

## 8. Prochaines étapes recommandées 🚀

1. **Relancer le build** : `npm start` pour confirmer que le fix du profile-card.html fonctionne.
2. **Auditer les assets statiques** : vérifier que toutes les images et fichiers PDF référencés existent.
3. **Remplacer les placeholders** dans `projects.html` (capture d'écran, GitHub).
4. **Tester manuellement** toutes les pages : accueil, à propos, projets, certifications, contact, 404.
5. **Configurer les tests** : `ng test` montre une configuration Karma/Jasmine par défaut. Vérifier si c'est voulu ou si Angular 22 utilise Vitest.
6. **Préparer un commit initial** avec le message : `feat: portfolio initial — Angular 22, zoneless, standalone, signals`.

---

## 9. Journal des modifications (changelog)

| Date | Description | Fichier(s) concerné(s) | Statut |
|---|---|---|---|
| 2026-08-20 15h20 | Création de `PROJECT_CONTINUITY.md` | `PROJECT_CONTINUITY.md` (nouveau) | ✅ |
| 2026-08-20 15h23 | Correction de l'erreur NG5002 — `</code>` manquante | `src/app/features/home/components/profile-card/profile-card.html` | ✅ |
| 2026-08-20 15h30 | Vérification du build — compilation réussie (33.762s, 1.47 MB) | `src/app/features/home/components/profile-card/profile-card.html` | ✅ |
| 2026-08-21 | Audit et corrections de fiabilité, accessibilité et performance | Voir passation ci-dessous | ✅ |
| 2026-10-01 | Revue experte : bugs, performances, accessibilité, sécurité | Voir passation 9.2 ci-dessous | ✅ |
| 2026-10-01 | Fix affichage page d'accueil : balise `</section>` manquante (hero non fermé) + scroll indicator restauré | `src/app/features/home/home.html` — voir passation 9.3 | ✅ |
| 2026-10-03 | Marquee dynamique + refactor global, suppression doublon certification 2027, conversions/références images, README, aria-label | Voir passation 9.5 ci-dessous | ✅ |

---

## 9.1 Passation — 2026-08-21

### Objectif de la session

Auditer puis perfectionner le portfolio existant sans remplacer les données professionnelles ou les assets par du contenu fictif.

### Modifications réalisées

- `src/app/features/home/home.ts` : arrêt propre de la boucle Canvas, du typing, de l'introduction et du curseur au changement de page ; respect fonctionnel de `prefers-reduced-motion` avec un intitulé statique.
- `src/styles.css` : les animations sont désormais réellement désactivées lorsque l'utilisateur demande une réduction des mouvements.
- `src/app/core/models/project.model.ts`, `src/assets/data/projects.json` et les vues de projets : les deux projets sans captures réelles n'ont plus de chemins d'images invalides ; l'interface affiche honnêtement « Aperçu à ajouter ».
- `src/app/core/models/certification.model.ts`, `src/assets/data/certifications.json` et la vue certifications : les téléchargements PDF ne sont proposés que lorsque le fichier existe réellement ; filtres et boutons enrichis pour le clavier/lecteurs d'écran.
- `src/app/features/contact/*` : l'adresse déjà déclarée dans le footer (`felocksadrack@gmail.com`) alimente maintenant le `mailto:` ; liens LinkedIn/GitHub réels ; erreurs de formulaire reliées aux champs avec `aria-describedby` et autocomplétion native.
- `src/app/features/project-detail/project-detail.ts` : abonnement aux paramètres de route nettoyé avec `takeUntilDestroyed`.
- `src/index.html` : suppression des références à un favicon et à une image Open Graph absents ; ajout des métadonnées robots, theme-color, type et locale Open Graph.
- `src/app/layout/header/header.html` : le lien CV rompu est signalé comme indisponible tant que le PDF n'a pas été ajouté.

### Vérifications

- `tsc --noEmit -p tsconfig.app.json` : terminé sans erreur (aucune sortie TypeScript).
- `ngc -p tsconfig.app.json` : terminé sans erreur (compilation Angular et vérification des templates).
- `ng build --verbose` : la commande a démarré (`Building…`), mais la sortie de l'environnement s'est interrompue avant le résultat final. À relancer localement avant publication avec `npm run build`.

### Travail restant / données attendues

1. Ajouter le vrai CV dans `src/assets/cv-fidele-elock-sadrack.pdf`, puis rétablir le lien dans le header si souhaité.
2. Ajouter les captures authentiques de ChatApp et WattMboa 237, puis renseigner leurs chemins dans `src/assets/data/projects.json`.
3. Ajouter les PDF de certification uniquement s'ils peuvent réellement être téléchargés et, si nécessaire, fournir des URLs de vérification confirmées.
4. Créer un favicon et une image Open Graph authentiques avant une mise en ligne SEO complète.
5. Lancer `npm run build` et vérifier visuellement les parcours mobile/desktop et le formulaire `mailto:` dans un navigateur.

---

## 9.2 Passation — 2026-10-01 (revue experte : bugs, perf, a11y, sécurité)

### Objectif de la session

Revue complète du code source : corriger les bugs, améliorer les bonnes pratiques, la sécurité et les performances Lighthouse **sans changer le comportement de l'application** ; compiler la liste de constations.

### Bugs corrigés

- `src/app/features/home/home.ts` :
  - `bindTilt(card)` ignorait son paramètre et ré-attachait les listeners sur **toutes** les cartes `[data-tilt]` à chaque appel (listeners dupliqués malgré la garde `tiltSeen`) → n'attache plus que la carte passée ;
  - `querySelectorAll('.reveal')` / `querySelectorAll('[data-tilt]')` assignés à `HTMLElement[]` sans générique (erreur TS2324/TS2345) → générique `querySelectorAll<HTMLElement>(…)`, avec `root` typé via `this.el.nativeElement as HTMLElement` (TS2347 : `nativeElement` est `any`, il ne faut pas de générique dessus directement).
- **Images de projets cassées** : les PNG ont été convertis en JPG (`le-calao-dore*.jpg`) mais les références n'ont pas été mises à jour → `src/assets/data/projects.json` (`image` + `images[]`) et `src/app/features/home/home.html` pointent désormais vers `.jpg`. Audit automatisé (magic-bytes + `fs.existsSync`) : toutes les refs OK.
- `src/app/features/certifications/certifications.ts|html` : compteurs de filtres renommés `countOdc` → `countOrange` (cohérent avec la valeur `'orange-digital-center'`) et calculés sur la liste complète.

### Performance / Lighthouse

- `home.ts` : le reveal au scroll par HostListener `scroll`+`mousemove` a été remplacé par un `IntersectionObserver` (`revealObserver`, WeakSets `revealSeen`/`tiltSeen`), un `MutationObserver` (RAF-throttled) pour le contenu dynamique, nettoyage via `disposeVisualEffects()` ; signaux `mouseX`/`mouseY` inutilisés supprimés.
- `globe.ts` : `DestroyRef`, setup resize/canvas sorti de la boucle d'animation, largeur/hauteur en cache, annulation du RAF. Le globe tourne en continu, y compris sous `prefers-reduced-motion` (demande explicite : c'est la signature visuelle du Hero ; mouvement lent et régulier uniquement).
- `index.html` : `preconnect` vers `fonts.gstatic.com`, favicon SVG créé (`src/assets/images/favicon.svg`), métadonnées twitter/OG complétées.
- Images : poids max 76,5 KB (JPEG), format vérifié par magic-bytes. Aucune image > 100 KB.

### Accessibilité

- `certifications` : modal accessible (focus dans la boîte, piège Tab, Échap, retour du focus, `DestroyRef` pour `overflow`), `#certModal` sur le fond avec `(keydown)`, `aria-pressed` sur les filtres, compteurs annonçables.
- `projects.html` : `role="tablist"` → `role="group"` (ce ne sont pas des onglets au sens ARIA).
- `header.html` : `aria-label` dynamique sur le burger ; `home.html` : `aria-hidden` sur `profile-intro`, `aria-label` sur le texte de typing, `loading="lazy"` sur les miniatures ; `project-detail.html` : suppression d'un `[style.background-image]` redondant.

### Sécurité

- `contact` : champ pot de miel (`website`, hors écran, `tabindex="-1"`) + retour anticipé dans `onSubmit` avant toute construction de `mailto:`.
- `index.html` : liens externes avec `rel`/`crossorigin` appropriés (fonts), pas de code inline exécutable.

### Vérifications

- `ng build` (production) : **✅ succès** — bundle initial 284,25 kB brut / 78,60 kB estimés, `home` en chunk paresseux 60,87 kB ; budgets 500 kB/1 MB largement respectés.
- Audit images (magic-bytes + existence des refs) : toutes OK.
- `prefers-reduced-motion` vérifié présent dans `src/styles.css`.

### Constatations restantes (non corrigées — comportement ou contenu)

1. **CV PDF absent** : `src/assets/cv-fidele-elock-sadrack.pdf` toujours manquant (lien header signalé indisponible).
2. **Captures manquantes** : ChatApp et WattMboa 237 sans image dans `projects.json` (affichage « Aperçu à ajouter »).
3. **`le-calao-dore3.PNG`** est toujours un PNG (34,7 KB) à convertir en JPG pour rester cohérent.
4. **README.md** : référence encore `contact@example.com` et évoque des captures/détails (ENEO, SONATREL) absents du projet.
5. **Tests** : `ng test` non configuré (Karma/Jasmine par défaut) ; aucun test unitaire.
6. **Lint/format** : scripts `eslint`/`prettier` cités dans ce fichier mais absents de `package.json`.

---

## 9.3 Passation — 2026-10-01 (fix affichage page d'accueil)

### Objectif de la session

Corriger l'affichage cassé de la page d'accueil signalé après les commits CSS/HTML des 2026-09-23.

### Bug corrigé

- `src/app/features/home/home.html` : le hero (`<section class="hero">`) n'était **jamais fermé**. Le commit `457300f` avait supprimé le bloc `.scroll-indicator` **et** la balise `</section>` fermante. Conséquence : tout le contenu suivant du template devenait enfant du hero (`display: flex; overflow: hidden`) → sections écrasées sur une rangée, contenu tronqué. Fix : restauration du bloc `.scroll-indicator` (styles déjà présents dans `home.css`) + `</section>`.

### Vérifications

- Contrôle d'équilibre des balises (`node`, regex sur `src/**/*.html`) : **ALL TEMPLATES BALANCED** (aucun mismatch).
- `ng build` (production) : ✅ succès.
- Inspection visuelle recommandée : `npm start` → section hero fermée avant le marquee, indicateur « scroll » visible en bas du hero.

---

## 9.4 Passation — 2026-10-02 (carte de profil : premier élément chargé)

### Objectif de la session

Faire de la carte de profil le **premier élément chargé à l'ouverture du site**, sans sortir la home du lazy loading.

### Analyse

La route `''` est lazy (`loadComponent` → `import('./features/home/home')`). `ProfileCard` étant importé par `Home`, il n'apparaissait qu'après le téléchargement du chunk `home` : **aucun pixel avant ~52 kB**. Le timer de l'intro ne démarrait lui aussi qu'après le rendu de `Home`.

### Modifications réalisées

- `src/app/app.ts` : import de `ProfileCard` → la carte entre dans le **bundle initial**. Signal `showProfileIntro` résolu de façon synchrone au construit, uniquement pour `/` ou `*/index.html` (`typeof window` pour rester compatible SSR), disparition après 2 s via `afterNextRender`, nettoyage `DestroyRef`.
- `src/app/app.html` : bloc d'intro déplacé ici, en tête de `<main>` avant `<router-outlet />` (position d'affichage identique à l'ancien emplacement).
- `src/app/features/home/home.html` : bloc `@if (showProfileIntro())` supprimé.
- `src/app/features/home/home.ts` : retrait de `ProfileCard` (import + `imports[]`), de `showProfileIntro`, de `profileIntroTimeout`, et de l'import `signal` devenu inutilisé.
- `src/app/features/home/home.css` → `src/styles.css` : bloc `.profile-intro` **passé en global**. Il ne peut pas rester dans `app.css` : `.profile-intro ~ *` doit viser `<app-home>`, élément créé par le router-outlet, qui ne reçoit pas l'attribut `_ngcontent` d'`App` (l'encapsulation émulée postfixe `[_ngcontent-x]` à chaque sélecteur, y compris `*`).

### Vérifications

- `npm run build` (production) : **EXIT 0**, budgets `500 kB / 1 MB` respectés.
- Inspection du `dist/portfolio/browser` via Node. **Outil à savoir** : `findstr` échoue silencieusement sur les JS minifiés (lignes > 8191 caractères) et `git grep` donne parfois faux négatifs — utiliser un script Node (`String.includes`) pour auditer les bundles.
  - template de la carte (`Compiled in 1.2s`, `No errors`, `profile.ts`) présent **uniquement** dans `main-*.js` (bundle initial) ;
  - `.profile-intro{position:fixed;…}` présent dans `styles-*.css` (global), **absent** des styles encapsulés des chunks ;
  - `hero-title` toujours dans le chunk lazy de la home.
- Comportement attendu inchangé : overlay plein écran opaque masquant ses frères jusqu'à la suppression de l'élément à 2 s ; header/footer hors `<main>` donc non masqués.

### À vérifier visuellement

`npm start` → la carte s'affiche immédiatement à l'ouverture de `/`, disparaît après 2 s, puis le hero apparaît. L'intro ne s'affiche **pas** sur `/projects`, `/contact`, etc.

---

## 9.5 Passation — 2026-10-03 (marquee dynamique, données, ménage)

### Objectif de la session

Reprendre le travail en cours (marquee non committé), corriger les incohérences de données repérées et poursuivre les tâches de la section 6.

### Modifications réalisées

- `src/app/features/home/home.ts` : nouvelle `techList` (20 technologies, source unique de la bande défilante) + `marqueeCopies = [1, 2, 3]` ; premier rôle du typing remplacé par « Développeur Web ».
- `src/app/features/home/home.html` : les 20 `<span>` en dur du marquee remplacés par une double boucle `@for` ; `aria-label` du texte de typing synchronisé avec `roles` (« Développeur Web, … »).
- `src/styles.css` : `.marquee-track` et la keyframe `marquee-left-to-right` sont **les seuls définitions** (départ à `-33,3333 %` = 1/3 pour 3 copies, arrivée à `0`, couture exacte via `padding-right: 48px` = le `gap`).
- `src/app/features/home/home.css` : suppression du double `.tech-marquee .marquee-track` et de la keyframe concurrente `marquee-right` (conflit de sens de défilement).
- `src/assets/data/certifications.json` : **suppression de la 8ᵉ entrée « Angular Talent Lab 2027 »** (doublon de 2026 : même description, `year: 2026`) → 7 certifications, cohérent avec les stats (7) et le footer (7).
- `src/assets/images/projects/` : `le-calao-dore3.PNG` converti en `le-calao-dore3.jpg` (56 Ko, magic-bytes JPG vérifiés) puis le PNG d'origine supprimé ; `projects.json` (`images[]`) mise à jour.
- `README.md` : section « À compléter » réécrite — `contact@example.com` et les mentions ENEO/SONATREL retirés, état réel des captures et du CV explicité.
- `.gitignore` : les outils de session (`_*.js`, `_*.bat`, `_*.ps1`, `_build.status`, `_tmp/`) sont ignorés ; `start-build.js` (fichier parasite « dd ») supprimé.

### Vérifications

- `npm run build` (production) : **✅ EXIT 0** — bundle initial 292,05 kB brut / 80,52 kB estimés, `home` en chunk lazy 50,87 kB ; budgets 500 kB / 1 MB respectés.
- `node _refs.js` : toutes les images référencées par `projects.json` existent.
- `node _img.js` : les 5 fichiers de `src/assets/images/projects/` sont bien des JPEG.
- `node _verify.js` : 16/16 contrôles marquee passent (sens gauche→droite, `marquee-right` absente, couture, 20 technos, 3 copies, budget).
- Ancres : `anchorScrolling: 'enabled'` actif, `id="skills"` et `id="about-preview"` présents.

### Reste à faire (données externes ou test manuel)

1. **CV PDF** et **captures ChatApp / WattMboa 237** : fichiers à fournir par le titulaire.
2. **Test manuel** : `npm start` → marquee, compteurs, tilt, `mailto:`, parcours mobile.
3. **Tests unitaires** et **audit a11y** approfondi (priorité basse, aucun test dans le projet).

---

## 10. Guide pour le nouvel agent IA

> **Bienvenue !** Voici comment reprendre le travail efficacement :

1. **Commence par lire ce fichier** (`PROJECT_CONTINUITY.md`) du début à fin.
2. **Vérifie l'état du build** : `npm start`
3. **Consulte la section "Tâches restantes"** pour savoir par où reprendre.
4. **Utilise les conventions du projet** :
   - Standalone components (`standalone: true`)
   - Zoneless change detection (pas de `zone.js` manuel)
   - Signals pour l'état réactif
   - Design tokens CSS (`src/styles.css`) pour la cohérence visuelle
   - `data-tilt` pour l'effet inclinaison, `reveal` pour l'effet de défilement
5. **Mets à jour ce fichier** après chaque session importante :
   - Coche les tâches terminées ✅
   - Ajoute les nouveaux problèmes rencontrés
   - Actualise le changelog

6. **Structure de nommage** :
   - Fichiers : `kebab-case` (ex: `profile-card.ts`)
   - Sélecteurs : `app-` (ex: `app-profile-card`)
   - Classes CSS : BEM-lite (ex: `.code-card-header`, `.float-badge`, `.btn-primary`)

---

## 11. Commandes utiles de développement

```bash
# Démarrer le serveur de dev
npm start

# Build de production
npm run build

# Build avec watch (dev)
npm run watch

# Tests (si configurés)
npm test

# Vérifier les erreurs de linting
npx eslint src/ --ext .ts

# Formater le code
npx prettier --write "src/**/*.ts" "src/**/*.html" "src/**/*.css"
```

---

> **Note :** Ce fichier doit être mis à jour à la fin de chaque session de développement significative. En cas de doute sur l'état actuel du projet, lis d'abord ce fichier, puis lance `npm start` pour vérifier que le build fonctionne.



