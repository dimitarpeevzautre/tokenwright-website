/* Build-time entry: used by scripts/prerender.mjs to render each route to HTML. */
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export { COPY } from "./copy.js";
export { ROUTES, NOT_FOUND, SITE_URL, metaFor } from "./routes.js";

export function render(path) {
  return renderToString(<App initialPath={path} />);
}
