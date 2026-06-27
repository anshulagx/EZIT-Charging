import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";
import { IconBolt, IconBuilding, IconGlobe, IconUsers } from "@/components/icons";

const pillars = [
  {
    icon: IconBuilding,
    title: "Building Materials",
    desc: "Black Cobra Ply, Mica & WPC, plus Alex aluminium panels — three decades of trusted infrastructure products.",
  },
  {
    icon: IconUsers,
    title: "Education",
    desc: "Quantum University, Roorkee — a top-60 ranked B-school shaping the next generation of talent.",
  },
  {
    icon: IconGlobe,
    title: "Green Energy",
    desc: "From fuel stations to EV charging — EZIT carries the group's energy legacy into clean mobility.",
  },
  {
    icon: IconBolt,
    title: "EV Charging",
    desc: "30–360 kW DC fast charging, full charge in 20–40 minutes, with 95% uptime and 24/7 monitoring.",
  },
] as const;

export default function TrustSection() {
  return (
    <PageSection
      tone="muted"
      header={{
        eyebrow: "Heritage",
        title: "Built on trusted infrastructure expertise",
        description:
          "EZIT is the Green Energy arm of the Black Cobra Group (Est. 1992). You're partnering with a 33-year-old group with deep execution experience — not a startup that may disappear next year.",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {pillars.map((f) => {
          const FIcon = f.icon;
          return (
            <SubpageCard key={f.title} className="group/trust">
              <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/75 mb-4 transition-all duration-300 group-hover/trust:scale-110 group-hover/trust:border-ezit-green/35 group-hover/trust:text-ezit-green">
                <FIcon className="w-6 h-6" aria-hidden />
              </div>
              <h3 className="text-base font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-white/55 leading-relaxed">{f.desc}</p>
            </SubpageCard>
          );
        })}
      </div>
    </PageSection>
  );
}
