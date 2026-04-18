import Link from "next/link";
import Image from "next/image";

const CHARGER_IMG = "/images/charger-mockup.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 pb-12 bg-black">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              EV Charging Made <span className="text-ezit-green">EZ</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-white/65 leading-relaxed max-w-lg">
              Fast, app-free, reliable EV charging infrastructure built for India&apos;s future.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-black font-medium text-sm hover:bg-white/90 transition-colors duration-300"
              >
                Partner With Us
              </Link>
              <Link
                href="/host-a-charger"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-white/35 text-white font-medium text-sm hover:bg-white/5 transition-colors duration-300"
              >
                Check Feasibility
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-[300px] sm:w-[380px] lg:w-[440px] xl:w-[480px] motion-safe:animate-float">
              <div
                className="pointer-events-none absolute -inset-8 rounded-full bg-ezit-green/[0.06] blur-3xl motion-safe:animate-soft-pulse"
                aria-hidden
              />
              <div
                className="relative w-full [-webkit-mask-image:radial-gradient(ellipse_76%_86%_at_50%_48%,#000_18%,#000_32%,transparent_100%)] [mask-image:radial-gradient(ellipse_76%_86%_at_50%_48%,#000_18%,#000_32%,transparent_100%)]"
              >
                <Image
                  src={CHARGER_IMG}
                  alt="EZIT Premium Charging Station"
                  width={480}
                  height={760}
                  className="relative w-full h-auto drop-shadow-2xl"
                  priority
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_108%_118%_at_50%_42%,transparent_8%,rgb(0_4_3_/_0.55)_42%,rgb(0_4_3_/_0.92)_78%,rgb(0_4_3_/_0.98)_100%)]"
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
