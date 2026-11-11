// Runs after `vite build`: renders every route to its own static HTML file in
// dist/, each with its own <title>, description, canonical and social tags,
// then writes 404.html and sitemap.xml and copies CNAME.
import { copyFile, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const dist = resolve(root, "dist");
const ssrDir = resolve(root, "dist-ssr");

const { render, ROUTES, NOT_FOUND, SITE_URL, COPY, metaFor } = await import(
  pathToFileURL(resolve(ssrDir, "entry-server.js")).href
);

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const OG_IMAGE = `${SITE_URL}/og-image.png`;

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: COPY.brand.name,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/assets/tokenwright-icon-512.png`,
  description: COPY.brand.tag,
  email: "hello@tokenwright.com",
};

function head(route) {
  const m = metaFor(route);
  const url = SITE_URL + route.path;
  const tags = [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
  ];
  if (route.noindex) {
    tags.push(`<meta name="robots" content="noindex" />`);
  } else {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:title" content="${esc(m.ogTitle || m.title)}" />`,
      `<meta property="og:description" content="${esc(m.ogDescription || m.description)}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:site_name" content="${esc(COPY.brand.name)}" />`,
      `<meta property="og:url" content="${url}" />`,
      `<meta property="og:image" content="${OG_IMAGE}" />`,
      `<meta property="og:image:width" content="1200" />`,
      `<meta property="og:image:height" content="630" />`,
      `<meta name="twitter:card" content="summary_large_image" />`,
      `<meta name="twitter:image" content="${OG_IMAGE}" />`,
      `<script type="application/ld+json">${JSON.stringify(organization).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return tags.join("\n  ");
}

const template = await readFile(resolve(dist, "index.html"), "utf8");
for (const marker of ["<!--app-head-->", "<!--app-html-->"]) {
  if (!template.includes(marker)) throw new Error(`index.html is missing ${marker}`);
}

async function writePage(route, file) {
  const html = template
    .replace("<!--app-head-->", () => head(route))
    .replace("<!--app-html-->", () => render(route.path));
  const out = resolve(dist, file);
  await mkdir(dirname(out), { recursive: true });
  await writeFile(out, html);
  console.log(`prerendered ${route.path} -> dist/${file}`);
}

for (const route of ROUTES) {
  await writePage(route, route.path === "/" ? "index.html" : `${route.path.slice(1)}index.html`);
}
// GitHub Pages serves 404.html for any path that has no file.
await writePage(NOT_FOUND, "404.html");

const urls = ROUTES.filter((r) => !r.noindex).map((r) => `  <url><loc>${SITE_URL}${r.path}</loc></url>`);
await writeFile(
  resolve(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);

await copyFile(resolve(root, "CNAME"), resolve(dist, "CNAME"));
await rm(ssrDir, { recursive: true, force: true });
