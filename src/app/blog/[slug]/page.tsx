import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const CONTENT: Record<string, { title: string; description: string; body: string[]; read: string }> = {
  "start-ev-charging-franchise-india": {
    title: "How to start an EV charging station franchise in India",
    description:
      "A step-by-step guide to starting an EV charging franchise in India — cost, licensing, site selection and ROI.",
    read: "7 min read",
    body: [
      "Starting an EV charging station franchise in India is now simpler than ever: charging is a de-licensed activity under the 2024 Ministry of Power guidelines, so you don't need a power licence to operate a station.",
      "A typical DC fast-charging franchise starts from around ₹10–15 lakh including hardware and infrastructure. The biggest driver of returns is location — high-dwell, high-traffic sites like malls, highways and commercial complexes utilise better.",
      "With EZIT, you invest in the charger while we secure the location, install, own and operate everything end-to-end. A well-utilised DC site typically delivers around 45% annual ROI with a 2–3 year payback.",
      "The practical path: speak to an operator, model your returns with an ROI calculator, and confirm the site, tariff and agreement structure before committing.",
    ],
  },
  "earn-renting-land-ev-charging": {
    title: "How much can you earn renting land for EV charging",
    description:
      "What landowners earn renting land for EV charging in India, how revenue share works, and what makes a site valuable.",
    read: "5 min read",
    body: [
      "If you own land, a mall, hotel or petrol pump, you can earn monthly income by hosting an EV charger — often with zero investment and zero operations on your side.",
      "With EZIT's List Your Land model, we bear 100% of the charger and installation cost, include AI 360° security and 24/7 monitoring, and pay you a transparent monthly revenue share, on time.",
      "Earnings depend on footfall, charger type and location. Sites with steady dwell time — shopping malls, highway restaurants, residential societies — see higher utilisation and therefore higher revenue.",
      "The best part: a free, no-obligation site survey tells you what your specific location can earn before you commit to anything.",
    ],
  },
  "ac-vs-dc-charging": {
    title: "AC vs DC charging: which is right for your property",
    description:
      "AC vs DC EV charging compared — power, charge time, cost and the right fit for homes, offices, malls and highways.",
    read: "6 min read",
    body: [
      "AC chargers (7.4–22 kW, Type-2) are destination chargers: they take 2–8 hours for a full charge and suit places where vehicles park for a while — apartments, offices and hotels. They start from around ₹1.5 lakh.",
      "DC fast chargers (30–360 kW, CCS-2) deliver a charge in 5–60 minutes and suit high-throughput sites — highways, malls, fleets and transit nodes. They need higher investment, from around ₹10 lakh, but support far more sessions per day.",
      "The right choice comes down to dwell time, traffic and your available power supply. Long dwell with modest traffic favours AC; quick turnaround with high traffic favours DC.",
      "EZIT sizes the right charger for your site, footfall and electrical capacity — and operates it for you so you don't have to manage the hardware.",
    ],
  },
  "cost-of-ev-charging-station-india": {
    title: "How much does an EV charging station cost in India",
    description:
      "EV charging station cost in India — capex drivers from AC wallboxes to 360 kW DC fast chargers and the economics behind them.",
    read: "7 min read",
    body: [
      "EV charging station cost in India varies widely by charger type, site readiness, civil works, transformer requirements and software stack.",
      "AC wallboxes start from around ₹1.5 lakh and have lower setup costs. DC fast chargers start from around ₹10 lakh and scale up to 360 kW for the busiest sites — but support far higher throughput and revenue.",
      "A practical financial model should include installation, energy costs, operations, uptime guarantees and demand-growth assumptions. With EZIT, operations, maintenance, security and monitoring are bundled in.",
      "Use an ROI calculator to test how investment, utilisation and tariffs affect your payback — typically 2–3 years for a well-located DC site.",
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = CONTENT[slug];
  if (!post) return { title: "Article not found | EZIT" };
  return {
    title: `${post.title} | EZIT`,
    description: post.description,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = CONTENT[slug];

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: { "@type": "Organization", name: "EZIT" },
    publisher: { "@type": "Organization", name: "EZIT" },
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
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
                  href="/invest"
                  className="px-5 py-2.5 rounded-full bg-ezit-green text-white text-sm font-medium hover:bg-ezit-green-hover transition-colors"
                >
                  Own a Franchise
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
