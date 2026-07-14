import Header from "@/components/Header";
import Link from "next/link";
import { currentBuilds, playGround, writingFocus } from "@/server/data";

export const metadata = {
  title: "Now",
  description:
    "What Shivam Maurya is currently building, researching, and writing about across AI products and developer tooling.",
};

export default function BuildingPage() {
  return (
    <div className="bg-[#0d0d0d]">
      <Header textColor="#e9e9e7" />

      <section className="relative overflow-hidden px-5 pb-20 pt-28 md:px-10 md:pb-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,_rgba(235,89,57,0.3),_transparent_32%),radial-gradient(circle_at_85%_75%,_rgba(69,123,157,0.24),_transparent_28%)]" />
        <div className="absolute inset-0 bg-[url('/grain.png')] opacity-[0.08]" />
        <div className="relative mx-auto max-w-[1200px]">
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-[#EB5939]">
            <span className="h-2 w-2 rounded-full bg-[#EB5939]" />
            Updated July 2026
          </div>
          <h1 className="mt-6 max-w-5xl text-5xl font-medium leading-[1.04] text-[#e9e9e7] md:text-7xl">
            What I&apos;m building, testing, and thinking about now.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#e9e9e7]/70 md:text-xl">
            This is the working layer of the site: active products, current research, and the
            questions shaping my next set of decisions.
          </p>
        </div>
      </section>

      <section className="px-5 pb-20 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
            <h2 className="text-2xl font-medium text-[#e9e9e7] md:text-3xl">Active builds</h2>
            <span className="text-sm uppercase tracking-[0.16em] text-[#e9e9e7]/40">
              {currentBuilds.length} products
            </span>
          </div>
          <div className="grid gap-5 lg:grid-cols-2">
            {currentBuilds.map((build, index) => (
              <article
                key={build.slug}
                className="group relative min-h-[390px] overflow-hidden rounded-[32px] border border-white/10 p-7 md:p-9"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${build.accent} opacity-60 transition duration-700 group-hover:scale-105 group-hover:opacity-80`} />
                <div className="absolute inset-0 bg-[url('/grain.png')] opacity-10" />
                <div className="relative flex h-full flex-col justify-between gap-16">
                  <div className="flex items-start justify-between gap-5">
                    <span className="rounded-full border border-white/20 bg-black/10 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/75 backdrop-blur">
                      {build.stage}
                    </span>
                    <span className="text-sm text-white/45">0{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-4xl font-medium text-white">{build.name}</h3>
                    <p className="mt-4 max-w-xl text-base leading-7 text-white/75">{build.summary}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {build.focus.map((item) => (
                        <span key={item} className="text-xs uppercase tracking-[0.14em] text-white/55">
                          {item}
                        </span>
                      ))}
                    </div>
                    {build.slug === "explaingithub" || build.slug === "reqbeam" ? (
                      <Link
                        href={`/work/${build.slug}`}
                        className="mt-7 inline-flex border-b border-white/60 pb-1 text-sm font-medium uppercase tracking-[0.16em] text-white"
                      >
                        View case study
                      </Link>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Research Queue
            </p>
            <h2 className="mt-4 text-3xl font-medium leading-tight text-[#0d0d0d] md:text-5xl">
              Exploring the systems behind useful AI products.
            </h2>
            <div className="mt-9 border-t border-[#0d0d0d]/15">
              {playGround.map((item, index) => (
                <div key={item.name} className="flex gap-5 border-b border-[#0d0d0d]/15 py-5">
                  <span className="text-sm text-[#EB5939]">0{index + 1}</span>
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#0d0d0d]/45">
                      {item.category}
                    </p>
                    <p className="mt-2 text-xl text-[#0d0d0d]">{item.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[#0d0d0d] p-7 md:p-9">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Writing Next
            </p>
            <div className="mt-8 space-y-4">
              {writingFocus.map((topic, index) => (
                <div key={topic} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-xs text-[#e9e9e7]/35">0{index + 1}</p>
                  <p className="mt-3 text-lg leading-7 text-[#e9e9e7]">{topic}</p>
                </div>
              ))}
            </div>
            <Link
              href="/blog"
              className="mt-8 inline-flex bg-[#e9e9e7] px-5 py-3 text-sm font-medium uppercase tracking-[0.16em] text-[#0d0d0d] transition hover:bg-[#EB5939] hover:text-white"
            >
              Read field notes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
