import { metrics } from "@/app/home-data";

/**
 * A readout grid, not a chart.
 *
 * These numbers carry different units — weeks, rows, a percentage, counts — so
 * drawing them as bars would imply a comparison between them that does not
 * exist. They are set as instrument cells instead: dense, equally weighted, and
 * honest about being six unrelated measurements.
 */
export default function MetricsStrip() {
  return (
    <section className="border-t border-[#cfcabf]" aria-labelledby="metrics-heading">
      <div className="site-shell page-section">
        <div className="panel">
          <div className="panel-head">
            <p className="panel-id">readouts</p>
            <p className="panel-id">each one defensible out loud</p>
          </div>

          <div className="panel-body">
            <h2 id="metrics-heading" className="sr-only">Readouts</h2>
            <dl className="grid border-t border-l border-[#e4e0d5] sm:grid-cols-2 lg:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="border-b border-r border-[#e4e0d5] p-4 md:p-5">
                  <dt className="font-mono text-[19px] leading-tight tabular-nums text-[#b84a2b] md:text-[22px]">
                    {metric.value}
                  </dt>
                  <dd className="mt-3 font-mono text-[10px] uppercase leading-5 tracking-[0.1em] text-[#8a857a]">
                    {metric.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
