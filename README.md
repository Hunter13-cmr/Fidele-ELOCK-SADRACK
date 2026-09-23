# Fidèle Elock Sadrack — Portfolio

Portfolio professionnel de Fidèle Elock Sadrack, développeur Front-End Angular / Full
Stack Junior à Douala (Cameroun), participant à la première cohorte de l'**Angular Talent
Lab 2026 — Orange Digital Center Cameroun**.

## Live Demo

URL Vercel — à ajouter après déploiement.

## Stack

- Angular 22 (standalone components, zoneless)
- TypeScript
- Signals + `computed`
- RxJS (via HttpClient)
- Angular Router (lazy loading par route)
- Reactive Forms
- CSS natif avec variables (pas de framework CSS lourd)

## Fonctionnalités

- Page d'accueil : Hero, à propos, compétences, projets mis en avant, méthode de travail
- Liste de projets avec filtre par catégorie (Signals + `computed`)
- Page de détail par projet (`/projects/:slug`), routée dynamiquement
- Formulaire de contact en Reactive Forms, validation et messages d'erreur en français
- Page 404 dédiée
- Menu mobile accessible (`aria-expanded`, fermeture au clavier/navigation)
- `prefers-reduced-motion` respecté

## Architecture

```
src/app/
├── core/
│   ├── models/        # Project (interface TypeScript)
│   └── services/       # ProjectsService (HttpClient + Signals)
├── layout/
│   ├── header/
│   └── footer/
├── features/
│   ├── home/
│   ├── about/
│   ├── projects/
│   ├── project-detail/
│   ├── contact/
│   └── not-found/
├── app.ts / app.html / app.css
├── app.routes.ts
└── app.config.ts
```

Les données des projets sont servies en JSON local (`src/assets/data/projects.json`) et
consommées via `HttpClient`, pour démontrer un vrai flux Observable → Signal plutôt qu'un
tableau codé en dur dans les templates.

## Installation

```bash
npm install
```

## Development

```bash
npm start
# équivalent : ng serve
```

## Build

```bash
npm run build
# équivalent : ng build
```

## Déploiement

Le projet est prêt pour Vercel. Le fichier `vercel.json` redirige toutes les routes vers
`index.html` pour que le routing Angular fonctionne après un rafraîchissement de page.

## À compléter avant mise en ligne

- Liens réels : GitHub, LinkedIn, démos des projets
- CV au format PDF (`src/assets/cv-fidele-elock-sadrack.pdf`)
- Captures d'écran des projets (`src/assets/images/projects/`)
- Adresse email de contact (actuellement `contact@example.com` en placeholder)
- Détails des stages ENEO Cameroun et SONATREL
- Organisation du poste de Téléconseiller (fév. – mai 2024)
