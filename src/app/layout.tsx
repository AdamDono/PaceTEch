import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pace Tech | Engineering Digital Scale",
  description: "We build high-performance web applications and custom software that help businesses scale, automate, and dominate their market.",
  openGraph: {
    title: "Pace Tech | Engineering Digital Scale",
    description: "High-performance web applications and custom software for high-growth businesses.",
    url: "https://pacetech.co.za",
    siteName: "Pace Tech",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pace Tech | Engineering Digital Scale",
    description: "High-performance web applications and custom software.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        {children}

      </body>
    </html>
  );
}
