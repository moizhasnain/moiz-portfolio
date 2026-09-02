export type Metric = {
  label: string;
  value: string;
  change?: string;
  changeDirection?: "up" | "down" | "flat";
};

export type CaseStudy = {
  slug: string;
  name: string;
  domain: string;
  industry: string;
  role: string;
  services: string[];
  dataAsOf: string;
  authorityScore: string;
  authorityLabel: string;
  metrics: Metric[];
  challenge: string;
  strategy: string[];
  execution: string[];
  results: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "quiksnap",
    name: "QuikSnap",
    domain: "quiksnap.us",
    industry: "Automotive",
    role: "SEO Executive",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    dataAsOf: "February 2026",
    authorityScore: "20",
    authorityLabel: "Average",
    metrics: [
      { label: "Organic traffic", value: "7.1K", change: "+151%", changeDirection: "up" },
      { label: "Organic keywords", value: "4.2K", change: "-4.4%", changeDirection: "down" },
      { label: "Referring domains", value: "419", changeDirection: "flat" },
      { label: "Backlinks", value: "1.5K", changeDirection: "flat" },
      { label: "US traffic share", value: "14%", changeDirection: "flat" },
    ],
    challenge:
      "QuikSnap competes in a crowded automotive accessories niche where most category pages were thin, duplicated across variants, and largely invisible to search — organic traffic was flat and keyword coverage was shallow relative to the catalog size.",
    strategy: [
      "Rebuilt the technical foundation: crawl budget, indexation and canonicalization across product and category templates",
      "Re-mapped keywords to the catalog to close gaps between what shoppers search and what pages existed",
      "Layered in local intent signals for regional buyer queries",
      "Ran a structured link acquisition program to lift domain-level trust",
    ],
    execution: [
      "Full technical audit and fix cycle covering crawlability, page speed and structured data",
      "On-page rewrites for priority category and product pages using mapped keyword clusters",
      "Ongoing content calendar aligned to seasonal automotive search demand",
      "Outreach-driven backlink acquisition to relevant automotive and lifestyle domains",
    ],
    results:
      "Organic traffic grew 151% and the site now captures a 14% share of US organic traffic in its category, backed by a referring-domain base of 419 domains and roughly 1.5K backlinks.",
  },
  {
    slug: "serenityplano",
    name: "Serenity Plano",
    domain: "serenityplano.com",
    industry: "Spa & Salon",
    role: "SEO Executive",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    dataAsOf: "September 2026",
    authorityScore: "12",
    authorityLabel: "Fine",
    metrics: [
      { label: "Organic traffic", value: "5.5K", change: "+0.4%", changeDirection: "up" },
      { label: "Organic keywords", value: "525", change: "+0.4%", changeDirection: "up" },
      { label: "Referring domains", value: "269", changeDirection: "flat" },
      { label: "Backlinks", value: "598", changeDirection: "flat" },
      { label: "US traffic share", value: "66%", changeDirection: "flat" },
    ],
    challenge:
      "As a local spa and salon business, Serenity Plano needed to defend and consolidate an already strong local footprint rather than chase raw volume — the priority was sustaining a 66% US traffic share while keyword coverage kept pace with service offerings.",
    strategy: [
      "Local SEO consolidation across Google Business Profile signals and location-specific landing pages",
      "On-page refinement of service pages to match searcher intent for each treatment",
      "Selective content additions rather than volume publishing, protecting existing rankings",
      "Steady, low-risk link building to preserve authority score stability",
    ],
    execution: [
      "Local citation and NAP consistency clean-up",
      "Service-page keyword mapping and on-page optimization",
      "Ongoing rank and visibility monitoring to catch regressions early",
      "Targeted niche edits from relevant wellness and lifestyle sites",
    ],
    results:
      "The site holds a 66% share of its US organic traffic with 525 ranking keywords, an Authority Score of 12, and a stable base of 269 referring domains — a durable local footprint rather than a volatile one.",
  },
  {
    slug: "premiumexo",
    name: "PremiumExo",
    domain: "premiumexo.com",
    industry: "Car Accessories",
    role: "SEO Executive",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    dataAsOf: "June 2026",
    authorityScore: "8",
    authorityLabel: "Low authority",
    metrics: [
      { label: "Organic traffic", value: "115", change: "+11%", changeDirection: "up" },
      { label: "Organic keywords", value: "91", change: "+7.1%", changeDirection: "up" },
      { label: "Referring domains", value: "163", changeDirection: "flat" },
      { label: "Backlinks", value: "634", changeDirection: "flat" },
    ],
    challenge:
      "PremiumExo entered a highly competitive car-accessories vertical with a young domain and almost no organic footprint, competing against established e-commerce players for the same head terms.",
    strategy: [
      "Prioritized long-tail, buyer-intent keyword clusters the domain could realistically rank for",
      "Built out technical fundamentals early to avoid compounding issues as the catalog grows",
      "Started link building from a low base, focusing on relevance over volume",
    ],
    execution: [
      "Technical SEO baseline: indexation, site structure and speed fixes",
      "On-page optimization of product and category templates around mapped keywords",
      "Early-stage outreach and niche edits to begin building referring-domain diversity",
    ],
    results:
      "Organic traffic grew 11% and organic keywords grew 7.1% off a young domain, with the referring-domain base already reaching 163 — early, steady progress consistent with a newer site's growth curve.",
  },
  {
    slug: "totallasertexas",
    name: "Total Laser Texas",
    domain: "totallasertexas.com",
    industry: "Spa & Salon",
    role: "SEO Executive",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    dataAsOf: "June 2025",
    authorityScore: "8",
    authorityLabel: "Low authority",
    metrics: [
      { label: "Organic traffic", value: "1.5K", change: "+425%", changeDirection: "up" },
      { label: "Organic keywords", value: "36", change: "+50%", changeDirection: "up" },
      { label: "Referring domains", value: "176", changeDirection: "flat" },
      { label: "Backlinks", value: "1.7K", changeDirection: "flat" },
      { label: "US traffic share", value: "69%", changeDirection: "flat" },
    ],
    challenge:
      "Total Laser Texas had almost no organic visibility for its core laser and aesthetic treatment services, leaving paid channels to carry demand that local search intent should have captured for free.",
    strategy: [
      "Focused local SEO around treatment-specific and geo-specific search terms",
      "Rebuilt on-page content around the small set of keywords that actually drive bookings",
      "Ran a concentrated link building push to lift a low starting authority score",
    ],
    execution: [
      "Local landing page optimization for each treatment offered",
      "On-page keyword mapping despite a narrow initial keyword footprint",
      "Backlink acquisition through relevant local and beauty-industry placements",
    ],
    results:
      "Organic traffic increased 425% and ranking keywords grew 50%, with the site now capturing a 69% share of its US organic traffic and a backlink profile of roughly 1.7K links from 176 referring domains.",
  },
  {
    slug: "dynamicsecurity",
    name: "Dynamic Security",
    domain: "dynamicsecurity.co.uk",
    industry: "Security",
    role: "Link Builder",
    services: ["Link Building", "Local SEO"],
    dataAsOf: "March 2026",
    authorityScore: "15",
    authorityLabel: "Fine",
    metrics: [
      { label: "Organic traffic", value: "210", change: "+79%", changeDirection: "up" },
      { label: "Organic keywords", value: "361", change: "+4.9%", changeDirection: "up" },
      { label: "Referring domains", value: "430", changeDirection: "flat" },
      { label: "Backlinks", value: "1.2K", changeDirection: "flat" },
    ],
    challenge:
      "Dynamic Security needed a stronger backlink foundation to support its UK security services pages, which were under-linked relative to established competitors in the sector.",
    strategy: [
      "Ran a focused outreach and niche-edit program to grow referring domains from relevant, trustworthy sources",
      "Paired link building with light local SEO support to reinforce regional relevance",
    ],
    execution: [
      "Prospecting and outreach to security, trade and local business sites",
      "Niche edits and guest placements to diversify anchor and referring-domain profile",
      "Ongoing monitoring of link velocity and authority score movement",
    ],
    results:
      "Organic traffic grew 79% and the referring-domain base reached 430 — one of the largest link profiles across this portfolio — with an Authority Score of 15.",
  },
];

