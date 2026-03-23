import Link from "next/link";
import ChargingLocationFilters from "@/components/ChargingLocationFilters";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const stations = [
  { name: "EZIT Delhi Hub", city: "New Delhi", capacity: "120kW DC", availability: "Available", payment: "UPI, Card" },
  { name: "EZIT Gurgaon Corridor", city: "Gurugram", capacity: "60kW DC", availability: "Busy", payment: "UPI" },
  { name: "EZIT Jaipur Highway", city: "Jaipur", capacity: "30kW DC", availability: "Available", payment: "UPI, Wallet" },
] as const;

function AvailabilityPill({ status }: { status: string }) {
  const busy = status.toLowerCase() === "busy";
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${
        busy
          ? "bg-amber-500/10 border-amber-500/25 text-amber-200/90"
          : "bg-emerald-500/10 border-emerald-500/25 text-emerald-200/90"
      }`}
    >
      <span className={`w-1.5 h-1.5 rounded-full mr-1.5 ${busy ? "bg-amber-400" : "bg-emerald-400"}`} />
      {status}
    </span>
  );
}

export default function ChargingLocationsPage() {
  return (
    <div>
      <PageHero
        eyebrow="Drivers"
        title={
          <>
            Find <span className="text-ezit-green">EZIT</span> charging stations
          </>
        }
        description="Search the network, filter by charger type, and preview stations before you arrive—fast sessions and simple payments."
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
            title="EZIT charging locations map"
            src="https://maps.google.com/maps?q=India&t=&z=5&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[min(440px,55vh)] min-h-[280px]"
            loading="lazy"
          />
        </div>
      </PageSection>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Stations",
          title: "Featured locations",
          description: "Representative sites across the network—availability updates as utilization changes.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {stations.map((station) => (
            <SubpageCard key={station.name} className="flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-white leading-snug">{station.name}</h3>
                <AvailabilityPill status={station.availability} />
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
                  <p className="text-white/85">{station.payment}</p>
                </div>
              </div>
            </SubpageCard>
          ))}
        </div>
      </PageSection>

      <PageCTA
        title={
          <>
            Want charging <span className="text-ezit-green">near you?</span>
          </>
        }
        description="Request a site or list land—EZIT evaluates demand and feasibility for new deployments."
        primary={{ href: "/host-a-charger", label: "Host a charger" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </div>
  );
}
