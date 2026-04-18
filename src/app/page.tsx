import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Image from "next/image";
import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageSection from "@/components/subpage/PageSection";
import { IconRowCard, StepCard, SubpageCard } from "@/components/subpage/SubpageCard";
import {
  IconBanknotes,
  IconBolt,
  IconCarFront,
  IconCheck,
  IconClipboard,
  IconClipboardCheck,
  IconClock,
  IconExclamationTriangle,
  IconMapPin,
  IconMobileApps,
  IconRoute,
  IconShieldCheck,
  IconTrendingUp,
  IconWrench,
} from "@/components/icons";

const PROBLEMS = [
  {
    title: "Limited availability in key locations",
    text: "Charging stations are still missing in high-demand areas like highways, markets, and residential zones.",
    icon: IconRoute,
  },
  {
    title: "Unreliable charging experience",
    text: "Many public chargers are faulty or poorly maintained, making them hard to depend on.",
    icon: IconExclamationTriangle,
  },
  {
    title: "Too many apps and payments",
    text: "Drivers are forced to download apps, create accounts, and manage wallets just to charge.",
    icon: IconMobileApps,
  },
  {
    title: "Slow charging, long wait times",
    text: "Low-speed chargers increase wait times, especially when drivers need a quick top-up.",
    icon: IconClock,
  },
] as const;

const SOLUTIONS = [
  {
    title: "FAST charging",
    text: "High-performance DC chargers designed for quick turnaround at busy locations, so drivers spend less time waiting.",
    icon: <IconBolt className="w-5 h-5" />,
  },
  {
    title: "APP-FREE UPI payments",
    text: "Scan and pay instantly using UPI. No apps, no sign-ups, and no wallet hassles.",
    icon: <IconBanknotes className="w-5 h-5" />,
  },
  {
    title: "RELIABLE infrastructure",
    text: "Built for consistent performance with real-time monitoring and proactive maintenance to ensure chargers are always working.",
    icon: <IconShieldCheck className="w-5 h-5" />,
  },
] as const;

const CHARGER_OFFERINGS = [
  {
    segment: "Residential",
    title: "AC Charger",
    power: "7.4kW – 22kW",
    imageSrc: "/images/chargers/ac-charger.png",
    imageAlt: "EZIT residential AC wallbox charger",
    specs: [
      { label: "Connector", value: "TYPE-2" },
      { label: "Charge time", value: "5–10 hours" },
      { label: "Payment", value: "RFID, Web, App" },
      { label: "Safety", value: "IP55, Surge Protection" },
    ],
  },
  {
    segment: "Commercial",
    title: "DC Fast Charger",
    power: "30kW – 360kW",
    imageSrc: "/images/chargers/dc-charger.png",
    imageAlt: "EZIT commercial DC fast charger",
    specs: [
      { label: "Connector", value: "CCS-2" },
      { label: "Charge time", value: "5–60 minutes" },
      { label: "Payment", value: "UPI, RFID, Web, App" },
      { label: "Safety", value: "IP55, Surge Protection" },
    ],
  },
] as const;

const ROLES = [
  {
    eyebrow: "LAND",
    title: "Landowners",
    text: "Turn your unused parking space into a steady source of income while EZIT handles installation, operations, and maintenance.",
    href: "/invest",
    cta: "Own a Franchise",
    icon: IconMapPin,
  },
  {
    eyebrow: "CAPITAL",
    title: "Investors",
    text: "Invest in EV charging infrastructure and earn long-term returns with EZIT managing setup and daily operations.",
    href: "/invest",
    cta: "Explore investment",
    icon: IconTrendingUp,
  },
  {
    eyebrow: "DRIVERS",
    title: "EV drivers",
    text: "Access fast, reliable charging wherever you go with simple, hassle-free payments.",
    href: "/charging-locations",
    cta: "Find charging",
    icon: IconCarFront,
  },
] as const;

const BENEFITS = [
  {
    title: "New monthly income from underused parking",
    text: "Earn consistent revenue from parking spaces that would otherwise remain unused.",
  },
  {
    title: "Higher footfall at your location",
    text: "Attract more visitors and increase time spent at your property.",
  },
  {
    title: "Premium EV customers and repeat visits",
    text: "Bring in high-value customers who are more likely to return regularly.",
  },
  {
    title: "Future-ready, sustainability-focused property",
    text: "Position your property as modern, forward-looking, and aligned with clean energy.",
  },
] as const;

