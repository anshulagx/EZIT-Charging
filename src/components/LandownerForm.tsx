"use client";

import { useState, useRef, useEffect } from "react";
import {
  IconBanknotes,
  IconBolt,
  IconBuilding,
  IconCarFront,
  IconCheck,
  IconEnvelope,
  IconLink,
  IconMapPin,
  IconPhone,
  IconSparkles,
  IconUser,
} from "@/components/icons";
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
    <section id="landowner" className="py-16 md:py-24 scroll-mt-20 bg-[var(--background)] border-t border-white/5">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="section-badge bg-white/[0.06] border border-white/15 text-white/60 mb-4">
            <IconMapPin className="w-3.5 h-3.5 text-ezit-green/80 shrink-0" aria-hidden />
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
              <label htmlFor="landowner-name" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconUser className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                Full Name *
              </label>
              <input id="landowner-name" type="text" name="fullName" required placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="landowner-phone" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconPhone className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                Phone Number *
              </label>
              <input id="landowner-phone" type="tel" name="phone" required placeholder="10-digit mobile number" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="landowner-email" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconEnvelope className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                Email *
              </label>
              <input id="landowner-email" type="email" name="email" required placeholder="you@example.com" />
            </div>
            <div>
              <label htmlFor="landowner-city" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconMapPin className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                City *
              </label>
              <input id="landowner-city" type="text" name="city" required placeholder="City" />
            </div>
          </div>

          <div>
            <label htmlFor="landowner-address" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
              <IconBuilding className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
              Property Address *
            </label>
            <input id="landowner-address" type="text" name="propertyAddress" required placeholder="Full site address" />
          </div>

          <div>
            <label htmlFor="landowner-size" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
              <IconMapPin className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
              Approx Land Size *
            </label>
            <input id="landowner-size" type="text" name="landSize" required placeholder="e.g. 500 sq ft, 0.5 acre" />
          </div>

          <div>
            <label htmlFor="landowner-maps" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
              <IconLink className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
              Google Maps Location Link *
            </label>
            <input id="landowner-maps" type="text" name="googleMapsLink" required placeholder="https://maps.google.com/..." />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="landowner-parking" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconCarFront className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                Number of Parking Spaces *
              </label>
              <input id="landowner-parking" type="number" name="parkingSpaces" required placeholder="e.g. 2" min={1} />
            </div>
            <div>
              <label htmlFor="landowner-power" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconBolt className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                Electricity Connection Type *
              </label>
              <select id="landowner-power" name="electricityType" required>
                {POWER_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="landowner-model" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
                <IconBanknotes className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
                Preferred Earning Model *
              </label>
              <select id="landowner-model" name="earningModel" required>
                {EARNING_MODEL_OPTIONS.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="landowner-rent" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
              <IconBanknotes className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
              Expected Monthly Rent (Optional)
            </label>
            <input id="landowner-rent" type="number" name="expectedRent" placeholder="Amount in ₹" min={0} step={1000} />
          </div>

          <div>
            <label htmlFor="landowner-photo" className="flex items-center gap-2 text-sm font-medium text-white/80 mb-1.5">
              <IconSparkles className="w-4 h-4 text-ezit-green/75 shrink-0" aria-hidden />
              Site Photo Google Drive Link (Optional)
            </label>
            <input id="landowner-photo" type="text" name="sitePhotoLink" placeholder="https://drive.google.com/..." />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-ezit-green text-white font-medium hover:bg-ezit-green-hover transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/30"
          >
            {loading ? (
              "Submitting..."
            ) : (
              <>
                <IconCheck className="w-5 h-5 shrink-0" aria-hidden />
                Submit Your Land Details
              </>
            )}
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
