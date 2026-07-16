"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";

export default function NewslettersPage() {
  const [newsletters, setNewsletters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/newsletters", { cache: "no-store" })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Unable to load newsletters")))
      .then((data) => setNewsletters(data.newsletters || []))
      .catch(() => setNewsletters([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main>
      <Header />
      <section className="site-shell page-section">
        <p className="eyebrow">Newsletter archive</p>
        <h1 className="display-title mt-4 max-w-[780px]">AI and automation notes.</h1>
        <p className="mt-8 max-w-[650px] body-copy">An archive of newsletter issues on applied AI, automation, and practical implementation.</p>
      </section>
      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          {loading ? <p className="text-sm text-[#68675f]">Loading archive...</p> : null}
          {!loading && newsletters.length === 0 ? <p className="text-sm text-[#68675f]">The newsletter archive is currently unavailable.</p> : null}
          <div className="border-t border-[#171714]">
            {newsletters.slice(0, 12).map((newsletter, index) => (
              <article key={`${newsletter.url}-${index}`} className="grid gap-4 border-b border-[#d8d5cc] py-7 md:grid-cols-[160px_1fr_auto] md:gap-8 md:items-baseline">
                <p className="text-sm text-[#68675f]">{newsletter.date}</p>
                <div>
                  <h2 className="font-serif text-3xl">{newsletter.title}</h2>
                  <p className="mt-3 max-w-[650px] text-sm leading-7 text-[#4f4e48]">{newsletter.description}</p>
                </div>
                <a href={newsletter.url} target="_blank" rel="noreferrer" className="text-link whitespace-nowrap">Read issue</a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
