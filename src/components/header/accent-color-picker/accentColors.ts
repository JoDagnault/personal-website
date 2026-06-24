export type AccentColor = {
  id: string;
  label: string;
};

export const accentColors = [
  {
    id: "green",
    label: "Green",
  },
  {
    id: "pink",
    label: "Pink",
  },
  {
    id: "purple",
    label: "Purple",
  },
  {
    id: "yellow",
    label: "Yellow",
  },
  {
    id: "blue",
    label: "Blue",
  },
  {
    id: "orange",
    label: "Orange",
  },
] as const satisfies readonly AccentColor[];

export type AccentColorId = (typeof accentColors)[number]["id"];

export const accentColorKey = "accent-color";

export const isAccentColorId = (accentColor: string): accentColor is AccentColorId => {
  return accentColors.some(({ id }) => id === accentColor);
};

export const setAccentColor = (accentColor: AccentColorId) => {
  localStorage.setItem(accentColorKey, accentColor);
  document.documentElement.style.setProperty(
    "--accent-color",
    `var(${accentColorCssVariable(accentColor)})`,
  );
};

export const accentColorCssVariable = (accentColor: AccentColorId) => {
  return `--accent-${accentColor}`;
};
