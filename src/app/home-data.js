import { blogs, caseStudies, companiesData, currentBuilds, otherProducts } from "@/server/data";

/**
 * Framing for the console home page.
 *
 * The site presents itself as the operations console for a service, because the
 * person it describes builds production systems for a living. Copy, ordering,
 * and selection live here. Facts do not — names, statuses, dates, titles, and
 * slugs are read out of "@/server/data".
 *
 * See docs/superpowers/specs/2026-10-06-landing-page-design.md for the design
 * this replaces, and portfolio-content.md for the source-of-truth content.
 */

export const service = {
  version: "2026.10",
  region: "varanasi, in",
  status: "OPERATIONAL",
  onlineSince: "2020",
  headline: "I work on the parts of AI that don't demo well.",
  subhead:
    "Model access, identity, evaluation, routing, deployment — the layer between a prototype that impresses and a system a bank will run. Senior AI Engineer at AlphaFMC. Founder of ExplainGitHub.",
  note: "The model is the smallest part of a production AI system. The rest of this console is what that looks like.",
  email: "connect@shivammaurya.com",
  links: [
    { label: "x", href: "https://x.com/_shivammaurya__" },
    { label: "medium", href: "https://medium.com/@shivam--maurya" },
    { label: "linkedin", href: "https://www.linkedin.com/in/shivam--maurya" },
  ],
};

function isSunset(entry) {
  return String(entry.status ?? entry.stage ?? "")
    .toLowerCase()
    .includes("sunset");
}

/**
 * Decommissioned services, derived from the two arrays that carry a lifecycle
 * status. Boansel appears in both, so entries are de-duplicated by name rather
 * than listed by hand — a hand-written list is what let the old site report a
 * status that no longer matched its own data.
 */
export const decommissioned = [
  ...currentBuilds
    .filter(isSunset)
    .map((entry) => ({ name: entry.name, status: entry.stage, note: entry.summary ?? null })),
  ...otherProducts
    .filter(isSunset)
    .map((entry) => ({ name: entry.name, status: entry.status, note: entry.lesson ?? null })),
]
  .filter((entry, index, all) => all.findIndex((other) => other.name === entry.name) === index)
  .map((entry) => ({ ...entry, decommissionedOn: "2026-09" }));

/** Services currently running, including the day job, which is not a product. */
export const operational = [
  {
    name: "AI product and platform delivery",
    status: "day job",
    note: "Internal AI products and the shared platform beneath them at AlphaFMC. Model gateways, identity and access, evaluation, backend services, cloud delivery.",
    href: "/work/enterprise-ai",
  },
  ...currentBuilds
    .filter((entry) => !isSunset(entry))
    .map((entry) => ({
      name: entry.name,
      status: entry.stage,
      note: entry.summary ?? null,
      href: caseStudies.some((study) => study.slug === entry.slug) ? `/work/${entry.slug}` : null,
    })),
];

/** Shelved directions — proposed and never promoted. */
export const proposed = otherProducts
  .filter((entry) => !isSunset(entry) && String(entry.status).toLowerCase().includes("exploration"))
  .map((entry) => entry.name);

/**
 * The numbers band, in SLO-strip form. Counts that the data can answer are
 * computed; the rest are authored, and every one is defensible out loud.
 */
export const metrics = [
  { value: "4–6 weeks → hours", label: "Document turnaround on the agent I built at work" },
  { value: "14,000 rows", label: "Question bank audited before any generation work began" },
  { value: "~3%", label: "Of those rows flagged as unusable before they could contaminate output" },
  { value: String(blogs.length), label: "Runbooks published, most of them one thesis each" },
  { value: "60+", label: "Participants in the AI workshop I ran in 2023" },
  { value: String(decommissioned.length), label: "Services decommissioned on purpose" },
];

/**
 * Selected runbooks. The essays are already written as runbooks — "a model
 * gateway needs an admission policy" is a runbook title, not a blog title —
 * so the console renders them as what they already are.
 */
export const runbookSlugs = [
  "agent-tool-policy-needs-a-composition-rule-not-just-labels",
  "before-you-blame-the-model-check-the-eval-sandbox",
  "structured-outputs-need-semantic-invariants-not-just-a-strict-schema",
  "prompt-caching-needs-prefix-discipline-not-just-a-provider-toggle",
  "an-mcp-connection-needs-a-trust-record-not-just-a-server-url",
];

export function runbooks() {
  return runbookSlugs.map((slug) => {
    const post = blogs.find((entry) => entry.slug === slug);
    if (!post) {
      throw new Error(
        `home-data: runbook slug "${slug}" is not in blogs. Fix the slug or remove it from runbookSlugs.`,
      );
    }
    return { slug, title: post.blogHeading, href: `/writing/${post.slug}`, date: post.postedOn };
  });
}

/** Changelog, derived from the employment record. */
export const changelog = companiesData.map((entry) => ({
  id: entry.id,
  role: entry.position,
  org: entry.companyName,
  years: entry.activeYears,
}));

export const ticket = {
  label: "Open a ticket",
  heading: "What brought you here?",
  intro:
    "Any of these is a good reason to write. A short note is enough, and I answer all of them.",
  kinds: [
    { label: "the systems", body: "You are building internal AI and want help with the layer." },
    { label: "the products", body: "You want to know whether I finish what I start." },
    { label: "the runbooks", body: "You want to argue about the ideas, or have me teach them." },
  ],
};
