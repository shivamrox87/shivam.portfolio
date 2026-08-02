"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/sessions", label: "Speaking" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[#d8d5cc]/80 bg-[#fbfaf7]/90 backdrop-blur-xl">
      <div className="site-shell flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="group inline-flex items-center" aria-label="Shivam Maurya, home">
          <span className="font-serif text-xl tracking-[-0.02em] sm:text-[22px]">Shivam Maurya</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          <nav className="flex items-center gap-5 lg:gap-7" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={`relative py-2 text-[11px] font-semibold uppercase tracking-[0.16em] transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-[#b84a2b] after:transition-transform ${
                isActive(item.href)
                  ? "text-[#171714] after:scale-x-100"
                  : "text-[#68675f] after:scale-x-0 hover:text-[#171714] hover:after:scale-x-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
          </nav>
          <Link
            href="/connect"
            aria-current={isActive("/connect") ? "page" : undefined}
            className="rounded-full bg-[#171714] px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] text-[#fbfaf7] transition-colors hover:bg-[#b84a2b]"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          type="button"
          className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#d8d5cc] text-[#171714] transition-colors hover:border-[#171714] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
        >
          <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
          <span aria-hidden="true" className="flex w-4 flex-col gap-1.5">
            <span className={`h-px w-4 bg-current transition-transform ${isOpen ? "translate-y-[3.5px] rotate-45" : ""}`} />
            <span className={`h-px w-4 bg-current transition-transform ${isOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {isOpen ? (
        <div id="mobile-navigation" className="border-t border-[#d8d5cc]/80 bg-[#fbfaf7] md:hidden">
          <nav className="site-shell grid grid-cols-2 gap-x-5 py-4" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`border-b border-[#d8d5cc] py-4 font-serif text-2xl transition-colors ${isActive(item.href) ? "text-[#b84a2b]" : "hover:text-[#b84a2b]"}`}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/connect" className="col-span-2 mt-5 flex items-center justify-between rounded-full bg-[#171714] px-5 py-3.5 text-sm font-semibold text-[#fbfaf7]">
              Let&apos;s work together <span aria-hidden="true">↗</span>
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
