"use client";

import { IconSparkles } from "@/components/icons";

export default function CTABanner() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-16 md:py-24 bg-[var(--background)] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.04] to-white/[0.01] border border-white/[0.08] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,255,255,0.05),transparent)]" />

          <div className="relative">
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/[0.06] border border-white/12 text-ezit-green motion-safe:animate-soft-pulse">
                <IconSparkles className="w-6 h-6" aria-hidden />
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
              Ready to Build the Future of{" "}
              <span className="text-white/85">EV Charging?</span>
            </h2>
            <p className="mt-4 text-white/50 max-w-lg mx-auto text-sm sm:text-base">
              Join India&apos;s most reliable EV charging infrastructure network.
              Turn your property into a revenue-generating asset.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => scrollTo("landowner")}
                className="px-7 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
              >
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
