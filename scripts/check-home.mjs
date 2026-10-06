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

/**
 * The stack values the enterprise-ai case study declares. Read from source for
 * the same reason caseStudySlugs() is: data.js is ESM using the "@/..." alias
 * and cannot be imported by plain node.
 */
function enterpriseStack() {
  const src = readFileSync(DATA_JS, "utf8");
  const start = src.indexOf('slug: "enterprise-ai"');
  assert.notEqual(start, -1, "enterprise-ai entry not found in data.js — this check is stale");
  const match = src.slice(start).match(/stack:\s*\[([^\]]*)\]/);
  assert.ok(match, "no stack array found on the enterprise-ai entry in data.js");
  const values = [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(values.length > 0, "enterprise-ai stack parsed as empty in data.js");
  return values;
}

/** Every research-area title declared in data.js. */
function researchAreaTitles() {
  const src = readFileSync(DATA_JS, "utf8");
  const start = src.indexOf("export const researchAreas = [");
  assert.notEqual(start, -1, "researchAreas export not found in data.js — this check is stale");
  const rest = src.slice(start + 1);
  const end = rest.indexOf("\nexport const ");
  const block = end === -1 ? rest : rest.slice(0, end);
  const titles = [...block.matchAll(/^\s*title:\s*"([^"]+)"/gm)].map((m) => m[1]);
  assert.ok(titles.length > 0, "no titles parsed out of the researchAreas block");
  return titles;
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

test("band 01 renders the layer and its entries", () => {
  const text = homeText();
  assert.ok(text.includes("The layer between a request and a model."), "band 01 heading is missing");
  assert.ok(text.includes("Routing & admission"), "the layer diagram is missing a stage");
  // Compare against the values data.js actually declares, so a change there
  // that the page does not follow fails the build.
  for (const title of researchAreaTitles()) {
    assert.ok(text.includes(title), `band 01 is missing the research area "${title}" from data.js`);
  }
  for (const name of enterpriseStack()) {
    assert.ok(text.includes(name), `band 01 is missing the stack value "${name}" from data.js`);
  }
});

test("facts are not re-typed into home-data.js", () => {
  const homeData = readFileSync(path.join(ROOT, "src", "app", "home-data.js"), "utf8");
  for (const name of enterpriseStack()) {
    assert.ok(
      !homeData.includes(`"${name}"`),
      `home-data.js re-types the stack value "${name}" from data.js instead of deriving it`,
    );
  }
  for (const title of researchAreaTitles()) {
    assert.ok(
      !homeData.includes(`"${title}"`),
      `home-data.js re-types the research area "${title}" from data.js instead of deriving it`,
    );
  }
});

test("band 02 lists the products and reports the sunsets", () => {
  const text = homeText();
  assert.ok(text.includes("02 · The products"), "band 02 label is missing");
  for (const name of ["ExplainGitHub", "RepoFlicks", "Arya", "Instant EduDoc", "ReqBeam", "Boansel"]) {
    assert.ok(text.includes(name), `band 02 is missing ${name}`);
  }
  assert.ok(text.includes("Sunset"), "band 02 does not report the sunset products");
});

test("band 02 does not link to products that have no case study", () => {
  const html = homeHtml();
  // boansel and Instant EduDoc exist in data.js but not in caseStudies, so
  // /work/boansel would 404. The link-integrity test above would also catch
  // this, but this names the specific regression.
  assert.ok(!html.includes('href="/work/boansel"'), "band 02 links to a nonexistent case study");
});

test("band 03 renders essay titles and the teaching record", () => {
  const text = homeText();
  assert.ok(text.includes("03 · The arguments"), "band 03 label is missing");
  assert.ok(
    text.includes("Agent Tool Policy Needs a Composition Rule, Not Just Labels"),
    "band 03 is not rendering essay titles from blogs",
  );
  assert.ok(text.includes("Programming With Maurya"), "band 03 is missing the teaching record");
  // Two routes deep-link to /#writing: src/app/writing/[slug]/page.js:51 and
  // :108. The page that used to define that anchor was retired in Task 2, so
  // without this the links resolve to / with nothing to scroll to.
  assert.ok(
    homeHtml().includes('id="writing"'),
    "the /#writing anchor is missing, so the two links in writing/[slug] have no target",
  );
});

test("the page closes with exactly one call to action", () => {
  const text = homeText();
  const html = homeHtml();
  assert.ok(text.includes("Which of those brought you here?"), "the closing heading is missing");
  assert.ok(html.includes('href="/connect"'), "the call to action does not link to /connect");
  assert.ok(
    text.includes("connect@shivammaurya.com"),
    "the email alternative is missing from the call to action",
  );
});
