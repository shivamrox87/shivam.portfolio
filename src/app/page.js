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
  ["At work", "I am building secure AI infrastructure and internal tools for financial-services teams at AlphaFMC."],
  ["Outside work", "I am developing ExplainGitHub, evolving ReqBeam, and experimenting with OpenWebUI-based knowledge and automation workflows."],
  ["Lately", "I have been spending time on model gateways, agent permissions, evaluation, context quality, and what makes an AI system dependable."],
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

function SectionTitle({ id, children }) {
  return <h2 id={id} className="scroll-mt-8 font-serif text-4xl leading-tight tracking-[-0.02em] md:text-5xl">{children}</h2>;
}

export default function Home() {
  return (
    <main>
      <section className="relative h-[400px] overflow-hidden md:h-[580px]">
        <Image
          src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735629588/uoGweUB1Hmu5gOVlOQ7RI0QXup8_rf6xoh.avif"
          alt="Shivam Maurya working at a desk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_35%,#fbfaf7_100%)]" />
      </section>

      <article id="about" className="relative z-10 mx-auto -mt-24 w-full max-w-[820px] px-5 pb-12 md:-mt-40 md:px-8 md:pb-20">
        <h1 className="sr-only">Shivam Maurya, Senior AI Engineer</h1>

        <div className="space-y-5 body-copy">
          <p>
            Hi, I am Shivam. I work as a Senior AI Engineer at AlphaFMC, where I build enterprise
            AI infrastructure and internal systems for financial-services organisations.
          </p>
          <p>
            Most days, I am thinking about the less glamorous parts of AI: model access, identity,
            cloud delivery, backend services, and the workflows that make a system genuinely useful
            for a team.
          </p>
          <p>
            Outside work, I build products, write down what I am learning, teach, and run
            Programming With Maurya. This is the place where I keep that whole picture together.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="text-link">LinkedIn</Link>
          <Link href="/connect" className="text-link">Contact</Link>
        </div>

        <Rule />

        <SectionTitle id="now">What I&apos;m working on right now</SectionTitle>
        <div className="mt-8 space-y-6">
          {currentFocus.map(([label, detail]) => (
            <div key={label}>
              <h3 className="font-serif text-2xl">{label}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{detail}</p>
            </div>
          ))}
        </div>

        <Rule />

        <SectionTitle>Where I&apos;ve worked</SectionTitle>
        <p className="mt-5 body-copy">
          My professional work is a big part of how I learn what holds up outside a demo. These are
          the places where I have had the chance to build, experiment, and take ownership.
        </p>
        <div className="mt-8 space-y-10">
          {companiesData.map((company) => (
            <section key={company.id}>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="font-serif text-3xl">{company.companyName}</h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{company.activeYears}</p>
              </div>
              <p className="mt-2 font-semibold text-[#171714]">{company.position}</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4e48]">{company.description}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle id="featured-work">Things I&apos;ve been building</SectionTitle>
        <p className="mt-5 body-copy">
          Some of these are serious product explorations, some are shipped, and some are systems I
          have been improving over time. They are all things I have cared enough about to take beyond an idea.
        </p>
        <div className="mt-10 space-y-12">
          {flagshipWork.map((project, index) => (
            <section key={project.slug}>
              <p className="text-xs uppercase tracking-[0.16em] text-[#b84a2b]">0{index + 1} · {project.status}</p>
              <h3 className="mt-2 font-serif text-3xl md:text-4xl">{project.heading}</h3>
              <p className="mt-3 font-semibold text-[#4f4e48]">{project.role}</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4e48]">{project.summary}</p>
              <p className="mt-4 text-sm leading-7 text-[#4f4e48]"><strong className="text-[#171714]">The problem I am trying to solve:</strong> {project.problem}</p>
              <p className="mt-3 text-sm leading-7 text-[#4f4e48]"><strong className="text-[#171714]">What I am doing about it:</strong> {project.solution}</p>
              <p className="mt-4 text-xs leading-6 text-[#68675f]">{project.stack.join(" · ")}</p>
              <Link href={`/work/${project.slug}`} className="text-link mt-5">Read full case study</Link>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle>Other things I&apos;ve tried building</SectionTitle>
        <p className="mt-5 body-copy">
          Not every idea needs to become a flagship product. These are smaller products and explorations that taught me something useful about users, distribution, or execution.
        </p>
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

        <SectionTitle>Things I like getting deep into</SectionTitle>
        <p className="mt-5 body-copy">
          I do not think in terms of a giant skills list. These are the areas I keep coming back to when I am building something real.
        </p>
        <div className="mt-8 space-y-7">
          {capabilityAreas.map((area) => (
            <section key={area.title}>
              <h3 className="font-serif text-2xl">{area.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{area.detail}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle id="research">Things I&apos;m curious about</SectionTitle>
        <p className="mt-5 body-copy">
          These are questions I keep exploring through research, prototypes, and conversations.
          They are not all shipped products, just areas where I am trying to form better opinions.
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

        <SectionTitle>A few things I believe</SectionTitle>
        <blockquote className="mt-8 border-l-2 border-[#b84a2b] pl-6">
          <ul className="space-y-4 text-base leading-8 text-[#4f4e48]">
            {builderPrinciples.map((principle) => <li key={principle}>{principle}</li>)}
          </ul>
        </blockquote>

        <Rule />

        <SectionTitle id="writing">Things I&apos;ve written about</SectionTitle>
        <p className="mt-5 body-copy">
          I write when I have something practical to share, usually from the overlap of AI engineering, developer tools, and trying to make a product useful.
        </p>
        <div className="mt-8 space-y-7">
          {blogs.map((post) => (
            <section key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group">
                <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#b84a2b]">{post.blogHeading}</h3>
              </Link>
              <p className="mt-2 text-sm text-[#68675f]">{post.postedAt} · {post.postedOn}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle id="speaking">Teaching and conversations</SectionTitle>
        <p className="mt-5 body-copy">
          Teaching has been part of my journey from the beginning. I enjoy making technical ideas less intimidating and helping people see a path into the work.
        </p>
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

        <SectionTitle>Programming With Maurya</SectionTitle>
        <p className="mt-5 body-copy">
          This is the community side of my work: teaching, mentoring, sharing resources, and staying close to people who are learning to build.
        </p>
        <div className="mt-8 space-y-7">
          {communityHighlights.map((item) => (
            <section key={item.title}>
              <h3 className="font-serif text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#4f4e48]">{item.detail}</p>
            </section>
          ))}
        </div>

        <Rule />

        <SectionTitle id="contact">Contact</SectionTitle>
        <p className="mt-6 font-serif text-3xl leading-tight md:text-4xl">
          If something here resonates, let&apos;s talk.
        </p>
        <p className="mt-5 body-copy">
          Whether you are building something, organising a workshop, or just want to compare notes on AI and products, I would be glad to hear from you.
        </p>
        <div className="mt-8 flex items-end justify-between gap-8">
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link href="/connect" className="text-link">Contact me</Link>
            <a href="mailto:connect@shivammaurya.com" className="text-link">connect@shivammaurya.com</a>
            <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="text-link">LinkedIn</Link>
          </div>
          <Image
            src="/icon.png"
            alt="Black-and-white illustration of Shivam Maurya"
            width={112}
            height={112}
            className="shrink-0"
          />
        </div>

      </article>
    </main>
  );
}
