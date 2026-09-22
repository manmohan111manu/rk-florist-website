import Link from "next/link";
import { FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-leaf-950 text-leaf-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-leaf-600 flex items-center justify-center text-white">
                <span className="text-lg font-bold">R</span>
              </span>
              <span className="font-serif text-xl">R K Florist</span>
            </div>
            <p className="text-leaf-200 text-sm leading-relaxed max-w-xs">
              Bringing joy through flowers and unforgettable celebrations. From everyday bouquets to dream weddings, we craft moments that last.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-600 transition-colors duration-300">
                <FiInstagram className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-600 transition-colors duration-300">
                <FiFacebook className="w-4 h-4" />
              </a>
              <a href="mailto:hello@rkflorist.com" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-600 transition-colors duration-300">
                <FiMail className="w-4 h-4" />
              </a>
              <a href="tel:+919876543210" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-600 transition-colors duration-300">
                <FiPhone className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2 text-sm text-leaf-200">
              <li><Link href="/shop" className="hover:text-brand-300 transition-colors">Shop Flowers</Link></li>
              <li><Link href="/events" className="hover:text-brand-300 transition-colors">Event Packages</Link></li>
              <li><Link href="/gallery" className="hover:text-brand-300 transition-colors">Our Gallery</Link></li>
              <li><Link href="/events/quote" className="hover:text-brand-300 transition-colors">Request Quote</Link></li>
              <li><Link href="/about" className="hover:text-brand-300 transition-colors">About Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Visit Us</h3>
            <ul className="space-y-3 text-sm text-leaf-200">
              <li className="flex items-start gap-3">
                <FiMapPin className="w-4 h-4 mt-0.5 text-brand-300 flex-shrink-0" />
                <span>123 Rose Garden Road<br />Flower Market Area<br />Hyderabad, Telangana 500001</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="w-4 h-4 text-brand-300 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <FiMail className="w-4 h-4 text-brand-300 flex-shrink-0" />
                <span>hello@rkflorist.com</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-4 h-4 mt-0.5 text-brand-300 flex-shrink-0">◷</span>
                <span>Mon–Sat: 8:00 AM – 8:00 PM<br />Sunday: 9:00 AM – 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-xs text-leaf-300">
          © 2025 R K Florist & Event Planning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
