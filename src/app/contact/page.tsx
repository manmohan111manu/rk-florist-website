"use client";

import { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from "react-icons/fi";
import { useToast } from "@/components/Toast";

export default function ContactPage() {
  const toast = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = "Invalid email";
    if (!form.message.trim()) newErrors.message = "Message is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all required fields");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || "Could not send your message. Please try again.");
        return;
      }
      setSubmitted(true);
      toast.success("Message sent! We'll reply within 24 hours.");
    } catch {
      toast.error("Could not send your message. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-leaf-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-leaf-900 to-leaf-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-4">Contact Us</h1>
          <p className="text-leaf-200 max-w-xl mx-auto text-lg">
            Have questions about our flowers or events? We&apos;d love to hear from you. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-leaf-100">
              <h3 className="font-serif text-xl text-leaf-900 mb-5">Visit Our Store</h3>
              <div className="space-y-4">
                {[
                  { icon: FiMapPin, label: "Address", value: "Jhouta Niwas,\nJiwanu Colony, Panthagati,\nShimla-171009, Himachal Pradesh" },
                  { icon: FiPhone, label: "Phone", value: "+91 93174 28466" },
                  { icon: FiMail, label: "Instagram", value: "@rkflorist77" },
                  { icon: FiClock, label: "Service", value: "Flower delivery and gift arrangements\nfor Shimla and nearby areas" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-leaf-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-leaf-700" />
                    </div>
                    <div>
                      <div className="text-xs text-leaf-500 font-medium uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-sm text-leaf-800 whitespace-pre-line">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map embed placeholder */}
            <div className="bg-leaf-100 rounded-2xl overflow-hidden aspect-video flex items-center justify-center border border-leaf-200">
              <div className="text-center text-leaf-500">
                <FiMapPin className="w-8 h-8 mx-auto mb-2" />
                <p className="text-sm font-medium">Panthagati, Shimla</p>
                <a
                  href="https://www.google.com/maps/search/Jhouta+Niwas,+Jiwanu+Colony,+Panthagati,+Shimla-171009,+Himachal+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-600 hover:text-brand-700 mt-1 inline-block"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl border border-leaf-100 p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-5">
                  <FiCheck className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="font-serif text-2xl text-leaf-900 mb-3">Message Sent!</h2>
                <p className="text-leaf-600">
                  Thank you, <strong>{form.name}</strong>! We&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-leaf-100 p-8 space-y-5">
                <h2 className="font-serif text-2xl text-leaf-900 mb-2">Send Us a Message</h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-leaf-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-400 ${errors.name ? "border-red-400" : "border-leaf-200"}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-leaf-700 mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-400 ${errors.email ? "border-red-400" : "border-leaf-200"}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-leaf-700 mb-1.5">Phone</label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-leaf-200 text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-400"
                      placeholder="+91 9xxxxx xxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-leaf-700 mb-1.5">Subject</label>
                    <select
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-leaf-200 text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-400"
                    >
                      <option value="">Select a subject</option>
                      <option>Order Enquiry</option>
                      <option>Event Planning</option>
                      <option>Custom Bouquet</option>
                      <option>Delivery Issue</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-leaf-700 mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-400 resize-none ${errors.message ? "border-red-400" : "border-leaf-200"}`}
                    placeholder="How can we help you?"
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-4 px-6 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all duration-300 hover:scale-[1.01] flex items-center justify-center gap-2 text-lg disabled:opacity-60"
                >
                  <FiSend className="w-5 h-5" /> {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
