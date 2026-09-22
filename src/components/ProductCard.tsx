"use client";

import Link from "next/link";
import { FiPlus, FiStar } from "react-icons/fi";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/store";

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-leaf-100 flex flex-col">
      <Link href={`/shop/${product.id}`} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.bestseller && (
          <span className="absolute top-3 left-3 bg-brand-600 text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
            <FiStar className="w-3 h-3" /> Bestseller
          </span>
        )}
        <span className="absolute bottom-3 right-3 bg-white/95 backdrop-blur px-3 py-1 rounded-full text-sm font-semibold text-leaf-800 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          View Details
        </span>
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[11px] uppercase tracking-wider text-leaf-600 font-semibold">{product.category}</span>
        <h3 className="font-serif text-lg text-leaf-900 mt-1 group-hover:text-brand-600 transition-colors">{product.name}</h3>
        <p className="text-sm text-leaf-600 mt-2 flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-bold text-brand-600">₹{product.price.toLocaleString("en-IN")}</span>
          <button
            onClick={() => addItem(product.id)}
            className="w-10 h-10 rounded-full bg-leaf-600 text-white flex items-center justify-center hover:bg-brand-600 transition-colors duration-300 hover:scale-105"
            aria-label={`Add ${product.name} to cart`}
          >
            <FiPlus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}