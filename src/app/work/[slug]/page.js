import ArchitectureFlow from "@/components/ArchitectureFlow";
import Header from "@/components/Header";
import { caseStudies } from "@/server/data";
import Link from "next/link";
import { notFound } from "next/navigation";

function getProject(slug) {
  return caseStudies.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  return project ? { title: `${project.heading} | Work`, description: project.subHeading } : { title: "Project Not Found" };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main>
      <Header />
      <section className="site-shell page-section">
        <Link href="/work" className="text-link">Back to work</Link>
        <p className="eyebrow mt-12">{project.category} · {project.status}</p>
        <h1 className="display-title mt-4">{project.heading}</h1>
        <p className="mt-8 max-w-[760px] body-copy">{project.subHeading}</p>
        <div className="mt-10 grid gap-6 border-y border-[#d8d5cc] py-6 text-sm sm:grid-cols-3">
          <div><p className="eyebrow">Role</p><p className="mt-2 text-[#4f4e48]">{project.role}</p></div>
          <div><p className="eyebrow">Stage</p><p className="mt-2 text-[#4f4e48]">{project.status} · {project.date}</p></div>
          <div><p className="eyebrow">Focus</p><p className="mt-2 text-[#4f4e48]">{project.stack.join(", ")}</p></div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-16">
          <div><p className="eyebrow">Case study</p><h2 className="section-title mt-3">Problem to outcome</h2></div>
          <div className="border-t border-[#171714]">
            {[["Problem", project.problem], ["Approach", project.solution], ["Outcome", project.outcome]].map(([label, value]) => (
              <div key={label} className="grid gap-3 border-b border-[#d8d5cc] py-7 sm:grid-cols-[140px_1fr] sm:gap-8">
                <h3 className="font-serif text-2xl">{label}</h3>
                <p className="text-base leading-8 text-[#4f4e48]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="architecture" className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          <p className="eyebrow">Architecture</p>
          <h2 className="section-title mt-3 max-w-[700px]">How the system is separated into responsibilities</h2>
          <ArchitectureFlow title={project.heading} steps={project.architecture} />
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">Constraints</p>
            <div className="mt-5 border-t border-[#171714]">
              {project.constraints.map((item, index) => (
                <div key={item} className="grid grid-cols-[32px_1fr] gap-3 border-b border-[#d8d5cc] py-5">
                  <span className="text-xs text-[#b84a2b]">0{index + 1}</span>
                  <p className="text-sm leading-7 text-[#4f4e48]">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow">Technical decisions</p>
            <div className="mt-5 border-t border-[#171714]">
              {project.decisions.map((item, index) => (
                <div key={item} className="grid grid-cols-[32px_1fr] gap-3 border-b border-[#d8d5cc] py-5">
                  <span className="text-xs text-[#b84a2b]">0{index + 1}</span>
                  <p className="text-sm leading-7 text-[#4f4e48]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.32fr_1fr] md:gap-16">
          <div><p className="eyebrow">Reflection</p><h2 className="section-title mt-3">What the work taught me</h2></div>
          <div className="border-t border-[#171714]">
            {project.learnings.map((item, index) => (
              <div key={item} className="grid grid-cols-[40px_1fr] gap-4 border-b border-[#d8d5cc] py-6">
                <span className="text-xs text-[#b84a2b]">0{index + 1}</span>
                <p className="font-serif text-2xl leading-snug text-[#302f2b]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
