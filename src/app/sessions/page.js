import Image from "next/image";

export const metadata = {
  title: "Speaking",
  description: "Workshops and talks by Shivam Maurya on AI, programming, and technology careers.",
};

const sessions = [
  {
    year: "2024",
    title: "Ladies in Tech Summit",
    description: "A session on programming, AI in engineering, and using modern AI tools for career development at the University of Energy and Natural Resources.",
    image: "/summit.png",
    imageAlt: "Ladies in Tech Summit event poster",
    href: "https://www.linkedin.com/posts/shivam--maurya_summit-by-shivam-maurya-activity-7219559035400855553-Ra7s",
  },
  {
    year: "2023",
    title: "Get Started with AI Workshop",
    description: "A three-day practical workshop covering AI fundamentals, GPT-based applications, content generation, and hands-on development for more than 60 participants.",
    image: "/get-started-with-ai-workshop.jpeg",
    imageAlt: "Participants in the Get Started with AI workshop",
    href: "https://thingqbator.nasscomfoundation.org/main/eventdetail/650813ee3afae5376461e330",
  },
  {
    year: "2022",
    title: "Python 101 for Students in Ghana",
    description: "A three-month live course covering Python fundamentals, intermediate programming, project work, and an introduction to machine learning.",
    image: "/GHANA.jpg",
    imageAlt: "Python 101 live course presentation",
    href: "https://www.linkedin.com/posts/shivam--maurya_python-101-live-session-activity-6987844195424088064-KeGV",
  },
];

export default function SessionsPage() {
  return (
    <main id="main-content" className="reference-page reference-shell reference-sessions">
      <h1>Speaking &amp; teaching</h1>
      <p className="reference-sessions-intro">Selected workshops and community sessions on AI, programming, and building technology careers.</p>
      <div className="reference-sessions-list">
        {sessions.map((session) => (
          <article className="reference-session" key={session.title}>
            <Image
              src={session.image}
              alt={session.imageAlt}
              width={640}
              height={480}
              sizes="(max-width: 760px) calc(100vw - 40px), 220px"
              className="reference-session-image"
            />
            <div>
              <p className="reference-session-year">{session.year}</p>
              <h2>{session.title}</h2>
              <p>{session.description}</p>
              <a href={session.href} target="_blank" rel="noopener noreferrer">View session ↗</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
