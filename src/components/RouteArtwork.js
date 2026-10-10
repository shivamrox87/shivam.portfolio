"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const artworkByPage = {
  "/": "/engraving-india-home.png",
  "/about": "/engraving-india-about.png",
  "/work": "/engraving-india-projects.png",
  "/writing": "/engraving-india-writing.png",
  "/blog": "/engraving-india-writing.png",
  "/connect": "/engraving-india-contact.png",
  "/research": "/engraving-india-explore.png",
  "/building": "/engraving-india-projects.png",
  "/sessions": "/engraving-india-contact.png",
  "/ebooks": "/engraving-india-writing.png",
  "/newsletters": "/engraving-india-explore.png",
};

function artworkForPath(pathname) {
  if (artworkByPage[pathname]) return artworkByPage[pathname];
  const pickForDetail = (options) => {
    let hash = 0;
    for (const character of pathname) hash = (hash * 31 + character.charCodeAt(0)) >>> 0;
    return options[hash % options.length];
  };
  if (pathname.startsWith("/work/")) {
    return pickForDetail([
      "/engraving-india-explore.png",
      "/engraving-india-home.png",
      "/engraving-india-about.png",
    ]);
  }
  if (pathname.startsWith("/writing/") || pathname.startsWith("/blog/")) {
    return pickForDetail([
      "/engraving-india-about.png",
      "/engraving-india-explore.png",
      "/engraving-india-home.png",
    ]);
  }
  return "/engraving-india-home.png";
}

export default function RouteArtwork() {
  const pathname = usePathname() || "/";
  const artwork = artworkForPath(pathname);
  const [footerIsNear, setFooterIsNear] = useState(false);

  useEffect(() => {
    const footerArtwork = document.querySelector(".footer-panorama");
    if (!footerArtwork) return;
    const observer = new IntersectionObserver(
      ([entry]) => setFooterIsNear(entry.isIntersecting),
      { rootMargin: "0px 0px -180px 0px" }
    );
    observer.observe(footerArtwork);
    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div className={`margin-artwork${footerIsNear ? " is-footer-near" : ""}`} aria-hidden="true">
      <Image
        key={artwork}
        src={artwork}
        alt=""
        width={1024}
        height={1536}
        sizes="(min-width: 1200px) 430px, 0px"
        priority={pathname === "/"}
      />
    </div>
  );
}
