import Link from "next/link";
import LandownerForm from "@/components/LandownerForm";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { StepCard, SubpageCard } from "@/components/subpage/SubpageCard";

const IDEAL = [
  { title: "Hospitality & retail", items: ["Hotels", "Restaurants", "Shopping malls"] },
  { title: "High-traffic corridors", items: ["Highway properties", "Petrol pumps", "Transit adjacencies"] },
  { title: "Residential & mixed use", items: ["Residential societies", "Commercial complexes", "Office parks"] },
] as const;

const REQUIREMENTS = [
  { title: "Space & access", text: "Minimum two parking spaces with practical ingress/egress for EVs." },
  { title: "Power", text: "Three-phase availability (or a clear path to upgrade) for reliable fast charging." },
  { title: "Visibility", text: "Locations drivers can find easily—signage-friendly and map-friendly." },
  { title: "Footfall", text: "Dwell time or steady traffic patterns that support utilization." },
] as const;

const BENEFITS = [
  "New recurring income from underused parking",
  "Stronger asset positioning as EV adoption grows",
  "Higher footfall and dwell from charging customers",
  "Sustainability story your guests and tenants notice",
] as const;

const STEPS = [
  "Submit location details",
  "EZIT evaluates the site",
  "Charger installation & commissioning",
  "Revenue sharing begins",
] as const;

export default function HostAChargerPage() {
  return (
    <div>
      <PageHero
        eyebrow="For landowners"
        title={
          <>
            Turn parking into{" "}
            <span className="text-ezit-green">monthly EV income</span>
          </>
        }
        description="Partner with EZIT to deploy chargers at your location—we handle evaluation, installation, and operations so you can focus on your business."
      >
        <Link
          href="#landowner"
          className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
        >
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
          {IDEAL.map((group) => (
            <SubpageCard key={group.title}>
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                    <span className="w-1.5 h-1.5 rounded-full bg-ezit-green/80 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </SubpageCard>
          ))}
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
          {REQUIREMENTS.map((req) => (
            <SubpageCard key={req.title}>
              <h3 className="text-lg font-semibold text-white">{req.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed">{req.text}</p>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Upside",
          title: "Why hosts partner with EZIT",
          description: "Charging is infrastructure—but the business case should still be simple.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {BENEFITS.map((benefit) => (
            <SubpageCard key={benefit}>
              <div className="flex gap-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-ezit-green/12 border border-ezit-green/25 flex items-center justify-center text-ezit-green text-xs font-bold">
                  ✓
                </span>
                <p className="text-sm text-white/70 leading-relaxed">{benefit}</p>
              </div>
            </SubpageCard>
          ))}
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
          {STEPS.map((label, index) => (
            <StepCard key={label} step={index + 1} title={label} />
          ))}
        </div>
      </PageSection>

      <LandownerForm />
    </div>
  );
}
