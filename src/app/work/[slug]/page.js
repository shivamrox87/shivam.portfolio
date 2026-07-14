import Header from "@/components/Header";
import Link from "next/link";
import { caseStudies } from "@/server/data";

function getProject(slug) {
  return caseStudies.find((item) => item.slug === slug);
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested project does not exist.",
    };
  }

  return {
    title: `${project.heading} | Work`,
    description: project.subHeading,
    openGraph: {
      title: project.heading,
      description: project.subHeading,
      images: project.heroImage ? [{ url: project.heroImage, alt: project.heading }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: project.heading,
      description: project.subHeading,
      images: project.heroImage ? [project.heroImage] : [],
    },
  };
}

export default async function WorkDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0d0d0d]">
        <Header textColor="#e9e9e7" />
        <div className="mx-auto flex max-w-[960px] flex-col px-5 pb-20 pt-32 text-[#e9e9e7] md:px-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#EB5939]">Not found</p>
          <h1 className="mt-4 text-4xl font-medium">This case study is missing.</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#e9e9e7]/70">
            This project is not available. It may have moved or the link may be outdated.
          </p>
          <Link
            href="/work"
            className="mt-8 inline-flex w-fit items-center justify-center bg-[#E9E9E7] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#0d0d0d]"
          >
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#e9e9e7]">
      <div className="relative overflow-hidden bg-[#0d0d0d]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,13,13,0.55),rgba(13,13,13,0.95))]" />
        <Header textColor="#e9e9e7" />
        <div className="relative mx-auto flex max-w-[1200px] flex-col gap-10 px-5 pb-20 pt-28 md:px-10 md:pb-24 md:pt-36">
          <div className="flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#EB5939]">
              {project.category}
            </span>
            <span className="rounded-full border border-white/15 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#e9e9e7]/70">
              {project.status}
            </span>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-4xl font-medium leading-tight text-[#e9e9e7] md:text-6xl">
              {project.heading}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#e9e9e7]/75 md:text-xl">
              {project.subHeading}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-[#E9E9E7] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-[#E9E9E7]"
            >
              Back to Work
            </Link>
            <Link
              href="/connect"
              className="inline-flex items-center justify-center border border-white/15 px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#e9e9e7] transition hover:border-[#EB5939] hover:bg-[#EB5939]"
            >
              Discuss Similar Work
            </Link>
          </div>
        </div>
      </div>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Overview
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              {project.summary}
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-[28px] border border-[#0d0d0d]/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">Role</p>
              <p className="mt-3 text-lg leading-7 text-[#0d0d0d]">{project.role}</p>
            </div>
            <div className="rounded-[28px] border border-[#0d0d0d]/10 bg-white p-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">When</p>
              <p className="mt-3 text-lg leading-7 text-[#0d0d0d]">{project.date}</p>
            </div>
            <div className="rounded-[28px] border border-[#0d0d0d]/10 bg-white p-6 md:col-span-2">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                Stack + Focus
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[#0d0d0d]/10 px-4 py-2 text-xs uppercase tracking-[0.14em] text-[#0d0d0d]/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0d] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          <div className="rounded-[28px] bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">Problem</p>
            <p className="mt-4 text-base leading-7 text-[#e9e9e7]/75">{project.problem}</p>
          </div>
          <div className="rounded-[28px] bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">Solution</p>
            <p className="mt-4 text-base leading-7 text-[#e9e9e7]/75">{project.solution}</p>
          </div>
          <div className="rounded-[28px] bg-white/5 p-7">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">Outcome</p>
            <p className="mt-4 text-base leading-7 text-[#e9e9e7]/75">{project.outcome}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Architecture
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              How the system is framed
            </h2>
            <p className="mt-5 text-base leading-7 text-[#0d0d0d]/75">
              The system is broken into a small number of deliberate stages, each designed to
              make context easier to trace and the final experience more dependable.
            </p>
          </div>
          <div className="grid gap-4">
            {project.architecture.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-[#0d0d0d]/10 bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/45">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg leading-7 text-[#0d0d0d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f5f3ef] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Key Learnings
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              What this project says about how I build
            </h2>
          </div>
          <div className="grid gap-4">
            {project.learnings.map((item, index) => (
              <div key={item} className="rounded-[28px] border border-[#0d0d0d]/10 bg-white p-6">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/45">
                  0{index + 1}
                </p>
                <p className="mt-4 text-lg leading-7 text-[#0d0d0d]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
