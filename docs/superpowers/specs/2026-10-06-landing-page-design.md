# Landing page redesign — design

**Date:** 2026-10-06
**Status:** Approved, ready for implementation plan
**Scope:** `src/app/page.js` and its supporting components and data. Sub-pages (`/work`, `/about`, `/writing`, `/sessions`, `/research`, `/building`) are referenced but not redesigned.

---

## 1. The problem

Two versions of this page exist, and they fail in opposite directions.

**The version at git HEAD** (292 lines) is an inventory. It walks through hero metrics, featured work, other products, skills, research areas, principles, the full 28-essay index, teaching, and community — duplicating `/work`, `/about`, and `/writing` almost entirely. It is complete and forgettable. A visitor finishes it with no sentence to repeat.

**The uncommitted version** (`FeedHome.js`) is a social feed. It replaces the inventory with a scroll of 15 items, which fixes the sprawl but loses the argument. Three specific defects:

1. **Random shuffle.** [page.js](../../../src/app/page.js) shuffles the feed order with `Math.random()` on every request (`dynamic = "force-dynamic"`), so every visit opens on a different item. A first impression that changes per visit cannot build authority.
2. **Fabricated visuals.** Each project renders as a hand-built CSS mockup (a fake file tree, a fake architecture stack, a fake waveform) rather than communicating anything true about the work.
3. **No path to a conversation.** No item in the feed leads anywhere but back to itself. There is one `mailto:` at the very bottom.

It also reports **hardcoded counts** — "5 projects / 5 X posts / 5 articles" — which are true today and will silently rot.

Additionally, `home.css` gives the homepage its own visual system: greens (`#658665`, `#23382d`) on `#f6f7f4`. Every other page uses rust (`#b84a2b`) on paper (`#fbfaf7`) through the tokens in [globals.css](../../../src/app/globals.css). The homepage currently reads as a different site from the pages it links to.

## 2. What the page is for

The page has one job: **start a conversation.** Every design decision is measured against it.

It must serve three readers without asking them to declare themselves:

| Reader | What they're deciding |
|---|---|
| Teams building internal AI — buyers, technical decision-makers | Can this person build the layer we can't? |
| Hiring managers, peers, collaborators | Does this person own things end to end? |
| Organizers, learners, and anyone who decides by conviction | Can this person explain hard things, and do I agree with them? |

A "choose your path" menu was rejected: three doors on a personal site reads as unfocused. The page does the sorting itself.

### Success criteria

- A visitor can state the thesis in their own words after five seconds on the page.
- All three readers find proof addressed to them without scrolling past anything irrelevant to them.
- Exactly one call to action, and it is reached by every path through the page.
- No content on the page duplicates a sub-page; the page routes, the sub-pages hold depth.
- Every factual claim rendered is derived from a single source of truth, so it cannot drift.

### Explicitly not goals

Job-hunting framing (the page never asks for a job), product signup conversion (ExplainGitHub is evidence, not the offer), and visual novelty for its own sake.

## 3. Hero

The page leads with a position, then states its thesis outright.

> ## I work on the parts of AI that don't demo well.
>
> Model access, identity, evaluation, routing, deployment — the layer between a prototype that impresses and a system a bank will run. Senior AI Engineer at AlphaFMC. Founder of ExplainGitHub.
>
> *The model is the smallest part of a production AI system. The rest of this page is what that looks like.*

**Why this headline.** It is the author's own framing — the live site already says he works on "the less glamorous parts of AI" — so it is authentic rather than adopted. It is specific enough to be memorable and modest enough to be credible. Crucially it sets up the three bands: "what doesn't demo well" *is* band 01, and bands 02 and 03 show what that discipline produces.

The alternatives considered and rejected: a diminishing open ("Anyone can call a model…") fights the goal of getting someone to write in; stating the thesis in the reader's voice ("the smallest part of **your** production AI system") excludes the teaching reader entirely.

**The bridge line is load-bearing.** It states the thesis plainly, and it tells the reader what the page is. Its understated headline is deliberate, so the bridge line carries the conviction — position first, argument second.

Below the hero, kept quiet and small: location (Varanasi, India) and links out (X, Medium, LinkedIn, email) as a single identity strip that does not compete with the headline.

## 4. The three bands

The working record is partitioned by reader intent. Each band is a sequential section, not a column, so the page never reads as a three-card portfolio grid.

Ordering escalates deliberately: what he runs at work → what he owns himself → why any of it matters.

### Band 01 — The systems

