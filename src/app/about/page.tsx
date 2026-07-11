import type { Metadata } from "next";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";
import { IconBuilding, IconGlobe, IconUsers } from "@/components/icons";

export const metadata: Metadata = {
  title: "About EZIT | Green Energy Arm of Black Cobra Group (Est. 1992)",
  description:
    "EZIT is the EV charging arm of the 33-year-old Black Cobra Group. We build, own and operate India's most reliable charging network across Delhi NCR, Punjab & Haryana.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    icon: IconBuilding,
    title: "Building Materials",
    desc: "Black Cobra Ply, Mica & WPC, plus Alex aluminium panels. Trusted infrastructure products built over three decades.",
  },
  {
    icon: IconUsers,
    title: "Education",
    desc: "Quantum University, Roorkee, a top-60 ranked B-school developing future-ready talent.",
  },
  {
    icon: IconGlobe,
    title: "Green Energy",
    desc: "From fuel stations to EV charging, EZIT carries the group's energy legacy into clean mobility.",
  },
] as const;

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About EZIT"
        title={
          <>
            Green energy infrastructure, built for{" "}
            <span className="text-ezit-green">India&apos;s EV future</span>
          </>
        }
        description="EZIT is the green energy arm of the 33-year-old Black Cobra Group. You're partnering with a group with deep execution experience, not a startup that may disappear next year."
      />

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Who we are",
          title: "A 33-year-old group behind every charger",
          description:
            "Founded in 1992, the Black Cobra Group spans three pillars. EZIT brings that execution depth, operational reliability, and long-term focus to EV charging.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {PILLARS.map((p) => {
            const PIcon = p.icon;
            return (
              <SubpageCard key={p.title} className="group/pillar">
                <div className="w-11 h-11 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-white/75 mb-4 transition-all duration-300 group-hover/pillar:scale-110 group-hover/pillar:border-ezit-green/35 group-hover/pillar:text-ezit-green">
                  <PIcon className="w-6 h-6" aria-hidden />
                </div>
                <h3 className="text-base font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-white/55 leading-relaxed">{p.desc}</p>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Direction",
          title: "Mission, vision & history",
          description: "Clear priorities that guide how we deploy, operate, and scale charging assets.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl">
          <SubpageCard>
            <div className="text-xs font-semibold uppercase tracking-wider text-ezit-green mb-2">Mission</div>
            <h3 className="text-xl font-semibold text-white">Reliable access</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Build dependable EV charging across highways, cities, and commercial hubs, where demand is real and uptime
              matters.
            </p>
          </SubpageCard>
          <SubpageCard>
            <div className="text-xs font-semibold uppercase tracking-wider text-ezit-green mb-2">Vision</div>
            <h3 className="text-xl font-semibold text-white">Scalable green mobility</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Power India&apos;s transition to electric mobility with infrastructure that scales with adoption, not
              one-off installs.
            </p>
          </SubpageCard>
        </div>
      </PageSection>

      <PageCTA
        title={
          <>
            Partner with <span className="text-ezit-green">EZIT</span>
          </>
        }
        description="List your land, own a franchise, or talk to our team about your location."
        primary={{ href: "/host-a-charger", label: "List Your Land" }}
        secondary={{ href: "/invest", label: "Own a Franchise" }}
      />
    </div>
  );
}
