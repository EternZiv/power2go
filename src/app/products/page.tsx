"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { products } from "@/lib/products";
import { ProductCardGrid } from "@/components/ProductCardGrid";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedStatsSection } from "@/components/AnimatedStatsSection";
import { AnimatedStatCard } from "@/components/AnimatedStatCard";
import { StatValue } from "@/components/StatValue";

const categories = ["All", "Residential", "Commercial", "Industrial", "Portable", "Monitoring"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/5.png`}
          alt="Power2Go product range - energy storage systems"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Products" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">
                Our Products
              </h1>
              <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100 leading-relaxed">
                Explore our complete range of advanced energy storage systems built for every application. From residential backup to industrial-scale power, we have the solution for you.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-left delay-200">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>LiFePO₄ Battery</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>6,000+ Cycles</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Smart BMS</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>5 Year Warranty</span>
                </div>
              </div>
            </div>
            <AnimatedStatsSection className="hidden lg:grid grid-cols-2 gap-4 perspective-1000">
              <AnimatedStatCard index={0}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="6" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Product Models</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">5Wh-150kWh</p>
                  <p className="text-white/70 text-sm mt-1">Capacity Range</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="98%" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Round-Trip Efficiency</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={3}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">CE, UL</p>
                  <p className="text-white/70 text-sm mt-1">Certified</p>
                </div>
              </AnimatedStatCard>
            </AnimatedStatsSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12 justify-center animate-fade-in-up">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  cat === activeCategory
                    ? "bg-[#1447E6] text-white shadow-md shadow-blue-200"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-[#1447E6] hover:text-[#1447E6] hover:shadow-sm"
                }`}
                aria-pressed={cat === activeCategory}
              >
                {cat}
              </button>
            ))}
          </div>

          <ProductCardGrid products={filtered} columns={3} />
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
            <Link href="/contact" className="group btn-3d inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Contact Sales
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/solutions" className="btn-3d inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              View Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
