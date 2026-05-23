/* Sub-pages for Tokenwright: /pricing /how-it-works /onboarding /contact */

function PageHero({ crumb, h1, lede }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="crumb"><a href="#/" style={{ color: "var(--ink-4)" }}>Tokenwright</a> &nbsp;/&nbsp; {crumb}</div>
        <h1>{h1}</h1>
        <p className="lede" style={{ marginTop: 18 }}>{lede}</p>
      </div>
    </section>
  );
}

/* ---------------- /pricing ---------------- */
function PricingPage() {
  const c = window.COPY.pricing;
  return (
    <div>
      <PageHero crumb={c.crumb} h1={c.h1} lede={c.lede} />
      <section className="section tight">
        <div className="container">
          <Eyebrow>Pricing tiers</Eyebrow>
          <div className="tier-grid">
            {c.tiers.map((t) => (
              <div key={t.name} className={`tier ${t.feature ? "feature" : ""}`}>
                <h4>{t.name}</h4>
                <div className="meta">{t.meta}</div>
                <div className="price">
                  {t.price}
                  {t.priceUnit && <span style={{ fontSize: 14, marginLeft: 8, color: "var(--ink-4)", fontFamily: "var(--font-mono)" }}>{t.priceUnit}</span>}
                </div>
                <ul>
                  {t.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <a className={`btn ${t.feature ? "btn-primary" : "btn-secondary"}`} href={t.name === "Block" ? "#/#waitlist" : "#/contact"}>
                  {t.cta}<Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight sunken">
        <div className="container">
          <Eyebrow>Sample quote</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 720 }}>{c.sampleHeading}</h2>
          <div className="sample-quote">
            <div className="request">"{c.sample.request}"</div>
            {c.sample.lines.map((ln) => (
              <div className="row" key={ln.k}>
                <span>{ln.k}</span>
                <span className="v">{ln.v}</span>
              </div>
            ))}
            <div className="total">
              <span>{c.sample.total.k}</span>
              <span className="v">{c.sample.total.v}</span>
            </div>
          </div>
          <p style={{ marginTop: 32, maxWidth: 720, fontSize: 14, color: "var(--ink-3)" }}>{c.transparency}</p>
        </div>
      </section>
    </div>
  );
}

/* ---------------- /how-it-works (long-form) ---------------- */
function HowItWorksPage() {
  const c = window.COPY.howItWorksPage;
  const how = window.COPY.how;
  const agents = window.COPY.agents;
  return (
    <div>
      <PageHero crumb={c.crumb} h1={c.h1} lede={c.lede} />
      <section className="section tight">
        <div className="container">
          <Eyebrow>The four-stage task flow</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 720 }}>{how.h2}</h2>
          <div className="stepper four" style={{ marginTop: 32 }}>
            {how.steps.map((s) => (
              <div key={s.num} className={`step ${s.featured ? "featured" : ""}`}>
                <div className="stepnum">{s.num}</div>
                <h4>{s.label}</h4>
                <p>{s.desc}</p>
                {s.featured && <span className="badge">{s.badge}</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight sunken">
        <div className="container">
          <Eyebrow>Flow diagram</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 720 }}>Request → Spec → Build → Delivery.</h2>
          <FlowDiagram />
          <p style={{ marginTop: 32, maxWidth: 720, fontSize: 14, color: "var(--ink-3)" }}>
            The boundary on the right is intentional: we deliver a merge-ready PR and hand off. Your incumbent SI owns the production deploy, the pager, and the long-tail support — until you ask us to take more.
          </p>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Eyebrow>{agents.eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 760 }}>The engine runs even when you're not spending tokens.</h2>
          <p className="lede" style={{ marginTop: 20, maxWidth: 640 }}>
            Once you're onboarded, the same understanding that prices your tasks is available to your internal team as a set of agents — included with the subscription.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 16, marginTop: 32 }} className="hwiw-agents">
            {agents.cards.map((a) => (
              <div key={a.name} style={{
                border: "1px solid var(--rule)", borderRadius: 8, padding: 24,
                background: a.ghost ? "transparent" : "var(--bg-elev)",
                borderStyle: a.ghost ? "dashed" : "solid",
              }}>
                <div style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em",
                  textTransform: "uppercase", color: "var(--accent)",
                  background: "var(--accent-wash)", padding: "3px 8px", borderRadius: 999,
                  marginBottom: 12,
                }}>{a.tag}</div>
                <h4 style={{ fontSize: 18, marginBottom: 8 }}>{a.name}</h4>
                <p style={{ fontSize: 14, color: "var(--ink-3)" }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FlowDiagram() {
  return (
    <div style={{
      marginTop: 32,
      border: "1px solid var(--rule-strong)",
      borderRadius: 8,
      background: "var(--bg-elev)",
      padding: 32,
      overflowX: "auto",
    }}>
      <svg viewBox="0 0 980 240" width="100%" style={{ minWidth: 760 }} aria-label="Flow diagram">
        <defs>
          <marker id="arr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#0F0F0E"/>
          </marker>
          <marker id="arrO" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto">
            <path d="M0,0 L10,5 L0,10 z" fill="#0D9488"/>
          </marker>
        </defs>

        {/* nodes */}
        {[
          { x: 0,    label: "01 · Request",       sub: "English brief",          fill: "#FAFAF7" },
          { x: 180,  label: "02 · Specification", sub: "quote · firm cap",       accent: true   },
          { x: 380,  label: "03 · Build",         sub: "AI + senior operator",   fill: "#FAFAF7" },
          { x: 580,  label: "04 · Delivery",      sub: "merge-ready PR",         dark: true     },
          { x: 780,  label: "Incumbent SI",       sub: "merge · deploy · pager", fill: "#FAFAF7", outline: true },
        ].map((n, i) => (
          <g key={i}>
            <rect x={n.x} y={80} width={160} height={80}
                  fill={n.dark ? "#0F0F0E" : n.accent ? "#D5EFEC" : n.fill}
                  stroke={n.dark ? "#0F0F0E" : n.accent ? "#0D9488" : n.outline ? "#D6D2C7" : "#D6D2C7"}
                  strokeDasharray={n.outline ? "4 4" : "0"}
                  rx="6"/>
            <text x={n.x + 14} y={112} fontFamily="Instrument Sans, sans-serif" fontSize="14" fontWeight="600"
                  fill={n.dark ? "#fff" : "#0F0F0E"}>{n.label}</text>
            <text x={n.x + 14} y={134} fontFamily="JetBrains Mono, monospace" fontSize="11"
                  fill={n.dark ? "#BFBDB6" : "#5C5C58"}>{n.sub}</text>
          </g>
        ))}

        {/* arrows */}
        <line x1="160" y1="120" x2="178" y2="120" stroke="#0F0F0E" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <line x1="340" y1="120" x2="378" y2="120" stroke="#0D9488" strokeWidth="1.5" markerEnd="url(#arrO)"/>
        <line x1="540" y1="120" x2="578" y2="120" stroke="#0F0F0E" strokeWidth="1.5" markerEnd="url(#arr)"/>
        <line x1="740" y1="120" x2="778" y2="120" stroke="#5C5C58" strokeWidth="1" strokeDasharray="3 3" markerEnd="url(#arr)"/>

        {/* timing labels */}
        <text x="178" y="72" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#0D9488">~ minutes</text>
        <text x="378" y="72" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5C5C58">~ days</text>
        <text x="578" y="72" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#5C5C58">PR opens</text>
        <text x="745" y="72" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8F8F89">hand-off</text>

        {/* tokenwright bracket */}
        <line x1="0"   y1="184" x2="740" y2="184" stroke="#0D9488" strokeWidth="1"/>
        <line x1="0"   y1="184" x2="0"   y2="190" stroke="#0D9488" strokeWidth="1"/>
        <line x1="740" y1="184" x2="740" y2="190" stroke="#0D9488" strokeWidth="1"/>
        <text x="370" y="206" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#0D9488">Tokenwright owns</text>

        {/* incumbent bracket */}
        <line x1="780" y1="184" x2="940" y2="184" stroke="#8F8F89" strokeWidth="1"/>
        <line x1="780" y1="184" x2="780" y2="190" stroke="#8F8F89" strokeWidth="1"/>
        <line x1="940" y1="184" x2="940" y2="190" stroke="#8F8F89" strokeWidth="1"/>
        <text x="860" y="206" textAnchor="middle" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8F8F89">your SI owns</text>
      </svg>
    </div>
  );
}

/* ---------------- /onboarding ---------------- */
function OnboardingPage() {
  const c = window.COPY.onboarding;
  return (
    <div>
      <PageHero crumb={c.crumb} h1={c.h1} lede={c.lede} />
      <section className="section tight">
        <div className="container narrow">
          <Eyebrow>The first fourteen days</Eyebrow>
          <div className="timeline" style={{ marginTop: 32 }}>
            {c.timeline.map((t, i) => (
              <div key={i} className="row">
                <div className="day">{t.day}</div>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight sunken">
        <div className="container narrow">
          <div className="recommended-card">
            <div className="rc-tag">{c.recommended.tag}</div>
            <h3>{c.recommended.title}</h3>
            <p>{c.recommended.body}</p>
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Eyebrow>Scope of access</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 720 }}>{c.touchHeading}</h2>
          <div className="touch-grid">
            <div className="touch-col yes">
              <h4>We touch</h4>
              <ul>{c.yes.map((y) => <li key={y}>{y}</li>)}</ul>
            </div>
            <div className="touch-col no">
              <h4>We never touch</h4>
              <ul>{c.no.map((n) => <li key={n}>{n}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------------- /contact ---------------- */
function ContactPage() {
  const c = window.COPY.contact;
  const [data, setData] = useStateS({ kind: "Partner" });
  const [sent, setSent] = useStateS(false);
  const set = (n, v) => setData((d) => ({ ...d, [n]: v }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
  };
  return (
    <div>
      <PageHero crumb={c.crumb} h1={c.h1} lede={c.lede} />
      <section className="section tight">
        <div className="container narrow">
          {sent ? (
            <div className="form-success">
              <div className="check">✓</div>
              <h3>Thanks. We'll be in touch.</h3>
              <p>Your message has been routed to the right inbox. Expect a real reply, not a sequence.</p>
            </div>
          ) : (
            <form className="trial-form" onSubmit={submit}>
              <div className="form-title">Send us a note</div>
              <div className="form-sub">Choose what brings you here. We'll route it appropriately.</div>

              <div className="field">
                <label>Who are you?</label>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {["Investor", "Partner", "Press", "Operator (joining us)"].map((k) => (
                    <button
                      type="button"
                      key={k}
                      onClick={() => set("kind", k)}
                      className={data.kind === k ? "btn btn-primary btn-sm" : "btn btn-secondary btn-sm"}
                    >{k}</button>
                  ))}
                </div>
              </div>

              <div className="field">
                <label htmlFor="cname">Name</label>
                <input id="cname" type="text" value={data.name || ""} onChange={(e) => set("name", e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="cemail">Email</label>
                <input id="cemail" type="email" value={data.email || ""} onChange={(e) => set("email", e.target.value)} />
              </div>
              <div className="field">
                <label htmlFor="cmsg">Message</label>
                <textarea id="cmsg" value={data.msg || ""} onChange={(e) => set("msg", e.target.value)} />
              </div>
              <button className="btn btn-primary" type="submit">Send<Arrow /></button>
              <div className="form-foot">Direct line to a senior operator. No CRM auto-sequence.</div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

window.PricingPage = PricingPage;
window.HowItWorksPage = HowItWorksPage;
window.OnboardingPage = OnboardingPage;
window.ContactPage = ContactPage;
