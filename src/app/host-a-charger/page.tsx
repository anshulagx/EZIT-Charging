import LandownerForm from "@/components/LandownerForm";

export default function HostAChargerPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Turn Your Parking Space Into Monthly Income</h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Partner with EZIT to deploy EV chargers at your location and create a new recurring revenue stream.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Ideal Locations</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Hotels", "Restaurants", "Shopping malls", "Highway properties", "Residential societies", "Petrol pumps"].map((location) => (
              <div key={location} className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.08] text-white/75 text-sm">
                {location}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Land Requirements</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {["Minimum two parking spaces", "Three-phase electricity", "Accessible location", "High vehicle visibility"].map((item) => (
              <div key={item} className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.08] text-white/75 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Benefits</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Passive income", "Property value increase", "More customer footfall", "Sustainability branding"].map((benefit) => (
              <div key={benefit} className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.08] text-white/75 text-sm">
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">How Hosting Works</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {["Submit location details", "EZIT evaluates site", "Charger installation", "Revenue sharing begins"].map((step, index) => (
              <div key={step} className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.08]">
                <p className="text-ezit-green text-sm font-semibold">Step {index + 1}</p>
                <p className="text-white/75 text-sm mt-2">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandownerForm />
    </div>
  );
}
