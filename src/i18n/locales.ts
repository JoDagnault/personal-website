export const localeNames = {
  en: "English",
  fr: "Français",
} as const;

export type Locale = keyof typeof localeNames;

export const locales = Object.keys(localeNames) as Locale[];

export const defaultLocale = "en" satisfies Locale;

export const resolveLocale = (currentLocale: string | undefined): Locale => {
  if (locales.includes(currentLocale as Locale)) {
    return currentLocale as Locale;
  }

  return defaultLocale;
};
