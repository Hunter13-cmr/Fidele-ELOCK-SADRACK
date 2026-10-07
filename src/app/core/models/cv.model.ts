/**
 * Un CV consultable depuis le sélecteur du header et de la page contact.
 * Alimenté par `assets/data/cvs.json` : un seul fichier à modifier pour
 * ajouter, retirer ou reformuler une version du CV.
 */
export interface Cv {
  id: string;
  /** Libellé affiché dans le sélecteur. */
  label: string;
  labelEn?: string;
  /**
   * Public visé, une ligne sous le libellé. C'est ce qui aide un visiteur à
   * choisir en une seconde entre deux versions.
   */
  audience: string;
  audienceEn?: string;
  /** Chemin du PDF, relatif à `src/`. */
  fileUrl: string;
  /** Nom du fichier proposé au téléchargement. */
  fileName: string;
  /** Période de dernière mise à jour, affichée en pied d'entrée. */
  updated: string;
  /** Traduction explicite ; sinon « octobre 2026 » => « Oct 2026 ». */
  updatedEn?: string;
}

