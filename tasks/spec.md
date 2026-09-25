# Spec: Website Content Update (July 2026 copy pass)

> **Status update (2026-07-26):** PR #9 (`feat/image-changes-and-course-uploads`, merged as
> `e4b8cc7`) unblocked the photo dependency — all course/hero images are now local files under
> `public/images/`, and the 4 previously-deferred cards (Çello, Resim, Seramik, Tiyatro) already
> exist in `data/courses.ts`. See "Status vs. Spec" below for what still needs doing.

## Objective

Replace the site's Turkish copy with the new text supplied in `WEBSİTESİ İÇİN.docx`, rebrand the
institution name consistently, and fold "art workshop" offerings (Seramik, Resim, Tiyatro)
alongside instrument courses in the existing Courses grid. Gallery and Eğitmenler (Instructors)
nav items mentioned in the doc are explicitly **out of scope** for this pass (no content exists
for them yet — confirmed with user).

Success looks like: every section on the live single page reads the new copy, the nav/footer
consistently say "Merkür Müzik ve Sanat Akademisi," Courses shows all 8 cards with doc-sourced
descriptions, and nothing else about layout/behavior regresses.

## Status vs. Spec (as of PR #9)

| Item | Status |
|---|---|
| Course/hero images moved to local `public/images/` | ✅ Done (PR #9) |
| Çello, Resim, Seramik, Tiyatro cards added to `data/courses.ts` | ✅ Done (PR #9) |
| Çello/Resim/Seramik/Tiyatro **titles + categories** | ✅ Keep as committed — user decided not to rename to doc's "...Atölyesi" framing; instrument-style naming ("Resim Eğitimi," category "Görsel Sanatlar," etc.) stands as final |
| Çello/Resim/Seramik/Tiyatro **descriptions** | ⚠️ **Still needs work** — PR #9 used freshly-written short descriptions, not the docx's copy. User decided (2026-07-26) these must be replaced with the doc-exact text (see Courses section below) |
| Keman/Piyano/Gitar/Bateri descriptions updated to doc copy | ❌ Not done — still original text |
| Home headline + paragraph | ❌ Not done — only the two hero images were swapped to local files; H2/paragraph text unchanged |
| About section (MEB/LCM subsections, new `aboutFeatures`, reworded closing/tagline) | ❌ Not done — file untouched since spec was written |
| Footer branding unification | ❌ Not done — file untouched |
| Courses section heading update | ❌ Not done — `CoursesSection.tsx` untouched |
| Gallery / Eğitmenler | ❌ Still correctly out of scope, nothing added |

## Decisions Already Made (with user)

- **Branding:** unify all instances of the institution name to **"Merkür Müzik ve Sanat Akademisi"**
  (Home H1 area, Footer name + copyright line). Instagram handle stays `@merkurmuzikakademisi`
  (unchanged, already matches).
- **Gallery ("GALERİ"):** skip entirely this pass — no nav link, no section.
- **Eğitmenler ("EĞİTMENLER"):** skip entirely this pass — no nav link, no section. The doc's
  note about instructor portrait photo style is recorded here for whenever that section is built:
  *"black-and-white or soft-color background, sincere but professional portraits."*
- **Sanat Atölyelerimiz (workshops):** live as extra cards inside the existing `CoursesSection`
  grid (`data/courses.ts`) — done in PR #9. Titles/categories use instrument-style naming
  ("Resim Eğitimi" / "Görsel Sanatlar", etc.) rather than the doc's "...Atölyesi" framing — user
  confirmed (2026-07-26) this naming is final, only the description text needs to be aligned to
  the doc.
- **Home headline:** add a short derived headline above the doc's sentence (two-part layout,
  matching today's structure), rather than using the doc sentence alone.
- **About closing text/tagline:** lightly reword the closing paragraphs and "Geleceğinize bir
  nota bırakın..." tagline so they're discipline-neutral (not music-only), since scope now
  includes painting/theatre/ceramics. Doc didn't supply replacement text for this — implementer
  drafts it consistent with the rest of the new copy.
- **Courses section heading:** update to explicitly cover both instruments and workshops (e.g.
  "Enstrüman ve Sanat Atölyelerimiz") rather than leaving the instrument-only-sounding heading.
- **New card descriptions (Çello, Resim, Seramik, Tiyatro):** replace PR #9's placeholder-style
  descriptions with the docx's exact wording — user confirmed (2026-07-26) doc text takes
  precedence over what was already committed.

## Content Mapping

### Nav (`components/Header.tsx`)

No change — doc's new nav (`ANASAYFA · HAKKIMIZDA · KURSLAR · GALERİ · EĞİTMENLER · İLETİŞİM`)
adds Gallery/Eğitmenler which are out of scope. Existing 4 links (Ana Sayfa, Hakkımızda,
Kurslarımız, İletişim) stay as-is.

### Home (`components/sections/HomeSection.tsx`)

Replace the `<h2>` heading and paragraph. Doc gives one flowing tagline, not a two-line headline
— I'll keep a short headline (derived, see Open Question 1) and use the doc sentence as the body
paragraph:

> "T.C. MEB onaylı, modern eğitim anlayışımız ve alanında uzman eğitmen kadromuzla müzik, resim,
> tiyatro ve seramik yolculuğunuza eşlik etmek için kapılarımızı açtık."

Stat blocks ("25+ Yıllık Deneyim", "500+ Mezun Sanatçı") — no new numbers given, leave unchanged.

### About (`components/sections/AboutSection.tsx` + `data/aboutFeatures.ts`)

Doc has substantially more content than today's About. New structure, in doc order:

1. Intro — 2 paragraphs (replace current 2 intro paragraphs verbatim from doc).
2. **New subsection:** "MEB Standartlarında Güvenilir ve Nitelikli Eğitim" — heading + 2
   paragraphs (new `<h3>` block, same visual style as existing "Neden..." heading — underline bar
   etc.).
3. **New subsection:** "Uluslararası Başarıya Giden Yol: LCM ve Akademik Sınav Hazırlığı" —
   heading + 1 intro paragraph + 3 bullet items, each with a bold lead-in phrase:
   - **Uluslararası Sertifika:** ...
   - **Birebir Mentorluk:** ...
   - **Geleceğe Yatırım:** ...
4. "Neden Merkür Müzik ve Sanat Akademisi?" heading (renamed from "Neden Merkür Sanat?") +
   4-card feature grid — **replace all 4 `aboutFeatures` entries** (different themes than
   today's, not a reword):
   - Uzman Eğitmen Kadrosu
   - Bireysel Eğitim Programları
   - Modern ve Donanımlı Sınıflar
   - Sosyal ve Kültürel Gelişim
   (icons: reuse existing 4 icons in this new order unless a better Material Symbol fits —
   implementer's call, not content-critical.)
5. Closing paragraphs + tagline ("Geleceğinize bir nota bırakın...") — doc doesn't replace these;
   keep as-is unless they now read oddly next to the new multi-discipline framing (they
   reference "notalar/müzik" specifically, which under the new painting/theatre/ceramics scope
   may need a light touch — see Open Question 2).

### Courses (`components/sections/CoursesSection.tsx` + `data/courses.ts`)

Section heading changes: eyebrow "Eğitim Programlarımız" could stay, or doc's "ENSTRÜMANLARIMIZ"
label — since workshops now share this grid, keep the existing generic heading
("Enstrümanların Büyülü Dünyası" / "Eğitim Programlarımız") rather than "Enstrümanlarımız,"
since that would misdescribe the workshop cards. Flag for user sign-off (Open Question 3).

Update existing course descriptions to doc copy:
- **Keman** → new description from doc
- **Piyano** → new description from doc
- **Gitar** → doc specifies "(Klasik, Akustik, Elektro)" — update title/category and description
- **Bateri / Davul** → doc renames from "Bateri Eğitimi"; update description

**Descriptions to replace (titles/categories/images already final, from PR #9):**
- **Çello** (`id: "cello"`) → replace with doc's çello paragraph ("İnsan sesine en yakın
  frekansa ve derin tonlara sahip olan çello...")
- **Resim** (`id: "painting"`) → replace with doc's Resim Atölyesi line ("Karakalemden yağlı
  boyaya, renklerin büyülü dünyasında kendi tarzınızı keşfedin.")
- **Seramik** (`id: "ceramic"`) → replace with doc's Seramik Atölyesi line ("Çamura şekil
  verirken toprağın enerjisiyle dinlenin, kendi hayal gücünüzü üç boyutlu eserlere
  dönüştürün.")
- **Tiyatro** (`id: "theatre"`) → replace with doc's Tiyatro ve Yaratıcı Drama line ("Sahne
  tozuyla tanışın! Kendini ifade etme, hitabet ve empati yeteneğinizi tiyatro disipliniyle
  güçlendirin.")

Only the `description` field changes on these 4 — `title`, `category`, `imageSrc`, `imageAlt`
stay exactly as committed in PR #9.

Grid is now 8 cards total: Keman, Piyano, Gitar, Bateri/Davul, Çello, Resim, Seramik, Tiyatro.

### Contact (`components/sections/ContactSection.tsx`)

No changes in doc — leave phone/address/hours/Instagram untouched.

### Footer (`components/Footer.tsx`)

Update `"Merkür Sanat"` → `"Merkür Müzik ve Sanat Akademisi"`. Copyright line already says
"Merkür Müzik Akademisi" → align to `"Merkür Müzik ve Sanat Akademisi"`.

## Files Touched

```
components/sections/HomeSection.tsx     — headline + paragraph copy
components/sections/AboutSection.tsx    — new subsections (MEB, LCM), renamed heading, structure
data/aboutFeatures.ts                   — replace all 4 entries (new titles/descriptions)
data/courses.ts                         — description-only edits on all 8 entries (4 doc-copy
                                           updates + 4 PR #9 description replacements)
components/sections/CoursesSection.tsx  — heading/eyebrow copy only, no structural change
components/Footer.tsx                   — brand name string
```

No new components, no new routes, no dependency changes.

## Boundaries

- **Always:** keep Turkish text, keep Tailwind class conventions and existing visual style
  (underline bars, orange accents, card patterns) for any new subsection; keep
  `data/`-driven content pattern (no hardcoded copy inside `.tsx` beyond headings/labels that
  aren't list-driven).
- **Ask first:** any nav/section additions beyond this spec's scope (Gallery, Eğitmenler are
  explicitly deferred); any change to titles/categories/images on the 4 PR #9 cards (those are
  final — only descriptions are in scope).
- **Never:** touch Gallery/Eğitmenler (out of scope this pass), touch Contact info, rename
  routes, add a CMS/backend for content.

## Success Criteria

- [ ] Home, About, Footer show the new copy from the doc (verified paragraph-by-paragraph).
- [ ] Institution name reads "Merkür Müzik ve Sanat Akademisi" everywhere it currently says
      "Merkür Sanat" or "Merkür Müzik Akademisi."
- [ ] Courses grid has all 8 cards (Keman, Piyano, Gitar, Bateri/Davul, Çello, Resim, Seramik,
      Tiyatro), each with the doc's description text; titles/categories/images unchanged from
      PR #9; heading updated to cover instruments + workshops together.
- [ ] `aboutFeatures.ts` has the 4 new "Neden..." entries, not the old ones.
- [ ] About section includes the MEB and LCM subsections in doc order, styled consistently with
      existing headings; closing paragraphs/tagline reworded to be discipline-neutral.
- [ ] No Gallery or Eğitmenler nav links/sections added.
- [ ] Site builds clean (`npm run build`) and passes a manual mobile/tablet/desktop check per
      CLAUDE.md's responsiveness rule.
- [ ] No changes to Contact section content.
