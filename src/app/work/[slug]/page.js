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

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="eyebrow">System outline</p>
            <div className="mt-5 border-t border-[#171714]">
              {project.architecture.map((item, index) => <p key={item} className="border-b border-[#d8d5cc] py-5 text-sm leading-7 text-[#4f4e48]"><span className="mr-4 text-[#b84a2b]">0{index + 1}</span>{item}</p>)}
            </div>
          </div>
          <div>
            <p className="eyebrow">What I learned</p>
            <div className="mt-5 border-t border-[#171714]">
              {project.learnings.map((item, index) => <p key={item} className="border-b border-[#d8d5cc] py-5 text-sm leading-7 text-[#4f4e48]"><span className="mr-4 text-[#b84a2b]">0{index + 1}</span>{item}</p>)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
