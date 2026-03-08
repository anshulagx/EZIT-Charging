"use client";

import { useState, useRef, useEffect } from "react";
import SuccessModal from "./SuccessModal";

const BUDGET_OPTIONS = [
  { value: "", label: "Select budget range" },
  { value: "₹10–25L", label: "₹10–25L" },
  { value: "₹25–50L", label: "₹25–50L" },
  { value: "₹50L+", label: "₹50L+" },
];

const TIMELINE_OPTIONS = [
  { value: "", label: "Select timeline" },
  { value: "Immediate", label: "Immediate" },
  { value: "3–6 months", label: "3–6 months" },
  { value: "Exploring", label: "Exploring" },
];

const MODEL_OPTIONS = [
  { value: "", label: "Select preferred model" },
  { value: "Own & Operate", label: "Own & Operate" },
  { value: "Revenue Share", label: "Revenue Share" },
  { value: "Franchise Style", label: "Franchise Style" },
  { value: "Open to Guidance", label: "Open to Guidance" },
];

export default function InvestorForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    hpRef.current?.setAttribute("name", "cw_h_p");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("cw_h_p") as string;
    if (honeypot) return;

    setLoading(true);
    try {
      const res = await fetch("/api/submit-investor", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSuccess(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="investor" className="py-16 md:py-24 scroll-mt-20 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-badge bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            Investors
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Invest in EV Charging
          </h2>
          <p className="text-white/50 mt-2 text-sm sm:text-base">
            Share your investment interest and we&apos;ll connect you with
            high-potential opportunities across India.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form-card space-y-5"
        >
          <input
            ref={hpRef}
            type="text"
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 pointer-events-none h-0 w-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="investor-name">Full Name *</label>
              <input id="investor-name" type="text" name="fullName" required placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="investor-phone">Phone Number *</label>
              <input id="investor-phone" type="tel" name="phone" required placeholder="10-digit mobile number" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="investor-budget">Budget Range *</label>
              <select id="investor-budget" name="budgetRange" required>
                {BUDGET_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="investor-cities">Preferred Cities *</label>
              <input id="investor-cities" type="text" name="preferredCities" required placeholder="e.g. Mumbai, Delhi, Bangalore" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="investor-timeline">Investment Timeline *</label>
              <select id="investor-timeline" name="investmentTimeline" required>
                {TIMELINE_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="investor-model">Preferred Model *</label>
              <select id="investor-model" name="preferredModel" required>
                {MODEL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-ezit-green text-white font-medium hover:bg-ezit-green-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-ezit-green/20"
          >
            {loading ? "Submitting..." : "Submit Investment Interest"}
          </button>
        </form>
      </div>

      <SuccessModal
        isOpen={success}
        onClose={() => setSuccess(false)}
        message="Thank you for your interest. Our team will contact you shortly with investment opportunities."
      />
    </section>
  );
}
