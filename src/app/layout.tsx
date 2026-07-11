import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CONTACT } from "@/lib/content";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ezit-charging.vercel.app"),
  title: "EV Charging Station Partnership & Franchise in India | EZIT",
  description:
    "Turn your land or investment into EV charging income. EZIT builds, owns & operates fast, app-free DC charging stations across India. 95% uptime, AI security, 24/7 support.",
  icons: {
    icon: "/images/ezit-logo.jpg",
    apple: "/images/ezit-logo.jpg",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "EZIT",
  alternateName: "EZIT EV Charging",
  description:
    "EZIT is the EV charging arm of the 33-year-old Black Cobra Group, building, owning and operating India's most reliable charging network.",
  url: "https://ezit-charging.vercel.app",
  logo: "https://ezit-charging.vercel.app/images/ezit-logo.jpg",
  foundingDate: "1992",
  parentOrganization: { "@type": "Organization", name: "Black Cobra Group" },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: CONTACT.phoneDisplay,
    email: CONTACT.emailSales,
    contactType: "sales",
    areaServed: "IN",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "EZIT EV Charging",
  image: "https://ezit-charging.vercel.app/images/ezit-logo.jpg",
  telephone: CONTACT.phoneDisplay,
  email: CONTACT.emailGeneral,
  address: {
    "@type": "PostalAddress",
    addressLocality: "New Delhi",
    addressRegion: "Delhi",
    addressCountry: "IN",
  },
  areaServed: ["Delhi NCR", "Punjab", "Haryana", "Bengaluru"],
  url: "https://ezit-charging.vercel.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[var(--background)] text-white min-h-screen`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
