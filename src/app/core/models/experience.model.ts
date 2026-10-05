/**
 * Un poste ou une formation clé du parcours. Alimenté par
 * `assets/data/experience.json` : ajouter ou retirer une entrée met à jour la
 * page « À propos » sans toucher au template.
 */
export interface ExperienceEntry {
  id: string;
  /** Poste occupé, ou intitulé de la formation. */
  title: string;
  /** Établissement, entreprise ou organisme. */
  organization: string;
  /** Nom complet quand `organization` est une sigle (BUCREP, ESIAC…). */
  organizationFull?: string;
  /** Période affichée telle quelle : « avr. 2026 – sept. 2026 · 6 mois ». */
  period: string;
  /** Type de contrat : « CDD », « Cycle ingénieur », « Programme intensif »… */
  contract?: string;
  /** Lieu : « Douala III, Région du Littoral, Cameroun · Hybride ». */
  location?: string;
  /** Statut affiché en pastille : « En cours », « Interrompue »… */
  status?: string;
  /** Chapeau de l'entrée. */
  summary?: string;
  /** Missions / responsabilités. */
  missions?: string[];
  /** Résultats chiffrés — mis en avant dans un encadré. */
  results?: string[];
  /** Compétences acquises, rendues en badges. */
  skills?: string[];
  /**
   * `job` = expérience professionnelle, `training` = formation. Sert à
   * séparer la section Expérience de la section Formation.
   */
  kind: 'job' | 'training';
  /** Contexte notable, par exemple la simultanéité formation / terrain. */
  note?: string;
}
