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
