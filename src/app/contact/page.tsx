"use client";

import { FormEvent, useState } from "react";

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
    <div className="pt-24">
      <section className="py-16 md:py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Contact EZIT</h1>
          <p className="mt-4 text-white/60">Talk to our team about hosting, investing, or charging expansion partnerships.</p>
        </div>
      </section>

      <section className="py-16 bg-[#0d0d0d] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="form-card">
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
              {error && <p className="text-red-400 text-sm">{error}</p>}
              {success && <p className="text-emerald-400 text-sm">{success}</p>}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 rounded-xl bg-ezit-green text-white font-medium hover:bg-ezit-green-hover transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          <div className="space-y-5">
            <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <h2 className="text-xl font-semibold text-white">Contact Details</h2>
              <p className="text-white/70 text-sm mt-3">Phone: +91 956 830 2222</p>
              <p className="text-white/70 text-sm">Email: sales@ezit.co.in</p>
              <p className="text-white/70 text-sm">Office: New Delhi, India</p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08]">
              <iframe
                title="EZIT office location"
                src="https://maps.google.com/maps?q=New%20Delhi%20India&t=&z=10&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px]"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
