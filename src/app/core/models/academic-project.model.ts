/**
 * Projet réalisé dans un cadre scolaire ou de formation (ALX, Orange Digital
 * Center, etc.). Distingué de `Project` : ces projets ne sont pas présentés dans
 * la page « Projets », ils alimentent uniquement le compteur « Projets
 * académiques » de la barre de statistiques.
 *
 * Seuls `id` et `title` sont nécessaires : le reste est facultatif.
 * Ajouter / supprimer une entrée dans `assets/data/academic-projects.json`
 * incrémente / décrémente automatiquement le compteur.
 */
export interface AcademicProject {
  id: string;
  title: string;
  titleEn?: string;
  /** Établissement ou programme (ex. « ALX », « Orange Digital Center »). */
  organization?: string;
  year?: string;
  description?: string;
  descriptionEn?: string;
  /** Lien facultatif vers le dépôt ou la démonstration. */
  url?: string;
}