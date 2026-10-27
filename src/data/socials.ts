export type SocialIconName = "github" | "linkedin" | "email";

export interface SocialLink {
  name: string;
  href: string;
  icon: SocialIconName;
  external: boolean;
  ariaLabel: string;
}

export const SOCIAL_LINKS: readonly SocialLink[] = [
  {
    name: "GitHub",
    href: "https://github.com/ayoubnaoui00-del",
    icon: "github",
    external: true,
    ariaLabel: "Visit Ayoub Ennaoui on GitHub",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ayoub-ennaoui",
    icon: "linkedin",
    external: true,
    ariaLabel: "Connect with Ayoub Ennaoui on LinkedIn",
  },
  {
    name: "Email",
    href: "mailto:ayoubnaoui00@gmail.com",
    icon: "email",
    external: false,
    ariaLabel: "Send an email to Ayoub Ennaoui",
  },
] as const;

export const COPYRIGHT_OWNER = "Ayoub Ennaoui";

