import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";
import { ProductCardGrid } from "@/components/ProductCardGrid";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Products",
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
    images: [`${basePath}/images/9ffe617d218ca514485d2fc9add18954e09f1992.165a0bb0_4726.webp`, `${basePath}/images/d302be08e4e938ad503ae31569661716ec3fc738.a0799d91_904f.webp`],
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
    images: [`${basePath}/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp`, `${basePath}/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp`],
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
    images: [`${basePath}/images/ea529c31d35fcbf1a139a1bce88295e077160b2b.a041b307_0155.webp`, `${basePath}/images/ef874dcffa3b6df96abbfdb341b85bb71e57c94a.0dd5abf1_52a3.webp`],
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
    images: [`${basePath}/images/ad3f165e372f5048d4697f9bed1945fb35149239.2e1e00e8_7434.jpg`],
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
    images: [`${basePath}/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp`],
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
    images: [`${basePath}/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp`],
  },
];

const categories = ["All", "Residential", "Commercial", "Industrial", "Portable", "Monitoring"];

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Products" }]} />
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

          <ProductCardGrid products={products} columns={3} />
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
