/* Main app: path router + page composition. */

import React, { useState, useEffect } from "react";
import { TopNav, Foot, scrollToAnchor } from "./components.jsx";
import {
  Hero, HowItWorks, Pains, Shift, Agents, TokenSection, Expansion,
  TrustStrip, WaitingList, Objections, Team, FinalCta,
} from "./sections.jsx";
import {
  PricingPage, HowItWorksPage, OnboardingPage, ContactPage, WebinarPage, NotFoundPage,
} from "./pages.jsx";
import { matchRoute, metaFor, normalizePath, NOT_FOUND } from "./routes.js";

function Home() {
  return (
    <React.Fragment>
      <Hero />
      <HowItWorks />
      <Pains />
      <Shift />
      <Agents />
      <TokenSection />
      <Expansion />
      <TrustStrip />
      <WaitingList />
      <Objections />
      <Team />
      <FinalCta />
    </React.Fragment>
  );
}

const PAGES = {
  home: Home,
  howItWorks: HowItWorksPage,
  pricing: PricingPage,
  onboarding: OnboardingPage,
  contact: ContactPage,
  webinar: WebinarPage,
  notFound: NotFoundPage,
};

const scrollTop = () => window.scrollTo({ top: 0, behavior: "instant" });

// Every page is prerendered to its own index.html, so a full page load always
// works. Once hydrated, same-site links are handled here instead: pushState,
// swap the page, then scroll to the top or to the #anchor.
function usePathRoute(initialPath) {
  const [path, setPath] = useState(initialPath);

  useEffect(() => {
    // Deep link to a section, e.g. /#waitlist: re-scroll with the nav offset,
    // once the web fonts are in (they change text heights above the target).
    if (window.location.hash.length > 1) {
      const id = window.location.hash.slice(1);
      const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
      fonts.then(() => setTimeout(() => scrollToAnchor(id), 80));
    }

    const onClick = (e) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = e.target.closest && e.target.closest("a[href]");
      if (!a || a.target || a.hasAttribute("download")) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || !matchRoute(url.pathname)) return;

      e.preventDefault();
      const next = normalizePath(url.pathname);
      const samePage = next === normalizePath(window.location.pathname);
      if (!samePage || url.hash !== window.location.hash) {
        window.history.pushState(null, "", next + url.hash);
      }
      const anchor = url.hash.slice(1);
      if (samePage) {
        if (anchor) scrollToAnchor(anchor);
        else scrollTop();
        return;
      }
      setPath(next);
      scrollTop();
      if (anchor) setTimeout(() => scrollToAnchor(anchor), 80);
    };

    const onPop = () => setPath(normalizePath(window.location.pathname));

    document.addEventListener("click", onClick);
    window.addEventListener("popstate", onPop);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPop);
    };
  }, []);

  return path;
}

export default function App({ initialPath }) {
  const path = usePathRoute(initialPath);
  const route = matchRoute(path) || NOT_FOUND;
  const Page = PAGES[route.page];

  // The prerendered HTML carries the full head; this keeps the tab title right
  // after a client-side navigation.
  useEffect(() => {
    document.title = metaFor(route).title;
  }, [route]);

  return (
    <React.Fragment>
      <TopNav />
      <Page />
      <Foot />
    </React.Fragment>
  );
}
