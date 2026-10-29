"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { BRAND_NAME, NAV_ITEMS } from "@/data/navigation";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) =>
      document.getElementById(item.sectionId)
    ).filter((el): el is HTMLElement => el !== null);

    if (sectionElements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: 0.1,
      }
    );

    for (const section of sectionElements) {
      observer.observe(section);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-5xl px-4">
      {/* Single .glass container ensures strictly 1 backdrop-filter layer for both desktop bar and mobile dropdown */}
      <nav
        aria-label="Primary navigation"
        className="glass px-4 py-3 sm:px-6 transition-all duration-200"
      >
        <div className="flex items-center justify-between gap-2">
          <Link
            href="/"
            aria-label={`${BRAND_NAME} home`}
            onClick={() => setIsMobileMenuOpen(false)}
            className="font-heading text-lg font-bold tracking-tight text-text rounded-lg px-2 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
          >
            <span className="gradient-text">{BRAND_NAME}</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <li key={item.sectionId}>
                    <a
                      href={item.href}
                      aria-current={isActive ? "location" : undefined}
                      onClick={() => setActiveSection(item.sectionId)}
                      className={`inline-flex min-h-[44px] items-center rounded-xl px-3.5 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                        isActive
                          ? "bg-violet/15 text-cyan"
                          : "text-muted hover:text-text hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <ThemeToggle />
          </div>

          {/* Mobile Controls (Theme Toggle + Hamburger) */}
          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={
                isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-menu"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-text hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
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
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="4" y1="7" x2="20" y2="7" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="4" y1="17" x2="20" y2="17" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown (inside the same .glass element so no extra backdrop-filter layer is created) */}
        {isMobileMenuOpen && (
          <ul
            id="mobile-navigation-menu"
            className="mt-3 flex flex-col gap-1 border-t border-white/10 pt-3 md:hidden"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <li key={item.sectionId}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => {
                      setActiveSection(item.sectionId);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex min-h-[44px] items-center rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
                      isActive
                        ? "bg-violet/15 text-cyan"
                        : "text-muted hover:text-text hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
}
