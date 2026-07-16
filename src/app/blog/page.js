import Header from "@/components/Header";
import { blogs, writingFocus } from "@/server/data";
import Link from "next/link";

export const metadata = {
  title: "Field Notes",
  description:
    "Notes on building AI products, developer tools, enterprise systems, and the infrastructure behind them.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogs;

  return (
    <div className="bg-[#f5f3ef]">
      <Header textColor="#0d0d0d" />

      <section className="px-5 pb-16 pt-28 md:px-10 md:pb-24 md:pt-36">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]">
              Field Notes
            </p>
            <h1 className="mt-5 text-5xl font-medium leading-[1.04] text-[#0d0d0d] md:text-7xl">
              Lessons from building AI systems in the real world.
            </h1>
          </div>
          <p className="text-lg leading-8 text-[#0d0d0d]/68">
            Practical writing about developer AI, product decisions, architecture, and the
            constraints that separate a compelling demo from a dependable system.
          </p>
        </div>
      </section>

      {featured ? (
        <section className="px-5 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[32px] bg-[#0d0d0d]">
            <Link href={`/blog/${featured.slug}`} className="group grid lg:grid-cols-2">
              <div className="min-h-[300px] overflow-hidden lg:min-h-[520px]">
                <img
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  src={featured.image}
                  alt=""
                />
              </div>
              <div className="flex flex-col justify-between gap-16 p-7 md:p-10">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#EB5939]">
                    Featured note
                  </span>
                  <span className="text-sm text-[#e9e9e7]/40">{featured.postedOn}</span>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#e9e9e7]/45">
                    {featured.postedAt}
                  </p>
                  <h2 className="mt-4 text-3xl font-medium leading-tight text-[#e9e9e7] md:text-5xl">
                    {featured.blogHeading}
                  </h2>
                  <p className="mt-5 line-clamp-3 text-base leading-7 text-[#e9e9e7]/65">
                    {featured.content}
                  </p>
                  <span className="mt-8 inline-flex border-b border-[#EB5939] pb-1 text-sm font-medium uppercase tracking-[0.16em] text-[#e9e9e7]">
                    Read the note
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </section>
      ) : null}

      <section className="bg-[#e9e9e7] px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex items-end justify-between border-b border-[#0d0d0d]/15 pb-5">
            <h2 className="text-2xl font-medium text-[#0d0d0d] md:text-3xl">Latest notes</h2>
            <span className="text-sm uppercase tracking-[0.16em] text-[#0d0d0d]/40">
              Engineering · Product · AI
            </span>
          </div>
          <div className="grid gap-8 pt-8 md:grid-cols-2">
            {rest.map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="aspect-[16/10] overflow-hidden rounded-[24px] bg-[#0d0d0d]">
                    <img
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      src={post.image}
                      alt=""
                    />
                  </div>
                  <div className="mt-5 flex items-center justify-between gap-4 text-sm">
                    <span className="uppercase tracking-[0.16em] text-[#EB5939]">{post.postedAt}</span>
                    <span className="text-[#0d0d0d]/45">{post.postedOn}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-medium leading-tight text-[#0d0d0d] md:text-3xl">
                    {post.blogHeading}
                  </h3>
                  <p className="mt-4 line-clamp-2 text-base leading-7 text-[#0d0d0d]/65">
                    {post.content}
                  </p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EB5939] px-5 py-16 md:px-10 md:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#0d0d0d]/55">
              On the desk
            </p>
            <h2 className="mt-4 text-3xl font-medium text-[#0d0d0d] md:text-4xl">Writing next</h2>
          </div>
          <div className="border-t border-[#0d0d0d]/25">
            {writingFocus.map((topic, index) => (
              <div key={topic} className="flex gap-5 border-b border-[#0d0d0d]/25 py-5">
                <span className="text-sm text-[#0d0d0d]/50">0{index + 1}</span>
                <p className="text-lg leading-7 text-[#0d0d0d]">{topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
