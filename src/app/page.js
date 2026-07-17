import {
  blogs,
  builderPrinciples,
  capabilityAreas,
  caseStudies,
  communityHighlights,
  companiesData,
  featuredWorkSlugs,
  otherProducts,
  researchAreas,
} from "@/server/data";
import Image from "next/image";
import Link from "next/link";

const currentFocus = [
  ["At work", "Building secure enterprise AI infrastructure and internal systems for financial-services organisations."],
  ["Independently", "Developing ExplainGitHub, evolving ReqBeam, and building OpenWebUI-based knowledge and automation workflows."],
  ["Researching", "Model gateways, agent permissions, evaluation, context quality, and dependable deployment patterns."],
];

const speaking = [
  {
    year: "2024",
    title: "Ladies in Tech Summit",
    detail: "Programming, applied AI, and modern tools for career development at the University of Energy and Natural Resources.",
    href: "https://www.linkedin.com/posts/shivam--maurya_summit-by-shivam-maurya-activity-7219559035400855553-Ra7s",
  },
  {
    year: "2023",
    title: "Get Started with AI Workshop",
    detail: "A practical three-day workshop covering AI fundamentals and building GPT-based applications.",
    href: "https://thingqbator.nasscomfoundation.org/main/eventdetail/650813ee3afae5376461e330",
  },
  {
    year: "2022",
    title: "Python 101 for Students in Ghana",
    detail: "A live three-month course covering Python, project work, and an introduction to machine learning.",
    href: "https://www.linkedin.com/posts/shivam--maurya_python-101-live-session-activity-6987844195424088064-KeGV",
  },
];

const flagshipWork = featuredWorkSlugs
  .map((slug) => caseStudies.find((project) => project.slug === slug))
  .filter(Boolean);

function Rule() {
  return <hr className="my-12 border-0 border-t border-[#d8d5cc] md:my-16" />;
}

function SectionTitle({ children }) {
  return <h2 className="font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">{children}</h2>;
}

export default function Home() {
  return (
    <main>
      <article className="mx-auto w-full max-w-[820px] px-5 py-12 md:px-8 md:py-20">
        <h1 className="sr-only">Shivam Maurya, Senior AI Engineer</h1>

        <div className="space-y-5 body-copy">
          <p>
            I am a Senior AI Engineer at AlphaFMC, where I build enterprise AI infrastructure
            and internal systems for financial-services organisations.
          </p>
          <p>
            My work spans model gateways, identity and access, cloud delivery, backend services,
            AI agents, and the product workflows that make AI useful inside real teams.
          </p>
          <p>
            Outside my professional role, I build independent products, investigate dependable
            AI systems, teach, and run Programming With Maurya.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="text-link">LinkedIn</Link>
          <Link href="/connect" className="text-link">Contact</Link>
        </div>

        <Rule />

        <SectionTitle>Now</SectionTitle>
        <div className="mt-8 space-y-6">
          {currentFocus.map(([label, detail]) => (
            <div key={label}>
              <h3 className="font-serif text-2xl">{label}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{detail}</p>
            </div>
          ))}
        </div>

        <Rule />

        <SectionTitle>Professional experience</SectionTitle>
        <div className="mt-8 space-y-10">
          {companiesData.map((company) => (
            <section key={company.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-serif text-3xl">{company.position}</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{company.activeYears}</p>
              </div>
              <p className="mt-2 font-semibold text-[#171714]">{company.companyName}</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4e48]">{company.description}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Featured work</SectionTitle>
        <p className="mt-5 body-copy">
          The strongest examples of my work across enterprise infrastructure, developer products,
          shipped software, and internal AI tooling.
        </p>
        <div className="mt-10 space-y-12">
          {flagshipWork.map((project, index) => (
            <section key={project.slug}>
              <p className="text-xs uppercase tracking-[0.16em] text-[#b84a2b]">0{index + 1} · {project.status}</p>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl">{project.heading}</h3>
              <p className="mt-3 font-semibold text-[#4f4e48]">{project.role}</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4e48]">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4e48]"><strong className="text-[#171714]">Problem:</strong> {project.problem}</p>
              <p className="mt-3 text-sm leading-7 text-[#4f4e48]"><strong className="text-[#171714]">Approach:</strong> {project.solution}</p>
              <p className="mt-4 text-xs leading-6 text-[#68675f]">{project.stack.join(" · ")}</p>
              <Link href={`/work/${project.slug}`} className="text-link mt-5">Read full case study</Link>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Other products</SectionTitle>
        <div className="mt-8 space-y-8">
          {otherProducts.map((product) => (
            <section key={product.name}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-serif text-2xl">{product.name}</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{product.status}</p>
              </div>
              <p className="mt-3 text-sm leading-7 text-[#4f4e48]">{product.summary}</p>
              <p className="mt-3 text-xs leading-6 text-[#68675f]">{product.focus.join(" · ")}</p>
              {product.href ? <Link href={product.href} className="text-link mt-4">Read more</Link> : null}
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Technical capabilities</SectionTitle>
        <div className="mt-8 space-y-7">
          {capabilityAreas.map((area) => (
            <section key={area.title}>
              <h3 className="font-serif text-2xl">{area.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{area.detail}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Technical research</SectionTitle>
        <p className="mt-5 body-copy">
          Focused investigations used to evaluate architecture, provider behaviour, security,
          platform choices, and product feasibility. These are research areas, not shipped-product claims.
        </p>
        <div className="mt-8 space-y-8">
          {researchAreas.map((area) => (
            <section key={area.title}>
              <h3 className="font-serif text-2xl">{area.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{area.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-7 text-[#68675f]">
                {area.topics.map((topic) => <li key={topic}>{topic}</li>)}
              </ul>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>How I think</SectionTitle>
        <blockquote className="mt-8 border-l-2 border-[#b84a2b] pl-6">
          <ul className="space-y-4 text-base leading-8 text-[#4f4e48]">
            {builderPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
        </blockquote>

        <Rule />

        <SectionTitle>Writing</SectionTitle>
        <div className="mt-8 space-y-7">
          {blogs.map((post) => (
            <section key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group">
                <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#b84a2b]">{post.blogHeading}</h3>
              </Link>
              <p className="mt-2 text-sm text-[#68675f]">{post.postedAt} · {post.postedOn}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Speaking and teaching</SectionTitle>
        <div className="mt-8 space-y-8">
          {speaking.map((session) => (
            <section key={session.title}>
              <p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{session.year}</p>
              <h3 className="mt-2 font-serif text-2xl">
                <Link href={session.href} target="_blank" className="transition-colors hover:text-[#b84a2b]">
                  {session.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{session.detail}</p>
              <Link href={session.href} target="_blank" className="text-link mt-4">View session</Link>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Community and leadership</SectionTitle>
        <div className="mt-8 space-y-7">
          {communityHighlights.map((item) => (
            <section key={item.title}>
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{item.detail}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Contact</SectionTitle>
        <p className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          For enterprise AI, developer tools, technical architecture, or speaking.
        </p>
        <p className="mt-5 body-copy">
          Send a short note with the problem, context, and what a useful outcome would look like.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/connect" className="text-link">Contact me</Link>
          <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="text-link">LinkedIn</Link>
        </div>

        <Image
          src="/shivam-maurya-cutout.png"
          alt="Shivam Maurya"
          width={1254}
          height={1254}
          className="mt-14 aspect-square w-full max-w-[320px] object-contain object-bottom"
        />
      </article>
    </main>
  );
}
