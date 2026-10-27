import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design System Tokens | Portfolio",
  description: "Verification page for PORT-2 design tokens, typography, and glassmorphism.",
};

const COLOR_TOKENS = [
  { name: "bg", hex: "#0B0B14", swatchClass: "bg-bg border border-white/15", usage: "Primary page background" },
  { name: "surface (fallback)", hex: "#1A1A2E", swatchClass: "bg-surface border border-white/15", usage: "@supports not backdrop-filter fallback" },
  { name: "violet", hex: "#7C3AED", swatchClass: "bg-violet", usage: "Primary accent & gradient start" },
  { name: "blue", hex: "#3B82F6", swatchClass: "bg-blue", usage: "Secondary accent & gradient middle" },
  { name: "cyan", hex: "#22D3EE", swatchClass: "bg-cyan", usage: "Highlight accent & gradient end" },
  { name: "text", hex: "#F5F5FA", swatchClass: "bg-text", usage: "Primary body text (17.4:1 contrast on #0B0B14)" },
  { name: "muted", hex: "#A1A1B5", swatchClass: "bg-muted", usage: "Secondary / muted text (7.5:1 contrast on #0B0B14)" },
] as const;

export default function DesignPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">
      <header className="space-y-3">
        <p className="font-mono text-sm text-cyan">PORT-2 · Design System Verification</p>
        <h1 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
          <span className="gradient-text">Dark Glassmorphism</span> Design Tokens
        </h1>
        <p className="text-muted max-w-2xl text-base sm:text-lg">
          Single source of truth for colors, typography (`Space Grotesk`, `Inter`, `JetBrains Mono`), `.glass` surfaces, and `.gradient-text`.
        </p>
      </header>

      <section aria-labelledby="colors-heading" className="space-y-4">
        <h2 id="colors-heading" className="font-heading text-2xl font-semibold">
          1. Color Palette
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COLOR_TOKENS.map((token) => (
            <div key={token.name} className="glass p-4 flex items-center gap-4">
              <div
                className={`h-12 w-12 shrink-0 rounded-xl ${token.swatchClass}`}
                aria-hidden="true"
              />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-heading font-semibold text-text">
                    {token.name}
                  </span>
                  <code className="font-mono text-xs text-cyan">{token.hex}</code>
                </div>
                <p className="text-xs text-muted mt-1">{token.usage}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="typography-heading" className="space-y-4">
        <h2 id="typography-heading" className="font-heading text-2xl font-semibold">
          2. Typography (`next/font`)
        </h2>
        <div className="glass p-6 space-y-6">
          <div className="space-y-1">
            <p className="font-mono text-xs text-cyan">
              font-heading · Space Grotesk (--font-space-grotesk)
            </p>
            <p className="font-heading text-2xl sm:text-3xl font-bold">
              Building performant Mobile, AI &amp; AR experiences.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-xs text-cyan">
              font-sans · Inter (--font-inter)
            </p>
            <p className="font-sans text-base text-text">
              Body text rendered in Inter on `#0B0B14` background with `#F5F5FA` foreground (17.4:1 contrast ratio) and `#A1A1B5` muted text (7.5:1 contrast ratio), exceeding WCAG AA 4.5:1 requirements.
            </p>
            <p className="font-sans text-sm text-muted">
              Secondary muted body copy for descriptions, captions, and metadata.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-xs text-cyan">
              font-mono · JetBrains Mono (--font-jetbrains-mono)
            </p>
            <p className="font-mono text-sm text-text">
              const stack = [&quot;Next.js&quot;, &quot;TypeScript&quot;, &quot;Tailwind&quot;, &quot;Flutter&quot;];
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="surfaces-heading" className="space-y-4">
        <h2 id="surfaces-heading" className="font-heading text-2xl font-semibold">
          3. `.glass` Surface &amp; `.gradient-text`
        </h2>
        <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 border border-white/10">
          <div
            className="pointer-events-none absolute -top-10 left-8 h-40 w-40 rounded-full bg-violet/50 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute top-10 right-12 h-40 w-40 rounded-full bg-blue/50 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-10 left-1/3 h-40 w-40 rounded-full bg-cyan/50 blur-3xl"
            aria-hidden="true"
          />

          <div className="glass relative p-6 sm:p-8 space-y-3">
            <span className="font-mono text-xs uppercase tracking-wider text-cyan">
              .glass + .gradient-text preview
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold">
              <span className="gradient-text">Violet → Blue → Cyan Gradient</span>
            </h3>
            <p className="text-muted text-sm sm:text-base max-w-xl">
              Uses `rgba(255, 255, 255, 0.06)` background, `backdrop-filter: blur(16px)`, `1px solid rgba(255, 255, 255, 0.12)` border, `20px` border radius, and a solid `#1A1A2E` fallback when `backdrop-filter` is unsupported.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
