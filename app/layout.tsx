import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Fallback for Antonia — replace with local font when .woff2 is available
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Voltaire — AI Agents for Business",
  description:
    "Nine AI agents handle your marketing, sales, and operations. One subscription. You focus on strategy.",
  openGraph: {
    title: "Voltaire — AI Agents for Business",
    description:
      "Nine AI agents handle your marketing, sales, and operations. One subscription.",
    siteName: "Voltaire",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} ${GeistMono.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
