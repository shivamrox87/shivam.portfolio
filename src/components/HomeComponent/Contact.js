import Link from "next/link";
import { service, ticket } from "@/app/home-data";

export default function Contact() {
  return (
    <section className="border-t border-[#C7C9C4]" aria-labelledby="contact-heading">
      <div className="site-shell page-section">
        <h2 id="contact-heading" className="display-title max-w-[760px]">
          {ticket.heading}
        </h2>
        <p className="mt-8 max-w-[560px] body-copy">{ticket.intro}</p>

        <div className="mt-12 grid gap-x-12 gap-y-6 border-t border-[#16181B] pt-8 sm:grid-cols-3">
          {ticket.kinds.map((kind) => (
            <div key={kind.label}>
              <h3 className="font-serif text-[19px] leading-tight text-[#16181B]">{kind.label}</h3>
              <p className="mt-2 text-[15px] leading-7 text-[#3A3F45]">{kind.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/connect"
            className="inline-flex bg-[#16181B] px-6 py-3 text-[15px] font-semibold text-[#EDEEEA] transition-colors hover:bg-[#1F4FD8]"
          >
            Write to me
          </Link>
          <a href={`mailto:${service.email}`} className="text-link">
            {service.email}
          </a>
        </div>
      </div>
    </section>
  );
}
