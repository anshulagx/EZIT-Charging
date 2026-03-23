import Link from "next/link";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const posts = [
  {
    slug: "ev-charging-business-india",
    title: "EV charging business in India",
    excerpt: "A practical guide to evaluating locations, demand, and operating models.",
    read: "6 min read",
  },
  {
    slug: "cost-of-ev-charging-station",
    title: "Cost of EV charging station",
    excerpt: "Understand capex drivers, charger configurations, and planning assumptions.",
    read: "7 min read",
  },
  {
    slug: "earn-from-ev-chargers",
    title: "How to earn from EV chargers",
    excerpt: "Revenue pathways for landowners and charging infrastructure partners.",
    read: "5 min read",
  },
  {
    slug: "ev-infrastructure-growth-india",
    title: "EV infrastructure growth in India",
    excerpt: "Why charger expansion is central to India's EV adoption curve.",
    read: "6 min read",
  },
] as const;

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Blog & <span className="text-ezit-green">resources</span>
          </>
        }
        description="Short, practical notes on EV charging economics, deployment, and what strong operations look like in India."
      />

      <PageSection tone="muted">
        <Link href={`/blog/${featured.slug}`} className="group block">
          <SubpageCard className="p-8 sm:p-10 md:p-12 md:grid md:grid-cols-12 md:gap-10 items-center">
            <div className="md:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-wider text-ezit-green">Featured</span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white group-hover:text-ezit-green transition-colors text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 text-white/55 leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
                <span className="text-white/40">{featured.read}</span>
                <span className="inline-flex items-center gap-1 text-ezit-green font-medium">
                  Read article
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5 inline-block">
                    →
                  </span>
                </span>
              </div>
            </div>
            <div className="hidden md:flex md:col-span-5 justify-end">
              <div className="w-full max-w-[220px] aspect-square rounded-2xl bg-gradient-to-br from-ezit-green/20 to-white/[0.04] border border-ezit-green/20 flex items-center justify-center">
                <span className="text-6xl font-bold text-white/[0.08]">EZIT</span>
              </div>
            </div>
          </SubpageCard>
        </Link>

        <h2 className="sr-only">More articles</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {rest.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <SubpageCard className="h-full flex flex-col">
                  <h3 className="text-lg font-semibold text-white group-hover:text-ezit-green transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed flex-1">{post.excerpt}</p>
                  <div className="mt-6 flex items-center justify-between gap-3 text-sm">
                    <span className="text-white/35">{post.read}</span>
                    <span className="text-ezit-green font-medium inline-flex items-center gap-1">
                      Read
                      <span className="transition-transform group-hover:translate-x-0.5 inline-block" aria-hidden>
                        →
                      </span>
                    </span>
                  </div>
                </SubpageCard>
              </Link>
            </article>
          ))}
        </div>
      </PageSection>
    </div>
  );
}
