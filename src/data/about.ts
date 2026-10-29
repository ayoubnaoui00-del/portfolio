export interface AboutContent {
  eyebrow: string;
  heading: string;
  paragraphs: readonly string[];
  avatarUrl?: string;
  avatarAlt: string;
}

export const ABOUT_CONTENT: AboutContent = {
  eyebrow: "Background",
  heading: "About Me",
  paragraphs: [
    "I'm Ayoub Ennaoui, a junior full-stack and mobile developer based in Morocco.",
    "I train intensively in software engineering through hands-on sprints, building production-style apps from database schema design to mobile UI.",
    "My work focuses on cross-platform mobile development with Flutter and React Native, backed by Node.js, Express, Socket.IO, and PostgreSQL, alongside practical AI and AR integrations.",
    "I am currently looking for a junior developer role or internship where I can ship reliable features and grow with an engineering team.",
  ],
  avatarAlt: "Portrait of Ayoub Ennaoui",
};

