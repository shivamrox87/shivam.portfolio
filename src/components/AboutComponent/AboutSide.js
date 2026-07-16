"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { companiesData } from "@/server/data";
import { useEffect, useState } from "react";

const AboutSide = () => {
  const [headerColor, setHeaderColor] = useState("#0d0d0d");

  useEffect(() => {
    const sections = [
      { id: "about-hero", color: "#0d0d0d" },
      { id: "about-focus", color: "#e9e9e7" },
      { id: "experience", color: "#0d0d0d" },
    ];

    const handleScroll = () => {
      const position = window.scrollY;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element && position >= element.offsetTop - 70 && position < element.offsetTop + element.offsetHeight - 70) {
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

      <section id="about-hero" className="relative overflow-hidden bg-[#e9e9e7] px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
        <div className="absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-[#EB5939]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              About Shivam
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.04] text-[#0d0d0d] md:text-7xl">
              AI engineer working across systems, infrastructure, and product delivery.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#0d0d0d]/70 md:text-xl">
              Based in Varanasi, India, I build production AI systems spanning model access,
              backend services, cloud delivery, and user-facing workflows.
            </p>
          </div>

          <div className="overflow-hidden rounded-[32px] bg-[#0d0d0d] p-3">
            <img
              className="aspect-[4/5] w-full rounded-[24px] object-cover object-center grayscale transition duration-700 hover:grayscale-0"
              src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp"
              alt="Shivam Maurya"
            />
          </div>
        </div>
      </section>

      <section id="about-focus" className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Areas of focus
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
              Technical depth tied to operational use.
            </h2>
          </div>
          <div className="border-t border-white/20">
            {[
              ["Enterprise AI infrastructure", "Secure model access, routing, identity, storage, and deployment workflows for internal AI systems."],
              ["Applied AI products", "Retrieval, conversational interfaces, backend services, and integrations designed around a specific operating problem."],
              ["Developer workflows", "Tools that make complex codebases and technical context easier to understand and act on."],
            ].map(([title, detail], index) => (
              <div key={title} className="grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[0.12fr_0.88fr]">
                <span className="text-sm text-[#EB5939]">0{index + 1}</span>
                <div>
                  <h3 className="text-xl font-medium text-[#e9e9e7]">{title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#e9e9e7]/70">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#f5f3ef] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                Experience
              </p>
              <h2 className="mt-4 text-3xl font-medium text-[#0d0d0d] md:text-5xl">
                Professional background.
              </h2>
            </div>
            <div className="border-t border-[#0d0d0d]/20">
              {companiesData.map((company) => (
                <article
                  key={company.id}
                  className="grid gap-4 border-b border-[#0d0d0d]/20 py-7 md:grid-cols-[0.75fr_1.25fr]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-[#EB5939]">
                      {company.activeYears}
                    </p>
                    <h3 className="mt-2 text-xl font-medium text-[#0d0d0d]">
                      {company.companyName}
                    </h3>
                    <p className="mt-1 text-sm text-[#0d0d0d]/60">{company.position}</p>
                  </div>
                  <p className="text-base leading-7 text-[#0d0d0d]/70">{company.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EB5939] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/60">
              Selected work
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              Review the systems and products behind the experience.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex w-fit bg-[#0d0d0d] px-6 py-4 text-sm font-medium uppercase tracking-[0.16em] text-[#e9e9e7] transition hover:bg-[#e9e9e7] hover:text-[#0d0d0d]"
          >
            Explore the work
          </Link>
        </div>
      </section>
    </>
  );
};

export default AboutSide;
