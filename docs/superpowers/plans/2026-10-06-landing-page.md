# Landing Page Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the homepage of shivammaurya.com with a statically-rendered, argument-led page that starts a conversation, serving three readers from one scroll.

**Architecture:** A thesis hero, then the working record partitioned into three bands — systems (enterprise platform work), products (shipped and sunset), arguments (essays and teaching) — then a single call to action framed as the sorting question. The page composes five small server components. Facts are imported from `src/server/data.js`; only framing is authored, in `src/app/home-data.js`. `/` becomes statically prerendered, removing the per-visit random shuffle.

**Tech Stack:** Next.js 15 App Router, React 19, Tailwind CSS 3, plain JavaScript (no TypeScript). Node 26's built-in `node:test` for verification — no test framework is added.

**Spec:** `docs/superpowers/specs/2026-10-06-landing-page-design.md`

## Global Constraints

- No new npm dependencies. The repo has no test runner and this plan adds none; verification uses `node:test`, built into Node.
- No TypeScript. All files are `.js` or `.jsx`, matching the repo.
- All commits go on the branch `home-thesis-redesign`, which exists before Task 1 begins. **Never commit to `main`.**
- **Never `git add -A` or `git add .`.** Commit only the files the step names. The working tree carries unrelated uncommitted work from before this plan started; a blanket `git add` would sweep it into these commits.
- The page must render with JavaScript disabled. All five home components are server components — no `"use client"`, no `useState`, no `useEffect`.
- Colour values come only from the existing site palette: paper `#fbfaf7`, ink `#171714`, body `#4f4e48`, muted `#68675f`, line `#d8d5cc`, accent `#b84a2b`. No new palette. `#4f4e48` is included because it is what `.body-copy` resolves to and what every existing sub-page uses for body text — it is de-facto palette, not an invention of this page.
- Prefer the existing component classes from `globals.css` (`.site-shell`, `.page-section`, `.eyebrow`, `.display-title`, `.section-title`, `.body-copy`, `.text-link`) over re-deriving the same styles in Tailwind utilities.
- Facts (names, statuses, dates, titles, slugs, stacks) are imported from `src/server/data.js`. They are never re-typed into `home-data.js`. `home-data.js` holds only copy, ordering, and selection.
- Copy rules: the hero headline and bridge sentence are exact strings — see Task 3. Product statuses render exactly as `data.js` spells them.
- `src/app/FeedHome.js`, `src/app/feed-data.js`, and `src/app/home.css` are taken off the route but **left on disk**. Do not delete them in this plan.
- Sub-pages (`/work`, `/about`, `/writing`, `/sessions`, `/research`, `/building`) are linked, never modified.

## Review Focus

Five failure modes the spec implies but whose inputs a happy-path build will not exercise. Each is paired with the task that owns it and the check that pins it.

1. **A product row whose key matches nothing in `data.js`.** A reasonable expectation is a loud failure, not a silently missing row. Owned by Task 5; enforced by a module-scope throw that fails the build.
2. **An essay slug in `home-data.js` that no longer exists in `blogs`.** A reasonable expectation is the page never renders an empty band. Owned by Task 6; enforced by a module-scope throw.
3. **A `/work/...` link to a slug absent from `caseStudies`.** `boansel` is in `currentBuilds` and `otherProducts` but *not* in `caseStudies`, so it 404s today. Owned by Task 1; enforced by the link-integrity test on built HTML.
4. **A long essay title or product note.** Titles run to 60+ characters. A reasonable expectation is wrapping, never horizontal overflow. Owned by Task 8; checked at 375px.
5. **JavaScript disabled.** A reasonable expectation is that everything except the `/connect` form still renders and every link works. Owned by Task 8; checked in a browser with JS off.

---

## File Structure

**Created**

| File | Responsibility |
|---|---|
| `scripts/check-home.mjs` | Post-build assertions against the prerendered home HTML. The only automated check in this plan. |
| `src/app/home-data.js` | Authored framing: hero copy, band headings, product notes, selected essay slugs. Resolves products against `data.js` and throws on an unresolvable key. |
| `src/components/HomeComponent/HomeHero.js` | Headline, subhead, bridge line, identity strip. |
| `src/components/HomeComponent/SystemLayer.js` | Band 01 — the layer diagram plus entries derived from `researchAreas`. |
| `src/components/HomeComponent/ProductRecord.js` | Band 02 — the product table rows. |
| `src/components/HomeComponent/ArgumentLadder.js` | Band 03 — selected essay titles plus the teaching record. |
| `src/components/HomeComponent/StartConversation.js` | The single call to action. |

**Modified**

| File | Change |
|---|---|
| `src/app/page.js` | Reduced to `force-dynamic` removal, shuffle removal, and composition of the five sections. |
| `src/app/globals.css` | Gains the `.fieldHeader` component class, moved out of `home.css`. |
| `src/components/Header.js` | Home variant restyled onto site tokens; no longer depends on `home.css`. |
| `package.json` | Gains a `check:home` script. |

