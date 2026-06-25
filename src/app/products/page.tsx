import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products | Power2Go – Battery Storage Systems",
  description: "Explore our full range of energy storage systems: residential, commercial, industrial, portable, and monitoring solutions.",
};

const products = [
  {
    slug: "p2g-lv-energy-vault-25",
    name: "P2G LV Energy Vault 25",
    sku: "LV-25",
    category: "Residential",
    capacity: "5 kWh",
    power: "2.5 kW",
    voltage: "48V",
    cells: "LiFePO4",
    warranty: "5 Years",
    tags: ["Reliable", "Space Saving", "Easy Installation"],
    gradient: "from-blue-50 to-slate-100",
    description: "Compact and efficient residential energy storage unit designed for homes wanting to maximize solar self-consumption.",
    images: ["/images/9ffe617d218ca514485d2fc9add18954e09f1992.165a0bb0_4726.webp", "/images/d302be08e4e938ad503ae31569661716ec3fc738.a0799d91_904f.webp"],
  },
  {
    slug: "p2g-hv-energy-vault-75",
    name: "P2G HV Energy Vault 75",
    sku: "HV-75",
    category: "Commercial",
    capacity: "7.5 kWh",
    power: "3.75 kW",
    voltage: "96V",
    cells: "LiFePO4",
    warranty: "5 Years",
    tags: ["Scalable", "High Efficiency", "Modular Design"],
    gradient: "from-green-50 to-slate-100",
    description: "High-voltage commercial battery system with modular architecture for scalable energy storage deployments.",
    images: ["/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp", "/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp"],
  },
  {
    slug: "p2g-pulse",
    name: "P2G PULSE",
    sku: "PULSE-320",
    category: "Portable",
    capacity: "1000 Wh",
    power: "500 W",
    voltage: "24V",
    cells: "NMC",
    warranty: "5 Years",
    tags: ["Compact", "Portable", "Fast Charging"],
    gradient: "from-purple-50 to-slate-100",
    description: "Ultra-portable power station ideal for outdoor activities, emergency backup, and remote site operations.",
    images: ["/images/ea529c31d35fcbf1a139a1bce88295e077160b2b.a041b307_0155.webp", "/images/ef874dcffa3b6df96abbfdb341b85bb71e57c94a.0dd5abf1_52a3.webp"],
  },
  {
    slug: "p2g-energy-monitoring-system",
    name: "P2G Energy Monitoring System",
    sku: "SEM-PRO",
    category: "Monitoring",
    capacity: "Solar Monitoring",
    power: "Real-time Analytics",
    voltage: "—",
    cells: "—",
    warranty: "5 Years",
    tags: ["Real-time Data", "Cloud Analytics", "Multi-device"],
    gradient: "from-orange-50 to-slate-100",
    description: "Smart energy monitoring platform providing real-time insights on solar generation, consumption, and battery status.",
    images: ["/images/ad3f165e372f5048d4697f9bed1945fb35149239.2e1e00e8_7434.jpg"],
  },
  {
    slug: "p2g-industrial-powerstack",
    name: "P2G Industrial PowerStack",
    sku: "IPS-500",
    category: "Industrial",
    capacity: "50+ kWh",
    power: "25+ kW",
    voltage: "384V",
    cells: "LiFePO4",
    warranty: "5 Years",
    tags: ["High Capacity", "Scalable", "Remote Monitoring"],
    gradient: "from-red-50 to-slate-100",
    description: "Industrial-grade battery system designed for large-scale energy storage in factories and industrial facilities.",
    images: ["/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp"],
  },
  {
    slug: "p2g-hv-energy-vault-150",
    name: "P2G HV Energy Vault 150",
    sku: "HV-150",
    category: "Commercial",
    capacity: "15 kWh",
    power: "7.5 kW",
    voltage: "192V",
    cells: "LiFePO4",
    warranty: "5 Years",
    tags: ["Modular", "Smart BMS", "IP55 Rated"],
    gradient: "from-teal-50 to-slate-100",
    description: "Extended capacity commercial vault for businesses with high energy demands and complex load profiles.",
    images: ["/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp"],
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Portable", "Monitoring"];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[320px] md:min-h-[340px] flex items-center pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent" />
        <div className="absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-[#1447E6]/30 blur-3xl animate-pulse" />
        <div className="absolute left-[-60px] bottom-0 h-60 w-60 rounded-full bg-[#01b0d9]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">
            Our Products
          </h1>
          <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100">
            Explore our complete range of advanced energy storage systems built for every application.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12 justify-center animate-fade-in-up">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  cat === "All"
                    ? "bg-[#1447E6] text-white shadow-md shadow-blue-200"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#1447E6] hover:text-[#1447E6] hover:shadow-sm"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <div key={i} className="product-card group cursor-pointer bg-white animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  <Link href={`/products/${p.slug}`}>
                    <Image
                      src={p.images[0]}
                      alt={p.name}
                      fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </Link>
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#1447E6] text-white shadow-md">
                    {p.category}
                  </span>
                  <Link
                    href={`/products/${p.slug}`}
                    className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                    aria-label={`View ${p.name} details`}
                  >
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  </Link>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#1447E6] transition-colors">{p.name}</h3>
                  <p className="text-sm text-gray-400 mb-3 font-mono">{p.sku}</p>
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed flex-1">{p.description}</p>

                  <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-gray-100">
                    {[
                      { label: "Capacity", value: p.capacity },
                      { label: "Power", value: p.power },
                      { label: "Warranty", value: p.warranty },
                    ].map((spec) => (
                      <div key={spec.label}>
                        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide mb-1">{spec.label}</p>
                        <p className="text-xs font-bold text-gray-900">{spec.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 bg-blue-50 text-[#1447E6] rounded-md text-xs font-medium">{tag}</span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#1447E6] hover:bg-[#103ed6] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
                  >
                    Get in Touch
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9] opacity-95" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Ready to Power Your Future?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Speak with our energy experts to find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Contact Sales
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/solutions" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
