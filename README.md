# promo-site

A static, multi-page portfolio and marketing site built with Next.js. It includes a home page, a portfolio with fullscreen project views and image carousels, a contact section, light motion, and optional deployment to GitHub Pages (including correct asset URLs when the site is served from a repository subpath).

## Getting started

**Prerequisites:** [Node.js](https://nodejs.org/) 20 or newer (aligned with the CI workflow) and npm.

```bash
git clone <repository-url>
cd promo-site
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in a browser. The App Router will hot-reload as you edit files under `src/`.

**Production build (static export):**

```bash
npm run build
```

The static site is written to `out/`. Preview it with any static file server, for example:

```bash
npx serve out
```

For a local build that mimics GitHub Pages at `https://<user>.github.io/<repo>/`, set `BASE_PATH` before building (see [Base path and static hosting](#base-path-and-static-hosting)).

## Tech stack

| Area | Choice |
|------|--------|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) |
| UI | [React](https://react.dev) 19 |
| Language | [TypeScript](https://www.typescriptlang.org) (strict) |
| Styling | [Tailwind CSS](https://tailwindcss.com) v4 via `@import "tailwindcss"` in `src/app/globals.css` |
| Fonts | [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Geist Sans and Geist Mono (Google) |
| Animation | [Framer Motion](https://www.framer.com/motion/) (`MotionDiv` in `src/components/Motion.tsx`) |
| Page transitions | [next-view-transitions](https://github.com/shuding/next-view-transitions) plus CSS `::view-transition-*` in `globals.css` |
| Carousel | [Embla Carousel](https://www.embla-carousel.com/) (`embla-carousel-react`) |
| Icons | [Lucide React](https://lucide.dev/) and inline SVGs in `BrandIcon` |
| Class names | `clsx` and `tailwind-merge` (`cn()` in `src/lib/utils.ts`) |
| Scrollbars | [tailwind-scrollbar](https://github.com/adoxography/tailwind-scrollbar) (plugin in `globals.css`) |
| Lint / format | ESLint (`eslint-config-next`), Prettier with `prettier-plugin-tailwindcss` |

**Static export:** `output: "export"` in `next.config.ts` produces HTML, CSS, and client JS under `out/`. There is no Node server or server-side API at runtime.

**Images:** `next/image` is configured with `unoptimized: true` so the static export does not require a separate image optimization service.

## Repository layout

```
src/
  app/
    layout.tsx          # Root layout: fonts, metadata, view transitions, shell (navbar, main, footer)
    globals.css         # Tailwind, theme tokens, view-transition animations, keyframes
    page.tsx            # Home
    portfolio/page.tsx  # Portfolio listing
    contact/page.tsx    # Contact page and form UI
  components/
    Navbar.tsx          # Client: navigation, active route, outbound social links
    Footer.tsx          # Footer links and copyright line
    Container.tsx       # Centered content wrapper (`max-w-6xl`)
    PortfolioProjectCards.tsx  # Client: project cards, fullscreen dialog, carousel
    Carousel.tsx        # Client: Embla carousel using `next/image`
    Motion.tsx          # Re-exports Framer `motion.div` as `MotionDiv`
    BrandIcon.tsx       # GitHub and LinkedIn SVG icons
  data/
    portfolio.ts        # `PortfolioProject` type and `portfolioProjects` data
  lib/
    basePath.ts         # `withBasePath()` for public asset URLs under a subpath
    utils.ts            # `cn()` helper
public/                 # Static files (e.g. profile images, favicon, portfolio media)
.github/workflows/
  nextjs.yml            # Build and deploy `out/` to GitHub Pages
```

TypeScript path alias: `@/*` maps to `src/*` (see `tsconfig.json`).

## How it works

### Layout and chrome

The root layout sets global metadata, loads Geist fonts, and wraps the app with `ViewTransitions` from `next-view-transitions`. A sticky header (`Navbar`) sits above a scrollable main region (custom scrollbar styling) and a `Footer`. Color scheme follows the visitor’s `prefers-color-scheme` preference via Tailwind `dark:` variants.

### Navigation and transitions

In-app links use `Link` from `next-view-transitions` so route changes can use the View Transitions API. `globals.css` names the main content `view-transition-name: page` and applies short enter/exit animations; animations are skipped when the visitor prefers reduced motion.

### Home (`/`)

The home page includes a hero, calls-to-action, optional profile imagery from `public/`, layered images with a CSS pulse animation, and decorative Framer Motion background marquees. Content is easy to replace in `src/app/page.tsx`.

### Portfolio (`/portfolio`)

The portfolio page reads project data from `src/data/portfolio.ts` and renders `PortfolioProjectCards`. Each row shows a thumbnail, title, description, tags, and optional links to a repository or live site (those links do not trigger the fullscreen view).

Activating a card (click or Enter/Space) opens a fullscreen overlay mounted with a React portal. Inside the overlay: project title, links, an Embla-powered carousel of screenshots, and optional long description. Escape closes the overlay; arrow keys move between projects. Scroll on the document body is locked while the overlay is open.

### Contact (`/contact`)

The contact page is presentational: a form layout without a wired submit handler, plus `mailto:` and example third-party booking links. Integrate a form backend or provider by updating this page and any new API routes only if the deployment model allows them (static export does not include server routes unless the hosting setup adds them separately).

### Base path and static hosting

For hosting at `https://<user>.github.io/<repo>/`, `next.config.ts` resolves a **base path** as follows:

1. If the environment variable `BASE_PATH` is set, its value is used (a trailing slash is removed). Use `BASE_PATH=""` to force the site root.
2. Otherwise, when `GITHUB_ACTIONS` is `true`, the base path is `/<repository-name>` derived from `GITHUB_REPOSITORY`.
3. Otherwise the base path is empty, which matches local development at `/`.

When a non-empty base path is active, Next.js sets `basePath` and `assetPrefix`, and exposes `NEXT_PUBLIC_BASE_PATH`. Any URL pointing at files in `public/` that must work on GitHub Pages should go through `withBasePath()` from `src/lib/basePath.ts` (already used for images and static paths in key components).

## npm scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Development server |
| `npm run build` | Static export into `out/` |
| `npm run start` | Runs `next start` (suited to a Node server build, not the default static `out/` deployment) |
| `npm run lint` | ESLint |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting |

For the static export workflow, preview production output by serving the `out/` directory rather than relying on `npm run start`.

## Deploying to GitHub Pages

The workflow [`.github/workflows/nextjs.yml`](.github/workflows/nextjs.yml) runs on pushes to `main` and on manual dispatch. It installs dependencies, runs `next build`, uploads `./out` as the Pages artifact, and deploys with `actions/deploy-pages`.

In the GitHub repository settings, set Pages to use **GitHub Actions** as the source. The workflow environment supplies `GITHUB_REPOSITORY` and `GITHUB_ACTIONS` so the build picks the correct subpath without extra configuration.

**Simulate a Pages URL locally**

- Windows (cmd): `set BASE_PATH=/your-repo-name && npm run build`
- PowerShell: `$env:BASE_PATH="/your-repo-name"; npm run build`
- macOS / Linux: `BASE_PATH=/your-repo-name npm run build`

Then serve `out/` with a static server and open the matching path in the browser.

## Customization

| Goal | Where to look |
|------|----------------|
| Portfolio entries, tags, images | `src/data/portfolio.ts` and files under `public/portfolio/` |
| Site title and default description | `metadata` in `src/app/layout.tsx` |
| Navigation labels and routes | `src/components/Navbar.tsx` |
| Footer text and links | `src/components/Footer.tsx` |
| Contact copy, form fields, and action links | `src/app/contact/page.tsx` |
| Home hero and sections | `src/app/page.tsx` |

## License

If a `LICENSE` file exists in the repository root, it governs use of this project. If there is no license file, assume default copyright applies until the maintainers publish terms.
