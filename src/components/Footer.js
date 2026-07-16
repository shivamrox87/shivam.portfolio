import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d8d5cc] bg-[#fbfaf7] py-10">
      <div className="site-shell flex flex-col gap-8 text-sm text-[#68675f] md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="font-serif text-2xl text-[#171714]">Shivam Maurya</Link>
          <p className="mt-2">Senior AI Engineer · Varanasi, India</p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/connect" className="hover:text-[#b84a2b]">Contact</Link>
          <Link href="https://www.linkedin.com/in/shivam--maurya" target="_blank" className="hover:text-[#b84a2b]">LinkedIn</Link>
          <Link href="https://topmate.io/shivam_maurya10" target="_blank" className="hover:text-[#b84a2b]">Topmate</Link>
        </div>
        <p>© {new Date().getFullYear()} Shivam Maurya</p>
      </div>
    </footer>
  );
}
