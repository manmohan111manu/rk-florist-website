"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiPlus, FiMinus, FiStar, FiTruck, FiShield, FiRefreshCw } from "react-icons/fi";
import { products } from "@/data/products";
import { useCart } from "@/lib/store";
import { useState } from "react";
import { useToast } from "@/components/Toast";

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) notFound();

  const { addItem, items } = useCart();
  const toast = useToast();
  const [qty, setQty] = useState(1);

  const cartItem = items.find((i) => i.productId === product.id);
  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) addItem(product.id);
    toast.success(`${qty} × ${product.name} added to cart!`);
  }

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Link href="/shop" className="inline-flex items-center gap-2 text-leaf-600 hover:text-brand-600 transition-colors text-sm font-medium mb-8">
          <FiArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="bg-white rounded-3xl shadow-sm border border-leaf-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto min-h-[400px]">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              {product.bestseller && (
                <span className="absolute top-5 left-5 bg-brand-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                  <FiStar className="w-3 h-3" /> Bestseller
                </span>
              )}
            </div>

            {/* Details */}
            <div className="p-8 lg:p-12 flex flex-col">
              <span className="text-[11px] uppercase tracking-widest text-brand-600 font-semibold">{product.category}</span>
              <h1 className="font-serif text-3xl sm:text-4xl text-leaf-900 mt-2 mb-4">{product.name}</h1>

              <div className="flex gap-1 mb-5">
                {[1,2,3,4,5].map((i) => <FiStar key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />)}
                <span className="text-sm text-leaf-500 ml-2">(4.9 · 127 reviews)</span>
              </div>

              <p className="text-leaf-600 leading-relaxed mb-6">{product.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-leaf-50 border border-leaf-200 text-leaf-700 text-xs font-medium">{tag}</span>
                ))}
              </div>

              <div className="text-4xl font-bold text-brand-600 mb-8">₹{product.price.toLocaleString("en-IN")}</div>

              {/* Quantity + Add to Cart */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-leaf-50 rounded-xl border border-leaf-200 p-1">
                  <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-leaf-200 transition-colors">
                    <FiMinus className="w-4 h-4 text-leaf-700" />
                  </button>
                  <span className="w-10 text-center font-semibold text-leaf-900">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="w-9 h-9 rounded-lg flex items-center justify-center hover:bg-leaf-200 transition-colors">
                    <FiPlus className="w-4 h-4 text-leaf-700" />
                  </button>
                </div>
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3 px-6 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <FiPlus className="w-5 h-5" />
                  Add to Cart{cartItem ? ` (${cartItem.quantity} in cart)` : ""}
                </button>
              </div>

              {/* Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-leaf-100">
                {[
                  { icon: FiTruck, label: "Same-day Delivery" },
                  { icon: FiShield, label: "Freshness Guarantee" },
                  { icon: FiRefreshCw, label: "Easy Returns" },
                ].map((b) => (
                  <div key={b.label} className="flex flex-col items-center gap-2 text-center">
                    <div className="w-10 h-10 rounded-xl bg-leaf-50 flex items-center justify-center">
                      <b.icon className="w-5 h-5 text-leaf-600" />
                    </div>
                    <span className="text-xs text-leaf-600 font-medium">{b.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="font-serif text-2xl text-leaf-900 mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => {
                const { addItem: addRelated } = { addItem };
                return (
                  <div key={p.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-leaf-100 flex flex-col">
                    <Link href={`/shop/${p.id}`} className="relative block aspect-[4/3] overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                    </Link>
                    <div className="p-5">
                      <h3 className="font-serif text-lg text-leaf-900">{p.name}</h3>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-xl font-bold text-brand-600">₹{p.price.toLocaleString("en-IN")}</span>
                        <Link href={`/shop/${p.id}`} className="text-sm font-semibold text-leaf-600 hover:text-brand-600 transition-colors">View →</Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
