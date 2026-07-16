"use client";

import Link from "next/link";
import { useState } from "react";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Writing" },
  { href: "/about", label: "About" },
];

const Header = ({ textColor = "#0d0d0d" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = textColor === "#e9e9e7";

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 backdrop-blur-xl md:px-10 md:py-6">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Shivam Maurya home">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold"
            style={{ backgroundColor: textColor, color: isLight ? "#0d0d0d" : "#e9e9e7" }}
          >
            SM
          </span>
          <span className="hidden text-sm font-semibold uppercase tracking-[0.12em] sm:block" style={{ color: textColor }}>
            Shivam Maurya
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] transition hover:text-[#EB5939]"
              style={{ color: textColor }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/connect"
          className="hidden rounded-full px-5 py-3 text-xs font-semibold uppercase tracking-[0.14em] transition hover:bg-[#EB5939] hover:text-white md:inline-flex"
          style={{ backgroundColor: textColor, color: isLight ? "#0d0d0d" : "#e9e9e7" }}
        >
          Contact
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border md:hidden"
          style={{ borderColor: `${textColor}33`, color: textColor }}
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label="Toggle navigation"
        >
          <span className="text-lg leading-none">{isOpen ? "×" : "≡"}</span>
        </button>
      </div>

      {isOpen ? (
        <nav
          id="mobile-navigation"
          className="mx-auto mt-3 flex max-w-[1200px] flex-col rounded-3xl bg-[#f5f3ef] p-4 shadow-xl md:hidden"
          aria-label="Mobile navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-[#0d0d0d]/10 px-3 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0d0d0d]"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/connect"
            className="mt-4 rounded-full bg-[#EB5939] px-5 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-white"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </nav>
      ) : null}
    </header>
  );
};

export default Header;
