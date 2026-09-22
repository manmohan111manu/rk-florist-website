"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import type { Product } from "@/data/products";

interface CartItem {
  productId: string;
  quantity: number;
}

interface CartContextValue {
  products: Product[];
  items: CartItem[];
  addItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children, products }: { children: ReactNode; products: Product[] }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((productId: string) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.productId === productId);
      if (existing) {
        return prev.map((i) =>
          i.productId === productId ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { productId, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((prev) => prev.filter((i) => i.productId !== productId));
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setItems((prev) => prev.filter((i) => i.productId !== productId));
    } else {
      setItems((prev) =>
        prev.map((i) => (i.productId === productId ? { ...i, quantity } : i))
      );
    }
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => {
    const price = products.find((p) => p.id === item.productId)?.price ?? 0;
    return sum + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{ products, items, addItem, removeItem, updateQuantity, clearCart, totalCount, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

export function getCartItemsWithDetails() {
  const { items, products } = useCart();
  return items.map((item) => {
    const product = products.find((p) => p.id === item.productId) as Product;
    return {
      ...item,
      product,
      subtotal: product.price * item.quantity,
    };
  });
}
