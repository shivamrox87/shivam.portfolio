"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
  if (pathname.startsWith("/writing/")) {
    const slug = pathname.slice("/writing/".length).replace(/\/$/, "");
    return `/writing-artwork/${slug}-light.webp`;
  }
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
  if (pathname.startsWith("/blog/")) {
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
  const isWritingPost = pathname.startsWith("/writing/");
  const [footerIsNear, setFooterIsNear] = useState(false);
  const [writingArtworkOpen, setWritingArtworkOpen] = useState(isWritingPost);
  const [isAutoPreviewing, setIsAutoPreviewing] = useState(isWritingPost);
  const peekUntil = useRef(0);
  const pointerAtEdge = useRef(false);

  useLayoutEffect(() => {
    if (!isWritingPost) {
      setWritingArtworkOpen(false);
      setIsAutoPreviewing(false);
      return;
    }

    pointerAtEdge.current = false;
    peekUntil.current = Date.now() + 1000;
    setIsAutoPreviewing(true);
    setWritingArtworkOpen(true);
    const timer = window.setTimeout(() => {
      peekUntil.current = 0;
      setIsAutoPreviewing(false);
      if (!pointerAtEdge.current) setWritingArtworkOpen(false);
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [pathname, isWritingPost]);

  useEffect(() => {
    if (!isWritingPost) return;

    const handlePointerMove = (event) => {
      if (event.pointerType === "touch") return;
      pointerAtEdge.current = event.clientX >= window.innerWidth - Math.max(48, window.innerWidth * 0.06);
      if (peekUntil.current) return;
      if (pointerAtEdge.current) {
        setWritingArtworkOpen(true);
      } else if (event.clientX < window.innerWidth / 2 || event.target.closest?.(".writing-detail article")) {
        setWritingArtworkOpen(false);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [isWritingPost]);

  useLayoutEffect(() => {
    document.body.classList.toggle("writing-artwork-open", isWritingPost && writingArtworkOpen);
    document.body.classList.toggle("writing-artwork-preview", isWritingPost && isAutoPreviewing);
    return () => {
      document.body.classList.remove("writing-artwork-open");
      document.body.classList.remove("writing-artwork-preview");
    };
  }, [isWritingPost, writingArtworkOpen, isAutoPreviewing]);

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

  if (isWritingPost) {
    return (
      <>
        <button
          type="button"
          className={`writing-artwork-edge${writingArtworkOpen ? " is-hidden" : ""}`}
          aria-controls="writing-artwork-panel"
          aria-label="Show article artwork"
          aria-expanded={writingArtworkOpen}
          aria-hidden={writingArtworkOpen}
          tabIndex={writingArtworkOpen ? -1 : 0}
          onPointerEnter={(event) => {
            if (event.pointerType !== "touch") setWritingArtworkOpen(true);
          }}
          onClick={() => setWritingArtworkOpen(true)}
        />
        <aside
          id="writing-artwork-panel"
          className={`writing-artwork-panel${writingArtworkOpen ? " is-open" : ""}`}
          aria-label="Article artwork"
          aria-hidden={!writingArtworkOpen}
        >
          <button
            type="button"
            className="writing-artwork-close"
            tabIndex={writingArtworkOpen ? 0 : -1}
            onClick={() => setWritingArtworkOpen(false)}
          >
            Back to writing <span aria-hidden="true">×</span>
          </button>
          <Image
            key={artwork}
            src={artwork}
            alt=""
            width={1024}
            height={1536}
            sizes="50vw"
            className="writing-artwork-image"
            priority
          />
        </aside>
      </>
    );
  }

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
