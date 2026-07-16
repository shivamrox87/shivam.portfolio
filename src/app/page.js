import Header from "@/components/Header";
import { blogs, selectedWork } from "@/server/data";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Header />

      <section className="site-shell page-section">
        <div className="grid gap-10 md:grid-cols-[300px_1fr] md:gap-16 lg:grid-cols-[340px_1fr] lg:gap-20">
          <div>
            <Image
              src="https://res.cloudinary.com/ddtfebvov/image/upload/v1735989459/IMG_8531_aerspw.webp"
              alt="Shivam Maurya"
              width={720}
              height={900}
              priority
              className="aspect-[4/5] w-full max-w-[360px] object-cover object-center"
            />
            <div className="mt-5 flex gap-5 text-sm text-[#68675f]">
              <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="hover:text-[#b84a2b]">LinkedIn</Link>
              <Link href="/connect" className="hover:text-[#b84a2b]">Contact</Link>
            </div>
          </div>

          <div className="md:pt-3">
            <p className="eyebrow">Senior AI Engineer</p>
            <h1 className="display-title mt-4">Shivam Maurya</h1>
            <div className="mt-8 max-w-[720px] space-y-5 body-copy">
              <p>
                I am a Senior AI Engineer at AlphaFMC, where I build secure AI infrastructure
                and internal systems for financial-services organisations.
              </p>
              <p>
                My work spans model gateways, identity and access, cloud delivery, backend
                services, and the product workflows that make AI useful inside real teams.
              </p>
              <p>
                Previously, I built applied AI products and automation systems, including Arya,
                a multilingual conversational product. I also founded Programming With Maurya,
                an education initiative focused on Python, data science, and applied AI.
              </p>
              <p>
                Outside my professional role, I am developing ExplainGitHub and writing about
                enterprise AI, developer tools, and dependable AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          <div className="grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="section-title mt-3">Systems and products</h2>
            </div>
            <div className="border-t border-[#171714]">
              {selectedWork.map((item) => (
                <article key={item.name} className="grid gap-4 border-b border-[#d8d5cc] py-7 sm:grid-cols-[0.42fr_1fr] sm:gap-8">
                  <div>
                    <p className="font-serif text-2xl">{item.name}</p>
                    <p className="mt-1 text-xs uppercase tracking-[0.14em] text-[#b84a2b]">{item.status}</p>
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-[#4f4e48]">{item.description}</p>
                    <Link href={item.href} className="text-link mt-4">Read more</Link>
                  </div>
                </article>
              ))}
              <Link href="/work" className="text-link mt-7">All work</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          <div className="grid gap-10 md:grid-cols-[0.35fr_1fr] md:gap-16">
            <div>
              <p className="eyebrow">Writing</p>
              <h2 className="section-title mt-3">Recent notes</h2>
            </div>
            <div className="border-t border-[#171714]">
              {blogs.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid gap-3 border-b border-[#d8d5cc] py-6 sm:grid-cols-[1fr_auto] sm:items-baseline">
                  <div>
                    <p className="font-serif text-2xl leading-tight transition-colors group-hover:text-[#b84a2b]">{post.blogHeading}</p>
                    <p className="mt-2 text-sm text-[#68675f]">{post.postedAt}</p>
                  </div>
                  <p className="text-sm text-[#68675f]">{post.postedOn}</p>
                </Link>
              ))}
              <Link href="/blog" className="text-link mt-7">All writing</Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
