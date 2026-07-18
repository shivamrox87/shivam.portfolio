import { blogs } from "@/server/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogs.find((post) => post.slug === slug);

  return article
    ? { title: article.blogHeading, description: article.content }
    : { title: "Article Not Found" };
}

export function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function WritingPage({ params }) {
  const { slug } = await params;
  const article = blogs.find((post) => post.slug === slug);

  if (!article) notFound();

  return (
    <main>
      <article className="mx-auto w-full max-w-[820px] px-5 py-12 md:px-8 md:py-20">
        <Link href="/#writing" className="text-link">Back to home</Link>

        <header className="mt-12 border-b border-[#d8d5cc] pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#b84a2b]">
            {article.postedAt} · {article.postedOn}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.03] tracking-[-0.03em] md:text-7xl">
            {article.blogHeading}
          </h1>
          <p className="mt-8 max-w-[680px] font-serif text-2xl leading-[1.5] text-[#302f2b] md:text-3xl">
            {article.content}
          </p>
        </header>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-[#4f4e48] md:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-[#d8d5cc] pt-8 text-sm text-[#68675f]">
          Written by Shivam Maurya. <Link href="/#writing" className="text-link">More writing</Link>
        </div>
      </article>
    </main>
  );
}
