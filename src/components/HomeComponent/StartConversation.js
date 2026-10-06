import Link from "next/link";
import { conversation, identity } from "@/app/home-data";

export default function StartConversation() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="conversation-heading">
      <div className="site-shell page-section">
        <p className="eyebrow">Contact</p>
        <h2 id="conversation-heading" className="display-title mt-3 max-w-[760px]">
          {conversation.heading}
        </h2>
        <p className="mt-8 max-w-[620px] body-copy">{conversation.intro}</p>

        <dl className="mt-12 border-t border-[#171714]">
          {conversation.openings.map((opening) => (
            <div
              key={opening.label}
              className="grid gap-2 border-b border-[#d8d5cc] py-6 sm:grid-cols-[0.32fr_0.68fr] sm:gap-8"
            >
              <dt className="font-serif text-xl">{opening.label}</dt>
              <dd className="text-sm leading-7 text-[#4f4e48]">{opening.body}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/connect"
            className="inline-flex bg-[#171714] px-6 py-3 text-sm font-semibold text-[#fbfaf7] transition-colors hover:bg-[#b84a2b]"
          >
            Start a conversation
          </Link>
          <a href={`mailto:${identity.email}`} className="text-link">
            or email {identity.email}
          </a>
        </div>
      </div>
    </section>
  );
}
