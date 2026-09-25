# Music Institution Website — Project Context

## Overview

A front-end website for a music institution, built with Next.js (App Router) and TypeScript. Single-page site: Home, About, and Courses are stacked sections on one page (`app/page.tsx`), navigable via anchor links in the Header (smooth scroll to `#about`, `#courses`, etc.) rather than separate routes. Shared Header/Footer across the page. Alongside it, a small set of SEO article pages (e.g. `/piyano-dersi-cekmekoy`) is statically generated from `data/articles.ts` via `app/[slug]/page.tsx`. Design is sourced from Google Stitch and kept simple for now — a teammate will add animations and refined visual design in a later pass.


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
app/
  page.tsx              # home — renders all sections
  layout.tsx            # root layout, site-wide metadata (title template, Search Console verification)
  [slug]/page.tsx       # SEO article pages, one per entry in data/articles.ts (unknown slugs 404)
  sitemap.ts, robots.ts # generated /sitemap.xml and /robots.txt
components/
  Header.tsx            # nav with root-relative anchor links (/#about) so it works on sub-pages too
  Footer.tsx
  Article.tsx           # renders an SEO article (H1 title, sections as H2→H6 per the SEO brief)
  LocalBusinessJsonLd.tsx # schema.org LocalBusiness JSON-LD, rendered on the home page
  sections/             # HomeSection, AboutSection, CoursesSection, ContactSection (each wraps its own <section id="...">)
data/                   # typed content — courses.ts, articles.ts, localBusiness.ts (JSON-LD), etc.
lib/                    # utils, shared helpers — site.ts holds the canonical origin (https://www.merkursanat.com)
public/
  images/                 # site imagery, logos, icons
```

SEO status, open decisions and next steps: `tasks/seo-summary.md`.

Update this section whenever the real structure changes — it should reflect reality, not a plan.

## Component Conventions

- `app/page.tsx` is a Server Component and only composes/renders section components from `components/sections/` (wrapped by `Header`/`Footer`) — no UI markup, styling, or logic written directly inside `page.tsx`
- Each section (`HomeSection`, `AboutSection`, `CoursesSection`) renders its own `<section id="...">` with a matching `id` (`home`, `about`, `courses`) so the Header's anchor links (`#about`, `#courses`) can scroll to it
- Component files: `PascalCase.tsx`
- `page.tsx` / `layout.tsx`: default export (required by Next.js)
- Everything in `components/`: named export — `export function Footer() {}`
- Only declare a local `interface ComponentNameProps {}` when the component actually takes props, and type the ones it takes — an empty interface allows any non-nullish value and triggers the `@typescript-eslint/no-empty-object-type` lint warning, so prop-less components should just be `export function ComponentName() {}` with no props parameter
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
- Lint: `npm run lint`

## Team Rules

- Update this file in the same PR/commit as any change to the conventions it describes — don't let it drift from reality
- One-off component build specs (what a specific section needs to contain, e.g. "Hero needs a headline, subtext, one CTA") belong in the task description — not in this file
- Base structure and page scaffolding is owned by [you]; animation and design polish is owned by [friend] — keep changes to `components/` scoped so both of you aren't editing the same files at once where avoidable
- No direct pushes to `main` — all changes go through a feature branch + Pull Request
- Every PR needs at least one review (from the other person) before merging
- Suggested branch naming: `feat/hero-section`, `fix/footer-mobile`, `chore/update-deps`, etc.
