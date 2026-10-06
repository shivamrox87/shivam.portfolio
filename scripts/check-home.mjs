import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HOME_HTML = path.join(ROOT, ".next", "server", "app", "index.html");
const DATA_JS = path.join(ROOT, "src", "server", "data.js");
const HOME_DATA_JS = path.join(ROOT, "src", "app", "home-data.js");
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

/**
 * Decoded page text, for assertions about copy.
 *
 * NOTE: this is decoded HTML, not plain text — tags, React's `<!-- -->`
 * separators, and the inline RSC payload are all still present. Assertions on a
 * string that lives inside one element are fine here. An assertion on text the
 * markup separates (a value and its label in sibling elements) must use
 * homePlainText() instead, or it will fail for a reason that has nothing to do
 * with the page.
 */
function homeText() {
  return decode(homeHtml());
}

/** Decoded page text with tags stripped, for assertions that span elements. */
function homePlainText() {
  return homeText()
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ");
}

/**
 * One section's markup and text, located by the id it is labelled by. Scoping
 * assertions to a section is what stops a test named after a section from
 * passing on an unrelated string elsewhere in the page.
 */
function homeSection(anchorId) {
  const html = homeHtml();
  const at = html.indexOf(`id="${anchorId}"`);
  assert.notEqual(at, -1, `section #${anchorId} is missing from the page`);
  const open = html.lastIndexOf("<section", at);
  const close = html.indexOf("</section>", at);
  const markup = html.slice(open === -1 ? at : open, close === -1 ? undefined : close);
  return { markup, text: decode(markup) };
}

/**
 * Every emitted stylesheet, concatenated. Palette assertions belong here rather
 * than against the HTML: a stylesheet that is still imported puts its colours
 * in this bundle, never in the markup, so an HTML check could not catch it.
 */
function builtCss() {
  assert.ok(existsSync(CSS_DIR), `No built CSS at ${CSS_DIR}. Run \`npx next build\` first.`);
  return readdirSync(CSS_DIR)
    .filter((file) => file.endsWith(".css"))
    .map((file) => readFileSync(path.join(CSS_DIR, file), "utf8"))
    .join("\n");
}

/**
 * One top-level array export from data.js, as source text. Read rather than
 * imported because data.js is ESM using the "@/..." alias and cannot be loaded
 * by plain node.
 */
function exportBlock(name) {
  const src = readFileSync(DATA_JS, "utf8");
  const start = src.indexOf(`export const ${name} = [`);
  assert.notEqual(start, -1, `export "${name}" not found in data.js — this check is stale`);
  const rest = src.slice(start + 1);
  const end = rest.indexOf("\nexport const ");
  const block = end === -1 ? rest : rest.slice(0, end);
  assert.ok(block.length > 0, `export "${name}" parsed as empty in data.js`);
  return block;
}

/** The slugs /work/[slug] can actually render. */
function caseStudySlugs() {
  const slugs = [...exportBlock("caseStudies").matchAll(/^\s*slug:\s*"([^"]+)"/gm)].map((m) => m[1]);
  assert.ok(slugs.length > 0, "no slugs parsed out of the caseStudies block");
  return new Set(slugs);
}

/** Stack values the enterprise-ai case study declares. Used to detect re-typing. */
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

/** Research-area titles, used to detect re-typing. */
function researchAreaTitles() {
  const titles = [...exportBlock("researchAreas").matchAll(/^\s*title:\s*"([^"]+)"/gm)].map((m) => m[1]);
  assert.ok(titles.length > 0, "no titles parsed out of the researchAreas block");
  return titles;
}

/** Product names whose own lifecycle status says they were sunset. */
function sunsetNames() {
  const names = new Set();
  for (const block of [exportBlock("currentBuilds"), exportBlock("otherProducts")]) {
    for (const entry of block.split(/\n  \{/).slice(1)) {
      const name = entry.match(/name:\s*"([^"]+)"/);
      const status = entry.match(/(?:stage|status):\s*"([^"]+)"/);
      if (name && status && status[1].toLowerCase().includes("sunset")) names.add(name[1]);
    }
  }
  assert.ok(names.size > 0, "no sunset products parsed out of data.js — this check is stale");
  return [...names];
}