const STEPS = [
  {
    title: "Submit property",
    description:
      "Share your location, power availability, and access details through a quick and simple form.",
    icon: <IconClipboard className="w-4 h-4" />,
  },
  {
    title: "Site evaluation",
    description: "Our team reviews your location based on demand, visibility, and electrical readiness.",
    icon: <IconClipboardCheck className="w-4 h-4" />,
  },
  {
    title: "Charger installation",
    description: "We take care of installation, setup, and testing to ensure everything is ready to go.",
    icon: <IconWrench className="w-4 h-4" />,
  },
  {
    title: "Earn revenue",
    description:
      "Start earning with a transparent and reliable revenue model, with full support from EZIT.",
    icon: <IconBanknotes className="w-4 h-4" />,
  },
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      <PageSection
        tone="muted"
        header={{
          eyebrow: "THE PROBLEM",
          title: "EV charging today is still broken",
          description:
            "EV drivers still struggle with unreliable chargers, slow speeds, and complicated payments. The experience is inconsistent and that's holding EV adoption back.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PROBLEMS.map((problem, i) => {
            const PIcon = problem.icon;
            return (
              <SubpageCard key={problem.title} className="group/problem">
                <div className="flex gap-3">
                  <span className="shrink-0 w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center text-amber-200/95 transition-transform duration-300 group-hover/problem:scale-110 group-hover/problem:border-amber-400/40">
                    <PIcon className="w-5 h-5" aria-hidden />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-semibold text-white/90 leading-snug">
                      <span className="sr-only">Challenge {i + 1}. </span>
                      {i + 1}. {problem.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{problem.text}</p>
                  </div>
                </div>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "OUR SOLUTION",
          title: "The EZIT solution",
          description:
            "Built for real-world usage, not just specifications. EZIT combines fast hardware, simple payments, and reliable operations to deliver a seamless charging experience.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {SOLUTIONS.map((item) => (
            <IconRowCard key={item.title} icon={item.icon} title={item.title}>
              {item.text}
            </IconRowCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        tone="deep"
        header={{
          eyebrow: "Hardware",
          title: "Our charger offerings",
          description:
            "From residential to commercial, we have solutions for every need.",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {CHARGER_OFFERINGS.map((offering) => (
            <SubpageCard key={offering.segment} className="p-6 sm:p-8 group/offering overflow-hidden">
              <div className="flex flex-col md:flex-row md:items-stretch gap-6 md:gap-8">
                <div
                  className="relative w-full max-w-[240px] mx-auto md:mx-0 md:w-48 lg:w-56 shrink-0 aspect-[4/5] rounded-xl bg-white/[0.04] border border-white/[0.08] overflow-hidden transition-colors duration-300 group-hover/offering:border-white/15"
                >
                  <Image
                    src={offering.imageSrc}
                    alt={offering.imageAlt}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 240px, 224px"
                  />
                </div>
                <div className="min-w-0 flex-1 flex flex-col">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{offering.segment}</span>
                    <h3 className="mt-1 text-xl font-bold text-white">{offering.title}</h3>
                    <p className="mt-2 text-lg font-semibold text-white/90 tabular-nums">{offering.power}</p>
                  </div>
                  <dl className="mt-6 md:mt-8 space-y-3 border-t border-white/[0.08] pt-6 flex-1">
                    {offering.specs.map((row) => (
                      <div
                        key={row.label}
                        className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between gap-0.5 text-sm"
                      >
                        <dt className="text-white/45 shrink-0">{row.label}</dt>
                        <dd className="text-white/75 sm:text-right leading-relaxed">{row.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "GET STARTED",
          title: "Choose your role",
          description:
            "Whether you own land, want to invest, or drive an EV, EZIT gives you a simple way to be part of India's charging network.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ROLES.map((role) => {
            const RIcon = role.icon;
            return (
              <SubpageCard key={role.title} className="flex flex-col h-full group/role">
                <div className="flex items-start gap-3">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ezit-green/10 border border-ezit-green/25 text-ezit-green shrink-0 transition-transform duration-300 group-hover/role:scale-110">
                    <RIcon className="w-5 h-5" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/50">{role.eyebrow}</span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{role.title}</h3>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{role.text}</p>
                <Link
                  href={role.href}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-white/70 hover:text-white transition-colors group/link"
                >
                  {role.cta}
                  <span className="transition-transform group-hover/link:translate-x-0.5" aria-hidden>
                    →
                  </span>
                </Link>
              </SubpageCard>
            );
          })}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "HOST BENEFITS",
          title: "Benefits of installing chargers",
          description:
            "Turn your unused parking space into a reliable source of income while making your property ready for the future of mobility.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {BENEFITS.map((benefit) => (
            <SubpageCard key={benefit.title} className="group/benefit">
              <div className="flex gap-3">
                <span className="shrink-0 w-10 h-10 rounded-xl bg-ezit-green/10 border border-ezit-green/25 flex items-center justify-center text-ezit-green transition-transform duration-300 group-hover/benefit:scale-110">
                  <IconCheck className="w-5 h-5" aria-hidden />
                </span>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold text-white/90 leading-snug">{benefit.title}</p>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed">{benefit.text}</p>
                </div>
              </div>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "PROCESS",
          title: "How EZIT works",
          description:
            "From your first details to earning revenue, we handle everything through a simple and structured process.",
        }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div
            className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
            aria-hidden
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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

      <TrustSection />

      <PageCTA
        title={
          <>
            Start earning from EV charging today
          </>
        }
        description="List a site or talk to our team. We will qualify fit and outline the next steps."
        primary={{ href: "/invest", label: "Own a Franchise" }}
        secondary={{ href: "/contact", label: "Talk to our team" }}
      />
    </>
  );
}
