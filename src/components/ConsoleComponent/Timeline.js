import { companiesData } from "@/server/data";

const FIRST_YEAR = 2020;

/** A role's span in years, read out of its own "2023 - Present" style string. */
function span(years, currentYear) {
  const found = [...String(years).matchAll(/(?:19|20)\d{2}/g)].map((match) => Number(match[0]));
  const start = found[0] ?? FIRST_YEAR;
  const end = /present|now/i.test(years) ? currentYear : found[found.length - 1] ?? start;
  return { start, end };
}

export default function Timeline() {
  const currentYear = new Date().getFullYear();
  const lastYear = Math.max(currentYear, ...companiesData.flatMap((entry) => {
    const { end } = span(entry.activeYears, currentYear);
    return [end];
  }));
  const axis = [];
  for (let year = FIRST_YEAR; year <= lastYear; year += 1) axis.push(year);
  const width = lastYear - FIRST_YEAR || 1;

  const rows = companiesData
    .map((entry) => ({ ...entry, ...span(entry.activeYears, currentYear) }))
    .sort((a, b) => b.start - a.start);

  return (
    <section className="border-t border-[#cfcabf]" aria-labelledby="timeline-heading">
      <div className="site-shell page-section">
        <div className="panel">
          <div className="panel-head">
            <p className="panel-id">service history</p>
            <p className="panel-id">
              {FIRST_YEAR}–{lastYear} · {rows.length} entries · derived from the employment record
            </p>
          </div>

          <div className="panel-body">
            <h2 id="timeline-heading" className="sr-only">Service history</h2>

            <div className="hidden sm:block">
              <div className="grid grid-cols-[190px_1fr] gap-6">
                <span />
                <div className="relative flex justify-between font-mono text-[10px] text-[#8a857a]">
                  {axis.map((year) => (
                    <span key={year}>{year}</span>
                  ))}
                </div>
              </div>

              {rows.map((row) => {
                const left = ((row.start - FIRST_YEAR) / width) * 100;
                const spanWidth = Math.max(((row.end - row.start + 0.55) / width) * 100, 3);
                const live = /present|now/i.test(row.activeYears);
                return (
                  <div key={row.id} className="grid grid-cols-[190px_1fr] items-center gap-6 border-t border-[#e4e0d5] py-3">
                    <div>
                      <p className="font-mono text-[12px] leading-tight text-[#171714]">{row.companyName}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a857a]">{row.position}</p>
                    </div>
                    <div className="relative h-6">
                      <span className="absolute inset-x-0 top-1/2 h-px bg-[#e4e0d5]" />
                      <span
                        className={`absolute top-1/2 h-[10px] -translate-y-1/2 ${live ? "bg-[#b84a2b]" : "bg-[#c9c4b8]"}`}
                        style={{ left: `${left}%`, width: `${spanWidth}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <ul className="sm:hidden">
              {rows.map((row) => (
                <li key={row.id} className="border-t border-[#e4e0d5] py-3">
                  <p className="font-mono text-[12px] text-[#171714]">{row.companyName}</p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a857a]">
                    {row.position} · {row.activeYears}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
