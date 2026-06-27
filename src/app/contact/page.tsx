"use client";

import { FormEvent, useState } from "react";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";
import { CONTACT } from "@/lib/content";

const INTENTS = [
  {
    id: "land",
    label: "I want to list my land",
    message:
      "Hi EZIT, I want to list my land for an EV charging station. Here are my details (location, approx parking, photos):",
  },
  {
    id: "franchise",
    label: "I want to own a franchise",
    message:
      "Hi EZIT, I'm interested in owning an EV charging franchise. Please share details on investment, ROI and next steps.",
  },
] as const;

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSuccess("");
    setError("");
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/submit-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData)),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed");
      setSuccess("Thanks for reaching out. Our team will contact you within 48 hours.");
      e.currentTarget.reset();
      setMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <PageHero
        eyebrow="Get in touch"
        title={<>Contact EZIT</>}
        description="Listing your land, owning a franchise, or finding charging — we route your message to the right team quickly."
      >
        <a
          href={CONTACT.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-black font-medium text-sm hover:bg-[#1ebe57] transition-all duration-300"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.945C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.488-.917zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          Chat on WhatsApp
        </a>
      </PageHero>

      <PageSection tone="muted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="form-card h-full">
              <h2 className="text-lg font-semibold text-white mb-1">Send a message</h2>
              <p className="text-sm text-white/50 mb-5">We typically respond within 48 hours.</p>

              <div className="mb-6">
                <span className="block text-sm font-medium text-white/80 mb-2">What can we help with?</span>
                <div className="flex flex-wrap gap-2">
                  {INTENTS.map((intent) => (
                    <button
                      key={intent.id}
                      type="button"
                      onClick={() => setMessage(intent.message)}
                      className="px-4 py-2.5 rounded-full text-sm font-medium border border-white/15 text-white/70 hover:bg-white/[0.06] hover:border-ezit-green/35 hover:text-white transition-all duration-200"
                    >
                      {intent.label}
                    </button>
                  ))}
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name">Name *</label>
                  <input id="contact-name" type="text" name="name" required placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="contact-phone">Phone *</label>
                  <input id="contact-phone" type="tel" name="phone" required placeholder="10-digit mobile number" />
                </div>
                <div>
                  <label htmlFor="contact-email">Email *</label>
                  <input id="contact-email" type="email" name="email" required placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="How can we help?"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                {error ? <p className="text-red-400 text-sm">{error}</p> : null}
                {success ? <p className="text-ezit-green text-sm">{success}</p> : null}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl bg-ezit-green text-white font-medium hover:bg-ezit-green-hover transition-all duration-300 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-5">
            <SubpageCard>
              <h2 className="text-lg font-semibold text-white">Direct lines</h2>
              <ul className="mt-5 space-y-4 text-sm">
                <li>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone / WhatsApp</span>
                  <a href={`tel:${CONTACT.phoneHref}`} className="text-white/85 hover:text-white transition-colors">
                    {CONTACT.phoneDisplay}
                  </a>
                </li>
                <li>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Partnerships & sales</span>
                  <a href={`mailto:${CONTACT.emailSales}`} className="text-white/85 hover:text-white transition-colors break-all">
                    {CONTACT.emailSales}
                  </a>
                </li>
                <li>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">General enquiries</span>
                  <a href={`mailto:${CONTACT.emailGeneral}`} className="text-white/85 hover:text-white transition-colors break-all">
                    {CONTACT.emailGeneral}
                  </a>
                </li>
                <li>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Office</span>
                  <span className="text-white/85">{CONTACT.officeArea}</span>
                  <span className="block text-white/55 text-xs mt-1">Serving {CONTACT.serviceAreas}</span>
                </li>
              </ul>
            </SubpageCard>

            <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-black/20 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
              <div className="px-4 py-2.5 border-b border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-medium text-white/45 uppercase tracking-wider">Map</span>
                <span className="text-xs text-white/35">Kalkaji, South Delhi</span>
              </div>
              <iframe
                title="EZIT office location — Kalkaji, South Delhi"
                src="https://maps.google.com/maps?q=Kalkaji%20South%20Delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[280px] sm:h-[320px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </PageSection>
    </div>
  );
}
