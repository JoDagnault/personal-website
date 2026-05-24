import type { Locale } from "./config";

type UiTranslations = {
  siteTitle: string;
  hero: {
    name: string;
    description: string;
  };
};

export const ui = {
  en: {
    siteTitle: "Jonathan Dagnault",
    hero: {
      name: "Jonathan Dagnault",
      description: "Software Developer",
    },
  },
  fr: {
    siteTitle: "Jonathan Dagnault",
    hero: {
      name: "Jonathan Dagnault",
      description: "Développeur logiciel",
    },
  },
} satisfies Record<Locale, UiTranslations>;
