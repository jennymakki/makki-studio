import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Webbutvecklare & hemsidor för företag | Makki Studio",
  description:
    "Jag bygger moderna, snabba och användarvänliga hemsidor för företag som vill växa online. Från design till utveckling och lansering.",

  icons: {
    icon: "/favicon.png",
  },

  metadataBase: new URL("https://www.makkistudio.se/"),

  verification: {
    google: "LNewI2VTW-7ROzqt-w_qsbfkJh7D3uOHQsuQKRuX-Ac",
  },

  openGraph: {
    title: "Makki Studio — Webbutveckling för företag",
    description:
      "Moderna hemsidor och webbappar för företag som vill växa online.",
    type: "website",
    url: "https://makkistudio.vercel.app/",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Makki Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Makki Studio — Webbutveckling",
    description: "Moderna hemsidor för företag som vill växa online.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}