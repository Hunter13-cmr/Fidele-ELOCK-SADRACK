/**
 * Un poste ou une formation clé du parcours. Alimenté par
 * `assets/data/experience.json` : ajouter ou retirer une entrée met à jour la
 * page « À propos » sans toucher au template.
 */
export interface ExperienceEntry {
  id: string;
  /** Poste occupé, ou intitulé de la formation. */
  title: string;
  titleEn?: string;
  /** Établissement, entreprise ou organisme. */
  organization: string;
  /** Nom complet quand `organization` est une sigle (BUCREP, ESIAC…). */
  organizationFull?: string;
  organizationFullEn?: string;
  /** Période affichée telle quelle : « avr. 2026 – sept. 2026 · 6 mois ». */
  period: string;
  /** Traduction explicite ; sinon les mois sont convertis automatiquement. */
  periodEn?: string;
  /** Type de contrat : « CDD », « Cycle ingénieur », « Programme intensif »… */
  contract?: string;
  contractEn?: string;
  /** Lieu : « Douala III, Région du Littoral, Cameroun · Hybride ». */
  location?: string;
  locationEn?: string;
  /** Statut affiché en pastille : « En cours », « Interrompue »… */
  status?: string;
  statusEn?: string;
  /** Chapeau de l'entrée. */
  summary?: string;
  summaryEn?: string;
  /** Missions / responsabilités. */
  missions?: string[];
  missionsEn?: string[];
  /** Résultats chiffrés — mis en avant dans un encadré. */
  results?: string[];
  resultsEn?: string[];
  /** Compétences acquises, rendues en badges (glossaire FR→EN automatique). */
  skills?: string[];
  /**
   * `job` = expérience professionnelle, `training` = formation. Sert à
   * séparer la section Expérience de la section Formation.
   */
  kind: 'job' | 'training';
  /** Contexte notable, par exemple la simultanéité formation / terrain. */
  note?: string;
  noteEn?: string;
}

