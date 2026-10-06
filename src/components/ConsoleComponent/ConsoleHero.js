import { blogs } from "@/server/data";
import { decommissioned, operational, service } from "@/app/home-data";
import LiveReadout from "./LiveReadout";

function Cell({ label, children, accent = false }) {
  return (
    <div className="border-l border-[#3a3833] pl-4 first:border-l-0 first:pl-0">
      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#8d887c]">{label}</p>
      <p className={`mt-1.5 font-mono text-[15px] tabular-nums ${accent ? "text-[#e0876a]" : "text-[#e8e4d8]"}`}>
        {children}
      </p>
    </div>
  );
}

export default function ConsoleHero() {
  return (
    <section className="inverted grain" aria-labelledby="console-headline">
      <div className="site-shell py-10 md:py-14">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[#8d887c]">
          <span className="inline-flex items-center gap-2 text-[#7fc79b]">
            <span aria-hidden="true" className="led led-live" />
            {service.status.toLowerCase()}
          </span>
          <span className="text-[#3a3833]">/</span>
          <span>service: senior ai engineer</span>
          <span className="text-[#3a3833]">/</span>
          <span>region: {service.region}</span>
          <span className="text-[#3a3833]">/</span>
          <span>rev {service.version}</span>
        </div>

        <h1
          id="console-headline"
          className="mt-9 max-w-[900px] font-serif text-[40px] font-normal leading-[0.95] tracking-[-0.035em] text-[#f4f1e6] md:text-[76px]"
        >
          {service.headline}
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_0.95fr] md:gap-16">
          <p className="max-w-[560px] font-sans text-[17px] leading-8 text-[#b8b3a5]">
            {service.subhead}
          </p>
          <p className="max-w-[520px] self-end border-l-2 border-[#b84a2b] pl-5 font-serif text-lg leading-8 text-[#ddd8c9] md:text-xl">
            {service.note}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-y-6 border-t border-[#3a3833] pt-6 sm:grid-cols-4">
          <Cell label="uptime">
            <LiveReadout since={service.onlineSince} />
          </Cell>
          <Cell label="running">{operational.length}</Cell>
          <Cell label="decommissioned" accent>
            {decommissioned.length}
          </Cell>
          <Cell label="runbooks">{blogs.length}</Cell>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[11px] uppercase tracking-[0.16em] text-[#8d887c]">
          {service.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-[#e0876a]">
              {link.label} ↗
            </a>
          ))}
          <a href={`mailto:${service.email}`} className="transition-colors hover:text-[#e0876a]">
            {service.email}
          </a>
        </div>
      </div>
    </section>
  );
}
