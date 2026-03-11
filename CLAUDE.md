# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start development server (Vite, http://localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

> Note: This repo uses Node 20. If on Node 14, run `nvm use 20` first.

## Architecture

**Vite + React 18 + Tailwind CSS + Framer Motion** portfolio site for Santhosh Mamidisetti.

### Key Entry Points
- `index.html` — app shell, loads Google Fonts (Inter + JetBrains Mono)
- `src/main.jsx` → `src/App.jsx` — root component
- `src/data/profile.js` — **single source of truth for all content** (bio, experience, projects, skills, achievements). Edit this to update site content.

### Section Components (`src/components/`)
`App.jsx` composes these in order: `Nav` → `Hero` → `About` → `Experience` → `FeaturedProjects` → `Projects` → `Skills` → `Achievements` → `Contact` → `Footer`

Each section uses `framer-motion`'s `useInView` for scroll-triggered fade-in animations.

### Styling
- Tailwind utility classes throughout; no separate CSS files except `src/index.css` (global reset + custom utilities)
- Color palette: background `#060c16`, surface `#0a1220`, cards `#101d2e`, accent `#38bdf8`
- `tailwind.config.js` extends colors (`bg`, `surface`, `card`, `border`, `accent`, `muted`) and fonts

### Deployment
GitHub Actions (`.github/workflows/deploy.yml`) triggers on push to `main` branch: runs `npm run build` and deploys `dist/` to the `deploy` branch for GitHub Pages at `santhosh-mamidisetti.github.io`.

Resume PDF is served from `public/resume.pdf`.

### Adding/Updating Content
All site content lives in `src/data/profile.js`. To update:
- **Experience**: edit `profile.experience[]`
- **Featured projects**: edit `profile.featuredProjects[]` (6 cards in 2-column grid; each has a `gradient` Tailwind class for the card accent)
- **Other projects**: edit `profile.otherProjects[]` (12-item 3-column grid)
- **Skills**: edit `profile.skills` object (keys become category headers)
