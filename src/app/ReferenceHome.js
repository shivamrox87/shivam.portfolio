import Image from "next/image";
import Link from "next/link";
import { blogs, caseStudies } from "@/server/data";

const recentWork = [
  { slug: "reqbeam", description: "A faster way to understand requirements before building." },
  { slug: "explaingithub", description: "Navigate and understand unfamiliar codebases." },
  { slug: "enterprise-ai", description: "AI workflows and shared services for financial-services teams." },
  { slug: "repoflicks", description: "Discover open-source repositories worth exploring." },
  { slug: "personal-ai-systems-lab", description: "Experiments in persistent, useful personal AI systems." },
];

const recentWriting = [
  "before-you-blame-the-model-check-the-eval-sandbox",
  "structured-outputs-need-semantic-invariants-not-just-a-strict-schema",
  "agent-tool-policy-needs-a-composition-rule-not-just-labels",
];
const writingDescriptions = {
  "before-you-blame-the-model-check-the-eval-sandbox": "Why the evaluation runtime belongs in the result.",
  "structured-outputs-need-semantic-invariants-not-just-a-strict-schema": "A strict schema is only the beginning of a useful output contract.",
  "agent-tool-policy-needs-a-composition-rule-not-just-labels": "How permissions should compose when agents use tools.",
};

function LatestItem({ href, title, date, type, description }) {
  return <li className="reference-timeline-item">
    <span className="reference-timeline-marker" aria-hidden="true" />
    <div className="reference-timeline-main">
      <Link href={href} className="reference-timeline-title">{title} <span aria-hidden="true">↗</span></Link>
      <span className="reference-timeline-date">{date}</span>
      <span className="reference-timeline-type">{type}</span>
      {description && <p>{description}</p>}
    </div>
  </li>;
}

export default function ReferenceHome() {
  return <main id="main-content" className="reference-home reference-shell">
    <h1 className="sr-only">Shivam Maurya</h1>
    <section className="reference-intro" aria-label="About Shivam">
      <div className="reference-intro-copy">
        <p>I&apos;m a Senior AI Engineer at AlphaFMC, building AI products and the systems that make them useful in real work.</p>
        <p>I also founded <Link href="/work/explaingithub">ExplainGitHub</Link>, and write about practical AI engineering, developer tools, and the work behind shipping products.</p>
      </div>
      <div className="reference-home-images">
        <Image src="/shivam-maurya-profile.png" alt="Shivam Maurya" width={400} height={400} priority className="reference-portrait" />
        <Image src="/engraving-india-home.png" alt="" width={1024} height={1536} className="reference-mobile-artwork" aria-hidden="true" />
      </div>
    </section>
    <section className="reference-latest" aria-labelledby="latest-heading">
      <div className="reference-section-heading"><h2 id="latest-heading">Latest</h2><span>Projects &amp; writing</span></div>
      <ol className="reference-timeline">
        {recentWork.slice(0, 2).map(({ slug, description }) => {
          const work = caseStudies.find((item) => item.slug === slug);
          return <LatestItem key={slug} href={`/work/${slug}`} title={work.heading} date={work.date} type="Project" description={description} />;
        })}
        {recentWriting.slice(0, 1).map((slug) => {
          const post = blogs.find((item) => item.slug === slug);
          return <LatestItem key={slug} href={`/writing/${slug}`} title={post.blogHeading} date={post.postedOn} type="Writing" description={writingDescriptions[slug]} />;
        })}
        {recentWork.slice(2, 4).map(({ slug, description }) => {
          const work = caseStudies.find((item) => item.slug === slug);
          return <LatestItem key={slug} href={`/work/${slug}`} title={work.heading} date={work.date} type="Project" description={description} />;
        })}
        {recentWriting.slice(1).map((slug) => {
          const post = blogs.find((item) => item.slug === slug);
          return <LatestItem key={slug} href={`/writing/${slug}`} title={post.blogHeading} date={post.postedOn} type="Writing" description={writingDescriptions[slug]} />;
        })}
        {recentWork.slice(4).map(({ slug, description }) => {
          const work = caseStudies.find((item) => item.slug === slug);
          return <LatestItem key={slug} href={`/work/${slug}`} title={work.heading} date={work.date} type="Project" description={description} />;
        })}
      </ol>
      <div className="reference-index-links"><Link href="/work">All projects →</Link><Link href="/writing">All writing →</Link><Link href="/about">About me →</Link></div>
    </section>
  </main>;
}
