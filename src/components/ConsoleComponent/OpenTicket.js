import Link from "next/link";
import { service, ticket } from "@/app/home-data";

export default function OpenTicket() {
  return (
    <section className="border-t border-[#cfcabf]" aria-labelledby="ticket-heading">
      <div className="site-shell page-section">
        <div className="panel">
          <div className="panel-head">
            <p className="panel-id">{ticket.label}</p>
            <p className="panel-id">one door · I answer all of them</p>
          </div>

          <div className="panel-body">
            <h2 id="ticket-heading" className="max-w-[640px] font-serif text-[32px] leading-[1.05] tracking-[-0.025em] text-[#171714] md:text-[46px]">
              {ticket.heading}
            </h2>
            <p className="mt-5 max-w-[540px] text-[14px] leading-7 text-[#6e6a60]">{ticket.intro}</p>

            <dl className="mt-9 grid border-t border-l border-[#e4e0d5] sm:grid-cols-3">
              {ticket.kinds.map((kind) => (
                <div key={kind.label} className="border-b border-r border-[#e4e0d5] p-4">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#b84a2b]">
                    {kind.label}
                  </dt>
                  <dd className="mt-2.5 text-[12px] leading-6 text-[#6e6a60]">{kind.body}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="/connect"
                className="inline-flex bg-[#171714] px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-[#fbfaf7] transition-colors hover:bg-[#b84a2b]"
              >
                open a ticket
              </Link>
              <a href={`mailto:${service.email}`} className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6e6a60] hover:text-[#b84a2b]">
                or email {service.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
