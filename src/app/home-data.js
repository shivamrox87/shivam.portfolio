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
