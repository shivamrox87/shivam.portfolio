import { blogs } from "@/server/data";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Practical writing on AI engineering, developer tools, and building useful products.",
};

export default function WritingPage() {
  return (
    <main id="main-content">
      <section className="mx-auto w-full max-w-[820px] px-5 pb-16 pt-24 md:px-8 md:pb-24 md:pt-32">
        <h1 className="font-serif text-4xl font-normal leading-tight tracking-[-0.02em] md:text-5xl">
          Things I&apos;ve written about
        </h1>
        <p className="mt-5 body-copy">
          I write when I have something practical to share, usually from the overlap of AI
          engineering, developer tools, and trying to make a product useful.
        </p>

        <div className="mt-10 space-y-7 border-t border-[#d8d5cc] pt-8">
          {blogs.map((post) => (
            <article key={post.slug}>
              <Link href={`/writing/${post.slug}`} className="group">
                <h2 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#b84a2b]">
                  {post.blogHeading}
                </h2>
              </Link>
              <p className="mt-2 text-sm text-[#68675f]">
                {post.postedAt} · {post.postedOn}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
