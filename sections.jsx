/* Homepage sections for Tokenwright. */

const { useState: useStateS, useEffect: useEffectS } = React;

/* ---------------- HERO ---------------- */
function Hero() {
  const c = window.COPY.hero;
  return (
    <section className="hero">
      <div className="container">
        <div className="grid">
          <div>
            <Reveal as="div"><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
            <Reveal as="h1" delay={60} style={{ marginTop: 24, whiteSpace: "pre-line" }}>
              {c.h1Lead}{" "}
              <span className="accent">{c.h1Accent}</span>
            </Reveal>
            <Reveal as="p" className="lede" delay={140}>{c.lede}</Reveal>
            <Reveal delay={200} className="ctas">
              <a href="#waitlist" className="btn btn-primary" onClick={(e) => {
                e.preventDefault();
                document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
              }}>
                {c.primary}<Arrow />
              </a>
              <a href="#how-it-works" className="btn btn-secondary">
                {c.secondary}
              </a>
            </Reveal>
            <Reveal delay={280} className="meta">
              {c.meta.map((m) => <span key={m}>{m}</span>)}
            </Reveal>
          </div>
          <Reveal delay={180} style={{ alignSelf: "stretch" }}>
            <HeroDiagram />
          </Reveal>
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
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 880 }}>{c.h2}</Reveal>
        <Reveal as="p" className="lede" delay={120} style={{ marginTop: 20, maxWidth: 720 }}>{c.sub}</Reveal>
        <div className="pain-grid">
          {c.cards.map((card, i) => (
            <Reveal key={card.num} className={`pain-card ${card.root ? "root" : ""}`} delay={i * 80}>
              <div className="num">
                {card.num}
                {card.root && <span className="root-tag">root cause</span>}
              </div>
              <h3>{card.title}</h3>
              <p className="symptom">{card.symptom}</p>
              <p className="conseq">{card.conseq}</p>
            </Reveal>
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
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 880, marginBottom: 48 }}>{c.h2}</Reveal>
        <div className="manifesto">
          {c.paragraphs.map((p, i) => (
            <Reveal as="p" key={i} delay={i * 80}>{p}</Reveal>
          ))}
          <Reveal as="span" className="kicker" delay={c.paragraphs.length * 80}>{c.kicker}</Reveal>
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
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 880 }}>{c.h2}</Reveal>
        <Reveal as="p" className="lede" delay={120} style={{ marginTop: 20, maxWidth: 720 }}>{c.sub}</Reveal>
        <div className="stepper four">
          {c.steps.map((s, i) => (
            <Reveal
              key={s.num}
              className={`step ${s.featured ? "featured" : ""}`}
              delay={i * 70}
            >
              <div className="stepnum">{s.num}</div>
              <h4>{s.label}</h4>
              <p>{s.desc}</p>
              {s.featured && <span className="badge">{s.badge}</span>}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- AGENTS (Persistent Intelligence Layer) ---------------- */
function Agents() {
  const c = window.COPY.agents;
  return (
    <section className="section ink" id="agents">
      <div className="container">
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 880 }}>{c.h2}</Reveal>
        <Reveal as="p" className="lede" delay={120} style={{ marginTop: 20, maxWidth: 720 }}>{c.sub}</Reveal>
        <div className="agents-grid">
          {c.cards.map((a, i) => (
            <Reveal key={a.name} className={`agent-card ${a.ghost ? "ghost" : ""}`} delay={i * 80}>
              <div className="agent-tag">{a.tag}</div>
              <h3>{a.name}</h3>
              <p>{a.body}</p>
              <ul className="agent-examples">
                {a.examples.map((ex) => <li key={ex}>{ex}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="agents-foot" delay={300}>{c.foot}</Reveal>
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
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 720 }}>{c.h2}</Reveal>
        <Reveal className="token-card" delay={120}>
          <div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500, marginBottom: 20 }}>
              Definition
            </h3>
            <div className="definition">{c.definition}</div>
            <div className="transparency">{c.transparency}</div>
          </div>
          <div>
            <h3 style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--ink-3)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 500, marginBottom: 20 }}>
              Sample sizing
            </h3>
            <ul className="meta-list">
              {c.meta.map((m) => (
                <li key={m.k}>
                  <span>{m.k}</span>
                  <span className={`v ${m.accent ? "accent" : ""}`}>{m.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- EXPANSION PATH ---------------- */
function Expansion() {
  const c = window.COPY.expansion;
  return (
    <section className="section">
      <div className="container">
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 800 }}>{c.h2}</Reveal>
        <Reveal as="p" className="lede" delay={120} style={{ marginTop: 20, maxWidth: 640 }}>{c.sub}</Reveal>
        <div className="expansion-grid">
          {c.stages.map((s, i) => (
            <Reveal key={s.n} className={`exp-card ${s.featured ? "featured" : ""}`} delay={i * 100}>
              <div className="exp-n">{s.n}</div>
              <div className="exp-when">{s.when}</div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WAITING LIST ---------------- */
function WaitingList() {
  const c = window.COPY.waitlist;
  const [data, setData] = useStateS({});
  const [errors, setErrors] = useStateS({});
  const [sent, setSent] = useStateS(false);

  const set = (n, v) => setData((d) => ({ ...d, [n]: v }));

  const submit = (e) => {
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
    // TODO: wire to backend
    setSent(true);
  };

  // a stable-looking "queue position" based on a simple hash of email so it doesn't churn on re-renders
  const queuePos = () => {
    const seed = (data.email || "anon").length * 7 + (data.company || "").length * 3;
    return 240 + (seed % 80); // 240–319
  };

  return (
    <section className="section sunken" id="waitlist">
      <div className="container">
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <div className="waitlist-wrap">
          <div>
            <Reveal as="h2" className="waitlist-h" delay={60}>{c.h1}</Reveal>
            <Reveal as="p" className="lede" delay={120} style={{ maxWidth: 560, marginTop: 16 }}>{c.sub}</Reveal>

            <Reveal className="cohort-card" delay={180}>
              <div className="ck">{c.launch.label}</div>
              <div className="cv">{c.launch.value}</div>
              <div className="cm">{c.launch.meta}</div>
              <div className="launch-dot" aria-hidden="true"></div>
            </Reveal>

            <Reveal as="ol" className="wl-steps" delay={240}>
              {c.steps.map((s) => (
                <li key={s.n}>
                  <span className="n">{s.n}</span>
                  <span className="body">
                    <strong>{s.t}</strong> {s.d}
                  </span>
                </li>
              ))}
            </Reveal>
          </div>

          {sent ? (
            <Reveal className="form-success" delay={60}>
              <div className="check">✓</div>
              <h3>You're on the list.</h3>
              <p>
                A senior operator will email you when your spot opens — typically within two weeks.
                Once you're in, your free starter tokens are immediately available.
              </p>
              <div className="receipt">
                <div className="receipt-row"><span className="k">Position</span><span className="v">#{queuePos()}</span></div>
                <div className="receipt-row"><span className="k">Stage</span><span className="v">Private launch · admitting by hand</span></div>
                <div className="receipt-row"><span className="k">Expected admission</span><span className="v">≤ 14 days</span></div>
                <div className="receipt-row"><span className="k">On admission</span><span className="v">Free starter tokens · Q&A Agent live</span></div>
              </div>
            </Reveal>
          ) : (
            <Reveal as="form" className="trial-form" onSubmit={submit} delay={60}>
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
              <button type="submit" className="btn btn-primary">
                {c.form.submit}<Arrow />
              </button>
              <div className="form-foot">{c.form.foot}</div>
            </Reveal>
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
    <section className="section" id="objections">
      <div className="container">
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 800 }}>{c.h2}</Reveal>
        <Reveal as="p" className="lede" delay={120} style={{ marginTop: 20, maxWidth: 640 }}>{c.intro}</Reveal>
        <div className="faq-list">
          {c.faqs.map((f, i) => (
            <Reveal key={i} className={`faq-item ${open === i ? "open" : ""}`} delay={i * 40}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="toggle">+</span>
              </button>
              <div className="faq-a">
                <div className="faq-a-inner">{f.a}</div>
              </div>
            </Reveal>
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
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 20, maxWidth: 760 }}>{c.h2}</Reveal>
        <div className="team-block">
          <Reveal as="p" delay={120}>{c.body}</Reveal>
          <Reveal className="credibility-card" delay={180}>
            <div className="k">{c.credibility.k}</div>
            <div className="v">{c.credibility.v}</div>
            <div className="sub">{c.credibility.sub}</div>
            <hr />
            <div className="zautre-mention">
              <span className="accent">●</span> tokenwright.zautre.com → Tokenwright (own domain, soon)
            </div>
          </Reveal>
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
        <Reveal><Eyebrow>{c.eyebrow}</Eyebrow></Reveal>
        <Reveal as="h2" delay={60} style={{ marginTop: 24 }}>{c.h2}</Reveal>
        <Reveal as="p" className="lede" delay={120}>{c.lede}</Reveal>
        <Reveal delay={180}>
          <a href="#waitlist" className="btn btn-primary" onClick={(e) => {
            e.preventDefault();
            document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" });
          }}>
            {c.primary}<Arrow />
          </a>
        </Reveal>
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
