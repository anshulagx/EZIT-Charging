import type { ReactNode } from "react";
import Link from "next/link";
import { IconSparkles } from "@/components/icons";
import PageSection from "./PageSection";

type LinkSpec = { href: string; label: string };

type PageCTAProps = {
  title: ReactNode;
  description?: string;
  primary: LinkSpec;
  secondary?: LinkSpec;
};

export default function PageCTA({ title, description, primary, secondary }: PageCTAProps) {
  return (
    <PageSection tone="base" className="!pt-12 md:!pt-16">
      <div className="max-w-4xl mx-auto">
        <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.1] overflow-hidden text-center">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent)]" />
          <div className="relative">
            <div className="flex justify-center mb-5">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-ezit-green/10 border border-ezit-green/25 text-ezit-green motion-safe:animate-soft-pulse">
                <IconSparkles className="w-6 h-6" aria-hidden />
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white leading-tight text-balance">{title}</h2>
            {description ? <p className="mt-4 text-white/50 text-sm sm:text-base max-w-lg mx-auto">{description}</p> : null}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href={primary.href}
                className="px-7 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-white/90 transition-all duration-300 shadow-lg shadow-black/20"
              >
                {primary.label}
              </Link>
              {secondary ? (
                <Link
                  href={secondary.href}
                  className="px-7 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/5 transition-all duration-300"
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
}
