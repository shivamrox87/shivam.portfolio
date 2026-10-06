import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HOME_HTML = path.join(ROOT, ".next", "server", "app", "index.html");
const DATA_JS = path.join(ROOT, "src", "server", "data.js");
const CSS_DIR = path.join(ROOT, ".next", "static", "css");

/**
 * Next prerenders a static route to `.next/server/app/<route>.html`, and the
 * index route to `index.html`. A dynamic route produces only `page.js`, so a
 * missing index.html means either the build has not run or `/` is still
 * force-dynamic. Both are failures here.
 */
function homeHtml() {
  assert.ok(
    existsSync(HOME_HTML),
    `No prerendered HTML at ${HOME_HTML}. Run \`npx next build\` first. ` +
      `A missing file here also means / is still dynamic rather than static.`,
  );
  return readFileSync(HOME_HTML, "utf8");
}

/**
 * React escapes text during SSR — an apostrophe becomes &#x27; rather than
 * staying literal. Assertions about copy run against decoded text so they pin
 * the words rather than React's escaping choices. Ampersand is decoded last so
 * a literal "&amp;" in the source does not decode twice.
 */
function decode(html) {
  return html
    .replace(/&#x27;|&#39;|&apos;/g, "'")
    .replace(/&quot;|&#34;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");
}

/** Decoded page text, for assertions about copy. */
function homeText() {
  return decode(homeHtml());
}

/**
 * Every emitted stylesheet, concatenated. Palette assertions belong here rather
 * than against the HTML: a stylesheet that is still imported puts its colours
 * in this bundle, never in the markup, so an HTML check could not catch it.
 */
function builtCss() {
  assert.ok(
    existsSync(CSS_DIR),
    `No built CSS at ${CSS_DIR}. Run \`npx next build\` first.`,
  );
  return readdirSync(CSS_DIR)
    .filter((file) => file.endsWith(".css"))
    .map((file) => readFileSync(path.join(CSS_DIR, file), "utf8"))
    .join("\n");
}

/**
 * The slugs /work/[slug] can actually render. Read from source because data.js
 * is ESM using the "@/..." alias and cannot be imported by plain node.
 */
function caseStudySlugs() {
  const src = readFileSync(DATA_JS, "utf8");
  const start = src.indexOf("export const caseStudies = [");
  assert.notEqual(start, -1, "caseStudies export not found in data.js — this check is stale");
  const rest = src.slice(start + 1);
  const end = rest.indexOf("\nexport const ");
  const block = end === -1 ? rest : rest.slice(0, end);
  const slugs = [...block.matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
  assert.ok(slugs.length > 0, "no slugs parsed out of the caseStudies block");
  return new Set(slugs);
}

test("home page is prerendered rather than dynamic", () => {
  homeHtml();
});

test("every /work link on the home page points at a slug that exists", () => {
  const html = homeHtml();
  const slugs = caseStudySlugs();
  const hrefs = [...html.matchAll(/href="\/work\/([^"]+)"/g)].map((m) => m[1]);
  const missing = [...new Set(hrefs.filter((href) => !slugs.has(href)))];
  assert.deepEqual(
    missing,
    [],
    `home links to case studies that do not exist: ${missing.join(", ")}`,
  );
});

test("the random-shuffle feed is no longer on the home page", () => {
  const html = homeHtml();
  // The string the retired feed rendered above its stream. Its presence means
  // FeedHome is still routed, which is what this task removes.
  assert.ok(
    !html.includes("A NEW ORDER EACH VISIT"),
    "the retired feed is still rendering on /",
  );
});

test("the hero states the thesis and the bridge line", () => {
  const text = homeText();
  assert.ok(
    text.includes("I work on the parts of AI that don't demo well."),
    "hero headline is missing from the page",
  );
  assert.ok(
    text.includes("The model is the smallest part of a production AI system."),
    "the bridge line that states the thesis is missing from the page",
  );
});
