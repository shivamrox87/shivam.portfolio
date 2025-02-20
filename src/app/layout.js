import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react'
import { Inter } from 'next/font/google'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
});

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Shivam Maurya",
  description: "Shivam Maurya is an AI engineer with expertise in building AI-driven products from scratch, specializing in Python, cloud deployment, and chatbot development. With experience in both collaborative and freelance projects, he has developed intelligent systems for education, finance, and productivity, integrating AI, automation, and user-centric design. Currently working at AlphaFMC, he focuses on scalable architectures, seamless integrations, and impactful AI solutions that drive efficiency and innovation.",
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
