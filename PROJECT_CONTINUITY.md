# 📄 PROJECT CONTINUITY — Portfolio Angular

> **Document de continuation du projet**  
> Ce fichier agit comme une source de vérité unique pour tout nouvel agent IA (ou humain) amené à intervenir sur ce projet. Il doit être **mis à jour régulièrement** au fur et à mesure de l'avancement.
>
> **Dernière mise à jour :** 20 août 2026 — 15h23 (Africa/Douala, UTC+1)  
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
│   │   ├── app.html          # Template racine (<router-outlet>, header, footer)
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
│   │   │   │   └── profile-card/  # Carte code stylisée
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
- [ ] **Remplacer les placeholders** dans `projects.html` : `<span>CAPTURE À AJOUTER</span>` → intégrer les vignettes d'images réelles
- [ ] **Vérifier les images** : `assets/images/projects/*.webp` existent-ils ? (référencées dans projects.json mais non listées dans le workspace)
- [ ] **Ajouter le CV PDF** : `assets/cv-fidele-elock-sadrack.pdf` référencé dans le header mais fichier absent du workspace

### Priorité moyenne
- [ ] **Tester le formulaire contact** : vérifier que le `mailto:` fonctionne en local et en production
- [ ] **Vérifier le scroll vers les ancres** : `routerLink="/"` + `fragment="skills"` fonctionne-t-il correctement ?
- [ ] **Polir les animations** : vérifier que les compteurs, le typing, et le tilt fonctionnent sans bugs sur mobile
- [ ] **Valider le SEO** : méta tags OG, vérifier que le titre/description sont pertinents

### Priorité basse
- [ ] **Tests unitaires** : ajouter `@angular/core` testing pour les services et composants (aucun test n'existe pour le moment)
- [ ] **Optimisation du bundle** : vérifier les budgets de production (500KB warning / 1MB error)
- [ ] **Accessibilité** : audit plus poussir (aria-label, contraste, navigation clavier)

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

**Statut :** ⏳ À investiguer

### ❌ Problème 3 potentiel : CV PDF manquant

**Symptôme :** Le header référence `assets/cv-fidele-elock-sadrack.pdf` mais ce fichier n'existe pas dans le workspace.

**Solution recommandée :** Ajouter un fichier PDF de CV à cet emplacement, ou retirer temporairement le lien.

**Statut :** ⏳ À investiguer

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



