import { currentBuilds, playGround } from "@/server/data";
import Link from "next/link";

export const metadata = { title: "Now", description: "What Shivam Maurya is currently building, operating, and researching." };

// Authored copy for this page, per portfolio-content.md §12. Kept local because
// it is a dated snapshot of a moment rather than a durable fact about a project.
const personalSystems = [
  ["Hermes — daily driver", "A self-hosted agent living in my Slack. It runs the workday: journaling, evidence tracking, deployment operations, research, reading, and notes."],
  ["Journal and evidence system", "Prompts every evening, an evidence question on Fridays, a review on Sundays. Google Sheets with a local markdown mirror, fully automated."],
  ["The Desk", "A curated reading page that replaced a twenty-source RSS firehose. One filter: does this make me measurably better?"],
];

const atWork = [
  ["Document generation agent", "Deployed and demo-ready. The system drafts proposals and statements of work that used to be produced by hand over weeks."],
  ["Evaluation methodology", "Leading the expert scorecard work — turning freeform reviewer feedback into calibrated data a judge model can be measured against."],
  ["Data quality and generation", "Tuning generation now that the source material has been audited and cleaned."],
];

const reading = [
  ["Evaluation practice", "Following Hamel Husain, Shreya Shankar, and Eugene Yan on how to tell whether a system is actually good."],
  ["Systems architecture", "How the pieces around a model are designed so the whole thing survives production."],
  ["Cadence", "Roughly two articles a week, each read with a question in mind rather than for coverage."],
];

function Snapshot({ eyebrow, title, rows }) {
  return (
    <section className="border-t border-[#C7C9C4]">
      <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="section-title mt-3">{title}</h2>
        </div>
        <div className="border-t border-[#16181B]">
          {rows.map(([heading, detail]) => (
            <div key={heading} className="grid gap-2 border-b border-[#C7C9C4] py-6 sm:grid-cols-[0.36fr_0.64fr] sm:gap-8">
              <h3 className="font-serif text-xl">{heading}</h3>
              <p className="text-sm leading-7 text-[#3A3F45]">{detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function BuildingPage() {
  return (
    <main id="main-content">
      <section className="site-shell page-section">
        <p className="eyebrow">Now · October 2026</p>
        <h1 className="display-title mt-4 max-w-[800px]">Now</h1>
        <p className="mt-8 max-w-[680px] body-copy">
          A dated snapshot: what is shipping, what I am operating, what I am paid to do,
          and what I am reading. This page changes when the work does.
        </p>
      </section>

      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell grid gap-4 py-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <p className="eyebrow">Working rhythm</p>
          <p className="body-copy">
            I run my whole workday through a personal AI agent. I am also publishing a production
            infrastructure essay series.{" "}
            <Link href="/writing/agent-streaming-needs-typed-lifecycle-events-not-just-a-raw-token-pipe" className="text-link">
              Read the latest essay
            </Link>
          </p>
        </div>
      </section>

      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Products</p>
            <h2 className="section-title mt-3">Current status</h2>
          </div>
          <div className="border-t border-[#16181B]">
            {currentBuilds.map((item) => (
              <article key={item.slug} className="border-b border-[#C7C9C4] py-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-3xl">{item.name}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#1F4FD8]">{item.stage}</p>
                </div>
                <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#3A3F45]">{item.summary}</p>
                {["personal-ai-systems-lab", "explaingithub", "reqbeam", "repoflicks", "openwebui-operating-system"].includes(item.slug) ? (
                  <Link href={`/work/${item.slug}`} className="text-link mt-4">Product notes</Link>
                ) : null}
              </article>
            ))}
            <article className="border-b border-[#C7C9C4] py-7">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-serif text-3xl">Hiring portal</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#6B7076]">In build</p>
              </div>
              <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#3A3F45]">
                The next product launch, in final build. Details when it is live.
              </p>
            </article>
          </div>
        </div>
      </section>

      <Snapshot eyebrow="Systems" title="What I operate" rows={personalSystems} />
      <Snapshot eyebrow="Work" title="What I am paid to do" rows={atWork} />
      <Snapshot eyebrow="Reading" title="What I am studying" rows={reading} />

      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Research</p>
            <h2 className="section-title mt-3">Open questions</h2>
          </div>
          <div className="border-t border-[#16181B]">
            {playGround.map((item) => (
              <div key={item.name} className="grid gap-2 border-b border-[#C7C9C4] py-5 sm:grid-cols-[140px_1fr]">
                <p className="text-xs uppercase tracking-[0.14em] text-[#1F4FD8]">{item.category}</p>
                <p className="font-serif text-2xl">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell py-10 grid gap-4 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <p className="eyebrow">Sunset</p>
          <p className="body-copy">
            ReqBeam and Boansel were both shut down in September 2026, on purpose — to put
            everything behind one product instead of three.{" "}
            <Link href="/work" className="text-link">What that cost, and what it taught</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
