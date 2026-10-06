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
 * The rendered markup only — script blocks stripped. The page ships React's
 * serialized flight payload in inline <script> tags, so a copy string appears
 * twice in the raw HTML: once rendered, once in that payload. Counts (unlike
 * presence checks) must run against the rendered markup, or every "exactly
 * one" assertion would see the payload's duplicate.
 */
function homeMarkup() {
  return homeHtml().replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
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

/**
 * Whether a data.js value is re-typed verbatim (single- or double-quoted) in
 * the given source. Matches both quote styles so a re-typing cannot evade the
 * guard by switching quotes.
 */
function quotedInSource(source, value) {
  const escaped = value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  return new RegExp(`["']${escaped}["']`).test(source);
}

test("home page is prerendered rather than dynamic", () => {
  homeHtml();
});

test("every /work link on the home page points at a slug that exists", () => {
  const html = homeHtml();
  const slugs = caseStudySlugs();
  const hrefs = [...html.matchAll(/href="\/work\/([^"]+)"/g)].map((m) => m[1]);
  // Without this, the test passes vacuously if the page emits no /work links.
  assert.ok(hrefs.length > 0, "no /work links found on the page — this check would pass on nothing");
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
  // The absence above would also hold on a blank document, so pin that the real
  // page rendered.
  assert.ok(
    homeText().includes("I work on the parts of AI that don't demo well."),
    "the page did not render at all — the feed-absence check would pass on an empty document",
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
  // Band 01 renders authored entries about the components in the diagram, not
  // the researchAreas strings /research already publishes. These two titles are
  // the first and last of those entries.
  assert.ok(
    text.includes("Identity and permission"),
    "band 01 is missing its authored component entries",
  );
  assert.ok(
    text.includes("Deployment and operations"),
    "band 01 is missing its authored component entries",
  );
  // Compare against the values data.js actually declares, so a change there
  // that the page does not follow fails the build.
  for (const name of enterpriseStack()) {
    assert.ok(text.includes(name), `band 01 is missing the stack value "${name}" from data.js`);
  }
});

test("facts are not re-typed into home-data.js", () => {
  const homeData = readFileSync(path.join(ROOT, "src", "app", "home-data.js"), "utf8");
  for (const name of enterpriseStack()) {
    assert.ok(
      !quotedInSource(homeData, name),
      `home-data.js re-types the stack value "${name}" from data.js instead of deriving it`,
    );
  }
  // The research-area titles no longer render on the page, but they must still
  // not be re-typed here — the guard stays as the reason the band reads from
  // its own authored entries, not from /research's strings.
  for (const title of researchAreaTitles()) {
    assert.ok(
      !quotedInSource(homeData, title),
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
  const text = homeText();
  // boansel and Instant EduDoc exist in data.js but not in caseStudies, so
  // /work/boansel or /work/instant-edudoc would 404. The link-integrity test
  // above would also catch a stale slug, but this names the specific
  // regression — and checks the two products, not just boansel.
  const linked = [...html.matchAll(/href="\/work\/([^"]+)"/g)].map((m) => m[1]);
  assert.ok(linked.length > 0, "band 02 rendered no /work links at all — it may be empty");
  for (const slug of linked) {
    assert.ok(
      !/boansel|instant|edudoc|edu-doc/i.test(slug),
      `band 02 links to "${slug}", which has no case study and would 404`,
    );
  }
  // The band actually rendered, so an empty band cannot pass this test.
  assert.ok(text.includes("Boansel"), "band 02 did not render Boansel");
  assert.ok(text.includes("Instant EduDoc"), "band 02 did not render Instant EduDoc");
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
  // without this the links resolve to / with nothing to scroll to. Pin the
  // element, not the bare substring, so "id=writing" elsewhere cannot satisfy it.
  assert.ok(
    homeHtml().includes('<section id="writing"'),
    "the /#writing anchor is missing, so the two links in writing/[slug] have no target",
  );
});

test("the page closes with exactly one call to action", () => {
  const html = homeMarkup();
  const text = homeText();
  assert.ok(text.includes("Which of those brought you here?"), "the closing heading is missing");

  // Slice the closing section, so the header's /connect nav link and the
  // footer's mailto cannot stand in for the section's own CTA. The section is
  // labelled by conversation-heading and is not nested, so its first
  // </section> closes it.
  const start = html.indexOf('id="conversation-heading"');
  assert.notEqual(start, -1, "the closing section (conversation-heading) is missing");
  const end = html.indexOf("</section>", start);
  const section = end === -1 ? html.slice(start) : html.slice(start, end);

  // The CTA button itself, not just any /connect link on the page.
  assert.ok(
    section.includes('href="/connect"'),
    "the closing section has no /connect call to action — a header or footer link is not enough",
  );

  // Exactly one door: a duplicated "Start a conversation" would fail here.
  const ctas = html.match(/Start a conversation/g) ?? [];
  assert.equal(
    ctas.length,
    1,
    `expected exactly one "Start a conversation" link, found ${ctas.length}`,
  );

  // The email alternative, scoped to the closing section.
  assert.ok(
    section.includes("connect@shivammaurya.com"),
    "the email alternative is missing from the closing section",
  );
});

test("the home page is built on the site palette, not the retired one", () => {
  const css = builtCss();
  // #f6f7f4 and #658665 belonged to home.css, which is retired. These are
  // asserted against the emitted stylesheets, not the HTML: a stylesheet
  // that is still imported lands its colours here and never in the markup.
  assert.ok(!css.includes("#f6f7f4"), "the retired home palette is still in the CSS bundle");
  assert.ok(!css.includes("#658665"), "the retired home palette is still in the CSS bundle");
  // #fafaf8 and #e4e8e1 are the two colours the old .fieldHeader actually wore,
  // so they are the most likely to reappear if that rule is ever restored.
  assert.ok(!css.includes("#fafaf8"), "the retired fieldHeader background (#fafaf8) is still in the CSS bundle");
  assert.ok(!css.includes("#e4e8e1"), "the retired fieldHeader border (#e4e8e1) is still in the CSS bundle");
  // The header's home variant must survive on site tokens.
  assert.ok(css.includes("fieldHeader"), "the home header variant was dropped instead of moved");
});
