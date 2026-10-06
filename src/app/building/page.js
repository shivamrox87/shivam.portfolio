import { currentBuilds, playGround } from "@/server/data";
import Link from "next/link";

export const metadata = { title: "Now", description: "What Shivam Maurya is currently building and researching." };

export default function BuildingPage() {
  return (
    <main id="main-content">
      <section className="site-shell page-section">
        <p className="eyebrow">Now · October 2026</p>
        <h1 className="display-title mt-4 max-w-[800px]">Now</h1>
        <p className="mt-8 max-w-[680px] body-copy">A concise record of current enterprise AI delivery, independent product work, and technical research.</p>
      </section>
      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell grid gap-4 py-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <p className="eyebrow">Working rhythm</p>
          <p className="body-copy">Running my workday through a personal AI agent (Hermes) on Slack for journaling, evidence tracking, and daily operations. I am also publishing a production infrastructure essay series. <Link href="/writing/agent-streaming-needs-typed-lifecycle-events-not-just-a-raw-token-pipe" className="text-link">Read the latest essay</Link></p>
        </div>
      </section>
      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div><p className="eyebrow">Products</p><h2 className="section-title mt-3">Current status</h2></div>
          <div className="border-t border-[#171714]">
            {currentBuilds.map((item) => (
              <article key={item.slug} className="border-b border-[#d8d5cc] py-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-serif text-3xl">{item.name}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{item.stage}</p>
                </div>
                <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#4f4e48]">{item.summary}</p>
                {["personal-ai-systems-lab", "explaingithub", "reqbeam", "repoflicks", "openwebui-operating-system"].includes(item.slug) ? <Link href={`/work/${item.slug}`} className="text-link mt-4">Product notes</Link> : null}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div><p className="eyebrow">Research</p><h2 className="section-title mt-3">Current questions</h2></div>
          <div className="border-t border-[#171714]">
            {playGround.map((item) => <div key={item.name} className="grid gap-2 border-b border-[#d8d5cc] py-5 sm:grid-cols-[140px_1fr]"><p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{item.category}</p><p className="font-serif text-2xl">{item.name}</p></div>)}
          </div>
        </div>
      </section>
    </main>
  );
}