export const projects = [
  {
    name: "QuikSnap.us",
    domain: "quiksnap.us",
    industry: "Automobile",
    role: "SEO Executive",
    hasCaseStudy: true,
    slug: "quiksnap",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    headline: "7.1K organic traffic, +151% growth",
  },
  {
    name: "PremiumExo.com",
    domain: "premiumexo.com",
    industry: "Car Accessories",
    role: "SEO Executive",
    hasCaseStudy: true,
    slug: "premiumexo",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    headline: "91 keywords ranking, +7.1% growth",
  },
  {
    name: "SerenityPlano.com",
    domain: "serenityplano.com",
    industry: "Spa & Salon",
    role: "SEO Executive",
    hasCaseStudy: true,
    slug: "serenityplano",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    headline: "66% US organic traffic share",
  },
  {
    name: "Total Laser Texas",
    domain: "totallasertexas.com",
    industry: "Spa & Salon",
    role: "SEO Executive",
    hasCaseStudy: true,
    slug: "totallasertexas",
    services: [
      "Technical SEO",
      "On-Page SEO",
      "Local SEO",
      "Content Strategy",
      "Keyword Research",
      "Link Building",
    ],
    headline: "+425% organic traffic growth",
  },
  {
    name: "DynamicSecurity.co.uk",
    domain: "dynamicsecurity.co.uk",
    industry: "Security",
    role: "Link Builder",
    hasCaseStudy: true,
    slug: "dynamicsecurity",
    services: ["Link Building", "Local SEO"],
    headline: "430 referring domains, +79% traffic",
  },
  {
    name: "InnovativeSecurityControls.com",
    domain: "innovativesecuritycontrols.com",
    industry: "Security",
    role: "Link Builder",
    hasCaseStudy: false,
    slug: null,
    services: ["Link Building", "Local SEO"],
    headline: "Ongoing link building & local SEO support",
  },
];