**Retired from the route, left on disk:** `src/app/FeedHome.js`, `src/app/feed-data.js`, `src/app/home.css`.

---

## Task 1: Branch and the build-output check harness

Establishes the only way to verify this work without adding a test framework: assert against the HTML Next actually prerenders. `data.js` is ESM with a `@/` alias, so plain Node cannot import it — the check reads it as text instead.

**Files:**
- Create: `scripts/check-home.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: nothing.
- Produces: `scripts/check-home.mjs`, run via `npm run check:home`. Later tasks append `test(...)` blocks to it.

- [ ] **Step 1: Verify you are on the feature branch**

The branch already exists — it was created before this task, carrying the pre-existing uncommitted work across intact. Do not create it and do not switch to it from another branch.

```bash
cd /Users/shivam-mac/shivam.portfolio
git rev-parse --abbrev-ref HEAD
git status --short
```

Expected: the branch name is `home-thesis-redesign`, and `git status` lists modified and untracked files that were already there when you started. Those files belong to earlier unrelated work. Leave them alone — do not stage, commit, revert, or clean them.

If the branch name reports `main`, **stop and report** rather than creating the branch yourself. Committing to `main` is forbidden by the Global Constraints.

- [ ] **Step 2: Write the check harness**

Create `scripts/check-home.mjs`:

```js
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
```

- [ ] **Step 3: Add the npm script**

In `package.json`, add to `"scripts"` after `"lint"`:

```json
"check:home": "node --test scripts/check-home.mjs"
```

- [ ] **Step 4: Run the check to verify it fails**

```bash
cd /Users/shivam-mac/shivam.portfolio
npm run check:home
```

Expected: FAIL. Both tests fail with `No prerendered HTML at .../index.html`, because `/` is still `force-dynamic` and no `index.html` is emitted. This is the red state proving the harness detects the thing it claims to.

- [ ] **Step 5: Commit**

```bash
git add scripts/check-home.mjs package.json
git commit -m "Add post-build check harness for the home page"
```

---

## Task 2: Make `/` static and take the feed off the route

Separating this from the content work keeps one reviewable change: the render mode flips and the old page disappears. The layout is still the old feed markup at the end of this task — Task 3 replaces it. The point is that the harness goes green on the *prerendering* assertion here, which proves the mode change independently of the redesign.

**Files:**
- Modify: `src/app/page.js` (replace the whole file)
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: the harness from Task 1.
- Produces: `/` renders statically. `src/app/page.js` exports a default component that Task 3 onwards adds sections to.

- [ ] **Step 1: Add the regression test for the removed feed**

Append to `scripts/check-home.mjs`:

```js
test("the random-shuffle feed is no longer on the home page", () => {
  const html = homeHtml();
  // The string the retired feed rendered above its stream. Its presence means
  // FeedHome is still routed, which is what this task removes.
  assert.ok(
    !html.includes("A NEW ORDER EACH VISIT"),
    "the retired feed is still rendering on /",
  );
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL on all three tests — the first two still fail because no `index.html` exists yet, and the new one fails for the same reason. It cannot pass until the page prerenders.

- [ ] **Step 3: Replace `src/app/page.js`**

Replace the entire file with:

```jsx
export default function Home() {
  return (
    <main id="main-content" className="site-shell page-section">
      <p className="eyebrow">Home</p>
      <h1 className="display-title mt-4">Placeholder — sections land in Tasks 3 to 7.</h1>
    </main>
  );
}
```

This removes `export const dynamic = "force-dynamic"`, the `feed` import, the `Math.random()` shuffle, and the `FeedHome` import. The placeholder keeps the page rendering while the harness goes green on the mode change.

- [ ] **Step 4: Build and run the check**

```bash
npx next build
npm run check:home
```

Expected: build succeeds. `/` now appears in the route table as `○ (Static)`, not `ƒ (Dynamic)`. `npm run check:home` PASSES all three tests.

If `.next/server/app/index.html` is still missing after the build, inspect the route table before changing anything: a route ending in a trailing-slash redirect or an `output` config in `next.config.js` would change the emitted path. Update `HOME_HTML` in the script to the actual path and note why in a comment.

- [ ] **Step 5: Commit**

```bash
git add src/app/page.js scripts/check-home.mjs
git commit -m "Render the home page statically and retire the shuffled feed route"
```

---

## Task 3: The hero

The page's thesis. The headline states a position; the bridge line states the argument outright. Both are exact strings from the spec and appear nowhere else in the codebase.

**Files:**
- Create: `src/app/home-data.js`
- Create: `src/components/HomeComponent/HomeHero.js`
- Modify: `src/app/page.js`
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: nothing from earlier tasks.
- Produces: `src/app/home-data.js` exporting `hero` (`{ headline, subhead, bridge }`) and `identity` (`{ location, email, links: [{ label, href }] }`). Later tasks add further named exports to this same file.

- [ ] **Step 1: Write the failing test**

Append to `scripts/check-home.mjs`:

```js
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
```

Assertions about copy go through `homeText()`, never `homeHtml()`. React rewrites an apostrophe to `&#x27;` during SSR — verified against this repo's own build output — so matching raw markup would pin React's escaping rather than the words, and would break on any copy containing a `&`. Assertions about structure and links keep using `homeHtml()`, because that is where attributes live.

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL — "hero headline is missing from the page".

- [ ] **Step 3: Create `src/app/home-data.js`**

```js
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
```

- [ ] **Step 4: Create `src/components/HomeComponent/HomeHero.js`**

```jsx
import Link from "next/link";
import { hero, identity } from "@/app/home-data";

export default function HomeHero() {
  return (
    <section className="site-shell page-section" aria-labelledby="hero-headline">
      <h1 id="hero-headline" className="display-title max-w-[880px]">
        {hero.headline}
      </h1>

      <p className="mt-8 max-w-[680px] body-copy">{hero.subhead}</p>

      <p className="mt-10 max-w-[680px] border-l-2 border-[#b84a2b] pl-5 font-serif text-xl leading-8 text-[#171714] md:text-2xl">
        {hero.bridge}
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#d8d5cc] pt-6 text-sm text-[#68675f]">
        <span>{identity.location}</span>
        {identity.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#171714]"
          >
            {link.label}
          </a>
        ))}
        <Link href="/connect" className="hover:text-[#171714]">
          Contact
        </Link>
      </div>
    </section>
  );
}
```

The `h1` uses the existing `.display-title` component class rather than re-deriving a serif scale in utilities, per the Global Constraints. `/sessions` already renders a 41-character display title at this scale, so a 46-character thesis headline fits the established pattern; `max-w-[880px]` keeps it to a small number of lines.

The bridge line is set in serif with an accent rule rather than as body copy — it is the thesis, and it needs to read as a statement rather than as a continuation of the subhead.

- [ ] **Step 5: Wire it into the page**

Replace `src/app/page.js`:

```jsx
import HomeHero from "@/components/HomeComponent/HomeHero";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
    </main>
  );
}
```

- [ ] **Step 6: Build and run the check**

```bash
npx next build && npm run check:home
```

Expected: build succeeds, all four tests PASS.

- [ ] **Step 7: Commit**

```bash
git add src/app/home-data.js src/components/HomeComponent/HomeHero.js src/app/page.js scripts/check-home.mjs
git commit -m "Add the thesis hero to the home page"
```

---

## Task 4: Band 01 — the systems

The reader this serves is deciding whether this person builds the layer they cannot. The diagram is real work, not decoration — it replaces the fabricated CSS mockups in the retired feed.

**Files:**
- Modify: `src/app/home-data.js` (add `systems`)
- Create: `src/components/HomeComponent/SystemLayer.js`
- Modify: `src/app/page.js`
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: `hero`/`identity` from `home-data.js`.
- Produces: `systems` exported from `home-data.js`, shape `{ label, heading, intro, providers: string[], flowsTo: [{ label, href }] }`. Entries are not authored — the component maps `researchAreas` from `data.js`.

- [ ] **Step 1: Write the failing test**

Append to `scripts/check-home.mjs`:

```js
test("band 01 renders the layer and its entries", () => {
  const text = homeText();
  assert.ok(text.includes("The layer between a request and a model."), "band 01 heading is missing");
  assert.ok(text.includes("Routing & admission"), "the layer diagram is missing a stage");
  // Entries are derived from researchAreas, so this also proves derivation,
  // not just that some copy was pasted in.
  assert.ok(
    text.includes("Model gateways and provider behaviour"),
    "band 01 entries are not being derived from researchAreas",
  );
  // The stack is derived from the enterprise-ai case study, not restated in
  // home-data, so a value only that entry carries proves the derivation.
  assert.ok(
    text.includes("AWS Bedrock"),
    "band 01 stack is not being derived from the enterprise-ai case study",
  );
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL — "band 01 heading is missing".

- [ ] **Step 3: Add the `@/server/data` import and `systems` to `home-data.js`**

`home-data.js` gains its first data import here, so this task establishes the import line that Tasks 5 and 6 extend. Add it at the very top of the file, above `export const hero`:

```js
import { caseStudies } from "@/server/data";
```

Then append:

```js
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
    { label: "Enterprise AI case study", href: "/work/enterprise-ai" },
    { label: "Research", href: "/research" },
  ],
};
```

- [ ] **Step 4: Create `src/components/HomeComponent/SystemLayer.js`**

```jsx
import Link from "next/link";
import { researchAreas } from "@/server/data";
import { systems } from "@/app/home-data";

