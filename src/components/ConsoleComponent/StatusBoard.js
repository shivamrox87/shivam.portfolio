import Link from "next/link";
import { decommissioned, operational, proposed } from "@/app/home-data";

function Row({ live, name, status, note, href }) {
  return (
    <tr className="border-t border-[#e4e0d5] align-top">
      <td className="w-[58px] py-3.5 pr-4 sm:w-[74px] sm:pr-5">
        <span className={`font-mono text-[10px] uppercase tracking-[0.16em] ${live ? "text-[#2f7d4f]" : "text-[#b84a2b]"}`}>
          <span aria-hidden="true" className={`led mr-2 ${live ? "led-live" : "led-dead"}`} />
          {live ? "run" : "stop"}
        </span>
      </td>
      <td className="py-3.5">
        <span className="font-mono text-[13px] text-[#171714]">
          {href ? (
            <Link href={href} className="border-b border-transparent transition-colors hover:border-[#b84a2b] hover:text-[#b84a2b]">
              {name}
            </Link>
          ) : (
            name
          )}
        </span>
        {/* The lifecycle label sits under the name rather than in a third
            column: at phone width a third column forced a 262px nowrap cell
            and pushed the table to 452px, overflowing the viewport. */}
        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#8a857a]">{status}</p>
        {note ? <p className="mt-1.5 max-w-[520px] text-[12px] leading-6 text-[#6e6a60]">{note}</p> : null}
      </td>
    </tr>
  );
}

export default function StatusBoard() {
  return (
    <section className="border-t border-[#cfcabf]" aria-labelledby="status-heading">
      <div className="site-shell page-section">
        <div className="panel">
          <div className="panel-head">
            <p className="panel-id">services</p>
            <p className="panel-id">
              <span className="text-[#2f7d4f]">{operational.length} running</span>
              <span className="mx-2 text-[#cfcabf]">·</span>
              <span className="text-[#b84a2b]">{decommissioned.length} decommissioned</span>
            </p>
          </div>

          <div className="panel-body pt-0 md:pt-0">
            <h2 id="status-heading" className="sr-only">Services</h2>
            <table className="w-full border-collapse text-left">
              <caption className="sr-only">
                Services currently running and services decommissioned, with their status.
              </caption>
              <tbody>
                {operational.map((entry) => (
                  <Row key={`run-${entry.name}`} live {...entry} />
                ))}
                {decommissioned.map((entry) => (
                  <Row key={`stop-${entry.name}`} live={false} {...entry} />
                ))}
              </tbody>
            </table>
          </div>

          <div className="border-t border-[#cfcabf] bg-[#f4f2ec] px-4 py-3">
            <p className="panel-id">shelved, not promoted</p>
            <p className="mt-1.5 font-mono text-[11px] leading-6 text-[#6e6a60]">
              {proposed.join("  ·  ")}
            </p>
            <p className="mt-2 max-w-[600px] text-[11px] leading-5 text-[#8a857a]">
              Two services were shut down in September 2026 on purpose, to put everything behind
              one product instead of three.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
