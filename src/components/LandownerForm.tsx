"use client";

import { useState, useRef, useEffect } from "react";
import SuccessModal from "./SuccessModal";

const POWER_OPTIONS = [
  { value: "", label: "Select power availability" },
  { value: "3-phase", label: "3-phase" },
  { value: "Single-phase", label: "Single-phase" },
  { value: "Not sure", label: "Not sure" },
];

const EARNING_MODEL_OPTIONS = [
  { value: "", label: "Select preferred model" },
  { value: "Fixed Monthly Rent", label: "Fixed Monthly Rent" },
  { value: "Revenue Share", label: "Revenue Share" },
  { value: "Open to Best Option", label: "Open to Best Option" },
];

export default function LandownerForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    hpRef.current?.setAttribute("name", "url_h_p");
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const honeypot = formData.get("url_h_p") as string;
    if (honeypot) return;

    setLoading(true);
    try {
      const res = await fetch("/api/submit-landowner", {
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
    <section id="landowner" className="py-16 md:py-24 scroll-mt-20 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-badge bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 mb-4">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Landowners
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Earn From Your Land
          </h2>
          <p className="text-white/50 mt-2 text-sm sm:text-base">
            List your land for EV charging infrastructure. Our team will evaluate
            your site and get in touch within 48 hours.
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
              <label htmlFor="landowner-name">Full Name *</label>
              <input id="landowner-name" type="text" name="fullName" required placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="landowner-phone">Phone Number *</label>
              <input id="landowner-phone" type="tel" name="phone" required placeholder="10-digit mobile number" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="landowner-email">Email *</label>
              <input id="landowner-email" type="email" name="email" required placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="landowner-city">City *</label>
              <input id="landowner-city" type="text" name="city" required placeholder="City" />
            </div>
          </div>

          <div>
            <label htmlFor="landowner-address">Property Address *</label>
            <input id="landowner-address" type="text" name="propertyAddress" required placeholder="Full site address" />
          </div>

          <div>
            <label htmlFor="landowner-size">Approx Land Size *</label>
            <input id="landowner-size" type="text" name="landSize" required placeholder="e.g. 500 sq ft, 0.5 acre" />
          </div>

          <div>
            <label htmlFor="landowner-maps">Google Maps Location Link *</label>
            <input id="landowner-maps" type="text" name="googleMapsLink" required placeholder="https://maps.google.com/..." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="landowner-parking">Number of Parking Spaces *</label>
              <input id="landowner-parking" type="number" name="parkingSpaces" required placeholder="e.g. 2" min={1} />
            </div>
            <div>
              <label htmlFor="landowner-power">Electricity Connection Type *</label>
              <select id="landowner-power" name="electricityType" required>
                {POWER_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="landowner-model">Preferred Earning Model *</label>
              <select id="landowner-model" name="earningModel" required>
                {EARNING_MODEL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="landowner-rent">Expected Monthly Rent (Optional)</label>
            <input id="landowner-rent" type="number" name="expectedRent" placeholder="Amount in ₹" min={0} step={1000} />
          </div>

          <div>
            <label htmlFor="landowner-photo">Site Photo Google Drive Link (Optional)</label>
            <input id="landowner-photo" type="text" name="sitePhotoLink" placeholder="https://drive.google.com/..." />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-ezit-green text-white font-medium hover:bg-ezit-green-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-ezit-green/20"
          >
            {loading ? "Submitting..." : "Submit Your Land Details"}
          </button>
        </form>
      </div>

      <SuccessModal
        isOpen={success}
        onClose={() => setSuccess(false)}
        message="Thank you. Our team will evaluate your site and contact you within 48 hours."
      />
    </section>
  );
}
