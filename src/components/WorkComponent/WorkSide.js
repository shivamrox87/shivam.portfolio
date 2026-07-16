import Header from "@/components/Header";
import { caseStudies, selectedWork } from "@/server/data";
import Link from "next/link";

export default function WorkSide() {
  const independent = caseStudies.slice(0, 2);

  return (
    <main>
      <Header />

      <section className="site-shell page-section">
        <p className="eyebrow">Work</p>
        <h1 className="display-title mt-4 max-w-[850px]">AI infrastructure, applied systems, and developer products.</h1>
        <p className="mt-8 max-w-[700px] body-copy">
          Selected professional and independent work. Employer and client work is described at
          an appropriate level; independent products are labelled by their current stage.
        </p>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Professional</p>
            <h2 className="section-title mt-3">Delivered work</h2>
          </div>
          <div className="border-t border-[#171714]">
            {selectedWork.slice(0, 2).map((item) => (
              <article key={item.name} className="border-b border-[#d8d5cc] py-8">
                <div className="grid gap-3 sm:grid-cols-[0.42fr_1fr] sm:gap-8">
                  <div>
                    <h3 className="font-serif text-3xl">{item.name}</h3>
                    <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{item.status}</p>
                    <p className="mt-2 text-sm text-[#68675f]">{item.context}</p>
                  </div>
                  <div>
                    <p className="text-base leading-8 text-[#4f4e48]">{item.description}</p>
                    <p className="mt-4 text-xs uppercase leading-6 tracking-[0.12em] text-[#68675f]">{item.scope.join(" · ")}</p>
                    <Link href={item.href} className="text-link mt-5">View details</Link>
                  </div>
                </div>
              </article>
            ))}
            <p className="mt-6 text-sm leading-7 text-[#68675f]">Some implementation details are omitted because of employer and client confidentiality.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Independent</p>
            <h2 className="section-title mt-3">Products in development</h2>
          </div>
          <div className="border-t border-[#171714]">
            {independent.map((study) => (
              <article key={study.slug} className="grid gap-4 border-b border-[#d8d5cc] py-8 sm:grid-cols-[0.42fr_1fr] sm:gap-8">
                <div>
                  <h3 className="font-serif text-3xl">{study.heading}</h3>
                  <p className="mt-2 text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{study.status} · {study.date}</p>
                </div>
                <div>
                  <p className="text-base leading-8 text-[#4f4e48]">{study.summary}</p>
                  <Link href={`/work/${study.slug}`} className="text-link mt-5">Read product notes</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
