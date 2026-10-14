# KGL Electrical Website

Built with Next.js (App Router), TypeScript, Tailwind CSS, PostgreSQL and Prisma.
Live demo: https://kgl-electrical.vercel.app/ 
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

## Layout notes 

1. Sticky navbar with a "Services" dropdown
2. Hero: big headline "We Are KGL Electrical" + CTA buttons + 3 highlight cards
3. About: company text + stats row 
4. Statement: full-width gold banner with a bold one-line positioning statement
5. Services: the four categories from the client brief
6. Vision & Mission, Values, Structure 
7. Contact: "Our Office" address/phone/email block + working contact form
8. Footer: quick links + Residential/Commercial/Industrial banner + copyright

## Deploying

Recommended: Vercel for hosting + Neon or Supabase for the Postgres database.
Add DATABASE_URL as an environment variable in your Vercel project settings.


