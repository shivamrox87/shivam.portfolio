"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { useEffect, useState } from "react";
import { blogs, companiesData, selectedWork } from "@/server/data";

export default function Home() {
  const [headerColor, setHeaderColor] = useState("#e9e9e7");

  useEffect(() => {
    const sections = [
      { id: "hero", color: "#e9e9e7" },
      { id: "context", color: "#0d0d0d" },
      { id: "selected-work", color: "#0d0d0d" },
      { id: "current-role", color: "#e9e9e7" },
      { id: "experience", color: "#0d0d0d" },
      { id: "writing", color: "#0d0d0d" },
    ];

    const handleScroll = () => {
      const position = window.scrollY;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (
          element &&
          position >= element.offsetTop - 70 &&
          position < element.offsetTop + element.offsetHeight - 70
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
    <main className="bg-[#f4f2ed]">
      <Header textColor={headerColor} />

      <section
        id="hero"
        className="relative flex min-h-[82vh] items-end overflow-hidden bg-[#0d0d0d] px-5 pb-14 pt-28 md:min-h-[88vh] md:px-10 md:pb-20"
      >
        <img
          src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735629588/uoGweUB1Hmu5gOVlOQ7RI0QXup8_rf6xoh.avif"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,13,13,0.96)_0%,rgba(13,13,13,0.78)_52%,rgba(13,13,13,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(13,13,13,0.82)_0%,transparent_58%)]" />

        <div className="relative mx-auto w-full max-w-[1200px]">
          <div className="max-w-[820px]">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#EB5939] md:text-sm">
              Shivam Maurya · AI Engineer
            </p>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] text-[#e9e9e7] sm:text-5xl md:text-7xl">
              AI systems for financial services and developer workflows.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#e9e9e7]/75 md:text-lg md:leading-8">
              I work across applied AI, backend systems, and cloud infrastructure, taking
              products from technical design through production delivery.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work"
                className="inline-flex items-center justify-center bg-[#e9e9e7] px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-white"
              >
                View selected work
              </Link>
              <Link
                href="/connect"
                className="inline-flex items-center justify-center border border-white/30 px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-[#e9e9e7] transition hover:border-[#EB5939] hover:bg-[#EB5939]"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="context" className="border-b border-[#0d0d0d]/20 bg-[#f4f2ed] px-5 md:px-10">
        <div className="mx-auto grid max-w-[1200px] divide-y divide-[#0d0d0d]/20 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            ["Current", "AI Engineer at AlphaFMC (Lionpoint Group)"],
            ["Domain", "Enterprise AI and financial services"],
            ["Based", "Varanasi, India"],
          ].map(([label, value]) => (
            <div key={label} className="py-6 md:px-7 md:first:pl-0">
              <p className="text-xs uppercase tracking-[0.18em] text-[#0d0d0d]/50">{label}</p>
              <p className="mt-2 text-base leading-6 text-[#0d0d0d]">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="selected-work" className="bg-[#f4f2ed] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-6 border-b border-[#0d0d0d] pb-8 md:grid-cols-[0.75fr_1.25fr] md:items-end">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Selected work
            </p>
            <h2 className="text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              Systems delivered in professional and independent settings.
            </h2>
          </div>

          <div>
            {selectedWork.map((item, index) => (
              <article
                key={item.name}
                className="grid gap-7 border-b border-[#0d0d0d]/20 py-9 md:grid-cols-[0.12fr_0.7fr_1.18fr] md:gap-10 md:py-12"
              >
                <p className="text-sm tabular-nums text-[#0d0d0d]/50">0{index + 1}</p>
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[#EB5939]">{item.status}</p>
                  <h3 className="mt-3 text-2xl font-medium text-[#0d0d0d] md:text-3xl">{item.name}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#0d0d0d]/60">{item.context}</p>
                </div>
                <div>
                  <p className="max-w-2xl text-lg leading-8 text-[#0d0d0d]/75">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {item.scope.map((scope) => (
                      <span key={scope} className="text-xs uppercase tracking-[0.14em] text-[#0d0d0d]/60">
                        {scope}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={item.href}
                    className="mt-6 inline-flex border-b border-[#0d0d0d] pb-1 text-sm font-medium text-[#0d0d0d] transition hover:border-[#EB5939] hover:text-[#EB5939]"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="current-role" className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Current role
            </p>
            <p className="mt-4 text-sm leading-6 text-[#e9e9e7]/60">
              AlphaFMC (Lionpoint Group)<br />2024–present
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
              Building the infrastructure that makes enterprise AI usable inside real organisations.
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#e9e9e7]/70">
              My work includes secure model access, internal AI interfaces, identity and storage
              integrations, traffic routing, and deployment workflows across Azure environments.
            </p>
            <div className="mt-10 grid border-t border-white/20 sm:grid-cols-2">
              {["Model gateways and routing", "SSO and access control", "Cloud deployment", "Internal AI applications"].map((item) => (
                <p key={item} className="border-b border-white/20 py-4 text-sm text-[#e9e9e7]/75 sm:odd:pr-6 sm:even:pl-6">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="bg-[#f4f2ed] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Experience
            </p>
          </div>
          <div className="border-t border-[#0d0d0d]">
            {companiesData.map((company) => (
              <div key={company.id} className="grid gap-3 border-b border-[#0d0d0d]/20 py-7 md:grid-cols-[1fr_0.6fr_0.5fr] md:items-baseline">
                <h3 className="text-xl font-medium text-[#0d0d0d]">{company.companyName}</h3>
                <p className="text-sm text-[#0d0d0d]/60">{company.position}</p>
                <p className="text-sm text-[#0d0d0d]/60 md:text-right">{company.activeYears}</p>
              </div>
            ))}
            <Link
              href="/about"
              className="mt-8 inline-flex border-b border-[#0d0d0d] pb-1 text-sm font-medium text-[#0d0d0d] transition hover:border-[#EB5939] hover:text-[#EB5939]"
            >
              Full background
            </Link>
          </div>
        </div>
      </section>

      <section id="writing" className="border-t border-[#0d0d0d]/20 bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between gap-6 border-b border-[#0d0d0d] pb-7">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">Writing</p>
              <h2 className="mt-3 text-3xl font-medium text-[#0d0d0d] md:text-4xl">Notes from the work.</h2>
            </div>
            <Link href="/blog" className="hidden text-sm font-medium text-[#0d0d0d] hover:text-[#EB5939] sm:block">
              View all
            </Link>
          </div>
          <div>
            {blogs.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid gap-3 border-b border-[#0d0d0d]/20 py-7 md:grid-cols-[0.35fr_1.35fr_0.3fr] md:items-center"
              >
                <p className="text-xs uppercase tracking-[0.16em] text-[#EB5939]">{post.postedAt}</p>
                <h3 className="text-xl font-medium leading-7 text-[#0d0d0d] transition group-hover:text-[#EB5939]">
                  {post.blogHeading}
                </h3>
                <p className="text-sm text-[#0d0d0d]/50 md:text-right">{post.postedOn}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">Contact</p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
              Working on an AI system with real operational constraints?
            </h2>
          </div>
          <Link
            href="/connect"
            className="inline-flex w-fit bg-[#e9e9e7] px-6 py-4 text-sm font-medium uppercase tracking-[0.15em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-white"
          >
            Start a conversation
          </Link>
        </div>
      </section>
    </main>
  );
}
