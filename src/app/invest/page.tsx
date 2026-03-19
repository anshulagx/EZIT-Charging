import InvestorForm from "@/components/InvestorForm";

export default function InvestPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Invest in India&apos;s EV Charging Infrastructure</h1>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Participate in one of India&apos;s fastest-growing infrastructure categories with EZIT&apos;s execution and operating support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Market Opportunity</h2>
          <p className="mt-6 text-white/65 text-center">
            EV adoption is accelerating while public charging density is still limited. This creates high demand for reliable charging assets across urban centers, highways, and mixed-use hubs.
          </p>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Investment Models</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-white">Franchise Model</h3>
              <p className="mt-2 text-white/60 text-sm">
                Partner funds infrastructure while EZIT manages installation, operations, and uptime.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h3 className="text-xl font-semibold text-white">Co-investment Model</h3>
              <p className="mt-2 text-white/60 text-sm">
                EZIT and partner share capex and participate in revenue based on agreed structure.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">Financial Overview</h2>
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/[0.08]">
            <table className="w-full text-left text-sm">
              <tbody>
                <tr className="border-b border-white/[0.08]">
                  <td className="p-4 text-white/60">Charging capacity</td>
                  <td className="p-4 text-white">30kW to 360kW options</td>
                </tr>
                <tr className="border-b border-white/[0.08]">
                  <td className="p-4 text-white/60">Estimated usage</td>
                  <td className="p-4 text-white">Location and traffic dependent</td>
                </tr>
                <tr className="border-b border-white/[0.08]">
                  <td className="p-4 text-white/60">Potential revenue range</td>
                  <td className="p-4 text-white">Shared during investor consultation</td>
                </tr>
                <tr>
                  <td className="p-4 text-white/60">ROI timeline</td>
                  <td className="p-4 text-white">Model-specific projection</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center">What EZIT Provides</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {["Installation", "Operations", "Maintenance", "Payment system", "Monitoring"].map((item) => (
              <div key={item} className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.08] text-white/75 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <InvestorForm />
    </div>
  );
}
