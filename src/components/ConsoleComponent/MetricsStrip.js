import { metrics } from "@/app/home-data";

export default function MetricsStrip() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="metrics-heading">
      <div className="site-shell page-section">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 id="metrics-heading" className="section-title">Metrics</h2>
          <p className="mono text-[#68675f]">every one defensible out loud</p>
        </div>

        <dl className="mt-10 grid gap-x-12 gap-y-9 border-t border-[#171714] pt-9 sm:grid-cols-2 lg:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[#b84a2b]">
                {metric.value}
              </dt>
              <dd className="mt-3 text-sm leading-7 text-[#4f4e48]">{metric.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
