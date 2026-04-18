import Link from "next/link";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const SNAPSHOT = [
  { label: "Live & ramping", value: "Corridor + metro nodes", hint: "Expansion-first rollout" },
  { label: "Partner types", value: "Retail, highway, mixed-use", hint: "Land + investor led" },
  { label: "Payments", value: "UPI-first flows", hint: "Lower friction for drivers" },
] as const;

export default function LocationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Network"
        title={
          <>
            EZIT locations across <span className="text-white/90">India</span>
          </>
        }
        description="Explore where we operate today, and how new partner sites join the map as we scale reliable fast charging."
      >
        <Link
          href="/charging-locations"
          className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
        >
          Driver finder
        </Link>
        <Link
          href="/host-a-charger"
          className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
        >
          Add a site
        </Link>
      </PageHero>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Snapshot",
          title: "How the network shows up on the ground",
          description: "We prioritize dependable uptime and clear driver experience, so locations earn trust and repeat visits.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-10 md:mb-12">
          {SNAPSHOT.map((item) => (
            <SubpageCard key={item.label}>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/50">{item.label}</p>
              <p className="mt-3 text-lg font-semibold text-white">{item.value}</p>
              <p className="mt-2 text-sm text-white/50">{item.hint}</p>
            </SubpageCard>
          ))}
        </div>

        <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-black/20 shadow-[0_32px_64px_-32px_rgba(0,0,0,0.7)]">
          <div className="px-4 py-2.5 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-medium text-white/45 uppercase tracking-wider">Interactive map</span>
            <span className="text-xs text-white/35">India-wide view</span>
          </div>
          <iframe
            title="EZIT locations map"
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[min(500px,60vh)] min-h-[320px]"
            loading="lazy"
          />
        </div>
      </PageSection>
    </div>
  );
}
