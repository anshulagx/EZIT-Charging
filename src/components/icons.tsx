import type { SVGProps } from "react";

const stroke = 1.5;

export function IconBolt({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

export function IconClock({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}

export function IconMobileApps({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
      />
    </svg>
  );
}

export function IconExclamationTriangle({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
      />
    </svg>
  );
}

export function IconRoute({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M9 6.75H15M9 6.75V15a2.25 2.25 0 002.25 2.25H15M9 6.75V9a2.25 2.25 0 012.25-2.25M15 6.75V9a2.25 2.25 0 002.25 2.25M15 6.75H18a2.25 2.25 0 012.25 2.25V15a2.25 2.25 0 01-2.25 2.25H15M15 15v3.75a2.25 2.25 0 01-2.25 2.25H9M15 15H9m0 0H6.75A2.25 2.25 0 014.5 12.75V9a2.25 2.25 0 012.25-2.25H9m0 0V6.75"
      />
    </svg>
  );
}

export function IconMapPin({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

export function IconTrendingUp({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.147-2.147a12 12 0 01-3.75 9.75L9 11.25l-6.75 6.75M2.25 18v-5.25M2.25 18h5.25"
      />
    </svg>
  );
}

export function IconCarFront({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0h.008v.008H5.25V18.75zm9 0h.008v.008H18.75V18.75zm-9-6.75h12a1.5 1.5 0 001.5-1.5v-3.75a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v3.75a1.5 1.5 0 001.5 1.5z"
      />
    </svg>
  );
}

export function IconCheck({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function IconShieldCheck({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

export function IconClipboard({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
      />
    </svg>
  );
}

export function IconClipboardCheck({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M11.35 16.435a.75.75 0 001.07-.03l3.75-4.5a.75.75 0 00-1.15-.96l-3.208 3.85-1.55-1.55a.75.75 0 10-1.06 1.06l2.25 2.25z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
      />
    </svg>
  );
}

export function IconWrench({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-2.692c.312-.332.679-.607 1.082-.816M11.42 15.17l-4.655-5.653a2.548 2.548 0 010-3.586L11.4 2.757a2.55 2.55 0 013.586 0l5.653 4.654a2.548 2.548 0 010 3.586l-1.757 1.757a2.548 2.548 0 01-3.586 0"
      />
    </svg>
  );
}

export function IconBanknotes({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2.25 18.75a60.07 60.07 0 0015.797 2.207c.805.082 1.632-.125 2.318-.56l1.5-1a2.25 2.25 0 001.79-2.19v-9a2.25 2.25 0 00-1.79-2.19l-1.5-1a2.25 2.25 0 00-2.318-.56A60.07 60.07 0 002.25 5.25"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M18 10.5h.008v.008H18V10.5zm-6 0h.008v.008H12V10.5zm6 3h.008v.008H18V13.5zm-6 0h.008v.008H12V13.5zm6 3h.008v.008H18V16.5zm-6 0h.008v.008H12V16.5z"
      />
    </svg>
  );
}

export function IconSparkles({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  );
}

export function IconTarget({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M12 21a9 9 0 100-18 9 9 0 000 18zm0 0a9 9 0 01-9-9m9 9v3m0-12V3m9 9h-3m-12 0H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

export function IconGlobe({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
      />
    </svg>
  );
}

export function IconBuilding({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008H18V11.25zm-3.75 3.75h.008v.008H14.25V15zm0 3.75h.008v.008H14.25V18.75zm-1.5-12h.008v.008H12.75V6.75zm0 3.75h.008v.008H12.75V11.25zm0 3.75h.008v.008H12.75V15zm0 3.75h.008v.008H12.75V18.75zm3.75-12h.008v.008H16.5V6.75zm0 3.75h.008v.008H16.5V11.25zm0 3.75h.008v.008H16.5V15zm0 3.75h.008v.008H16.5V18.75z"
      />
    </svg>
  );
}

export function IconFunnel({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v5.948a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a.75.75 0 01-.348.645l-.154.074a21.383 21.383 0 01-4.663 1.441c-.907.196-1.812.341-2.714.434a12.022 12.022 0 01-2.286 0c-.902-.093-1.807-.238-2.714-.434a21.391 21.391 0 01-4.662-1.441.75.75 0 01-.348-.645v-2.927a2.25 2.25 0 00-.659-1.591L2.659 12.23a2.25 2.25 0 01-.659-1.591V4.777c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
      />
    </svg>
  );
}

export function IconHome({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
      />
    </svg>
  );
}

export function IconEye({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

export function IconUsers({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    </svg>
  );
}

export function IconArrowDown({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={stroke} d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
    </svg>
  );
}

export function IconUser({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 19.125a8.25 8.25 0 0115 0 .75.75 0 01-.375.684A9.75 9.75 0 0112 21c-1.943 0-3.745-.518-5.305-1.425a.75.75 0 01-.37-.684z"
      />
    </svg>
  );
}

export function IconPhone({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function IconEnvelope({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export function IconLink({ className, ...rest }: SVGProps<SVGSVGElement>) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={stroke}
        d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
      />
    </svg>
  );
}
