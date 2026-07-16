import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export const metadata = { title: "Speaking", description: "Workshops and talks by Shivam Maurya on AI, programming, and technology careers." };

const sessions = [
  {
    title: "Ladies in Tech Summit",
    date: "2024",
    description: "A session on programming, AI in engineering, and using modern AI tools for career development at the University of Energy and Natural Resources.",
    image: "/summit.png",
    link: "https://www.linkedin.com/posts/shivam--maurya_summit-by-shivam-maurya-activity-7219559035400855553-Ra7s",
  },
  {
    title: "Get Started with AI Workshop",
    date: "2023",
    description: "A three-day practical workshop covering AI fundamentals, GPT-based applications, content generation, and hands-on development for more than 60 participants.",
    image: "https://thingqbator.s3.ap-south-1.amazonaws.com/programdetail-1695399026712.jpeg",
    link: "https://thingqbator.nasscomfoundation.org/main/eventdetail/650813ee3afae5376461e330",
  },
  {
    title: "Python 101 for Students in Ghana",
    date: "2022",
    description: "A three-month live course covering Python fundamentals, intermediate programming, project work, and an introduction to machine learning.",
    image: "/GHANA.jpg",
    link: "https://www.linkedin.com/posts/shivam--maurya_python-101-live-session-activity-6987844195424088064-KeGV",
  },
];

export default function SessionsPage() {
  return (
    <main>
      <Header />
      <section className="site-shell page-section">
        <p className="eyebrow">Speaking</p>
        <h1 className="display-title mt-4 max-w-[780px]">Teaching and conversations about applied AI.</h1>
        <p className="mt-8 max-w-[680px] body-copy">Selected workshops and community sessions on AI, programming, and building technology careers.</p>
      </section>
      <section className="border-t border-[#d8d5cc]">
        <div className="site-shell page-section border-t-0">
          {sessions.map((session) => (
            <article key={session.title} className="grid gap-7 border-t border-[#d8d5cc] py-8 first:border-[#171714] md:grid-cols-[240px_1fr_auto] md:items-start md:gap-10">
              <Image src={session.image} alt="" width={800} height={600} className="aspect-[4/3] w-full object-cover" />
              <div>
                <p className="eyebrow">{session.date}</p>
                <h2 className="mt-2 font-serif text-3xl">{session.title}</h2>
                <p className="mt-4 max-w-[620px] text-sm leading-7 text-[#4f4e48]">{session.description}</p>
              </div>
              <Link href={session.link} target="_blank" className="text-link whitespace-nowrap">View session</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
