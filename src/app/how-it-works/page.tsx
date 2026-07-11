import type { Metadata } from "next";
import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { StepCard, SubpageCard } from "@/components/subpage/SubpageCard";
import { PATHS as SITE_PATHS } from "@/lib/content";
import {
  IconBanknotes,
  IconClipboard,
  IconClipboardCheck,
  IconMapPin,
  IconTrendingUp,
  IconUsers,
  IconWrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "How EZIT EV Charging Works | List Land or Own a Franchise",
  description:
    "Two simple paths: list your land and let EZIT install & operate, or own a franchise on our network. See the shared 5-step process from first message to revenue.",
  alternates: { canonical: "/how-it-works" },
};

const PATHS = [
  {
    eyebrow: "Have a location?",
    title: "List Your Land",
    text: "You have a site. EZIT installs and runs the charger at our cost, and you earn a monthly revenue share.",
    href: "/host-a-charger",
    cta: "List Your Land",
    icon: IconMapPin,
  },
  {
    eyebrow: "Want to invest?",
    title: "Own a Franchise",
    text: "You invest in the charger. EZIT secures the location and operates everything end-to-end, and you earn.",
    href: "/invest",
    cta: "Own a Franchise",
    icon: IconTrendingUp,
  },
] as const;

const STEPS = [
  {
    title: "You reach out",
    description: "Send your location and photos over WhatsApp or email. That's all it takes to start.",
    icon: <IconClipboard className="w-4 h-4" />,
  },
  {
    title: "Quick discovery call",
    description: "A short call to understand your site, power availability, and goals.",
    icon: <IconUsers className="w-4 h-4" />,
  },
  {
    title: "Free site survey",
    description: "Our team visits and assesses your location, free, with no obligation.",
    icon: <IconClipboardCheck className="w-4 h-4" />,
  },
  {
    title: "Tailored proposal",
    description: "A clear proposal with charger type, economics, and timeline. No upfront commitment until then.",
    icon: <IconBanknotes className="w-4 h-4" />,
  },
  {
    title: "Sign & install in 30–45 days",
    description: "We install, commission, and run the charger, then you start earning.",
    icon: <IconWrench className="w-4 h-4" />,
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div>
      <PageHero
        eyebrow="Process"
        title={<>How EZIT works</>}
        description="A simple ecosystem connecting landowners, franchise investors, EZIT operations, and EV drivers, from first conversation to recurring income."
      >
        <Link
          href="/host-a-charger"
          className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
        >
          List Your Land
        </Link>
        <Link
          href="/invest"
          className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
        >
          Own a Franchise
        </Link>
      </PageHero>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Pick your path",
          title: "Two simple ways to partner with EZIT",
          description: "Whichever you choose, EZIT handles the heavy lifting: installation, operations, security and uptime.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto">
          {PATHS.map((path) => {
            const PIcon = path.icon;
            return (
              <SubpageCard key={path.title} className="flex flex-col group/path p-7">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ezit-green/10 border border-ezit-green/25 text-ezit-green shrink-0 transition-transform duration-300 group-hover/path:scale-110">
                    <PIcon className="w-5 h-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{path.eyebrow}</span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{path.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{path.text}</p>
                <Link
                  href={path.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors group/link"
                >
                  {path.cta}
                  <span className="transition-transform group-hover/link:translate-x-0.5" aria-hidden>→</span>
                </Link>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Five steps",
          title: "From first message to revenue",
          description: "Both paths follow the same straightforward process: free site survey, install in 30–45 days, no upfront commitment until you receive your tailored proposal.",
        }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div
            className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
            aria-hidden
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-6">
            {STEPS.map((step, index) => (
              <StepCard
                key={step.title}
                step={index + 1}
                title={step.title}
                description={step.description}
                icon={step.icon}
              />
            ))}
          </div>
        </div>
      </PageSection>

      <PageCTA
        title="Ready to plug in?"
        description="Tell us about your property or ask questions. We will guide the next step."
        primary={{ href: "/contact", label: "Talk to our team" }}
        secondary={{ href: SITE_PATHS.requestCharger.href, label: SITE_PATHS.requestCharger.label }}
      />
    </div>
  );
}
