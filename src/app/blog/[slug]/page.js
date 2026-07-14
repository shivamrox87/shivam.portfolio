import Header from "@/components/Header";
import { blogs } from "@/server/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    return { title: "Article Not Found | Shivam Maurya" };
  }

  return {
    title: `${blog.blogHeading} | Shivam Maurya`,
    description: blog.content.slice(0, 155),
    openGraph: {
      title: blog.blogHeading,
      description: blog.content.slice(0, 155),
      images: [{ url: blog.image, alt: blog.blogHeading }],
    },
  };
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogReadPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((post) => post.slug === slug);

  if (!blog) {
    notFound();
  }

  const related = blogs.filter((post) => post.slug !== slug).slice(0, 2);

  return (
    <div className="bg-[#f5f3ef]">
      <Header textColor="#0d0d0d" />

      <article>
        <header className="px-5 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-[960px]">
            <Link
              href="/blog"
              className="text-sm font-medium uppercase tracking-[0.2em] text-[#EB5939]"
            >
              ← Field notes
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm">
              <span className="uppercase tracking-[0.16em] text-[#EB5939]">{blog.postedAt}</span>
              <span className="text-[#0d0d0d]/35">•</span>
              <span className="text-[#0d0d0d]/50">{blog.postedOn}</span>
            </div>
            <h1 className="mt-5 text-4xl font-medium leading-[1.08] text-[#0d0d0d] md:text-6xl">
              {blog.blogHeading}
            </h1>
            <p className="mt-7 text-base text-[#0d0d0d]/55">By {blog.postedBy}</p>
          </div>
        </header>

        <div className="px-5 md:px-10">
          <div className="mx-auto max-w-[1200px] overflow-hidden rounded-[28px]">
            <img className="aspect-[16/8] w-full object-cover" src={blog.image} alt="" />
          </div>
        </div>

        <div className="px-5 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-[760px]">
            <p className="text-xl leading-9 text-[#0d0d0d]/80 md:text-2xl md:leading-10">
              {blog.content}
            </p>
            <div className="mt-14 border-l-2 border-[#EB5939] pl-6">
              <p className="text-lg leading-8 text-[#0d0d0d]/65">
                This field note is part of an ongoing series about building dependable AI
                products, developer tools, and production infrastructure.
              </p>
            </div>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="bg-[#0d0d0d] px-5 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1200px]">
            <div className="flex items-end justify-between border-b border-white/10 pb-5">
              <h2 className="text-2xl font-medium text-[#e9e9e7] md:text-3xl">Keep reading</h2>
              <Link href="/blog" className="text-sm uppercase tracking-[0.16em] text-[#EB5939]">
                All notes
              </Link>
            </div>
            <div className="grid gap-8 pt-8 md:grid-cols-2">
              {related.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                  <p className="text-sm uppercase tracking-[0.16em] text-[#EB5939]">
                    {post.postedAt}
                  </p>
                  <h3 className="mt-4 text-2xl font-medium leading-tight text-[#e9e9e7] transition group-hover:text-[#EB5939] md:text-3xl">
                    {post.blogHeading}
                  </h3>
                  <p className="mt-4 line-clamp-2 text-base leading-7 text-[#e9e9e7]/55">
                    {post.content}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
}
