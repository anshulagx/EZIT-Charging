import type { Metadata } from "next";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import StatsBand from "@/components/StatsBand";
import FAQ from "@/components/FAQ";
import Image from "next/image";
import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageSection from "@/components/subpage/PageSection";
import { IconRowCard, StepCard, SubpageCard } from "@/components/subpage/SubpageCard";
import { CONTACT, PATHS, SPECS } from "@/lib/content";
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
  IconPhone,
  IconRoute,
  IconShieldCheck,
  IconSparkles,
  IconTrendingUp,
  IconUsers,
  IconWrench,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "EV Charging Station Partnership & Franchise in India | EZIT",
  description:
    "Turn your land or investment into EV charging income. EZIT builds, owns & operates fast, app-free DC charging stations across India. 95% uptime, AI security, 24/7 support.",
  alternates: { canonical: "/" },
};

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
  {
    title: "AI-ENABLED 360° SECURITY",
    text: "Cameras, two-way talk, siren, and 24/7 monitoring at no extra cost. Your site and drivers stay protected.",
    icon: <IconShieldCheck className="w-5 h-5" />,
  },
  {
    title: "95% UPTIME GUARANTEE",
    text: "Proactive, monitoring-led operations keep chargers live when drivers need them, backed by a dedicated 1:1 account manager.",
    icon: <IconTrendingUp className="w-5 h-5" />,
  },
  {
    title: "BACKED BY BLACK COBRA GROUP",
    text: "33 years of infrastructure heritage (Est. 1992) behind every site. You partner with a group built to last.",
    icon: <IconUsers className="w-5 h-5" />,
  },
] as const;

const CHARGER_OFFERINGS = [
  {
    segment: "Residential",
    title: "AC Charger",
    power: SPECS.ac.power,
    imageSrc: "/images/chargers/ac-charger.png",
    imageAlt: "EZIT 22 kW Type-2 AC EV charger for homes and workplaces",
    specs: [
      { label: "Connector", value: SPECS.ac.connector },
      { label: "Charge time", value: SPECS.ac.chargeTime },
      { label: "Payment", value: SPECS.ac.payment },
      { label: "Safety", value: SPECS.ac.safety },
    ],
  },
  {
    segment: "Commercial",
    title: "DC Fast Charger",
    power: SPECS.dc.power,
    imageSrc: "/images/chargers/dc-charger.png",
    imageAlt: "EZIT 360 kW CCS-2 DC fast EV charger for commercial sites",
    specs: [
      { label: "Connector", value: SPECS.dc.connector },
      { label: "Charge time", value: SPECS.dc.chargeTime },
      { label: "Payment", value: SPECS.dc.payment },
      { label: "Safety", value: SPECS.dc.safety },
    ],
  },
] as const;

const ROLES = [
  {
    eyebrow: "LAND",
    title: "Landowners",
    text: "Turn your unused parking space into a steady source of income while EZIT handles installation, operations, and maintenance.",
    href: "/host-a-charger",
    cta: "List Your Land",
    icon: IconMapPin,
  },
  {
    eyebrow: "CAPITAL",
    title: "Investors",
    text: "Own a charger on India's fast-growing network and earn long-term returns with EZIT managing setup and daily operations.",
    href: "/invest",
    cta: "Own a Franchise",
    icon: IconTrendingUp,
  },
  {
    eyebrow: "DRIVERS",
    title: "EV drivers",
    text: "Need charging near you? Tell us your location and we will route your request to the right team.",
    href: PATHS.requestCharger.href,
    cta: PATHS.requestCharger.label,
    icon: IconCarFront,
  },
] as const;

const BENEFITS = [
  {
    title: "New monthly income from underused parking",
    text: "Earn consistent revenue from parking spaces that would otherwise remain unused.",
  },
  {
    title: "On-time payments, every month",
    text: "Transparent, on-time monthly payments you can count on. No chasing, no surprises.",
  },
  {
    title: "Higher footfall at your location",
    text: "Attract more visitors and increase time spent at your property.",
  },
  {
    title: "Future-ready, sustainability-focused property",
    text: "Position your property as modern, forward-looking, and aligned with clean energy.",
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
    description: "You receive a clear proposal with charger type, economics, and timeline.",
    icon: <IconBanknotes className="w-4 h-4" />,
  },
  {
    title: "Sign & install in 30–45 days",
    description: "We install, commission, and run the charger, then you start earning.",
    icon: <IconWrench className="w-4 h-4" />,
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "How do I rent my land for an EV charging station?",
    answer:
      "Share your location and a few photos with EZIT over WhatsApp or email. We run a free, no-obligation site survey, send you a tailored proposal, and if you sign, we install and operate the charger at our cost. You earn a monthly revenue share.",
  },
  {
    question: "How much does an EV charging franchise cost in India?",
    answer:
      "A typical DC fast-charging franchise starts from around ₹10–15 lakh including hardware and infrastructure. EZIT secures the location, installs, owns and operates everything end-to-end, with a typical payback of 2–3 years.",
  },
  {
    question: "Is EV charging profitable in India?",
    answer:
      "Yes. With India targeting around 30% EV penetration by 2030 and charging now a de-licensed activity, well-located DC sites can deliver strong returns. EZIT focuses on high-dwell, high-traffic locations to maximise utilisation.",
  },
  {
    question: "How long does installation take?",
    answer:
      "After your free site survey and a signed agreement, EZIT typically installs and commissions a charger within 30–45 days, with no upfront commitment until you receive your tailored proposal.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <PageSection
        tone="muted"
        header={{
          eyebrow: "THE PROBLEM",
          title: "Why EV charging in India still frustrates drivers",
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
        <p className="mt-8 text-center text-base font-medium text-white/80">
          EZIT was built to fix all four.
        </p>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "OUR SOLUTION",
          title: "The EZIT solution",
          description:
            "Built for real-world usage, not just specifications. EZIT combines fast hardware, simple payments, AI security, and reliable operations to deliver a seamless charging experience.",
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

      <StatsBand tone="muted" />

      <PageSection
        tone="muted"
        header={{
          eyebrow: "GET STARTED",
          title: "Choose your role",
          description:
            "Whether you own land, want to invest, or need charging nearby, EZIT gives you a simple way to be part of India's charging network.",
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
            "From your first message to earning revenue, we handle everything through a simple and structured process. No upfront commitment until you receive your tailored proposal.",
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

      <TrustSection />

      <FAQ items={FAQ_ITEMS} tone="base" description="Quick answers for landowners, franchise investors, and drivers." />

      <PageCTA
        title={<>Start earning from EV charging today</>}
        description="List your land or own a franchise. We'll qualify fit and outline the next steps."
        primary={{ href: "/host-a-charger", label: "List Your Land" }}
        secondary={{ href: "/invest", label: "Own a Franchise" }}
        extra={
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            <a
              href={`tel:${CONTACT.phoneHref}`}
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <IconPhone className="w-4 h-4 text-ezit-green/80 shrink-0" aria-hidden />
              {CONTACT.phoneDisplay}
            </a>
            <a
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
            >
              <IconSparkles className="w-4 h-4 text-ezit-green/80 shrink-0" aria-hidden />
              Chat on WhatsApp
            </a>
          </div>
        }
      />
    </>
  );
}
