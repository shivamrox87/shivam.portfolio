import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return <footer className="portfolio-footer">
    <div className="portfolio-width reference-footer-inner">
      <nav aria-label="Footer navigation">
        <Link href="/sessions">Speaking &amp; teaching</Link>
        <a href="https://x.com/_shivammaurya__" target="_blank" rel="noreferrer">X / Twitter</a>
        <a href="https://www.linkedin.com/in/shivam--maurya" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://medium.com/@shivam--maurya" target="_blank" rel="noreferrer">Medium</a>
        <a href="mailto:connect@shivammaurya.com">Email ↗</a>
      </nav>
    </div>
    <div className="footer-panorama" aria-hidden="true">
      <Image src="/engraving-india-footer.png" alt="" width={2172} height={724} sizes="100vw" />
    </div>
  </footer>;
}
