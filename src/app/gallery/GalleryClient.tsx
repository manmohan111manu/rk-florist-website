"use client";

import { useState } from "react";
import GalleryGrid from "@/components/GalleryGrid";
import type { GalleryItem } from "@/data/gallery";

const categories: Array<"All" | GalleryItem["category"]> = [
  "All",
  "Wedding",
  "Birthday",
  "Anniversary",
  "Bouquets",
];

export default function GalleryClient({ galleryItems }: { galleryItems: GalleryItem[] }) {
  const [active, setActive] = useState<"All" | GalleryItem["category"]>("All");

  const filtered =
    active === "All" ? galleryItems : galleryItems.filter((i) => i.category === active);

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="bg-gradient-to-br from-leaf-900 to-leaf-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-4">Our Work Gallery</h1>
          <p className="text-leaf-200 max-w-xl mx-auto text-lg">
            Beautifully captured moments from weddings, birthdays, anniversaries, and more.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                active === cat
                  ? "bg-leaf-700 text-white shadow-md"
                  : "bg-white text-leaf-700 border border-leaf-200 hover:border-leaf-400"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <GalleryGrid items={filtered} />
      </div>
    </div>
  );
}
