import { companiesData } from "@/server/data";

const FIRST_YEAR = 2020;

/** A role's span in years, read out of its own "2023 - Present" style string. */
function span(years, currentYear) {
  const found = [...String(years).matchAll(/(?:19|20)\d{2}/g)].map((match) => Number(match[0]));
  const start = found[0] ?? FIRST_YEAR;
  const end = /present|now/i.test(years) ? currentYear : found[found.length - 1] ?? start;
  return { start, end };
}

export default function History() {
  const currentYear = new Date().getFullYear();
  const lastYear = Math.max(
    currentYear,
    ...companiesData.map((entry) => span(entry.activeYears, currentYear).end),
  );
  const years = [];
  for (let year = FIRST_YEAR; year <= lastYear; year += 1) years.push(year);
  const width = lastYear - FIRST_YEAR || 1;

  const rows = companiesData
    .map((entry) => ({ ...entry, ...span(entry.activeYears, currentYear) }))
    .sort((a, b) => b.start - a.start);

  return (
    <section className="border-t border-[#C7C9C4]" aria-labelledby="history-heading">
      <div className="site-shell page-section">
        <h2 id="history-heading" className="section-title max-w-[700px]">
          Where the years went
        </h2>

        <div className="mt-12 hidden sm:block">
          <div className="grid grid-cols-[200px_1fr] gap-6">
            <span />
            <div className="flex justify-between text-[13px] text-[#6B7076]">
              {years.map((year) => (
                <span key={year}>{year}</span>
              ))}
            </div>
          </div>

          {rows.map((row) => {
            const left = ((row.start - FIRST_YEAR) / width) * 100;
            const barWidth = Math.max(((row.end - row.start + 0.55) / width) * 100, 3);
            const live = /present|now/i.test(row.activeYears);
            return (
              <div key={row.id} className="grid grid-cols-[200px_1fr] items-center gap-6 border-t border-[#DCDDD8] py-4">
                <div>
                  <p className="font-serif text-[17px] leading-tight text-[#16181B]">{row.companyName}</p>
                  <p className="text-[13px] text-[#6B7076]">{row.position}</p>
                </div>
                <div className="relative h-5">
                  <span className="absolute inset-x-0 top-1/2 h-px bg-[#DCDDD8]" />
                  <span
                    className={`absolute top-1/2 h-[9px] -translate-y-1/2 ${live ? "bg-[#1F4FD8]" : "bg-[#C7C9C4]"}`}
                    style={{ left: `${left}%`, width: `${barWidth}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <ul className="mt-10 sm:hidden">
          {rows.map((row) => (
            <li key={row.id} className="border-t border-[#DCDDD8] py-4">
              <p className="font-serif text-[17px] text-[#16181B]">{row.companyName}</p>
              <p className="text-[13px] text-[#6B7076]">
                {row.position}, {row.activeYears}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
