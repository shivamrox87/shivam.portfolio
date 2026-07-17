"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/research", label: "Research" },
  { href: "/blog", label: "Writing" },
  { href: "/sessions", label: "Speaking" },
  { href: "/connect", label: "Contact" },
];

export default function Header({ singlePage = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const homeHref = singlePage ? "#top" : "/";
  const links = singlePage
    ? navigation.map((item) => ({ ...item, href: `#${item.label.toLowerCase()}` }))
    : navigation;

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-[#d8d5cc] bg-[#fbfaf7]/95 backdrop-blur-md">
      <div className="site-shell flex h-20 items-center justify-between gap-8">
        <Link href={homeHref} className="font-serif text-2xl tracking-[-0.02em]" aria-label="Shivam Maurya home">
          Shivam Maurya
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8" aria-label="Primary navigation">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="text-xs font-semibold uppercase tracking-[0.16em] text-[#55544e] transition hover:text-[#b84a2b]">
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-[#d8d5cc] text-[#171714] md:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          <span className="text-lg leading-none">{isOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {isOpen ? (
        <nav id="mobile-navigation" className="site-shell flex flex-col border-t border-[#d8d5cc] bg-[#fbfaf7] pb-5 md:hidden" aria-label="Mobile navigation">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="border-b border-[#d8d5cc] py-4 text-sm font-semibold uppercase tracking-[0.14em]" onClick={() => setIsOpen(false)}>
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
