import type { Metadata } from "next";
import Link from "next/link";
import LandownerForm from "@/components/LandownerForm";
import FAQ from "@/components/FAQ";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { StepCard, SubpageCard } from "@/components/subpage/SubpageCard";
import {
  IconArrowDown,
  IconBanknotes,
  IconBolt,
  IconBuilding,
  IconCheck,
  IconClipboard,
  IconClipboardCheck,
  IconEye,
  IconHome,
  IconMapPin,
  IconRoute,
  IconShieldCheck,
  IconSparkles,
  IconUsers,
  IconWrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "List Your Land for EV Charging | Earn Monthly Income | EZIT",
  description:
    "Own land, a mall, hotel or petrol pump? EZIT installs and operates EV chargers at zero cost to you and pays revenue every month. Free site survey within days.",
  alternates: { canonical: "/host-a-charger" },
};

const IDEAL = [
  {
    title: "Hospitality & retail",
    items: ["Hotels", "Highway restaurants", "Shopping malls", "Commercial buildings"],
    icon: IconBuilding,
  },
  {
    title: "High-traffic corridors",
    items: ["Highway properties", "Petrol pumps", "Hospitals", "Institutions & universities"],
    icon: IconRoute,
  },
  {
    title: "Residential & mixed use",
    items: ["Residential societies", "Corporate parks", "Developers with vacant parking", "Office complexes"],
    icon: IconHome,
  },
] as const;

const REQUIREMENTS = [
  {
    title: "Space & access",
    text: "1–2 parking bays (AC needs 1, DC needs 2) with practical ingress/egress for EVs.",
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
    text: "Monthly revenue share, paid on time",
    icon: IconBanknotes,
  },
  {
    text: "100% of charger + install cost borne by EZIT",
    icon: IconCheck,
  },
  {
    text: "AI 360° security + 24/7 monitoring included",
    icon: IconShieldCheck,
  },
  {
    text: "95% uptime guarantee",
    icon: IconBolt,
  },
  {
    text: "Aesthetic premium station that lifts your property's image",
    icon: IconSparkles,
  },
] as const;

const STEPS = [
  { title: "You reach out", description: "Send location & photos over WhatsApp or email.", icon: <IconClipboard className="w-4 h-4" /> },
  { title: "Quick discovery call", description: "A short call to understand your site and goals.", icon: <IconUsers className="w-4 h-4" /> },
  { title: "Free site survey", description: "Within days, free, with no obligation.", icon: <IconClipboardCheck className="w-4 h-4" /> },
  { title: "Tailored proposal", description: "Charger type, economics, and timeline, no upfront commitment.", icon: <IconBanknotes className="w-4 h-4" /> },
  { title: "Sign & install in 30–45 days", description: "We install and run it; you start earning.", icon: <IconWrench className="w-4 h-4" /> },
] as const;

const FAQ_ITEMS = [
  {
    question: "How do I rent my land for an EV charging station?",
    answer:
      "Send EZIT your location and photos over WhatsApp or email. We run a free, no-obligation site survey within days, send a tailored proposal, and on signing we install and operate the charger at our cost. You earn a monthly revenue share.",
  },
  {
    question: "How much can I earn renting land for EV charging?",
    answer:
      "Earnings depend on location, footfall and charger type. EZIT shares a transparent monthly revenue share, paid on time, with 100% of charger and installation cost borne by us.",
  },
  {
    question: "Do I have to pay anything to install a charger?",
    answer:
      "No. EZIT bears 100% of the charger and installation cost, plus AI 360° security, 24/7 monitoring and a 95% uptime guarantee. There is no upfront commitment until you receive your tailored proposal.",
  },
  {
    question: "How long does installation take?",
    answer:
      "After a free site survey and signed agreement, EZIT typically installs and commissions your charger within 30–45 days.",
  },
];

export default function HostAChargerPage() {
  return (
    <div>
      <PageHero
        eyebrow="List Your Land"
        title={
          <>
            Turn parking into <span className="text-white/90">monthly EV income</span>
          </>
        }
        description="List your land. We install and run the charger at our cost, you earn every month. Zero investment, zero operations. 95% uptime, AI 360° security, and on-time monthly payments."
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
          description: "A clear sequence from first message to first session: free site survey within days, install in 30–45 days.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
          {STEPS.map((step, index) => (
            <StepCard key={step.title} step={index + 1} title={step.title} description={step.description} icon={step.icon} />
          ))}
        </div>
      </PageSection>

      <LandownerForm />

      <FAQ items={FAQ_ITEMS} tone="muted" description="Everything landowners ask before listing with EZIT." />
    </div>
  );
}
