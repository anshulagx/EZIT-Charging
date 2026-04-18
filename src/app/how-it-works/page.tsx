import Link from "next/link";
import PageCTA from "@/components/subpage/PageCTA";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { StepCard } from "@/components/subpage/SubpageCard";
import { IconBanknotes, IconBolt, IconClipboard, IconWrench } from "@/components/icons";

const STEPS = [
  {
    title: "Landowner lists property",
    description: "Share location basics, power availability, and traffic context so we can qualify fit quickly.",
    icon: <IconClipboard className="w-4 h-4" />,
  },
  {
    title: "EZIT installs & commissions",
    description: "We handle evaluation, charger selection, installation partners, and go-live checks.",
    icon: <IconWrench className="w-4 h-4" />,
  },
  {
    title: "Drivers charge with ease",
    description: "Fast sessions, clear pricing, and UPI-friendly flows reduce friction and improve repeat use.",
    icon: <IconBolt className="w-4 h-4" />,
  },
  {
    title: "Revenue is shared",
    description: "Transparent reporting and partner-friendly structures align incentives for the long term.",
    icon: <IconBanknotes className="w-4 h-4" />,
  },
] as const;

export default function HowItWorksPage() {
  return (
    <div>
      <PageHero
        eyebrow="Process"
        title={
          <>
            How EZIT works
          </>
        }
        description="A simple ecosystem connecting landowners, EZIT operations, EV drivers, and revenue partners, from first conversation to recurring income."
      >
        <Link
          href="/host-a-charger"
          className="px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300"
        >
          Start with your site
        </Link>
        <Link
          href="/invest"
          className="px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
        >
          Explore investing
        </Link>
      </PageHero>

      <PageSection
        tone="muted"
        header={{
          eyebrow: "Four steps",
          title: "From listing to revenue",
          description: "Most partners follow the same straightforward path, optimized for speed without cutting corners on safety or quality.",
        }}
      >
        <div className="relative">
          <div
            className="hidden lg:block absolute top-[2.25rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none"
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

      <PageCTA
        title="Ready to plug in?"
        description="Tell us about your property or ask questions. We will guide the next step."
        primary={{ href: "/contact", label: "Talk to our team" }}
        secondary={{ href: "/charging-locations", label: "Find charging" }}
      />
    </div>
  );
}
