"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { basePath } from "@/lib/basePath";
import { articles } from "@/lib/blog";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TiltCard } from "@/components/TiltCard";
import { Floating3D } from "@/components/Floating3D";
import { ScrollReveal3D } from "@/components/ScrollReveal3D";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const categoryColors: Record<string, string> = {
  Technology: "bg-blue-600",
  "Industry News": "bg-green-600",
  "Tips & Guides": "bg-purple-600",
  "Case Studies": "bg-orange-500",
};

const categories = ["All", "Technology", "Industry News", "Tips & Guides", "Case Studies"];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featured = articles.find((a) => a.featured) ?? articles[0];
  const rest = articles.filter((a) => a.slug !== featured.slug);
  const filtered = activeCategory === "All" ? rest : rest.filter((a) => a.category === activeCategory);

  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/6.png`}
          alt="Power2Go blog - energy storage insights and guides"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Power2Go Blog</h1>
              <p className="text-white/80 text-lg max-w-2xl animate-fade-in-left delay-100 leading-relaxed">
                Insights, updates, and expert guides on energy storage technology, battery chemistry, solar integration, and maximizing your energy independence.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-left delay-200">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Expert Insights</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Industry News</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Tips & Guides</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-right delay-300 perspective-1000">
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={2}><p className="text-3xl font-bold text-[#22c55e]"><AnimatedCounter value="6" /></p></Floating3D>
                <p className="text-white/70 text-sm mt-1">Articles Published</p>
              </div></TiltCard>
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={2.5}><p className="text-3xl font-bold text-[#22c55e]"><AnimatedCounter value="4" /></p></Floating3D>
                <p className="text-white/70 text-sm mt-1">Topic Categories</p>
              </div></TiltCard>
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={3}><p className="text-3xl font-bold text-[#22c55e]">Monthly</p></Floating3D>
                <p className="text-white/70 text-sm mt-1">New Articles</p>
              </div></TiltCard>
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={3.5}><p className="text-3xl font-bold text-[#22c55e]">Free</p></Floating3D>
                <p className="text-white/70 text-sm mt-1">Resource Library</p>
              </div></TiltCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between animate-fade-in-up">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    cat === activeCategory
                      ? "bg-[#1447E6] text-white shadow-md shadow-blue-200"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#1447E6]"
                  }`}
                  aria-pressed={cat === activeCategory}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeCategory === "All" && (
            <TiltCard tiltDegree={3} glare={false}>
            <Link
              href={`/blog/${featured.slug}`}
              className="blog-card mb-10 flex flex-col md:flex-row group animate-fade-in-up"
            >
              <div className="md:w-2/5 relative min-h-[220px] bg-gradient-to-br from-blue-50 to-slate-100 overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-center flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 rounded-full bg-[#1447E6] text-white text-xs font-semibold">Featured</span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 text-[#1447E6] text-xs font-medium">{featured.category}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#1447E6] transition-colors">{featured.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-5">
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> {featured.date}</span>
                  <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> {featured.readTime}</span>
                </div>
                <span className="inline-flex items-center gap-2 px-8 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1447E6] hover:bg-[#103ed6] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 w-fit">
                  Read Article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
            </TiltCard>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 perspective-1000">
            {filtered.map((article, i) => (
              <ScrollReveal3D key={article.slug} direction="up" delay={i * 100}>
              <TiltCard tiltDegree={4} glare={false}>
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="blog-card group animate-fade-in-up"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="relative h-40 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${categoryColors[article.category] ?? "bg-gray-600"} mb-3`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1447E6] transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> {article.date}</span>
                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> {article.readTime}</span>
                  </div>
                </div>
              </Link>
              </TiltCard>
              </ScrollReveal3D>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
