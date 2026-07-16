import Header from "@/components/Header";
import { blogs } from "@/server/data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = blogs.find((post) => post.slug === slug);
  return blog ? { title: blog.blogHeading, description: blog.content.slice(0, 155) } : { title: "Article Not Found" };
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogReadPage({ params }) {
  const { slug } = await params;
  const blog = blogs.find((post) => post.slug === slug);
  if (!blog) notFound();

  const related = blogs.filter((post) => post.slug !== slug).slice(0, 2);

  return (
    <main>
      <Header />
      <article>
        <header className="site-shell page-section">
          <Link href="/blog" className="text-link">Back to writing</Link>
          <p className="eyebrow mt-12">{blog.postedAt} · {blog.postedOn}</p>
          <h1 className="display-title mt-4 max-w-[900px]">{blog.blogHeading}</h1>
          <p className="mt-7 text-sm text-[#68675f]">By {blog.postedBy}</p>
        </header>

        <div className="site-shell">
          <Image src={blog.image} alt="" width={1600} height={700} className="aspect-[16/7] w-full object-cover" />
        </div>

        <div className="site-shell py-14 md:py-20">
          <div className="mx-auto max-w-[720px]">
            <p className="font-serif text-2xl leading-[1.55] text-[#302f2b] md:text-3xl">{blog.content}</p>
            <p className="mt-10 border-l border-[#b84a2b] pl-5 text-sm leading-7 text-[#68675f]">
              This note is part of an ongoing series about dependable AI products, developer tools, and production infrastructure.
            </p>
          </div>
        </div>
      </article>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          <p className="eyebrow">Continue reading</p>
          <div className="mt-5 border-t border-[#171714]">
            {related.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-2 border-b border-[#d8d5cc] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
                <h2 className="font-serif text-2xl group-hover:text-[#b84a2b]">{post.blogHeading}</h2>
                <span className="text-sm text-[#68675f]">{post.postedOn}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
