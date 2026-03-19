import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-16 md:py-20 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">The EV Charging Problem</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Limited charging infrastructure",
              "Non-working public chargers",
              "Multiple apps and wallet friction",
              "Slow charging wait times",
            ].map((problem) => (
              <div key={problem} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm text-white/70">
                {problem}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">EZIT Solution</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { title: "Fast charging", text: "High-performance chargers designed for rapid turnaround." },
              { title: "UPI-based payments", text: "Simple app-free payments for seamless charging sessions." },
              { title: "Reliable hardware", text: "Infrastructure-grade uptime with proactive maintenance." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-white/60 text-sm mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Choose Your Role</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-white">Landowners</h3>
              <p className="text-white/60 text-sm mt-2">Earn passive income from your parking space.</p>
              <Link href="/host-a-charger" className="inline-block mt-5 text-ezit-green text-sm font-medium">List Your Land</Link>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-white">Investors</h3>
              <p className="text-white/60 text-sm mt-2">Invest in EV charging infrastructure with EZIT.</p>
              <Link href="/invest" className="inline-block mt-5 text-ezit-green text-sm font-medium">Explore Investment</Link>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="text-lg font-semibold text-white">EV Drivers</h3>
              <p className="text-white/60 text-sm mt-2">Find fast and reliable charging near your route.</p>
              <Link href="/charging-locations" className="inline-block mt-5 text-ezit-green text-sm font-medium">Find Charging</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Benefits of Installing Chargers</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["New monthly income", "Higher footfall", "Premium EV customers", "Future-ready property"].map((benefit) => (
              <div key={benefit} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] text-sm text-white/70">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">How EZIT Works</h2>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {["Submit property", "Site evaluation", "Charger installation", "Earn revenue"].map((step, index) => (
              <div key={step} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-ezit-green text-sm font-semibold">Step {index + 1}</div>
                <div className="text-white mt-2">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Charging Network Map</h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/[0.08]">
            <iframe
              title="EZIT charging network map"
              src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[420px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <TrustSection />
      <section className="py-16 md:py-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Start earning from EV charging today</h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link href="/host-a-charger" className="px-7 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300">
              List Your Land
            </Link>
            <Link href="/contact" className="px-7 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300">
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
