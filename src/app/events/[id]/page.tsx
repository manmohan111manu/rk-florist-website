import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiCheck, FiClock, FiCalendar, FiArrowRight } from "react-icons/fi";
import { eventPackages } from "@/data/events";

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = eventPackages.find((e) => e.id === params.id);
  if (!event) notFound();

  const related = eventPackages.filter((e) => e.category === event.category && e.id !== event.id);

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/events" className="inline-flex items-center gap-2 text-leaf-600 hover:text-brand-600 transition-colors text-sm font-medium mb-8">
          <FiArrowLeft className="w-4 h-4" /> Back to Events
        </Link>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-sm border border-leaf-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative min-h-[400px]">
              <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              {event.popular && (
                <span className="absolute top-5 left-5 bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="absolute bottom-5 left-5 flex gap-3">
                <span className="flex items-center gap-1.5 bg-white/90 backdrop-blur text-leaf-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  <FiClock className="w-3.5 h-3.5" /> {event.duration}
                </span>
                <span className="bg-white/90 backdrop-blur text-leaf-800 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {event.category}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12 flex flex-col">
              <span className="text-[11px] uppercase tracking-widest text-brand-600 font-semibold">{event.category} Package</span>
              <h1 className="font-serif text-3xl sm:text-4xl text-leaf-900 mt-2 mb-4">{event.name}</h1>
              <p className="text-leaf-600 leading-relaxed mb-8">{event.description}</p>

              <div className="bg-leaf-50 rounded-2xl p-6 mb-8">
                <h3 className="font-semibold text-leaf-900 mb-4">What&apos;s Included</h3>
                <ul className="space-y-3">
                  {event.inclusions.map((inc) => (
                    <li key={inc} className="flex items-start gap-3 text-sm text-leaf-700">
                      <FiCheck className="w-4 h-4 text-leaf-600 flex-shrink-0 mt-0.5" />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-3xl font-bold text-brand-600 mb-8">{event.price}</div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href={`/events/quote?package=${event.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all duration-300 hover:scale-[1.02]"
                >
                  <FiCalendar className="w-5 h-5" /> Book This Package
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-leaf-50 border border-leaf-200 text-leaf-800 font-semibold rounded-xl hover:bg-leaf-100 transition-colors"
                >
                  Ask a Question
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-leaf-900 mb-8">Other {event.category} Packages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {related.map((e) => (
                <div key={e.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-leaf-100 flex flex-col">
                  <Link href={`/events/${e.id}`} className="relative block aspect-video overflow-hidden">
                    <img src={e.image} alt={e.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  </Link>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-serif text-xl text-leaf-900">{e.name}</h3>
                    <p className="text-sm text-leaf-600 mt-2 flex-1">{e.description}</p>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-leaf-100">
                      <span className="text-lg font-bold text-brand-600">{e.price}</span>
                      <Link href={`/events/${e.id}`} className="text-sm font-semibold text-leaf-700 flex items-center gap-1 hover:text-brand-600 transition-colors">
                        View Details <FiArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
