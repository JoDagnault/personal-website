export const localeNames = {
  en: "English",
  fr: "Français",
} as const;

export type Locale = keyof typeof localeNames;

export const locales = Object.keys(localeNames) as Locale[];

export const defaultLocale = "en" satisfies Locale;
