import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d8d5cc] bg-[#fbfaf7] py-10">
      <div className="site-shell flex flex-col gap-8 text-sm text-[#68675f] md:flex-row md:items-end md:justify-between">
        <Link href="/" className="font-serif text-2xl text-[#171714]">Shivam Maurya</Link>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <a href="mailto:connect@shivammaurya.com" className="hover:text-[#b84a2b]">Email</a>
          <a href="https://www.linkedin.com/in/shivam--maurya" target="_blank" rel="noreferrer" className="hover:text-[#b84a2b]">LinkedIn</a>
        </div>
        <p>© {new Date().getFullYear()} Shivam Maurya</p>
      </div>
    </footer>
  );
}
