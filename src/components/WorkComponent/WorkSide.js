"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { caseStudies, selectedWork } from "@/server/data";
import { useEffect, useState } from "react";

const WorkSide = () => {
  const [headerColor, setHeaderColor] = useState("#0d0d0d");

  useEffect(() => {
    const sections = [
      { id: "work-hero", color: "#0d0d0d" },
      { id: "professional-work", color: "#e9e9e7" },
      { id: "independent-work", color: "#0d0d0d" },
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

      <section id="work-hero" className="bg-[#f4f2ed] px-5 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">Selected work</p>
          <h1 className="mt-5 max-w-5xl text-5xl font-medium leading-[1.04] text-[#0d0d0d] md:text-7xl">
            AI systems and products built under real constraints.
          </h1>
          <div className="mt-10 grid gap-6 border-t border-[#0d0d0d] pt-7 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-sm uppercase tracking-[0.16em] text-[#0d0d0d]/50">Scope</p>
            <p className="max-w-2xl text-lg leading-8 text-[#0d0d0d]/70">
              Professional delivery across enterprise AI, applied AI products, backend systems,
              and cloud infrastructure, alongside independent developer-tool work.
            </p>
          </div>
        </div>
      </section>

      <section id="professional-work" className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 border-b border-white/20 pb-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">Professional delivery</p>
            <h2 className="text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
              Work delivered inside operating teams and production environments.
            </h2>
          </div>

          {selectedWork.slice(0, 2).map((item, index) => (
            <article key={item.name} className="grid gap-8 border-b border-white/20 py-10 md:grid-cols-[0.12fr_0.58fr_1.3fr] md:gap-10 md:py-12">
              <p className="text-sm text-[#e9e9e7]/50">0{index + 1}</p>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#EB5939]">{item.status}</p>
                <h3 className="mt-3 text-2xl font-medium text-[#e9e9e7] md:text-3xl">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#e9e9e7]/60">{item.context}</p>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-[#e9e9e7]/70">{item.description}</p>
                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {item.scope.map((scope) => (
                    <span key={scope} className="text-xs uppercase tracking-[0.14em] text-[#e9e9e7]/50">{scope}</span>
                  ))}
                </div>
                <Link href={item.href} className="mt-7 inline-flex border-b border-[#e9e9e7] pb-1 text-sm font-medium text-[#e9e9e7] transition hover:border-[#EB5939] hover:text-[#EB5939]">
                  {item.name === "Enterprise AI delivery" ? "View professional background" : "Read case study"}
                </Link>
              </div>
            </article>
          ))}

          <p className="mt-8 max-w-2xl text-sm leading-6 text-[#e9e9e7]/50">
            Some implementation details from client and employer work are intentionally omitted.
          </p>
        </div>
      </section>

      <section id="independent-work" className="bg-[#f4f2ed] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 border-b border-[#0d0d0d] pb-8 md:grid-cols-[0.7fr_1.3fr] md:items-end">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">Independent products</p>
            <h2 className="text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              Current product development, labelled by stage.
            </h2>
          </div>

          {caseStudies.slice(0, 2).map((study, index) => (
            <article key={study.slug} className="grid gap-8 border-b border-[#0d0d0d]/20 py-10 md:grid-cols-[0.12fr_0.58fr_1.3fr] md:gap-10 md:py-12">
              <p className="text-sm text-[#0d0d0d]/50">0{index + 1}</p>
              <div>
                <p className="text-xs uppercase tracking-[0.16em] text-[#EB5939]">{study.status} · {study.date}</p>
                <h3 className="mt-3 text-2xl font-medium text-[#0d0d0d] md:text-3xl">{study.heading}</h3>
                <p className="mt-2 text-sm leading-6 text-[#0d0d0d]/60">{study.category}</p>
              </div>
              <div>
                <p className="max-w-2xl text-lg leading-8 text-[#0d0d0d]/70">{study.summary}</p>
                <p className="mt-5 max-w-2xl text-sm leading-7 text-[#0d0d0d]/60">{study.outcome}</p>
                <Link href={`/work/${study.slug}`} className="mt-7 inline-flex border-b border-[#0d0d0d] pb-1 text-sm font-medium text-[#0d0d0d] transition hover:border-[#EB5939] hover:text-[#EB5939]">
                  View product notes
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default WorkSide;
