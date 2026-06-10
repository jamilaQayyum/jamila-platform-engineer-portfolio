# Jamila Qayyum — Senior DevOps Engineer Portfolio

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Modern DevOps aesthetic** — Glassmorphism, terminal components, cloud-themed design
- **Fully responsive** — Optimized for mobile, tablet, and desktop
- **Dark/Light mode** — Persistent theme toggle with system preference detection
- **Smooth animations** — Framer Motion scroll animations and micro-interactions
- **SEO optimized** — Meta tags, Open Graph, and semantic HTML
- **Interactive sections** — Project filtering, detail modals, animated counters
- **Scroll progress indicator** and back-to-top button

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) — Type safety
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first styling
- [Framer Motion](https://www.framer.com/motion/) — Animations
- [Lucide React](https://lucide.dev/) — Icons

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd jamila-qayyum-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Customization

### Personal Information

Edit `src/data/personal.ts` to update name, contact details, bio, and stats.

### Projects

Modify `src/data/projects.ts` to add or update featured projects.

### Skills

Update skill categories in `src/data/skills.ts`.

### Resume

Resume is located at `public/Jamila-Platform-Devops.pdf`. Update `personalInfo.resume` in `src/data/personal.ts` if you rename the file.

### Contact Form

The contact form currently shows a success message on submit. To enable real email delivery, integrate a service like:

- [Resend](https://resend.com/)
- [Formspree](https://formspree.io/)
- [SendGrid](https://sendgrid.com/)

## Live Site (GitHub Pages)

After pushing to `main`, the site deploys automatically via GitHub Actions.

**Live URL:** https://jamilaqayyum.github.io/jamila-platform-engineer-portfolio/

### One-time GitHub setup

1. Push to `main` — the workflow builds and deploys to the `gh-pages` branch
2. Go to your repo **Settings** → **Pages**
3. Under **Build and deployment**, set **Source** to **Deploy from a branch**
4. Select branch: **`gh-pages`** and folder: **`/ (root)`**
5. Click **Save**, wait 2–3 minutes, then open the URL above

## Deploy to Vercel (alternative)

You can also deploy using [Vercel](https://vercel.com):

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub Integration

1. Push your code to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site will be live at `https://your-project.vercel.app`

### Environment Variables

No environment variables are required for the base portfolio. Add any API keys if you integrate a contact form backend.

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout with SEO metadata
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles & Tailwind
├── components/
│   ├── layout/           # Header, Footer, ThemeToggle, etc.
│   ├── sections/         # Page sections (Hero, About, etc.)
│   └── ui/               # Reusable UI components
├── data/                 # Content data files
├── lib/                  # Utility functions
└── providers/            # React context providers
```

## License

MIT
