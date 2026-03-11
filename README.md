# Santhosh Mamidisetti — Portfolio

Personal portfolio site. Built with Vite 5, React 18, Tailwind CSS 3, and Three.js.

Live at: [santhosh-mamidisetti.github.io](https://santhosh-mamidisetti.github.io/)

## Development

```bash
nvm use 20          # Required — default shell may be Node 14
npm run dev         # Dev server (Vite, localhost:5173)
npm run build       # Production build → dist/
npm run preview     # Preview the dist/ build locally
```

## Architecture

**Vite 5 + React 18 + Tailwind CSS 3** portfolio site for Santhosh Mamidisetti.

### Stack
- `framer-motion` — scroll-linked animations and section entrance effects
- `react-icons/fi` — Feather icon set
- `three` + `@react-three/fiber@^8` — 3D particle network (must stay on v8; v9 requires React 19)

### Content
All site content lives in **`src/data/profile.js`** — single source of truth for bio, experience, projects, skills, achievements, socials, and contact info.

### Components
All page sections are in `src/components/`. The render order in `App.jsx`:
`Nav` → `Hero` → `About` → `Experience` → `FeaturedProjects` → `Projects` → `Skills` → `Achievements` → `Contact` → `Footer`

### Three.js
`GlobalScene.jsx` renders a single fixed-position canvas (`z-0`, `pointer-events-none`) that persists across the entire page. Lazy-loaded via `React.lazy` + `Suspense`. Vite splits it into a separate `three-vendor` chunk (~235KB gzipped, deferred).

Scroll-linked opacity: full in hero → fades to 0.22 past the hero → ambient background throughout. Mouse parallax and scroll depth handled in `useFrame`.

### Deployment
GitHub Actions (`.github/workflows/deploy.yml`) triggers on push to `main`. Builds with Node 20, deploys `dist/` to the `deploy` branch via `peaceiris/actions-gh-pages@v3`.

Live at: `https://santhosh-mamidisetti.github.io/`

`vite.config.js` uses `base: '/'`. All asset links (resume, favicon) use `import.meta.env.BASE_URL`.

### Static assets
`public/favicon.svg` and `public/resume.pdf` are the only tracked files under `public/` — everything else is gitignored. They are copied into `dist/` on build.
