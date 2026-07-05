"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { href: "/", label: "Ana Sayfa", sectionId: "home" },
  { href: "#courses", label: "Kurslarımız", sectionId: "courses" },
  { href: "#contact", label: "İletişim", sectionId: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-secondary/20 bg-background/95 shadow-sm backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
        <div className="font-display text-2xl tracking-tight text-primary">
          Merkür Müzik
        </div>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`relative text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                  isActive
                    ? "text-secondary"
                    : "text-on-background hover:text-secondary"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button className="rounded-full border border-secondary/30 bg-primary-container px-6 py-2 text-xs uppercase tracking-widest text-on-primary-container transition-all duration-300 hover:bg-secondary hover:text-on-secondary active:scale-95">
            Kayıt Ol
          </button>
        </div>
      </nav>
    </header>
  );
}