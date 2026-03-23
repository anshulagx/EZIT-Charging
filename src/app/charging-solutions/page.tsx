import type { ReactNode } from "react";
import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-3 text-sm text-white/70">
      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-ezit-green/15 border border-ezit-green/30 flex items-center justify-center">
        <svg className="w-3 h-3 text-ezit-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </span>
      <span className="leading-relaxed">{children}</span>
    </li>
  );
}

export default function ChargingSolutionsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Hardware"
        title={
          <>
            Charging solutions for <span className="text-ezit-green">every use case</span>
          </>
        }
        description="Reliable AC and DC infrastructure—from apartments and workplaces to highways and high-throughput hubs."
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
          description: "Pick the right tool for dwell time, traffic, and electrical capacity—we help you size responsibly.",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <SubpageCard className="p-8">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ezit-green">Destination</span>
                <h2 className="mt-2 text-2xl font-bold text-white">AC chargers</h2>
                <p className="mt-2 text-white/55 text-sm">7.4kW to 22kW for overnight, workplace, and retail dwell.</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-white/[0.06] border border-white/10 text-xs text-white/50">
                Lower capex
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              <CheckItem>Ideal for apartments, hotels, and offices</CheckItem>
              <CheckItem>Scheduled and controlled charging where needed</CheckItem>
              <CheckItem>Built-in safety and surge protection</CheckItem>
            </ul>
          </SubpageCard>

          <SubpageCard className="p-8 ring-1 ring-ezit-green/15">
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-ezit-green">High throughput</span>
                <h2 className="mt-2 text-2xl font-bold text-white">DC fast chargers</h2>
                <p className="mt-2 text-white/55 text-sm">30kW to 360kW for corridors, malls, fleets, and transit nodes.</p>
              </div>
              <div className="px-3 py-1 rounded-full bg-ezit-green/10 border border-ezit-green/25 text-xs text-ezit-green">
                Fast turnaround
              </div>
            </div>
            <ul className="mt-8 space-y-3">
              <CheckItem>Rapid top-up for intercity and highway trips</CheckItem>
              <CheckItem>Strong fit for fleets and mixed commercial sites</CheckItem>
              <CheckItem>24×7 monitoring and uptime-focused operations</CheckItem>
            </ul>
          </SubpageCard>
        </div>
      </PageSection>

      <PageCTA
        title={
          <>
            Not sure which charger fits? <span className="text-ezit-green">We&apos;ll size it.</span>
          </>
        }
        description="Share your site context and traffic—we recommend an architecture that matches demand and electrical readiness."
        primary={{ href: "/host-a-charger", label: "Submit your location" }}
        secondary={{ href: "/contact", label: "Speak with sales" }}
      />
    </div>
  );
}