function Arrow() {
  return (
    <span aria-hidden="true" className="text-[#b84a2b]">
      →
    </span>
  );
}

export default function SystemLayer() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="systems-heading">
      <div className="site-shell page-section">
        <p className="eyebrow">{systems.label}</p>
        <h2 id="systems-heading" className="section-title mt-3 max-w-[760px]">
          {systems.heading}
        </h2>
        <p className="mt-6 max-w-[680px] body-copy">{systems.intro}</p>

        <div
          role="img"
          aria-label={`A request travels from the application through ${systems.stages
            .slice(1)
            .join(", ")} before reaching a model provider.`}
          className="mt-12"
        >
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-3">
            {systems.stages.map((stage, index) => (
              <li key={stage} className="flex items-center gap-3">
                <span className="border border-[#d8d5cc] bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#171714]">
                  {stage}
                </span>
                {index < systems.stages.length - 1 ? <Arrow /> : null}
              </li>
            ))}
          </ol>
          <p className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-[#68675f]">
            <span className="uppercase tracking-[0.14em]">Providers and platforms</span>
            {systems.stack.map((name) => (
              <span key={name} className="border-b border-[#d8d5cc] pb-0.5">
                {name}
              </span>
            ))}
          </p>
        </div>

        <p className="mt-8 max-w-[680px] text-xs leading-6 text-[#68675f]">
          A conceptual public view. Implementation details are scoped to protect confidential
          systems.
        </p>

        <div className="mt-12 border-t border-[#171714]">
          {researchAreas.map((area, index) => (
            <article
              key={area.title}
              className="grid gap-4 border-b border-[#d8d5cc] py-7 sm:grid-cols-[40px_0.42fr_0.58fr] sm:gap-8"
            >
              <span className="text-xs text-[#b84a2b]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="font-serif text-2xl leading-tight">{area.title}</h3>
              <p className="text-sm leading-7 text-[#4f4e48]">{area.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-6">
          {systems.flowsTo.map((link) => (
            <Link key={link.href} href={link.href} className="text-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Wire it into the page**

```jsx
import HomeHero from "@/components/HomeComponent/HomeHero";
import SystemLayer from "@/components/HomeComponent/SystemLayer";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <SystemLayer />
    </main>
  );
}
```

- [ ] **Step 6: Build and run the check**

```bash
npx next build && npm run check:home
```

Expected: build succeeds, all five tests PASS. The link-integrity test now has a real `/work/enterprise-ai` link to validate — confirm it passes, since that proves the harness is exercising actual output.

- [ ] **Step 7: Commit**

```bash
git add src/app/home-data.js src/components/HomeComponent/SystemLayer.js src/app/page.js scripts/check-home.mjs
git commit -m "Add band 01, the systems layer"
```

---

## Task 5: Band 02 — the products

Serves the reader deciding whether this person finishes things. The product notes are the one authored field; names, statuses, and dates are resolved from `data.js`. Two products — Boansel and Instant EduDoc — have no case study, so their rows must render unlinked rather than pointing at a 404.

**Files:**
- Modify: `src/app/home-data.js` (add `products` and `resolveProduct`)
- Create: `src/components/HomeComponent/ProductRecord.js`
- Modify: `src/app/page.js`
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: `systems` from Task 4.
- Produces: `products` exported from `home-data.js` as an ordered array of `{ key, note }`, and `resolveProduct(key)` returning `{ key, name, status, date, href }` where `href` is `null` when no case study exists. The component consumes `resolveProduct`; a later task never needs it directly.

- [ ] **Step 1: Write the failing test**

Append to `scripts/check-home.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL — "band 02 label is missing".

- [ ] **Step 3: Add `products` and `resolveProduct` to `home-data.js`**

Task 4 already put `import { caseStudies } from "@/server/data";` at the top of the file. Extend that line to:

```js
import { caseStudies, currentBuilds, otherProducts } from "@/server/data";
```

Then append:

```js
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
```

- [ ] **Step 4: Create `src/components/HomeComponent/ProductRecord.js`**

```jsx
import Link from "next/link";
import { products, resolveProduct } from "@/app/home-data";

const STATUS_STYLES = {
  sunset: "border-[#b84a2b] text-[#b84a2b]",
  default: "border-[#d8d5cc] text-[#68675f]",
};

function statusStyle(status) {
  return status.toLowerCase().includes("sunset")
    ? STATUS_STYLES.sunset
    : STATUS_STYLES.default;
}

export default function ProductRecord() {
  const rows = products.map((product) => ({ ...resolveProduct(product.key), note: product.note }));

  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="products-heading">
      <div className="site-shell page-section">
        <p className="eyebrow">02 · The products</p>
        <h2 id="products-heading" className="section-title mt-3 max-w-[760px]">
          What the plumbing is for.
        </h2>

        <div className="mt-12 border-t border-[#171714]">
          {rows.map((row) => (
            <article
              key={row.key}
              className="grid gap-3 border-b border-[#d8d5cc] py-7 md:grid-cols-[0.3fr_0.7fr] md:gap-10"
            >
              <div>
                <h3 className="font-serif text-2xl leading-tight">
                  {row.href ? (
                    <Link href={row.href} className="hover:text-[#b84a2b]">
                      {row.name}
                    </Link>
                  ) : (
                    row.name
                  )}
                </h3>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#68675f]">
                  <span
                    className={`border px-2 py-1 uppercase tracking-[0.12em] ${statusStyle(row.status)}`}
                  >
                    {row.status}
                  </span>
                  {row.date ? <span>{row.date}</span> : null}
                </p>
              </div>
              <p className="text-sm leading-7 text-[#4f4e48]">{row.note}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-[680px] text-xs leading-6 text-[#68675f]">
          Also explored and shelved: LaunchRail, Sarkari Samadhan, SageRai, Personal AI Systems Lab,
          and a custom OpenWebUI setup.
        </p>

        <div className="mt-8">
          <Link href="/work" className="text-link">
            All work
          </Link>
        </div>
      </div>
    </section>
  );
}
```

Sunset rows get the accent border; shipped and building rows stay muted. Equal visual weight, different signal — the point is that the sunsets are reported, not that they are hidden.

- [ ] **Step 5: Wire it into the page**

```jsx
import HomeHero from "@/components/HomeComponent/HomeHero";
import SystemLayer from "@/components/HomeComponent/SystemLayer";
import ProductRecord from "@/components/HomeComponent/ProductRecord";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <SystemLayer />
      <ProductRecord />
    </main>
  );
}
```

- [ ] **Step 6: Build and run the check**

```bash
npx next build && npm run check:home
```

Expected: build succeeds, all seven tests PASS.

If the build fails with `home-data: product key "..." matches no slug`, the key is wrong — fix the key against the actual `slug` values in `data.js` rather than weakening the throw. That failure is the guard from Review Focus item 1 working.

- [ ] **Step 7: Commit**

```bash
git add src/app/home-data.js src/components/HomeComponent/ProductRecord.js src/app/page.js scripts/check-home.mjs
git commit -m "Add band 02, the product record"
```

---

## Task 6: Band 03 — the arguments

Serves the reader who decides by conviction. Essay titles are the argument, so they are the design: set large in serif rather than as a dated list.

This band also owns the `#writing` anchor. `src/app/writing/[slug]/page.js:51` ("Back to home") and `:108` ("More writing") both link to `/#writing`, and the page that used to define that target was retired in Task 2. Carrying the id on this section restores both links, since this is the page's writing section. `scroll-mt-20` clears the 64px sticky header so the heading is not hidden underneath it after the jump.

**Files:**
- Modify: `src/app/home-data.js` (add `arguments` and `resolveEssays`)
- Create: `src/components/HomeComponent/ArgumentLadder.js`
- Modify: `src/app/page.js`
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: `resolveProduct` from Task 5.
- Produces: `arguments` exported from `home-data.js` as `{ label, heading, essaySlugs: string[], teachingIntro, flowsTo: [{ label, href }] }`, and `resolveEssays()` returning `[{ slug, title, href }]`.

Slugs must be ones that exist in `blogs`. The spec quotes titles from the live site ("A Model Gateway Needs an Admission Policy…") that are **not** in this repo's `blogs` array — the local dataset's equivalents are used instead.

- [ ] **Step 1: Write the failing test**

Append to `scripts/check-home.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL — "band 03 label is missing".

- [ ] **Step 3: Add `arguments` and `resolveEssays` to `home-data.js`**

Add `blogs`, `books`, `communityHighlights` to the existing `@/server/data` import at the top of the file so it reads:

```js
import {
  blogs,
  books,
  caseStudies,
  communityHighlights,
  currentBuilds,
  otherProducts,
} from "@/server/data";
```

Then append:

```js
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
```

- [ ] **Step 4: Create `src/components/HomeComponent/ArgumentLadder.js`**

```jsx
import Link from "next/link";
import { argumentsBand, resolveEssays, teaching } from "@/app/home-data";

export default function ArgumentLadder() {
  const essays = resolveEssays();

  return (
    <section
      id="writing"
      className="scroll-mt-20 border-t border-[#d8d5cc]"
      aria-labelledby="arguments-heading"
    >
      <div className="site-shell page-section">
        <p className="eyebrow">{argumentsBand.label}</p>
        <h2 id="arguments-heading" className="section-title mt-3 max-w-[760px]">
          {argumentsBand.heading}
        </h2>

        <ol className="mt-12 border-t border-[#171714]">
          {essays.map((essay) => (
            <li key={essay.slug} className="border-b border-[#d8d5cc]">
              <Link href={essay.href} className="group block py-8">
                <h3 className="max-w-[900px] font-serif text-2xl leading-[1.15] tracking-[-0.01em] transition-colors group-hover:text-[#b84a2b] md:text-4xl">
                  {essay.title}
                </h3>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 md:grid-cols-[0.35fr_1fr] md:gap-16">
          <p className="eyebrow">Teaching</p>
          <div>
            <p className="max-w-[640px] body-copy">{argumentsBand.teachingIntro}</p>
            <div className="mt-8 border-t border-[#171714]">
              {teaching.community.map((entry) => (
                <div
                  key={entry.title}
                  className="grid gap-2 border-b border-[#d8d5cc] py-5 sm:grid-cols-[0.36fr_0.64fr] sm:gap-8"
                >
                  <h4 className="font-serif text-xl">{entry.title}</h4>
                  <p className="text-sm leading-7 text-[#4f4e48]">{entry.detail}</p>
                </div>
              ))}
              {teaching.books.map((book) => (
                <div key={book.id} className="border-b border-[#d8d5cc] py-5">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#4f4e48] hover:text-[#b84a2b]"
                  >
                    {book.title} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          {argumentsBand.flowsTo.map((link) => (
            <Link key={link.href} href={link.href} className="text-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Wire it into the page**

```jsx
import HomeHero from "@/components/HomeComponent/HomeHero";
import SystemLayer from "@/components/HomeComponent/SystemLayer";
import ProductRecord from "@/components/HomeComponent/ProductRecord";
import ArgumentLadder from "@/components/HomeComponent/ArgumentLadder";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <SystemLayer />
      <ProductRecord />
      <ArgumentLadder />
    </main>
  );
}
```

- [ ] **Step 6: Build and run the check**

```bash
npx next build && npm run check:home
```

Expected: build succeeds, all eight tests PASS.

If the build fails with `home-data: essay slug "..." is not in blogs`, verify the slug against the actual `slug` values in the `blogs` array before changing anything. That failure is Review Focus item 2 working.

- [ ] **Step 7: Commit**

```bash
git add src/app/home-data.js src/components/HomeComponent/ArgumentLadder.js src/app/page.js scripts/check-home.mjs
git commit -m "Add band 03, the arguments and the teaching record"
```

---

## Task 7: The single door

The only call to action on the page. Its heading is the sorting question, and its three lines exist so the reader knows all three answers are welcome — not to make them pick a lane before they can write.

**Files:**
- Modify: `src/app/home-data.js` (add `conversation`)
- Create: `src/components/HomeComponent/StartConversation.js`
- Modify: `src/app/page.js`
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: `teaching` from Task 6.
- Produces: `conversation` exported from `home-data.js` as `{ heading, intro, openings: [{ label, body }] }`. This is the last section; nothing consumes it.

- [ ] **Step 1: Write the failing test**

Append to `scripts/check-home.mjs`:

```js
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
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL — "the closing heading is missing". Note the `/connect` assertion may already pass, because the hero's identity strip links there. The heading assertion is the meaningful one.

- [ ] **Step 3: Add `conversation` to `home-data.js`**

Append:

```js
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
```

- [ ] **Step 4: Create `src/components/HomeComponent/StartConversation.js`**

```jsx
import Link from "next/link";
import { conversation, identity } from "@/app/home-data";

export default function StartConversation() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="conversation-heading">
      <div className="site-shell page-section">
        <p className="eyebrow">Contact</p>
        <h2 id="conversation-heading" className="display-title mt-3 max-w-[760px]">
          {conversation.heading}
        </h2>
        <p className="mt-8 max-w-[620px] body-copy">{conversation.intro}</p>

        <dl className="mt-12 border-t border-[#171714]">
          {conversation.openings.map((opening) => (
            <div
              key={opening.label}
              className="grid gap-2 border-b border-[#d8d5cc] py-6 sm:grid-cols-[0.32fr_0.68fr] sm:gap-8"
            >
              <dt className="font-serif text-xl">{opening.label}</dt>
              <dd className="text-sm leading-7 text-[#4f4e48]">{opening.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/connect"
            className="inline-flex bg-[#171714] px-6 py-3 text-sm font-semibold text-[#fbfaf7] transition-colors hover:bg-[#b84a2b]"
          >
            Start a conversation
          </Link>
          <a href={`mailto:${identity.email}`} className="text-link">
            or email {identity.email}
          </a>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Wire it into the page**

Replace `src/app/page.js`:

```jsx
import HomeHero from "@/components/HomeComponent/HomeHero";
import SystemLayer from "@/components/HomeComponent/SystemLayer";
import ProductRecord from "@/components/HomeComponent/ProductRecord";
import ArgumentLadder from "@/components/HomeComponent/ArgumentLadder";
import StartConversation from "@/components/HomeComponent/StartConversation";

export default function Home() {
  return (
    <main id="main-content">
      <HomeHero />
      <SystemLayer />
      <ProductRecord />
      <ArgumentLadder />
      <StartConversation />
    </main>
  );
}
```

- [ ] **Step 6: Build and run the check**

```bash
npx next build && npm run check:home
```

Expected: build succeeds, all nine tests PASS.

- [ ] **Step 7: Commit**

```bash
git add src/app/home-data.js src/components/HomeComponent/StartConversation.js src/app/page.js scripts/check-home.mjs
git commit -m "Add the single call to action"
```

---

## Task 8: Retire `home.css` and restore the header

`home.css` cannot simply be dropped: [Header.js](../../../src/components/Header.js) applies `fieldHeader`, which is defined only in `home.css`. Removing the stylesheet without moving that class would leave the header unstyled on the home route. The header's home variant is also restyled here, because its current values (`bg-[#f7f5ee]/95`, `border-[#1c211b]`) belong to the retired palette and clash with the site's line colour.

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/components/Header.js`
- Modify: `scripts/check-home.mjs` (append one test)

**Interfaces:**
- Consumes: the complete page from Tasks 3 to 7.
- Produces: nothing further. This is the final task.

- [ ] **Step 1: Write the failing test**

Append to `scripts/check-home.mjs`:

```js
test("the home page is built on the site palette, not the retired one", () => {
  const css = builtCss();
  // #f6f7f4 and #658665 belonged to home.css, which is retired. These are
  // asserted against the emitted stylesheets, not the HTML: a stylesheet that
  // is still imported lands its colours here and never in the markup.
  assert.ok(!css.includes("#f6f7f4"), "the retired home palette is still in the CSS bundle");
  assert.ok(!css.includes("#658665"), "the retired home palette is still in the CSS bundle");
  // The header's home variant must survive on site tokens.
  assert.ok(css.includes("fieldHeader"), "the home header variant was dropped instead of moved");
});
```

- [ ] **Step 2: Run the test to verify it fails**

```bash
npm run check:home
```

Expected: FAIL on `the home header variant was dropped instead of moved`, because `.fieldHeader` is not yet defined in `globals.css`. The two palette assertions should already be green — `home.css` stopped being imported in Task 2, so its colours left the bundle then. That is the expected baseline; do not contrive a failure for them. If a palette assertion *does* fail here, something still imports `home.css` — find it before continuing.

- [ ] **Step 3: Move `.fieldHeader` into `globals.css`**

In `src/app/globals.css`, inside the `@layer components` block after the `.text-link` line, add:

```css
.fieldHeader { @apply border-[#d8d5cc] bg-[#fbfaf7]/95; }
```

This replaces the retired `background: #fafaf8 !important; border-color: #e4e8e1 !important;` with site tokens, and drops `!important` so utilities can still override it.

- [ ] **Step 4: Restyle the header's home variant**

In `src/components/Header.js`, change the `isHome` branch of the `<header>` className from the retired palette to site tokens. The line currently reads:

```jsx
<header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isHome ? "fieldHeader border-[#1c211b] bg-[#f7f5ee]/95" : "border-[#e5e5e7] bg-white/85"}`}>
```

Change it to:

```jsx
<header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isHome ? "fieldHeader" : "border-[#e5e5e7] bg-white/85"}`}>
```

The border and background now come from `.fieldHeader`. Leave every other part of `Header.js` untouched — including the home-only `SM.` wordmark and the `/writing/` early return. Both are deliberate.

- [ ] **Step 5: Confirm nothing still imports the retired files**

```bash
cd /Users/shivam-mac/shivam.portfolio
grep -rn "home.css\|FeedHome\|feed-data" src/ --include=*.js --include=*.jsx \
  | grep -v "^src/app/FeedHome.js:\|^src/app/feed-data.js:" \
  || echo "no references from routed files"
```

Expected: `no references from routed files`.

The two retired files themselves are expected to match and must **not** be edited: `FeedHome.js` still imports `./feed-data` and `./home.css`, and that is correct, because the Global Constraints require those files to be left intact on disk. They are simply no longer routed. What this step proves is that no *other* file reaches them. If a match survives from a third file, that file is still importing a retired module — fix that import, do not fix the retired files.

- [ ] **Step 6: Build, check, and lint**

```bash
npx next build && npm run check:home && npm run lint
```

Expected: build succeeds; all ten tests PASS; lint reports no warnings or errors. Confirm in the route table that `/` is `○ (Static)`.

- [ ] **Step 7: Verify the three viewports and the no-JS path**

Start the dev server:

```bash
npm run dev
```

Then check each of the following, at **375px**, **768px**, and **1440px**:

- No horizontal scrollbar. Pay attention to the band 01 diagram — six stage chips in a row are the most likely thing to overflow.
- Band 03's longest essay title wraps rather than clipping. "Structured Outputs Need Semantic Invariants, Not Just a Strict Schema" is the longest of the five.
- Heading order is `h1` once, then `h2` per band, then `h3` within bands. The hero's `h1` is the only `h1` on the page.
- The `/connect` button shows a visible focus ring when reached by keyboard.

Then disable JavaScript in the browser and reload `/`. Expected: all four bands, every link, and the email alternative render. Only the embedded form on `/connect` should be affected — and that page is out of scope.

- [ ] **Step 8: Commit**

```bash
git add src/app/globals.css src/components/Header.js scripts/check-home.mjs
git commit -m "Retire home.css and move the header's home variant onto site tokens"
```

---

## Self-Review

**Spec coverage.** §3 hero → Task 3. §4 band 01 → Task 4; band 02 → Task 5, including the equal-weight sunsets and the derived link rule; band 03 → Task 6. §5 single door → Task 7. §6 design system → Task 8 Step 3; derived facts → Tasks 4, 5, 6, each with a throw on unresolved keys; static rendering → Task 2. §7 files → all listed; `home-data.js` created in Task 3 and extended in 5, 6, 7. §8 out of scope → enforced by Global Constraints. §9 risks → the understatement risk in §9 is handled by the bridge line in Task 3 Step 4; the three-bands-read-as-a-grid risk by giving each band a different structure (diagram, table, title ladder); the sunset risk by Task 5 Step 1 asserting the sunsets render. §10 verification → Tasks 1 and 2 for the route table, Task 1 for link integrity, Task 8 for viewports and no-JS.

**Known deviations from the spec, both deliberate.** The spec's §4 lists Boansel as having a case study; verification showed it is in `currentBuilds` and `otherProducts` but **not** `caseStudies`, so its row renders unlinked — Task 5 Step 1 pins this. The spec quotes two essay titles that exist on the live site but not in this repo's `blogs` array; Task 6 uses the local dataset's titles, which the title test pins.

**Type consistency.** `resolveProduct(key)` returns `{ key, name, status, date, href }` and is consumed only in Task 5. `resolveEssays()` returns `[{ slug, title, href }]` and is consumed only in Task 6. `hero`, `identity`, `systems`, `products`, `argumentsBand`, `teaching`, `conversation` are each defined once. Note the export is named `argumentsBand`, not `arguments`, because `arguments` is a reserved identifier in JavaScript.

**Review Focus coverage.** Item 1 → Task 5 Step 3 throw and Step 6 note. Item 2 → Task 6 Step 3 throw. Item 3 → Task 1 Step 2 link-integrity test, plus Task 5's named regression test. Item 4 → Task 8 Step 7. Item 5 → Task 8 Step 7.

**Two corrections made during self-review, both against evidence from this repo's own build output.** First, copy assertions run against decoded text via `homeText()` rather than raw markup: React rewrites an apostrophe to `&#x27;`, verified in `.next/server/app/sessions.html`, so a raw-string match would pin the escaping rather than the words. Second, the palette assertion in Task 8 runs against the emitted CSS bundle via `builtCss()` rather than the HTML: `home.css`'s colours would land in the stylesheet, never in the markup, so an HTML check could not detect a lingering import — the test would have passed while the regression was live.

**Test count by task.** Task 1: 2. Task 2: 1 (3). Task 3: 1 (4). Task 4: 1 (5). Task 5: 2 (7). Task 6: 1 (8). Task 7: 1 (9). Task 8: 1 (10). Every "Expected: PASS" line in the plan refers to the running total for that task.

**Corrections made at pre-flight, after the plan was approved.** Four defects were found by scanning the plan against its own Global Constraints and against the repo's actual state. They are recorded here so the record of what was approved and what was executed stays honest.

1. **The hero re-derived `.display-title`.** Task 3 originally set `font-serif text-4xl md:text-6xl` on the `h1`, which the Global Constraints forbid re-deriving. It now uses the component class, with `max-w-[880px]` to control line count.
2. **Band 01 restated a fact.** Task 4 originally authored `providers: ["Azure OpenAI", …]`, which duplicated `caseStudies[enterprise-ai].stack` verbatim — a direct violation of "facts are derived; framing is authored". The stack is now read from that entry, with a throw if it is missing, and the row is labelled "Providers and platforms" because the derived array includes OpenWebUI, which is a platform rather than a provider.
3. **Task 8's grep could never pass.** It searched for references to the retired files across `src/` and expected none, but the retired files necessarily reference *each other* — `FeedHome.js` imports `./feed-data` and `./home.css`. The step now excludes those two files and asserts only that no other file reaches them.
4. **The branch was created inside Task 1.** The branch now exists before Task 1 runs, so Task 1 Step 1 verifies rather than creates. This keeps the controller off `main` even if Task 1's implementer fails partway.

A fifth change is a constraint rather than a defect: the Global Constraints now forbid `git add -A` / `git add .`, because the working tree carries unrelated uncommitted work that a blanket add would sweep into these commits.
