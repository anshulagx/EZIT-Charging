import PageSection from "@/components/subpage/PageSection";
import { IconMapPin } from "@/components/icons";
import { LIVE_SITES } from "@/lib/content";

export default function TrustedProperties({ tone = "base" }: { tone?: "base" | "muted" | "deep" }) {
  return (
    <PageSection
      tone={tone}
      header={{
        eyebrow: "Trusted by prestigious properties",
        title: "Live at marquee sites across Punjab, Haryana & Bengaluru",
        description:
          "EZIT chargers are already running at leading malls, complexes and residences along the Delhi–Ambala–Mohali corridor and in Bengaluru.",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
        {LIVE_SITES.map((site) => (
          <div
            key={`${site.name}-${site.city}`}
            className="rounded-2xl p-5 bg-white/[0.03] border border-white/[0.08] flex items-start gap-3"
          >
            <span className="shrink-0 w-10 h-10 rounded-xl bg-ezit-green/10 border border-ezit-green/25 flex items-center justify-center text-ezit-green">
              <IconMapPin className="w-5 h-5" aria-hidden />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white/90 leading-snug">{site.name}</p>
              <p className="mt-1 text-xs text-white/55">{site.city}</p>
            </div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
