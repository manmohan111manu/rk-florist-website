import { eventPackages } from "@/data/events";
import EventCard from "@/components/EventCard";
import Calendar from "@/components/Calendar";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const categories = ["All", "Wedding", "Birthday", "Anniversary"] as const;

export default function EventsPage() {
  const weddings = eventPackages.filter((e) => e.category === "Wedding");
  const birthdays = eventPackages.filter((e) => e.category === "Birthday");
  const anniversaries = eventPackages.filter((e) => e.category === "Anniversary");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-leaf-900 to-leaf-800 py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1600&q=80')" }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Event Planning</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mt-3 mb-6">
            Celebrate Every<br />
            <span className="text-brand-300 italic">Special Moment</span>
          </h1>
          <p className="text-leaf-200 text-lg max-w-2xl mx-auto mb-10">
            From intimate gatherings to grand celebrations, our expert floral designers create breathtaking experiences tailored to your vision.
          </p>
          <Link
            href="/events/quote"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-2xl hover:bg-brand-500 transition-all duration-300 hover:scale-105"
          >
            Get a Free Quote <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Weddings */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Weddings</span>
              <h2 className="font-serif text-3xl text-leaf-900 mt-1">Wedding Packages</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {weddings.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </section>

        {/* Birthdays */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Birthdays</span>
              <h2 className="font-serif text-3xl text-leaf-900 mt-1">Birthday Packages</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {birthdays.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </section>

        {/* Anniversaries */}
        <section className="mb-16">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Anniversaries</span>
              <h2 className="font-serif text-3xl text-leaf-900 mt-1">Anniversary Packages</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {anniversaries.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </section>

        {/* Availability Calendar */}
        <section className="bg-leaf-50 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Availability</span>
              <h2 className="font-serif text-3xl text-leaf-900 mt-2 mb-4">Check Our Calendar</h2>
              <p className="text-leaf-600 leading-relaxed mb-6">
                Book your date early to secure your preferred slot. Red dates are already booked — green dates are available for your celebration.
              </p>
              <Link
                href="/events/quote"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors"
              >
                Book a Date <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <Calendar />
          </div>
        </section>
      </div>
    </div>
  );
}
