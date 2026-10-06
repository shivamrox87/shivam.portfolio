import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Speaking", description: "Workshops and talks by Shivam Maurya on AI, programming, and technology careers." };

export default function SessionsPage() {
  return (
    <main id="main-content">
      <section className="site-shell page-section">
        <p className="eyebrow">Speaking</p>
        <h1 className="display-title mt-4 max-w-[780px]">Teaching and conversations about applied AI.</h1>
        <p className="mt-8 max-w-[680px] body-copy">I&apos;ve taught programming and AI through workshops and longer courses in India and Ghana.</p>
      </section>
      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell page-section grid gap-8 md:grid-cols-[240px_1fr] md:gap-12">
          <Image src="/summit.png" alt="Ladies in Tech Summit" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
          <div>
            <p className="eyebrow">Featured · 2024</p>
            <h2 className="mt-2 font-serif text-3xl">Ladies in Tech Summit</h2>
            <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#3A3F45]">A session on programming, AI in engineering, and using modern AI tools for career development at the University of Energy and Natural Resources.</p>
            <a href="https://www.linkedin.com/posts/shivam--maurya_summit-by-shivam-maurya-activity-7219559035400855553-Ra7s" target="_blank" rel="noreferrer" className="text-link mt-5">View session</a>
          </div>
        </div>
      </section>
      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell page-section grid gap-10 md:grid-cols-[0.3fr_1fr] md:gap-16">
          <div>
            <p className="eyebrow">Earlier</p>
            <h2 className="section-title mt-3">Workshops and courses</h2>
          </div>
          <div className="border-t border-[#16181B]">
            <div className="grid gap-2 border-b border-[#C7C9C4] py-6 sm:grid-cols-[110px_0.4fr_0.6fr] sm:gap-8">
              <p className="text-sm text-[#6B7076]">2023</p>
              <h3 className="font-serif text-xl">Get Started with AI</h3>
              <p className="text-sm leading-7 text-[#3A3F45]">
                A three-day practical workshop covering AI fundamentals, building GPT-based
                applications, and hands-on development. 60+ participants.
              </p>
            </div>
            <div className="grid gap-2 border-b border-[#C7C9C4] py-6 sm:grid-cols-[110px_0.4fr_0.6fr] sm:gap-8">
              <p className="text-sm text-[#6B7076]">2022</p>
              <h3 className="font-serif text-xl">Python 101, Ghana</h3>
              <p className="text-sm leading-7 text-[#3A3F45]">
                A three-month live course taking students from Python fundamentals through
                project work and an introduction to machine learning.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-[#C7C9C4]">
        <div className="site-shell py-10">
          <p className="text-base leading-8 text-[#3A3F45]">Three years of teaching and workshops across India and Ghana. <Link href="/about#experience" className="font-semibold underline underline-offset-4">Read more on About</Link>.</p>
        </div>
      </section>
    </main>
  );
}
