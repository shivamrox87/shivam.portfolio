import { caseStudies } from "@/server/data";

/** The chain a request travels. Authored framing — a concept, not a claim. */
const STAGES = [
  { id: "01", name: "the application", note: "an internal product or a workflow" },
  { id: "02", name: "identity and access", note: "who may use what, against which data" },
  { id: "03", name: "the gateway", note: "abstraction that does not hide failures" },
  { id: "04", name: "routing and admission", note: "what gets through, on whose budget" },
  { id: "05", name: "evaluation", note: "whether the output was actually good" },
  { id: "06", name: "observability", note: "what happened, and to whom" },
];

/** Derived from the case study rather than restated, so the diagram cannot drift. */
const PROVIDERS = caseStudies.find((entry) => entry.slug === "enterprise-ai")?.stack ?? [];

export default function Layer() {
  return (
    <section className="border-t border-[#C7C9C4]" aria-labelledby="layer-heading">
      <div className="site-shell page-section">
        <h2 id="layer-heading" className="section-title max-w-[760px]">
          Most of the work is not in the model
        </h2>
        <p className="mt-6 max-w-[620px] body-copy">
          It is in everything a request passes through either side of it, and every one of
          those stages has to hold when the environment is regulated and the stakes are real.
        </p>

        <ol className="mt-12 border-t border-[#16181B]">
          {STAGES.map((stage) => (
            <li
              key={stage.id}
              className="grid gap-2 border-b border-[#DCDDD8] py-5 sm:grid-cols-[52px_0.42fr_0.58fr] sm:items-baseline sm:gap-8"
            >
              <span className="font-serif text-[15px] text-[#1F4FD8]">{stage.id}</span>
              <span className="font-serif text-[21px] leading-tight text-[#16181B]">{stage.name}</span>
              <span className="text-[15px] leading-7 text-[#3A3F45]">{stage.note}</span>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-[13px] leading-6 text-[#6B7076]">
          Sitting behind it: {PROVIDERS.join(", ")}.
        </p>
        <p className="mt-4 max-w-[560px] text-[13px] leading-6 text-[#6B7076]">
          A conceptual public architecture. Implementation detail is scoped to protect
          confidential systems.
        </p>
      </div>
    </section>
  );
}
