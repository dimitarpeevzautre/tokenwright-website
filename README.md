# tokenwright-website

The marketing site at https://tokenwright.com. React, built with Vite and prerendered to static HTML.

## Run locally

Needs Node 20.19 or newer (CI uses Node 24).

```sh
npm install
npm run dev
```

Vite prints the local URL (http://localhost:5173 by default).

## Build

```sh
npm run build
```

This writes the finished site to `dist/`:

1. `vite build` bundles the JS and CSS with production React.
2. `scripts/prerender.mjs` renders every route to its own HTML file (`dist/pricing/index.html` and so on), each with its own title, description, canonical and social tags, and writes `404.html` and `sitemap.xml`.

`npm run preview` serves `dist/` to check the result.

## Deploy

GitHub Pages, custom domain `tokenwright.com` (see `CNAME`). `.github/workflows/deploy.yml` builds on every push to `main` and deploys `dist/` with the official Pages actions. Pull requests run the build only.

The repository's Pages source must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).

## Where things live

| What | Where |
| --- | --- |
| All site copy, page titles and meta descriptions | `src/copy.js` |
| Routes (paths, which are indexed) | `src/routes.js` |
| Page layout and components | `src/App.jsx`, `src/sections.jsx`, `src/pages.jsx`, `src/components.jsx` |
| Styles | `src/styles.css` |
| Images, favicons, `robots.txt`, social share image | `public/` (copied to the site root as-is) |
| Head template (fonts, favicons, old `#/…` URL redirect) | `index.html` |
| Design notes | `design.md` |

To add a page: add its copy and a `meta` entry in `src/copy.js`, a route in `src/routes.js`, and its component in `PAGES` in `src/App.jsx`. The prerender and sitemap pick it up from the route table.

`public/og-image.png` is a 1200×630 screenshot of `scripts/og-image.html`.

`webinar/registrations.gs` is the retired Apps Script behind the October 2026 webinar form; the site no longer uses it.
