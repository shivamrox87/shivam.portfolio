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
const previousSite = "https://shivam-portfolio-git-main-shivam-mauryas-projects-8ee4e901.vercel.app/";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    setTheme(current);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    document.documentElement.style.colorScheme = next;
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const close = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  const active = (href) => pathname === href || pathname.startsWith(`${href}/`);
  const isDark = theme === "dark";
  return <header className="portfolio-header on-light">
    <div className="portfolio-width header-inner">
      <Link href="/" className="header-brand" aria-label="Shivam Maurya, home">Shivam Maurya</Link>
      <nav className="header-links" aria-label="Primary navigation">{links.map(link => <Link href={link.href} key={link.href} aria-current={active(link.href) ? "page" : undefined}>{link.label}</Link>)}</nav>
      <button
        type="button"
        className="header-theme-toggle"
        onClick={toggleTheme}
        aria-pressed={isDark}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
          {isDark ? (
            <path d="M8 1.5v1.4M8 13.1v1.4M2.9 2.9l1 1M12.1 12.1l1 1M1.5 8h1.4M13.1 8h1.4M2.9 13.1l1-1M12.1 3.9l1-1M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
          ) : (
            <path d="M13.2 9.6A5.4 5.4 0 0 1 6.4 2.8a5.5 5.5 0 1 0 6.8 6.8Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
          )}
        </svg>
        <span>{isDark ? "Light" : "Dark"}</span>
      </button>
      <a href={previousSite} className="header-previous" target="_blank" rel="noopener noreferrer" aria-label="Legacy portfolio, opens in a new tab">Legacy <span aria-hidden="true">↗</span></a>
      <button type="button" className="header-menu-button" aria-expanded={open} aria-controls="portfolio-mobile-nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
    </div>
    {open && <nav id="portfolio-mobile-nav" className="portfolio-width mobile-nav" aria-label="Mobile navigation">{links.map(link => <Link href={link.href} key={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}<a href={previousSite} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Legacy <span aria-hidden="true">↗</span></a></nav>}
  </header>;
}