import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="About EZIT"
        title={
          <>
            Green energy infrastructure, built for{" "}
            <span className="text-ezit-green">India&apos;s EV future</span>
          </>
        }
        description="EZIT is the green energy initiative of the Black Cobra Group—focused on reliable charging access, operational depth, and long-term partnerships."
      />

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Who we are",
          title: "Company background",
          description:
            "Backed by Black Cobra Group's infrastructure legacy since 1992, EZIT brings execution depth, operational reliability, and long-term growth focus to the EV ecosystem.",
        }}
      >
        <SubpageCard hover={false} className="p-8 sm:p-10 max-w-4xl mx-auto text-center">
          <p className="text-white/65 leading-relaxed text-base">
            From highways to commercial hubs, we combine disciplined project delivery with charger uptime and payment
            experiences drivers actually use—so partners earn with confidence.
          </p>
        </SubpageCard>
      </PageSection>

      <PageSection
        tone="base"
        header={{
          eyebrow: "Direction",
          title: "Mission, vision & history",
          description: "Clear priorities that guide how we deploy, operate, and scale charging assets.",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          <SubpageCard>
            <div className="text-xs font-semibold uppercase tracking-wider text-ezit-green mb-2">Mission</div>
            <h3 className="text-xl font-semibold text-white">Reliable access</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Build dependable EV charging across highways, cities, and commercial hubs—where demand is real and uptime
              matters.
            </p>
          </SubpageCard>
          <SubpageCard>
            <div className="text-xs font-semibold uppercase tracking-wider text-ezit-green mb-2">Vision</div>
            <h3 className="text-xl font-semibold text-white">Scalable green mobility</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Power India&apos;s transition to electric mobility with infrastructure that scales with adoption—not
              one-off installs.
            </p>
          </SubpageCard>
          <SubpageCard>
            <div className="text-xs font-semibold uppercase tracking-wider text-ezit-green mb-2">Group history</div>
            <h3 className="text-xl font-semibold text-white">Decades of execution</h3>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Industrial and infrastructure experience adapted for next-generation mobility—safety, compliance, and
              field operations included.
            </p>
          </SubpageCard>
        </div>
      </PageSection>

      <PageCTA
        title={
          <>
            Partner with <span className="text-ezit-green">EZIT</span>
          </>
        }
        description="List a site, explore investment models, or talk to our team about your location."
        primary={{ href: "/host-a-charger", label: "Host a charger" }}
        secondary={{ href: "/contact", label: "Contact us" }}
      />
    </div>
  );
}
