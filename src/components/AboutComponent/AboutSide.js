import Header from "@/components/Header";
import Link from "next/link";
import {
  builderPrinciples,
  companiesData,
  skills,
  tools,
} from "@/server/data";

const AboutSide = () => {
  return (
    <>
      <Header textColor="#0d0d0d" />

      <section className="relative overflow-hidden bg-[#e9e9e7] px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
        <div className="absolute right-[-8rem] top-16 h-80 w-80 rounded-full bg-[#EB5939]/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              About Shivam
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-medium leading-[1.04] text-[#0d0d0d] md:text-7xl">
              Engineer by training. Product builder by instinct.
            </h1>
            <p className="mt-7 max-w-3xl text-lg leading-8 text-[#0d0d0d]/72 md:text-xl">
              I build AI products and production systems from Varanasi, India. My work sits at
              the intersection of applied AI, developer experience, cloud infrastructure, and
              the product decisions that turn technical capability into something people use.
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

      <section className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              The Through Line
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
              I like difficult systems and simple products.
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-8 text-[#e9e9e7]/72">
            <p>
              I started by teaching Python, data science, and applied AI through Programming
              With Maurya. That experience taught me how much clarity matters when technology is
              unfamiliar, and it still shapes the way I design products today.
            </p>
            <p>
              Since then, I have worked across startup products, automation-heavy operations,
              and enterprise AI delivery. I have built conversational systems, backend
              workflows, cloud integrations, and tools that help teams understand and use
              complex information faster.
            </p>
            <p>
              Today my focus is developer AI and product infrastructure: systems that earn trust,
              fit real workflows, and create leverage beyond a good demo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                Experience
              </p>
              <h2 className="mt-4 text-3xl font-medium text-[#0d0d0d] md:text-5xl">
                Built across different operating realities.
              </h2>
            </div>
            <div className="border-t border-[#0d0d0d]/15">
              {companiesData.map((company) => (
                <article
                  key={company.id}
                  className="grid gap-4 border-b border-[#0d0d0d]/15 py-7 md:grid-cols-[0.75fr_1.25fr]"
                >
                  <div>
                    <p className="text-sm uppercase tracking-[0.16em] text-[#EB5939]">
                      {company.activeYears}
                    </p>
                    <h3 className="mt-2 text-xl font-medium text-[#0d0d0d]">
                      {company.companyName}
                    </h3>
                    <p className="mt-1 text-sm text-[#0d0d0d]/55">{company.position}</p>
                  </div>
                  <p className="text-base leading-7 text-[#0d0d0d]/72">{company.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Working Principles
            </p>
            <div className="mt-7 space-y-4">
              {builderPrinciples.map((principle, index) => (
                <div key={principle} className="flex gap-5 border-t border-[#0d0d0d]/15 py-5">
                  <span className="text-sm text-[#EB5939]">0{index + 1}</span>
                  <p className="text-xl leading-8 text-[#0d0d0d]">{principle}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[#0d0d0d] p-7 md:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Capabilities
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-[#e9e9e7]/75"
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <p className="mt-10 text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Tools I Reach For
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {tools.map((tool) => (
                <div key={tool.name} className="border-t border-white/10 pt-3 text-sm text-[#e9e9e7]/65">
                  {tool.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#EB5939] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/65">
              Keep Exploring
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              The best way to understand how I work is through what I build.
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
