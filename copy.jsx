/* All site copy in one place. Edit here, not in components. */

const COPY = {
  brand: {
    name: "Tokenwright",
    tag: "Productized, AI-accelerated delivery for Salesforce Commerce Cloud.",
  },

  hero: {
    eyebrow: "Private launch · Salesforce Commerce Cloud",
    h1Lead: "Senior operators.\nQuoted in minutes.",
    h1Accent: "The velocity layer for Salesforce Commerce Cloud.",
    lede: "The backlog item that's been stuck for months can ship this week. One senior operator, with deep context on your entire codebase, quotes it against your actual code in minutes and delivers a merge-ready PR in days. And because the models keep improving, every engagement gets sharper than the last.",
    primary: "Join the waiting list",
    secondary: "See how Managed Tokens work",
    meta: [
      "Quote in minutes",
      "Merge-ready PR in days",
      "Priced on outcomes, not hours or compute",
      "Firm cap, overruns on us",
    ],
    freeTier: "Start free: the Q&A Agent + scoping + 300 starter tokens (~2 small changes). No card, no commitment.",
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
    h2: "Four stages. Every request. Every time.",
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
        desc: "The scoping agent reads your actual code and returns the scope, approach, firm token quote, and risk flags. You approve before any work tokens are reserved.",
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
    eyebrow: "The agents",
    h2: "Your codebase, understood. Even when you're not spending tokens.",
    sub: "Once you're onboarded, the same understanding that prices your requests is available to your internal team as a set of agents — five live today, ten more coming — part of the engine, never separate products to buy.",
    useCaseCaption: "Ask in plain English; the Q&A Agent answers grounded in your actual store — like this real question about product badges. Free with every account, no ticket and no waiting on a developer.",
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
        body: "Watches your instances' logs and your repository for errors, anomalies and security risks, and reports each issue in plain language. Ask it to investigate and it reads your code and writes a finding: what is happening, the root cause, and whether there is a fix or a workaround. Turning that into priced work is one request away, quoted like any other. Included with every account.",
        examples: [
          "Error rate spike, /cart route",
          "Slow query, loyalty_balance.ds",
          "Auth anomaly, admin pipeline",
        ],
      },
      {
        tag: "Available now",
        name: "SEO & AI Discoverability Agent",
        body: "Checks that your pages are discoverable the way you intend — whether a shopper arrives from a search result or an AI assistant's answer — and traces every gap to the part of your code that causes it. Metadata, structured data, redirects, sitemaps and canonical drift, for search engines and AI assistants alike. Run it on request against any page you name.",
        examples: [
          "Product pages carry no machine-readable price",
          "AI crawlers blocked at the edge, not in robots.txt",
          "Canonical points at a page that 404s",
        ],
      },
      {
        tag: "Available now",
        name: "Best Practices Reviewer",
        body: "Reads your codebase the way a senior B2C Commerce architect would — how it extends the reference storefront, calls out to partners, caches, runs its jobs — and scores each area against what Salesforce recommends. Every finding says what the platform recommends, what not following it costs you and whether we can fix it. Any finding can become a request.",
        examples: [
          "Checkout copied from the reference storefront",
          "Partner call made outside the Service Framework",
          "Business logic living in ISML templates",
        ],
      },
      {
        tag: "Available now",
        name: "Security Auditor",
        body: "Reads your code the way an attacker would: what someone with no account, a signed-in shopper or a forged message from a partner could reach, and what they could read, change or pretend to be through it. Secrets in code, unprotected routes, unsafe handling of shopper input, exposed customer data and vulnerable dependencies — found before someone else finds them. It reads the code and never touches your live store.",
        examples: [
          "Credential committed in a config file",
          "Order lookup without the order token",
          "Shopper input rendered with encoding off",
        ],
      },
      {
        tag: "Coming soon",
        name: "Ten more on the list",
        body: "We ship new agents continuously — each a new, automated way to keep your storefront sharper. Ten are on the list today, and the Agents page in your workspace lets your team vote on which we build next. Every one reaches existing subscribers without renegotiation, the moment it's ready.",
        examples: [
          "Performance Agent", "Accessibility Agent",
          "Localization Agent", "Promotions Agent",
          "Data Consistency Checker", "Config Drift Agent",
        ],
        ghost: true,
      },
    ],
  },

  token: {
    eyebrow: "The unit",
    h2: "What a Managed Token actually is.",
    definition: "A Managed Token is a small, fixed unit of delivered SFCC work — and the unit you spend. The agents do the building; each token is priced on the value of what ships — a merge-ready pull request — plus the senior judgment that directs and reviews them and the liability we carry for what we ship. Every plan includes a monthly balance; you spend it on the requests you approve.",
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
        body: "As the Monitor Agent earns trust on the production side, routine fixes and small incidents can move to us. Your incumbent SI handles the bigger production events.",
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

  trust: {
    eyebrow: "Access & trust",
    h2: "Read-only access. Never your production, data, or secrets.",
    sub: "Giving an outside team access is the real hurdle — so we ask for the least we can, and never touch what matters most.",
    accessLabel: "What we access",
    access: [
      "A sandbox or dev instance (preferred) — or read-only repository access",
      "Scoped per operator; no production access required",
      "Cartridge structure, custom code, integration manifests",
    ],
    neverLabel: "What we never touch",
    never: [
      "Production environments. Ever.",
      "Customer data, PII, payment infrastructure",
      "Deploy keys, pager rotations, CI/CD secrets",
    ],
    footnote: "SOC 2 Type II audit in progress; report available under NDA on request.",
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
      { n: "03", t: "Free starter tokens.",    d: "Explore the engine on your real code, ask the Q&A Agent, and approve a real backlog item — no plan required." },
      { n: "04", t: "Codebase analysis.",      d: "Cartridges mapped, integrations catalogued, a State of the Codebase report and a pre-quoted backlog, generated from your connected code." },
      { n: "05", t: "Backlog published.",      d: "Your operator reviews each recommendation and its price and publishes it — refactor work, quick wins, the automated test suite first. You approve request by request." },
      { n: "06", t: "Activate a plan.",        d: "Pick a monthly tier when you're ready to scale beyond your free starter tokens. Credit card or PO." },
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
    demo: {
      lead: "Prefer to talk first?",
      cta: "Request a demo",
      href: "https://calendar.app.google/KY57XQRmoHMM7kxo7",
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
        a: "Each monthly plan includes a token balance — the unit you spend on requests. You submit a request and the scoping agent reads your code and returns a firm token quote in minutes. Requesting a quote costs 10 tokens, and those are not credited back — the agent reads your actual codebase for every quote. The quoted tokens are only reserved once your designated approver signs off, and the cap is firm: if the work runs over, the overrun is on us. Your monthly allowance expires at the end of each billing month; tokens you buy as a top-up carry over until you use them. If a heavy month needs more, top up at any time. Credit card or PO; whichever your procurement prefers.",
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
        q: "What if you mis-quote a feature?",
        a: "The token cap on every quote is firm. If a feature consumes more tokens than quoted, the overrun is on us. You will never receive a surprise invoice.",
      },
    ],
  },

  team: {
    eyebrow: "Who builds this",
    h2: "Senior operators. Full codebase context. Every request, end-to-end.",
    body: "Tokenwright is staffed entirely by senior SFCC operators with deep experience shipping in production. Each one works with the full codebase context the engine provides — no context loss, no handoff chain, no extra layer between you and the person doing the work. Every Managed Token traces to a named human who reviewed every line.",
    cadence: "One operator carrying your whole project sounds like a bottleneck — it isn't. The engine keeps your entire codebase loaded, so there's no context loss between requests and no handoff chain to slow things down. Your operator picks up exactly where they left off and learns how you actually operate — which is how a single senior person moves at the speed of a team.",
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
        { l: "Terms",        h: "https://app.tokenwright.com/terms.html" },
        { l: "Privacy",      h: "https://app.tokenwright.com/policy.html" },
        { l: "Security",     h: "https://app.tokenwright.com/security.html" },
      ]},
    ],
    smallprint: "© Tokenwright · Operated by RAN OOD (EIK 107590615), Bulgaria — a ZaUtre company · Salesforce, SFCC, and Commerce Cloud are trademarks of Salesforce, Inc.",
  },

  /* ─── sub-pages ─────────────────────────────────────────── */

  pricing: {
    crumb: "Pricing",
    h1: "Senior delivery, at a fraction of in-house cost.",
    lede: "Every plan includes a monthly balance of tokens — the unit you spend on requests — for roughly a quarter of what an agency or in-house team would bill. Quotes come back in minutes, and the cap on every quote is firm: overruns are on us, not you.",
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
          "All five agents included",
          "One dedicated senior operator",
          "Top-ups at €3.75 per token",
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
        note: "Nearly three times the throughput for teams shipping continuously — around €18,000 of agency delivery, priced at a fraction.",
        bullets: [
          "Everything in Standard",
          "2.8× Standard's monthly allowance",
          "Top-ups at €3.50 per token",
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
        note: "A full squad's output across storefronts and teams — about €60,000 of agency delivery, priced at a fraction.",
        bullets: [
          "Everything in Growth",
          "3.1× Growth's monthly allowance",
          "Top-ups at €3.25 per token",
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
        { n: "02", t: "Submit a request, get a token quote in minutes.", d: "The scoping agent reads your actual codebase and returns a firm token price before anything starts. Requesting a quote costs 10 tokens, and they are not credited back — the agent reads your code for every quote. Quoted in minutes, not weeks." },
        { n: "03", t: "Approve, then spend from your balance.", d: "Tokens are only reserved on requests you approve, and settled when the PR lands. Nothing moves without your sign-off. One thing comes first: every backlog leads with the automated test-suite foundation task, and other quotes become approvable once it is delivered — or your operator waives it." },
        { n: "04", t: "The cap is firm — overruns are on us.", d: "If a request runs past its quote, we absorb the difference. You are never billed above the cap, full stop." },
      ],
      rollover: "Your monthly allowance resets each billing month: unused allowance tokens expire at the end of the month, so your balance always reflects the month ahead. Tokens you buy as a top-up are different — they carry over until you use them.",
    },
    sampleHeading: "What a quote actually looks like",
    sampleLede: "One firm total, with the plan behind it. A quote is the steps your operator will take, the risks they see, and one number — not a line-by-line split to negotiate.",
    sample: {
      request: "Add Apple Pay to checkout, including international storefronts and the existing wallet test suite.",
      planLabel: "The plan",
      lines: [
        { n: "01", t: "Add Apple Pay as a payment method in checkout" },
        { n: "02", t: "Enable it on every international storefront" },
        { n: "03", t: "Extend the existing wallet test suite to cover it" },
        { n: "04", t: "Open a documented, tested pull request for your SI to merge" },
      ],
      total: { k: "Quoted total", v: "576 tokens · firm cap" },
      compare: "≈ €1,800 delivered. The same scope runs ~€7,500 with an in-house or agency team.",
    },
    transparency: "What you're paying for: the agents do the building — which is exactly why a quote lands at a fraction of in-house cost. The price reflects the senior SFCC judgment that directs and reviews them, the integration to a merge-ready PR, and the firm cap that puts overrun risk on us — the value delivered, not a tally of hours or compute. The plan above is illustrative; every quote comes with its own.",
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
      { day: "Connect",      title: "Instance or repository access", body: "You point us at a sandbox or dev instance or grant read-only repository access. With an instance we pull its active code version — read-only, nothing is ever written to it — so analysis starts without a repository. A repository is what lets us deliver pull requests. Takes minutes, not days. No production access required." },
      { day: "Day 1 – 3",    title: "Codebase analysis (Init)",  body: "Cartridges mapped, custom vs. base code separated, integration points catalogued, quality signals scored. You receive the State of the Codebase report — and a pre-quoted backlog, generated from your code. The backlog leads with the foundation task: your automated test suite." },
      { day: "Day 4 – 7",    title: "Backlog published",         body: "Your operator reviews each recommendation and its price and publishes it — the foundation task first. The code reviews (Best Practices, Security) and the SEO & AI check are not an onboarding stage: they are yours to run from the Agents menu whenever you want them, and any finding can become a request." },
      { day: "Day 7",        title: "Approve and build",         body: "You approve the foundation task with your free starter tokens and it goes to build. From here you approve request by request: refactor work, quick wins, whatever you filed yourself. Other quotes become approvable once the test suite lands, or once your operator waives it." },
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
      tag: "Foundation task",
      title: "The test suite comes first.",
      body: "The first item in every Tokenwright backlog is a comprehensive automated test suite, and the rest of the backlog unlocks once it lands — or once your operator waives it. It protects you — regressions caught before production, confidence to ship faster — and it protects us: every future PR lands on tested ground, which is what makes our quality guarantee real. Already have a suite? The foundation task becomes verifying it and wiring it to run on every change.",
    },
  },

  contact: {
    crumb: "Contact",
    h1: "Not buying tokens? Here's the right door.",
    lede: "Investors, press, partners, and prospective senior operators — this form goes to the right inbox.",
  },

  webinar: {
    // Google Apps Script web app URL (ends in /exec) — see webinar/registrations.gs.
    endpoint: "https://script.google.com/macros/s/AKfycbz_ge1B-rfOCuu1CQOweO-C6sFKETk53xbYN5dJvv8n3StFpzIPmI1pA91CA8BjSQdV/exec",
    // Webinar end — the homepage banner hides itself after this moment.
    endsAt: "2026-10-20T16:45:00+02:00",
    crumb: "Webinar",
    h1: "What's next in Salesforce Commerce Cloud.",
    lede: "How AI agents and senior operators change the way you work through your roadmap, run your store, and know your own code.",
    bar: {
      label: "Live webinar · Tue 20 October",
      text: "What's next in SFCC: agents and senior operators, live.",
      cta: "Register",
    },
    when: {
      label: "When",
      value: "Tuesday, 20 October 2026",
      meta: "16:00 CEST · 45 minutes · Online, free",
    },
    agenda: [
      { n: "01", t: "Your roadmap.",   d: "Every backlog item quoted in minutes, built with AI, checked by a senior operator." },
      { n: "02", t: "Your store.",     d: "Issues caught as they happen, the cause found in your code, and a first look at setting up promotions just by asking." },
      { n: "03", t: "Your knowledge.", d: "Ask how anything works. No documentation, no one person who holds the know-how." },
      { n: "04", t: "Your questions.", d: "Open Q&A with our senior operators." },
    ],
    lineup: {
      eyebrow: "The agents",
      h2: "Agents find it. Senior operators fix it.",
      groups: [
        { label: "Live today", names: [
          "Q&A", "Monitor", "SEO & AI Discoverability",
          "Best Practices", "Security",
        ]},
        { label: "Coming next", soon: true, names: [
          "Performance", "Accessibility", "Localization",
          "Promotions", "Data Consistency", "Multi-Site Feature Matrix",
          "Integration Health", "Job Monitoring", "Config Drift", "Custom",
        ]},
      ],
    },
    form: {
      title: "Register for the webinar",
      sub: "We'll email you the joining link before the session.",
      fields: [
        { name: "name",    label: "Full name",  type: "text",  placeholder: "Jane Park",           autoComplete: "name" },
        { name: "email",   label: "Work email", type: "email", placeholder: "jane@retailer.com",   autoComplete: "email" },
        { name: "company", label: "Company",    type: "text",  placeholder: "Northstar Retail",    autoComplete: "organization" },
        { name: "title",   label: "Job title",  type: "text",  placeholder: "E-commerce Director", autoComplete: "organization-title" },
        { name: "phone",   label: "Phone",      type: "tel",   placeholder: "+31 6 1234 5678",     autoComplete: "tel" },
      ],
      submit: "Register",
      foot: "Free. We use these details for this webinar only.",
      privacy: { l: "Privacy policy", h: "https://app.tokenwright.com/policy.html" },
    },
    done: {
      h: "You're registered.",
      p: "We'll email the joining link to you before Tuesday, 20 October. See you there.",
    },
  },
};

window.COPY = COPY;
