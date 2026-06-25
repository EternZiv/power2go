import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Blog | Power2Go – Energy Storage Insights & Updates",
  description: "Read the latest articles, guides, and industry news on energy storage technology from Power2Go.",
};

const articles = [
  {
    category: "Technology",
    tag: "Featured",
    title: "The Future of Residential Energy Storage in Pakistan",
    excerpt: "Energy storage systems are transforming homes across Pakistan, dramatically cutting electricity bills and providing resilience against load-shedding.",
    date: "March 15, 2026",
    readTime: "5 min read",
    color: "bg-blue-600",
    image: `${basePath}/images/9ffe617d218ca514485d2fc9add18954e09f1992.165a0bb0_4726.webp`,
  },
  {
    category: "Industry News",
    title: "LiFePO4 vs NMC: Which Battery Chemistry is Right for You?",
    excerpt: "Choosing the right battery chemistry is crucial for performance, safety, and longevity. We compare the two dominant lithium-ion technologies.",
    date: "February 28, 2026",
    readTime: "7 min read",
    color: "bg-green-600",
    image: `${basePath}/images/b513ab30d1b02dbe05d9d52d7e3e8a9aae208341.b861afc3_4a5c.webp`,
  },
  {
    category: "Tips & Guides",
    title: "How to Maximize Your Solar Battery System ROI",
    excerpt: "Smart usage habits and time-of-use optimization can dramatically increase the return on your energy storage investment.",
    date: "February 10, 2026",
    readTime: "4 min read",
    color: "bg-purple-600",
    image: `${basePath}/images/d302be08e4e938ad503ae31569661716ec3fc738.a0799d91_904f.webp`,
  },
  {
    category: "Case Studies",
    title: "How a Karachi Factory Cut Energy Costs by 60%",
    excerpt: "A detailed case study on how a medium-sized manufacturing facility used P2G Industrial PowerStack to reduce monthly electricity bills.",
    date: "January 22, 2026",
    readTime: "6 min read",
    color: "bg-orange-500",
    image: `${basePath}/images/2cdaeedf90e235319e8a7b8ed818acd496eda538.e5a9b81f_d2ba.webp`,
  },
  {
    category: "Technology",
    title: "Understanding Battery Management Systems (BMS)",
    excerpt: "The BMS is the brain of every energy storage system. Learn how it protects your battery, optimizes performance, and extends its lifespan.",
    date: "January 5, 2026",
    readTime: "8 min read",
    color: "bg-blue-600",
    image: `${basePath}/images/ad3f165e372f5048d4697f9bed1945fb35149239.2e1e00e8_7434.jpg`,
  },
  {
    category: "Industry News",
    title: "Pakistan's Energy Crisis: How Storage Can Help",
    excerpt: "With chronic power shortages impacting businesses and homes, distributed energy storage is emerging as a critical solution for Pakistan's grid.",
    date: "December 18, 2025",
    readTime: "5 min read",
    color: "bg-teal-600",
    image: `${basePath}/images/ea529c31d35fcbf1a139a1bce88295e077160b2b.a041b307_0155.webp`,
  },
];

const categories = ["All", "Technology", "Industry News", "Tips & Guides", "Case Studies"];

export default function BlogPage() {
  const [featured, ...rest] = articles;
  return (
    <>
      <section className="relative overflow-hidden min-h-[320px] md:min-h-[340px] flex items-center pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent" />
        <div className="absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-[#1447E6]/30 blur-3xl animate-pulse" />
        <div className="absolute left-[-60px] bottom-0 h-60 w-60 rounded-full bg-[#01b0d9]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Power2Go Blog</h1>
          <p className="text-white/80 text-lg animate-fade-in-left delay-100">
            Insights, updates, and guides on energy storage technology
          </p>
        </div>
      </section>

      <section className="py-10 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between animate-fade-in-up">
            <div className="relative w-full sm:w-80">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Search articles..."
                className="form-input pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    cat === "All"
                      ? "bg-[#1447E6] text-white shadow-md shadow-blue-200"
                      : "bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#1447E6]"
                  }`}
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
          <div className="blog-card mb-10 flex flex-col md:flex-row group animate-fade-in-up">
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
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> {featured.date}</span>
                <span className="flex items-center gap-1"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> {featured.readTime}</span>
              </div>
              <button className="inline-flex items-center gap-2 px-8 py-2.5 rounded-xl text-sm font-semibold text-white bg-[#1447E6] hover:bg-[#103ed6] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200 w-fit">
                Read Article
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article, i) => (
              <div key={i} className="blog-card cursor-pointer group animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
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
                  <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold text-white ${article.color} mb-3`}>
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#1447E6] transition-colors">{article.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg> {article.date}</span>
                    <span className="flex items-center gap-1"><svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> {article.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
