import Link from "next/link";
import { blogs } from "@/server/data";
import { runbooks } from "@/app/home-data";

export default function Runbooks() {
  const list = runbooks();

  return (
    <section id="writing" className="scroll-mt-20 border-t border-[#C7C9C4]" aria-labelledby="runbooks-heading">
      <div className="site-shell page-section">
        <h2 id="runbooks-heading" className="section-title max-w-[700px]">
          The essays are runbooks
        </h2>
        <p className="mt-6 max-w-[620px] body-copy">
          &ldquo;A model gateway needs an admission policy&rdquo; is a procedure, not a
          headline. They are written as instructions for the layer below the model, which is
          why the titles all have the same shape.
        </p>

        <ol className="mt-12 border-t border-[#16181B]">
          {list.map((runbook) => (
            <li key={runbook.slug} className="border-b border-[#DCDDD8]">
              <Link href={runbook.href} className="group grid gap-1 py-5 sm:grid-cols-[130px_1fr] sm:items-baseline sm:gap-8">
                <span className="text-[13px] text-[#6B7076]">{runbook.date}</span>
                <span className="font-serif text-[21px] leading-snug text-[#16181B] transition-colors group-hover:text-[#1F4FD8] md:text-[24px]">
                  {runbook.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          <Link href="/writing" className="text-link">All {blogs.length} essays</Link>
          <Link href="/research" className="text-link">Investigations</Link>
          <Link href="/sessions" className="text-link">Teaching</Link>
        </div>
      </div>
    </section>
  );
}
