import Header from "@/components/Header";
import { books } from "@/server/data";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Books", description: "Beginner-friendly books by Shivam Maurya on Python, data science, and NLP." };

export default function EbooksPage() {
  return (
    <main>
      <Header />
      <section className="site-shell page-section">
        <p className="eyebrow">Books</p>
        <h1 className="display-title mt-4 max-w-[760px]">Practical introductions to programming and AI.</h1>
        <p className="mt-8 max-w-[650px] body-copy">Beginner-friendly guides written during my work in technical education.</p>
      </section>
      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section">
          {books.map((book) => (
            <article key={book.id} className="grid gap-7 border-t border-[#d8d5cc] py-8 first:border-[#171714] md:grid-cols-[180px_1fr_auto] md:gap-10">
              <Image src={book.images[0]} alt="" width={600} height={800} className="aspect-[3/4] w-full object-cover" />
              <div>
                <p className="eyebrow">{book.postedOn}</p>
                <h2 className="mt-2 font-serif text-3xl">{book.bookHeading}</h2>
                <p className="mt-2 text-sm font-semibold text-[#68675f]">{book.bookSubHeading}</p>
                <p className="mt-4 max-w-[600px] text-sm leading-7 text-[#4f4e48]">{book.description}</p>
              </div>
              <Link href={book.slug} target="_blank" className="text-link h-fit whitespace-nowrap">View book</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
