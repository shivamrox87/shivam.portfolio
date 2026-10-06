import Link from "next/link";
import { service, ticket } from "@/app/home-data";

export default function OpenTicket() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="ticket-heading">
      <div className="site-shell page-section">
        <p className="mono text-[#b84a2b]">{ticket.label}</p>
        <h2 id="ticket-heading" className="display-title mt-4 max-w-[760px]">{ticket.heading}</h2>
        <p className="mt-8 max-w-[620px] body-copy">{ticket.intro}</p>

        <dl className="mt-12 border-t border-[#171714]">
          {ticket.kinds.map((kind) => (
            <div key={kind.label} className="grid gap-2 border-b border-[#d8d5cc] py-6 sm:grid-cols-[0.32fr_0.68fr] sm:gap-8">
              <dt className="font-serif text-xl">{kind.label}</dt>
              <dd className="text-sm leading-7 text-[#4f4e48]">{kind.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/connect"
            className="inline-flex bg-[#171714] px-6 py-3 text-sm font-semibold text-[#fbfaf7] transition-colors hover:bg-[#b84a2b]"
          >
            Open a ticket
          </Link>
          <a href={`mailto:${service.email}`} className="text-link">
            or email {service.email}
          </a>
        </div>
      </div>
    </section>
  );
}
