"use client";

import Link from "next/link";
import { FiArrowRight, FiCalendar } from "react-icons/fi";
import type { EventPackage } from "@/data/events";

export default function EventCard({ event }: { event: EventPackage }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-leaf-100 flex flex-col">
      <Link href={`/events/${event.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-3 left-3 bg-white/95 text-leaf-900 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <FiCalendar className="w-3.5 h-3.5" /> {event.duration}
        </span>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-wider text-brand-600 font-semibold">{event.category}</span>
          {event.popular && <span className="text-[11px] bg-brand-50 text-brand-700 px-3 py-1 rounded-full font-semibold">Popular</span>}
        </div>
        <h3 className="font-serif text-xl text-leaf-900 mt-2 group-hover:text-brand-600 transition-colors">{event.name}</h3>
        <p className="text-sm text-leaf-600 mt-2 flex-1">{event.description}</p>
        <div className="mt-4 pt-4 border-t border-leaf-100 flex items-center justify-between">
          <span className="text-lg font-bold text-brand-600">{event.price}</span>
          <Link href={`/events/${event.id}`} className="text-sm font-semibold text-leaf-700 flex items-center gap-1 group/link hover:text-brand-600 transition-colors">
            View Details <FiArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
