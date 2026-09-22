import Link from "next/link";
import { FiArrowRight, FiTruck, FiCalendar, FiStar, FiPhone, FiInstagram } from "react-icons/fi";
import ProductCard from "@/components/ProductCard";
import EventCard from "@/components/EventCard";
import { getProducts, getEventPackages, getGalleryItems } from "@/lib/queries";

export default async function HomePage() {
  const [products, eventPackages, galleryItems] = await Promise.all([
    getProducts(),
    getEventPackages(),
    getGalleryItems(),
  ]);
  const featuredProducts = products.filter((p) => p.bestseller).slice(0, 3);
  const featuredEvents = eventPackages.filter((e) => e.popular).slice(0, 3);
  const featuredGallery = galleryItems.slice(0, 6);

  return (
    <div className="overflow-hidden">
      {/* ─── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[92vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1487530811015-780c5b5aaa89?w=1600&q=85')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-leaf-950/90 via-leaf-900/70 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-brand-300 text-sm font-semibold uppercase tracking-widest mb-5">
              <span className="w-8 h-px bg-brand-300" />
              Hyderabad&apos;s Premier Florist
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-6">
              Blooms That{" "}
              <span className="text-brand-300 italic">Speak</span>{" "}
              From the Heart
            </h1>
            <p className="text-leaf-100 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Fresh flowers, curated bouquets, and breathtaking event
              decorations — crafted with love, delivered with joy. Same-day UPI
              delivery across Hyderabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-2xl hover:bg-brand-500 transition-all duration-300 hover:scale-105 shadow-lg shadow-brand-900/30"
              >
                Shop Flowers <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/events"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/15 backdrop-blur border border-white/30 text-white font-semibold rounded-2xl hover:bg-white/25 transition-all duration-300"
              >
                <FiCalendar className="w-5 h-5" /> Plan an Event
              </Link>
            </div>

            <div className="flex flex-wrap gap-8 mt-14">
              {[
                { label: "Happy Customers", value: "5,000+" },
                { label: "Events Decorated", value: "800+" },
                { label: "Flower Varieties", value: "200+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-serif text-3xl text-brand-300 font-bold">
                    {stat.value}
                  </div>
                  <div className="text-leaf-300 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-bounce">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/30" />
        </div>
      </section>

      {/* ─── Trust Badges ────────────────────────────────────────────────── */}
      <section className="bg-leaf-50 border-y border-leaf-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FiTruck, title: "Same-Day Delivery", desc: "Order before 2 PM" },
              { icon: FiStar, title: "100% Fresh Flowers", desc: "Farm-fresh guarantee" },
              { icon: FiCalendar, title: "Event Planning", desc: "From concept to reality" },
              { icon: FiPhone, title: "24/7 Support", desc: "Always here for you" },
            ].map((item) => (
              <div key={item.title} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-leaf-100 hover:border-leaf-300 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-leaf-100 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-leaf-700" />
                </div>
                <div>
                  <div className="font-semibold text-leaf-900 text-sm">{item.title}</div>
                  <div className="text-xs text-leaf-500 mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Bestselling Products ─────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Our Collection</span>
            <h2 className="font-serif text-4xl text-leaf-900 mt-2">Bestselling Bouquets</h2>
          </div>
          <Link href="/shop" className="flex items-center gap-2 text-leaf-700 font-semibold hover:text-brand-600 transition-colors group">
            View All <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ─── Full-width Banner ───────────────────────────────────────────── */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1469371956734-e3a1e7d1c6ef?w=1600&q=85')" }} />
        <div className="absolute inset-0 bg-leaf-900/75" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-widest">Events & Celebrations</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-white mt-3 mb-6">Make Your Big Day Unforgettable</h2>
          <p className="text-leaf-100 text-lg leading-relaxed mb-8">
            From intimate anniversaries to grand weddings, our expert team crafts breathtaking floral experiences tailored to your vision and budget.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/events" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-2xl hover:bg-brand-500 transition-all duration-300">
              Explore Packages <FiArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/events/quote" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-semibold rounded-2xl hover:bg-white/15 transition-all duration-300">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Event Packages ──────────────────────────────────────────────── */}
      <section className="py-20 bg-leaf-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Event Planning</span>
              <h2 className="font-serif text-4xl text-leaf-900 mt-2">Popular Packages</h2>
            </div>
            <Link href="/events" className="flex items-center gap-2 text-leaf-700 font-semibold hover:text-brand-600 transition-colors group">
              All Packages <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEvents.map((e) => (
              <EventCard key={e.id} event={e} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Gallery Teaser ──────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Our Portfolio</span>
          <h2 className="font-serif text-4xl text-leaf-900 mt-2 mb-4">Every Moment Beautifully Captured</h2>
          <p className="text-leaf-600 max-w-xl mx-auto">Browse through our gallery of weddings, birthday parties, anniversaries, and custom bouquets.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {featuredGallery.map((item) => (
            <div key={item.id} className="group relative rounded-2xl overflow-hidden aspect-square">
              <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-300 font-semibold">{item.category}</span>
                  <h3 className="text-white font-serif text-sm mt-0.5">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/gallery" className="inline-flex items-center gap-2 px-8 py-4 bg-leaf-900 text-white font-semibold rounded-2xl hover:bg-leaf-800 transition-colors">
            View Full Gallery <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ─── Testimonials ────────────────────────────────────────────────── */}
      <section className="bg-brand-50 py-20 border-y border-brand-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Testimonials</span>
            <h2 className="font-serif text-4xl text-leaf-900 mt-2">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Priya Sharma", role: "Bride", quote: "RK Florist transformed our wedding venue beyond imagination. The mandap decoration was absolutely magical!", stars: 5 },
              { name: "Rohit Mehta", role: "Corporate Client", quote: "Ordered a bouquet for same-day delivery and it arrived fresh and stunning. The packaging was premium and the flowers lasted two weeks!", stars: 5 },
              { name: "Anjali Reddy", role: "Birthday Celebration", quote: "The birthday bash setup was colorful, creative, and perfectly on-theme. My daughter couldn't stop smiling!", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-brand-100 hover:shadow-lg transition-shadow">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <FiStar key={i} className="w-4 h-4 fill-brand-400 text-brand-400" />
                  ))}
                </div>
                <p className="text-leaf-700 text-sm leading-relaxed italic mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold text-leaf-900">{t.name}</div>
                  <div className="text-xs text-leaf-500 mt-0.5">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Instagram CTA ───────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-leaf-900 to-brand-800 rounded-3xl p-12 md:p-16">
          <FiInstagram className="w-12 h-12 text-brand-300 mx-auto mb-6" />
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">Follow Our Floral Journey</h2>
          <p className="text-leaf-200 max-w-md mx-auto mb-8">Stay inspired with daily floral arrangements, behind-the-scenes setups, and exclusive offers on Instagram.</p>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-leaf-900 font-semibold rounded-2xl hover:bg-brand-50 transition-colors">
            <FiInstagram className="w-5 h-5" /> @rkflorist
          </a>
        </div>
      </section>
    </div>
  );
}
