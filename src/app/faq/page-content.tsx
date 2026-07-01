"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";
import { ScrollReveal3D } from "@/components/ScrollReveal3D";
import { AnimatedStatsSection } from "@/components/AnimatedStatsSection";
import { AnimatedStatCard } from "@/components/AnimatedStatCard";
import { StatValue } from "@/components/StatValue";

const faqs = [
  {
    category: "Products",
    items: [
      { q: "What types of energy storage systems does Power2Go offer?", a: "Power2Go offers a comprehensive range of energy storage solutions including Low Voltage (LV) Energy Storage Systems for commercial and industrial applications, High Voltage (HV) Energy Storage Systems for utility-scale deployments, Industrial Hybrid Energy Solutions integrating solar PV, battery storage, and diesel generation, and Power Conversion Systems (PCS) for intelligent energy management." },
      { q: "What battery chemistry does Power2Go use?", a: "Power2Go primarily uses Lithium Iron Phosphate (LiFePO₄) battery chemistry across our product range. LiFePO₄ is globally recognized as the safest and most reliable technology for stationary energy storage due to its superior thermal stability, 6,000+ cycle life, and excellent safety profile. Our portable PULSE power station uses NMC chemistry for maximum energy density." },
      { q: "What is the warranty on Power2Go products?", a: "All Power2Go products come with a 5-year standard warranty covering manufacturing defects and performance degradation. Extended warranty options are available for enterprise deployments." },
      { q: "Can Power2Go systems integrate with existing solar installations?", a: "Yes. Power2Go's Energy Management Systems are designed for seamless integration with existing solar PV installations. Our systems can optimize solar self-consumption by storing excess generation and discharging during peak hours." },
    ],
  },
  {
    category: "Technical",
    items: [
      { q: "What is a Battery Management System (BMS) and why is it important?", a: "A Battery Management System (BMS) is the intelligence layer that monitors and controls every aspect of battery performance — cell voltages, temperatures, current flow, state of charge, and state of health. It provides critical protection against over-voltage, under-voltage, over-current, and thermal issues. Power2Go systems feature a multi-layer BMS architecture with string-level monitoring for maximum safety and performance." },
      { q: "What is the typical lifespan of a Power2Go battery system?", a: "Power2Go's LiFePO₄ battery systems are designed for 6,000+ charge cycles. With daily cycling, this translates to 15–20 years of operational life. The actual lifespan depends on operating conditions, depth of discharge, and ambient temperature." },
      { q: "Can Power2Go systems operate during grid outages?", a: "Yes. Power2Go systems feature ultra-fast transition times of less than 10 milliseconds, ensuring uninterrupted power supply during utility outages. Our advanced grid-forming technology enables autonomous islanding operation." },
      { q: "What is peak shaving and how does it reduce electricity costs?", a: "Peak shaving is the practice of using stored battery energy during periods of highest demand to reduce the maximum power drawn from the grid. Since utility bills include demand charges based on peak consumption, this strategy can reduce commercial electricity costs by 20–40%." },
    ],
  },
  {
    category: "Industrial Applications",
    items: [
      { q: "Which industries benefit most from Power2Go solutions?", a: "Power2Go serves a wide range of industries including manufacturing, textiles, cement, chemicals, pharmaceuticals, food & beverage, data centers, telecommunications, commercial real estate, utilities, and renewable energy developers." },
      { q: "What is energy arbitrage?", a: "Energy arbitrage leverages time-of-use pricing structures by charging batteries during low-cost off-peak periods and discharging during high-cost peak periods. This strategy maximizes electricity cost savings without any change in consumption patterns." },
      { q: "How does Power2Go help with renewable energy optimization?", a: "Our systems capture excess solar generation during daylight hours and store it for use during evening and nighttime operations. This maximizes renewable energy utilization, reduces grid dependency, and improves the economics of solar investments." },
    ],
  },
  {
    category: "Services & Support",
    items: [
      { q: "What services does Power2Go provide?", a: "Power2Go offers end-to-end services including consulting and energy assessment, engineering and system design, procurement and integration, professional installation and commissioning, operations and maintenance, and 24/7 monitoring and asset management." },
      { q: "Does Power2Go provide installation services?", a: "Yes. Our certified engineering teams handle professional deployment and commissioning of all Power2Go systems. We provide full installation, testing, and handover documentation." },
      { q: "What after-sales support is available?", a: "Power2Go provides comprehensive after-sales support including 24/7 remote monitoring, predictive maintenance analytics, firmware updates, on-site service visits, and a dedicated priority support hotline at 111-P2G-247." },
      { q: "How can I request a consultation or quotation?", a: "You can contact our sales team through the contact form on our website, call us at 111-P2G-247, or email us at info@power2go.com.pk. We will arrange a free energy assessment and provide a customized solution design." },
    ],
  },
  {
    category: "Legal & Policies",
    items: [
      { q: "Where can I find Power2Go's Privacy Policy?", a: "You can view our complete Privacy Policy at our <a href=\"/privacy\" class=\"text-[#1447E6] hover:underline\">Privacy Policy page</a>. It explains how we collect, use, and protect your personal information." },
      { q: "What are Power2Go's Terms of Service?", a: "Our <a href=\"/terms\" class=\"text-[#1447E6] hover:underline\">Terms of Service</a> are available on our website. They govern your use of our website and services." },
      { q: "How does Power2Go use cookies?", a: "We use cookies to enhance your browsing experience. Full details are in our <a href=\"/cookies\" class=\"text-[#1447E6] hover:underline\">Cookie Policy</a>, including how to manage your preferences." },
    ],
  },
];

export default function FaqContent() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);

  const currentCategory = faqs.find((c) => c.category === activeCategory) ?? faqs[0];

  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/8.png`}
          alt="Power2Go frequently asked questions"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "FAQ" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Frequently Asked Questions</h1>
              <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100 leading-relaxed">
                Find answers to common questions about our products, technology, and services. Can&apos;t find what you&apos;re looking for? Our team is here to help.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-left delay-200">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Products</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Technical</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Industrial</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Support</span>
                </div>
              </div>
            </div>
            <AnimatedStatsSection className="hidden lg:grid grid-cols-2 gap-4 perspective-1000">
              <AnimatedStatCard index={0}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="14" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Answered Questions</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="4" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Topic Categories</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">24/7</p>
                  <p className="text-white/70 text-sm mt-1">Support Available</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={3}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">Free</p>
                  <p className="text-white/70 text-sm mt-1">Consultation</p>
                </div>
              </AnimatedStatCard>
            </AnimatedStatsSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {faqs.map((cat) => (
              <button
                key={cat.category}
                onClick={() => { setActiveCategory(cat.category); setOpenIndex(null); }}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  cat.category === activeCategory
                    ? "bg-[#1447E6] text-white shadow-md shadow-blue-200"
                    : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#1447E6]"
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>

          <div className="space-y-3 perspective-1000">
            {currentCategory.items.map((faq, i) => {
              const idx = i;
              const isOpen = openIndex === idx;
              return (
                <ScrollReveal3D key={i} direction="up" delay={i * 50}>
                <div className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left bg-white hover:bg-gray-50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-gray-900 pr-4">{faq.q}</span>
                    <svg
                      className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </button>
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      <p dangerouslySetInnerHTML={{ __html: faq.a }} />
                    </div>
                  )}
                </div>
                </ScrollReveal3D>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9] opacity-95" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Still Have Questions?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Our team is ready to help. Reach out for personalized assistance with your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/contact" className="group btn-3d inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Contact Us
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
