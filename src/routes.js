/* Route table: shared by the client router and the prerender script. */
import { COPY } from "./copy.js";

export const SITE_URL = "https://tokenwright.com";

// `page` picks the component in App.jsx and the title/description in COPY.meta.
export const ROUTES = [
  { path: "/",              page: "home" },
  { path: "/how-it-works/", page: "howItWorks" },
  { path: "/pricing/",      page: "pricing" },
  { path: "/onboarding/",   page: "onboarding" },
  { path: "/contact/",      page: "contact" },
  // Ended webinar: kept so old links resolve, but not indexed or in the sitemap.
  { path: "/webinar/",      page: "webinar", noindex: true },
];

export const NOT_FOUND = { path: "/404/", page: "notFound", noindex: true };

// "/pricing", "/pricing/" and "/pricing/index.html" are the same route.
export function normalizePath(pathname) {
  let p = (pathname || "/").replace(/\/index\.html$/, "/");
  if (!p.endsWith("/")) p += "/";
  return p;
}

export function matchRoute(pathname) {
  const p = normalizePath(pathname);
  return ROUTES.find((r) => r.path === p) || null;
}

export function metaFor(route) {
  return COPY.meta[route.page];
}
