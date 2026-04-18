"use client";

import { FormEvent, useState } from "react";
import PageHero from "@/components/subpage/PageHero";
import PageSection from "@/components/subpage/PageSection";
import { SubpageCard } from "@/components/subpage/SubpageCard";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
      setSuccess("Thanks for reaching out. Our team will contact you soon.");
      e.currentTarget.reset();
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
        title={
          <>
            Contact EZIT
          </>
        }
        description="Hosting, investing, partnerships, or press: we route your message to the right team quickly."
      />

      <PageSection tone="muted">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="form-card h-full">
              <h2 className="text-lg font-semibold text-white mb-1">Send a message</h2>
              <p className="text-sm text-white/50 mb-6">We typically respond within one business day.</p>
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
                  <textarea id="contact-message" name="message" required rows={4} placeholder="How can we help?" />
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
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Phone</span>
                  <a href="tel:+917076989898" className="text-white/85 hover:text-white transition-colors">
                    +91 70 76 98 98 98
                  </a>
                </li>
                <li>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Email</span>
                  <a href="mailto:contact@ezit.co.in" className="text-white/85 hover:text-white transition-colors break-all">
                    contact@ezit.co.in
                  </a>
                </li>
                <li>
                  <span className="block text-white/40 text-xs uppercase tracking-wider mb-0.5">Office</span>
                  <span className="text-white/85">New Delhi, India</span>
                </li>
              </ul>
            </SubpageCard>

            <div className="rounded-2xl overflow-hidden border border-white/[0.1] bg-black/20 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.6)]">
              <div className="px-4 py-2.5 border-b border-white/[0.06] flex items-center justify-between">
                <span className="text-xs font-medium text-white/45 uppercase tracking-wider">Map</span>
                <span className="text-xs text-white/35">New Delhi</span>
              </div>
              <iframe
                title="EZIT office location"
                src="https://maps.google.com/maps?q=New%20Delhi%20India&t=&z=10&ie=UTF8&iwloc=&output=embed"
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
