---
trigger: always_on
---

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

