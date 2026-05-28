# Muhamad Ferhan Portfolio

Portfolio website modern dan profesional dibangun dengan Next.js, Tailwind CSS, dan Framer Motion.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Theme**: next-themes (Dark/Light mode)
- **Fonts**: Syne (Display) + DM Sans (Body) + JetBrains Mono

## Features

- ✅ Dark/Light mode toggle
- ✅ Smooth scroll animations
- ✅ Typing text animation
- ✅ Loading screen
- ✅ Floating navbar with glassmorphism
- ✅ Responsive hamburger menu
- ✅ Back to top button
- ✅ Download CV button
- ✅ Certificate modal preview
- ✅ Project filter
- ✅ Contact form
- ✅ SEO optimized
- ✅ Vercel ready

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel

1. Push to GitHub
2. Import to Vercel
3. Deploy!

## Folder Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── CertificatesSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   └── ContactSection.tsx
│   ├── ui/
│   │   ├── BackToTop.tsx
│   │   ├── LoadingScreen.tsx
│   │   └── SectionWrapper.tsx
│   └── Providers.tsx
├── data/
│   └── portfolio.ts
└── lib/
    └── utils.ts
```

## Customization

Edit `src/data/portfolio.ts` to update personal information, skills, projects, certificates, and experiences.
