"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { useCart } from "@/lib/store";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalCount } = useCart();
  const pathname = usePathname();

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/events", label: "Event Planning" },
    { href: "/gallery", label: "Gallery" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-leaf-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-2 group">
            <span className="w-9 h-9 rounded-full bg-leaf-600 flex items-center justify-center text-white group-hover:bg-brand-600 transition-colors duration-300">
              <span className="text-lg font-bold">R</span>
            </span>
            <span className="font-serif text-xl text-leaf-900 group-hover:text-brand-600 transition-colors duration-300">
              R K Florist
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))
                    ? "text-brand-600"
                    : "text-leaf-800 hover:text-brand-600"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/cart"
              className="relative w-10 h-10 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-800 hover:bg-leaf-600 hover:text-white transition-colors duration-300"
              aria-label="View cart"
            >
              <FiShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 rounded-full bg-brand-600 text-white text-[10px] font-bold flex items-center justify-center">
                {totalCount}
              </span>
            </Link>
            <button
              className="md:hidden w-10 h-10 rounded-full bg-leaf-100 flex items-center justify-center text-leaf-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav className="md:hidden border-t border-leaf-100 py-4 flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`text-sm font-medium ${
                  pathname === item.href ? "text-brand-600" : "text-leaf-800"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
