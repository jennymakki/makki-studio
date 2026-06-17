import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makki Studio — Webbutveckling för moderna företag",
  description:
    "Makki Studio bygger snabba, moderna och skalbara webbplatser för startups och småföretag med Next.js, TypeScript och Tailwind.",
  icons: {
    icon: "/favicon.png",
  },
    keywords: [
    "webbutveckling",
    "nextjs utvecklare",
    "freelance developer sverige",
    "makki studio",
    "hemsida företag",
  ],
  metadataBase: new URL("https://makki.studio"),
  openGraph: {
    title: "Makki Studio",
    description:
      "Moderna webbplatser för företag som vill växa.",
    type: "website",
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