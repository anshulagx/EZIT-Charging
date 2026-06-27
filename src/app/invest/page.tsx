import type { Metadata } from "next";
import InvestROICalculator from "@/components/InvestROICalculator";
import InvestorForm from "@/components/InvestorForm";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

export const metadata: Metadata = {
  title: "EV Charging Station Franchise in India | EZIT",
  description:
    "Own an EV charger on India's fast-growing network. EZIT secures the location and operates end-to-end while you earn. Strong ROI, 2–3 year payback. Calculate your returns.",
  alternates: { canonical: "/invest" },
};

const PROVIDES = [
  "End-to-end installation",
  "Day-to-day operations",
  "Preventive & corrective maintenance",
  "UPI-first payment stack",
  "Remote monitoring & alerts",
  "AI 360° security",
  "95% uptime guarantee",
  "Dedicated 1:1 account manager",
] as const;

const FAQ_ITEMS = [
  {
    question: "How much does an EV charging franchise cost in India?",
    answer:
      "A typical DC fast-charging franchise starts from around ₹10–15 lakh including hardware and infrastructure. You invest in the charger; EZIT secures the location, installs, owns and operates everything end-to-end.",
  },
  {
    question: "What is the ROI and payback on an EV charging franchise?",
    answer:
      "A typical well-utilised DC site delivers roughly 45% annual ROI with a 2–3 year payback. Use our ROI calculator to model returns for your investment, utilisation and tariff assumptions.",
  },
  {
    question: "Is EV charging profitable in India?",
    answer:
      "Yes. India is targeting around 30% EV penetration by 2030, and EV charging is now a de-licensed activity under the 2024 Ministry of Power guidelines — lowering barriers and supporting strong demand for reliable fast charging.",
  },
  {
    question: "What do I have to manage as a franchise owner?",
    answer:
      "Nothing operational. EZIT handles site selection, installation, operations, maintenance, payments, AI security and monitoring, backed by a dedicated 1:1 account manager. You invest and earn.",
  },
];

export default function InvestPage() {
  return (
    <div>
      <PageHero
        eyebrow="Own a Franchise"
        title={
          <>
            Own a franchise on India&apos;s <span className="text-white/90">EV charging network</span>
          </>
        }
        description="We secure the location, install, own and operate end-to-end — you invest and earn. Typical payback 2–3 years on India's fast-growing fast-charging network."
      />

      <PageSection tone="muted" header={{ eyebrow: "Market", title: "Why charging demand is structural" }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
            <p className="text-white/65 leading-relaxed text-base">
              EV adoption is accelerating while dependable public charging remains uneven. India is targeting around
              30% EV penetration by 2030, and EV charging is now a de-licensed activity under the 2024 Ministry of Power
              guidelines — removing a major barrier to entry.
            </p>
            <p className="text-white/55 leading-relaxed text-sm">
              EZIT focuses on locations with real dwell or flow, electrical realism, and operating discipline, so assets
              are positioned for utilization, not just headlines.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {[
              { k: "EV target", v: "~30% by 2030" },
              { k: "Licensing", v: "De-licensed activity" },
              { k: "Payments", v: "UPI-forward, low friction" },
              { k: "Operations", v: "Monitoring-led uptime" },
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
          eyebrow: "The offer",
          title: "One simple franchise, run end-to-end",
          description: "No mix of models or jargon — one clear, hassle-free way to own a charger on the EZIT network.",
        }}
      >
        <SubpageCard hover={false} className="p-8 sm:p-10 max-w-3xl mx-auto text-center">
          <p className="text-white/75 leading-relaxed text-base sm:text-lg">
            You invest in the charger and infrastructure. EZIT secures the location, installs, operates and maintains
            everything. You earn on a transparent, hassle-free basis for the full term.
          </p>
        </SubpageCard>
      </PageSection>

      <PageSection
        tone="deep"
        header={{
          eyebrow: "Estimator",
          title: "Calculate your ROI",
          description: "Model monthly cash flow and simple payback from utilization and unit economics, aligned with how we discuss franchise sites.",
        }}
      >
        <InvestROICalculator />
      </PageSection>

      <PageSection tone="muted" header={{ eyebrow: "Snapshot", title: "Financial overview (indicative)" }}>
        <SubpageCard hover={false} className="overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[520px]">
              <tbody>
                {[
                  ["Charging capacity", "30–360 kW DC options"],
                  ["Estimated usage", "Location and traffic dependent"],
                  ["Potential revenue range", "Shared during franchise consultation"],
                  ["Payback / ROI", "2–3 year payback, indicative ~45% annual ROI"],
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
          description: "Investors plug into an operating system, not just a hardware purchase.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {PROVIDES.map((item) => (
            <SubpageCard key={item} className="!p-4 text-center sm:text-left">
              <div className="mx-auto sm:mx-0 w-9 h-9 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/75 text-xs font-bold mb-3">
                ✓
              </div>
              <p className="text-sm text-white/75 leading-snug">{item}</p>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <InvestorForm />

      <FAQ items={FAQ_ITEMS} tone="muted" description="What franchise investors ask before owning a charger with EZIT." />
    </div>
  );
}
