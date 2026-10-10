import { researchAreas } from "@/server/data";
import Link from "next/link";

export const metadata = {
  title: "Technical Research",
  description: "Technical investigations by Shivam Maurya across model gateways, AI security, open-source platforms, deployment, and developer workflows.",
};

export default function ResearchPage() {
  return (
    <main id="main-content">
      <section className="site-shell page-section">
        <p className="eyebrow">Investigations</p>
        <h1 className="display-title mt-4 max-w-[900px]">Investigations behind production AI decisions.</h1>
        <p className="mt-8 max-w-[720px] body-copy">
          Focused research used to evaluate architectures, provider behaviour, security models,
          open-source platforms, and product feasibility. These are investigations, not claims of shipped products.
        </p>
      </section>

      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell page-section">
          <div className="border-t border-[#16181B]">
            {researchAreas.map((area, index) => (
              <article key={area.title} className="grid gap-5 border-b border-[#C7C9C4] py-8 md:grid-cols-[40px_0.4fr_0.6fr] md:gap-7">
                <span className="text-xs text-[#1F4FD8]">0{index + 1}</span>
                <div>
                  <h2 className="font-serif text-3xl leading-tight">{area.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[#3A3F45]">{area.summary}</p>
                </div>
                <div className="border-t border-[#C7C9C4]">
                  {area.topics.map((topic) => (
                    <p key={topic} className="border-b border-[#C7C9C4] py-4 text-sm text-[#3A3F45] last:border-b-0">{topic}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-5">
            <Link href="/writing" className="text-link">Read technical writing</Link>
            <Link href="/work" className="text-link">See applied work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
