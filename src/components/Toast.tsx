"use client";

import { useEffect, useState, ReactNode } from "react";
import { FiCheckCircle, FiXCircle } from "react-icons/fi";

type ToastType = "success" | "error";

interface Toast {
  id: string;
  type: ToastType;
  message: string;
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const onEvent = (e: Event) => {
      const custom = e as CustomEvent<string>;
      const type = e.type === "toast:success" ? "success" : "error";
      const id = Math.random().toString(36).slice(2);
      setToasts((prev) => [...prev, { id, type, message: custom.detail }]);
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
      }, 4000);
    };
    window.addEventListener("toast:success", onEvent);
    window.addEventListener("toast:error", onEvent);
    return () => {
      window.removeEventListener("toast:success", onEvent);
      window.removeEventListener("toast:error", onEvent);
    };
  }, []);

  return (
    <>
      {children}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg min-w-[280px] max-w-md ${
              toast.type === "success"
                ? "bg-green-50 border border-green-200 text-green-800"
                : "bg-red-50 border border-red-200 text-red-800"
            }`}
          >
            {toast.type === "success" ? (
              <FiCheckCircle className="w-5 h-5 flex-shrink-0" />
            ) : (
              <FiXCircle className="w-5 h-5 flex-shrink-0" />
            )}
            <span className="text-sm font-medium">{toast.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export function useToast() {
  return {
    success: (msg: string) => {
      window.dispatchEvent(new CustomEvent("toast:success", { detail: msg }));
    },
    error: (msg: string) => {
      window.dispatchEvent(new CustomEvent("toast:error", { detail: msg }));
    },
  };
}
