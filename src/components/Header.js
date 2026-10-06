"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/writing", label: "Writing" },
  { href: "/connect", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  if (pathname.startsWith("/writing/")) return null;

  const isActive = (href) => pathname === href || pathname.startsWith(`${href}/`);
  const isHome = pathname === "/";

  return (
    <header className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isHome ? "fieldHeader" : "border-[#e5e5e7] bg-white/85"}`}>
      <div className="site-shell flex h-[64px] items-center justify-between gap-6">
        <Link href="/" className={isHome ? "font-serif text-2xl font-semibold tracking-[-0.05em]" : "text-[15px] font-semibold tracking-[-0.02em]"} aria-label="Shivam Maurya, home">{isHome ? "SM." : "Shivam Maurya"}</Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className={`text-[13px] transition-colors hover:text-[#1d1d1f] ${isActive(item.href) ? "font-semibold text-[#1d1d1f]" : "text-[#6e6e73]"}`}>
              {item.label}
            </Link>
          ))}
        </nav>
        <button type="button" className="inline-flex h-10 items-center justify-center text-sm text-[#6e6e73] md:hidden" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" aria-label={isOpen ? "Close navigation" : "Open navigation"}>
          {isOpen ? "Close" : "Menu"}
        </button>
      </div>
      {isOpen && (
        <nav id="mobile-navigation" className="site-shell flex flex-col border-t border-[#e5e5e7] py-3 md:hidden" aria-label="Mobile navigation">
          {navigation.map((item) => (
              <Link key={item.href} href={item.href} aria-current={isActive(item.href) ? "page" : undefined} className="py-3 text-base text-[#6e6e73]" onClick={() => setIsOpen(false)}>{item.label}</Link>
          ))}
        </nav>
      )}
    </header>
  );
}
