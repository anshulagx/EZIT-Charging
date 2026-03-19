export default function ChargingSolutionsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Charging Solutions</h1>
          <p className="mt-4 text-white/60">Reliable AC and DC charging infrastructure for residential and commercial use-cases.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h2 className="text-2xl font-bold text-white">AC Chargers</h2>
            <p className="mt-2 text-white/60 text-sm">7.4kW to 22kW for residential and destination charging.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Ideal for apartments and workplaces</li>
              <li>Scheduled and controlled charging</li>
              <li>Built-in safety and surge protection</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
            <h2 className="text-2xl font-bold text-white">DC Fast Chargers</h2>
            <p className="mt-2 text-white/60 text-sm">30kW to 360kW for high-traffic commercial and highway corridors.</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              <li>Rapid top-up for intercity travel</li>
              <li>Suitable for fleets and transit nodes</li>
              <li>24x7 monitoring and uptime management</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
