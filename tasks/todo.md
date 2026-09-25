# Todo: Website Content Update

See `tasks/plan.md` for full detail and `tasks/spec.md` for source content mapping.

### Phase 1
- [x] Task 1: Home section copy (`components/sections/HomeSection.tsx`)
- [x] Task 2: Footer branding (`components/Footer.tsx`)
- [x] Checkpoint 1: build clean. Visual check at mobile/tablet/desktop NOT done — no
      browser-automation tool available in this session; only confirmed via `npm run build`
      and rendered-HTML text grep.

### Phase 2
- [x] Task 3: About intro + new MEB/LCM subsections (`components/sections/AboutSection.tsx`)
- [x] Task 4: About features data + heading rename + closing reword
      (`data/aboutFeatures.ts`, `components/sections/AboutSection.tsx`)
- [x] Checkpoint 2: build clean, no lint/type errors. Visual check NOT done (see above).

### Phase 3
- [x] Task 5: Courses description updates, all 8 cards (`data/courses.ts`)
- [x] Task 6: Courses section heading (`components/sections/CoursesSection.tsx`)
- [x] Checkpoint 3 (final): build clean, all doc-sourced text confirmed present in rendered
      HTML. Çello description shortened (2026-07-26, user feedback) from ~390 to 175 chars;
      Resim/Seramik/Tiyatro each extended with one added clause (same meaning, no new claims)
      so all 8 card descriptions now sit in a tight 143–189 char range for row alignment.
      **Still open:** manual mobile/tablet/desktop visual pass — needs a human (or browser
      tool) to eyeball.
