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
    h1Lead: "Predictable cadence.\nSenior operators.",
    h1Accent: "Managed Tokens for SFCC.",
    lede: "The backlog item that's been stuck for months can ship this week. One senior operator, with deep context on your entire codebase, quotes it against your actual code in minutes and delivers a merge-ready PR in days. And because the models keep improving, every engagement gets sharper than the last.",
    primary: "Join the waiting list",
    secondary: "See how Managed Tokens work",
    meta: [
      "Quote in minutes",
      "Merge-ready PR in days",
      "Tokens map to senior work, not compute",
      "Firm cap, overruns on us",
    ],
  },

  pains: {
    eyebrow: "Why now",
    h2: "Three places teams lose time.",
    sub: "Most E-commerce Directors work with capable teams who genuinely want to ship. Good ideas still wait, though — usually because of distance between the people writing the code and the merchant who needs it, and how much context travels with each request.",
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
    sub: "From a one-line bug fix to a multi-week feature, the flow is the same. Predictability is part of the product.",
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
    sub: "Once you're onboarded, the engine runs continuously. The same understanding that prices your tasks is available to your internal team as a set of agents — included with the subscription, not sold as separate SKUs.",
    cards: [
      {
        tag: "Available now",
        name: "Q&A Agent",
        body: "Your team asks plain-English questions about your own codebase. \"Where does the loyalty calculation actually live?\" \"What happens when a guest checkout collides with a promo code?\" Answers come back grounded in the repository — not in someone's recollection.",
        examples: [
          "Where does the loyalty calc live?",
          "Which controllers touch the cart?",
          "What's the guest-checkout coupon path?",
        ],
      },
      {
        tag: "Available now",
        name: "Monitor Agent",
        body: "Watches your environments for errors, anomalies, performance regressions, and security signals. Catches problems before your retailer notices. Auto-fixes the safe ones; surfaces the rest as quote-ready remediation tasks.",
        examples: [
          "Error rate spike, /cart route",
          "Slow query, loyalty_balance.ds",
          "Auth anomaly, admin pipeline",
        ],
      },
      {
        tag: "On the roadmap",
        name: "Future agents",
        body: "Every new agent becomes available to existing subscribers without renegotiation. Refactor Recommender, Security Auditor, Release Notes Writer — all in scope as we ship them.",
        examples: [
          "Refactor Recommender",
          "Security Auditor",
          "Release Notes Writer",
        ],
        ghost: true,
      },
    ],
    foot: "Agents exist to make your team faster — not to extract more tokens. The better they work, the more you trust the engine that runs the paid task flow.",
  },

  token: {
    eyebrow: "The unit",
    h2: "What a Managed Token actually is.",
    definition: "A Managed Token is a composite unit of senior SFCC delivery capacity. Each token reflects the AI context and generation work, the senior operator's review and architectural judgment, the liability we carry for what we ship, and the integration effort to deliver a merge-ready pull request.",
    meta: [
      { k: "Small feature",                  v: "50 – 150 tokens",     accent: false },
      { k: "Mid-size merchant, typical mo.", v: "2,000 – 5,000 tokens",accent: false },
      { k: "Hard monthly cap",               v: "Firm. Always.",       accent: true  },
    ],
    transparency: "Transparency floor: the majority of any quote reflects human expertise, integration, and the guarantee — not raw AI infrastructure cost. We publish this commitment so you can hold us to it.",
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
      meta: "Small batches, by hand. Two weeks from signup to admission, typical.",
    },
    steps: [
      { n: "01", t: "Sign up.",                d: "One click. No SOW. No sales call." },
      { n: "02", t: "Admitted in the next batch.", d: "Capacity-controlled. Position visible from your dashboard." },
      { n: "03", t: "Free starter tokens.",    d: "Explore the engine on your real code. Ask the Q&A Agent. Get a quote on a real backlog item." },
      { n: "04", t: "Buy your first block.",   d: "One-time or monthly. Any size. Credit card or PO. No minimum commitment." },
      { n: "05", t: "Init + Code Review.",     d: "Your first paid tasks. State of the Codebase report + quality and risk assessment." },
      { n: "06", t: "Default backlog appears.", d: "Refactor tasks, quick wins, test suite scope — all pre-quoted in your project, ready to approve." },
    ],
    form: {
      title: "Reserve your spot",
      sub: "Frictionless signup. We'll email you when your batch is admitted.",
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
        a: "Two options. Buy a one-time token block (any size, no commitment), or subscribe to a monthly tier with a hard cap. No tokens are deducted until your designated approver signs off on the quote. The cap is the maximum you can be billed in any month — period. Credit card or PO; whichever your procurement prefers.",
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
    cadence: "This is also why we talk about cadence. Context-switching costs far less than it used to — the engine keeps your entire codebase loaded, so your operator picks up exactly where they left off. But one operator still carries your whole project: they do the work of a full team and learn how you actually operate. You get the most from that when the load is steady and predictable. Spikes still happen, and they're far easier to absorb here than in the traditional model — usually we can accommodate them without a scramble — but a level, expected pace is where a single dedicated operator does their best work.",
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
    h1: "Managed Tokens. Predictable pricing for senior delivery.",
    lede: "Buy in blocks. Subscribe in tiers. Spend on tasks. The token cap on every quote is firm — overruns are on us. And your architecture quality directly lowers your run-rate: cleaner code means cheaper quotes.",
    tiers: [
      {
        name: "Block",
        meta: "One-time · No commitment",
        price: "From 500",
        priceUnit: "tokens",
        bullets: [
          "Any size, any time",
          "Credit card or PO",
          "Hard cap per quote",
          "Q&A + Monitor Agent included",
          "No subscription",
        ],
        cta: "Join the waiting list",
        feature: false,
      },
      {
        name: "Standard",
        meta: "Monthly · Mid-size merchant",
        price: "3,000",
        priceUnit: "tokens / mo",
        bullets: [
          "Everything in Block",
          "Dedicated senior operator",
          "Priority queue (24h quote)",
          "Quarterly architecture review",
          "Refactor budget — lowers your run-rate",
        ],
        cta: "Join the waiting list",
        feature: true,
      },
      {
        name: "Enterprise",
        meta: "Multi-storefront, multi-team",
        price: "Custom",
        priceUnit: "",
        bullets: [
          "Everything in Standard",
          "Multiple operators",
          "Embedded with your platform team",
          "Monthly run-rate review",
          "Optional Stage 02 / Stage 03 expansion",
        ],
        cta: "Talk to sales",
        feature: false,
      },
    ],
    sampleHeading: "What a quote actually looks like",
    sample: {
      request: "Add Apple Pay to checkout, including international storefronts and the existing wallet test suite.",
      lines: [
        { k: "AI context + generation",     v: "32 tokens" },
        { k: "Senior operator review",       v: "48 tokens" },
        { k: "Integration & PR effort",      v: "26 tokens" },
        { k: "Liability & guarantee",        v: "14 tokens" },
      ],
      total: { k: "Quoted total", v: "120 tokens · firm cap" },
    },
    transparency: "Transparency floor: the majority of every quote reflects human expertise, integration, and the guarantee — not raw AI infrastructure cost. The split above is illustrative; every quote we send breaks down the same way.",
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
      { day: "Sign up",      title: "Frictionless registration", body: "One click. No SOW. No sales call. You join the waiting list and see your batch position from your dashboard." },
      { day: "Admission",    title: "Admission",                  body: "We admit in small batches by hand. When your spot is up, you receive a free token allowance and access to the dashboard, the Q&A Agent, and the quote engine." },
      { day: "Connect",      title: "Sandbox or repo access",    body: "You point us at a sandbox/dev instance (preferred — lets the engine verify behavior) or grant read-only repository access. Takes minutes, not days. No production access required." },
      { day: "Day 1 – 3",    title: "Init: codebase ingestion",  body: "First paid task. Cartridges mapped, custom vs. base code separated, integration points catalogued, quality signals scored. You receive the State of the Codebase report." },
      { day: "Day 4 – 7",    title: "Code Review",               body: "Second paid task. Quality and risk assessment across the codebase. Surfaces refactor opportunities, test coverage gaps, and quick wins." },
      { day: "Day 7",        title: "Default backlog appears",   body: "Your project auto-populates with quoted, prioritizable tasks: refactor work, test suite build-out, quick wins. You approve task-by-task." },
      { day: "Day 7 – 14",   title: "First feature PR lands",    body: "Your incumbent SI reviews and deploys on their schedule. From here, cadence is whatever pace you can approve." },
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
