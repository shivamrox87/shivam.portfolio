import "./globals.css";
import Footer from "@/components/Footer";
import { Manrope, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

export const metadata = {
  title: {
    default: "Shivam Maurya | Senior AI Engineer",
    template: "%s | Shivam Maurya",
  },
  description: "Shivam Maurya builds production AI systems across enterprise infrastructure, applied AI products, and developer workflows.",
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${newsreader.variable} bg-[#fbfaf7] font-sans text-[#171714] antialiased`}>
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
