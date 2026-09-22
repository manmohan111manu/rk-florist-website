import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/store";
import { ToastProvider } from "@/components/Toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getProducts } from "@/lib/queries";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rkflorist.com"),
  title: "RK Florist Shimla — Bouquets, Gifts & Floral Styling",
  description: "RK Florist in Panthagati, Shimla offers fresh flowers, floral gifting, bouquets, and event styling for every celebration.",
  keywords: "RK Florist, florist in Shimla, flowers in Panthagati, bouquets, wedding flowers, gifts, Shimla",
  openGraph: {
    title: "RK Florist Shimla",
    description: "Fresh flowers, gifting and floral styling in Shimla.",
    url: "https://rkflorist.com",
    siteName: "RK Florist",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const products = await getProducts();
  return (
    <html lang="en">
      <body className={`antialiased ${playfair.variable} ${inter.variable}`}>
        <CartProvider products={products}>
          <ToastProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </CartProvider>
      </body>
    </html>
  );
}