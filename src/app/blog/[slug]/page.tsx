import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const CONTENT: Record<string, { title: string; body: string[]; read: string }> = {
  "ev-charging-business-india": {
    title: "EV charging business in India",
    read: "6 min read",
    body: [
      "India's charging opportunity is driven by rapid EV adoption and infrastructure gaps across highways and urban clusters.",
      "Successful projects start with location fundamentals: traffic mix, dwell time, electrical readiness, and visibility.",
      "Operators that combine reliable uptime, easy payments, and clear pricing create stronger utilization and repeat demand.",
    ],
  },
  "cost-of-ev-charging-station": {
    title: "Cost of EV charging station",
    read: "7 min read",
    body: [
      "Charging station economics vary by charger type, site readiness, civil works, transformer requirements, and software stack.",
      "AC setups typically have lower initial capex, while DC fast charging needs higher upfront investment but supports higher throughput.",
      "A practical financial model should include installation, energy costs, operations, service uptime, and demand growth assumptions.",
    ],
  },
  "earn-from-ev-chargers": {
    title: "How to earn from EV chargers",
    read: "5 min read",
    body: [
      "Landowners can monetize parking space through fixed rent, revenue share, or hybrid structures based on station performance.",
      "Partner outcomes improve with high-visibility locations, stable electricity, and a strong operations partner.",
      "As EV penetration grows, early hosts can gain recurring income and stronger commercial footfall advantages.",
    ],
  },
  "ev-infrastructure-growth-india": {
    title: "EV infrastructure growth in India",
    read: "6 min read",
    body: [
      "The next phase of EV adoption depends on dependable public charging access in both metros and intercity corridors.",
      "Network expansion should combine demand signals from drivers with site partnerships from landowners and investors.",
      "Infrastructure programs that prioritize reliability and convenience will accelerate adoption and long-term utilization.",
    ],
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = CONTENT[slug];

  if (!post) {
    notFound();
  }

  return (
    <div>
      <PageHero
        eyebrow="Article"
        title={post.title}
        description={`Updated perspective · ${post.read}`}
      />

      <PageSection tone="muted" className="!pt-10 md:!pt-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/65 hover:text-white transition-colors font-medium"
          >
            <span aria-hidden>←</span> Back to blog
          </Link>

          <SubpageCard hover={false} className="mt-8 p-8 sm:p-10 md:p-12">
            <div>
              {post.body.map((paragraph, i) => (
                <p
                  key={paragraph}
                  className={`text-white/70 leading-[1.75] ${i === 0 ? "text-lg text-white/80" : "mt-6"}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 pt-10 border-t border-white/[0.08]">
              <p className="text-sm text-white/45 mb-4">Next step</p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/host-a-charger"
                  className="px-5 py-2.5 rounded-full bg-ezit-green text-white text-sm font-medium hover:bg-ezit-green-hover transition-colors"
                >
                  List your land
                </Link>
                <Link
                  href="/contact"
                  className="px-5 py-2.5 rounded-full border border-white/20 text-white text-sm font-medium hover:bg-white/5 transition-colors"
                >
                  Talk to EZIT
                </Link>
              </div>
            </div>
          </SubpageCard>
        </div>
      </PageSection>
    </div>
  );
}
