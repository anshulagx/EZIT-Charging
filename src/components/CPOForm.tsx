"use client";

import { useState, useRef } from "react";
import SuccessModal from "./SuccessModal";

export default function CPOForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("referral_code") as string;
    if (honeypot) return;

    setLoading(true);
    try {
      const res = await fetch("/api/submit-cpo", {
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
    <section id="cpo" className="py-16 md:py-24 scroll-mt-20 bg-[#0d0d0d] border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-badge bg-purple-500/10 border border-purple-500/20 text-purple-400 mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            Charge Point Operators
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            For CPOs
          </h2>
          <p className="text-white/50 mt-2 text-sm sm:text-base">
            Charge Point Operators: express your interest to partner with EZIT
            and expand your network.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="form-card space-y-5"
        >
          <input
            type="text"
            name="referral_code"
            tabIndex={-1}
            autoComplete="off"
            className="absolute opacity-0 pointer-events-none h-0 w-0"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cpo-company">Company Name *</label>
              <input id="cpo-company" type="text" name="companyName" required placeholder="Your company name" />
            </div>
            <div>
              <label htmlFor="cpo-contact">Contact Person *</label>
              <input id="cpo-contact" type="text" name="contactPerson" required placeholder="Full name of contact" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="cpo-phone">Phone Number *</label>
              <input id="cpo-phone" type="tel" name="phone" required placeholder="10-digit mobile number" />
            </div>
            <div>
              <label htmlFor="cpo-cities">Cities of Interest *</label>
              <input id="cpo-cities" type="text" name="citiesOfInterest" required placeholder="e.g. Mumbai, Pune, Hyderabad" />
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-ezit-green text-white font-medium hover:bg-ezit-green-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-ezit-green/20"
          >
            {loading ? "Submitting..." : "Submit CPO Interest"}
          </button>
        </form>
      </div>

      <SuccessModal
        isOpen={success}
        onClose={() => setSuccess(false)}
        message="Thank you. Our team will reach out to discuss CPO partnership opportunities."
      />
    </section>
  );
}
