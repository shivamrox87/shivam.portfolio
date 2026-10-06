import { invariants } from "@/server/data";

export default function InvariantList() {
  return (
    <section className="border-t border-[#cfcabf]" aria-labelledby="invariants-heading">
      <div className="site-shell page-section">
        <div className="panel">
          <div className="panel-head">
            <p className="panel-id">invariants</p>
            <p className="panel-id">must hold true · not aspirational</p>
          </div>

          <div className="panel-body pt-0 md:pt-0">
            <h2 id="invariants-heading" className="sr-only">Invariants</h2>
            <div className="border-t border-[#e4e0d5]">
              {invariants.map((invariant, index) => (
                <div
                  key={invariant.title}
                  className="grid gap-2 border-b border-[#e4e0d5] py-4 last:border-b-0 sm:grid-cols-[46px_0.42fr_0.58fr] sm:gap-6"
                >
                  <span className="font-mono text-[11px] tabular-nums text-[#b84a2b]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-serif text-[20px] leading-tight text-[#171714]">
                      {invariant.title}
                    </h3>
                    <p className="mt-1.5 font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-[#8a857a]">
                      learned in {invariant.learned}
                    </p>
                  </div>
                  <p className="text-[12px] leading-6 text-[#6e6a60]">{invariant.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
