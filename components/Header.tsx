"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Root-relative hashes so the links also work from the article sub-pages.
const navLinks = [
  { href: "/#home", label: "Ana Sayfa", sectionId: "home" },
  { href: "/#about", label: "Hakkımızda", sectionId: "about" },
  { href: "/#courses", label: "Kurslarımız", sectionId: "courses" },
  { href: "/#contact", label: "İletişim", sectionId: "contact" },
];

export function Header() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Section highlighting only applies on the home page.
  const isHome = usePathname() === "/";

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
      <header className="fixed top-0 z-50 w-full bg-black shadow-sm">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-16">
          <Link
            href="/#home"
            aria-label="Ana sayfaya git"
            className="relative aspect-[4.6] h-9 overflow-hidden sm:h-9 md:h-10 lg:h-11"
          >
            <Image
              src="/images/merkur_music_logo.webp"
              alt="Merkür Müzik ve Sanat Akademisi Logo"
              fill
              quality={100}
              unoptimized
              priority
              className="object-cover object-center"
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => {
              const isActive = isHome && activeSection === link.sectionId;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-xs font-semibold uppercase tracking-wider transition-colors duration-300 ${
                    isActive
                      ? "text-orange-500"
                      : "text-white/70 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={isMenuOpen}
            className="flex items-center justify-center text-white md:hidden"
          >
            <svg
              width="27"
              height="27"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {isMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      <div
        aria-hidden={!isMenuOpen}
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-black transition-all duration-300 ease-out md:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        }`}
      >
        {navLinks.map((link) => {
          const isActive = isHome && activeSection === link.sectionId;

          return (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`font-display text-xl tracking-wide transition-colors duration-300 ${
                isActive
                  ? "text-orange-500"
                  : "text-white hover:text-orange-500"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </>
  );
}
