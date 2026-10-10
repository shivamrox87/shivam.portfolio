import { blogs } from "@/server/data";
import Link from "next/link";

export const metadata = {
  title: "Writing",
  description: "Notes on AI engineering, developer tools, and building useful products.",
};

export default function WritingPage() {
  const groups = blogs.reduce((result, post) => {
    const year = post.postedOn.match(/20\d{2}/)?.[0] || "Earlier";
    (result[year] ||= []).push(post);
    return result;
  }, {});
  const years = Object.keys(groups).sort((a, b) => Number(b) - Number(a));
  return <main id="main-content" className="reference-page reference-shell">
    <h1>Writing</h1>
    <p className="reference-page-lead">Notes on AI systems, product work, and what I learn along the way.</p>
    {years.map((year) => <section className="reference-writing-group" key={year} aria-label={`Writing from ${year}`}>
      <h2>{year}</h2>
      <ul>{groups[year].map((post) => <li key={post.slug}><Link href={`/writing/${post.slug}`}>{post.blogHeading}</Link><time>{post.postedOn.replace(/,?\s*20\d{2}/, "")}</time></li>)}</ul>
    </section>)}
  </main>;
}
