"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_URL = "/images/ezit-logo.jpg";
const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/host-a-charger", label: "Host a Charger" },
  { href: "/invest", label: "Invest" },
  { href: "/charging-locations", label: "Find Charging" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={LOGO_URL}
              alt="EZIT Logo"
              width={120}
              height={40}
              className="h-8 md:h-9 w-auto object-contain"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/host-a-charger"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300"
            >
              List Your Land
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-white/80"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-white/5 mt-1 pt-3 space-y-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-white/70 hover:text-white py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/host-a-charger"
              className="inline-flex items-center justify-center w-full mt-2 px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-300"
              onClick={() => setMenuOpen(false)}
            >
              List Your Land
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
