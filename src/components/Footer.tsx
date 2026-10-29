import { Mail } from "lucide-react";
import {
  COPYRIGHT_OWNER,
  SOCIAL_LINKS,
  type SocialIconName,
} from "@/data/socials";

function SocialIcon({ icon }: { icon: SocialIconName }) {
  switch (icon) {
    case "github":
      return (
        <svg
          className="h-5 w-5"
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
      );
    case "linkedin":
      return (
        <svg
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "email":
      return <Mail className="h-5 w-5" aria-hidden="true" />;
  }
}

export default async function Footer() {
  "use cache";
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mx-auto w-full max-w-5xl px-4 py-8 mt-auto border-t border-white/10">
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted text-center sm:text-left">
          &copy; {currentYear} {COPYRIGHT_OWNER}. All rights reserved.
        </p>

        <ul className="flex items-center gap-3" aria-label="Social media links">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target={social.external ? "_blank" : undefined}
                rel={social.external ? "noopener noreferrer" : undefined}
                aria-label={social.ariaLabel}
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-muted transition-colors hover:border-white/25 hover:bg-white/10 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                <SocialIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

