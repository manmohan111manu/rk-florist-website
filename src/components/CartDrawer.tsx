"use client";

import Link from "next/link";
import { FiX, FiMinus, FiPlus, FiTrash2, FiCreditCard, FiTruck } from "react-icons/fi";
import { useCart } from "@/lib/store";

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { items, removeItem, updateQuantity, clearCart, totalPrice, products } = useCart();

  if (!isOpen) return null;

  const cartItems = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      <aside className="fixed right-0 top-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        <div className="flex items-center justify-between p-5 border-b border-leaf-100">
          <h2 className="font-serif text-xl text-leaf-900">Your Cart</h2>
          <button onClick={onClose} className="w-10 h-10 rounded-full bg-leaf-50 hover:bg-leaf-100 flex items-center justify-center transition-colors">
            <FiX className="w-5 h-5 text-leaf-600" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center text-leaf-500">
              <FiTruck className="w-12 h-12 mb-3 text-leaf-200" />
              <p className="font-medium text-leaf-700">Your cart is empty</p>
              <p className="text-sm text-leaf-400 mt-1">Add some beautiful flowers to get started</p>
              <Link
                href="/shop"
                onClick={onClose}
                className="mt-4 inline-flex items-center gap-2 text-brand-600 font-semibold hover:text-brand-700"
              >
                Continue Shopping <FiPlus className="w-4 h-4" />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map(({ productId, quantity, product }) => (
                <div key={productId} className="flex gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-leaf-50">
                    <img src={product?.image} alt={product?.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-leaf-900 truncate">{product?.name}</h4>
                    <p className="text-sm text-brand-600 font-semibold">₹{product?.price.toLocaleString("en-IN")}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(productId, quantity - 1)}
                        className="w-8 h-8 rounded-full bg-leaf-100 hover:bg-leaf-200 flex items-center justify-center transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <FiMinus className="w-4 h-4 text-leaf-600" />
                      </button>
                      <span className="w-10 text-center font-semibold text-leaf-800">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(productId, quantity + 1)}
                        className="w-8 h-8 rounded-full bg-leaf-100 hover:bg-leaf-200 flex items-center justify-center transition-colors"
                        aria-label="Increase quantity"
                      >
                        <FiPlus className="w-4 h-4 text-leaf-600" />
                      </button>
                      <button
                        onClick={() => removeItem(productId)}
                        className="ml-auto text-leaf-400 hover:text-red-500 transition-colors"
                        aria-label="Remove item"
                      >
                        <FiTrash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="border-t border-leaf-100 p-5 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-leaf-600">Subtotal</span>
              <span className="font-semibold text-leaf-900">₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between text-sm text-green-600">
              <span>Same-day Delivery</span>
              <span>FREE</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-leaf-900 pt-2 border-t border-leaf-100">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString("en-IN")}</span>
            </div>
            <Link
              href="/cart"
              className="block w-full text-center py-3 px-4 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 transition-colors flex items-center justify-center gap-2"
            >
              <FiCreditCard className="w-5 h-5" />
              Checkout & Pay via UPI
            </Link>
            <button
              onClick={clearCart}
              className="w-full text-center text-sm text-leaf-500 hover:text-leaf-700 transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}