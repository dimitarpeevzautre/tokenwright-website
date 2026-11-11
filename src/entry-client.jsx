/* Browser entry: hydrate the prerendered page (or render from scratch in dev). */
import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { normalizePath } from "./routes.js";
import "./styles.css";

const root = document.getElementById("root");
const app = <App initialPath={normalizePath(window.location.pathname)} />;

if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
