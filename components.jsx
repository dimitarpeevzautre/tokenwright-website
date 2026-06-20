/* Shared components for Tokenwright site. */

const { useState, useEffect, useRef } = React;

/* ---------------- anchor scroll (sticky-nav aware) ---------------- */
// Compute an offset scroll target rather than scrollIntoView, so the sticky
// 72px nav never covers the section heading.
function scrollToAnchor(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
  window.scrollTo({ top, behavior: "smooth" });
}

/* ---------------- brand mark ---------------- */
function BrandMark() {
  return <img className="brand-mark" src="assets/tokenwright-mark.svg" alt="" width="26" height="26" />;
}

/* ---------------- top nav ---------------- */
function TopNav({ route }) {
  const [open, setOpen] = useState(false);
  const links = [
    { l: "How it works", h: "#/how-it-works" },
    { l: "Agents",       h: "#agents" },
    { l: "Pricing",      h: "#/pricing" },
    { l: "Onboarding",   h: "#/onboarding" },
  ];
  const goAnchor = (e, id) => {
    setOpen(false);
    if (route === "/") {
      e.preventDefault();
      scrollToAnchor(id);
    } else {
      e.preventDefault();
      window.location.hash = "/";
      setTimeout(() => scrollToAnchor(id), 80);
    }
  };
  const click = (e, h) => {
    setOpen(false);
    if (h === "#agents") goAnchor(e, "agents");
    // "#/..." route links are handled by hashchange
  };
  return (
    <header className="topnav">
      <div className="container row">
        <a href="#/" className="brand" onClick={() => setOpen(false)}>
          <BrandMark />
          Tokenwright
        </a>
        <div className="right">
          <nav className={"nav-links " + (open ? "open" : "")}>
            {links.map((l) => (
              <a key={l.l} href={l.h} onClick={(e) => click(e, l.h)}>{l.l}</a>
            ))}
            {/* CTA shown inside the dropdown on mobile (the bar buttons are hidden there) */}
            <a
              className="btn btn-primary btn-sm nav-menu-cta"
              href={route === "/" ? "#waitlist" : "#/#waitlist"}
              onClick={(e) => goAnchor(e, "waitlist")}
            >
              Join the waiting list
            </a>
          </nav>
          <a className="btn btn-secondary btn-sm nav-bar-cta" href="https://app.tokenwright.com">Sign in</a>
          <a
            className="btn btn-primary btn-sm nav-bar-cta"
            href={route === "/" ? "#waitlist" : "#/#waitlist"}
            onClick={(e) => goAnchor(e, "waitlist")}
          >
            Join the waiting list
          </a>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((o) => !o)}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d={open ? "M6 6l12 12M6 18L18 6" : "M3 6h18M3 12h18M3 18h18"} strokeLinecap="round" />
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
              <BrandMark />
              Tokenwright
            </a>
            <p className="brand-tag" style={{ marginTop: 14 }}>{f.tag}</p>
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

/* ---------------- reveal wrapper (motion neutralized) ----------------
   The editorial redesign uses restrained, hover-only motion — no scroll
   entrance animations. Kept as a passthrough so call sites are unchanged. */
function Reveal({ children, delay, as: As = "div", className = "", style, ...rest }) {
  void delay;
  return (
    <As className={`reveal ${className}`} style={style} {...rest}>
      {children}
    </As>
  );
}

/* ---------------- eyebrow label (mono + yellow pip) ---------------- */
function Eyebrow({ children }) {
  return <div className="eyebrow"><span className="dot" />{children}</div>;
}

/* ---------------- arrow icon ---------------- */
function Arrow({ size = 14 }) {
  return (
    <svg className="arrow" width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" fill="none" />
    </svg>
  );
}

/* ---------------- hero quote ticket ---------------- */
function QuoteTicket() {
  return (
    <div className="quote-ticket" aria-hidden="true">
      <div className="qt-head">
        <span className="lbl">Specification · quote</span>
        <span className="qt-pill">quoted in 04:11</span>
      </div>
      <div className="qt-request">"Add Apple Pay to checkout, including international storefronts."</div>
      <div className="qt-line"><span>Scope &amp; specification</span><span className="v">96</span></div>
      <div className="qt-line"><span>Implementation</span><span className="v">300</span></div>
      <div className="qt-line"><span>Test coverage</span><span className="v">120</span></div>
      <div className="qt-line"><span>Senior operator review</span><span className="v">60</span></div>
      <div className="qt-total"><span>Quoted total</span><span className="v">576 · firm cap</span></div>
    </div>
  );
}

window.scrollToAnchor = scrollToAnchor;
window.BrandMark = BrandMark;
window.TopNav = TopNav;
window.Foot = Foot;
window.Reveal = Reveal;
window.Eyebrow = Eyebrow;
window.Arrow = Arrow;
window.QuoteTicket = QuoteTicket;
