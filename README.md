# Identris Systems Limited — Website

Frontend-only marketing site for Identris Systems Limited, built with Next.js
(App Router), TypeScript, and Tailwind CSS. No database, no auth, no backend
beyond a static form handler on the Contact page.

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Production build:

```bash
npm run build
npm run start
```

## Project structure

- `src/app/*` — one route per page (`/`, `/about`, `/services`, `/work`,
  `/templates`, `/contact`), plus `sitemap.ts` and `robots.ts`.
- `src/components/ui/*` — base building blocks: `Button`, `Card`, `Section`,
  `Container`, `Icon`.
- `src/components/layout/*` — `Header`, `Footer`, `Logo`, `SocialLinks`.
- `src/components/CaseStudyCard.tsx` — used on Home (summary) and Work
  (full write-up); one component, two variants.
- `src/components/TemplateGallery.tsx` — the filterable grid + preview modal
  on the Templates page.
- `src/components/ui/TemplatePreviewFrame.tsx` — renders a live, scaled,
  non-interactive crop of a mockup page (same technique as a scaled-iframe
  design gallery) for grid thumbnails.
- `public/templates/mockups/*.html` — the actual template designs: real,
  self-contained, responsive HTML/CSS mini-sites (one per industry), not
  static images. See "Adding a new Templates gallery entry" below.
- `src/lib/constants.ts` — site-wide config (name, email, CV path, form
  endpoint, nav links, social links). Start here to update contact details.
- `src/lib/data/*` — content as data: `services.ts`, `caseStudies.ts`,
  `templates.ts`, `capabilities.ts`.
- `src/lib/seo.ts` — per-page metadata helper + JSON-LD Organization schema.

## Things to swap in before launch

These are marked with `TODO` comments in the code:

1. **Logo** — `src/components/layout/Logo.tsx` is a placeholder text
   wordmark. Replace it with the real logo (SVG preferred) once you have the
   asset files.
2. **Domain, email, phone** — `src/lib/constants.ts` → `siteConfig`. The
   `url` field also feeds `metadataBase`, the sitemap, and JSON-LD, so update
   it before deploying.
3. **CV PDF** — drop the real file into `public/cv/` named
   `kelvin-ogodo-cv.pdf` (or update `siteConfig.cvUrl` to match a different
   filename). Delete `public/cv/PLACE_CV_HERE.txt` once it's in place.
4. **Contact form endpoint** — see below.
5. **Default OG/share image** — `public/og/default.svg` is a placeholder.
   Most platforms (X, Facebook, LinkedIn) require a raster image (PNG/JPG,
   1200×630) for link previews, not SVG. Export a real one and point
   `src/lib/seo.ts` (`buildMetadata`'s default `ogImage`) at it, or pass a
   custom `ogImage` per page.
6. **Analytics** — off by default. Set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or
   `NEXT_PUBLIC_GA_ID` in `.env.local` to enable (see
   `src/components/Analytics.tsx`).
7. **Template gallery mockups** — `public/templates/mockups/*.html` are
   illustrative but fully real, responsive mini-sites (fictional brand names,
   placeholder copy). Swap in real client work here over time the same way —
   see below.

## Changing the contact form endpoint

The Contact page (`src/app/contact/page.tsx` → `src/components/ContactForm.tsx`)
posts to `siteConfig.formEndpoint` (in `src/lib/constants.ts`), which reads
from `NEXT_PUBLIC_FORM_ENDPOINT`.

1. Create a form at [Formspree](https://formspree.io) or
   [Getform](https://getform.io) and copy its endpoint URL.
2. Add it to `.env.local`:
   ```
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/your-form-id
   ```
3. Add the same variable in your Vercel project settings for production.

The form submits `name`, `email`, `company`, `project_type`, `message`, and
(when arriving from the Templates page) a hidden `referenced_template` field.

## Adding a new Work case study

Append an entry to `src/lib/data/caseStudies.ts` following the existing
`CaseStudy` shape (problem, solution, stack, result, stats, image). It will
automatically render on `/work` via `CaseStudyCard`. Set `featured: true` on
at most one entry to control which case study appears on the Home page.

## Adding a new Templates gallery entry

Each template is a real, self-contained HTML/CSS page under
`public/templates/mockups/`, not a flat image — it's rendered live in the
gallery (scaled down to fit the card, via `TemplatePreviewFrame`) and
embedded directly in the "View example" modal, where the desktop pane shows
it at near-full size and the mobile pane renders it at phone width and lets
the page's own responsive CSS take over — genuine mobile layout, not a second
static asset to keep in sync.

To add one:

1. Create `public/templates/mockups/<slug>.html` — a standalone page (inline
   `<style>`, Google Fonts via `<link>` if needed, no JS required). Give it
   real nav/hero/content/footer sections and its own `@media (max-width:720px)`
   rules so the mobile preview actually reflows. Use a fictional brand name
   and placeholder copy/CSS-drawn shapes instead of real photos.
2. Append an entry to `src/lib/data/templates.ts` following the
   `TemplateEntry` shape, pointing `mockupUrl` at that file.
3. Add its `category` to the `TemplateCategory` union in `src/lib/types.ts`
   if it's a new category.

The gallery, filters, and preview modal on `/templates` (and the teaser strip
on Home) pick it up automatically.

## Asset attribution

`public/case-studies/nigeria-coat-of-arms.svg` is the Coat of Arms of Nigeria
by Lumia1234, from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Coat_of_arms_of_Nigeria.svg),
licensed [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/deed.en).
Unmodified from the source file.

## Deploying

Push to a Git repository and import it in [Vercel](https://vercel.com/new).
No environment variables are required to build; `NEXT_PUBLIC_FORM_ENDPOINT`
should be set for the contact form to actually deliver messages.
