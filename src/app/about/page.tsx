import Link from "next/link";
import { FiHeart, FiAward, FiUsers, FiArrowRight } from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=1600&q=80')" }}
        />
        <div className="absolute inset-0 bg-leaf-900/80" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Our Story</span>
          <h1 className="font-serif text-4xl sm:text-6xl text-white mt-3 mb-6">
            Passion. Beauty.<br />
            <span className="text-brand-300 italic">Pure Love for Flowers.</span>
          </h1>
          <p className="text-leaf-100 text-lg max-w-2xl mx-auto leading-relaxed">
            For over a decade, R K Florist has been Hyderabad&apos;s trusted partner for fresh flowers, bespoke bouquets, and unforgettable event experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Who We Are</span>
            <h2 className="font-serif text-4xl text-leaf-900 mt-2 mb-6">Born from a Love of Nature</h2>
            <div className="space-y-4 text-leaf-700 leading-relaxed">
              <p>
                R K Florist was founded in 2012 by Ramesh Kumar, a passionate botanist who believed that flowers have the power to transform moments into memories. Starting from a small stall in Hyderabad&apos;s Flower Market, we have grown into one of the city&apos;s most beloved florists.
              </p>
              <p>
                Today, our team of 25+ dedicated floral designers crafts thousands of bouquets and decorates hundreds of events every year. From corporate gatherings to intimate weddings, we bring creativity, passion, and the finest flowers to every project.
              </p>
              <p>
                Our flowers are sourced directly from farms in Bengaluru and Pune, ensuring you always receive the freshest blooms at the fairest prices.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-3xl overflow-hidden aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=800&q=80"
                alt="Our team at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-brand-600 rounded-2xl p-6 text-white shadow-xl">
              <div className="font-serif text-4xl font-bold">12+</div>
              <div className="text-sm text-brand-100 mt-1">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-leaf-50 py-16 border-y border-leaf-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "5,000+", label: "Happy Customers" },
              { value: "800+", label: "Events Decorated" },
              { value: "200+", label: "Flower Varieties" },
              { value: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-serif text-4xl text-brand-600 font-bold">{stat.value}</div>
                <div className="text-leaf-600 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-600 text-sm font-semibold uppercase tracking-wider">Our Values</span>
          <h2 className="font-serif text-4xl text-leaf-900 mt-2">What Drives Us Every Day</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: FiHeart,
              title: "Made with Love",
              desc: "Every bouquet and decoration is crafted with genuine care. We treat your celebrations as our own.",
            },
            {
              icon: FiAward,
              title: "Unmatched Quality",
              desc: "We source only the freshest, farm-direct blooms and use premium wrapping materials for every order.",
            },
            {
              icon: FiUsers,
              title: "Customer First",
              desc: "From order to delivery, your satisfaction is our top priority. We go the extra mile every single time.",
            },
          ].map((val) => (
            <div key={val.title} className="bg-leaf-50 rounded-2xl p-8 border border-leaf-100 hover:border-leaf-300 transition-colors text-center">
              <div className="w-14 h-14 rounded-2xl bg-leaf-100 flex items-center justify-center mx-auto mb-5">
                <val.icon className="w-7 h-7 text-leaf-700" />
              </div>
              <h3 className="font-serif text-xl text-leaf-900 mb-3">{val.title}</h3>
              <p className="text-leaf-600 text-sm leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="bg-leaf-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-brand-300 text-sm font-semibold uppercase tracking-wider">Our Team</span>
            <h2 className="font-serif text-4xl text-white mt-2">The Hands Behind the Beauty</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { name: "Ramesh Kumar", role: "Founder & Head Designer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
              { name: "Priya Nair", role: "Senior Event Stylist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80" },
              { name: "Arjun Rao", role: "Floral Arrangement Lead", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80" },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-white/10 group-hover:ring-brand-400 transition-all duration-300">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="font-serif text-xl text-white">{member.name}</h3>
                <p className="text-leaf-300 text-sm mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-serif text-4xl text-leaf-900 mb-4">Ready to Work with Us?</h2>
        <p className="text-leaf-600 text-lg mb-8 max-w-xl mx-auto">
          Whether you need a simple bouquet or full event decoration, we&apos;re here to make it magical.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/shop" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white font-semibold rounded-2xl hover:bg-brand-700 transition-colors">
            Shop Flowers <FiArrowRight className="w-4 h-4" />
          </Link>
          <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-leaf-100 text-leaf-800 font-semibold rounded-2xl hover:bg-leaf-200 transition-colors">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
