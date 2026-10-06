import { caseStudies } from "@/server/data";

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
