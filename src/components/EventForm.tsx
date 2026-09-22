"use client";

import { useState } from "react";
import Link from "next/link";
import { FiCheck, FiCalendar } from "react-icons/fi";
import { useToast } from "@/components/Toast";

const eventTypes = ["Wedding", "Birthday", "Anniversary"];
const decorationThemes = [
  "Traditional Indian",
  "Modern Minimalist",
  "Rustic Garden",
  "Luxury Gold",
  "Pastel Soft",
  "Tropical Vibes",
  "Seasonal Blooms",
  "Custom Design",
];
const budgetRanges = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "Above ₹1,00,000",
];

export default function EventForm({ preFilledDate }: { preFilledDate?: string }) {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: preFilledDate || "",
    eventType: "",
    guestCount: "",
    budget: "",
    theme: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(field: string, value: string) {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.eventDate) newErrors.eventDate = "Event date is required";
    if (!formData.eventType) newErrors.eventType = "Please select an event type";
    if (!formData.guestCount) newErrors.guestCount = "Guest count is required";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast.error("Please fill all required fields");
      return;
    }

    console.log("Event Inquiry:", formData);
    setSubmitted(true);
    toast.success("Quotation request submitted! Our team will get back to you within 24 hours.");
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-leaf-100 p-10 text-center max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <FiCheck className="w-8 h-8 text-green-600" />
        </div>
        <h2 className="font-serif text-2xl text-leaf-900 mb-2">Quotation Request Sent!</h2>
        <p className="text-leaf-600 mb-6">
          Thank you, {formData.name}. Our event team will review your details and send you a personalized quotation within 24 hours.
        </p>
        <Link
          href="/events"
          className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
        >
          Browse Event Packages <FiCalendar className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-leaf-100 p-8 max-w-xl mx-auto space-y-5">
      <h2 className="font-serif text-2xl text-leaf-900 mb-6">Plan Your Event</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input type="text" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.name ? "border-red-400" : "border-leaf-200"}`} placeholder="Your name" />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Email <span className="text-red-500">*</span></label>
          <input type="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.email ? "border-red-400" : "border-leaf-200"}`} placeholder="your@email.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Phone <span className="text-red-500">*</span></label>
          <input type="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.phone ? "border-red-400" : "border-leaf-200"}`} placeholder="+91 9xxxx xxxxx" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Event Date <span className="text-red-500">*</span></label>
          <input type="date" value={formData.eventDate} onChange={(e) => handleChange("eventDate", e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.eventDate ? "border-red-400" : "border-leaf-200"}`} min={new Date().toISOString().slice(0, 10)} />
          {errors.eventDate && <p className="text-red-500 text-xs mt-1">{errors.eventDate}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Event Type <span className="text-red-500">*</span></label>
          <select value={formData.eventType} onChange={(e) => handleChange("eventType", e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.eventType ? "border-red-400" : "border-leaf-200"}`}>
            <option value="">Select type</option>
            {eventTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.eventType && <p className="text-red-500 text-xs mt-1">{errors.eventType}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Guest Count <span className="text-red-500">*</span></label>
          <input type="number" value={formData.guestCount} onChange={(e) => handleChange("guestCount", e.target.value)} className={`w-full px-4 py-3 rounded-xl border text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 ${errors.guestCount ? "border-red-400" : "border-leaf-200"}`} placeholder="e.g. 50" min="1" />
          {errors.guestCount && <p className="text-red-500 text-xs mt-1">{errors.guestCount}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Budget Range</label>
          <select value={formData.budget} onChange={(e) => handleChange("budget", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-leaf-200 text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option value="">Select budget (optional)</option>
            {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-leaf-700 mb-1">Decoration Theme</label>
          <select value={formData.theme} onChange={(e) => handleChange("theme", e.target.value)} className="w-full px-4 py-3 rounded-xl border border-leaf-200 text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500">
            <option value="">Select theme (optional)</option>
            {decorationThemes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-leaf-700 mb-1">Additional Details</label>
        <textarea value={formData.message} onChange={(e) => handleChange("message", e.target.value)} rows={4} className="w-full px-4 py-3 rounded-xl border border-leaf-200 text-leaf-900 focus:outline-none focus:ring-2 focus:ring-brand-500 resize-none" placeholder="Tell us more about your vision..." />
      </div>

      <button type="submit" className="w-full py-3.5 px-6 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors flex items-center justify-center gap-2 text-lg">
        <FiCheck className="w-5 h-5" /> Request Quotation
      </button>
    </form>
  );
}
