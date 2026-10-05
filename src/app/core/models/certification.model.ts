/**
 * Organisations certifiantes. La liste est ouverte : l'ajout d'un organisme
 * (Fortinet, TME Education…) se répercute automatiquement sur les filtres de la
 * page Certifications et sur le compteur « Organisations certifiantes ».
 */
export type CertificationOrg =
  | 'alx'
  | 'orange-digital-center'
  | 'fortinet'
  | 'tme';

export interface Certification {
  id: string;
  slug: string;
  title: string;
  organization: CertificationOrg;
  organizationLabel: string;
  /** Année de fin, conservée pour l'affichage de secours. */
  year: string;
  /**
   * Période détaillée (« sept. → nov. 2024 »). Affichée à la place de `year`
   * lorsqu'elle est renseignée : la plupart de ces formations durent
   * plusieurs mois et une seule année serait trompeuse.
   */
  period?: string;
  /** Fin de la certification au format `AAAA-MM` : clé de tri reliable. */
  dateEnd?: string;
  skills: string[];
  description: string;
  /** Lien facultatif, affiché uniquement lorsque le document est réellement fourni. */
  pdfUrl?: string;
  iconType: IconsType;
  accent: string;
  verifiable: boolean;
  verificationUrl?: string;
}

export type IconsType =
  | 'code'
  | 'robot'
  | 'assistant'
  | 'ai'
  | 'figma'
  | 'animation'
  | 'angular'
  | 'chip'
  | 'shield'
  | 'cloud'
  | 'book';
