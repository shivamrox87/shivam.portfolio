import { blogs } from "@/server/data";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Practical writing on AI engineering, developer tools, and building useful products.",
};

export default function WritingPage() {
  // Section names are derived from the tags the posts actually carry, with the
  // infrastructure series pinned first. Deriving them means a post can never be
  // filed under a heading that misdescribes it, and a new tag appears on its own.
  const tags = [...new Set(blogs.map((post) => post.postedAt))];
  const orderedTags = ["AI Infrastructure", ...tags.filter((tag) => tag !== "AI Infrastructure")];
  const series = orderedTags
    .map((tag) => ({ title: tag, posts: blogs.filter((post) => post.postedAt === tag) }))
    .filter((group) => group.posts.length > 0);

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
        <p className="mt-5 max-w-[650px] text-sm leading-7 text-[#68675f]">
          {blogs.length} essays. Most follow a thesis pattern — the consistent shape is the
          series identity, not a template. The exceptions are where the story is.
        </p>

        {series.map((group) => (
          <section key={group.title} className="mt-14 border-t border-[#d8d5cc] pt-8">
            <h2 className="font-serif text-3xl">{group.title}</h2>
            <div className="mt-8 space-y-7">
              {group.posts.map((post) => (
                <article key={post.slug}>
                  <Link href={`/writing/${post.slug}`} className="group">
                    <h3 className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#b84a2b]">{post.blogHeading}</h3>
                  </Link>
                  <p className="mt-2 text-sm text-[#68675f]">{post.postedOn}</p>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
