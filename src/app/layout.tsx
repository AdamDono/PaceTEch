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
        
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/27826641886?text=Hi%20Pace%20Tech.%20I'm%20interested%20in%20a%20Technical%20Audit%20for%20my%20project." 
          className="whatsapp-float" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.031 0C5.385 0 0 5.385 0 12.031C0 14.685 0.866 17.156 2.316 19.16L0.8 24L5.808 22.505C7.726 23.684 9.805 24.062 12.031 24.062C18.677 24.062 24.062 18.677 24.062 12.031C24.062 5.385 18.677 0 12.031 0ZM18.736 17.126C18.455 17.925 17.337 18.618 16.48 18.789C15.82 18.918 14.869 19.043 11.666 17.712C7.568 16.012 4.935 11.83 4.73 11.558C4.526 11.285 3.03 9.297 3.03 7.234C3.03 5.172 4.08 4.164 4.512 3.714C4.857 3.355 5.437 3.195 5.961 3.195C6.132 3.195 6.284 3.203 6.42 3.209C6.804 3.226 6.996 3.245 7.252 3.864C7.572 4.64 8.351 6.541 8.447 6.74C8.543 6.938 8.671 7.211 8.528 7.502C8.384 7.79 8.256 7.918 8.048 8.161C7.84 8.401 7.648 8.572 7.424 8.847C7.216 9.071 6.976 9.324 7.232 9.761C7.488 10.198 8.368 11.636 9.664 12.793C11.336 14.288 12.696 14.764 13.176 14.966C13.656 15.168 14.152 15.136 14.488 14.768C14.824 14.4 15.656 13.424 15.992 12.944C16.328 12.464 16.648 12.528 17.08 12.688C17.512 12.848 19.816 13.984 20.28 14.224C20.744 14.464 21.048 14.584 21.16 14.776C21.272 14.968 21.272 15.928 20.984 16.728H20.984Z" />
          </svg>
        </a>
      </body>
    </html>
  );
}