**Reader:** teams building internal AI.

**Contents.** An honest, labelled diagram of the layer he actually builds, replacing the current fake CSS mockups:

```
application  →  identity & access  →  model gateway  →  routing / admission
             →  evaluation  →  observability  →  providers (Azure OpenAI, Claude,
                                                   Gemini, Bedrock, LiteLLM)
```

This is real: it matches `researchAreas` and the AlphaFMC scope in `companiesData`. Then short entries on each component — model access, identity and permissions, routing and admission policy, evaluation, cloud delivery — each saying what the component is *for*, not what technology it uses.

**Source:** `researchAreas`, `companiesData[AlphaFMC]` from [data.js](../../../src/server/data.js).

**Hands off to:** `/work/enterprise-ai`, `/research`.

### Band 02 — The products

**Reader:** hiring managers, peers, collaborators.

**Contents.** List rows, not cards. Every entry carries status, date, and one hand-authored line answering *what it taught me* — the field that turns a portfolio grid into a record.

| Entry | Status | Note |
|---|---|---|
| ExplainGitHub | Building | Leads the band. Repository intelligence, first paying users. |
| RepoFlicks | Shipped | |
| Arya | Shipped · 2023 | Multilingual retrieval and speech, built at Kyukey. |
| Instant EduDoc | Shipped | |
| ReqBeam | **Sunset · Sept 2026** | Reason stated plainly. |
| Boansel | **Sunset · Sept 2026** | Reason stated plainly. |

The two sunsets get equal visual weight to the shipped work. This is a strategic choice, not a neutral one: the willingness to report what he killed is the most differentiating thing on the page, and it is the strongest available evidence for the anti-hype thesis. Remaining explorations (LaunchRail, Sarkari Samadhan, SageRai, Personal AI Systems Lab, OpenWebUI OS) appear as a single compressed line beneath the table, not as six more rows.

**Link constraint.** Rows may only link to routes that exist. `/work/[slug]` renders from `caseStudies`, which contains exactly seven entries: `enterprise-ai`, `personal-ai-systems-lab`, `explaingithub`, `reqbeam`, `repoflicks`, `openwebui-operating-system`, `arya`.

Of the rows above, only **ExplainGitHub, RepoFlicks, Arya, and ReqBeam** have a case study. **Boansel and Instant EduDoc do not** — `boansel` appears in `currentBuilds` and `otherProducts` but was never added to `caseStudies`. Those two rows render as plain unlinked text rather than pointing at a 404.

This is a live inconsistency worth noting: `/building` gates its "Product notes" link on a hardcoded slug list that omits `arya`, so despite Arya having a case study it is unreachable from `/building`. That page is out of scope here, but band 02 must not copy its approach — the link decision is derived from `caseStudies` membership, never from a hand-maintained list.

**Hands off to:** `/work`, `/work/[slug]`.

### Band 03 — The arguments

**Reader:** organizers, learners, and conviction-led decision-makers.

**Contents.** The essay series as a ladder of claims, not a date list. Titles are set large in serif — they are strong enough to be the design, and they are literally the argument the hero makes:

- "A Model Gateway Needs an Admission Policy, Not Just Fallbacks"
- "Before You Blame the Model, Check the Eval Sandbox"
- "Retrieval Is a Production Interface, Not a Prompt Feature"

Then short entries on the teaching record: Programming With Maurya (2020–23, India and Ghana), Ladies in Tech Summit (2024), three published books.

This band does double duty — it is the teaching record *and* the evidence for the hero claim, since the essays argue that claim directly.

**Source:** `blogs` (28 entries), `books`, `communityHighlights`, and the speaking record.

**Hands off to:** `/writing`, `/sessions`, `/ebooks`.

## 5. The single door

The page closes with one call to action, framed as the sorting question:

> ### Which of those brought you here?
>
> **The systems** — you're building internal AI and want help with the layer.
> **The products** — you're assessing whether I build things end to end.
> **The arguments** — you want to talk about the ideas, or have me teach them.
>
> **[ Start a conversation ]**  or email connect@shivammaurya.com

The button targets `/connect` (the existing Fillout form, which already captures intent as free text). The `mailto:` sits alongside as a quiet alternative for people who will not fill in a form. The three lines are not buttons — the reader is not made to pick a lane before they can write; the lines exist so they know all three are welcome.

## 6. Architectural decisions

### The page adopts the site's design system

