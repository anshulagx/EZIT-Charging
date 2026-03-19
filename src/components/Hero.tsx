"use client";
import Link from "next/link";
import Image from "next/image";

const CHARGER_IMG = "/images/charger-mockup.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(34,197,94,0.12),transparent)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ezit-green/10 border border-ezit-green/20 mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-ezit-green animate-pulse" />
              <span className="text-xs font-medium text-ezit-green tracking-wide">
                INDIA&apos;S EV INFRASTRUCTURE PARTNER
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Build India&apos;s EV Charging Network with{" "}
              <span className="text-ezit-green">EZIT</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-lg">
              Turn your property or capital into long-term EV charging income while
              supporting India&apos;s clean mobility transition.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/host-a-charger"
                className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300 shadow-lg shadow-white/5"
              >
                List Your Land
              </Link>
              <Link
                href="/invest"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
              >
                Invest in Chargers
              </Link>
              <Link
                href="/charging-locations"
                className="px-6 py-3 rounded-full border border-ezit-green/30 text-ezit-green font-medium text-sm hover:bg-ezit-green/5 transition-all duration-300"
              >
                Find Charging
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">60kW+</div>
                <div className="text-xs text-white/40 mt-1">Fast Charging</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">PAN</div>
                <div className="text-xs text-white/40 mt-1">India Presence</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">UPI</div>
                <div className="text-xs text-white/40 mt-1">App-Free Payments</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] xl:w-[480px]">
              <div className="absolute -inset-4 bg-gradient-to-b from-ezit-green/10 via-transparent to-transparent rounded-3xl blur-2xl" />
              <Image
                src={CHARGER_IMG}
                alt="EZIT Premium Charging Station"
                width={480}
                height={760}
                className="relative w-full h-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
