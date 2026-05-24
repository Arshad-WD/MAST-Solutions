# MAST Solutions | Studio Blueprint

A high-performance, brutalist editorial web architecture designed for digital agencies, automation studios, and technical operators. Built to bypass standard template bloat, this repository contains a custom Next.js front-end with kinetic typography, seamless scroll-spying, and high-conversion UX patterns.

## Tech Stack & Architecture

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with a bespoke brutalist / high-contrast design system.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for micro-interactions and layout transitions.
- **Scroll Engine**: [GSAP ScrollTrigger](https://gsap.com/docs/v3/Plugins/ScrollTrigger/) for complex, pinned vertical timeline sequences.
- **Components**: Radix UI / Shadcn primitives customized for editorial aesthetics.

## Key Features

- **Dynamic Island TOC**: A custom built floating index that natively tracks the user's scroll position across GSAP-pinned slide sections, providing seamless jump navigation.
- **Kinetic Editorial Menus**: Massive typography-driven hover menus replacing standard tabs.
- **Brutalist "Wall of Love"**: Testimonial ledgers that invert to high-contrast dark modes on interaction.
- **Frictionless Pipelines**: Custom contact form integration loops for rapid client onboarding.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Environment Variables

Check the `.env.example` file (if present) for required environment configuration, particularly for any form endpoints, email automation triggers, or CRM webhook integrations you plan to connect.

## Deployment

This architecture is optimized for zero-config deployments on [Vercel](https://vercel.com/new).

## License

All rights reserved by MAST Solutions.
