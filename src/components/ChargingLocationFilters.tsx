"use client";

import { useState } from "react";
import { IconFunnel, IconMapPin } from "@/components/icons";

const FILTERS = ["AC", "DC", "Fast charging"] as const;

export default function ChargingLocationFilters() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="form-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-end">
        <div className="lg:col-span-7">
          <label htmlFor="charging-city-search" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
            <IconMapPin className="w-4 h-4 text-ezit-green/80 shrink-0" aria-hidden />
            Search by city
          </label>
          <input id="charging-city-search" type="text" name="city" placeholder="e.g. New Delhi, Gurugram, Jaipur" />
        </div>
        <div className="lg:col-span-5">
          <span className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
            <IconFunnel className="w-4 h-4 text-ezit-green/80 shrink-0" aria-hidden />
            Quick filters
          </span>
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((label) => {
              const isOn = active === label;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setActive((prev) => (prev === label ? null : label))}
                  className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 border ${
                    isOn
                      ? "bg-white/[0.1] border-white/35 text-white"
                      : "border-white/15 text-white/65 hover:bg-white/[0.06] hover:border-white/25"
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
