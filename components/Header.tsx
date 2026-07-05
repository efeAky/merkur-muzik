"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#home", label: "Ana Sayfa", sectionId: "home" },
  { href: "#about", label: "Hakkımızda", sectionId: "about" },
  { href: "#courses", label: "Kurslarımız", sectionId: "courses" },
  { href: "#contact", label: "İletişim", sectionId: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
      {
        rootMargin: "-20% 0px -70% 0px",
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="fixed top-0 z-50 w-full border-b border-black/10 bg-white/95 shadow-sm backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-16">
          <div className="flex items-center gap-2 font-display text-2xl tracking-tight text-black">
            <Image
              src="/mercury_planet_logo_mark.png"
              alt="Merkür Sanat Logo"
              width={40}
              height={40}
              quality={100}
              unoptimized
              priority
              className="h-10 w-10 object-contain"
            />

            <span>Merkür Sanat</span>
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
                      ? "text-orange-500"
                      : "text-black/70 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center text-black md:hidden"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-white/95 backdrop-blur-lg transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = activeSection === link.sectionId;

          return (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-display text-xl tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-black hover:text-orange-500"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </>
  );
}