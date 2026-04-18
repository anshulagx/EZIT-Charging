import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";
import { IconBanknotes, IconBolt, IconGlobe, IconShieldCheck } from "@/components/icons";

const features = [
  {
    icon: IconBolt,
    title: "DC fast charging",
    desc: "60kW to 320+ kW chargers. Full charge in 20–40 minutes.",
  },
  {
    icon: IconBanknotes,
    title: "Revenue share models",
    desc: "Flexible earning models: fixed rent, revenue share, or custom arrangements.",
  },
  {
    icon: IconShieldCheck,
    title: "End-to-end support",
    desc: "We handle installation, maintenance, compliance, and monitoring.",
  },
  {
    icon: IconGlobe,
    title: "PAN-India network",
    desc: "Rapidly expanding across highways, urban centres, and commercial hubs.",
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
          "EZIT is part of the Black Cobra Group (Est. 1992), combining decades of execution experience with a pan-India expansion vision for EV charging.",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {features.map((f) => {
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
