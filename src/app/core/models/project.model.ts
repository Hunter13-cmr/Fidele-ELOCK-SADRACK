export interface Project {
  id: string;
  slug: string;
  title: string;
  category: 'Angular' | 'Front-End' | 'Full Stack' | 'API';
  shortDescription: string;
  description: string;
  context: string;
  goal: string;
  role: string;
  technologies: string[];
  features: string[];
  challenges?: string;
  solution?: string;
  /** Visuel facultatif : un projet reste présent même si sa capture n'est pas encore fournie. */
  image?: string;
  images?: string[];
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}
