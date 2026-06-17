import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Makki Studio — Moderna webbplatser som hjälper företag att växa",
  description:
    "Makki Studio designar och utvecklar moderna, snabba och användarvänliga webbplatser för företag och organisationer som vill växa online.",

  icons: {
    icon: "/favicon.png",
  },

  metadataBase: new URL("https://makkistudio.vercel.app/"),

  openGraph: {
    title: "Makki Studio",
    description:
      "Moderna webbplatser för företag som vill växa.",
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
    title: "Makki Studio",
    description:
      "Moderna webbplatser för företag som vill växa.",
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