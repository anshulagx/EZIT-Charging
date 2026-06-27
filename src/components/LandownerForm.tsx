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
import { CONTACT } from "@/lib/content";

const WHATSAPP_HREF = CONTACT.whatsappHref;

const POWER_OPTIONS = [
  { value: "", label: "Select power availability" },
  { value: "3-phase", label: "3-phase" },
  { value: "Single-phase", label: "Single-phase" },
  { value: "Not sure", label: "Not sure" },
];

const EARNING_MODEL_OPTIONS = [
  { value: "", label: "Select an option" },
  { value: "List my land (EZIT installs & operates)", label: "I want to list my land (EZIT installs & operates)" },
  { value: "Also want to invest and own a franchise", label: "I also want to invest and own a franchise" },
  { value: "Not sure — recommend the best fit", label: "Not sure — recommend the best fit" },
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
            List your land for EV charging — EZIT installs and operates the charger
            at our cost, you earn every month. Our team will evaluate your site and
            get in touch within 48 hours.
          </p>
          <a
            href={`${WHATSAPP_HREF}?text=${encodeURIComponent(
              "Hi EZIT, I'd like to list my land for EV charging. Here is my location and photos:",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#25D366] text-black font-medium text-sm hover:bg-[#1ebe57] transition-colors"
          >
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.488-.917zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            Send location &amp; photos on WhatsApp
          </a>
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
                What are you looking for? *
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
