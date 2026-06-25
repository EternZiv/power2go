import React from "react";
import Link from "next/link";
import { basePath } from "@/lib/basePath";
import { ProductCardGrid } from "@/components/ProductCardGrid";

const solutions = [
  {
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/>
        <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      </svg>
    ),
    bg: "bg-blue-100",
    title: "Residential",
    desc: "Complete home energy storage systems for energy independence",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M10 12h4M10 8h4M14 21v-3a2 2 0 0 0-4 0v3M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"/>
      </svg>
    ),
    bg: "bg-green-100",
    title: "Commercial",
    desc: "Scalable energy storage for businesses and offices",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-purple-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M12 16h.01M16 16h.01M3 19a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.5a.5.5 0 0 0-.769-.422l-4.462 2.844A.5.5 0 0 1 15 10.5v-2a.5.5 0 0 0-.769-.422L9.77 10.922A.5.5 0 0 1 9 10.5V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2z"/>
        <path d="M8 16h.01"/>
      </svg>
    ),
    bg: "bg-purple-100",
    title: "Industrial",
    desc: "High-capacity solutions for industrial operations",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-orange-600" fill="none" stroke="currentColor" strokeWidth={1.75} viewBox="0 0 24 24">
        <path d="M22 14L22 10"/><rect x="2" y="6" width="16" height="12" rx="2"/>
      </svg>
    ),
    bg: "bg-orange-100",
    title: "Portable",
    desc: "Flexible battery modules for custom configurations",
  },
];

const products = [
  {
    slug: "p2g-lv-energy-vault-25",
    name: "P2G LV Energy Vault 25",
    sku: "LV-25",
    category: "Residential",
    capacity: "5 kWh",
    power: "2.5 kW",
    warranty: "5 Years",
    tags: ["Reliable", "Space Saving", "Easy Install"],
    gradient: "from-blue-50 to-slate-100",
    images: [`${basePath}/images/9ffe617d218ca514485d2fc9add18954e09f1992.165a0bb0_4726.webp`, `${basePath}/images/d302be08e4e938ad503ae31569661716ec3fc738.a0799d91_904f.webp`],
  },
  {
    slug: "p2g-hv-energy-vault-75",
    name: "P2G HV Energy Vault 75",
    sku: "HV-75",
    category: "Commercial",
    capacity: "7.5 kWh",
    power: "3.75 kW",
    warranty: "5 Years",
    tags: ["Scalable", "High Efficiency", "Modular"],
    gradient: "from-green-50 to-slate-100",
    images: [`${basePath}/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp`, `${basePath}/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp`],
  },
  {
    slug: "p2g-pulse",
    name: "P2G PULSE",
    sku: "PULSE-320",
    category: "Portable",
    capacity: "1000 Wh",
    power: "500 W",
    warranty: "5 Years",
    tags: ["Compact", "Portable", "Fast Charging"],
    gradient: "from-purple-50 to-slate-100",
    images: [`${basePath}/images/ea529c31d35fcbf1a139a1bce88295e077160b2b.a041b307_0155.webp`, `${basePath}/images/ef874dcffa3b6df96abbfdb341b85bb71e57c94a.0dd5abf1_52a3.webp`],
  },
  {
    slug: "p2g-energy-monitoring-system",
    name: "P2G Energy Monitoring System",
    sku: "SEM-PRO",
    category: "Monitoring",
    capacity: "Solar Monitor",
    power: "Real-time",
    warranty: "5 Years",
    tags: ["Real-time Data", "Cloud Analytics", "Multi-device"],
    gradient: "from-orange-50 to-slate-100",
    images: [`${basePath}/images/ad3f165e372f5048d4697f9bed1945fb35149239.2e1e00e8_7434.jpg`],
  },
];

const features = [
  { icon: "⚡", gradient: "from-green-600 to-emerald-400", title: "High Performance", desc: "Advanced lithium-ion technology delivering superior energy density and efficiency" },
  { icon: "🛡️", gradient: "from-blue-600 to-cyan-400", title: "Safety First", desc: "Multiple protection systems including BMS, thermal management, and fire prevention" },
  { icon: "🌿", gradient: "from-green-600 to-teal-400", title: "Eco-Friendly", desc: "Sustainable energy solutions reducing carbon footprint and energy costs" },
  { icon: "📱", gradient: "from-violet-600 to-purple-400", title: "Smart Monitoring", desc: "Real-time monitoring and control through mobile app and web interface" },
  { icon: "🏆", gradient: "from-amber-600 to-yellow-400", title: "Certified Quality", desc: "International certifications including CE, UL, and IEC standards" },
  { icon: "📈", gradient: "from-blue-600 to-indigo-400", title: "Scalable Solutions", desc: "Modular design allows easy expansion as your energy needs grow" },
];

const stats = [
  { value: "99.9%", label: "System Uptime" },
  { value: "A-Grade", label: "Battery Quality Cells" },
  { value: "Advanced", label: "High Quality BMS" },
  { value: "5 Years", label: "Product Warranty" },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1800&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent pointer-events-none" />
        <div className="absolute right-[-60px] top-24 h-96 w-96 rounded-full bg-[#1447E6]/20 blur-3xl animate-pulse" />
        <div className="absolute left-[-60px] bottom-0 h-80 w-80 rounded-full bg-[#01b0d9]/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm font-medium tracking-wider shadow-md animate-fade-in-left">
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              Advanced Energy Storage Solutions
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[64px] font-bold tracking-tight text-white leading-[1.1] animate-fade-in-left delay-100">
              Power Your Future<br />
              <span className="bg-gradient-to-r from-[#22c55e] to-[#01b0d9] bg-clip-text text-transparent">with Clean Energy</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-white/85 leading-8 animate-fade-in-left delay-200">
              Discover cutting-edge battery storage systems designed for residential, commercial, and industrial applications. Maximize your energy independence with Power2Go.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-left delay-300">
              <Link href="/products" className="btn-primary group">
                Explore Products
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
              <Link href="/contact" className="btn-outline">
                Get In Touch
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 text-white/50 text-xs animate-fade-in-left delay-500">
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" /> CE Certified</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" /> UL Listed</span>
              <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" /> IEC Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#1447E6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#01b0d9]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-14 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">What We Offer</span>
            <h2 className="text-3xl md:text-[36px] font-bold text-slate-900 tracking-tight mb-4">Energy Storage Solutions</h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Choose from our comprehensive range of battery storage systems designed to meet your specific energy needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {solutions.map((sol, i) => (
              <div key={i} className="sol-card cursor-pointer group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${sol.bg} transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg`}>
                  {sol.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">{sol.title}</h3>
                <p className="text-slate-500 text-sm leading-6">{sol.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-[#1447E6] text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1726] py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="gradient-line absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-4 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <p className="text-2xl md:text-3xl font-extrabold text-[#22c55e]">{s.value}</p>
                <p className="text-white/60 text-sm mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-4">Our Products</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Explore our complete range of energy storage systems</p>
          </div>

          <ProductCardGrid products={products} />

          <div className="text-center animate-fade-in-up">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:shadow-lg hover:shadow-gray-200 transition-all duration-300 group"
            >
              Browse All Products
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#1447E6]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#01b0d9]/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Why Us</span>
            <h2 className="text-3xl md:text-[36px] font-bold text-gray-900 mb-4">Why Choose Power2Go</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">Industry-leading technology and innovation for reliable energy storage</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <div key={i} className="feature-card group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br ${f.gradient} flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white text-xl shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                    {f.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#1447E6] transition-colors">{f.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Ready to Power Your Future?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Explore our range of energy storage solutions or speak with our sales team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              View Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
