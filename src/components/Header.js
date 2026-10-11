"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/work", label: "Projects" },
  { href: "/writing", label: "Writing" },
  { href: "/about", label: "About" },
  { href: "/connect", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  const active = (href) => pathname === href || pathname.startsWith(`${href}/`);
  return <header className="portfolio-header on-light">
    <div className="portfolio-width header-inner">
      <Link href="/" className="header-brand" aria-label="Shivam Maurya, home">Shivam Maurya</Link>
      <nav className="header-links" aria-label="Primary navigation">{links.map(link => <Link href={link.href} key={link.href} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
      <button type="button" className="header-menu-button" aria-expanded={open} aria-controls="portfolio-mobile-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    </div>
    {open && <nav id="portfolio-mobile-nav" className="portfolio-width mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}</nav>}
  </header>;
}
