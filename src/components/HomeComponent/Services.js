import Link from "next/link";
import { decommissioned, operational, proposed } from "@/app/home-data";

function Row({ live, name, status, note, href }) {
  return (
    <li className="flex gap-4 border-t border-[#DCDDD8] py-5">
      <span aria-hidden="true" className={`led mt-2.5 ${live ? "led-live" : "led-dead"}`} />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-4">
          <span className="font-serif text-[21px] leading-tight text-[#16181B]">
            {href ? (
              <Link href={href} className="transition-colors hover:text-[#1F4FD8]">
                {name}
              </Link>
            ) : (
              name
            )}
          </span>
          <span className="text-[13px] text-[#6B7076]">{status}</span>
        </div>
        {note ? <p className="mt-2 max-w-[560px] text-[15px] leading-7 text-[#3A3F45]">{note}</p> : null}
      </div>
    </li>
  );
}

export default function Services() {
  return (
    <section className="border-t border-[#C7C9C4]" aria-labelledby="services-heading">
      <div className="site-shell page-section">
        <h2 id="services-heading" className="section-title max-w-[700px]">
          What is running, and what I stopped
        </h2>

        <ul className="mt-12">
          {operational.map((entry) => (
            <Row key={`run-${entry.name}`} live {...entry} />
          ))}
          {decommissioned.map((entry) => (
            <Row key={`stop-${entry.name}`} live={false} {...entry} />
          ))}
        </ul>

        <p className="mt-8 max-w-[620px] text-[13px] leading-6 text-[#6B7076]">
          Also explored and shelved rather than shipped: {proposed.join(", ")}.
        </p>
      </div>
    </section>
  );
}
