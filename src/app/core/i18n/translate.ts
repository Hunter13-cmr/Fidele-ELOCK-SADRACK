import type { AppLang } from '../models/preferences.model';
import type { Certification } from '../models/certification.model';
import type { Cv } from '../models/cv.model';
import type { ExperienceEntry } from '../models/experience.model';
import type { Project } from '../models/project.model';
import type { AcademicProject } from '../models/academic-project.model';

/**
 * Localisation des données JSON (5 fichiers de `assets/data/`).
 * En mode FR, les fonctions retournent l'objet d'origine (identité).
 */

const GLOSSARY: Record<string, string> = {
  'Intelligence artificielle': 'Artificial Intelligence',
  'Gestion d agenda': 'Schedule management',
  'Outils collaboratifs': 'Collaboration tools',
  'Animations web': 'Web animations',
  'Formulaires réactifs': 'Reactive Forms',
  'Logique de calcul côté client': 'Client-side calculation logic',
};

/** Traduit un libellé via le glossaire ; sinon retourne l'entrée. */
export function trTerm(term: string): string {
  return GLOSSARY[term] ?? term;
}

/** Traduit une liste de libellés. */
export function trList(items: string[]): string[] {
  return items.map((item) => trTerm(item));
}

export function localizeProject(project: Project, lang: AppLang): Project {
  if (lang === 'fr') return project;
  return {
    ...project,
    title: project.titleEn ?? project.title,
    shortDescription: project.shortDescriptionEn ?? project.shortDescription,
    description: project.descriptionEn ?? project.description,
    context: project.contextEn ?? project.context,
    goal: project.goalEn ?? project.goal,
    role: project.roleEn ?? project.role,
    technologies: trList(project.technologies),
    features: project.featuresEn ?? trList(project.features),
    challenges: project.challengesEn ?? project.challenges,
    solution: project.solutionEn ?? project.solution,
  };
}

export function localizeExperience(entry: ExperienceEntry, lang: AppLang): ExperienceEntry {
  if (lang === 'fr') return entry;
  return {
    ...entry,
    title: entry.titleEn ?? entry.title,
    organizationFull: entry.organizationFullEn ?? entry.organizationFull,
    summary: entry.summaryEn ?? entry.summary,
    missions: entry.missionsEn ?? entry.missions,
    results: entry.resultsEn ?? entry.results,
    skills: entry.skills ? trList(entry.skills) : entry.skills,
    note: entry.noteEn ?? entry.note,
  };
}

export function localizeCertification(cert: Certification, lang: AppLang): Certification {
  if (lang === 'fr') return cert;
  return {
    ...cert,
    title: cert.titleEn ?? cert.title,
    description: cert.descriptionEn ?? cert.description,
    skills: cert.skillsEn ?? trList(cert.skills),
  };
}

export function localizeCv(cv: Cv, lang: AppLang): Cv {
  if (lang === 'fr') return cv;
  return {
    ...cv,
    label: cv.labelEn ?? cv.label,
    audience: cv.audienceEn ?? cv.audience,
  };
}

export function localizeAcademic(
  project: AcademicProject,
  lang: AppLang
): AcademicProject {
  if (lang === 'fr') return project;
  return {
    ...project,
    title: project.titleEn ?? project.title,
    description: project.descriptionEn ?? project.description,
  };
}
