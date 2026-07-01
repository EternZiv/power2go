import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TiltCard } from "@/components/TiltCard";
import { ScrollReveal3D } from "@/components/ScrollReveal3D";
import { AnimatedStatsSection } from "@/components/AnimatedStatsSection";
import { AnimatedStatCard } from "@/components/AnimatedStatCard";
import { StatValue } from "@/components/StatValue";

export const metadata: Metadata = {
  title: "Services",
  description: "Power2Go provides professional installation, maintenance, system design, and after-sales support for all energy storage systems.",
};

const services = [
  {
    icon: "🔌",
    title: "System Design & Consultation",
    desc: "Our engineers assess your energy needs and design the optimal storage solution for your home or business, ensuring maximum ROI.",
    points: ["Energy audit & load analysis", "Custom system sizing", "Financial ROI analysis", "Regulatory compliance guidance"],
  },
  {
    icon: "🔧",
    title: "Professional Installation",
    desc: "Certified technicians handle every aspect of your installation, ensuring safe, code-compliant setup and optimal system performance.",
    points: ["Certified electricians", "Same-day to 3-day turnaround", "Full safety inspection", "Grid connection support"],
  },
  {
    icon: "📊",
    title: "Monitoring & Analytics",
    desc: "Our cloud-based platform provides real-time visibility into your energy system's performance, generation, and consumption patterns.",
    points: ["Real-time dashboards", "Mobile app access", "Performance alerts", "Monthly reports"],
  },
  {
    icon: "🛠️",
    title: "Maintenance & Service",
    desc: "Scheduled preventive maintenance keeps your system running at peak efficiency with minimal downtime over its full lifespan.",
    points: ["Annual health checks", "Firmware updates", "Component servicing", "Emergency call-out"],
  },
  {
    icon: "📋",
    title: "Warranty & After-Sales",
    desc: "Comprehensive 5-year warranty backed by a dedicated support team that responds quickly to any issue or inquiry.",
    points: ["5-year product warranty", "Priority support hotline", "On-site service visits", "Replacement parts stock"],
  },
  {
    icon: "🎓",
    title: "Training & Documentation",
    desc: "Full user training and detailed documentation so your team can confidently operate and maintain the energy system.",
    points: ["On-site training sessions", "Video tutorial library", "Technical manuals", "Safety guidelines"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/4.png`}
          alt="Power2Go professional services and installation"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Services" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Our Services</h1>
              <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100 leading-relaxed">
                End-to-end energy storage services from design through installation, monitoring, and ongoing support. Our certified team ensures your system performs at its best for years to come.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-left delay-200">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Certified Engineers</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            <AnimatedStatsSection className="hidden lg:grid grid-cols-2 gap-4 perspective-1000">
              <AnimatedStatCard index={0}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="6" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Service Offerings</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="500+" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Systems Installed</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">5 Yrs</p>
                  <p className="text-white/70 text-sm mt-1">Warranty Coverage</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={3}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">24/7</p>
                  <p className="text-white/70 text-sm mt-1">Remote Monitoring</p>
                </div>
              </AnimatedStatCard>
            </AnimatedStatsSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">What We Offer</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-500 text-lg">Comprehensive support throughout the entire lifecycle of your energy system</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 perspective-1000">
            {services.map((s, i) => (
              <ScrollReveal3D key={i} direction="up" delay={i * 100}>
              <TiltCard tiltDegree={5} glare={false}>
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl mb-5 transition-transform duration-300 group-hover:scale-110">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1447E6] transition-colors">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-gray-600 text-sm">
                      <svg className="w-4 h-4 text-[#22c55e] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path d="M20 6 9 17l-5-5"/>
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              </TiltCard>
              </ScrollReveal3D>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fade-in-up">
            <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Process</span>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">How It Works</h2>
            <p className="text-gray-500 text-lg">Our simple four-step process from consultation to commissioning</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 perspective-1000">
            {[
              { step: "01", title: "Consultation", desc: "Contact us for a free energy assessment and site survey." },
              { step: "02", title: "Design", desc: "Our engineers design the perfect system for your specific needs." },
              { step: "03", title: "Installation", desc: "Certified technicians install and commission your system." },
              { step: "04", title: "Support", desc: "Ongoing monitoring, maintenance, and 24/7 customer support." },
            ].map((p, i) => (
              <ScrollReveal3D key={p.step} direction="up" delay={i * 100}>
              <TiltCard tiltDegree={4} glare={false}>
              <div className="text-center group animate-fade-in-up" style={{ animationDelay: `${i * 0.15}s` }}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#1447E6] to-[#01b0d9] text-white flex items-center justify-center text-lg font-bold mx-auto mb-5 shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform duration-300">
                  {p.step}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
              </TiltCard>
              </ScrollReveal3D>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9] opacity-95" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Ready to Get Started?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Schedule a free consultation with our energy experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/contact" className="group btn-3d inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Book Consultation
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/products" className="btn-3d inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              View Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
