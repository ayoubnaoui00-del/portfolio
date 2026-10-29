import Image from "next/image";
import { ABOUT_CONTENT } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24"
    >
      <div className="glass p-6 sm:p-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center">
          {ABOUT_CONTENT.avatarUrl && (
            <div className="relative h-28 w-28 sm:h-36 sm:w-36 shrink-0 overflow-hidden rounded-full border border-white/15">
              <Image
                src={ABOUT_CONTENT.avatarUrl}
                alt={ABOUT_CONTENT.avatarAlt}
                fill
                sizes="144px"
                className="object-cover"
              />
            </div>
          )}

          <div className="space-y-4">
            <div className="space-y-2">
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan">
                {ABOUT_CONTENT.eyebrow}
              </p>
              <h2
                id="about-heading"
                className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
              >
                About <span className="gradient-text">Me</span>
              </h2>
            </div>

            <div className="space-y-3 text-sm leading-relaxed text-muted sm:text-base max-w-3xl">
              {ABOUT_CONTENT.paragraphs.map((sentence) => (
                <p key={sentence} className="text-text/90">
                  {sentence}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

