import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        violet: "#A1A1AA",
        blue: "#D4D4D8",
        cyan: "var(--color-cyan)",
        text: "var(--color-text)",
        muted: "var(--color-muted)",
      },
      fontFamily: {
        heading: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      boxShadow: {
        glass: "var(--shadow-glass)",
      },
      borderRadius: {
        glass: "20px",
      },
    },
  },
  plugins: [],
};

export default config;
