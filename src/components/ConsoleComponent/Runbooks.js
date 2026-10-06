import Link from "next/link";
import { blogs } from "@/server/data";
import { runbooks } from "@/app/home-data";

export default function Runbooks() {
  const list = runbooks();

  return (
    <section id="writing" className="scroll-mt-20 border-t border-[#cfcabf]" aria-labelledby="runbooks-heading">
      <div className="site-shell page-section">
        <div className="panel">
          <div className="panel-head">
            <p className="panel-id">runbooks</p>
            <p className="panel-id">{blogs.length} published · most one thesis each</p>
          </div>

          <div className="panel-body pt-0 md:pt-0">
            <h2 id="runbooks-heading" className="sr-only">Runbooks</h2>
            <p className="max-w-[620px] py-5 text-[12px] leading-6 text-[#6e6a60]">
              &ldquo;A model gateway needs an admission policy&rdquo; is a procedure, not a
              headline, so the essays are filed as what they already are.
            </p>
            <ol className="border-t border-[#e4e0d5]">
              {list.map((runbook) => (
                <li key={runbook.slug} className="border-b border-[#e4e0d5] last:border-b-0">
                  <Link
                    href={runbook.href}
                    className="grid gap-1 py-3.5 transition-colors hover:bg-[#f4f2ec] sm:grid-cols-[104px_1fr] sm:items-baseline sm:gap-5"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a857a]">
                      {runbook.date}
                    </span>
                    <span className="font-serif text-[19px] leading-snug text-[#171714] md:text-[21px]">
                      {runbook.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-wrap gap-x-7 gap-y-2 border-t border-[#cfcabf] bg-[#f4f2ec] px-4 py-3">
            <Link href="/writing" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6e6a60] hover:text-[#b84a2b]">
              all {blogs.length} runbooks
            </Link>
            <Link href="/research" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6e6a60] hover:text-[#b84a2b]">
              investigations
            </Link>
            <Link href="/sessions" className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#6e6a60] hover:text-[#b84a2b]">
              teaching
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
