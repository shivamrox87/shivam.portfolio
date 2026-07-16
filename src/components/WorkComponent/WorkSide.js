import Header from "@/components/Header";
import {
  capabilityAreas,
  caseStudies,
  featuredWorkSlugs,
  otherProducts,
} from "@/server/data";
import Link from "next/link";

export default function WorkSide() {
  const featuredWork = featuredWorkSlugs
    .map((slug) => caseStudies.find((study) => study.slug === slug))
    .filter(Boolean);

  return (
    <main>
      <Header />

      <section className="site-shell page-section">
        <p className="eyebrow">Work</p>
        <h1 className="display-title mt-4 max-w-[900px]">Enterprise AI, developer tools, and products taken into the real world.</h1>
        <p className="mt-8 max-w-[720px] body-copy">
          A selective view of professional platforms, shipped products, and active product work.
          Employer details are intentionally scoped; roadmap items are separated from delivered features.
        </p>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.28fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Featured work</p>
            <h2 className="section-title mt-3">Five areas of depth</h2>
          </div>
          <div className="border-t border-[#171714]">
            {featuredWork.map((study, index) => (
              <article key={study.slug} className="grid gap-5 border-b border-[#d8d5cc] py-8 sm:grid-cols-[40px_0.38fr_0.62fr] sm:gap-6">
                <span className="text-xs text-[#b84a2b]">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-3xl leading-tight">{study.heading}</h3>
                  <p className="mt-2 text-xs uppercase leading-5 tracking-[0.14em] text-[#b84a2b]">{study.status} · {study.category}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[#4f4e48]">{study.summary}</p>
                  <p className="mt-4 text-xs uppercase leading-6 tracking-[0.12em] text-[#68675f]">{study.stack.join(" · ")}</p>
                  <Link href={`/work/${study.slug}`} className="text-link mt-5">Read case study</Link>
                </div>
              </article>
            ))}
            <p className="mt-6 text-sm leading-7 text-[#68675f]">Confidential client names, private infrastructure, prompts, credentials, and proprietary implementation details are not included.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.28fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Other products</p>
            <h2 className="section-title mt-3">Additional product work</h2>
          </div>
          <div className="border-t border-[#171714]">
            {otherProducts.map((product) => (
              <article key={product.name} className="grid gap-4 border-b border-[#d8d5cc] py-7 sm:grid-cols-[0.35fr_0.65fr] sm:gap-8">
                <div>
                  <h3 className="font-serif text-2xl">{product.name}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{product.status}</p>
                </div>
                <div>
                  <p className="text-sm leading-7 text-[#4f4e48]">{product.summary}</p>
                  <p className="mt-3 text-xs uppercase leading-6 tracking-[0.12em] text-[#68675f]">{product.focus.join(" · ")}</p>
                  {product.href ? <Link href={product.href} className="text-link mt-4">View details</Link> : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.28fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Capabilities</p>
            <h2 className="section-title mt-3">Connected to delivered work</h2>
          </div>
          <div className="border-t border-[#171714]">
            {capabilityAreas.map((area) => (
              <div key={area.title} className="grid gap-3 border-b border-[#d8d5cc] py-6 sm:grid-cols-[0.35fr_0.65fr] sm:gap-8">
                <h3 className="font-serif text-2xl">{area.title}</h3>
                <p className="text-sm leading-7 text-[#4f4e48]">{area.detail}</p>
              </div>
            ))}
            <Link href="/research" className="text-link mt-7">Technical research and investigations</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
