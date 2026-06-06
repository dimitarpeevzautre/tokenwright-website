/* Shared components for Tokenwright site. */

const { useState, useEffect, useRef } = React;

/* ---------------- brand mark ---------------- */
function BrandMark({ size = 22 }) {
  // simple geometric mark: a stamped "T" with a chisel notch — the "wright" hint.
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="1.5" y="1.5" width="21" height="21" rx="3" stroke="#0F0F0E" strokeWidth="1.5"/>
      <path d="M6.5 7.5h11" stroke="#0F0F0E" strokeWidth="1.8" strokeLinecap="square"/>
      <path d="M12 8v9" stroke="#0F0F0E" strokeWidth="1.8" strokeLinecap="square"/>
      <path d="M14.5 15.5l3 3" stroke="#0D9488" strokeWidth="1.8" strokeLinecap="square"/>
    </svg>
  );
}

/* ---------------- top nav ---------------- */
function TopNav({ route, onNav }) {
  const [open, setOpen] = useState(false);
  const links = [
    { l: "How it works", h: "#/how-it-works" },
    { l: "Agents",       h: route === "/" ? "#agents" : "#/" },
    { l: "Pricing",      h: "#/pricing" },
    { l: "Onboarding",   h: "#/onboarding" },
  ];
  const click = (e, h) => {
    setOpen(false);
    if (h.startsWith("#/")) return; // hashchange handles route
    if (h === "#agents" && route === "/") {
      e.preventDefault();
      document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
    } else if (h === "#/" && route !== "/") {
      // navigate home then scroll
      e.preventDefault();
      window.location.hash = "/";
      setTimeout(() => {
        document.getElementById("agents")?.scrollIntoView({ behavior: "smooth" });
      }, 60);
    }
  };
  return (
    <header className="topnav">
      <div className="container row">
        <a href="#/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><BrandMark /></span>
          Tokenwright
        </a>
        <nav className={open ? "open" : ""}>
          {links.map((l) => (
            <a key={l.l} href={l.h} onClick={(e) => click(e, l.h)}>{l.l}</a>
          ))}
        </nav>
        <div className="right">
          <a className="btn btn-primary btn-sm" href={route === "/" ? "#waitlist" : "#/#waitlist"}
             onClick={(e) => {
               if (route === "/") {
                 e.preventDefault();
                 document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
               } else {
                 e.preventDefault();
                 window.location.hash = "/";
                 setTimeout(() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" }), 60);
               }
             }}>
            Join the waiting list
          </a>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

/* ---------------- footer ---------------- */
function Foot() {
  const f = window.COPY.footer;
  return (
    <footer className="foot">
      <div className="container">
        <div className="row">
          <div>
            <a href="#/" className="brand" style={{ marginBottom: 14, display: "inline-flex" }}>
              <span className="brand-mark"><BrandMark /></span>
              Tokenwright
            </a>
            <p className="brand-tag" style={{ marginTop: 12 }}>{f.tag}</p>
          </div>
          {f.cols.map((c) => (
            <div key={c.title}>
              <h5>{c.title}</h5>
              <ul>
                {c.links.map((lk) => (
                  <li key={lk.l}><a href={lk.h}>{lk.l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="bot">
          <div>{f.smallprint}</div>
          <div>tokenwright.zautre.com</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- reveal-on-scroll wrapper ---------------- */
function Reveal({ children, delay = 0, as: As = "div", className = "", style, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          setShown(true);
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <As
      ref={ref}
      className={`reveal ${shown ? "in" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </As>
  );
}

/* ---------------- eyebrow label ---------------- */
function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="dot" />{children}</div>;
}

/* ---------------- arrow icon ---------------- */
function Arrow({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" fill="none"/>
    </svg>
  );
}

/* ---------------- hero diagram (4-stage task flow) ---------------- */
function HeroDiagram() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => (t + 1) % 3), 2200);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero-diagram" aria-hidden="true">
      <div className="label">
        <span>task.flow</span>
        <span style={{ color: "var(--accent)" }}>● private launch</span>
      </div>

      <div className="node in">
        <span><span style={{ color: "var(--ink-4)" }}>01</span> request</span>
        <span className="t">English ↓</span>
      </div>
      <div style={{ paddingLeft: 38, fontSize: 12, color: "var(--ink-3)", margin: "4px 0 10px" }}>
        "Add Apple Pay to checkout."
      </div>

      <div className="arrow-down">↓</div>

      <div className="node">
        <span><span style={{ color: "var(--ink-4)" }}>02</span> specification</span>
        <span className="t">~120 tokens · firm cap</span>
      </div>
      <div className="arrow-down">↓</div>

      <div className="node">
        <span><span style={{ color: "var(--ink-4)" }}>03</span> build</span>
        <span className="t">named operator</span>
      </div>
      <div className="arrow-down">↓</div>

      <div className="node out">
        <span><span style={{ color: "#8F8F89" }}>04</span> delivery</span>
        <span className="t">merge-ready PR</span>
      </div>

      <div className="quote-pill">{tick === 0 ? "00:42s" : tick === 1 ? "01:18s" : "02:04s"} to quote</div>
    </div>
  );
}

window.BrandMark = BrandMark;
window.TopNav = TopNav;
window.Foot = Foot;
window.Reveal = Reveal;
window.Eyebrow = Eyebrow;
window.Arrow = Arrow;
window.HeroDiagram = HeroDiagram;
