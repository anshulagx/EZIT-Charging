import Image from "next/image";
import Link from "next/link";

const LOGO_URL = "/images/ezit-logo.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <Link href="/" className="inline-block mb-5">
              <Image
                src={LOGO_URL}
                alt="EZIT Logo"
                width={120}
                height={40}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              EZIT is the Green Energy arm of the Black Cobra Group, building
              India&apos;s most reliable EV charging infrastructure. Fast,
              app-free, and built for scale.
            </p>
            <div className="mt-5 space-y-2.5">
              <a
                href="mailto:contact@ezit.co.in"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@ezit.co.in
              </a>
              <a
                href="tel:+917076989898"
                className="flex items-center gap-2.5 text-sm text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 70 76 98 98 98
              </a>
              <div className="flex items-center gap-2.5 text-sm text-white/60">
                <svg className="w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                New Delhi
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-widest">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/host-a-charger" className="text-sm text-white/50 hover:text-white transition-colors">
                  Host a Charger
                </Link>
              </li>
              <li>
                <Link href="/invest" className="text-sm text-white/50 hover:text-white transition-colors">
                  Invest
                </Link>
              </li>
              <li>
                <Link href="/charging-locations" className="text-sm text-white/50 hover:text-white transition-colors">
                  Find Charging Stations
                </Link>
              </li>
              <li>
                <Link href="/charging-solutions" className="text-sm text-white/50 hover:text-white transition-colors">
                  Charging Solutions
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-white/50 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-white/50 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/50 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-white/50 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-white/80 mb-5 uppercase tracking-widest">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-ezit-green" />
                Fast Charging
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-ezit-green" />
                App-Free UPI Payments
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-ezit-green" />
                Reliable Infrastructure
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} EZIT - Black Cobra Group. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            Building India&apos;s EV charging backbone
          </p>
        </div>
      </div>
    </footer>
  );
}
