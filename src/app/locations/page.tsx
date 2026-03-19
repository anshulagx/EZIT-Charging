export default function LocationsPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">EZIT Network Locations</h1>
          <p className="mt-4 text-white/60">Installed chargers, upcoming stations, and partner location visibility.</p>
        </div>
      </section>
      <section className="py-12 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
            <iframe
              title="EZIT locations map"
              src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
              className="w-full h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
