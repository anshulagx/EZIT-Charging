import Link from "next/link";
import { notFound } from "next/navigation";

const CONTENT: Record<string, { title: string; body: string[] }> = {
  "ev-charging-business-india": {
    title: "EV charging business in India",
    body: [
      "India’s charging opportunity is driven by rapid EV adoption and infrastructure gaps across highways and urban clusters.",
      "Successful projects start with location fundamentals: traffic mix, dwell time, electrical readiness, and visibility.",
      "Operators that combine reliable uptime, easy payments, and clear pricing create stronger utilization and repeat demand.",
    ],
  },
  "cost-of-ev-charging-station": {
    title: "Cost of EV charging station",
    body: [
      "Charging station economics vary by charger type, site readiness, civil works, transformer requirements, and software stack.",
      "AC setups typically have lower initial capex, while DC fast charging needs higher upfront investment but supports higher throughput.",
      "A practical financial model should include installation, energy costs, operations, service uptime, and demand growth assumptions.",
    ],
  },
  "earn-from-ev-chargers": {
    title: "How to earn from EV chargers",
    body: [
      "Landowners can monetize parking space through fixed rent, revenue share, or hybrid structures based on station performance.",
      "Partner outcomes improve with high-visibility locations, stable electricity, and a strong operations partner.",
      "As EV penetration grows, early hosts can gain recurring income and stronger commercial footfall advantages.",
    ],
  },
  "ev-infrastructure-growth-india": {
    title: "EV infrastructure growth in India",
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
    <div className="pt-24">
      <article className="py-16 md:py-20 bg-[#0a0a0a] min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="text-sm text-ezit-green">Back to blog</Link>
          <h1 className="mt-4 text-3xl md:text-4xl font-bold text-white">{post.title}</h1>
          <div className="mt-8 space-y-5 text-white/70 leading-relaxed">
            {post.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
