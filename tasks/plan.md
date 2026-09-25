# Plan: Website Content Update — Implementation

## Context

The client sent new Turkish copy for the site (`WEBSİTESİ İÇİN.docx`), captured and reconciled
against the live codebase in `tasks/spec.md`. Since that spec was written, a teammate merged
PR #9 (`feat/image-changes-and-course-uploads`), which moved all course/hero images to local
files and added the 4 previously-deferred course cards (Çello, Resim, Seramik, Tiyatro) — but
with placeholder-style descriptions, not the doc's copy. The user confirmed (this session):
keep PR #9's titles/categories/images as final, replace only those 4 descriptions with doc text.

This plan breaks the remaining spec work into small, sequential content-edit tasks. There is no
new architecture, no new dependencies, no new components — every task is a scoped text/data
change to an existing file, verified by reading the rendered page.

## Dependency Graph

```
data/aboutFeatures.ts ──┐
                         ├──> components/sections/AboutSection.tsx  (renders both)
(About intro/MEB/LCM     │
 copy — same file) ──────┘

data/courses.ts ─────────────> components/sections/CoursesSection.tsx (heading text only;
                                                                        no data dependency)

components/sections/HomeSection.tsx   (standalone)
components/Footer.tsx                 (standalone)
```

Nothing here is a hard build-order dependency (no types/schemas change) — the graph just says
"don't edit `AboutSection.tsx` in two different tasks without finishing one first" to avoid
clobbering the same file. Tasks are otherwise independent and could be done in any order or
parallelized across files.

## Task List

### Phase 1: Independent standalone sections

**Task 1 — Home section copy**
- File: `components/sections/HomeSection.tsx`
- Change: replace `<h2>` two-line headline with a short derived headline (e.g. "Müzik, Resim,
  Tiyatro ve Seramikle Buluşun" — final wording at implementation time) + replace the body
  `<p>` with the doc's paragraph verbatim ("T.C. MEB onaylı, modern eğitim anlayışımız...").
  Images/stat blocks untouched (already updated in PR #9).
- Acceptance:
  - [ ] Headline + paragraph reflect new copy; no leftover "Merkür Sanat" / old wording
  - [ ] Existing layout/classes untouched (only text nodes change)
- Verify: `npm run build`; visually check Home section at mobile/tablet/desktop widths

**Task 2 — Footer branding**
- File: `components/Footer.tsx`
- Change: `"Merkür Sanat"` → `"Merkür Müzik ve Sanat Akademisi"`; copyright line
  `"Merkür Müzik Akademisi"` → `"Merkür Müzik ve Sanat Akademisi"`.
- Acceptance:
  - [ ] Both strings updated, nothing else in Footer touched
- Verify: visually check Footer renders correctly at mobile/tablet/desktop widths

### Checkpoint 1
- [ ] `npm run build` succeeds
- [ ] Home + Footer read correctly on mobile/tablet/desktop
- [ ] No other files touched yet

### Phase 2: About section (sequential — same file)

**Task 3 — About intro + new MEB/LCM subsections**
- File: `components/sections/AboutSection.tsx`
- Change:
  - Replace the 2 existing intro paragraphs with the doc's 2 intro paragraphs.
  - Add new subsection "MEB Standartlarında Güvenilir ve Nitelikli Eğitim" (`<h3>` + underline
    bar, matching the existing "Neden..." heading style) + its 2 paragraphs, inserted after intro.
  - Add new subsection "Uluslararası Başarıya Giden Yol: LCM ve Akademik Sınav Hazırlığı"
    (same heading style) + 1 intro paragraph + a 3-item bulleted list (Uluslararası Sertifika /
    Birebir Mentorluk / Geleceğe Yatırım), each with a bold lead-in phrase — reuse the
    bold-inline-span pattern already used in `ContactSection.tsx` (`<span
    className="font-semibold text-black">Hafta İçi:</span>`) rather than inventing a new style.
- Acceptance:
  - [ ] Intro paragraphs match doc text
  - [ ] Both new subsections present, in doc order, before the "Neden..." block
  - [ ] Visual style (heading size, underline bar, spacing) matches existing subsection pattern
- Verify: `npm run build`; visually check About section flow at mobile/tablet/desktop widths

**Task 4 — About features data + heading rename + closing reword**
- Files: `data/aboutFeatures.ts`, `components/sections/AboutSection.tsx`
- Change:
  - Replace all 4 entries in `data/aboutFeatures.ts` with the doc's 4 new features (Uzman
    Eğitmen Kadrosu / Bireysel Eğitim Programları / Modern ve Donanımlı Sınıflar / Sosyal ve
    Kültürel Gelişim). Reuse existing 4 icons (`workspace_premium`, `piano`, `tune`,
    `auto_awesome`) in whichever order best fits the new titles — no new icon research needed.
  - Rename `AboutSection.tsx` heading "Neden Merkür Sanat?" → "Neden Merkür Müzik ve Sanat
    Akademisi?".
  - Lightly reword the closing 2 paragraphs and the "Geleceğinize bir nota bırakın..." tagline
    so they don't read music-only (swap "nota/notalar" phrasing for language that also covers
    painting/theatre/ceramics) — doc supplies no replacement text here, so keep the same tone
    and length, minimal-diff wording changes only.
