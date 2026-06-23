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

export const defaultAccentColorId: AccentColorId = "green";
