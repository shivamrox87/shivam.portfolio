import Header from "@/components/Header";
import { blogs, featuredWork, researchAreas } from "@/server/data";
import Image from "next/image";
import Link from "next/link";

const currentFocus = [
  ["At work", "Secure enterprise AI infrastructure and internal systems for financial-services organisations."],
  ["Independently", "ExplainGitHub, ReqBeam, and OpenWebUI-based knowledge and automation workflows."],
  ["Researching", "Model gateways, agent permissions, evaluation, context quality, and dependable deployment patterns."],
];

const speaking = [
  ["2024", "Ladies in Tech Summit", "Programming, applied AI, and modern tools for career development."],
  ["2023", "Get Started with AI", "A practical three-day workshop on AI fundamentals and building GPT-based applications."],
  ["2022", "Python 101", "A live three-month programming course for students in Ghana."],
];

function SectionHeading({ number, label, title }) {
  return (
    <div>
      <p className="eyebrow">{number} / {label}</p>
      <h2 className="section-title mt-3">{title}</h2>
    </div>
  );
}

export default function Home() {
  return (
    <main id="top">
      <Header singlePage />

      <section id="about" className="site-shell scroll-mt-20 py-14 md:py-20">
        <div className="grid gap-10 md:grid-cols-[280px_1fr] md:items-start md:gap-14 lg:grid-cols-[320px_1fr] lg:gap-20">
          <div>
            <Image
              src="/shivam-maurya-profile.png"
              alt="Shivam Maurya"
              width={800}
              height={800}
              priority
              className="aspect-square w-full max-w-[340px] object-cover object-center"
            />
            <div className="mt-5 flex gap-5 text-sm text-[#68675f]">
              <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="hover:text-[#b84a2b]">LinkedIn</Link>
              <Link href="#contact" className="hover:text-[#b84a2b]">Contact</Link>
            </div>
          </div>

          <div className="max-w-[720px]">
            <h1 className="sr-only">Shivam Maurya, Senior AI Engineer</h1>
            <p className="font-serif text-3xl leading-tight tracking-[-0.015em] md:text-4xl">
              I build secure AI platforms, developer tools, and production systems.
            </p>
            <div className="mt-7 space-y-5 body-copy">
              <p>
                I am a Senior AI Engineer at AlphaFMC, working on enterprise AI infrastructure
                and internal systems for financial-services organisations.
              </p>
              <p>
                My work spans model gateways, identity and access, cloud delivery, backend
                services, and the workflows that make AI useful inside real teams.
              </p>
              <p>
                Outside my professional role, I build independent products, research dependable
                AI systems, and run Programming With Maurya.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link href="/about" className="text-link">Detailed profile</Link>
              <Link href="/work" className="text-link">Complete work archive</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell py-10 md:py-12">
          <div className="grid gap-7 md:grid-cols-[0.32fr_1fr] md:gap-14">
            <div>
              <p className="eyebrow">Now</p>
              <p className="mt-2 font-serif text-2xl">Current focus</p>
            </div>
            <div className="border-t border-[#171714]">
              {currentFocus.map(([label, detail]) => (
                <div key={label} className="grid gap-2 border-b border-[#d8d5cc] py-4 sm:grid-cols-[130px_1fr] sm:gap-6">
                  <h3 className="font-serif text-xl">{label}</h3>
                  <p className="text-sm leading-7 text-[#4f4e48]">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="scroll-mt-20 border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-14">
          <SectionHeading number="01" label="Work" title="Featured systems" />
          <div className="border-t border-[#171714]">
            {featuredWork.map((item) => (
              <article key={item.name} className="border-b border-[#d8d5cc] py-7">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="font-serif text-3xl">{item.name}</h3>
                  <p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{item.status}</p>
                </div>
                <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#4f4e48]">{item.description}</p>
                <Link href={item.href} className="text-link mt-4">Read case study</Link>
              </article>
            ))}
            <Link href="/work" className="text-link mt-7">View all work</Link>
          </div>
        </div>
      </section>

      <section id="research" className="scroll-mt-20 border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-14">
          <SectionHeading number="02" label="Research" title="Technical investigations" />
          <div className="border-t border-[#171714]">
            {researchAreas.map((area, index) => (
              <article key={area.title} className="grid gap-3 border-b border-[#d8d5cc] py-6 sm:grid-cols-[34px_1fr] sm:gap-5">
                <span className="pt-1 text-xs text-[#b84a2b]">0{index + 1}</span>
                <div>
                  <h3 className="font-serif text-2xl">{area.title}</h3>
                  <p className="mt-3 max-w-[680px] text-sm leading-7 text-[#4f4e48]">{area.summary}</p>
                  <p className="mt-3 text-xs leading-6 text-[#68675f]">{area.topics.join(" · ")}</p>
                </div>
              </article>
            ))}
            <Link href="/research" className="text-link mt-7">Research notes</Link>
          </div>
        </div>
      </section>

      <section id="writing" className="scroll-mt-20 border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-14">
          <SectionHeading number="03" label="Writing" title="Recent notes" />
          <div className="border-t border-[#171714]">
            {blogs.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-3 border-b border-[#d8d5cc] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <div>
                  <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#b84a2b]">{post.blogHeading}</h3>
                  <p className="mt-2 text-sm text-[#68675f]">{post.postedAt}</p>
                </div>
                <p className="text-sm text-[#68675f]">{post.postedOn}</p>
              </Link>
            ))}
            <Link href="/blog" className="text-link mt-7">All writing</Link>
          </div>
        </div>
      </section>

      <section id="speaking" className="scroll-mt-20 border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-14">
          <SectionHeading number="04" label="Speaking" title="Teaching and community" />
          <div className="border-t border-[#171714]">
            {speaking.map(([year, title, detail]) => (
              <article key={title} className="grid gap-3 border-b border-[#d8d5cc] py-6 sm:grid-cols-[70px_0.42fr_1fr] sm:gap-6">
                <p className="text-xs text-[#b84a2b]">{year}</p>
                <h3 className="font-serif text-2xl">{title}</h3>
                <p className="text-sm leading-7 text-[#4f4e48]">{detail}</p>
              </article>
            ))}
            <Link href="/sessions" className="text-link mt-7">Speaking archive</Link>
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-20 border-t border-[#171714]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-14">
          <SectionHeading number="05" label="Contact" title="Start a conversation" />
          <div className="max-w-[720px]">
            <p className="font-serif text-3xl leading-tight md:text-4xl">
              For enterprise AI, developer tools, architecture, or speaking.
            </p>
            <p className="mt-6 body-copy">
              Send a short note with the problem, context, and what a useful outcome would look like.
            </p>
            <div className="mt-8 flex flex-wrap gap-5">
              <Link href="/connect" className="text-link">Contact me</Link>
              <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="text-link">LinkedIn</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
