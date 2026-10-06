import Link from "next/link";
import { decommissioned, service } from "@/app/home-data";

/**
 * The opening is the kill list.
 *
 * Two of the three products he has taken to market were shut down on purpose in
 * September 2026. Almost no portfolio says what it stopped building, and his own
 * source-of-truth content doc calls that decision the most differentiating thing
 * he has. So the page opens there rather than with a positioning statement, and
 * the names are struck through because that is what decommissioning looks like.
 */
export default function Hero() {
  const stopped = decommissioned.map((entry) => entry.name);

  return (
    <section className="site-shell page-section" aria-labelledby="hero-headline">
      <p className="text-[15px] leading-7 text-[#6B7076]">
        Shivam Maurya — senior AI engineer at AlphaFMC, founder of ExplainGitHub.
      </p>

      <h1
        id="hero-headline"
        className="mt-10 max-w-[960px] font-serif text-[38px] font-normal leading-[1.06] tracking-[-0.03em] text-[#16181B] md:text-[68px] md:leading-[1.02]"
      >
        {stopped.map((name, index) => (
          <span key={name}>
            <span className="struck">{name}</span>
            {index < stopped.length - 2 ? ", " : null}
            {index === stopped.length - 2 ? " and " : null}
          </span>
        ))}{" "}
        are dead.
      </h1>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1fr] md:gap-16">
        <div>
          <p className="body-copy max-w-[520px]">
            I shut both down in September 2026, deliberately, to put everything behind
            one product instead of three. Deciding to stop took me longer to learn than
            anything else I have done, so it is the first thing on this page.
          </p>
          <p className="mt-6 max-w-[520px] text-[15px] leading-7 text-[#3A3F45]">
            The work itself is the unglamorous part of AI: model access, identity,
            evaluation, routing, and the deployment that decides whether any of it runs
            when a real organisation depends on it. The model is the smallest piece.
          </p>
        </div>

        <div className="self-end">
          <p className="text-[13px] leading-6 text-[#6B7076]">What is still running</p>
          <p className="mt-2 font-serif text-2xl leading-tight text-[#16181B]">
            ExplainGitHub
          </p>
          <p className="mt-2 max-w-[380px] text-[15px] leading-7 text-[#3A3F45]">
            Repository intelligence, and the first product of mine that anyone paid for.
          </p>
          <Link href="/work/explaingithub" className="text-link mt-4">
            Read the case study
          </Link>
        </div>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#C7C9C4] pt-6 text-[14px] text-[#6B7076]">
        {service.links.map((link) => (
          <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="hover:text-[#1F4FD8]">
            {link.label}
          </a>
        ))}
        <a href={`mailto:${service.email}`} className="hover:text-[#1F4FD8]">
          {service.email}
        </a>
      </div>
    </section>
  );
}
