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
                {t.feature && <div className="feat-tab">Most chosen</div>}
                <h4>{t.name}</h4>
                <div className="meta">{t.meta}</div>
                <div className="price">{t.value}</div>
                <div className="price-sub">{t.priceLine}</div>
                <div className="tier-tokens"><span className="dot" />{t.tokens}</div>
                <p className="tier-note">{t.note}</p>
                <ul>
                  {t.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <a className={`btn ${t.feature ? "btn-primary" : "btn-secondary"}`} href={t.contact ? "#/contact" : "#/#waitlist"}>
                  {t.cta}<Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section tight">
        <div className="container">
          <Eyebrow>{c.howTokens.eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 720 }}>{c.howTokens.h2}</h2>
          <div className="stepper four" style={{ marginTop: 32 }}>
            {c.howTokens.steps.map((s) => (
              <div key={s.n} className="step">
                <div className="stepnum">{s.n}</div>
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 32, maxWidth: 720, fontSize: 14, color: "var(--ink-3)" }}>{c.howTokens.rollover}</p>
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
            {c.sample.compare && <div className="compare">{c.sample.compare}</div>}
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
            Once you're onboarded, the same understanding that prices your tasks is available to your internal team as a set of agents — part of the engine, never separate products to buy.
          </p>
          <div className="agents-grid">
            {agents.cards.map((a) => (
              <div key={a.name} className={`agent-card ${a.ghost ? "ghost" : ""}`}>
                <div className="agent-tag">{a.tag}</div>
                <h3>{a.name}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FlowDiagram() {
  const nodes = [
    { n: "01", t: "Request",       s: "English brief" },
    { n: "02", t: "Specification", s: "quote · firm cap", cls: "accent" },
    { n: "03", t: "Build",         s: "AI + senior operator" },
    { n: "04", t: "Delivery",      s: "merge-ready PR", cls: "dark" },
    { n: "↳",  t: "Incumbent SI",  s: "merge · deploy · pager", cls: "ghost" },
  ];
  return (
    <div className="flow-diagram">
      <div className="flow-row">
        {nodes.map((nd, i) => (
          <React.Fragment key={nd.t}>
            {i > 0 && <div className="flow-conn">{i === 4 ? "⇢" : "→"}</div>}
            <div className={`flow-node ${nd.cls || ""}`}>
              <div className="fn-n">{nd.n}</div>
              <div className="fn-t">{nd.t}</div>
              <div className="fn-s">{nd.s}</div>
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flow-brackets">
        <div className="bk own" style={{ flex: "4.4" }}>Tokenwright owns</div>
        <div className="flow-conn" style={{ visibility: "hidden" }}>⇢</div>
        <div className="bk si" style={{ flex: "1" }}>your SI owns</div>
      </div>
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
                <div>
                  <h4>{t.title}</h4>
                  <p>{t.body}</p>
                </div>
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
        <div className="container narrow" style={{ maxWidth: 680 }}>
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
                <label htmlFor="ckind">Who are you?</label>
                <select id="ckind" value={data.kind} onChange={(e) => set("kind", e.target.value)}>
                  <option>Partner</option>
                  <option>Investor</option>
                  <option>Press</option>
                  <option>Operator (joining us)</option>
                </select>
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
