# Ayoub Ennaoui — Developer Portfolio

Personal developer portfolio showcasing full-stack, cross-platform mobile (`Flutter`, `React Native`), real-time (`Socket.IO`), and AI-powered projects with a custom **Dark Glassmorphism** design system.

## Features

- **Dark & Light Glassmorphism Design System:** Single-source-of-truth design tokens (`bg`, `surface`, `violet`, `blue`, `cyan`, `text`, `muted`), `.glass` surfaces with `@supports not (backdrop-filter)` fallback, and `.gradient-text`.
- **Animated Gradient Blobs:** GPU-accelerated background shapes (`blur(120px)`) with `prefers-reduced-motion: reduce` support.
- **Sticky Glass Navbar:** `IntersectionObserver` active section tracking, keyboard-accessible mobile drawer, and persistent Dark/Light theme toggle without flash on load.
- **Data-Driven Architecture:** All portfolio content (`projects`, `skills`, `about`, `contact`, `socials`, `navigation`, `seo`) lives in strictly typed `/src/data` modules with zero `any`.
- **Scroll Reveal Animations:** Framer Motion `whileInView` `<Reveal>` wrapper with `<noscript>` fallback so content remains visible if JavaScript is disabled.
- **SEO & Accessibility (WCAG AA):** Semantic HTML5 landmarks (`header`, `main`, `section`, `footer`), skip-to-content link, `44×44px` minimum tap targets, dynamic `1200×630` Open Graph image (`/opengraph-image`), `/sitemap.xml`, and `/robots.txt`.

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS, CSS Custom Properties
- **Typography:** `Space Grotesk`, `Inter`, `JetBrains Mono` (`next/font/google`)
- **Animations & Icons:** Framer Motion, Lucide React
- **Deployment:** Vercel

## How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/ayoubnaoui00-del/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the portfolio (or [http://localhost:3000/design](http://localhost:3000/design) to inspect all design system tokens).

## Scripts

- `npm run dev` — Start development server on `localhost:3000`
- `npm run build` — Build optimized static production bundle
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
