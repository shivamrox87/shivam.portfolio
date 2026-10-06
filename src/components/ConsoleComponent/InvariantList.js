import { invariants } from "@/server/data";

export default function InvariantList() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="invariants-heading">
      <div className="site-shell page-section">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 id="invariants-heading" className="section-title">Invariants</h2>
          <p className="mono text-[#68675f]">must hold true, not aspirational</p>
        </div>

        <div className="mt-10 border-t border-[#171714]">
          {invariants.map((invariant, index) => (
            <div
              key={invariant.title}
              className="grid gap-3 border-b border-[#d8d5cc] py-6 sm:grid-cols-[40px_0.42fr_0.58fr] sm:gap-8"
            >
              <span className="mono text-[#b84a2b]">{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="font-serif text-2xl leading-tight">{invariant.title}</h3>
                <p className="mono mt-2 text-[#68675f]">learned in {invariant.learned}</p>
              </div>
              <p className="text-sm leading-7 text-[#4f4e48]">{invariant.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
