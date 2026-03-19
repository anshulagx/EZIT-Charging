export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">How It Works</h1>
          <p className="mt-4 text-white/60">A simple ecosystem connecting landowners, EZIT operations, EV drivers, and revenue partners.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              "Landowner lists property",
              "EZIT installs charger",
              "Drivers charge vehicles",
              "Revenue shared with partners",
            ].map((step, index) => (
              <div key={step} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="text-ezit-green text-sm font-semibold">Step {index + 1}</div>
                <h2 className="mt-2 text-white font-semibold">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
