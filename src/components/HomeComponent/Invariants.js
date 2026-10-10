import { invariants } from "@/server/data";

/**
 * No numbering here. These are not a sequence — nothing about "Own the whole
 * system" follows from "Evidence over vibes" — and numbered markers on
 * unordered content is one of the ways a page announces it was generated.
 */
export default function Invariants() {
  return (
    <section className="border-t border-[#C7C9C4]" aria-labelledby="invariants-heading">
      <div className="site-shell page-section">
        <h2 id="invariants-heading" className="section-title max-w-[700px]">
          Seven things I would defend
        </h2>
        <p className="mt-6 max-w-[620px] body-copy">
          Each one cost something to learn, so each one carries what it cost.
        </p>

        <div className="mt-12 border-t border-[#16181B]">
          {invariants.map((invariant) => (
            <div key={invariant.title} className="border-b border-[#DCDDD8] py-5">
              <div className="flex flex-wrap items-baseline gap-x-4">
                <h3 className="font-serif text-[21px] leading-tight text-[#16181B]">
                  {invariant.title}
                </h3>
                <p className="text-[13px] text-[#6B7076]">learned in {invariant.learned}</p>
              </div>
              <p className="mt-2 max-w-[620px] text-[15px] leading-7 text-[#3A3F45]">
                {invariant.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
