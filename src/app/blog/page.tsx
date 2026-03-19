import Link from "next/link";

const posts = [
  { slug: "ev-charging-business-india", title: "EV charging business in India", excerpt: "A practical guide to evaluating locations, demand, and operating models." },
  { slug: "cost-of-ev-charging-station", title: "Cost of EV charging station", excerpt: "Understand capex drivers, charger configurations, and planning assumptions." },
  { slug: "earn-from-ev-chargers", title: "How to earn from EV chargers", excerpt: "Revenue pathways for landowners and charging infrastructure partners." },
  { slug: "ev-infrastructure-growth-india", title: "EV infrastructure growth in India", excerpt: "Why charger expansion is central to India’s EV adoption curve." },
];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Blog & Resources</h1>
          <p className="mt-4 text-white/60">Insights on EV charging growth, economics, and infrastructure opportunities.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {posts.map((post) => (
            <article key={post.slug} className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white">{post.title}</h2>
              <p className="mt-2 text-white/60 text-sm">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} className="inline-block mt-4 text-ezit-green text-sm font-medium">
                Read article
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
