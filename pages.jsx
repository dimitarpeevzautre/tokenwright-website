/* Sub-pages for Tokenwright: /pricing /how-it-works /onboarding /contact */

const { useState } = React;

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
  const [data, setData] = useState({ kind: "Partner" });
  const [sent, setSent] = useState(false);
  const set = (n, v) => setData((d) => ({ ...d, [n]: v }));
  const submit = (e) => {
    e.preventDefault();
    // Static marketing site (no backend of its own) — open the visitor's mail
    // client with the note pre-filled rather than silently discarding it.
    const subject = `[${data.kind || "Contact"}] ${(data.name || "").trim()}`.trim();
    const body = `${(data.msg || "").trim()}\n\n— ${(data.name || "").trim()} (${(data.email || "").trim()})`;
    window.location.href = `mailto:hello@tokenwright.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
              <p>Your email client should have opened with your note ready to send to hello@tokenwright.com. Expect a real reply, not a sequence.</p>
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

/* ---------------- /webinar ---------------- */
function WebinarPage() {
  const c = window.COPY.webinar;
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const set = (n, v) => setData((d) => ({ ...d, [n]: v }));

  // Registrations land in a Google Sheet via an Apps Script web app
  // (webinar/registrations.gs). A form-encoded POST is a "simple" CORS request,
  // so there's no preflight, and the script's JSON reply is readable.
  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    c.form.fields.forEach((f) => {
      const v = (data[f.name] || "").trim();
      if (!v) errs[f.name] = "Required.";
      else if (f.type === "email" && !/^\S+@\S+\.\S+$/.test(v)) errs[f.name] = "Looks off — double-check.";
      else if (f.type === "tel" && v.replace(/\D/g, "").length < 6) errs[f.name] = "Looks off — double-check.";
    });
    setErrors(errs);
    if (Object.keys(errs).length) return;

    if (!c.endpoint) {
      setFormError("Registration isn't open yet — please try again shortly.");
      return;
    }

    const body = new URLSearchParams();
    c.form.fields.forEach((f) => body.append(f.name, (data[f.name] || "").trim()));
    body.append("website", data.website || ""); // honeypot — humans leave it empty

    setSubmitting(true);
    setFormError("");
    try {
      const res = await fetch(c.endpoint, { method: "POST", body });
      const out = await res.json().catch(() => ({}));
      if (!res.ok || !out.ok) {
        setFormError(out.error || "Something went wrong — please try again.");
        return;
      }
      setSent(true);
    } catch (err) {
      setFormError("Couldn't reach the server — check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <PageHero crumb={c.crumb} h1={c.h1} lede={c.lede} />
      <section className="section tight">
        <div className="container">
          <div className="waitlist-wrap" style={{ marginTop: 0 }}>
            <div>
              <div className="cohort-card" style={{ marginTop: 0 }}>
                <div className="ck">{c.when.label}</div>
                <div className="cv">{c.when.value}</div>
                <div className="cm">{c.when.meta}</div>
                <div className="launch-dot" aria-hidden="true"></div>
              </div>
              <div style={{ marginTop: 44 }}><Eyebrow>What we'll cover</Eyebrow></div>
              <ol className="wl-steps" style={{ marginTop: 8 }}>
                {c.agenda.map((s) => (
                  <li key={s.n}>
                    <span className="n">{s.n}</span>
                    <span className="body"><strong>{s.t}</strong> {s.d}</span>
                  </li>
                ))}
              </ol>
            </div>

            {sent ? (
              <div className="form-success">
                <div className="check">✓</div>
                <h3>{c.done.h}</h3>
                <p>{c.done.p}</p>
              </div>
            ) : (
              <form className="trial-form" onSubmit={submit} noValidate>
                <div className="form-title">{c.form.title}</div>
                <div className="form-sub">{c.form.sub}</div>
                {c.form.fields.map((f) => (
                  <div key={f.name} className={`field ${errors[f.name] ? "error" : ""}`}>
                    <label htmlFor={`wb-${f.name}`}>{f.label}</label>
                    <input
                      id={`wb-${f.name}`}
                      name={f.name}
                      type={f.type}
                      autoComplete={f.autoComplete}
                      placeholder={f.placeholder}
                      value={data[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                    />
                    {errors[f.name] && <div className="err">{errors[f.name]}</div>}
                  </div>
                ))}
                <div className="hp-field" aria-hidden="true">
                  <label htmlFor="wb-website">Website</label>
                  <input
                    id="wb-website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={data.website || ""}
                    onChange={(e) => set("website", e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary" disabled={submitting}>
                  {submitting ? "Sending…" : c.form.submit}<Arrow />
                </button>
                {formError && <div className="err" style={{ marginTop: 10 }}>{formError}</div>}
                <div className="form-foot">
                  {c.form.foot}{" "}
                  <a href={c.form.privacy.h} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>
                    {c.form.privacy.l}
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      <section className="section sunken">
        <div className="container">
          <Eyebrow>{c.lineup.eyebrow}</Eyebrow>
          <h2 style={{ marginTop: 20, maxWidth: 880 }}>{c.lineup.h2}</h2>
          <div className="agents-grid">
            {c.lineup.cards.map((a) => (
              <div key={a.name} className="agent-card">
                <div className="agent-tag">{a.tag}</div>
                <h3>{a.name}</h3>
                <p>{a.body}</p>
                <ul className="agent-examples">
                  {a.examples.map((ex) => <li key={ex}>{ex}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <p className="agents-foot">{c.lineup.foot}</p>
        </div>
      </section>
    </div>
  );
}

window.PricingPage = PricingPage;
window.WebinarPage = WebinarPage;
window.HowItWorksPage = HowItWorksPage;
window.OnboardingPage = OnboardingPage;
window.ContactPage = ContactPage;
