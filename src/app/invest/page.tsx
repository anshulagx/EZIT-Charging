import InvestorForm from "@/components/InvestorForm";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const PROVIDES = [
  "End-to-end installation",
  "Day-to-day operations",
  "Preventive & corrective maintenance",
  "UPI-first payment stack",
  "Remote monitoring & alerts",
] as const;

export default function InvestPage() {
  return (
    <div>
      <PageHero
        eyebrow="For investors"
        title={
          <>
            Invest in <span className="text-ezit-green">India&apos;s charging build-out</span>
          </>
        }
        description="Participate in a fast-scaling infrastructure category with EZIT execution, operations, and partner alignment—from site selection to long-term uptime."
      />

      <PageSection tone="muted" header={{ eyebrow: "Market", title: "Why charging demand is structural" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-white/65 leading-relaxed text-base">
              EV adoption is accelerating while dependable public charging remains uneven. That gap shows up as queues at
              good sites, underutilized broken hardware elsewhere, and driver preference for networks that simply work.
            </p>
            <p className="text-white/55 leading-relaxed text-sm">
              EZIT focuses on locations with real dwell or flow, electrical realism, and operating discipline—so assets
              are positioned for utilization, not just headlines.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { k: "Focus", v: "Urban + highway nodes" },
              { k: "Payments", v: "UPI-forward, low friction" },
              { k: "Operations", v: "Monitoring-led uptime" },
              { k: "Partners", v: "Land + capital alignment" },
            ].map((s) => (
              <SubpageCard key={s.k} className="!p-4">
                <div className="text-xs font-medium text-white/40 uppercase tracking-wider">{s.k}</div>
                <div className="mt-2 text-sm font-semibold text-white leading-snug">{s.v}</div>
              </SubpageCard>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Models",
          title: "Investment structures",
          description: "We work with partners under flexible arrangements—choose what matches your risk, capex, and involvement preference.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <SubpageCard className="p-8">
            <span className="text-xs font-semibold uppercase tracking-wider text-ezit-green">Franchise-style</span>
            <h3 className="mt-2 text-xl font-semibold text-white">Franchise model</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Partner funds infrastructure while EZIT manages installation, operations, and uptime—built for operators who
              want exposure without running day-to-day field work.
            </p>
          </SubpageCard>
          <SubpageCard className="p-8 ring-1 ring-ezit-green/15">
            <span className="text-xs font-semibold uppercase tracking-wider text-ezit-green">Shared capex</span>
            <h3 className="mt-2 text-xl font-semibold text-white">Co-investment model</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              EZIT and partners share capex with a revenue split matched to contribution—useful when both sides want aligned
              incentives at the asset level.
            </p>
          </SubpageCard>
        </div>
      </PageSection>

      <PageSection tone="muted" header={{ eyebrow: "Snapshot", title: "Financial overview (indicative)" }}>
        <SubpageCard hover={false} className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[520px]">
              <tbody>
                {[
                  ["Charging capacity", "30kW to 360kW options"],
                  ["Estimated usage", "Location and traffic dependent"],
                  ["Potential revenue range", "Shared during investor consultation"],
                  ["ROI timeline", "Model-specific projection"],
                ].map(([a, b], i, arr) => (
                  <tr
                    key={a}
                    className={`border-b border-white/[0.06] ${i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"} ${
                      i === arr.length - 1 ? "border-b-0" : ""
                    }`}
                  >
                    <th scope="row" className="p-4 sm:p-5 text-white/50 font-medium w-[40%] align-top">
                      {a}
                    </th>
                    <td className="p-4 sm:p-5 text-white/90 align-top">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </SubpageCard>
        <p className="mt-4 text-center text-xs text-white/40 max-w-2xl mx-auto">
          Figures are illustrative. Final economics depend on site, tariff, utilization, and agreement structure.
        </p>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Operator layer",
          title: "What EZIT provides",
          description: "Investors plug into an operating system—not just a hardware purchase.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
          {PROVIDES.map((item) => (
            <SubpageCard key={item} className="!p-4 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 w-9 h-9 rounded-lg bg-ezit-green/12 border border-ezit-green/25 flex items-center justify-center text-ezit-green text-xs font-bold mb-3">
                ✓
              </div>
              <p className="text-sm text-white/75 leading-snug">{item}</p>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <InvestorForm />
    </div>
  );
}
