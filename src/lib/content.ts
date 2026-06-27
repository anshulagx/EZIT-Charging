// Centralised site content so specs, sites, stats, and contact details stay
// consistent across every page (fixes the site-wide contradictions).

export const CONTACT = {
  phoneDisplay: "+91 7076 98 98 98",
  phoneHref: "+917076989898",
  whatsappHref: "https://wa.me/917076989898",
  emailGeneral: "contact@ezit.co.in",
  emailSales: "sales@ezit.co.in",
  officeArea: "Kalkaji, South Delhi",
  serviceAreas: "Delhi NCR, Punjab, Haryana & Bengaluru",
} as const;

// Single source of truth for charger specs (used everywhere).
export const SPECS = {
  ac: {
    power: "7.4–22 kW",
    connector: "Type-2",
    chargeTime: "2–8 hours",
    payment: "UPI, RFID, Web, App",
    safety: "IP55, Surge Protection",
    fromPrice: "From ₹1.5 lakh",
  },
  dc: {
    power: "30–360 kW",
    connector: "CCS-2",
    chargeTime: "5–60 minutes",
    payment: "UPI, RFID, Web, App",
    safety: "IP55, Surge Protection",
    fromPrice: "From ₹10 lakh",
  },
} as const;

// "EZIT by the numbers" trust band.
export const STATS = [
  { value: "33+", label: "Years of group heritage" },
  { value: "95%", label: "Uptime guarantee" },
  { value: "24/7", label: "AI security monitoring" },
  { value: "1:1", label: "Dedicated account manager" },
  { value: "7+", label: "Live & upcoming sites" },
] as const;

export type LiveSite = {
  name: string;
  city: string;
  type: "AC" | "DC";
  capacity: string;
  status: "Live" | "Upcoming";
};

// Real EZIT live & upcoming sites (replaces the invented Delhi/Gurgaon/Jaipur stations).
export const LIVE_SITES: LiveSite[] = [
  { name: "Pooja Wholesale Complex", city: "Ambala", type: "DC", capacity: "DC fast charging", status: "Live" },
  { name: "CP67 Mall", city: "Mohali", type: "DC", capacity: "DC fast charging", status: "Live" },
  { name: "Pooja Plazzio", city: "Zirakpur", type: "DC", capacity: "DC fast charging", status: "Live" },
  { name: "Urban Village Mall", city: "Ambala", type: "DC", capacity: "DC fast charging", status: "Live" },
  { name: "Jaggi City Center", city: "Ambala", type: "DC", capacity: "DC fast charging", status: "Live" },
  { name: "Silicon Courtyard", city: "Dera Bassi", type: "DC", capacity: "DC fast charging", status: "Live" },
  { name: "Bricklane Apartments", city: "Bengaluru", type: "AC", capacity: "AC charging", status: "Live" },
];

// The two simple partnership paths used everywhere, plus the driver path.
export const PATHS = {
  listLand: { href: "/host-a-charger", label: "List Your Land" },
  ownFranchise: { href: "/invest", label: "Own a Franchise" },
  findCharging: { href: "/charging-locations", label: "Find Charging" },
} as const;
