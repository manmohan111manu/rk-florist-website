"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import EventForm from "@/components/EventForm";

function QuotePageContent() {
  const params = useSearchParams();
  const date = params.get("date") || "";
  return (
    <div className="min-h-screen bg-leaf-50 py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Event Planning</span>
          <h1 className="font-serif text-4xl text-leaf-900 mt-3 mb-4">Request a Free Quote</h1>
          <p className="text-leaf-600 text-lg">
            Tell us about your dream event and our team will send you a personalized quotation within 24 hours.
          </p>
        </div>
        <EventForm preFilledDate={date} />
      </div>
    </div>
  );
}

export default function QuotePage() {
  return (
    <Suspense>
      <QuotePageContent />
    </Suspense>
  );
}
