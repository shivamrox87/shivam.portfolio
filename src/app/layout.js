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
  metadataBase: new URL("https://www.shivammaurya.com"),
  title: {
    default: "Shivam Maurya | Senior AI Engineer",
    template: "%s | Shivam Maurya",
  },
  description: "Shivam Maurya builds production AI systems across enterprise infrastructure, applied AI products, and developer workflows.",
  openGraph: {
    title: "Shivam Maurya | AI Systems and Developer Tools",
    description: "AI systems, developer tools, and practical learning by Shivam Maurya.",
    siteName: "Shivam Maurya",
    type: "website",
    url: "/",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Shivam Maurya - AI systems, developer tools, and practical learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivam Maurya | AI Systems and Developer Tools",
    description: "AI systems, developer tools, and practical learning by Shivam Maurya.",
    images: ["/opengraph-image"],
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
