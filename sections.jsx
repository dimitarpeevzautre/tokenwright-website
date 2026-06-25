/* Homepage sections for Tokenwright. */

const { useState } = React;

/* ---------------- HERO ---------------- */
function Hero() {
  const c = window.COPY.hero;
  return (
    <section className="hero">
      <div className="container">
        <div className="grid">
          <div>
            <Eyebrow>{c.eyebrow}</Eyebrow>
            <h1 style={{ whiteSpace: "pre-line" }}>
              {c.h1Lead}{" "}
              <span className="accent">{c.h1Accent}</span>
            </h1>
            <p className="lede">{c.lede}</p>
            <div className="ctas">
              <a href="#waitlist" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToAnchor("waitlist"); }}>
                {c.primary}<Arrow />
              </a>
              <a href="#/#how-it-works" className="btn-link">
                {c.secondary}<Arrow />
              </a>
            </div>
            <div className="meta">
              {c.meta.map((m) => <span key={m}>{m}</span>)}
            </div>
          </div>
          <QuoteTicket />
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAINS ---------------- */
function Pains() {
  const c = window.COPY.pains;
  return (
    <section className="section">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 880 }}>{c.h2}</h2>
        <p className="lede" style={{ marginTop: 20, maxWidth: 720 }}>{c.sub}</p>
        <div className="pain-grid">
          {c.cards.map((card) => (
            <div key={card.num} className="pain-card">
              <div className="num">
                {card.num}
                {card.root && <span className="root-tag">common thread</span>}
              </div>
              <h3>{card.title}</h3>
              <p className="symptom">{card.symptom}</p>
              <p className="conseq">{card.conseq}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SHIFT / MANIFESTO ---------------- */
function Shift() {
  const c = window.COPY.shift;
  return (
    <section className="section sunken">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 880, marginBottom: 44 }}>{c.h2}</h2>
        <div className="manifesto">
          {c.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <span className="kicker">{c.kicker}</span>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW IT WORKS (4-stage task flow) ---------------- */
function HowItWorks() {
  const c = window.COPY.how;
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 880 }}>{c.h2}</h2>
        <p className="lede" style={{ marginTop: 20, maxWidth: 720 }}>{c.sub}</p>
        <div className="stepper four">
          {c.steps.map((s) => (
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
  );
}

/* ---------------- AGENTS (always-on intelligence layer) ---------------- */
function Agents() {
  const c = window.COPY.agents;
  return (
    <section className="section sunken" id="agents">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 880 }}>{c.h2}</h2>
        <p className="lede" style={{ marginTop: 20, maxWidth: 720 }}>{c.sub}</p>
        <div className="agents-grid">
          {c.cards.map((a) => (
            <div key={a.name} className={`agent-card ${a.ghost ? "ghost" : ""}`}>
              <div className="agent-tag">{a.tag}</div>
              <h3>{a.name}</h3>
              <p>{a.body}</p>
              <ul className="agent-examples">
                {a.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MANAGED TOKEN ---------------- */
function TokenSection() {
  const c = window.COPY.token;
  return (
    <section className="section">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 720 }}>{c.h2}</h2>
        <div className="token-card">
          <div>
            <div className="card-label">Definition</div>
            <div className="definition">{c.definition}</div>
            <div className="transparency">{c.transparency}</div>
          </div>
          <div>
            <div className="card-label">Sample sizing</div>
            <ul className="meta-list">
              {c.meta.map((m) => (
                <li key={m.k}>
                  <span>{m.k}</span>
                  <span className={`v ${m.accent ? "accent" : ""}`}>{m.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- EXPANSION PATH ---------------- */
function Expansion() {
  const c = window.COPY.expansion;
  return (
    <section className="section sunken">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 800 }}>{c.h2}</h2>
        <p className="lede" style={{ marginTop: 20, maxWidth: 640 }}>{c.sub}</p>
        <div className="expansion-grid">
          {c.stages.map((s) => (
            <div key={s.n} className={`exp-card ${s.featured ? "featured" : ""}`}>
              <div className="exp-n">{s.n}</div>
              <div className="exp-when">{s.when}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WAITING LIST ---------------- */
function WaitingList() {
  const c = window.COPY.waitlist;
  const [data, setData] = useState({});
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const set = (n, v) => setData((d) => ({ ...d, [n]: v }));

  // Posts a real access request to the app (invite-only onboarding): an operator
  // reviews and approves it. Cross-origin to app.tokenwright.com — the endpoint
  // is public and needs no credentials.
  const submit = async (e) => {
    e.preventDefault();
    const errs = {};
    c.form.fields.forEach((f) => {
      if (f.name === "stuck") return; // optional
      const v = (data[f.name] || "").trim();
      if (!v) errs[f.name] = "Required.";
      else if (f.type === "email" && !/^\S+@\S+\.\S+$/.test(v)) errs[f.name] = "Looks off — double-check.";
    });
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const noteParts = [];
    if ((data.site || "").trim()) noteParts.push("SFCC site: " + data.site.trim());
    if ((data.stuck || "").trim()) noteParts.push(data.stuck.trim());

    setSubmitting(true);
    setFormError("");
    try {
      const res = await fetch("https://app.tokenwright.com/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (data.name || "").trim(),
          email: (data.email || "").trim(),
          company: (data.company || "").trim(),
          note: noteParts.join("\n\n"),
        }),
      });
      if (res.status === 409) {
        setFormError("That email already has access — sign in instead.");
        return;
      }
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setFormError((body.error && body.error.message) || "Something went wrong — please try again.");
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
    <section className="section" id="waitlist">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <div className="waitlist-wrap">
          <div>
            <h2 className="waitlist-h">{c.h1}</h2>
            <p className="lede" style={{ maxWidth: 560, marginTop: 16 }}>{c.sub}</p>

            <div className="cohort-card">
              <div className="ck">{c.launch.label}</div>
              <div className="cv">{c.launch.value}</div>
              <div className="cm">{c.launch.meta}</div>
              <div className="launch-dot" aria-hidden="true"></div>
            </div>

            <ol className="wl-steps">
              {c.steps.map((s) => (
                <li key={s.n}>
                  <span className="n">{s.n}</span>
                  <span className="body">
                    <strong>{s.t}</strong> {s.d}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          {sent ? (
            <div className="form-success">
              <div className="check">✓</div>
              <h3>You're on the list.</h3>
              <p>
                A senior operator will email you when your spot opens — typically within two weeks.
                Once you're in, your free starter tokens are immediately available.
              </p>
              <div className="receipt">
                <div className="receipt-row"><span className="k">Status</span><span className="v">Received · pending review</span></div>
                <div className="receipt-row"><span className="k">Stage</span><span className="v">Private launch · admitting by hand</span></div>
                <div className="receipt-row"><span className="k">Expected admission</span><span className="v">≤ 14 days</span></div>
                <div className="receipt-row"><span className="k">On admission</span><span className="v">Free starter tokens · Q&A Agent live</span></div>
              </div>
            </div>
          ) : (
            <form className="trial-form" onSubmit={submit}>
              <div className="form-title">{c.form.title}</div>
              <div className="form-sub">{c.form.sub}</div>
              {c.form.fields.map((f) => (
                <div key={f.name} className={`field ${errors[f.name] ? "error" : ""}`}>
                  <label htmlFor={f.name}>{f.label}</label>
                  {f.type === "textarea" ? (
                    <textarea
                      id={f.name}
                      placeholder={f.placeholder}
                      value={data[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                    />
                  ) : (
                    <input
                      id={f.name}
                      type={f.type}
                      placeholder={f.placeholder}
                      value={data[f.name] || ""}
                      onChange={(e) => set(f.name, e.target.value)}
                    />
                  )}
                  {errors[f.name] && <div className="err">{errors[f.name]}</div>}
                </div>
              ))}
              <button type="submit" className="btn btn-primary" disabled={submitting}>
                {submitting ? "Sending…" : c.form.submit}<Arrow />
              </button>
              {formError && <div className="err" style={{ marginTop: 10 }}>{formError}</div>}
              <div className="form-foot">{c.form.foot}</div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------------- OBJECTIONS / FAQ ---------------- */
function Objections() {
  const c = window.COPY.objections;
  const [open, setOpen] = useStateS(0);
  return (
    <section className="section sunken" id="objections">
      <div className="container narrow" style={{ maxWidth: 920 }}>
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 800 }}>{c.h2}</h2>
        <p className="lede" style={{ marginTop: 20, maxWidth: 640 }}>{c.intro}</p>
        <div className="faq-list">
          {c.faqs.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="toggle">{open === i ? "×" : "+"}</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  const c = window.COPY.team;
  return (
    <section className="section">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 20, maxWidth: 760 }}>{c.h2}</h2>
        <div className="team-block">
          <div>
            <p>{c.body}</p>
            {c.cadence && <p style={{ marginTop: 20 }}>{c.cadence}</p>}
          </div>
          <div className="credibility-card">
            <div className="k">{c.credibility.k}</div>
            <div className="v">{c.credibility.v}</div>
            <div className="sub">{c.credibility.sub}</div>
            <hr />
            <div className="zautre-mention">
              <span className="accent">●</span> tokenwright.zautre.com → Tokenwright (own domain, soon)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCta() {
  const c = window.COPY.finalCta;
  return (
    <section className="section ink final-cta">
      <div className="container">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 style={{ marginTop: 24 }}>{c.h2}</h2>
        <p className="lede">{c.lede}</p>
        <div>
          <a href="#waitlist" className="btn btn-primary" onClick={(e) => { e.preventDefault(); scrollToAnchor("waitlist"); }}>
            {c.primary}<Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
window.Pains = Pains;
window.Shift = Shift;
window.HowItWorks = HowItWorks;
window.Agents = Agents;
window.TokenSection = TokenSection;
window.Expansion = Expansion;
window.WaitingList = WaitingList;
window.Objections = Objections;
window.Team = Team;
window.FinalCta = FinalCta;
