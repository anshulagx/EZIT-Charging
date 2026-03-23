import { ReactNode } from "react";

type SubpageCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
};

export function SubpageCard({ children, className = "", hover = true }: SubpageCardProps) {
  return (
    <div
      className={`rounded-2xl p-5 sm:p-6 bg-white/[0.03] border border-white/[0.08] backdrop-blur-sm transition-all duration-300 ${
        hover
          ? "hover:border-ezit-green/25 hover:bg-white/[0.045] hover:shadow-[0_24px_48px_-24px_rgba(0,0,0,0.5)]"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

type StepCardProps = {
  step: number;
  title: string;
  description?: string;
  className?: string;
};

export function StepCard({ step, title, description, className = "" }: StepCardProps) {
  return (
    <SubpageCard className={`relative overflow-hidden ${className}`}>
      <div className="absolute -right-2 -top-2 text-[4.5rem] font-bold leading-none text-white/[0.04] select-none pointer-events-none">
        {step}
      </div>
      <div className="relative">
        <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-ezit-green/15 border border-ezit-green/25 text-ezit-green text-sm font-bold">
          {step}
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
        {description ? <p className="mt-2 text-sm text-white/60 leading-relaxed">{description}</p> : null}
      </div>
    </SubpageCard>
  );
}

type IconRowCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  className?: string;
};

export function IconRowCard({ icon, title, children, className = "" }: IconRowCardProps) {
  return (
    <SubpageCard className={className}>
      <div className="flex gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-ezit-green/12 border border-ezit-green/20 flex items-center justify-center text-ezit-green">
          {icon}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <div className="mt-2 text-sm text-white/60 leading-relaxed">{children}</div>
        </div>
      </div>
    </SubpageCard>
  );
}
