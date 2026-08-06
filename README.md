# KGL Electrical Website

Built with Next.js (App Router), TypeScript, Tailwind CSS, PostgreSQL and Prisma.
Layout is modelled after crushco.za.com (hero + feature highlights, about with
stats, bold statement banner, services, office/contact block, footer with quick
links), styled in KGL's navy and gold. Every section uses semantic HTML only —
no <div> or <span> elements anywhere in the codebase.

## Setup

1. Install dependencies:

   npm install

2. Create a `.env` file (copy `.env.example`) and set `DATABASE_URL` to a
   Postgres connection string (e.g. from Neon or Supabase).

3. Generate the Prisma client and push the schema:

   npx prisma generate
   npx prisma db push

4. Run the dev server:

   npm run dev

5. Open http://localhost:3000

## Project structure

- src/app/page.tsx — composes the page: Navbar, Hero, About, Statement,
  Services, VisionMission, Values, Structure, Contact, Footer
- src/app/api/contact/route.ts — handles contact form submissions, saves to Postgres
- src/components/ — one file per section
- src/components/icons/Icons.tsx — inline SVG icons used across the site
- src/lib/prisma.ts — Prisma client instance
- prisma/schema.prisma — ContactSubmission, Service, Testimonial models

## Colours

- Navy: #0B1E3A
- Navy light: #14294F
- Gold: #F5A800
- Off-white: #F4F6F8

## Layout notes (mirrors crushco.za.com structure)

1. Sticky navbar with a "Services" dropdown (like Crushco's Coal Crushers submenu)
2. Hero: big headline "We Are KGL Electrical" + CTA buttons + 3 highlight cards
3. About: company text + stats row (placeholder numbers — swap in real figures,
   e.g. years established, projects completed, once the client provides them)
4. Statement: full-width gold banner with a bold one-line positioning statement
5. Services: the four categories from the client brief, each with its own
   anchor id so the nav dropdown scrolls straight to it
6. Vision & Mission, Values, Structure — same content sections as the client doc
7. Contact: "Our Office" address/phone/email block + working contact form
8. Footer: quick links + Residential/Commercial/Industrial banner + copyright

## Deploying

Recommended: Vercel for hosting + Neon or Supabase for the Postgres database.
Add DATABASE_URL as an environment variable in your Vercel project settings.

## Note

node_modules and .next are excluded from this zip. Run `npm install` first.
Prisma's client could not be generated inside this sandbox (its engine download
is blocked here), so src/lib/prisma.ts will show a type error until you run
`npx prisma generate` locally, where it resolves automatically.
