export default function ArchitectureFlow({ title, steps }) {
  return (
    <div role="img" aria-label={`${title} architecture flow`} className="mt-8">
      <div className="grid md:grid-cols-[repeat(var(--step-count),minmax(0,1fr))]" style={{ "--step-count": steps.length }}>
        {steps.map((step, index) => (
          <div key={step} className="relative border-x border-t border-[#d8d5cc] p-5 last:border-b md:border-b md:border-r-0 md:last:border-r">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#b84a2b]">Stage {index + 1}</p>
            <p className="mt-3 text-sm leading-6 text-[#302f2b]">{step}</p>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="absolute -bottom-3 left-1/2 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center bg-[#fbfaf7] text-[#b84a2b] md:-right-3 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0">
                <span className="md:hidden">↓</span>
                <span className="hidden md:inline">→</span>
              </span>
            ) : null}
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs leading-6 text-[#68675f]">Conceptual public architecture. Implementation details are intentionally scoped to protect confidential systems.</p>
    </div>
  );
}
