"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const LOGO_URL = "/images/ezit-logo.jpg";

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

          <div className="hidden md:flex items-center gap-8">
            <a
              href="#landowner"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              Partner With Us
            </a>
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
            <Link
              href="#landowner"
              className="block text-sm text-white/70 hover:text-white py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              Partner With Us
            </Link>
            <Link
              href="#investor"
              className="block text-sm text-white/70 hover:text-white py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              Invest
            </Link>
            <Link
              href="#demand"
              className="block text-sm text-white/70 hover:text-white py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              Request Charging
            </Link>
            <Link
              href="#cpo"
              className="block text-sm text-white/70 hover:text-white py-1.5"
              onClick={() => setMenuOpen(false)}
            >
              For CPOs
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
