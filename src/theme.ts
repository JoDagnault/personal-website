export const themes = {
  dark: "dark",
  light: "light",
} as const;

export type Theme = (typeof themes)[keyof typeof themes];

export const defaultTheme: Theme = themes.dark;
export const themeStorageKey = "theme";

export const applyTheme = (theme: Theme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(themeStorageKey, theme);
};

export const toggleTheme = () => {
  const currentTheme = document.documentElement.dataset.theme;
  const nextTheme = currentTheme === themes.dark ? themes.light : themes.dark;

  applyTheme(nextTheme);
};
