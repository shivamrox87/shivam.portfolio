import "./globals.css";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

export const metadata = {
  title: {
    default: "Shivam Maurya | AI Engineer",
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
      <body
        className={`${plusJakartaSans.variable} antialiased font-Plus_Jakarta_Sans`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
