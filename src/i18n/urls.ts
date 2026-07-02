import { type Locale, locales } from "./locales.ts";
import type { CollectionEntry } from "astro:content";

export type LocalizedUrls = Record<Locale, string>;

export const localizedUrlsForProject = (
  projectKey: string,
  projects: CollectionEntry<"projects">[],
): LocalizedUrls => {
  const projectTranslations: CollectionEntry<"projects">[] = projects.filter(
    (project) => project.data.key === projectKey,
  );

  const entries = locales.map((locale) => {
    const project: CollectionEntry<"projects"> | undefined = projectTranslations.find((project) =>
      project.id.startsWith(`${locale}/`),
    );

    if (!project) {
      throw new Error(`Project ${projectKey} is missing a ${locale} translation.`);
    }

    return [locale, projectUrl(project)];
  });

  return Object.fromEntries(entries) as LocalizedUrls;
};

export const projectUrl = (project: CollectionEntry<"projects">): string => {
  const [locale, slug] = project.id.split("/");
  return `/${locale}/projects/${slug}/`;
};

export const homePageUrl = (locale: Locale): string => `/${locale}/`;

export const localizedHomePageUrls: LocalizedUrls = Object.fromEntries(
  locales.map((locale) => [locale, homePageUrl(locale)]),
) as LocalizedUrls;
