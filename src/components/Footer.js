import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#e5e5e7] bg-white py-10">
      <div className="site-shell flex flex-col gap-8 text-sm text-[#6e6e73] md:flex-row md:items-end md:justify-between">
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          <Link href="/building" className="hover:text-[#1d1d1f]">Now</Link>
          <Link href="/research" className="hover:text-[#1d1d1f]">Research</Link>
          <Link href="/sessions" className="hover:text-[#1d1d1f]">Speaking</Link>
          <a href="mailto:connect@shivammaurya.com" className="hover:text-[#1d1d1f]">Email</a>
          <a href="https://www.linkedin.com/in/shivam--maurya" target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f]">LinkedIn</a>
          <a href="https://x.com/_shivammaurya__" target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f]">X</a>
          <a href="https://medium.com/@shivam--maurya" target="_blank" rel="noreferrer" className="hover:text-[#1d1d1f]">Medium</a>
        </div>
        <p>© {new Date().getFullYear()} Shivam Maurya</p>
      </div>
    </footer>
  );
}
