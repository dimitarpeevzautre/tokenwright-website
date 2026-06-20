/* All site copy in one place. Edit here, not in components. */

const COPY = {
  brand: {
    name: "Tokenwright",
    tag: "Productized, AI-accelerated delivery for Salesforce Commerce Cloud.",
  },

  nav: [
    { label: "How it works", href: "#/how-it-works" },
    { label: "Agents",       href: "#/#agents" },
    { label: "Pricing",      href: "#/pricing" },
    { label: "Onboarding",   href: "#/onboarding" },
  ],

  hero: {
    eyebrow: "Private launch · Salesforce Commerce Cloud",
    h1Lead: "Senior operators.\nQuoted in minutes.",
    h1Accent: "Managed Tokens for SFCC.",
    lede: "The backlog item that's been stuck for months can ship this week. One senior operator, with deep context on your entire codebase, quotes it against your actual code in minutes and delivers a merge-ready PR in days. And because the models keep improving, every engagement gets sharper than the last.",
    primary: "Join the waiting list",
    secondary: "See how Managed Tokens work",
    meta: [
      "Quote in minutes",
      "Merge-ready PR in days",
      "Priced on outcomes, not hours or compute",
      "Firm cap, overruns on us",
    ],
  },

  pains: {
    eyebrow: "Why now",
    h2: "Three places teams lose time.",
    sub: "Most e-commerce directors work with capable teams who genuinely want to ship. Good ideas still wait, though — usually because of distance between the people writing the code and the merchant who needs it, and how much context travels with each request.",
    cards: [
      {
        num: "01",
        title: "Organizational distance",
        symptom: "Requests pass through several hands before they reach the developer who builds them.",
        conseq: "Context thins at each handoff, and the original intent gets harder to trace.",
        root: true,
      },
      {
        num: "02",
        title: "Planning overhead",
        symptom: "Refinement, estimation, planning, scoping — all valuable, but it can add up to weeks before a developer touches code.",
        conseq: "Your roadmap can end up moving at the speed of meetings rather than the speed of your business.",
      },
      {
        num: "03",
        title: "Context gaps",
        symptom: "Estimates are often built from meeting notes rather than a deep read of the actual repository.",
        conseq: "When full codebase context isn't on hand before a quote, even great teams are working partly from guesswork.",
      },
    ],
  },

  shift: {
    eyebrow: "The shift",
    h2: "Code is no longer the slow part. Your roadmap shouldn't be either.",
    paragraphs: [
      "AI didn't just make developers faster. It collapsed the gap between intent and working code — which means the slow part of delivery has moved.",
      "Estimation, planning, and scoping made complete sense when writing code was the slow part. Now that working code comes faster, there's room to spend less time planning and more time shipping.",
      "Most system integrators built their teams and rhythms around that earlier shape of the work — and they're genuinely good at it. Layering a new model on top of an established, well-run practice simply takes time.",
      "Tokenwright was built for this new shape from day one. AI gives our operators instant, deep context across your entire codebase — depth that used to take months to accumulate. Seniors handle the judgment; the engine handles the volume. And because the underlying models improve roughly quarterly, every engagement gets sharper, automatically, with no renegotiation.",
    ],
    kicker: "We're not here to replace your SI. We're the velocity layer that sits on top — making the work they already do easier.",
  },

  how: {
    eyebrow: "How it works",
    h2: "Four stages. Every task. Every time.",
    sub: "From a one-line bug fix to a multi-week feature, the flow is the same — quoted in minutes, merge-ready PR in days.",
    steps: [
      {
        num: "01",
        label: "Request",
        desc: "You submit a plain-English description of what you want. \"Add Apple Pay to checkout.\" That's the brief.",
      },
      {
        num: "02",
        label: "Specification",
        desc: "Our engine returns the scope, approach, token quote, and risk flags. You approve before any tokens are deducted.",
        featured: true,
        badge: "Quote in minutes, not weeks",
      },
      {
        num: "03",
        label: "Build",
        desc: "AI generates the change. One named senior operator reviews, refines, and validates — with full codebase context and the experience to make architectural calls.",
      },
      {
        num: "04",
        label: "Delivery",
        desc: "A clean, documented, tested pull request lands in your repo. Your incumbent SI merges and deploys on their schedule.",
      },
    ],
  },

  agents: {
    eyebrow: "Always-on intelligence",
    h2: "Your codebase, always understood. Even when you're not spending tokens.",
    sub: "Once you're onboarded, the engine runs continuously. The same understanding that prices your tasks is available to your internal team as a set of agents — part of the engine, never separate products to buy.",
    cards: [
      {
        tag: "Available now",
        name: "Q&A Agent",
        body: "Merchandisers, PMs, and IT leads ask plain-English questions about how your store actually works. \"Why don't loyalty points apply to sale items?\" \"What would it take to add Apple Pay to checkout?\" Answers come back grounded in your real code — in plain language, not someone's best guess.",
        examples: [
          "Why don't loyalty points apply to sale items?",
          "What would it take to add Apple Pay?",
          "Where's the free-shipping threshold set?",
        ],
      },
      {
        tag: "Available now",
        name: "Monitor Agent",
        body: "Watches your environments for errors, anomalies, performance regressions, and security signals. Catches issues before they become problems. Auto-fixes the safe ones; surfaces the rest as quote-ready remediation tasks.",
        examples: [
          "Error rate spike, /cart route",
          "Slow query, loyalty_balance.ds",
          "Auth anomaly, admin pipeline",
        ],
      },
      {
        tag: "On the roadmap",
        name: "Future agents",
        body: "Every new agent becomes available to existing subscribers without renegotiation. A Best Practices Reviewer, a Data Consistency Checker, a Security Auditor — all in scope as we ship them.",
        examples: [
          "Best Practices Reviewer",
          "Data Consistency Checker",
          "Security Auditor",
        ],
        ghost: true,
      },
    ],
    foot: "Q&A and Monitor are included — ask and watch all you want, no tokens spent. The agents that do real work on your behalf spend tokens like any task, because the value they deliver is worth it. You only ever spend on outcomes you approve.",
  },

  token: {
    eyebrow: "The unit",
    h2: "What a Managed Token actually is.",
    definition: "A Managed Token is a small, fixed unit of delivered SFCC work — and the unit you spend. The agents do the building; each token is priced on the value of what ships — a merge-ready pull request — plus the senior judgment that directs and reviews them and the liability we carry for what we ship. Every plan includes a monthly balance; you spend it on the tasks you approve.",
    meta: [
      { k: "Small feature or fix", v: "80 – 150 tokens",   accent: false },
      { k: "Mid-size feature",     v: "300 – 700 tokens",  accent: false },
      { k: "Hard monthly cap",     v: "Firm. Always.",     accent: true  },
    ],
    transparency: "Why a token costs a fraction of traditional delivery: the agents do the heavy lifting, so senior time per outcome is small. You're priced on the value of what ships — a merge-ready PR — and the senior judgment that directs and verifies it, never a meter of hours or compute.",
  },

  expansion: {
    eyebrow: "The expansion path",
    h2: "Velocity layer first. Full stack when you ask.",
    sub: "You can stop at any stage. We don't pitch consolidation — we earn it.",
    stages: [
      {
        n: "Stage 01",
        title: "Velocity layer",
        when: "Days 0 – 90",
        body: "Subscription alongside your incumbent SI. We clear the backlog and deliver clean PRs. They keep production, monitoring, and pager duty. Zero political fight, no procurement gate.",
      },
      {
        n: "Stage 02",
        title: "Shared operations",
        when: "Months 6 – 12",
        body: "The Monitor Agent has demonstrated value on the production side. Routine fixes and small incidents move to us. Your incumbent SI handles the bigger production events.",
        featured: true,
      },
      {
        n: "Stage 03",
        title: "Full stack",
        when: "When you ask",
        body: "We absorb the traditional SFCC scope — deploys, support, 24/7 operations — under one Tokenwright relationship. One vendor, one bill, one team. Stage 03 is a conversation you raise, not one we pitch.",
      },
    ],
  },

  waitlist: {
    eyebrow: "Get access",
    h1: "Join the waiting list.",
    sub: "We're early, and admissions are capped to protect senior-operator capacity. Once you're in, the engine is pointed at your code within a week.",
    launch: {
      label: "Where we are",
      value: "Private launch",
      meta: "Reviewed by hand. Two weeks from signup to admission, typical.",
    },
    steps: [
      { n: "01", t: "Sign up.",                d: "One click. No SOW. No sales call." },
      { n: "02", t: "Reviewed and admitted by hand.", d: "Capacity-controlled. We email you the moment you're in." },
      { n: "03", t: "Free starter tokens.",    d: "Explore the engine on your real code. Ask the Q&A Agent. Get a quote on a real backlog item." },
      { n: "04", t: "Activate your plan.",     d: "Pick a monthly tier; its token balance is live the same day. Spend it on tasks as you approve them. Credit card or PO." },
      { n: "05", t: "Init + Code Review.",     d: "Your first paid tasks. State of the Codebase report + quality and risk assessment." },
      { n: "06", t: "Default backlog appears.", d: "Refactor tasks, quick wins, test suite scope — all pre-quoted in your project, ready to approve." },
    ],
    form: {
      title: "Reserve your spot",
      sub: "Frictionless signup. We'll email you the moment you're admitted.",
      fields: [
        { name: "name",    label: "Your name",     type: "text",  placeholder: "Jane Park" },
        { name: "email",   label: "Work email",    type: "email", placeholder: "jane@retailer.com" },
        { name: "company", label: "Company",       type: "text",  placeholder: "Northstar Retail" },
        { name: "site",    label: "SFCC site URL", type: "text",  placeholder: "https://shop.northstar.com" },
        { name: "stuck",   label: "Your hardest stuck backlog item (optional)", type: "textarea", placeholder: "e.g. Apple Pay rollout has been sitting in refinement for two months." },
      ],
      submit: "Join the waiting list",
      foot: "No credit card. No commitment beyond admission. Token purchase happens after you're admitted.",
    },
  },

  objections: {
    eyebrow: "For the skeptical CTO",
    h2: "The questions you'll ask before you sign anything.",
    intro: "Your e-commerce director will sign on velocity. You'll sign on the answers below.",
    faqs: [
      {
        q: "Why a waiting list? Can't I just buy tokens now?",
        a: "We're early, and we cap admissions because every Managed Token traces to a senior operator's review. The waiting list is how we protect that guarantee — not a marketing tactic. Most accounts are admitted within two weeks. If your business case is time-critical, tell us in the signup notes and we'll prioritize accordingly.",
      },
      {
        q: "How does billing actually work?",
        a: "Each monthly plan includes a token balance — the unit you spend on tasks. You submit a task, an agent returns a firm token quote in minutes, and tokens are only deducted once your designated approver signs off. The quote cap is firm: if the work runs over, the overrun is on us. Unused tokens expire at the end of each billing month — they don't roll over. If a heavy month needs more, you can top up at any time. Credit card or PO; whichever your procurement prefers.",
      },
      {
        q: "What about security and code access?",
        a: "Two onboarding paths, both read-only. We strongly prefer access to a sandbox or dev instance — it lets the engine verify behavior, not just read code, which sharpens estimate accuracy. The fallback is read-only repository access scoped per operator. We never touch production environments, payment infrastructure, or customer data. SOC 2 Type II audit is in progress; report available under NDA on request.",
      },
      {
        q: "What happens to our existing agency?",
        a: "Nothing, on day one. We sit alongside them as a velocity layer — they keep production, pager duty, the long-tail platform work. As the Monitor Agent earns trust, you can optionally move routine operations to us. Full consolidation is a conversation you raise, not one we pitch. Most clients find the relationship with their incumbent SI improves because we absorb the work that drags their bandwidth.",
      },
      {
        q: "What's your bug-fix SLA?",
        a: "48 business hours from a confirmed bug report to a merge-ready PR. If we don't hit it, the fix is on us — no tokens consumed. This is a hard commitment, not a target.",
      },
      {
        q: "What if you mis-quote a feature?",
        a: "The token cap on every quote is firm. If a feature consumes more tokens than quoted, the overrun is on us. You will never receive a surprise invoice. If we mis-scope a request more than twice in a month, we credit the difference automatically.",
      },
    ],
  },

  team: {
    eyebrow: "Who builds this",
    h2: "Senior operators. Full codebase context. Every request, end-to-end.",
    body: "Tokenwright is staffed entirely by senior SFCC operators with deep experience shipping in production. Each one works with the full codebase context the engine provides — no context loss, no handoff chain, no extra layer between you and the person doing the work. Every Managed Token traces to a named human who reviewed every line.",
    cadence: "One operator carrying your whole project sounds like a bottleneck — it isn't. The engine keeps your entire codebase loaded, so there's no context loss between tasks and no handoff chain to slow things down. Your operator picks up exactly where they left off and learns how you actually operate — which is how a single senior person moves at the speed of a team.",
    credibility: {
      k: "Backed by",
      v: "ZaUtre",
      sub: "ZaUtre is the long-standing Salesforce Commerce Cloud consultancy that built Tokenwright. It runs the traditional SFCC capability — deploys, 24/7 ops, complex platform work — that lives underneath the Tokenwright relationship when clients are ready to consolidate.",
    },
  },

  finalCta: {
    eyebrow: "One last thing",
    h2: "Point the engine at your hardest stuck backlog item. See what it costs.",
    lede: "Frictionless signup. Admission typically within two weeks. Free starter tokens to explore the engine on your real code before you buy.",
    primary: "Join the waiting list",
  },

  footer: {
    tag: "The velocity layer for Salesforce Commerce Cloud merchants. Quote in minutes. Merge-ready PR in days.",
    cols: [
      { title: "Product", links: [
        { l: "How it works", h: "#/how-it-works" },
        { l: "Agents",       h: "#/#agents" },
        { l: "Pricing",      h: "#/pricing" },
        { l: "Onboarding",   h: "#/onboarding" },
        { l: "Join waiting list", h: "#/#waitlist" },
      ]},
      { title: "Company", links: [
        { l: "Contact",      h: "#/contact" },
        { l: "Investors",    h: "#/contact" },
        { l: "Press",        h: "#/contact" },
      ]},
      { title: "Legal", links: [
        { l: "Terms",        h: "#" },
        { l: "Privacy",      h: "#" },
        { l: "Security",     h: "#" },
      ]},
    ],
    smallprint: "© Tokenwright · A ZaUtre company · Salesforce, SFCC, and Commerce Cloud are trademarks of Salesforce, Inc.",
  },

  /* ─── sub-pages ─────────────────────────────────────────── */

  pricing: {
    crumb: "Pricing",
    h1: "Senior delivery, at a fraction of in-house cost.",
    lede: "Every plan includes a monthly balance of tokens — the unit you spend on tasks — for roughly a quarter of what an agency or in-house team would bill. Quotes come back in minutes, and the cap on every quote is firm: overruns are on us, not you.",
    tiers: [
      {
        name: "Standard",
        meta: "A senior operator's output on your roadmap",
        value: "~75% less",
        priceLine: "than in-house · €1,500 / mo",
        tokens: "480 tokens / month",
        note: "Senior-operator output delivering merge-ready PRs on your roadmap — work an agency would bill at roughly €6,000.",
        bullets: [
          "Quoted in minutes, not weeks",
          "Firm token cap — overruns are on us",
          "Q&A + Monitor agents included",
          "One dedicated senior operator",
        ],
        cta: "Join the waiting list",
        feature: true,
        contact: false,
      },
      {
        name: "Growth",
        meta: "A small delivery team's throughput",
        value: "~77% less",
        priceLine: "than in-house · €4,200 / mo",
        tokens: "1,344 tokens / month",
        note: "Three times the throughput for teams shipping continuously — around €18,000 of agency delivery, priced at a fraction.",
        bullets: [
          "Everything in Standard",
          "Priority queue — 24h quotes",
          "Quarterly architecture review",
          "Refactor budget that lowers your run-rate",
        ],
        cta: "Join the waiting list",
        feature: false,
        contact: false,
      },
      {
        name: "Enterprise",
        meta: "A full SFCC squad's output across storefronts",
        value: "~78% less",
        priceLine: "than in-house · €13,000 / mo",
        tokens: "4,160 tokens / month",
        note: "A full squad's output across storefronts and teams — about €60,000 of agency delivery, embedded with your platform team.",
        bullets: [
          "Everything in Growth",
          "Multiple operators",
          "Embedded with your platform team",
          "Monthly run-rate review",
        ],
        cta: "Talk to us",
        feature: false,
        contact: true,
      },
    ],
    howTokens: {
      eyebrow: "How tokens work",
      h2: "Tokens are the unit you spend.",
      steps: [
        { n: "01", t: "Your plan includes a monthly token balance.", d: "Standard's 480 tokens cover about four or five small features a month — roughly 80–150 tokens each. Mid-size features draw more; the Apple Pay quote below comes to 576." },
        { n: "02", t: "Submit a task, get a token quote in minutes.", d: "An agent scopes the work against your actual codebase and returns a firm token price before anything starts. Quoted in minutes, not weeks." },
        { n: "03", t: "Approve, then spend from your balance.", d: "Tokens are only deducted on tasks you approve. Nothing moves without your sign-off, and every quote breaks down where the tokens go." },
        { n: "04", t: "The cap is firm — overruns are on us.", d: "If a task runs past its quote, we absorb the difference. You are never billed above the cap, full stop." },
      ],
      rollover: "Tokens reset monthly. Unused tokens expire at the end of your billing month — they don't roll over, so your balance always reflects the month ahead, never a backlog of credit.",
    },
    sampleHeading: "What a quote actually looks like",
    sample: {
      request: "Add Apple Pay to checkout, including international storefronts and the existing wallet test suite.",
      lines: [
        { k: "AI context + generation",     v: "144 tokens" },
        { k: "Senior operator review",       v: "240 tokens" },
        { k: "Integration & PR effort",      v: "120 tokens" },
        { k: "Liability & guarantee",        v: "72 tokens" },
      ],
      total: { k: "Quoted total", v: "576 tokens · firm cap" },
      compare: "≈ €1,800 delivered. The same scope runs ~€7,500 with an in-house or agency team.",
    },
    transparency: "What you're paying for: the agents do the building — which is exactly why a quote lands at a fraction of in-house cost. The price reflects the senior SFCC judgment that directs and reviews them, the integration to a merge-ready PR, and the firm cap that puts overrun risk on us — the value delivered, not a tally of hours or compute. The split above is illustrative; every quote breaks down the same way.",
  },

  howItWorksPage: {
    crumb: "How it works",
    h1: "From request to merge-ready PR. The full mechanic.",
    lede: "When AI gives operators full codebase context before they write a line, the delivery flow changes. Here's what that looks like.",
  },

  onboarding: {
    crumb: "Onboarding",
    h1: "Your first two weeks with Tokenwright.",
    lede: "Onboarding is a product surface, not a consulting engagement. From admission to your first merge-ready PR — typically under fourteen days.",
    timeline: [
      { day: "Sign up",      title: "Frictionless registration", body: "One click. No SOW. No sales call. You join the waiting list, and we email you the moment you're admitted." },
      { day: "Admission",    title: "Admission",                  body: "We review and admit by hand. When your spot is up, you receive free starter tokens and access to the dashboard, the Q&A Agent, and the quote engine." },
      { day: "Connect",      title: "Sandbox or repo access",    body: "You point us at a sandbox/dev instance (preferred — lets the engine verify behavior) or grant read-only repository access. Takes minutes, not days. No production access required." },
      { day: "Day 1 – 3",    title: "Init: codebase ingestion",  body: "First paid task. Cartridges mapped, custom vs. base code separated, integration points catalogued, quality signals scored. You receive the State of the Codebase report." },
      { day: "Day 4 – 7",    title: "Code Review",               body: "Second paid task. Quality and risk assessment across the codebase. Surfaces refactor opportunities, test coverage gaps, and quick wins." },
      { day: "Day 7",        title: "Default backlog appears",   body: "Your project auto-populates with quoted, prioritizable tasks: refactor work, test suite build-out, quick wins. You approve task-by-task." },
      { day: "Day 7 – 14",   title: "First feature PR lands",    body: "Your incumbent SI reviews and deploys on their schedule. From here, you ship at whatever pace you can approve." },
    ],
    touchHeading: "What we touch. What we never touch.",
    yes: [
      "Sandbox or dev instance (preferred)",
      "Read-only repository access, scoped per operator",
      "Cartridge structure, custom code, integration manifests",
      "Pull request submission via your existing source control",
      "Bug reports, feature requests, scoped refactors",
    ],
    no: [
      "Production environments. Ever.",
      "Deploy keys, pager rotations, CI/CD secrets",
      "Customer data, PII, payment infrastructure",
      "Anything your existing agency contractually owns",
    ],
    recommended: {
      tag: "Recommended foundation task",
      title: "Test Suite Build-Out",
      body: "After Init and Code Review, our strongly recommended next engagement is a comprehensive automated test suite. It protects you (regressions caught before production, confidence to ship faster) and it protects us (every future PR lands on tested ground, sharpening our quality guarantee). It's the engagement that makes everything that follows cheaper.",
    },
  },

  contact: {
    crumb: "Contact",
    h1: "Not buying tokens? Here's the right door.",
    lede: "Investors, press, partners, and prospective senior operators — this form goes to the right inbox.",
  },
};

window.COPY = COPY;
