import Header from "@/components/Header";
import { blogs } from "@/server/data";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Notes on enterprise AI, developer tools, architecture, and dependable AI systems.",
};

export default function BlogPage() {
  return (
    <main>
      <Header />
      <section className="site-shell page-section">
        <p className="eyebrow">Writing</p>
        <h1 className="display-title mt-4 max-w-[800px]">Notes from building AI systems.</h1>
        <p className="mt-8 max-w-[680px] body-copy">
          Essays on enterprise AI, developer tooling, architecture, and the practical constraints
          that separate useful systems from convincing demos.
        </p>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          <div className="border-t border-[#171714]">
            {blogs.map((post) => (
              <article key={post.slug} className="grid gap-4 border-b border-[#d8d5cc] py-8 md:grid-cols-[180px_1fr_auto] md:gap-8 md:items-baseline">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b84a2b]">{post.postedAt}</p>
                  <p className="mt-2 text-sm text-[#68675f]">{post.postedOn}</p>
                </div>
                <div>
                  <h2 className="font-serif text-3xl leading-tight md:text-4xl">{post.blogHeading}</h2>
                  <p className="mt-4 max-w-[680px] text-sm leading-7 text-[#4f4e48]">{post.content}</p>
                </div>
                <Link href={`/blog/${post.slug}`} className="text-link whitespace-nowrap">Read</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