/** Invariant titles, as declared in data.js. */
function invariantTitles() {
  const titles = [...exportBlock("invariants").matchAll(/title:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(titles.length > 0, "no invariants parsed out of data.js");
  return titles;
}

/** Employers from the employment record. */
function companyNames() {
  const names = [...exportBlock("companiesData").matchAll(/companyName:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(names.length > 0, "no companies parsed out of data.js");
  return names;
}

/** How many essays data.js declares. */
function essayCount() {
  return [...exportBlock("blogs").matchAll(/"?blogHeading"?\s*:/g)].length;
}

test("home page is prerendered rather than dynamic", () => {
  homeHtml();
});

test("the random-shuffle feed is no longer on the home page", () => {
  const text = homeText();
  assert.ok(!text.includes("A NEW ORDER EACH VISIT"), "the retired feed is still rendering on /");
  // Otherwise this passes on a page that rendered nothing at all.
  assert.ok(
    text.includes("founder of ExplainGitHub"),
    "the page rendered no hero, so the absence check proves nothing",
  );
});

test("every /work link on the home page points at a slug that exists", () => {
  const html = homeHtml();
  const slugs = caseStudySlugs();
  const hrefs = [...html.matchAll(/href="\/work\/([^"]+)"/g)].map((m) => m[1]);
  assert.ok(hrefs.length > 0, "no /work links found on the page — this check would pass on nothing");
  const missing = [...new Set(hrefs.filter((href) => !slugs.has(href)))];
  assert.deepEqual(missing, [], `home links to case studies that do not exist: ${missing.join(", ")}`);
});

test("the hero opens with what was killed", () => {
  const { text } = homeSection("hero-headline");
  assert.ok(/are dead\./.test(text), "the hero does not open with the kill statement");
  // The struck names are the whole point of the opening, so assert they are on
  // the page AND carrying the class that does the striking.
  for (const name of sunsetNames()) {
    assert.ok(text.includes(name), `the hero does not name ${name}, which data.js marks sunset`);
  }
  assert.ok(homeSection("hero-headline").markup.includes("struck"), "the names are not struck through");
  assert.ok(text.includes("ExplainGitHub"), "the hero does not say what is still running");
});

test("the services list reports every product the data says was sunset", () => {
  const { markup, text } = homeSection("services-heading");
  const live = (markup.match(/led-live/g) ?? []).length;
  const dead = (markup.match(/led-dead/g) ?? []).length;
  assert.ok(live > 0 && dead > 0, `the services list shows ${live} running and ${dead} stopped lamps, expected both`);
  for (const name of sunsetNames()) {
    assert.ok(text.includes(name), `the services list does not report ${name}, which data.js marks sunset`);
  }
});

test("the readouts band derives its counts rather than hardcoding them", () => {
  // The value and its label sit in sibling elements, so this needs tag-stripped
  // text rather than homeText().
  const text = homePlainText();
  assert.ok(
    text.includes(`${essayCount()} Runbooks published`),
    `the essay count on the page does not match the ${essayCount()} entries in data.js`,
  );
  assert.ok(
    text.includes(`${sunsetNames().length} Services decommissioned`),
    `the decommissioned count does not match the ${sunsetNames().length} sunset entries in data.js`,
  );
  assert.ok(text.includes("4–6 weeks → hours"), "the document-agent turnaround number is missing");
  assert.ok(text.includes("14,000 rows"), "the data-audit number is missing");
});

test("the runbooks band renders titles read from data.js", () => {
  const { text } = homeSection("runbooks-heading");
  const blogs = exportBlock("blogs");
  const titles = [...blogs.matchAll(/"?blogHeading"?:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(titles.length > 0, "no essay titles parsed out of data.js");
  const rendered = titles.filter((title) => text.includes(title));
  assert.ok(rendered.length >= 3, `runbooks band rendered only ${rendered.length} of the selected titles`);
});

test("the /#writing anchor exists on a real element", () => {
  // Two routes deep-link to /#writing: src/app/writing/[slug]/page.js:51 and :108.
  assert.ok(homeHtml().includes('<section id="writing"'), "the #writing anchor is missing from a section");
});

test("the invariants band renders every invariant from data.js", () => {
  const { text } = homeSection("invariants-heading");
  for (const title of invariantTitles()) {
    assert.ok(text.includes(title), `the invariants band is missing "${title}" from data.js`);
  }
  assert.ok(text.includes("learned in"), "invariants render without where they were learned");
});

test("the history band renders the employment record from data.js", () => {
  const { text } = homeSection("history-heading");
  for (const org of companyNames()) {
    assert.ok(text.includes(org), `the history band is missing ${org} from data.js`);
  }
});

test("facts are not re-typed into home-data.js", () => {
  const homeData = readFileSync(HOME_DATA_JS, "utf8");
  for (const name of enterpriseStack()) {
    assert.ok(!homeData.includes(`"${name}"`), `home-data.js re-types the stack value "${name}"`);
  }
  for (const title of researchAreaTitles()) {
    assert.ok(!homeData.includes(`"${title}"`), `home-data.js re-types the research area "${title}"`);
  }
  for (const title of invariantTitles()) {
    assert.ok(!homeData.includes(`"${title}"`), `home-data.js re-types the invariant "${title}"`);
  }
});

test("the page closes with one way in, scoped to its own section", () => {
  const { markup, text } = homeSection("contact-heading");
  assert.ok(text.includes("What brought you here?"), "the closing heading is missing");
  assert.ok(text.includes("Write to me"), "the contact button is missing");
  const connects = (markup.match(/href="\/connect"/g) ?? []).length;
  assert.equal(connects, 1, `the ticket section has ${connects} /connect links, expected exactly 1`);
  assert.ok(
    /href="mailto:[^"]+"/.test(markup),
    "the ticket section has no email alternative",
  );
});

test("the home page is built on the site palette, not the retired one", () => {
  const css = builtCss();
  assert.ok(!css.includes("#f6f7f4"), "the retired home palette is still in the CSS bundle");
  assert.ok(!css.includes("#658665"), "the retired home palette is still in the CSS bundle");
  assert.ok(!css.includes("#fafaf8"), "the retired fieldHeader background (#fafaf8) is still in the CSS bundle");
  assert.ok(!css.includes("#e4e8e1"), "the retired fieldHeader border (#e4e8e1) is still in the CSS bundle");
  assert.ok(css.includes("fieldHeader"), "the home header variant was dropped instead of moved");
});