The new page is built from the tokens in [globals.css](../../../src/app/globals.css) — paper `#fbfaf7`, ink `#171714`, muted `#68675f`, line `#d8d5cc`, rust accent `#b84a2b` — and the existing component classes (`.site-shell`, `.page-section`, `.eyebrow`, `.display-title`, `.section-title`, `.body-copy`, `.text-link`).

`home.css` is retired. Its distinct palette was the reason the homepage read as a separate site, and the near-duplicate serif/mono styling it defined is already covered by the design system. Any genuinely new styling needed for the bands is added as Tailwind utilities or as new component classes in `globals.css`, so it is shared rather than page-local.

### Facts are derived; framing is authored

A new `src/app/home-data.js` holds only what does not already exist: the hero copy, the bridge line, the band framing, and the per-product "what it taught me" lines.

Everything factual is imported from [data.js](../../../src/server/data.js):

- Band 01 reads `researchAreas` and `companiesData`.
- Band 02 reads `caseStudies` and `otherProducts`.
- Band 03 reads `blogs`, `books`, `communityHighlights`.

This prevents the class of bug already present in the repo, where `/writing` buckets every post that is not tagged "AI Infrastructure" into a section labelled "Product Execution" — silently mislabelling five posts across `AI Product Execution`, `Engineering`, and `Product`. Deriving from the same array the sub-pages use means the homepage cannot drift from them.

The hardcoded "5 projects / 5 X posts / 5 articles" counters are removed rather than made dynamic. They answer a question nobody asked and create an obligation to keep them current.

### Static, not shuffled

`export const dynamic = "force-dynamic"` and the shuffle in [page.js](../../../src/app/page.js) are both removed. The page becomes statically rendered, the order fixed, and the first impression identical for every visitor. This is a prerequisite for the page building authority, and it also removes a server round trip from the most-visited route on the site.

## 7. Files

**Added**

- `src/app/home-data.js` — hero copy, bridge line, band framing, per-product notes.
- `src/components/HomeComponent/*.js` — one component per band, plus the hero and the closing call to action. Expected four or five small files, each one section, so no file grows large enough to be hard to hold in context.

**Changed**

- `src/app/page.js` — becomes a short composition of the new sections.

**Retired from the home route**

- `src/app/FeedHome.js`, `src/app/feed-data.js`, `src/app/home.css`.

These three are uncommitted and therefore unrecoverable if removed. They will be taken off the route at implementation time and **left on disk**; deleting them is a separate, explicit decision for the author to make once the new page is live.

## 8. Out of scope

- Redesigning `/work`, `/about`, `/writing`, `/sessions`, `/research`, `/building`. They are linked, not touched.
- Fixing the `/writing` mislabelling bug. It is documented here as motivation for deriving from `data.js`, but the fix belongs to that page.
- Adding `sitemap.js` / `robots.js`. The site has neither; it is a real gap for a page whose job is discoverability, but it is not this task.
- The orphaned `/newsletters` and `/ebooks` routes, which no navigation reaches. `/ebooks` gains a link from band 03 as a side effect; `/newsletters` stays orphaned.
- `src/lib/db.js`, which imports `mongoose`, a package not in `package.json`, and is imported by nothing.

## 9. Risks

| Risk | Mitigation |
|---|---|
| The thesis headline doesn't land in five seconds, and the page loses the visitor before the evidence. | The bridge line states the thesis in plain language immediately below the headline; band 01 opens with a diagram that is self-evidently real work. Verify by reading only the first two lines and asking whether the claim is clear. |
| The three bands read as a generic three-section portfolio despite the sequencing. | Band contents are deliberately different in kind — a diagram, a table, a set of essay titles — so no two bands share a visual pattern. |
| Reporting two sunsets reads as failure to a hiring manager. | Each sunset states the reason (focus on ExplainGitHub), and the band leads with a product that has paying users. Test by reading the band in isolation. |
| Deriving content from `data.js` couples the homepage to that file's shape. | The coupling is intentional — it is the same coupling the sub-pages already have. `home-data.js` absorbs any reshaping so band components read a stable shape. |

## 10. Verification

- `npx next build` passes, and `/` no longer appears as `ƒ (Dynamic)` in the route table.
- Every link on the page resolves. Specifically: no row in band 02 links to a slug absent from `caseStudies`.
- Rendered at 375px, 768px, and 1440px with no horizontal overflow and no layout shift.
- The page renders correctly with JavaScript disabled, apart from the `/connect` form.
- Reading only the hero's first two lines communicates the thesis.
- No content appears on the page that also appears verbatim on `/work` or `/about`.
