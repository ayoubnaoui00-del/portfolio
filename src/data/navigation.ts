export interface NavItem {
  label: string;
  href: `#${string}`;
  sectionId: string;
}

export const BRAND_NAME = "Ayoub.dev";

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Projects", href: "#projects", sectionId: "projects" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Contact", href: "#contact", sectionId: "contact" },
] as const;
