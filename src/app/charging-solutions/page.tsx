import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";
import { SPECS } from "@/lib/content";

export const metadata: Metadata = {
  title: "AC & DC EV Charger Hardware for Every Property | EZIT",
  description:
    "From 7.4 kW AC wallboxes to 360 kW DC fast chargers. EZIT sizes the right charger for your site, footfall and power supply.",
  alternates: { canonical: "/charging-solutions" },
};

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm text-white/70">
      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-white/[0.08] border border-white/20 flex items-center justify-center">
        <svg className="w-3 h-3 text-white/75" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

function SpecRows({ rows }: { rows: { label: string; value: string }[] }) {
  return (
    <dl className="mt-8 space-y-3 border-t border-white/[0.08] pt-6">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col sm:flex-row sm:gap-4 sm:justify-between gap-0.5 text-sm">
          <dt className="text-white/45 shrink-0">{row.label}</dt>
          <dd className="text-white/80 sm:text-right leading-relaxed">{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export default function ChargingSolutionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hardware"
        title={
          <>
            Charging solutions for <span className="text-white/90">every use case</span>
          </>
        }
        description="Reliable AC and DC infrastructure, from apartments and workplaces to highways and high-throughput hubs."
      >
        <Link
          href="/contact"
          className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
        >
          Request a quote
        </Link>
      </PageHero>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Product lines",
          title: "AC destination & DC fast charging",
          description: "Pick the right tool for dwell time, traffic, and electrical capacity. We help you size responsibly.",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <SubpageCard className="p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">Destination</span>
                <h2 className="mt-2 text-2xl font-bold text-white">AC chargers</h2>
                <p className="mt-2 text-white/55 text-sm">{SPECS.ac.power} for overnight, workplace, and retail dwell.</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-white/50">
                {SPECS.ac.fromPrice}
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              <CheckItem>Ideal for apartments, hotels, and offices</CheckItem>
              <CheckItem>Scheduled and controlled charging where needed</CheckItem>
              <CheckItem>Built-in safety and surge protection</CheckItem>
            </ul>
            <SpecRows
              rows={[
                { label: "Power", value: SPECS.ac.power },
                { label: "Connector", value: SPECS.ac.connector },
                { label: "Charge time", value: SPECS.ac.chargeTime },
                { label: "Payment", value: SPECS.ac.payment },
                { label: "Safety", value: SPECS.ac.safety },
              ]}
            />
          </SubpageCard>

          <SubpageCard className="p-8 ring-1 ring-white/10">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">High throughput</span>
                <h2 className="mt-2 text-2xl font-bold text-white">DC fast chargers</h2>
                <p className="mt-2 text-white/55 text-sm">{SPECS.dc.power} for corridors, malls, fleets, and transit nodes.</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/[0.08] border border-white/15 text-xs text-white/65">
                {SPECS.dc.fromPrice}
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              <CheckItem>Rapid top-up for intercity and highway trips</CheckItem>
              <CheckItem>Strong fit for fleets and mixed commercial sites</CheckItem>
              <CheckItem>24×7 monitoring and uptime-focused operations</CheckItem>
            </ul>
            <SpecRows
              rows={[
                { label: "Power", value: SPECS.dc.power },
                { label: "Connector", value: SPECS.dc.connector },
                { label: "Charge time", value: SPECS.dc.chargeTime },
                { label: "Payment", value: SPECS.dc.payment },
                { label: "Safety", value: SPECS.dc.safety },
              ]}
            />
          </SubpageCard>
        </div>
      </PageSection>

      <PageCTA
        title={<>Not sure which charger fits? We&apos;ll size it.</>}
        description="Share your site context and traffic. We recommend an architecture that matches demand and electrical readiness."
        primary={{ href: "/host-a-charger", label: "List Your Land" }}
        secondary={{ href: "/contact", label: "Speak with sales" }}
      />
    </div>
  );
}
