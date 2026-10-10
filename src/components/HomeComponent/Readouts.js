import { metrics } from "@/app/home-data";

/**
 * A list, not a chart.
 *
 * These numbers carry different units — weeks, rows, a percentage, counts — so
 * bars would imply a comparison between them that does not exist. They are set
 * as plain figures with their source beside them.
 */
export default function Readouts() {
  return (
    <section className="border-t border-[#C7C9C4]" aria-labelledby="readouts-heading">
      <div className="site-shell page-section">
        <h2 id="readouts-heading" className="section-title max-w-[700px]">
          Six numbers I can defend out loud
        </h2>

        <dl className="mt-12 border-t border-[#16181B]">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="grid gap-1 border-b border-[#DCDDD8] py-5 sm:grid-cols-[240px_1fr] sm:items-baseline sm:gap-8"
            >
              <dt className="font-serif text-[26px] leading-tight tracking-[-0.02em] text-[#1F4FD8] md:text-[30px]">
                {metric.value}
              </dt>
              <dd className="text-[15px] leading-7 text-[#3A3F45]">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
