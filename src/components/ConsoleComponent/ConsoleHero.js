import { service } from "@/app/home-data";

export default function ConsoleHero() {
  return (
    <section className="site-shell page-section" aria-labelledby="console-headline">
      <div className="mono flex flex-wrap items-center gap-x-4 gap-y-2 text-[#68675f]">
        <span className="inline-flex items-center gap-2 text-[#3f7d4e]">
          <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rounded-full bg-[#3f7d4e]" />
          {service.status}
        </span>
        <span aria-hidden="true" className="text-[#d8d5cc]">|</span>
        <span>service: senior ai engineer</span>
        <span aria-hidden="true" className="text-[#d8d5cc]">|</span>
        <span>region: {service.region}</span>
        <span aria-hidden="true" className="text-[#d8d5cc]">|</span>
        <span>rev: {service.version}</span>
        <span aria-hidden="true" className="text-[#d8d5cc]">|</span>
        <span>online since {service.onlineSince}</span>
      </div>

      <h1 id="console-headline" className="display-title mt-8 max-w-[880px]">
        {service.headline}
      </h1>

      <p className="mt-8 max-w-[680px] body-copy">{service.subhead}</p>

      <p className="mt-10 max-w-[680px] border-l-2 border-[#b84a2b] pl-5 font-serif text-xl leading-8 text-[#171714] md:text-2xl">
        {service.note}
      </p>

      <div className="mono mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#d8d5cc] pt-6 text-[#68675f]">
        {service.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-[#171714]">
            {link.label} ↗
          </a>
        ))}
        <a href={`mailto:${service.email}`} className="hover:text-[#171714]">
          {service.email}
        </a>
      </div>
    </section>
  );
}
