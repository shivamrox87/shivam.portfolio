import { blogs } from "@/server/data";
import mediumPostsFallback from "@/data/medium-posts-fallback.json";
import { load } from "cheerio";
import Link from "next/link";
import Parser from "rss-parser";

export const revalidate = 3600;

const mediumProfile = "https://medium.com/@shivam--maurya";

async function getMediumPosts() {
  try {
    const response = await fetch("https://medium.com/feed/@shivam--maurya", {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!response.ok) return mediumPostsFallback;

    const parser = new Parser({ customFields: { item: [["content:encoded", "contentEncoded"]] } });
    const feed = await parser.parseString(await response.text());
    const posts = feed.items.slice(0, 10).flatMap((item) => {
      if (!item.title || !item.link) return [];
      let url;
      try { url = new URL(item.link); } catch { return []; }
      if (url.hostname !== "medium.com" && !url.hostname.endsWith(".medium.com")) return [];

      const $ = load(item.contentEncoded || item.content || "");
      const excerpt = $("p").toArray().map((paragraph) => $(paragraph).text().trim())
        .find((text) => text.length > 35 && !text.includes("Continue reading on Medium"));

      return [{
        title: item.title,
        href: `${url.origin}${url.pathname}`,
        publishedAt: item.pubDate || null,
        excerpt: excerpt?.slice(0, 180) || "",
      }];
    });
    return posts.length ? posts : mediumPostsFallback;
  } catch {
    return mediumPostsFallback;
  }
}

export const metadata = {
  title: "Writing",
  description: "Notes on AI engineering, developer tools, and building useful products.",
};

export default async function WritingPage() {
  const mediumPosts = await getMediumPosts();
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
    <section className="reference-medium" aria-labelledby="medium-heading">
      <div className="reference-medium-heading">
        <h2 id="medium-heading">On Medium</h2>
        <a href={mediumProfile} target="_blank" rel="noopener noreferrer">View profile ↗</a>
      </div>
      {mediumPosts.length ? <ul>
        {mediumPosts.map((post) => {
          const date = post.publishedAt ? new Date(post.publishedAt) : null;
          return <li key={post.href}>
          <div className="reference-medium-title">
            <a href={post.href} target="_blank" rel="noopener noreferrer">{post.title} ↗</a>
            {date && !Number.isNaN(date.valueOf()) ? <time dateTime={date.toISOString()}>{date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" })}</time> : null}
          </div>
          {post.excerpt ? <p>{post.excerpt}</p> : null}
        </li>; })}
      </ul> : <p className="reference-medium-fallback">More writing is available on my Medium profile.</p>}
    </section>
  </main>;
}
