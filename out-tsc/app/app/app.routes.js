export const routes = [
    {
        path: '',
        loadComponent: () => import('./features/home/home').then((m) => m.Home),
        title: 'Fidèle Elock Sadrack — Développeur Angular',
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about').then((m) => m.About),
        title: 'À propos — Fidèle Elock Sadrack',
    },
    {
        path: 'projects',
        loadComponent: () => import('./features/projects/projects').then((m) => m.Projects),
        title: 'Projets — Fidèle Elock Sadrack',
    },
    {
        path: 'certifications',
        loadComponent: () => import('./features/certifications/certifications').then((m) => m.Certifications),
        title: 'Certifications — Fidèle Elock Sadrack',
    },
    {
        path: 'projects/:slug',
        loadComponent: () => import('./features/project-detail/project-detail').then((m) => m.ProjectDetail),
        title: 'Détail du projet — Fidèle Elock Sadrack',
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
        title: 'Contact — Fidèle Elock Sadrack',
    },
    {
        path: '**',
        loadComponent: () => import('./features/not-found/not-found').then((m) => m.NotFound),
        title: 'Page introuvable — Fidèle Elock Sadrack',
    },
];
//# sourceMappingURL=app.routes.js.map