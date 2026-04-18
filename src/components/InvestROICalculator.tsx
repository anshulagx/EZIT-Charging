"use client";

import { useMemo, useState } from "react";
import { SubpageCard } from "@/components/subpage/SubpageCard";

const inr = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

type SliderFieldProps = {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  display: string;
  minLabel: string;
  maxLabel: string;
  suffix?: string;
};

function SliderField({ id, label, value, min, max, step, onChange, display, minLabel, maxLabel, suffix }: SliderFieldProps) {
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <label htmlFor={id} className="text-sm font-medium text-white/80 mb-0">
          {label}
        </label>
        <span className="text-sm font-semibold text-white tabular-nums">
          {display}
          {suffix ? <span className="text-white/50 font-normal"> {suffix}</span> : null}
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full appearance-none cursor-pointer bg-white/[0.08] accent-ezit-green
          [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-ezit-green [&::-webkit-slider-thumb]:shadow-[0_0_0_2px_rgba(0,0,0,0.35)]
          [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0
          [&::-moz-range-thumb]:bg-ezit-green"
      />
      <div className="flex justify-between text-xs text-white/40">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

type StatRowProps = { label: string; value: string; emphasize?: boolean };

function StatRow({ label, value, emphasize }: StatRowProps) {
  return (
    <div
      className={`flex items-baseline justify-between gap-4 py-3 border-b border-white/[0.06] last:border-b-0 ${
        emphasize ? "pt-1" : ""
      }`}
    >
      <span className="text-sm text-white/55">{label}</span>
      <span className={`text-sm font-semibold tabular-nums text-right ${emphasize ? "text-ezit-green text-base" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

export default function InvestROICalculator() {
  const [initialInvestment, setInitialInvestment] = useState(15_00_000);
  const [chargingRatePerKwh, setChargingRatePerKwh] = useState(18);
  const [dailyUtilizationKwh, setDailyUtilizationKwh] = useState(200);
  const [electricityCostPerKwh, setElectricityCostPerKwh] = useState(8);
  const [overheadCostPerKwh, setOverheadCostPerKwh] = useState(3);

  const results = useMemo(() => {
    // One calendar year of energy; monthly figures are exactly 1/12 of annual (no 30×12 vs 365 drift).
    const annualKwh = dailyUtilizationKwh * 365;
    const monthlyKwh = annualKwh / 12;
    const marginPerKwh = chargingRatePerKwh - electricityCostPerKwh - overheadCostPerKwh;

    const monthlyRevenue = monthlyKwh * chargingRatePerKwh;
    const monthlyElectricityCost = monthlyKwh * electricityCostPerKwh;
    const monthlyOverheadCost = monthlyKwh * overheadCostPerKwh;
    const monthlyProfit = monthlyKwh * marginPerKwh;
    const annualProfit = annualKwh * marginPerKwh;

    const paybackYears = annualProfit > 0 ? initialInvestment / annualProfit : null;
    const simpleAnnualRoiPct =
      initialInvestment > 0 && annualProfit !== 0 ? (annualProfit / initialInvestment) * 100 : null;

    return {
      monthlyKwh,
      monthlyRevenue,
      monthlyElectricityCost,
      monthlyOverheadCost,
      monthlyProfit,
      annualProfit,
      paybackYears,
      simpleAnnualRoiPct,
    };
  }, [
    initialInvestment,
    chargingRatePerKwh,
    dailyUtilizationKwh,
    electricityCostPerKwh,
    overheadCostPerKwh,
  ]);

  const paybackDisplay =
    results.paybackYears === null
      ? "—"
      : results.paybackYears > 50
        ? "50+ yrs"
        : `${results.paybackYears.toFixed(1)} yrs`;

  const annualRoiDisplay =
    results.simpleAnnualRoiPct === null ? "—" : `${results.simpleAnnualRoiPct.toFixed(1)}%`;

  return (
    <SubpageCard hover={false} className="p-6 sm:p-8 lg:p-10">
      <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-14">
        <div className="flex-1 space-y-8 min-w-0">
          <div>
            <h3 className="text-lg font-semibold text-white">ROI calculator</h3>
            <p className="mt-1 text-sm text-white/55">Adjust the values to see estimated returns (indicative).</p>
          </div>

          <div className="space-y-7">
            <SliderField
              id="inv-roi-capex"
              label="Initial investment"
              value={initialInvestment}
              min={5_00_000}
              max={50_00_000}
              step={50_000}
              onChange={setInitialInvestment}
              display={inr.format(initialInvestment)}
              minLabel="₹5L"
              maxLabel="₹50L"
            />
            <SliderField
              id="inv-roi-rate"
              label="Charging rate per kWh"
              value={chargingRatePerKwh}
              min={10}
              max={30}
              step={1}
              onChange={setChargingRatePerKwh}
              display={inr.format(chargingRatePerKwh)}
              minLabel="₹10"
              maxLabel="₹30"
            />
            <SliderField
              id="inv-roi-daily"
              label="Daily utilization"
              value={dailyUtilizationKwh}
              min={50}
              max={1500}
              step={10}
              onChange={setDailyUtilizationKwh}
              display={`${dailyUtilizationKwh}`}
              suffix="kWh"
              minLabel="50 kWh"
              maxLabel="1500 kWh"
            />
            <SliderField
              id="inv-roi-elec"
              label="Electricity cost per kWh"
              value={electricityCostPerKwh}
              min={1}
              max={15}
              step={1}
              onChange={setElectricityCostPerKwh}
              display={inr.format(electricityCostPerKwh)}
              minLabel="₹1"
              maxLabel="₹15"
            />
            <SliderField
              id="inv-roi-overhead"
              label="Overhead cost per kWh"
              value={overheadCostPerKwh}
              min={1}
              max={15}
              step={1}
              onChange={setOverheadCostPerKwh}
              display={inr.format(overheadCostPerKwh)}
              minLabel="₹1"
              maxLabel="₹15"
            />
          </div>
        </div>

        <div className="lg:w-[min(100%,380px)] shrink-0">
          <div className="rounded-xl border border-white/[0.1] bg-white/[0.04] px-5 py-4 sm:px-6">
            <StatRow label="Monthly revenue" value={inr.format(results.monthlyRevenue)} />
            <StatRow label="Monthly electricity cost" value={inr.format(results.monthlyElectricityCost)} />
            <StatRow label="Monthly overhead cost" value={inr.format(results.monthlyOverheadCost)} />
            <StatRow label="Monthly profit" value={inr.format(results.monthlyProfit)} emphasize />
            <StatRow label="Annual profit" value={inr.format(results.annualProfit)} />
            <StatRow label="Simple annual ROI" value={annualRoiDisplay} />
            <div className="flex items-baseline justify-between gap-4 pt-4 mt-1 border-t border-white/[0.08]">
              <span className="text-sm font-medium text-white/70">Payback period</span>
              <span className="text-lg font-bold text-ezit-green tabular-nums">{paybackDisplay}</span>
            </div>
          </div>
          <p className="mt-4 text-xs text-white/40 leading-relaxed">
            These are estimated values. Actual returns vary by location, utilization, tariffs, and agreement structure.
          </p>
        </div>
      </div>
    </SubpageCard>
  );
}
