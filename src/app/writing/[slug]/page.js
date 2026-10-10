import { blogs } from "@/server/data";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = blogs.find((post) => post.slug === slug);

  return article
    ? {
        title: article.blogHeading,
        description: article.content,
        openGraph: {
          title: article.blogHeading,
          description: article.content,
          type: "article",
          url: `/writing/${article.slug}`,
          authors: [article.postedBy],
          images: [
            {
              url: `/writing/${article.slug}/opengraph-image`,
              width: 1200,
              height: 630,
              alt: article.blogHeading,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: article.blogHeading,
          description: article.content,
          images: [`/writing/${article.slug}/opengraph-image`],
        },
      }
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
    <main id="main-content" className="reference-detail">
      <article className="mx-auto w-full max-w-[820px] px-5 py-12 md:px-8 md:py-20">
        <Link href="/writing" className="text-link">Back to writing</Link>

        <header className="mt-12 border-b border-[#C7C9C4] pb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#1F4FD8]">
            {article.postedAt} · {article.postedOn}
          </p>
          <h1 className="mt-5 font-serif text-5xl leading-[1.03] tracking-[-0.03em] md:text-7xl">
            {article.blogHeading}
          </h1>
          <p className="mt-8 max-w-[680px] font-serif text-2xl leading-[1.5] text-[#302f2b] md:text-3xl">
            {article.content}
            {article.contentLink ? (
              <Link href={article.contentLink.href} className="text-link align-baseline text-2xl md:text-3xl">
                {article.contentLink.label}
              </Link>
            ) : null}
            {article.contentAfter}
          </p>
        </header>

        {article.prompt ? (
          <section className="mt-12 md:mt-16">
            <h2 className="font-serif text-3xl leading-tight md:text-4xl">Prompt</h2>
            <pre className="mt-5 overflow-x-auto whitespace-pre-wrap border border-[#C7C9C4] bg-[#f3f0e9] p-5 font-mono text-sm leading-7 text-[#302f2b] md:p-7">
              {article.prompt}
            </pre>
          </section>
        ) : null}

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-16">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-3xl leading-tight md:text-4xl">{section.heading}</h2>
              <div className="mt-5 space-y-5 text-base leading-8 text-[#3A3F45] md:text-lg">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.sources?.length ? (
                  <ul className="space-y-2 pt-1 text-sm leading-6">
                    {section.sources.map((source) => (
                      <li key={source.href}>
                        <a
                          className="text-link"
                          href={source.href}
                          rel="noreferrer"
                          target="_blank"
                        >
                          {source.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-16 border-t border-[#C7C9C4] pt-8 text-sm text-[#6B7076]">
          Written by Shivam Maurya. <Link href="/writing" className="text-link">More writing</Link>
        </div>
      </article>
    </main>
  );
}
