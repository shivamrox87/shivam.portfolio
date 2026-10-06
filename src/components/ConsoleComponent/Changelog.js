import Link from "next/link";
import { changelog } from "@/app/home-data";

export default function Changelog() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="changelog-heading">
      <div className="site-shell page-section">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 id="changelog-heading" className="section-title">Changelog</h2>
          <p className="mono text-[#68675f]">newest first</p>
        </div>

        <div className="mt-10 border-t border-[#171714]">
          {changelog.map((entry) => (
            <div key={entry.id} className="mono-row">
              <p className="mono text-[#68675f]">{entry.years}</p>
              <div>
                <h3 className="font-serif text-2xl leading-tight">{entry.role}</h3>
                <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{entry.org}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link href="/about" className="text-link">Full history, teaching, and books</Link>
        </div>
      </div>
    </section>
  );
}
