# Music Institution Website — Project Context

## Overview

A front-end website for a music institution, built with Next.js (App Router) and TypeScript. Single-page site: Home, About, and Courses are stacked sections on one page (`app/page.tsx`), navigable via anchor links in the Header (smooth scroll to `#about`, `#courses`, etc.) rather than separate routes. Shared Header/Footer across the page. Design is sourced from Google Stitch and kept simple for now — a teammate will add animations and refined visual design in a later pass.

See `docs/design-system.md` for colors, typography, layout, and component visual specs (to be filled in once the Stitch design is imported).
See `docs/animations.md` for animation conventions (to be filled in by the teammate handling animations).

## Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS v4 — no `tailwind.config.js`; theme tokens (colors, fonts) are defined via `@theme` in `app/globals.css`
- Animation: GSAP
- Package manager: npm
- Deployment: Vercel, domain: merkursanat.com

## Folder Structure

This project does **not** use a `src/` directory — `app/`, `components/`, etc. live at the project root.

```
app/                    # single route — page.tsx (renders all sections), layout.tsx
components/
  Header.tsx            # nav with anchor links to sections
  Footer.tsx
  sections/             # HomeSection, AboutSection, CoursesSection (each wraps its own <section id="...">)
data/                   # typed content — courses.ts, etc.
lib/                    # utils, shared helpers
docs/
  design-system.md        # colors, type, layout, component visual specs
  animations.md           # animation conventions
public/
  images/                 # site imagery, logos, icons
```

Update this section whenever the real structure changes — it should reflect reality, not a plan.

## Component Conventions

- `app/page.tsx` is a Server Component and only composes/renders section components from `components/sections/` (wrapped by `Header`/`Footer`) — no UI markup, styling, or logic written directly inside `page.tsx`
- Each section (`HomeSection`, `AboutSection`, `CoursesSection`) renders its own `<section id="...">` with a matching `id` (`home`, `about`, `courses`) so the Header's anchor links (`#about`, `#courses`) can scroll to it
- Component files: `PascalCase.tsx`
- `page.tsx` / `layout.tsx`: default export (required by Next.js)
- Everything in `components/`: named export — `export function Footer() {}`
- Props typed with a local `interface ComponentNameProps {}` directly above the component
- `'use client'` only on components that actually need it (interactivity, future animation hooks, form state) — Server Components stay the default everywhere else
- Content/data (e.g. course listings) lives in typed objects under `data/` — never hardcoded inline inside a component

## Responsiveness

- Mobile-first: base Tailwind classes target small screens, `sm:` / `md:` / `lg:` breakpoints layer up from there
- Every page and shared component (Header, Footer) must be checked at mobile, tablet, and desktop widths before being considered done

## Naming

- Event handler props: `onClick`; internal handler functions: `handleClick`
- Booleans: `isOpen`, `isLoading`, `hasError`

## Environment Variables

None yet — this is a static front end for now. If a contact form or any API integration is added later, credentials will live in `.env.local` (gitignored) and be documented here.

## Commands

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `[TODO: fill in]`

## Team Rules

- Update this file (and `docs/design-system.md` / `docs/animations.md`) in the same PR/commit as any change to the conventions they describe — don't let them drift from reality
- One-off component build specs (what a specific section needs to contain, e.g. "Hero needs a headline, subtext, one CTA") belong in the task description — not in this file or in `docs/`
- Base structure and page scaffolding is owned by [you]; animation and design polish is owned by [friend] — keep changes to `components/` scoped so both of you aren't editing the same files at once where avoidable
- No direct pushes to `main` — all changes go through a feature branch + Pull Request
- Every PR needs at least one review (from the other person) before merging
- Suggested branch naming: `feat/hero-section`, `fix/footer-mobile`, `chore/update-deps`, etc.
