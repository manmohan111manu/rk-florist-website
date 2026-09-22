import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/store";
import { ToastProvider } from "@/components/Toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "R K Florist & Event Planning — Flowers, Events, Celebrations",
  description: "R K Florist: fresh bouquets, plants, and gifts for same-day UPI delivery. Plan weddings, birthdays, and anniversaries with our floral experts. View our gallery and book dates.",
  keywords: "florist, flowers, bouquets, event planning, wedding decoration, birthday, anniversary, UPI delivery, Hyderabad",
  openGraph: {
    title: "R K Florist & Event Planning",
    description: "Fresh flowers, beautiful events, and same-day delivery.",
    url: "https://rkflorist.com",
    siteName: "R K Florist",
    images: [{ url: "/og-cover.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`antialiased ${playfair.variable} ${inter.variable}`}>
        <CartProvider>
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