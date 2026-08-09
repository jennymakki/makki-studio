import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = "https://www.makkistudio.se";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Makki Studio | Webbdesign & webbutveckling för företag",
    template: "%s | Makki Studio",
  },

  description:
    "Makki Studio är en webbyrå i Uppsala som erbjuder webbdesign och webbutveckling för företag. Moderna webbplatser från idé till lansering.",

  icons: {
    icon: "/favicon.png",
  },

  verification: {
    google: "LNewI2VTW-7ROzqt-w_qsbfkJh7D3uOHQsuQKRuX-Ac",
  },

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Makki Studio | Webbdesign & webbutveckling för företag",
    description:
      "Moderna webbplatser för företag. Webbdesign, webbutveckling och skräddarsydda digitala lösningar från Makki Studio i Uppsala.",
    type: "website",
    url: siteUrl,
    siteName: "Makki Studio",
    locale: "sv_SE",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Makki Studio – webbdesign och webbutveckling för företag",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Makki Studio | Webbdesign & webbutveckling",
    description:
      "Moderna webbplatser för företag från Makki Studio i Uppsala.",
    images: ["/og-image.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,

  name: "Makki Studio",
  url: siteUrl,

  description:
    "Makki Studio är en webbyrå i Uppsala som erbjuder webbdesign och webbutveckling för företag.",

  founder: {
    "@type": "Person",
    name: "Jenny Makki",
  },

  areaServed: [
    {
      "@type": "City",
      name: "Uppsala",
    },
    {
      "@type": "Country",
      name: "Sweden",
    },
  ],

  knowsAbout: [
    "Webbdesign",
    "Webbutveckling",
    "UX design",
    "Shopify",
    "WordPress",
    "Squarespace",
    "React",
    "Next.js",
    "Webbappar",
  ],

  sameAs: [
    "https://www.linkedin.com/company/134684245/",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,

  name: "Makki Studio",
  url: siteUrl,

  publisher: {
    "@id": `${siteUrl}/#organization`,
  },

  inLanguage: "sv-SE",
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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  );
}