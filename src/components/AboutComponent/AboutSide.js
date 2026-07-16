import Header from "@/components/Header";
import { communityHighlights, companiesData } from "@/server/data";
import Image from "next/image";
import Link from "next/link";

const focusAreas = [
  ["Enterprise AI infrastructure", "Model access, routing, identity, storage, governance, and cloud deployment for internal AI systems."],
  ["Applied AI products", "Retrieval, conversational interfaces, backend services, and integrations designed around a specific operating problem."],
  ["Developer workflows", "Tools that help engineers understand complex systems and act on technical context with greater confidence."],
];

const principles = [
  ["Production before demos", "A model response is only one part of a system. Identity, permissions, failure handling, cost, evaluation, and operations determine whether it is useful."],
  ["Reduce cognitive load", "AI should help people understand repositories, workflows, and decisions. Generating more output is not the same as reducing complexity."],
  ["Design for real constraints", "Security, latency, budgets, unreliable model behaviour, and adoption are product inputs rather than problems to postpone."],
  ["Own the whole system", "The strongest solutions connect product intent, AI behaviour, backend services, cloud infrastructure, and the user workflow."],
];

export default function AboutSide() {
  return (
    <main className="w-full">
      <Header />

      <section className="site-shell page-section">
        <div className="grid gap-10 md:grid-cols-[1fr_300px] md:items-start md:gap-16 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="eyebrow">About</p>
            <h1 className="display-title mt-4 max-w-[760px]">Engineering AI systems that can survive real operations.</h1>
            <div className="mt-9 max-w-[720px] space-y-5 body-copy">
              <p>
                I am a Senior AI Engineer at AlphaFMC, part of Lionpoint Group. I work on AI
                systems for financial-services environments, where security, reliability,
                identity, and integration matter as much as model capability.
              </p>
              <p>
                My path into AI started through teaching. From 2020 to 2023, I ran the MSME-registered
                Programming With Maurya business and taught Python, data science, and applied AI to
                learners in India and Ghana. That experience continues to shape how I explain and design complex systems.
              </p>
              <p>
                I later worked across startup AI products and automation-heavy operations before
                moving deeper into enterprise AI infrastructure. I am based in Varanasi, India.
              </p>
            </div>
            <div className="mt-8 flex gap-5">
              <Link href="/work" className="text-link">View work</Link>
              <Link href="/connect" className="text-link">Contact me</Link>
            </div>
          </div>
          <Image
            src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735629588/uoGweUB1Hmu5gOVlOQ7RI0QXup8_rf6xoh.avif"
            alt="Shivam Maurya working at a desk"
            width={680}
            height={850}
            priority
            className="aspect-[4/5] w-full object-cover object-center"
          />
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Focus</p>
            <h2 className="section-title mt-3">What I work on</h2>
          </div>
          <div className="border-t border-[#171714]">
            {focusAreas.map(([title, detail]) => (
              <div key={title} className="grid gap-3 border-b border-[#d8d5cc] py-7 sm:grid-cols-[0.42fr_1fr] sm:gap-8">
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-sm leading-7 text-[#4f4e48]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Principles</p>
            <h2 className="section-title mt-3">How I think about the work</h2>
          </div>
          <div className="border-t border-[#171714]">
            {principles.map(([title, detail], index) => (
              <div key={title} className="grid gap-3 border-b border-[#d8d5cc] py-7 sm:grid-cols-[40px_0.38fr_0.62fr] sm:gap-6">
                <span className="text-xs text-[#b84a2b]">0{index + 1}</span>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-sm leading-7 text-[#4f4e48]">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 className="section-title mt-3">Professional background</h2>
          </div>
          <div className="border-t border-[#171714]">
            {companiesData.map((company) => (
              <article key={company.id} className="border-b border-[#d8d5cc] py-7">
                <div className="grid gap-2 sm:grid-cols-[1fr_auto] sm:items-baseline">
                  <h3 className="font-serif text-2xl">{company.companyName}</h3>
                  <p className="text-sm text-[#68675f]">{company.activeYears}</p>
                </div>
                <p className="mt-1 text-sm font-semibold text-[#b84a2b]">{company.position}</p>
                <p className="mt-4 max-w-[720px] text-sm leading-7 text-[#4f4e48]">{company.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Community and leadership</p>
            <h2 className="section-title mt-3">Teaching, ownership, and collaboration</h2>
          </div>
          <div className="border-t border-[#171714]">
            {communityHighlights.map((item) => (
              <div key={item.title} className="grid gap-3 border-b border-[#d8d5cc] py-7 sm:grid-cols-[0.38fr_0.62fr] sm:gap-8">
                <h3 className="font-serif text-2xl">{item.title}</h3>
                <p className="text-sm leading-7 text-[#4f4e48]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
