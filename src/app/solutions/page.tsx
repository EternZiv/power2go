import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Power2Go – Energy Storage for Every Need",
  description: "Discover Power2Go's energy storage solutions for residential, commercial, industrial, and portable applications across Pakistan.",
};

const solutions = [
  {
    icon: "🏠",
    title: "Residential Solutions",
    subtitle: "Home Energy Independence",
    desc: "Complete home energy storage systems that work seamlessly with your solar panels. Eliminate load-shedding, cut electricity bills by up to 70%, and power your home 24/7 with clean energy.",
    features: ["Seamless solar integration", "Load-shedding protection", "Smart mobile monitoring", "Silent & maintenance-free", "5-year warranty"],
    color: "bg-blue-600",
    lightColor: "bg-blue-50 text-blue-600",
    href: "/products",
    products: ["P2G LV Energy Vault 25"],
    image: "/images/9ffe617d218ca514485d2fc9add18954e09f1992.165a0bb0_4726.webp",
  },
  {
    icon: "🏢",
    title: "Commercial Solutions",
    subtitle: "Scale Your Energy Savings",
    desc: "Scalable energy storage systems for offices, retail outlets, and commercial facilities. Reduce peak demand charges, improve power reliability, and protect your business from power outages.",
    features: ["Peak demand management", "Demand charge reduction", "Business continuity", "Custom installation", "Remote fleet monitoring"],
    color: "bg-green-600",
    lightColor: "bg-green-50 text-green-600",
    href: "/products",
    products: ["P2G HV Energy Vault 75", "P2G HV Energy Vault 150"],
    image: "/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp",
  },
  {
    icon: "🏭",
    title: "Industrial Solutions",
    subtitle: "Enterprise-Grade Power",
    desc: "High-capacity battery systems for manufacturing plants, data centers, and industrial facilities. Ensure uninterrupted operations and protect critical equipment from power quality issues.",
    features: ["High-capacity scalable racks", "Advanced BMS protection", "Grid-tied & off-grid modes", "24/7 remote monitoring", "Compliance certified"],
    color: "bg-purple-600",
    lightColor: "bg-purple-50 text-purple-600",
    href: "/products",
    products: ["P2G Industrial PowerStack"],
    image: "/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp",
  },
  {
    icon: "🎒",
    title: "Portable Solutions",
    subtitle: "Power Anywhere",
    desc: "Compact, lightweight portable power stations for outdoor adventures, emergency backup, and remote job sites. Multiple charging options and compatibility with all your devices.",
    features: ["Multiple output ports", "Fast charging support", "Solar panel compatible", "LED emergency light", "Airline approved"],
    color: "bg-orange-500",
    lightColor: "bg-orange-50 text-orange-600",
    href: "/products",
    products: ["P2G PULSE"],
    image: "/images/ea529c31d35fcbf1a139a1bce88295e077160b2b.a041b307_0155.webp",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[320px] md:min-h-[340px] flex items-center pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent" />
        <div className="absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-[#1447E6]/30 blur-3xl animate-pulse" />
        <div className="absolute left-[-60px] bottom-0 h-60 w-60 rounded-full bg-[#01b0d9]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Our Solutions</h1>
          <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100">
            Tailored energy storage solutions for every application — from homes to industrial facilities.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {solutions.map((sol, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-12 items-center animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={`${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${sol.lightColor}`}>
                    {sol.subtitle}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{sol.title}</h2>
                  <p className="text-gray-600 leading-relaxed mb-6">{sol.desc}</p>
                  <ul className="space-y-2.5 mb-8">
                    {sol.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-[#22c55e] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path d="M20 6 9 17l-5-5"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={sol.href} className="btn-primary group">
                    Explore Products
                    <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </Link>
                </div>

                <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br from-white to-gray-100 border border-gray-200 shadow-sm min-h-[300px] ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <Image
                    src={sol.image}
                    alt={sol.title}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap justify-center gap-2">
                    {sol.products.map((p) => (
                      <span key={p} className={`px-3 py-1 rounded-full text-xs font-semibold ${sol.lightColor}`}>{p}</span>
                    ))}
                  </div>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Not Sure Which Solution?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Our energy consultants will assess your needs and recommend the perfect system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Get Free Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
