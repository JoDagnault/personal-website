import { icons } from "./icons";

export type SocialIcon = keyof typeof icons;

export type SocialLink = { name: string; url: string; icon: SocialIcon };

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jodagnault", icon: "linkedin" },
  { name: "Github", url: "https://github.com/jodagnault", icon: "github" },
] as const satisfies readonly SocialLink[];
