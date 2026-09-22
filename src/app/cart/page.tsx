"use client";

import Link from "next/link";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag, FiArrowLeft, FiCreditCard, FiTruck } from "react-icons/fi";
import { useCart } from "@/lib/store";
import { useState } from "react";
import { useToast } from "@/components/Toast";

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, products } = useCart();
  const toast = useToast();
  const [ordered, setOrdered] = useState(false);

  const cartItems = items.map((item) => ({
    ...item,
    product: products.find((p) => p.id === item.productId)!,
  }));

  async function handleCheckout() {
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            productId: item.productId,
            name: item.product?.name,
            quantity: item.quantity,
            price: item.product?.price,
          })),
          total: totalPrice,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        toast.error(data.error || "Could not place your order. Please try again.");
        return;
      }
      clearCart();
      setOrdered(true);
      toast.success("Order placed! Thank you for shopping with R K Florist 🌸");
    } catch {
      toast.error("Could not place your order. Please try again.");
    }
  }

  if (ordered) {
    return (
      <div className="min-h-screen bg-leaf-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-3xl border border-leaf-100 p-12 text-center max-w-md w-full shadow-sm">
          <div className="text-6xl mb-6">🌸</div>
          <h1 className="font-serif text-3xl text-leaf-900 mb-3">Order Confirmed!</h1>
          <p className="text-leaf-600 mb-8">
            Your flowers are being prepared for same-day delivery. You&apos;ll receive a confirmation on your phone shortly.
          </p>
          <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-2xl hover:bg-brand-700 transition-colors">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-leaf-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-4 mb-10">
          <Link href="/shop" className="inline-flex items-center gap-2 text-leaf-600 hover:text-brand-600 transition-colors text-sm font-medium">
            <FiArrowLeft className="w-4 h-4" /> Continue Shopping
          </Link>
          <h1 className="font-serif text-3xl text-leaf-900 ml-auto">
            Your Cart
            {items.length > 0 && (
              <span className="ml-3 text-lg font-normal text-leaf-500">({items.length} item{items.length !== 1 ? "s" : ""})</span>
            )}
          </h1>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-28">
            <FiShoppingBag className="w-16 h-16 text-leaf-200 mx-auto mb-5" />
            <h2 className="font-serif text-2xl text-leaf-700 mb-3">Your cart is empty</h2>
            <p className="text-leaf-500 mb-8">Looks like you haven&apos;t added any flowers yet.</p>
            <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-2xl hover:bg-brand-700 transition-colors">
              <FiShoppingBag className="w-5 h-5" /> Browse Flowers
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map(({ productId, quantity, product }) => (
                <div key={productId} className="bg-white rounded-2xl border border-leaf-100 p-5 flex gap-5">
                  <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-leaf-500 font-semibold">{product.category}</span>
                        <h3 className="font-serif text-lg text-leaf-900">{product.name}</h3>
                      </div>
                      <button onClick={() => removeItem(productId)} className="text-leaf-300 hover:text-red-500 transition-colors flex-shrink-0 p-1" aria-label="Remove">
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2 bg-leaf-50 rounded-xl border border-leaf-200 p-1">
                        <button onClick={() => updateQuantity(productId, quantity - 1)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-leaf-200 transition-colors">
                          <FiMinus className="w-3.5 h-3.5 text-leaf-700" />
                        </button>
                        <span className="w-8 text-center font-semibold text-leaf-900 text-sm">{quantity}</span>
                        <button onClick={() => updateQuantity(productId, quantity + 1)} className="w-8 h-8 rounded-lg flex items-center justify-center hover:bg-leaf-200 transition-colors">
                          <FiPlus className="w-3.5 h-3.5 text-leaf-700" />
                        </button>
                      </div>
                      <span className="font-bold text-brand-600 text-lg">₹{(product.price * quantity).toLocaleString("en-IN")}</span>
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={clearCart} className="text-sm text-leaf-500 hover:text-red-500 transition-colors mt-2">
                Clear all items
              </button>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-leaf-100 p-6 sticky top-24">
                <h3 className="font-serif text-xl text-leaf-900 mb-5">Order Summary</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-leaf-600">
                    <span>Subtotal ({items.reduce((a, i) => a + i.quantity, 0)} items)</span>
                    <span className="font-semibold text-leaf-900">₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between text-green-600 font-medium">
                    <span className="flex items-center gap-1.5"><FiTruck className="w-4 h-4" /> Same-day Delivery</span>
                    <span>FREE</span>
                  </div>
                  <div className="border-t border-leaf-100 pt-3 flex justify-between text-leaf-900 text-lg font-bold">
                    <span>Total</span>
                    <span>₹{totalPrice.toLocaleString("en-IN")}</span>
                  </div>
                </div>

                <button
                  onClick={handleCheckout}
                  className="mt-6 w-full py-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 text-lg"
                >
                  <FiCreditCard className="w-5 h-5" /> Pay via UPI
                </button>

                <p className="text-xs text-leaf-400 text-center mt-4">
                  Secure checkout · UPI · Net Banking · Cards
                </p>

                <div className="mt-4 p-3 bg-green-50 rounded-xl border border-green-200 text-xs text-green-700 text-center">
                  🌿 Order before 2 PM for same-day delivery in Hyderabad
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
