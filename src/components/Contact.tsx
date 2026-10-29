import { Mail } from "lucide-react";
import { CONTACT_CONTENT } from "@/data/contact";
import { SOCIAL_LINKS } from "@/data/socials";

export default function Contact() {
  const externalSocials = SOCIAL_LINKS.filter((item) => item.external);

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24"
    >
      <div className="glass p-6 sm:p-10 space-y-6">
        <div className="space-y-3 max-w-2xl">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan">
            {CONTACT_CONTENT.eyebrow}
          </p>
          <h2
            id="contact-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Say <span className="gradient-text">hello</span>
          </h2>
          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {CONTACT_CONTENT.description}
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-mono uppercase tracking-wider text-muted">
            Direct Email (copy or click below)
          </p>
          <p className="font-mono text-base sm:text-lg font-medium text-text select-all break-all">
            {CONTACT_CONTENT.email}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href={CONTACT_CONTENT.mailtoHref}
            aria-label={`Email Ayoub Ennaoui at ${CONTACT_CONTENT.email}`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-violet/50 bg-violet/20 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-cyan/60 hover:bg-violet/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            <span>{CONTACT_CONTENT.ctaLabel}</span>
          </a>

          {externalSocials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-cyan/50 hover:bg-white/10 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <span>{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

