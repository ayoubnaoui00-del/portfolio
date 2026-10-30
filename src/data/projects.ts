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
    title: "HARD",
    pitch:
      "AI-powered mobile fitness & coaching platform with an interactive 3D WebGL anatomy muscle selector (1,324 exercises), real-time DeepSeek + Pinecone RAG coach with autonomous DB function calling, and an immutable XP gamification ledger.",
    stack: [
      "Flutter",
      "Dart",
      "Node.js",
      "PostgreSQL",
      "DeepSeek AI",
      "Pinecone RAG",
      "Three.js",
    ],
    role: "Full Stack & Mobile Developer",
    image: "/projects/hard/cover.jpg",
    githubUrl: "https://github.com/ayoubnaoui00-del/hard",
    featured: true,
  },
  {
    title: "ChatBit",
    pitch:
      "Real-time multi-role customer support platform for Souq Express featuring instant Socket.IO ticket threads, live typing indicators, JWT authentication, and cross-platform mobile and web clients.",
    stack: [
      "React Native",
      "Expo",
      "TypeScript",
      "Node.js",
      "Socket.IO",
      "PostgreSQL",
      "Zustand",
    ],
    role: "Full Stack Developer",
    image: "/projects/chatbit/cover.jpg",
    githubUrl: "https://github.com/ayoubnaoui00-del/chatbit",
    featured: true,
  },
  {
    title: "Pitlane 2026",
    pitch:
      "Interactive Formula 1 2026 season hub featuring a 3D team garage telemetry viewer, Grand Prix race calendar, driver & constructor standings, and cinematic GSAP page transitions.",
    stack: [
      "React 19",
      "Three.js",
      "React Three Fiber",
      "GSAP",
      "React Router",
      "Vite",
    ],
    role: "Frontend & 3D Web Developer",
    image: "/projects/pitlane/cover.jpg",
    githubUrl: "https://github.com/ayoubnaoui00-del/Pitlane",
    featured: true,
  },
] as const;
