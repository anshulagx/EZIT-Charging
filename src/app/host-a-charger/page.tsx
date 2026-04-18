import Link from "next/link";
import LandownerForm from "@/components/LandownerForm";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { StepCard, SubpageCard } from "@/components/subpage/SubpageCard";
import {
  IconArrowDown,
  IconBanknotes,
  IconBolt,
  IconBuilding,
  IconCarFront,
  IconCheck,
  IconClipboard,
  IconClipboardCheck,
  IconEye,
  IconGlobe,
  IconHome,
  IconMapPin,
  IconRoute,
  IconTrendingUp,
  IconUsers,
  IconWrench,
} from "@/components/icons";

const IDEAL = [
  {
    title: "Hospitality & retail",
    items: ["Hotels", "Restaurants", "Shopping malls"],
    icon: IconBuilding,
  },
  {
    title: "High-traffic corridors",
    items: ["Highway properties", "Petrol pumps", "Transit adjacencies"],
    icon: IconRoute,
  },
  {
    title: "Residential & mixed use",
    items: ["Residential societies", "Commercial complexes", "Office parks"],
    icon: IconHome,
  },
] as const;

const REQUIREMENTS = [
  {
    title: "Space & access",
    text: "Minimum two parking spaces with practical ingress/egress for EVs.",
    icon: IconMapPin,
  },
  {
    title: "Power",
    text: "Three-phase availability (or a clear path to upgrade) for reliable fast charging.",
    icon: IconBolt,
  },
  {
    title: "Visibility",
    text: "Locations drivers can find easily: signage-friendly and map-friendly.",
    icon: IconEye,
  },
  {
    title: "Footfall",
    text: "Dwell time or steady traffic patterns that support utilization.",
    icon: IconUsers,
  },
] as const;

const BENEFITS = [
  {
    text: "New recurring income from underused parking",
    icon: IconBanknotes,
  },
  {
    text: "Stronger asset positioning as EV adoption grows",
    icon: IconTrendingUp,
  },
  {
    text: "Higher footfall and dwell from charging customers",
    icon: IconCarFront,
  },
  {
    text: "Sustainability story your guests and tenants notice",
    icon: IconGlobe,
  },
] as const;

const STEPS = [
  { title: "Submit location details", icon: <IconClipboard className="w-4 h-4" /> },
  { title: "EZIT evaluates the site", icon: <IconClipboardCheck className="w-4 h-4" /> },
  { title: "Charger installation & commissioning", icon: <IconWrench className="w-4 h-4" /> },
  { title: "Revenue sharing begins", icon: <IconBanknotes className="w-4 h-4" /> },
] as const;

export default function HostAChargerPage() {
  return (
    <div>
      <PageHero
        eyebrow="For landowners"
        title={
          <>
            Turn parking into <span className="text-white/90">monthly EV income</span>
          </>
        }
        description="Partner with EZIT to deploy chargers at your location. We handle evaluation, installation, and operations so you can focus on your business."
      >
        <Link
          href="#landowner"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
        >
          <IconArrowDown className="w-4 h-4 shrink-0" aria-hidden />
          Jump to application
        </Link>
      </PageHero>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Fit checklist",
          title: "Ideal locations",
          description: "If your property matches one of these profiles, you are already in the right conversation.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {IDEAL.map((group) => {
            const GroupIcon = group.icon;
            return (
              <SubpageCard key={group.title} className="group/ideal">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ezit-green/10 border border-ezit-green/25 text-ezit-green shrink-0 transition-transform duration-300 group-hover/ideal:scale-110">
                    <GroupIcon className="w-5 h-5" aria-hidden />
                  </span>
                  <h3 className="text-lg font-semibold text-white pt-1.5">{group.title}</h3>
                </div>
                <ul className="mt-4 space-y-2.5 pl-0.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-white/65">
                      <IconCheck className="w-4 h-4 text-ezit-green/85 shrink-0" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Requirements",
          title: "What we look for on site",
          description: "These fundamentals keep projects on schedule and performance strong after go-live.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6">
          {REQUIREMENTS.map((req) => {
            const ReqIcon = req.icon;
            return (
              <SubpageCard key={req.title} className="group/req">
                <div className="flex gap-4">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-white/[0.08] border border-white/15 text-white/80 shrink-0 transition-all duration-300 group-hover/req:scale-110 group-hover/req:border-ezit-green/35 group-hover/req:text-ezit-green">
                    <ReqIcon className="w-5 h-5" aria-hidden />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-lg font-semibold text-white">{req.title}</h3>
                    <p className="mt-3 text-sm text-white/60 leading-relaxed">{req.text}</p>
                  </div>
                </div>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Upside",
          title: "Why hosts partner with EZIT",
          description: "Charging is infrastructure, but the business case should still be simple.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit) => {
            const BenIcon = benefit.icon;
            return (
              <SubpageCard key={benefit.text} className="group/benefit">
                <div className="flex gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-ezit-green/10 border border-ezit-green/25 flex items-center justify-center text-ezit-green transition-transform duration-300 group-hover/benefit:scale-110">
                    <BenIcon className="w-5 h-5" aria-hidden />
                  </span>
                  <p className="text-sm text-white/70 leading-relaxed pt-0.5">{benefit.text}</p>
                </div>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Timeline",
          title: "How hosting works",
          description: "A clear sequence from first details to first session.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {STEPS.map((step, index) => (
            <StepCard key={step.title} step={index + 1} title={step.title} icon={step.icon} />
          ))}
        </div>
      </PageSection>

      <LandownerForm />
    </div>
  );
}
