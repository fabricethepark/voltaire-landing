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
  title: "Voltaire — AI-Native Venture Studio",
  description:
    "Six agents. One human. Voltaire is what a company looks like when AI handles operations.",
  openGraph: {
    title: "Voltaire — AI-Native Venture Studio",
    description:
      "Six agents. One human. The org chart is dead.",
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
