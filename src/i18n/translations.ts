// i18n translations dictionary
// All static UI strings in EN and FR

export type Lang = 'en' | 'fr';

export const translations = {
  // ── Navbar ──────────────────────────────────────────────
  nav_about: { en: 'About Me', fr: 'À propos' },
  nav_projects: { en: 'Projects', fr: 'Projets' },

  // ── Welcome / Hero ────────────────────────────────────────
  hero_greeting: { en: "Hi! I'm", fr: 'Bonjour, je suis' },
  hero_description: {
    en: 'I am deeply passionate about <strong>Software Engineering</strong> and thrive in <strong>international environments</strong>. I love building scalable solutions and collaborating with diverse teams across the globe.',
    fr: 'Passionné de <strong>Génie Logiciel</strong> et épanoui dans les <strong>environnements internationaux</strong>, j\'aime concevoir des solutions robustes et collaborer avec des équipes variées à travers le monde.',
  },
  hero_cta_about: { en: 'More about me', fr: 'En savoir plus' },
  hero_cta_projects: { en: 'My Projects', fr: 'Mes Projets' },

  // ── Projects page ─────────────────────────────────────────
  projects_title: { en: 'My Projects', fr: 'Mes Projets' },
  projects_subtitle: {
    en: 'Discover my latest work',
    fr: 'Découvrez mes derniers travaux',
  },

  // ── Project detail page ────────────────────────────────────
  project_back: { en: 'Back to Projects', fr: 'Retour aux Projets' },
  project_tech_title: { en: 'Technologies Used', fr: 'Technologies utilisées' },
  project_description: { en: 'Description', fr: 'Description' },
  project_gallery: { en: 'Image Gallery', fr: 'Galerie d\'images' },
  project_source: { en: 'Source Code', fr: 'Code Source' },
  project_github_btn: { en: 'View on GitHub', fr: 'Voir sur GitHub' },
  project_demo: { en: 'Live Demo / Video', fr: 'Démo en direct / Vidéo' },

  // ── CV / About sections ───────────────────────────────────
  cv_download: { en: 'Download PDF', fr: 'Télécharger PDF' },
  cv_section_tech: { en: 'Technologies & Tools', fr: 'Technologies & Outils' },
  cv_section_languages: { en: 'Languages', fr: 'Langues' },
  cv_section_interests: { en: 'Interests', fr: 'Centres d\'intérêt' },
  cv_section_internships: { en: 'Internships', fr: 'Stages' },
  cv_section_education: { en: 'Education', fr: 'Formation' },
  cv_current: { en: 'Current', fr: 'En cours' },

  // ── Personal info ─────────────────────────────────────────
  personalTitle: {
    en: 'Software Engineering Student',
    fr: 'Étudiant en Génie Logiciel',
  },

  // ── Languages ─────────────────────────────────────────────
  lang_french: { en: 'French', fr: 'Français' },
  lang_french_level: { en: 'Native', fr: 'Langue maternelle' },
  lang_english: { en: 'English', fr: 'Anglais' },
  lang_english_level: {
    en: 'Professional Proficiency (FCE B2)',
    fr: 'Compétence professionnelle (FCE B2)',
  },

  // ── Interests ────────────────────────────────────────────
  interest_travel_title: { en: 'Travel', fr: 'Voyages' },
  interest_travel_desc: {
    en: 'Passionate traveler exploring diverse cultures across North America and Europe',
    fr: 'Voyageur passionné explorant diverses cultures en Amérique du Nord et en Europe',
  },
  interest_cooking_title: { en: 'Cooking', fr: 'Cuisine' },
  interest_cooking_desc: {
    en: 'Passion for culinary arts and international flavors',
    fr: 'Passion pour les arts culinaires et les saveurs du monde',
  },
  interest_music_title: { en: 'Music', fr: 'Musique' },
  interest_music_desc: {
    en: '10 years of piano training at the conservatory',
    fr: '10 ans de formation au piano au conservatoire',
  },

  // ── Travel countries ──────────────────────────────────────
  country_USA: { en: 'USA', fr: 'États-Unis' },
  country_Canada: { en: 'Canada', fr: 'Canada' },
  country_Ireland: { en: 'Ireland', fr: 'Irlande' },
  country_Scotland: { en: 'Scotland', fr: 'Écosse' },
  country_England: { en: 'England', fr: 'Angleterre' },
  country_Germany: { en: 'Germany', fr: 'Allemagne' },
  'country_Czech Republic': { en: 'Czech Republic', fr: 'République tchèque' },
  country_Spain: { en: 'Spain', fr: 'Espagne' },
  country_Portugal: { en: 'Portugal', fr: 'Portugal' },
  country_Austria: { en: 'Austria', fr: 'Autriche' },
  country_Netherlands: { en: 'Netherlands', fr: 'Pays-Bas' },

  // ── Internships ───────────────────────────────────────────
  internship_title: {
    en: 'Software Engineer Intern',
    fr: 'Stagiaire Ingénieur Logiciel',
  },
  internship_company: { en: 'City of La Seyne-sur-Mer', fr: 'Ville de La Seyne-sur-Mer' },
  internship_category: {
    en: 'Microservices Architecture',
    fr: 'Architecture Microservices',
  },
  internship_achievement_1: {
    en: 'Designed and developed a real-time queue management system using Angular and Node.js.',
    fr: 'Conception et développement d\'un système de gestion de files d\'attente en temps réel avec Angular et Node.js.',
  },
  internship_achievement_2: {
    en: 'Integrated the "Publik" API to synchronize appointment data and reduce user wait times.',
    fr: 'Intégration de l\'API "Publik" pour synchroniser les données de rendez-vous et réduire les temps d\'attente.',
  },
  internship_achievement_3: {
    en: 'Collaborated with the municipal team to define requirements and improve the user interface.',
    fr: 'Collaboration avec l\'équipe municipale pour définir les besoins et améliorer l\'interface utilisateur.',
  },

  // ── Education ─────────────────────────────────────────────
  edu_degree_uqac: {
    en: "Double degree (Master's Degree in Computer Science)",
    fr: 'Double diplôme (Master en Informatique)',
  },
  edu_degree_erasmus: {
    en: 'ERASMUS Exchange semester',
    fr: 'Semestre d\'échange ERASMUS',
  },
  edu_degree_isen: {
    en: 'Engineering Degree in Software Engineering',
    fr: 'Diplôme d\'Ingénieur en Génie Logiciel',
  },
  edu_semester_winter2026: { en: 'Winter 2026', fr: 'Hiver 2026' },
  edu_semester_fall2025: { en: 'Fall 2025', fr: 'Automne 2025' },
  edu_course_algos: { en: 'Advanced Algorithms', fr: 'Algorithmes Avancés' },
  edu_course_ml: { en: 'Machine Learning', fr: 'Apprentissage Automatique' },
  edu_course_vr: { en: '3D & VR', fr: '3D & Réalité Virtuelle' },
  edu_course_oop: { en: 'OOP', fr: 'POO' },
  edu_course_cloud: { en: 'Cloud Computing', fr: 'Informatique en Nuage' },
  edu_course_se: { en: 'Software Engineering', fr: 'Génie Logiciel' },
  edu_course_android: {
    en: 'Android Mobile Development',
    fr: 'Développement Mobile Android',
  },
  edu_course_pm: { en: 'Project Management', fr: 'Gestion de Projet' },
} as const;

export type TranslationKey = keyof typeof translations;

export function t(key: TranslationKey, lang: Lang): string {
  return translations[key][lang];
}

// Country name → translation key mapping
export const countryKeyMap: Record<string, TranslationKey> = {
  'USA': 'country_USA',
  'Canada': 'country_Canada',
  'Ireland': 'country_Ireland',
  'Scotland': 'country_Scotland',
  'England': 'country_England',
  'Germany': 'country_Germany',
  'Czech Republic': 'country_Czech Republic',
  'Spain': 'country_Spain',
  'Portugal': 'country_Portugal',
  'Austria': 'country_Austria',
  'Netherlands': 'country_Netherlands',
};
