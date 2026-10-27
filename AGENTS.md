<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Portfolio Project Rules

You are helping me build my developer portfolio.

- **Stack:** Next.js (App Router, TypeScript), Tailwind, deployed on Vercel.
- **Design:** Dark glassmorphism. Tokens (colors, fonts, `.glass`, `.gradient-text`) are defined in `PORT-2` and live only in `tailwind.config` and `globals.css`.

## Rules
- Never invent new colors, fonts, or shadows. Use the existing tokens.
- All content (projects, skills, socials) lives in `/data` files. Never hardcode it in components.
- One component per file in `/components`, typed props, no `any`.
- **Accessibility:** semantic HTML, alt text, `aria-labels`, visible focus states, respect `prefers-reduced-motion`.
- **Mobile-first:** Test at `360px`.
- Max 3 `backdrop-filter` layers visible at once.
- Work on one ticket at a time. Don't touch files outside the ticket's scope.
- Before coding, list the files you will create or change. After coding, tell me how to verify each acceptance criterion.
- Ask me before installing any new dependency.

# Portfolio Project Rules

You are helping me build my developer portfolio.

- **Stack:** Next.js (App Router, TypeScript), Tailwind, deployed on Vercel.
- **Design:** Dark glassmorphism. Tokens (colors, fonts, `.glass`, `.gradient-text`) are defined in `PORT-2` and live only in `tailwind.config` and `globals.css`.

## Rules
- Never invent new colors, fonts, or shadows. Use the existing tokens.
- All content (projects, skills, socials) lives in `/data` files. Never hardcode it in components.
- One component per file in `/components`, typed props, no `any`.
- **Accessibility:** semantic HTML, alt text, `aria-labels`, visible focus states, respect `prefers-reduced-motion`.
- **Mobile-first:** Test at `360px`.
- Max 3 `backdrop-filter` layers visible at once.
- Work on one ticket at a time. Don't touch files outside the ticket's scope.
- Before coding, list the files you will create or change. After coding, tell me how to verify each acceptance criterion.
- Ask me before installing any new dependency.

