import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      tabIndex={0}
      aria-label={`${project.title} — ${project.role}`}
      className="group flex flex-col overflow-hidden rounded-glass border border-white/12 bg-white/[0.06] shadow-glass transition-all duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:border-cyan/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg focus-within:border-cyan/50"
    >
      <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-surface">
        <Image
          src={project.image}
          alt={`Preview screenshot of ${project.title}: ${project.pitch}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 512px"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.02] motion-reduce:group-hover:scale-100"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 space-y-5">
        <div className="space-y-3">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-heading text-xl font-bold text-text sm:text-2xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-cyan">{project.role}</span>
          </div>

          <p className="text-sm leading-relaxed text-muted sm:text-base">
            {project.pitch}
          </p>

          <ul
            aria-label={`${project.title} technologies`}
            className="flex flex-wrap gap-2 pt-1"
          >
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/12 bg-white/5 px-3 py-1 font-mono text-xs text-text"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/10">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-cyan/50 hover:bg-white/10 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <svg
              className="h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <span>GitHub</span>
          </a>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open live demo of ${project.title}`}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-xl border border-violet/50 bg-violet/20 px-4 py-2 text-sm font-medium text-text transition-colors hover:border-cyan/60 hover:bg-violet/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

