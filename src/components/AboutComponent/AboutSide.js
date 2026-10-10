import { companiesData, invariants } from "@/server/data";
import Image from "next/image";
import Link from "next/link";

export default function AboutSide() {
  return <main id="main-content" className="reference-page reference-shell reference-about">
    <h1>About</h1>
    <div className="reference-about-intro">
      <div>
        <p>I&apos;m Shivam Maurya, a Senior AI Engineer at AlphaFMC. I build internal AI products for financial-services teams and the shared services that make them reliable: model access, identity, evaluation, and delivery.</p>
        <p>I also founded <Link href="/work/explaingithub">ExplainGitHub</Link>, a tool for understanding unfamiliar codebases. Before engineering full time, I taught Python and AI in India and Ghana. Teaching still shapes how I explain systems and design for the person using them.</p>
      </div>
      <Image src="/shivam-maurya-profile.png" alt="Shivam Maurya" width={320} height={360} className="reference-about-image" />
    </div>
    <section className="reference-about-section"><h2>What I work on</h2><ul>
      <li><strong>Enterprise AI infrastructure</strong><span>Model access, routing, identity, evaluation, and cloud delivery.</span></li>
      <li><strong>Applied AI products</strong><span>Useful workflows, backend services, and integrations built around real operating problems.</span></li>
      <li><strong>Developer tools</strong><span>Products that help engineers understand complex systems and act with confidence.</span></li>
    </ul></section>
    <section className="reference-about-section"><h2>How I work</h2><ul>{invariants.map(({ title, detail }) => <li key={title}><strong>{title}</strong><span>{detail}</span></li>)}</ul></section>
    <section className="reference-about-section" id="experience"><h2>Experience</h2><ul>{companiesData.map((company) => <li key={company.id}><strong>{company.companyName}</strong><span>{company.position} · {company.activeYears}</span></li>)}</ul></section>
    <div className="reference-index-links"><Link href="/work">Projects →</Link><Link href="/sessions">Speaking &amp; teaching →</Link><Link href="/connect">Contact →</Link></div>
  </main>;
}
