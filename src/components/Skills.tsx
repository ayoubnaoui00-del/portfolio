import { SKILL_CATEGORIES } from "@/data/skills";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24 space-y-8 sm:space-y-12"
    >
      <Reveal>
        <div className="space-y-3">
          <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan">
            Technical Stack
          </p>
          <h2
            id="skills-heading"
            className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
          >
            Core <span className="gradient-text">Skills</span>
          </h2>
          <p className="max-w-2xl text-sm text-muted sm:text-base">
            Technologies and tools I use daily to design, build, and ship full-stack and mobile applications.
          </p>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SKILL_CATEGORIES.map((group, index) => (
          <Reveal key={group.category} delay={index * 0.08} className="flex">
            <div className="flex-1 rounded-glass border border-white/12 bg-white/[0.06] p-6 shadow-glass space-y-4 transition-colors hover:border-white/25">
              <div className="space-y-1">
                <h3 className="font-heading text-xl font-bold text-text">
                  {group.category}
                </h3>
                <p className="text-xs sm:text-sm text-muted">
                  {group.description}
                </p>
              </div>

              <ul
                aria-label={`${group.category} skills`}
                className="flex flex-wrap gap-2 pt-1"
              >
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-white/12 bg-white/5 px-3.5 py-1.5 font-mono text-xs sm:text-sm text-text"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
