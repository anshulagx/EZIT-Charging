export default function AboutPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">About EZIT</h1>
          <p className="mt-4 text-white/60 max-w-3xl mx-auto">
            EZIT is the green energy initiative of the Black Cobra Group, focused on accelerating EV charging infrastructure across India.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08] md:col-span-3">
            <h2 className="text-2xl font-bold text-white">Company Background</h2>
            <p className="mt-3 text-white/65">
              Backed by Black Cobra Group&apos;s infrastructure legacy since 1992, EZIT brings execution depth, operational reliability, and long-term growth focus to the EV ecosystem.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h3 className="text-xl font-semibold text-white">Mission</h3>
            <p className="mt-2 text-white/65 text-sm">Build reliable EV charging access across highways, cities, and commercial hubs.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h3 className="text-xl font-semibold text-white">Vision</h3>
            <p className="mt-2 text-white/65 text-sm">Power India&apos;s transition to electric mobility with scalable green infrastructure.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h3 className="text-xl font-semibold text-white">Group History</h3>
            <p className="mt-2 text-white/65 text-sm">Decades of infrastructure and industrial execution adapted for next-generation mobility.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
