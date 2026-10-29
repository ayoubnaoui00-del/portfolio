export interface SkillCategory {
  category: string;
  description: string;
  skills: readonly string[];
}

export const SKILL_CATEGORIES: readonly SkillCategory[] = [
  {
    category: "Mobile",
    description: "Cross-platform mobile apps with smooth UI and native capabilities.",
    skills: ["Flutter", "React Native", "Expo", "Dart", "TypeScript"],
  },
  {
    category: "Backend",
    description: "RESTful APIs, authentication, and event-driven real-time servers.",
    skills: ["Node.js", "Express", "Socket.IO", "Next.js", "REST APIs"],
  },
  {
    category: "Database",
    description: "Relational data modeling, migrations, indexing, and query optimization.",
    skills: ["PostgreSQL", "Sequelize", "SQL"],
  },
  {
    category: "Tools & Workflow",
    description: "Version control, agile sprint planning, containerization, and UI design.",
    skills: ["Git", "GitHub", "Docker", "Jira", "Figma", "Tailwind CSS"],
  },
] as const;

