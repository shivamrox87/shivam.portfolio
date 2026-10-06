import Link from "next/link";
import { argumentsBand, resolveEssays, teaching } from "@/app/home-data";

export default function ArgumentLadder() {
  const essays = resolveEssays();

  return (
    <section
      id="writing"
      className="scroll-mt-20 border-t border-[#d8d5cc]"
      aria-labelledby="arguments-heading"
    >
      <div className="site-shell page-section">
        <p className="eyebrow">{argumentsBand.label}</p>
        <h2 id="arguments-heading" className="section-title mt-3 max-w-[760px]">
          {argumentsBand.heading}
        </h2>

        <ol className="mt-12 border-t border-[#171714]">
          {essays.map((essay) => (
            <li key={essay.slug} className="border-b border-[#d8d5cc]">
              <Link href={essay.href} className="group block py-8">
                <h3 className="max-w-[900px] font-serif text-2xl leading-[1.15] tracking-[-0.01em] transition-colors group-hover:text-[#b84a2b] md:text-4xl">
                  {essay.title}
                </h3>
              </Link>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid gap-8 md:grid-cols-[0.35fr_1fr] md:gap-16">
          <p className="eyebrow">Teaching</p>
          <div>
            <p className="max-w-[640px] body-copy">{argumentsBand.teachingIntro}</p>
            <div className="mt-8 border-t border-[#171714]">
              {teaching.community.map((entry) => (
                <div
                  key={entry.title}
                  className="grid gap-2 border-b border-[#d8d5cc] py-5 sm:grid-cols-[0.36fr_0.64fr] sm:gap-8"
                >
                  <h4 className="font-serif text-xl">{entry.title}</h4>
                  <p className="text-sm leading-7 text-[#4f4e48]">{entry.detail}</p>
                </div>
              ))}
              {teaching.books.map((book) => (
                <div key={book.id} className="border-b border-[#d8d5cc] py-5">
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-[#4f4e48] hover:text-[#b84a2b]"
                  >
                    {book.title} ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          {argumentsBand.flowsTo.map((link) => (
            <Link key={link.href} href={link.href} className="text-link">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
