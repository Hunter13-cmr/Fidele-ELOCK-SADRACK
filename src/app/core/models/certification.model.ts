export type CertificationOrg = 'alx' | 'orange-digital-center';

export interface Certification {
  id: string;
  slug: string;
  title: string;
  organization: CertificationOrg;
  organizationLabel: string;
  year: string;
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
  | 'angular';
