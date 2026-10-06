import Link from "next/link";
import { decommissioned, operational, proposed } from "@/app/home-data";

function StatusRow({ state, name, status, note, href }) {
  const live = state === "operational";
  return (
    <div className="mono-row">
      <p className="mono flex items-center gap-2">
        <span
          aria-hidden="true"
          className={`inline-block h-[7px] w-[7px] shrink-0 rounded-full ${live ? "bg-[#3f7d4e]" : "bg-[#b84a2b]"}`}
        />
        <span className={live ? "text-[#3f7d4e]" : "text-[#b84a2b]"}>{live ? "running" : "stopped"}</span>
      </p>
      <div>
        <h3 className="font-serif text-2xl leading-tight">
          {href ? (
            <Link href={href} className="hover:text-[#b84a2b]">
              {name}
            </Link>
          ) : (
            name
          )}
        </h3>
        <p className="mono mt-2 text-[#68675f]">{status}</p>
        {note ? <p className="mt-3 max-w-[620px] text-sm leading-7 text-[#4f4e48]">{note}</p> : null}
      </div>
    </div>
  );
}

export default function StatusBoard() {
  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="status-heading">
      <div className="site-shell page-section">
        <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 id="status-heading" className="section-title">Status</h2>
          <p className="mono text-[#68675f]">
            {operational.length} running / {decommissioned.length} decommissioned
          </p>
        </div>

        <div className="mt-10 border-t border-[#171714]">
          {operational.map((entry) => (
            <StatusRow key={`run-${entry.name}`} state="operational" {...entry} />
          ))}
          {decommissioned.map((entry) => (
            <StatusRow key={`stop-${entry.name}`} state="stopped" {...entry} />
          ))}
        </div>

        <p className="mono mt-10 text-[#68675f]">
          Shelved, not promoted: {proposed.join(" · ")}
        </p>
        <p className="mt-3 max-w-[620px] text-xs leading-6 text-[#68675f]">
          Two services were shut down in September 2026 on purpose, to put everything behind one
          product instead of three.
        </p>
      </div>
    </section>
  );
}
