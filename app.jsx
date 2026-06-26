/* Main app: hash router + page composition. */

const { useState, useEffect } = React;

function useHashRoute() {
  const parse = () => {
    const raw = window.location.hash.replace(/^#/, "") || "/";
    const [path, anchor] = raw.split("#");
    return { path: path || "/", anchor: anchor || "" };
  };
  const [route, setRoute] = useState(parse());
  useEffect(() => {
    const on = () => {
      const r = parse();
      setRoute(r);
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
      if (r.anchor) {
        setTimeout(() => window.scrollToAnchor(r.anchor), 80);
      }
    };
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
}

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
      <WaitingList />
      <Objections />
      <Team />
      <FinalCta />
    </React.Fragment>
  );
}

function App() {
  const { path } = useHashRoute();
  let page;
  switch (path) {
    case "/pricing":      page = <PricingPage />; break;
    case "/how-it-works": page = <HowItWorksPage />; break;
    case "/onboarding":   page = <OnboardingPage />; break;
    case "/contact":      page = <ContactPage />; break;
    default:              page = <Home />;
  }
  return (
    <React.Fragment>
      <TopNav route={path} />
      {page}
      <Foot />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
