import { HERO_CONTENT } from "@/data/hero";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="mx-auto flex w-full max-w-5xl flex-col justify-center px-4 py-8 sm:py-20 min-h-[calc(100svh-5.5rem)]"
    >
      <div className="max-w-3xl space-y-4 sm:space-y-6">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan">
          {HERO_CONTENT.greeting}
        </p>

        <h1
          id="hero-heading"
          className="font-heading text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl leading-[1.1]"
        >
          <span className="gradient-text">{HERO_CONTENT.name}</span>
        </h1>

        <p className="font-heading text-base font-medium text-text sm:text-xl lg:text-2xl">
          {HERO_CONTENT.subtitle}
        </p>

        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base lg:text-lg">
          {HERO_CONTENT.valueStatement}
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4 sm:pt-4">
          {HERO_CONTENT.actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              download={action.download ? "Ayoub-Ennaoui-CV.pdf" : undefined}
              aria-label={action.ariaLabel}
              className={`inline-flex min-h-[44px] items-center justify-center rounded-glass border px-5 py-2.5 text-sm font-medium shadow-glass transition-all duration-200 hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                action.variant === "primary"
                  ? "border-violet/50 bg-violet/20 text-text hover:border-cyan/60 hover:bg-violet/30"
                  : "border-white/15 bg-white/[0.06] text-text hover:border-cyan/50 hover:bg-white/10"
              }`}
            >
              {action.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