- Acceptance:
  - [ ] `aboutFeatures.ts` has exactly the 4 new entries, old ones fully removed
  - [ ] Heading renamed
  - [ ] Closing paragraphs/tagline no longer exclusively reference music/notes
- Verify: `npm run build`; visually check feature grid renders 4 cards correctly on all widths

### Checkpoint 2
- [ ] `npm run build` succeeds
- [ ] About section reads top-to-bottom in doc order, styling consistent with rest of site
- [ ] No lint/type errors introduced

### Phase 3: Courses section

**Task 5 — Courses description updates (all 8 cards)**
- File: `data/courses.ts`
- Change (description field only — titles/categories/images untouched):
  - Keman → doc's new one-line description
  - Piyano → doc's new one-line description
  - Gitar → doc's new one-line description (title/category already say "Gitar Eğitimi" /
    "Modern"; doc's "(Klasik, Akustik, Elektro)" detail folds into the description text itself
    rather than the title, to avoid touching the already-finalized title field)
  - Bateri/Davul → doc's new description
  - Çello (`id: "cello"`) → doc's çello paragraph
  - Resim (`id: "painting"`) → doc's Resim Atölyesi line
  - Seramik (`id: "ceramic"`) → doc's Seramik Atölyesi line
  - Tiyatro (`id: "theatre"`) → doc's Tiyatro ve Yaratıcı Drama line
- Acceptance:
  - [ ] All 8 `description` fields match doc text exactly
  - [ ] `title`, `category`, `imageSrc`, `imageAlt` unchanged from current committed state
- Verify: `npm run build`; visually check all 8 cards render, no obviously broken card

**Task 6 — Courses section heading**
- File: `components/sections/CoursesSection.tsx`
- Change: update the eyebrow/heading ("Eğitim Programlarımız" / "Enstrümanların Büyülü Dünyası")
  to explicitly cover both instruments and workshops (e.g. "Enstrüman ve Sanat Atölyelerimiz") —
  text-only change, no structural/grid change.
- Acceptance:
  - [ ] Heading no longer implies instruments-only
- Verify: visually check heading renders correctly at all widths

### Checkpoint 3 (final)
- [ ] `npm run build` succeeds
- [ ] All 8 course cards visually consistent — flag if Çello's longer doc paragraph makes its
      grid row noticeably taller than others (see Risk below); trim to first sentence only if
      it looks broken, not just "longer"
- [ ] Full page reviewed at mobile/tablet/desktop: Home → About → Courses → Contact → Footer
- [ ] Every `tasks/spec.md` success-criteria checkbox can be checked off
- [ ] No changes to Header nav, ContactSection, routing, or dependencies

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Çello's doc description (~2 sentences, ~400 chars) is much longer than other one-line card descriptions; CSS grid `items-stretch` will stretch its whole row to match, leaving visible empty space in Resim/Seramik/Tiyatro cards | Low–Med (visual polish only) | Implement as-is first (doc-exact text was an explicit user decision); at Checkpoint 3, if the row looks visibly broken rather than just taller, trim to the first sentence only and flag the trim to the user rather than silently deciding |
| Turkish diacritics (İ, ı, ş, ğ, ü, ö, ç) mis-encoded when copy is pasted into `.tsx`/`.ts` files | Low | Files are UTF-8 by default in this repo; verify rendered text visually at each checkpoint rather than trusting byte-for-byte paste |
| New MEB/LCM subsections in `AboutSection.tsx` visually clash with existing spacing/rhythm since About was previously shorter | Low–Med | Reuse the exact heading/underline-bar/paragraph classes already in the file for the "Neden..." block — no new visual pattern introduced |

## Verification (end-to-end)

1. `npm run build` after each phase — must stay clean throughout.
2. `npm run dev`, manually walk the single page top to bottom at 3 breakpoints (mobile ~375px,
   tablet ~768px, desktop ~1280px+), per CLAUDE.md's responsiveness rule.
3. Diff the final `data/courses.ts` and `data/aboutFeatures.ts` against `tasks/spec.md`'s
   Content Mapping section line-by-line to confirm no doc text was paraphrased instead of copied.
4. Check every box in `tasks/spec.md`'s Success Criteria before calling this done.
