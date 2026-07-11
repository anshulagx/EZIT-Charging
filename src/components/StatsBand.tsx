import PageSection from "@/components/subpage/PageSection";
import { STATS } from "@/lib/content";

export default function StatsBand({ tone = "deep" }: { tone?: "base" | "muted" | "deep" }) {
  return (
    <PageSection
      tone={tone}
      header={{
        eyebrow: "EZIT by the numbers",
        title: "Backed by scale, run with discipline",
        description:
          "Three decades of group heritage and a charging network engineered for uptime, security, and on-time payments.",
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
        {STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl p-5 sm:p-6 bg-white/[0.03] border border-white/[0.08] text-center"
          >
            <div className="text-3xl sm:text-4xl font-bold text-ezit-green tabular-nums">{stat.value}</div>
            <div className="mt-2 text-xs sm:text-sm text-white/60 leading-snug">{stat.label}</div>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
