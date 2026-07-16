'use client';

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Link from "next/link";
import { caseStudies, currentBuilds } from "@/server/data";

const WorkSide = () => {
  const [headerColor, setHeaderColor] = useState("#e9e9e7");

  useEffect(() => {
    const sections = [
      { id: "work-hero", color: "#e9e9e7" },
      { id: "case-studies", color: "#e9e9e7" },
      { id: "active-builds", color: "#0d0d0d" },
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
    <>
      <Header textColor={headerColor} />

      <section
        id="work-hero"
        className="relative overflow-hidden bg-[#0d0d0d] px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(235,89,57,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(69,123,157,0.2),_transparent_30%)]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.08]" />
        <div className="relative mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Work
            </p>
            <h1 className="mt-4 text-4xl font-medium leading-tight text-[#e9e9e7] md:text-6xl">
              Case studies that show how I think about AI, products, and system design.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#e9e9e7]/75">
              These stories cover the problem, the product decision, and the system behind it.
              Together they show how I move from an ambiguous opportunity to a useful working
              product.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              How I Approach the Work
            </p>
            <div className="mt-6 space-y-5">
              <div>
                <h2 className="text-xl font-medium text-[#e9e9e7]">Builder narrative</h2>
                <p className="mt-2 text-sm leading-6 text-[#e9e9e7]/70">
                  Products and systems are the primary story, not just roles or skill labels.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-medium text-[#e9e9e7]">Technical depth</h2>
                <p className="mt-2 text-sm leading-6 text-[#e9e9e7]/70">
                  Each case study includes problem framing, architecture thinking, and applied
                  stack decisions.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-medium text-[#e9e9e7]">Range</h2>
                <p className="mt-2 text-sm leading-6 text-[#e9e9e7]/70">
                  The portfolio spans developer tooling, enterprise AI, workflows, and product
                  execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={study.slug}
              className="grid gap-8 border-t border-white/10 py-8 first:border-t-0 first:pt-0 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                    {study.category}
                  </span>
                  <span className="text-sm uppercase tracking-[0.16em] text-[#e9e9e7]/50">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h2 className="text-3xl font-medium text-[#e9e9e7] md:text-4xl">
                    {study.heading}
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-[#e9e9e7]/75">{study.subHeading}</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#e9e9e7]/70">
                    {study.status}
                  </span>
                  <span className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#e9e9e7]/70">
                    {study.date}
                  </span>
                </div>
                <Link
                  href={`/work/${study.slug}`}
                  className="inline-flex w-fit items-center justify-center bg-[#E9E9E7] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-[#E9E9E7]"
                >
                  Read Case Study
                </Link>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-[#141414] p-7">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                      Problem
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#e9e9e7]/75">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                      Outcome
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[#e9e9e7]/75">{study.outcome}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                    Stack + Focus
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {study.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#e9e9e7]/75"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="active-builds" className="bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Product Universe
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              Different products, one consistent direction.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#0d0d0d]/75">
              The products span developer productivity, AI workflows, collaboration, and
              operational software. The common thread is removing friction from complex work.
            </p>
          </div>

          <div className="grid gap-4">
            {currentBuilds.map((build) => (
              <div key={build.slug} className="rounded-[28px] border border-[#0d0d0d]/10 bg-white p-6">
                <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-medium text-[#0d0d0d]">{build.name}</h3>
                  <span className="text-sm uppercase tracking-[0.16em] text-[#EB5939]">
                    {build.stage}
                  </span>
                </div>
                <p className="mt-4 text-base leading-7 text-[#0d0d0d]/75">{build.summary}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {build.focus.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#0d0d0d]/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#0d0d0d]/60"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkSide;
