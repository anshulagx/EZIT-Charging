import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact EZIT | Partner, Invest or List Your Land | EV Charging",
  description:
    "Talk to EZIT about listing your land, owning a franchise, or requesting a charger near you. Call +91 7076 98 98 98 or email sales@ezit.co.in.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
