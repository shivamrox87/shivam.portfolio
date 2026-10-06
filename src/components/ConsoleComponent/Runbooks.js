import Link from "next/link";
import { blogs } from "@/server/data";
import { runbooks } from "@/app/home-data";

export default function Runbooks() {
  const list = runbooks();

  return (
    <section
      id="writing"
      className="scroll-mt-20 border-t border-[#d8d5cc]"
      aria-labelledby="runbooks-heading"
    >
      <div className="site-shell page-section">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 id="runbooks-heading" className="section-title">Runbooks</h2>
          <p className="mono text-[#68675f]">{blogs.length} published</p>
        </div>

        <p className="mt-6 max-w-[620px] body-copy">
          The essays were already written as runbooks — &ldquo;a model gateway needs an admission
          policy&rdquo; is a procedure, not a headline — so that is how they are filed.
        </p>

        <ol className="mt-10 border-t border-[#171714]">
          {list.map((runbook) => (
            <li key={runbook.slug} className="border-b border-[#d8d5cc]">
              <Link href={runbook.href} className="group grid gap-2 py-7 sm:grid-cols-[120px_1fr] sm:gap-8">
                <span className="mono text-[#68675f]">{runbook.date}</span>
                <h3 className="max-w-[760px] font-serif text-2xl leading-[1.15] transition-colors group-hover:text-[#b84a2b] md:text-3xl">
                  {runbook.title}
                </h3>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-10 flex flex-wrap gap-7">
          <Link href="/writing" className="text-link">All {blogs.length} runbooks</Link>
          <Link href="/research" className="text-link">Research</Link>
          <Link href="/sessions" className="text-link">Teaching</Link>
        </div>
      </div>
    </section>
  );
}
