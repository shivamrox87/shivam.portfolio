import { caseStudies } from "@/server/data";

/** The chain a request travels. Authored framing — this is a concept, not a fact. */
const STAGES = [
  { id: "01", name: "application", note: "internal products and workflows" },
  { id: "02", name: "identity & access", note: "who may use what, against which data" },
  { id: "03", name: "model gateway", note: "abstraction without hiding failures" },
  { id: "04", name: "routing & admission", note: "what gets through, on whose budget" },
  { id: "05", name: "evaluation", note: "was the output actually good" },
  { id: "06", name: "observability", note: "what happened, and to whom" },
];

/** Derived from the case study rather than restated, so the diagram cannot drift. */
const PROVIDERS = caseStudies.find((entry) => entry.slug === "enterprise-ai")?.stack ?? [];

export default function LayerSchematic() {
  return (
    <section className="border-t border-[#cfcabf]" aria-labelledby="layer-heading">
      <div className="site-shell page-section">
        <div className="inverted grain">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-b border-[#3a3833] px-4 py-2">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8d887c]">
              the layer
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8d887c]">
              request path · conceptual public view
            </p>
          </div>

          <div className="p-4 md:p-8">
            <h2 id="layer-heading" className="max-w-[620px] font-serif text-3xl leading-tight text-[#f4f1e6] md:text-4xl">
              What a request passes through before a model sees it.
            </h2>
            <p className="mt-5 max-w-[560px] text-sm leading-7 text-[#b8b3a5]">
              Most of the work is not in the model. It is in every stage either side of it — and
              each one has to hold when the environment is regulated and the stakes are real.
            </p>

            <ol className="mt-10 flex flex-col gap-2 md:flex-row md:items-stretch md:gap-0">
              {STAGES.map((stage, index) => (
                <li key={stage.id} className="flex flex-col md:flex-1 md:flex-row md:items-center">
                  <div className="w-full border border-[#4a4741] bg-[#232219] px-3 py-3 md:min-h-[136px]">
                    <p className="font-mono text-[10px] tracking-[0.18em] text-[#e0876a]">{stage.id}</p>
                    <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.1em] leading-tight text-[#f4f1e6]">
                      {stage.name}
                    </p>
                    <p className="mt-2 text-[11px] leading-5 text-[#8d887c]">{stage.note}</p>
                  </div>
                  {index < STAGES.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="mx-auto h-4 w-px bg-[#4a4741] md:mx-0 md:h-px md:w-4 md:shrink-0"
                    />
                  ) : null}
                </li>
              ))}
            </ol>

            <div className="mt-8 border-t border-[#3a3833] pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8d887c]">
                providers and platforms
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {PROVIDERS.map((provider) => (
                  <li
                    key={provider}
                    className="border border-[#4a4741] px-2.5 py-1 font-mono text-[11px] text-[#ddd8c9]"
                  >
                    {provider}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-6 max-w-[560px] font-mono text-[10px] leading-5 uppercase tracking-[0.12em] text-[#6f6b62]">
              conceptual public architecture · implementation details are scoped to protect
              confidential systems
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
