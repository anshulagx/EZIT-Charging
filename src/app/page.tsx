import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageSection from "@/components/subpage/PageSection";
import { IconRowCard, StepCard, SubpageCard } from "@/components/subpage/SubpageCard";

const PROBLEMS = [
  "Limited charging infrastructure in high-traffic corridors and neighbourhoods.",
  "Non-working or unreliable public chargers erode driver trust.",
  "Multiple apps and wallet friction slow down every session.",
  "Slow charging and long waits where fast turnaround matters.",
] as const;

const SOLUTIONS = [
  {
    title: "FAST charging",
    text: "High-performance DC hardware built for rapid turnaround and busy sites.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "APP-FREE UPI payments",
    text: "Simple, app-free payment flows so drivers start and finish without wallet juggling.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3 3.75h10.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "RELIABLE infrastructure",
    text: "Infrastructure-grade uptime with proactive maintenance and monitoring.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
] as const;

const ROLES = [
  {
    eyebrow: "Land",
    title: "Landowners",
    text: "Earn passive income from parking space with a partner that operates the asset.",
    href: "/host-a-charger",
    cta: "List your land",
  },
  {
    eyebrow: "Capital",
    title: "Investors",
    text: "Deploy capital into EV charging with EZIT-led installation and operations.",
    href: "/invest",
    cta: "Explore investment",
  },
  {
    eyebrow: "Drivers",
    title: "EV drivers",
    text: "Find fast, reliable charging on your route with straightforward payments.",
    href: "/charging-locations",
    cta: "Find charging",
  },
] as const;

const BENEFITS = [
  "New monthly income from underused parking",
  "Higher footfall and dwell at your location",
  "Premium EV customers and repeat visits",
  "Future-ready, sustainability-forward property",
] as const;

const STEPS = [
  { title: "Submit property", description: "Share location, power, and access details in one short flow." },
  { title: "Site evaluation", description: "EZIT qualifies traffic, electrical readiness, and economics." },
  { title: "Charger installation", description: "We manage install partners, commissioning, and go-live checks." },
  { title: "Earn revenue", description: "Transparent reporting and partner-friendly revenue structures." },
] as const;

export default function Home() {
  return (
    <>
      <Hero />

      <PageSection
        tone="muted"
        header={{
          eyebrow: "The gap",
          title: "The EV charging problem",
          description:
            "Drivers need dependable fast charging and simple payments. Many markets still see broken hardware, thin coverage, and friction at the meter.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {PROBLEMS.map((problem, i) => (
            <SubpageCard key={problem}>
              <div className="flex gap-3">
                <span className="shrink-0 w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-200/90 text-xs font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-white/70 leading-relaxed">{problem}</p>
              </div>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Our answer",
          title: "The EZIT solution",
          description: "Hardware, payments, and operations designed for real-world utilization—not brochure specs.",
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
        tone="muted"
        header={{
          eyebrow: "Participate",
          title: "Choose your role",
          description:
            "Whether you list land, invest, or charge—there is a path into India's EV build-out.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {ROLES.map((role) => (
            <SubpageCard key={role.title} className="flex flex-col h-full">
              <span className="text-xs font-semibold uppercase tracking-wider text-ezit-green">{role.eyebrow}</span>
              <h3 className="mt-2 text-lg font-semibold text-white">{role.title}</h3>
              <p className="mt-3 text-sm text-white/60 leading-relaxed flex-1">{role.text}</p>
              <Link
                href={role.href}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ezit-green hover:text-white transition-colors group"
              >
                {role.cta}
                <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  →
                </span>
              </Link>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Hosts",
          title: "Benefits of installing chargers",
          description: "Turn unused bays into a recurring line item—and a signal that your property is built for the next decade.",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
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
        tone="muted"
        header={{
          eyebrow: "Process",
          title: "How EZIT works",
          description: "From first details to revenue—one predictable sequence we run with every qualified site.",
        }}
      >
        <div className="max-w-6xl mx-auto relative">
          <div
            className="hidden lg:block absolute top-[2.25rem] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-ezit-green/35 to-transparent pointer-events-none"
            aria-hidden
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {STEPS.map((step, index) => (
              <StepCard key={step.title} step={index + 1} title={step.title} description={step.description} />
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Coverage",
          title: "Charging network map",
          description: "Pan-India view of where EZIT is building reliable fast charging—tap through to city-level discovery.",
        }}
      >
        <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-black/20 shadow-[0_32px_64px_-32px_rgba(0,0,0,0.7)]">
          <div className="px-4 py-2.5 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-medium text-white/45 uppercase tracking-wider">Live network</span>
            <span className="text-xs text-white/35">India · zoom to explore</span>
          </div>
          <iframe
            title="EZIT charging network map"
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[min(420px,50vh)] min-h-[280px]"
            loading="lazy"
          />
        </div>
      </PageSection>

      <TrustSection />

      <PageCTA
        title={
          <>
            Start earning from <span className="text-ezit-green">EV charging</span> today
          </>
        }
        description="List a site or talk to our team—we will qualify fit and outline the next steps."
        primary={{ href: "/host-a-charger", label: "List your land" }}
        secondary={{ href: "/contact", label: "Talk to our team" }}
      />
    </>
  );
}
