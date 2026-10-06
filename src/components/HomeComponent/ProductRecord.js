import Link from "next/link";
import { products, productsBand, resolveExplorations, resolveProduct } from "@/app/home-data";

const STATUS_STYLES = {
  sunset: "border-[#b84a2b] text-[#b84a2b]",
  default: "border-[#d8d5cc] text-[#68675f]",
};

function statusStyle(status) {
  return status.toLowerCase().includes("sunset")
    ? STATUS_STYLES.sunset
    : STATUS_STYLES.default;
}

export default function ProductRecord() {
  const rows = products.map((product) => ({ ...resolveProduct(product.key), note: product.note }));
  const explorations = resolveExplorations();

  return (
    <section className="border-t border-[#d8d5cc]" aria-labelledby="products-heading">
      <div className="site-shell page-section">
        <p className="eyebrow">{productsBand.label}</p>
        <h2 id="products-heading" className="section-title mt-3 max-w-[760px]">
          {productsBand.heading}
        </h2>

        <div className="mt-12 border-t border-[#171714]">
          {rows.map((row) => (
            <article
              key={row.key}
              className="grid gap-3 border-b border-[#d8d5cc] py-7 md:grid-cols-[0.3fr_0.7fr] md:gap-10"
            >
              <div>
                <h3 className="font-serif text-2xl leading-tight">
                  {row.href ? (
                    <Link href={row.href} className="hover:text-[#b84a2b]">
                      {row.name}
                    </Link>
                  ) : (
                    row.name
                  )}
                </h3>
                <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#68675f]">
                  <span
                    className={`border px-2 py-1 uppercase tracking-[0.12em] ${statusStyle(row.status)}`}
                  >
                    {row.status}
                  </span>
                  {row.date ? <span>{row.date}</span> : null}
                </p>
              </div>
              <p className="text-sm leading-7 text-[#4f4e48]">{row.note}</p>
            </article>
          ))}
        </div>

        {explorations.length > 0 ? (
          <p className="mt-8 max-w-[680px] text-xs leading-6 text-[#68675f]">
            Also explored: {explorations.join(", ")}.
          </p>
        ) : null}

        <div className="mt-8">
          <Link href="/work" className="text-link">
            {productsBand.linkLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
