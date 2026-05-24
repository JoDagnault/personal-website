import type { Locale } from "./config";

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
} satisfies Record<Locale, object>;
