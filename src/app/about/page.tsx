import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Power2Go's mission, vision, core values, parent companies, and our journey in providing advanced energy storage solutions.",
};

const coreValues = [
  { icon: "💡", title: "Innovation", desc: "Continuously advancing battery technology and developing smart solutions to meet tomorrow's energy needs." },
  { icon: "🔧", title: "Reliability", desc: "Our systems are engineered to perform under the most demanding conditions with proven track records." },
  { icon: "🌱", title: "Sustainability", desc: "Committed to clean energy solutions that reduce carbon emissions and protect the environment." },
  { icon: "🤝", title: "Customer Focus", desc: "We partner with our customers to design customized solutions that maximize their ROI." },
];

const journey = [
  { year: "2024", title: "Company Founded", desc: "Power2Go was established with a mission to revolutionize energy storage in Pakistan." },
  { year: "2024", title: "First Deployments", desc: "Successfully deployed residential and commercial storage solutions across Karachi and Lahore." },
  { year: "2025", title: "Growth & Expansion", desc: "Expanded product range and established partnerships with leading international manufacturers." },
  { year: "2026", title: "Scaling Impact", desc: "Continuing to scale our impact across Pakistan with innovative energy storage technologies." },
];

const stats = [
  { value: "99.9%", label: "System Uptime", sub: "Guaranteed Uptime" },
  { value: "A-Grade", label: "Battery Cells", sub: "High Quality Only" },
  { value: "Advanced", label: "BMS", sub: "High Quality BMS" },
  { value: "5 Years", label: "Warranty", sub: "Product Warranty" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/2.jpeg`}
          alt="Power2Go team and energy storage solutions"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">
                About <span className="text-[#22c55e]">Power</span>2Go
              </h1>
              <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100 leading-relaxed">
                Leading the future of energy storage in Pakistan with innovative, reliable, and sustainable battery solutions. We empower businesses and homes with cutting-edge technology.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-left delay-200">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Industry Leading Technology</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Certified Engineering Team</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Pan-Pakistan Coverage</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-right delay-300">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-3xl font-bold text-[#22c55e]">4</p>
                <p className="text-white/70 text-sm mt-1">Office Locations</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-3xl font-bold text-[#22c55e]">50+</p>
                <p className="text-white/70 text-sm mt-1">Team Members</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-3xl font-bold text-[#22c55e]">3</p>
                <p className="text-white/70 text-sm mt-1">Parent Companies</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <p className="text-3xl font-bold text-[#22c55e]">100%</p>
                <p className="text-white/70 text-sm mt-1">Local Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-fade-in-up">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3z"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Our mission is to empower businesses and homes with cutting-edge energy storage solutions that are reliable, affordable, and environmentally responsible. We strive to reduce energy dependency and build a sustainable future for generations to come.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20M2 12h20"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be a global leader in energy storage technology, creating a world where every family and business has access to clean, reliable, and affordable energy solutions. We envision a Pakistan powered by sustainable, intelligent energy systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0d1726] py-14 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="gradient-line absolute top-0 inset-x-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <div key={i} className="py-4 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <p className="text-2xl md:text-3xl font-extrabold text-[#22c55e]">{s.value}</p>
                <p className="text-white font-semibold text-sm mt-1">{s.label}</p>
                <p className="text-white/50 text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Our Values</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Core Values</h2>
            <p className="text-gray-500 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <div key={i} className="feature-card text-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{v.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1447E6] transition-colors">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Partners</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Parent Companies</h2>
            <p className="text-gray-500 text-lg">Power2Go is backed by industry-leading organisations in Pakistan.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: "📡",
                color: "bg-blue-100 text-[#1447E6]",
                name: "Multinet",
                desc: "Multinet is a leading telecom infrastructure and technology company operating in Pakistan. With expertise in building and managing national communication networks, they bring unparalleled technical know-how and infrastructure capabilities to Power2Go, enabling world-class energy monitoring and connectivity solutions.",
              },
              {
                icon: "⚡",
                color: "bg-orange-100 text-orange-600",
                name: "Orient Power Pvt Ltd",
                desc: "Orient Power is a premier energy company in Pakistan producing and distributing reliable power. With decades of experience in the energy sector, they provide Power2Go with deep industry knowledge, regulatory expertise, and an established distribution network that ensures our products reach customers across the country.",
              },
            ].map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${c.color} text-2xl mb-5`}>
                  {c.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{c.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Timeline</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Journey</h2>
            <p className="text-gray-500 text-lg">Key milestones in Power2Go&apos;s history</p>
          </div>
          <div className="flex flex-col gap-0">
            {journey.map((item, i) => (
              <div key={i} className="flex gap-6 pb-10 relative timeline-item animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                {i < journey.length - 1 && (
                  <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-[#1447E6] to-[#01b0d9]" />
                )}
                <div className="timeline-dot flex-shrink-0">{item.year}</div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Join Us in Shaping the Future</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Discover how Power2Go is leading the transition to clean, reliable energy across Pakistan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Stay Updated
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
