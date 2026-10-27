export interface HeroAction {
  label: string;
  href: string;
  download?: boolean;
  variant: "primary" | "secondary";
  ariaLabel: string;
}

export interface HeroContent {
  greeting: string;
  name: string;
  subtitle: string;
  valueStatement: string;
  actions: readonly HeroAction[];
}

export const HERO_CONTENT: HeroContent = {
  greeting: "Hi, I'm",
  name: "Ayoub Ennaoui",
  subtitle: "Junior full stack developer · Mobile, AI & AR",
  valueStatement:
    "I build cross-platform mobile apps, real-time backends, and AI-powered experiences that turn complex ideas into fast, intuitive products.",
  actions: [
    {
      label: "View projects",
      href: "#projects",
      variant: "primary",
      ariaLabel: "View featured portfolio projects",
    },
    {
      label: "Download CV",
      href: "/cv.pdf",
      download: true,
      variant: "secondary",
      ariaLabel: "Download Ayoub Ennaoui CV as PDF",
    },
    {
      label: "Contact",
      href: "#contact",
      variant: "secondary",
      ariaLabel: "Jump to contact section",
    },
  ],
};
