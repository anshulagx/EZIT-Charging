import { ReactNode } from "react";

const tones = {
  base: "bg-[var(--background)] border-t border-white/[0.04]",
  muted: "bg-[#0a0f0d] border-t border-white/[0.06]",
  deep: "bg-[#060908] border-t border-white/[0.05]",
} as const;

export type PageSectionTone = keyof typeof tones;

type SectionHeader = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

type PageSectionProps = {
  tone?: PageSectionTone;
  className?: string;
  innerClassName?: string;
  header?: SectionHeader;
  children: ReactNode;
};

export default function PageSection({
  tone = "muted",
  className = "",
  innerClassName = "",
  header,
  children,
}: PageSectionProps) {
  const alignLeft = header?.align === "left";

  return (
    <section className={`py-16 md:py-20 lg:py-24 ${tones[tone]} ${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${innerClassName}`}>
        {header ? (
          <div
            className={
              alignLeft
                ? "mb-10 md:mb-14 text-left max-w-2xl"
                : "mb-10 md:mb-14 text-center max-w-3xl mx-auto"
            }
          >
            {header.eyebrow ? (
              <p className="text-xs font-semibold tracking-wider text-white/50 uppercase mb-3">{header.eyebrow}</p>
            ) : null}
            <h2 className="text-2xl sm:text-3xl md:text-[2rem] font-bold text-white text-balance">{header.title}</h2>
            {header.description ? (
              <p className="mt-4 text-white/55 text-sm md:text-base leading-relaxed">{header.description}</p>
            ) : null}
          </div>
        ) : null}
        {children}
      </div>
    </section>
  );
}
