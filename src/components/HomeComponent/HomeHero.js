import Link from "next/link";
import { hero, identity } from "@/app/home-data";

export default function HomeHero() {
  return (
    <section className="site-shell page-section" aria-labelledby="hero-headline">
      <h1 id="hero-headline" className="display-title max-w-[880px]">
        {hero.headline}
      </h1>

      <p className="mt-8 max-w-[680px] body-copy">{hero.subhead}</p>

      <p className="mt-10 max-w-[680px] border-l-2 border-[#b84a2b] pl-5 font-serif text-xl leading-8 text-[#171714] md:text-2xl">
        {hero.bridge}
      </p>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[#d8d5cc] pt-6 text-sm text-[#68675f]">
        <span>{identity.location}</span>
        {identity.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#171714]"
          >
            {link.label}
          </a>
        ))}
        <Link href="/connect" className="hover:text-[#171714]">
          Contact
        </Link>
      </div>
    </section>
  );
}
