export interface Project {
  id: string;
  slug: string;
  title: string;
  /** Variante anglaise des champs textuels : absente => secours sur le FR. */
  titleEn?: string;
  category: 'Angular' | 'Front-End' | 'Full Stack' | 'API';
  shortDescription: string;
  shortDescriptionEn?: string;
  description: string;
  descriptionEn?: string;
  context: string;
  contextEn?: string;
  goal: string;
  goalEn?: string;
  role: string;
  roleEn?: string;
  technologies: string[];
  features: string[];
  featuresEn?: string[];
  challenges?: string;
  challengesEn?: string;
  solution?: string;
  solutionEn?: string;
  /** Visuel facultatif : un projet reste présent même si sa capture n'est pas encore fournie. */
  image?: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
