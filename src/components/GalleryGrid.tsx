"use client";

import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5">
      {items.map((item) => (
        <div key={item.id} className="break-inside-avoid group relative rounded-2xl overflow-hidden aspect-[3/4]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
            <div>
              <span className="text-[11px] uppercase tracking-wider text-brand-300 font-semibold">{item.category}</span>
              <h3 className="font-serif text-lg text-white mt-1">{item.title}</h3>
              <p className="text-sm text-white/80 mt-1">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
