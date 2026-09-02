# Moiz Hasnain — SEO Executive Portfolio

A premium, dark-themed personal brand website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000. Requires an internet connection on first build (the Inter font is fetched from Google Fonts by `next/font`).

## Build for production

```bash
npm run build
npm start
```

## Project structure

- `app/` — App Router entry: `layout.tsx` (SEO metadata, Open Graph/Twitter tags, Person schema markup), `page.tsx`, `sitemap.ts`.
- `components/` — One component per section: `Navbar`, `Hero`, `About`, `Skills`, `Tools`, `Projects`, `CaseStudies`, `Experience`, `CredentialsAndHighlights`, `Contact`, `Footer`.
- `lib/data.ts` — All content and real SEMrush metrics in one place. Edit this file to update case study numbers, projects, skills, or contact info without touching component markup.
- `public/avatar.svg` — Illustrated vector avatar (not a stock photo).

## Content notes

- All case study metrics (organic traffic, keywords, referring domains, backlinks, authority score) were transcribed directly from the SEMrush Domain Overview screenshots provided, with the report date noted per case study. No metric was estimated or invented.
- `InnovativeSecurityControls.com` is listed under Featured Projects without a case study, since no SEMrush data was supplied for that domain.
- Before deploying, replace `https://moizhasnain.com` in `app/layout.tsx`, `app/sitemap.ts`, and `public/robots.txt` with your real production domain, and add a matching `public/og-image.png` (1200×630) for social share previews.

## Deploying

The project deploys cleanly to Vercel, Netlify, or any Node host that supports Next.js 14. On Vercel: push to a Git repo, import it at vercel.com/new, and deploy with default settings.
