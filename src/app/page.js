'use client';

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  builderPrinciples,
  companiesData,
  currentBuilds,
  timelineHighlights,
  writingFocus,
} from "@/server/data";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("#e9e9e7");

  useEffect(() => {
    const sections = [
      { id: "hero", color: "#e9e9e7" },
      { id: "proof", color: "#0d0d0d" },
      { id: "building", color: "#e9e9e7" },
      { id: "timeline", color: "#0d0d0d" },
      { id: "writing", color: "#0d0d0d" },
    ];

    const handleScroll = () => {
      const headerHeight = 70;
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (!element) {
          return;
        }

        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;

        if (
          scrollPosition >= sectionTop - headerHeight &&
          scrollPosition < sectionTop + sectionHeight - headerHeight
        ) {
          setHeaderColor(section.color);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-[#0d0d0d]">
      <Header textColor={headerColor} />

      <section
        id="hero"
        className="relative flex min-h-[82vh] items-end overflow-hidden bg-[#0d0d0d] px-5 pb-14 pt-28 md:min-h-[88vh] md:px-10 md:pb-20 md:pt-36"
      >
        <img
          src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735629588/uoGweUB1Hmu5gOVlOQ7RI0QXup8_rf6xoh.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.94)_0%,rgba(13,13,13,0.72)_48%,rgba(13,13,13,0.2)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,13,13,0.75)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.06]" />

        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="max-w-[760px]">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#EB5939] md:text-sm">
              AI Engineer · Product Builder · Founder
            </p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.04] text-[#e9e9e7] md:text-7xl">
              I build useful AI products.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#e9e9e7]/75 md:text-lg md:leading-8">
              From developer tools to enterprise systems, I turn complex AI capabilities into
              products people can understand, trust, and use.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-[#E9E9E7] px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-[#E9E9E7]"
              >
                Explore My Work
              </Link>
              <Link
                href="/building"
                className="inline-flex items-center justify-center border border-[#e9e9e7]/40 bg-[#0d0d0d]/20 px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#e9e9e7] backdrop-blur-sm transition hover:border-[#EB5939] hover:bg-[#EB5939]"
              >
                What I&apos;m Building
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Positioning
            </p>
            <h2 className="text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              A connected body of work, built around leverage.
            </h2>
            <p className="text-base leading-7 text-[#0d0d0d]/75">
              The strongest narrative here is not &quot;AI consultant&quot; in isolation. It is the
              combination of enterprise delivery, product building, and public-facing
              teaching. Each project is a different expression of the same goal: making complex
              technology easier to understand and use.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {builderPrinciples.map((principle, index) => (
              <div
                key={principle}
                className="rounded-3xl border border-[#0d0d0d]/10 bg-white p-6"
              >
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/45">
                  0{index + 1}
                </p>
                <p className="mt-5 text-lg leading-7 text-[#0d0d0d]">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="building" className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                Currently Building
              </p>
              <h2 className="mt-4 text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
                Products and systems that make the builder story legible.
              </h2>
            </div>
            <Link
              href="/work"
              className="inline-flex w-fit items-center justify-center border border-[#e9e9e7]/20 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#e9e9e7] transition hover:border-[#EB5939] hover:bg-[#EB5939]"
            >
              Full Work Archive
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {currentBuilds.map((item) => (
              <Link
                key={item.slug}
                href={`/work/${item.slug}`}
                className={`group rounded-[32px] bg-gradient-to-br ${item.accent} p-[1px]`}
              >
                <div className="flex h-full flex-col rounded-[31px] bg-[#0d0d0d] p-7 transition group-hover:bg-[#141414]">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#EB5939]">
                      {item.stage}
                    </p>
                    <span className="text-sm text-[#e9e9e7]/55">View case study</span>
                  </div>
                  <h3 className="mt-8 text-3xl font-medium text-[#e9e9e7]">{item.name}</h3>
                  <p className="mt-4 text-base leading-7 text-[#e9e9e7]/72">{item.summary}</p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    {item.focus.map((focusItem) => (
                      <span
                        key={focusItem}
                        className="rounded-full border border-[#e9e9e7]/15 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#e9e9e7]/75"
                      >
                        {focusItem}
                      </span>
                    ))}
                  </div>
                  <p className="mt-8 text-sm leading-6 text-[#e9e9e7]/55">{item.statusNote}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="timeline" className="bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Timeline
            </p>
            <h2 className="mt-4 max-w-2xl text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              The public narrative is strongest when it connects work history to product direction.
            </h2>
            <div className="mt-10 space-y-5">
              {timelineHighlights.map((item) => (
                <div key={item.year} className="rounded-3xl border border-[#0d0d0d]/10 bg-white p-6">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                    {item.year}
                  </p>
                  <h3 className="mt-3 text-2xl font-medium text-[#0d0d0d]">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[#0d0d0d]/75">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[#0d0d0d] p-8 md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Experience Base
            </p>
            <div className="mt-8 space-y-6">
              {companiesData.slice(0, 4).map((company) => (
                <div key={company.id} className="border-b border-white/10 pb-6 last:border-b-0 last:pb-0">
                  <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <h3 className="text-xl font-medium text-[#e9e9e7]">{company.companyName}</h3>
                    <span className="text-sm uppercase tracking-[0.15em] text-[#e9e9e7]/55">
                      {company.activeYears}
                    </span>
                  </div>
                  <p className="mt-3 text-sm font-medium text-[#EB5939]">{company.position}</p>
                  <p className="mt-3 text-sm leading-6 text-[#e9e9e7]/70">{company.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="writing" className="bg-[#f5f3ef] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Writing Direction
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              Notes from the decisions behind shipped work.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#0d0d0d]/75">
              I write about the engineering and product questions that appear when AI systems
              meet real users, operational constraints, and production expectations.
            </p>
          </div>

          <div className="grid gap-4">
            {writingFocus.map((topic, index) => (
              <div
                key={topic}
                className="rounded-3xl border border-[#0d0d0d]/10 bg-white px-6 py-7"
              >
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/45">
                  0{index + 1}
                </p>
                <p className="mt-4 text-xl leading-8 text-[#0d0d0d]">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-[32px] border border-white/10 bg-white/5 p-8 md:flex-row md:items-end md:justify-between md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Next Layer
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#e9e9e7] md:text-4xl">
              Have a difficult AI, automation, or developer-workflow problem? Let&apos;s examine
              whether a focused product can solve it.
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-[#E9E9E7] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-[#E9E9E7]"
            >
              Read the Work
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center border border-[#e9e9e7]/20 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#e9e9e7] transition hover:border-[#EB5939] hover:bg-[#EB5939]"
            >
              Let&apos;s Talk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
