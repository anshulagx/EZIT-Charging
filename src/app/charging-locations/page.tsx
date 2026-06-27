import type { Metadata } from "next";
import Link from "next/link";
import ChargingLocationFilters from "@/components/ChargingLocationFilters";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";
import { LIVE_SITES } from "@/lib/content";

export const metadata: Metadata = {
  title: "Find EZIT EV Charging Stations Near You | App-Free UPI Charging",
  description:
    "Locate EZIT fast charging stations across Delhi NCR, Punjab & Haryana. CCS-2 DC fast charging, pay by UPI — no app, no sign-up.",
  alternates: { canonical: "/charging-locations" },
};

function StatusPill({ status }: { status: string }) {
  const upcoming = status.toLowerCase() === "upcoming";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
        upcoming
          ? "bg-amber-500/10 border-amber-500/25 text-amber-200/90"
          : "bg-ezit-green/10 border-ezit-green/30 text-ezit-green"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${upcoming ? "bg-amber-400" : "bg-ezit-green"}`} />
      {status}
    </span>
  );
}

export default function ChargingLocationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Drivers"
        title={<>Find EZIT EV charging stations near you</>}
        description="Pay by UPI — no app, no sign-up, no wallet. Browse our real live sites across the Delhi NCR–Punjab–Haryana corridor and Bengaluru before you arrive."
      >
        <Link
          href="/locations"
          className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
        >
          Full network map
        </Link>
      </PageHero>

      <PageSection tone="muted" className="!py-12 md:!py-14">
        <ChargingLocationFilters />
      </PageSection>

      <PageSection tone="base" header={{ eyebrow: "Coverage", title: "Network map" }}>
        <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-black/20 shadow-[0_32px_64px_-32px_rgba(0,0,0,0.7)]">
          <iframe
            title="EZIT charging locations map across Punjab and Haryana"
            src="https://maps.google.com/maps?q=Zirakpur%20Punjab&t=&z=9&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[min(440px,55vh)] min-h-[280px]"
            loading="lazy"
          />
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Live & upcoming sites",
          title: "Where EZIT is charging today",
          description: "Our real network across malls, complexes and residences. Pay by UPI at every site.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {LIVE_SITES.map((station) => (
            <SubpageCard key={`${station.name}-${station.city}`} className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white leading-snug">{station.name}</h3>
                <StatusPill status={station.status} />
              </div>
              <p className="mt-4 text-sm text-white/45">City</p>
              <p className="text-sm text-white/80">{station.city}</p>
              <div className="mt-5 pt-5 border-t border-white/[0.06] grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-white/45 text-xs uppercase tracking-wider mb-1">Charger</p>
                  <p className="text-white/85">{station.capacity}</p>
                </div>
                <div>
                  <p className="text-white/45 text-xs uppercase tracking-wider mb-1">Pay with</p>
                  <p className="text-white/85">UPI{station.type === "DC" ? ", RFID" : ""}</p>
                </div>
              </div>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title={<>Want charging near you?</>}
        description="Request a site or list your land. EZIT evaluates demand and feasibility for new deployments."
        primary={{ href: "/host-a-charger", label: "List Your Land" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </div>
  );
}
