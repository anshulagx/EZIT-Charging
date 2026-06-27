import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

export type FAQItem = { question: string; answer: string };

type FAQProps = {
  items: FAQItem[];
  tone?: "base" | "muted" | "deep";
  eyebrow?: string;
  title?: string;
  description?: string;
};

export default function FAQ({
  items,
  tone = "base",
  eyebrow = "FAQ",
  title = "Frequently asked questions",
  description,
}: FAQProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <PageSection tone={tone} header={{ eyebrow, title, description }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto space-y-4">
        {items.map((item) => (
          <SubpageCard key={item.question}>
            <details className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <h3 className="text-base font-semibold text-white leading-snug">{item.question}</h3>
                <span className="shrink-0 text-white/40 transition-transform duration-300 group-open:rotate-45" aria-hidden>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm text-white/65 leading-relaxed">{item.answer}</p>
            </details>
          </SubpageCard>
        ))}
      </div>
    </PageSection>
  );
}