export const skills = [
  "Technical SEO",
  "On-Page SEO",
  "Off-Page SEO",
  "Link Building",
  "Local SEO",
  "Keyword Research",
  "Keyword Mapping",
  "Keyword Clustering",
  "Guest Posting",
  "Niche Edits",
  "Outreach Campaigns",
  "Content Strategy",
  "Competitor Analysis",
];

export const tools = [
  { name: "Google Search Console", short: "GSC" },
  { name: "Google Analytics 4", short: "GA4" },
  { name: "SEMrush", short: "SR" },
  { name: "Ahrefs", short: "AH" },
  { name: "Screaming Frog", short: "SF" },
];

export const experience = [
  {
    role: "SEO Executive",
    company: "Koalify",
    period: "Jan 2025 — Present",
    responsibilities: [
      "SEO Strategy",
      "Technical Audits",
      "Content Optimization",
      "Keyword Research",
      "SEO Reporting",
    ],
  },
  {
    role: "Link Building Specialist",
    company: "Dynamic International Education Consultant",
    period: "Nov 2023 — Dec 2024",
    responsibilities: [
      "Guest Posting",
      "Niche Edits",
      "Outreach",
      "Backlink Prospecting",
      "Competitor Analysis",
    ],
  },
];

export const certifications = [
  { name: "Google Analytics Certification", issuer: "Google" },
  { name: "SEMrush SEO Essentials Certification", issuer: "SEMrush" },
];

export const industries = [
  "Automotive",
  "Security",
  "Beauty & Wellness",
  "Spa & Salon",
  "Car Accessories",
];

export const clientHighlights = [
  {
    title: "Turned around a near-invisible local business",
    detail:
      "Took Total Laser Texas from a near-zero organic footprint to 425% traffic growth and 69% US organic traffic share through focused local SEO and link building.",
  },
  {
    title: "Scaled an automotive catalog's search visibility",
    detail:
      "Grew QuikSnap.us to 7.1K organic sessions and a 14% US traffic share by rebuilding technical foundations and re-mapping keywords across the product catalog.",
  },
  {
    title: "Built one of the strongest link profiles in the portfolio",
    detail:
      "Grew Dynamic Security's referring-domain base to 430 domains and organic traffic by 79% through a disciplined outreach and niche-edit program.",
  },
  {
    title: "Protected a market-leading local position",
    detail:
      "Maintained Serenity Plano's 66% share of US organic traffic while steadily expanding keyword coverage, prioritizing stability over volatile growth.",
  },
];

export const contact = {
  email: "moizhasnain47@gmail.com",
  phone: "0320-4060398",
  linkedin: "https://www.linkedin.com/in/moiz-hasnain/",
  location: "Township, Lahore, Pakistan",
};
