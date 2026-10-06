import {
  blogs,
  books,
  caseStudies,
  communityHighlights,
  currentBuilds,
  otherProducts,
} from "@/server/data";

/**
 * Authored framing for the home page.
 *
 * Copy, ordering, and selection live here. Facts do not — names, statuses,
 * dates, titles, and slugs are imported from "@/server/data" by the components.
 * See docs/superpowers/specs/2026-10-06-landing-page-design.md.
 */

export const hero = {
  headline: "I work on the parts of AI that don't demo well.",
  subhead:
    "Model access, identity, evaluation, routing, deployment — the layer between a prototype that impresses and a system a bank will run. Senior AI Engineer at AlphaFMC. Founder of ExplainGitHub.",
  bridge:
    "The model is the smallest part of a production AI system. The rest of this page is what that looks like.",
};

export const identity = {
  location: "Varanasi, India",
  email: "connect@shivammaurya.com",
  links: [
    { label: "X", href: "https://x.com/_shivammaurya__" },
    { label: "Medium", href: "https://medium.com/@shivam--maurya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shivam--maurya" },
  ],
};

/**
 * The enterprise case study owns the stack fact. Band 01 renders that array
 * rather than restating it, so the diagram cannot drift from what
 * /work/enterprise-ai already publishes. The list is providers plus one
 * platform, which is why the row is labelled for both.
 */
const enterpriseStudy = caseStudies.find((entry) => entry.slug === "enterprise-ai");
if (!enterpriseStudy) {
  throw new Error(
    'home-data: no caseStudy with slug "enterprise-ai". Band 01 derives its stack from that entry.',
  );
}

export const systems = {
  label: "01 · The systems",
  heading: "The layer between a request and a model.",
  intro:
    "Most of the work is not in the model. It is in everything a request has to pass through before and after it — and every part of that has to hold up when the environment is regulated and the stakes are real.",
  stages: [
    "Application",
    "Identity & access",
    "Model gateway",
    "Routing & admission",
    "Evaluation",
    "Observability",
  ],
  stack: enterpriseStudy.stack,
  flowsTo: [
    { label: "Enterprise AI case study", href: `/work/${enterpriseStudy.slug}` },
    { label: "Research", href: "/research" },
  ],
};

/**
 * The products band, in the order they appear.
 *
 * `key` resolves against data.js and `note` is the only authored field — the
 * line answering "what did this teach me", which is what turns a portfolio
 * grid into a record. Names, statuses, and dates are never retyped here.
 */
export const products = [
  { key: "explaingithub", note: "Repository intelligence. The first product of mine that someone paid for." },
  { key: "repoflicks", note: "Shipped and deployed. Taught me what a launch actually costs after the build." },
  { key: "arya", note: "Multilingual retrieval and speech, delivered across messaging platforms and APIs." },
  { key: "Instant EduDoc", note: "Structured document generation end to end, from model output to a printable file." },
  { key: "reqbeam", note: "Killed in September 2026 to put everything behind ExplainGitHub." },
  { key: "boansel", note: "Killed in September 2026 for the same reason. Payments was a different business than the one I wanted." },
];

function findByKey(key) {
  const study = caseStudies.find((entry) => entry.slug === key);
  if (study) {
    return { name: study.heading, status: study.status, date: study.date, href: `/work/${study.slug}` };
  }

  const build = currentBuilds.find((entry) => entry.slug === key);
  if (build) {
    return { name: build.name, status: build.stage, date: null, href: null };
  }

  const other = otherProducts.find(
    (entry) => entry.name.toLowerCase() === String(key).toLowerCase(),
  );
  if (other) {
    return { name: other.name, status: other.status, date: null, href: null };
  }

  return null;
}

/**
 * Resolves a product key to display fields. Throws rather than returning null
 * so a stale key fails the build loudly instead of silently dropping a row.
 */
export function resolveProduct(key) {
  const resolved = findByKey(key);
  if (!resolved) {
    throw new Error(
      `home-data: product key "${key}" matches no slug in caseStudies or ` +
        `currentBuilds, and no name in otherProducts. Fix the key or remove the row.`,
    );
  }
  return { key, ...resolved };
}

export const argumentsBand = {
  label: "03 · The arguments",
  heading: "Why any of it matters, argued in public.",
  essaySlugs: [
    "agent-tool-policy-needs-a-composition-rule-not-just-labels",
    "before-you-blame-the-model-check-the-eval-sandbox",
    "structured-outputs-need-semantic-invariants-not-just-a-strict-schema",
    "prompt-caching-needs-prefix-discipline-not-just-a-provider-toggle",
    "an-mcp-connection-needs-a-trust-record-not-just-a-server-url",
  ],
  teachingIntro:
    "I have been teaching since before I did this professionally — three years of workshops and live courses across India and Ghana, three books, and sessions on applied AI for people starting out.",
  flowsTo: [
    { label: "All writing", href: "/writing" },
    { label: "Speaking", href: "/sessions" },
    { label: "Books", href: "/ebooks" },
  ],
};

/**
 * Resolves selected slugs against blogs, so a renamed slug fails the build
 * loudly instead of rendering an empty band.
 */
export function resolveEssays() {
  return argumentsBand.essaySlugs.map((slug) => {
    const post = blogs.find((entry) => entry.slug === slug);
    if (!post) {
      throw new Error(
        `home-data: essay slug "${slug}" is not in blogs. Fix the slug or remove it from essaySlugs.`,
      );
    }
    return { slug, title: post.blogHeading, href: `/writing/${post.slug}` };
  });
}

export const teaching = {
  community: communityHighlights.map((entry) => ({ title: entry.title, detail: entry.detail })),
  books: books.map((book) => ({ id: book.id, title: book.bookHeading, href: book.slug })),
};

export const conversation = {
  heading: "Which of those brought you here?",
  intro:
    "Any of the three is a good reason to write. A short note is enough — I answer all of them.",
  openings: [
    { label: "The systems", body: "You are building internal AI and want help with the layer." },
    { label: "The products", body: "You want to know whether I finish what I start." },
    { label: "The arguments", body: "You want to talk about the ideas, or have me teach them." },
  ],
};
