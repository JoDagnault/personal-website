import type { Locale } from "./config";

type UiTranslations = {
  siteTitle: string;
  metaDescription: string;
  hero: {
    name: string;
    description: string;
  };
};

export const ui = {
  en: {
    siteTitle: "Jonathan Dagnault",
    metaDescription:
      "Jonathan Dagnault’s portfolio as a full-stack software developer, showcasing projects and technical skills.",
    hero: {
      name: "Jonathan Dagnault",
      description: "Full-Stack Software Developer",
    },
  },
  fr: {
    siteTitle: "Jonathan Dagnault",
    metaDescription:
      "Portfolio de Jonathan Dagnault, développeur logiciel full-stack, présentant ses projets et ses compétences techniques.",
    hero: {
      name: "Jonathan Dagnault",
      description: "Développeur logiciel full-stack",
    },
  },
} satisfies Record<Locale, UiTranslations>;
