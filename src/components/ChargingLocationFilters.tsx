"use client";

import { useState } from "react";

const FILTERS = ["AC", "DC", "Fast charging"] as const;

export default function ChargingLocationFilters() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="form-card">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-end">
        <div className="lg:col-span-7">
          <label htmlFor="charging-city-search">Search by city</label>
          <input id="charging-city-search" type="text" name="city" placeholder="e.g. New Delhi, Gurugram, Jaipur" />
        </div>
        <div className="lg:col-span-5">
          <span className="block text-sm font-medium text-white/80 mb-1.5">Quick filters</span>
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
                      ? "bg-ezit-green/15 border-ezit-green/40 text-ezit-green"
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
