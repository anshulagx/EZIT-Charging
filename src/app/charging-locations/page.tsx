const stations = [
  { name: "EZIT Delhi Hub", city: "New Delhi", capacity: "120kW DC", availability: "Available", payment: "UPI, Card" },
  { name: "EZIT Gurgaon Corridor", city: "Gurugram", capacity: "60kW DC", availability: "Busy", payment: "UPI" },
  { name: "EZIT Jaipur Highway", city: "Jaipur", capacity: "30kW DC", availability: "Available", payment: "UPI, Wallet" },
];

export default function ChargingLocationsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Find Charging Stations</h1>
          <p className="mt-4 text-white/60">Search and discover fast, reliable EV charging points in the EZIT network.</p>
        </div>
      </section>

      <section className="py-10 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Search by city" className="md:col-span-2" />
            <div className="flex gap-2 flex-wrap">
              {["AC", "DC", "Fast Charging"].map((filter) => (
                <button key={filter} className="px-4 py-2 rounded-full border border-white/20 text-white/70 text-sm hover:bg-white/5">
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            <iframe
              title="EZIT charging locations map"
              src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[440px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white">Station Details</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {stations.map((station) => (
              <div key={station.name} className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-white font-semibold">{station.name}</h3>
                <p className="text-sm text-white/60 mt-2">Location: {station.city}</p>
                <p className="text-sm text-white/60">Charger: {station.capacity}</p>
                <p className="text-sm text-white/60">Availability: {station.availability}</p>
                <p className="text-sm text-white/60">Payment: {station.payment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
