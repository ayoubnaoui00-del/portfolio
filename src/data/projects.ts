export interface Project {
  title: string;
  pitch: string;
  stack: string[];
  role: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
  featured: boolean;
}

export const PROJECTS: readonly Project[] = [
  {
    title: "Maqra",
    pitch:
      "AI-assisted Quran reading and memorization mobile companion with smart recitation tracking and personalized daily progress.",
    stack: ["Flutter", "Dart", "Node.js", "PostgreSQL", "AI"],
    role: "Full Stack & Mobile Developer",
    image: "/projects/maqra/cover.svg",
    githubUrl: "https://github.com/ayoubnaoui00-del/Maqra",
    featured: true,
  },
  {
    title: "ChatBit",
    pitch:
      "Low-latency real-time messaging platform featuring instant rooms, live presence indicators, and persistent chat history.",
    stack: ["React Native", "Expo", "Node.js", "Express", "Socket.IO", "PostgreSQL"],
    role: "Full Stack Developer",
    image: "/projects/chatbit/cover.svg",
    githubUrl: "https://github.com/ayoubnaoui00-del/chatbit",
    featured: true,
  },
  {
    title: "FitTrack",
    pitch:
      "Cross-platform workout and fitness tracker for logging strength sessions, visualizing progressive overload, and managing routines.",
    stack: ["Flutter", "Node.js", "Express", "PostgreSQL", "REST API"],
    role: "Full Stack & Mobile Developer",
    image: "/projects/fittrack/cover.svg",
    githubUrl: "https://github.com/ayoubnaoui00-del/FitTrack",
    featured: true,
  },
  {
    title: "Marhba",
    pitch:
      "Location-aware hospitality and cultural discovery app connecting travelers with curated local experiences across Morocco.",
    stack: ["React Native", "Expo", "Node.js", "Express", "PostgreSQL"],
    role: "Full Stack Developer",
    image: "/projects/marhba/cover.svg",
    githubUrl: "https://github.com/ayoubnaoui00-del/Marhba",
    featured: true,
  },
] as const;
