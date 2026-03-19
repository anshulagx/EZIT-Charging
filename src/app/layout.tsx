import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "EZIT ChargeConnect – Turn Your Land or Capital Into EV Charging Income",
  description:
    "India's EV infrastructure is expanding rapidly. Participate as a landowner or investor. Earn from your land, invest in EV charging, or request charging near you.",
  icons: {
    icon: "/images/ezit-logo.jpg",
    apple: "/images/ezit-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased bg-[#0a0a0a] text-white min-h-screen`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
