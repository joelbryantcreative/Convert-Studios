# Convert Studios

Marketing website for **Convert Studios** — a filmmaker-led content marketing studio. Built as a long single-page scroll plus Work, Contact and Privacy pages.

> Content that converts attention into customers.

## Tech stack

- **Next.js 15** (App Router) + **TypeScript**
- **Tailwind CSS** v3
- Fonts: **Fraunces** (serif headlines) + **Inter** (body) via `next/font`
- Deploy target: **Vercel** + GitHub

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Project structure

```
app/
  layout.tsx          # fonts, SEO/OG metadata, header + footer shell
  page.tsx            # home (Hero → LogoBar → Services → Mission → Testimonials → CTA)
  work/page.tsx       # case study grid
  work/[slug]/page.tsx# stubbed case study detail (SSG)
  contact/page.tsx    # contact form page
  privacy/page.tsx    # stubbed privacy policy
components/           # one component per section
lib/caseStudies.ts    # placeholder case study data
```

## Placeholders to swap before launch

| What | Where | Note |
| --- | --- | --- |
| **Calendly link** | `components/Booking.tsx` → `CALENDLY_URL` | Currently a placeholder URL in the booking modal iframe. |
| **Contact form handler** | `components/ContactForm.tsx` | Stubbed with `console.log`. Drop in a Formspree endpoint or API route. |
| **Client logos** | `components/LogoBar.tsx` | Text wordmarks; replace with real logo assets. |
| **Testimonials** | `components/Testimonials.tsx` | Placeholder quotes (first name + last initial). |
| **Case studies** | `lib/caseStudies.ts` | Placeholder clients, metrics and Unsplash imagery. |
| **Imagery** | throughout | Unsplash placeholders (cinematic/documentary seeds). |
| **Social links** | `components/Footer.tsx`, `app/contact/page.tsx` | IG is `@convert.studios`; LinkedIn is a placeholder URL. |

## Brand

- Palette: cream `#F5F1E8`, bone `#EBE5D6`, ink `#1A1A1A`, oxblood `#6B2737`, terracotta `#B5503B`
- Defined as Tailwind theme tokens in `tailwind.config.ts`.
