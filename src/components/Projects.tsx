import { PROJECTS } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="mx-auto w-full max-w-5xl px-4 py-16 sm:py-24 space-y-8 sm:space-y-12"
    >
      <div className="space-y-3">
        <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-cyan">
          Selected Work
        </p>
        <h2
          id="projects-heading"
          className="font-heading text-3xl font-bold tracking-tight sm:text-4xl"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>
        <p className="max-w-2xl text-sm text-muted sm:text-base">
          Real-world mobile, AI, and real-time full-stack applications built from the ground up.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}

