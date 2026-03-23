import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section className="relative pt-28 pb-16 md:pb-20 lg:pb-24 overflow-hidden border-b border-white/[0.06]">
      <div className="pointer-events-none absolute inset-0 bg-[var(--background)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_55%_at_50%_-25%,rgba(34,197,94,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(0,0,0,0.35)_100%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:linear-gradient(rgba(255,255,255,0.028)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.028)_1px,transparent_1px)] [background-size:52px_52px]"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {eyebrow ? (
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ezit-green/10 border border-ezit-green/20 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ezit-green animate-pulse shrink-0" />
            <span className="text-xs font-medium text-ezit-green tracking-wide uppercase">{eyebrow}</span>
          </div>
        ) : null}

        <h1 className="text-4xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight text-balance max-w-4xl mx-auto">
          {title}
        </h1>

        {description ? (
          <p className="mt-6 text-base md:text-lg text-white/55 max-w-2xl mx-auto leading-relaxed text-balance">
            {description}
          </p>
        ) : null}

        {children ? <div className="mt-8 flex flex-wrap justify-center gap-3">{children}</div> : null}
      </div>
    </section>
  );
}
