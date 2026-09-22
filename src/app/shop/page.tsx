"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import type { ProductCategory } from "@/data/products";

const categories: Array<"All" | ProductCategory> = [
  "All",
  "Bouquets",
  "Plants",
  "Gifts",
];

export default function ShopPage() {
  const [active, setActive] = useState<"All" | ProductCategory>("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchesCat = active === "All" || p.category === active;
    const matchesSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-leaf-50">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-leaf-900 to-leaf-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Our Collection</span>
          <h1 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-4">Shop Fresh Flowers</h1>
          <p className="text-leaf-200 max-w-xl mx-auto text-lg">
            Explore our curated collection of bouquets, plants, and gifts. Same-day delivery available.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                  active === cat
                    ? "bg-leaf-700 text-white shadow-md"
                    : "bg-white text-leaf-700 border border-leaf-200 hover:border-leaf-400"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search flowers, tags..."
            className="sm:ml-auto px-5 py-2.5 rounded-xl border border-leaf-200 text-leaf-900 focus:outline-none focus:ring-2 focus:ring-leaf-400 bg-white text-sm w-full sm:w-72"
          />
        </div>

        {/* Count */}
        <p className="text-sm text-leaf-500 mb-6">
          Showing <strong className="text-leaf-800">{filtered.length}</strong> item{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-leaf-400">
            <p className="text-5xl mb-4">🌸</p>
            <p className="font-serif text-xl text-leaf-700">No products found</p>
            <p className="text-sm mt-2">Try a different category or search term</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
