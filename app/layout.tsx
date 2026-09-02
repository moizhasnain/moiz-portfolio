import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://moizhasnain.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Moiz Hasnain | SEO Executive — Technical SEO, Link Building & Local SEO",
  description:
    "Moiz Hasnain is an SEO Executive with 2+ years of experience driving organic growth through Technical SEO, Local SEO, content strategy and link building across the automotive, security, and beauty & wellness industries.",
  keywords: [
    "Moiz Hasnain",
    "SEO Executive",
    "Technical SEO",
    "Local SEO",
    "Link Building Specialist",
    "SEO consultant Lahore",
    "Off-Page SEO",
    "Keyword Research",
  ],
  authors: [{ name: "Moiz Hasnain", url: SITE_URL }],
  creator: "Moiz Hasnain",
  openGraph: {
    type: "profile",
    url: SITE_URL,
    title: "Moiz Hasnain | SEO Executive — Data-Driven Organic Growth",
    description:
      "SEO Executive specializing in Technical SEO, Local SEO, Link Building and Content Strategy. 2+ years, multiple industries, measurable organic growth.",
    siteName: "Moiz Hasnain — SEO Executive",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Moiz Hasnain — SEO Executive",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moiz Hasnain | SEO Executive",
    description:
      "Driving organic growth through Technical SEO, Local SEO and strategic link building.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Moiz Hasnain",
  jobTitle: "SEO Executive",
  url: SITE_URL,
  email: "mailto:moizhasnain47@gmail.com",
  telephone: "+92-320-4060398",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "BS Information Technology",
  },
  sameAs: ["https://www.linkedin.com/in/moiz-hasnain/"],
  knowsAbout: [
    "Technical SEO",
    "On-Page SEO",
    "Off-Page SEO",
    "Link Building",
    "Local SEO",
    "Keyword Research",
    "Content Strategy",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Koalify",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
