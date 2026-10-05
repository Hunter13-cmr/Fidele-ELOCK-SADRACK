# CV

Dépose ici, les deux versions du CV attendues par `assets/data/cvs.json` :

| Fichier attendu | Version | État |
|---|---|---|
| `cv-developpeur-angular.pdf` | CV Développeur Front-End / Angular | ⚠️ à déposer |
| `cv-operations-terrain.pdf` | CV Chargé des opérations | ✅ déposé (155 Ko, 1 page) |

Le sélecteur (header + page contact) lit cette liste dans `cvs.json`, et la
page `/cv/:id` affiche l'aperçu puis propose le téléchargement.
Pour ajouter une troisième version, ajoute une entrée dans ce JSON et dépose
le PDF ici : aucun template à modifier.

Tant qu'un fichier est absent, la page `/cv/:id` correspondante affiche un
état 404 (« Ce CV n'est pas encore disponible »).