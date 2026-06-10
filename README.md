# Ansh Portfolio

Personal portfolio website for Ansh Kumar, a Computer Science student at JIIT, Noida. The site highlights projects, experience, skills, and contact details in a modern single-page layout built for recruiters and collaborators.

## Overview

This portfolio presents a concise professional profile with:

- A hero section with availability, role summary, and quick actions
- A recruiter-focused snapshot section
- Featured and non-featured project showcases
- Work experience and technical skills
- Contact links for email, GitHub, LinkedIn, and resume download

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion for animation
- Lucide React for icons
- shadcn/ui-style component patterns

## Project Structure

- `app/` - application shell, global styles, and the home page
- `components/sections/` - page sections such as hero, projects, experience, and contact
- `components/layout/` - layout pieces like the footer
- `components/ui/` - reusable UI primitives
- `data/` - profile, project, and experience content
- `public/images/` - project and site assets

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - start the local development server
- `npm run build` - create a production build
- `npm run start` - run the production server
- `npm run lint` - run ESLint

## Customization

Most of the visible content is driven from the files in `data/`:

- Update `data/site.ts` for the personal profile, social links, and availability
- Update `data/projects.ts` for featured work and project metadata
- Update `data/experience.ts` for internships or job history

The main page composition lives in `app/page.tsx`, which stitches together the section components.

## Deployment

The project is ready to deploy on Vercel or any platform that supports Next.js.

For a Vercel deployment, connect the repository and use the default build settings.

## Notes

This README reflects the current portfolio implementation in this repository. If you add new sections or change the content model, update the corresponding data files and keep this document in sync.
