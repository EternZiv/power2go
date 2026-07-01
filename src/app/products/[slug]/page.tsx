import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TiltCard } from "@/components/TiltCard";
import { ScrollReveal3D } from "@/components/ScrollReveal3D";
import { ProductCardGrid } from "@/components/ProductCardGrid";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} | Power2Go`,
    description: product.description,
    alternates: {
      canonical: `/products/${slug}`,
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const relatedProducts = products
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const aMatch = a.category === product.category ? 1 : 0;
      const bMatch = b.category === product.category ? 1 : 0;
      return bMatch - aMatch;
    })
    .slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[100dvh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <Breadcrumb items={[{ label: "Products", href: "/products" }, { label: product.name }]} className="[&_*]:text-white/60" />
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Link href="/products" className="animate-fade-in-up delay-100 inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm mb-4 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Back to Products
              </Link>
              <span className="animate-fade-in-up delay-200 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                {product.category}
              </span>
              <h1 className="animate-fade-in-up delay-300 text-4xl md:text-5xl font-bold text-white mb-3">{product.name}</h1>
              <p className="animate-fade-in-up delay-400 text-white/70 text-lg font-mono mb-4">{product.sku}</p>
              <p className="animate-fade-in-up delay-500 text-white/80 text-base leading-relaxed max-w-lg">{product.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {product.tags.map((tag, i) => (
                  <span key={tag} className="animate-fade-in-blur px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium" style={{ animationDelay: `${0.6 + i * 0.1}s` }}>{tag}</span>
                ))}
              </div>
            </div>

            <div className="relative h-80 md:h-[28rem] rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 animate-fade-in-up delay-150 animate-float-slow">
              <div className="absolute inset-0 bg-[#22c55e]/10 blur-3xl animate-glow-pulse pointer-events-none" aria-hidden="true" />
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                className="object-contain p-6 transition-transform duration-700 hover:scale-105"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal3D direction="left">
            <div>
              <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Specifications</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Details</h2>
              <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden">
                {product.specs?.map((spec, i) => (
                  <div key={i} className={`spec-row-hover flex items-center justify-between px-6 py-4 ${i % 2 === 0 ? "bg-white" : ""}`}>
                    <span className="text-sm font-medium text-gray-500">{spec.label}</span>
                    <span className="text-sm font-bold text-gray-900">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            </ScrollReveal3D>

            <ScrollReveal3D direction="right">
            <div>
              <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Features</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3 mb-8">
                {product.features?.map((f, i) => (
                  <li key={i} className="feature-item-hover flex items-start gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0 transition-all duration-250" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                    <span className="text-sm leading-relaxed">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="quick-specs-card bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="font-bold text-gray-900 mb-3">Quick Specs</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Capacity", value: product.capacity },
                    { label: "Power", value: product.power },
                    { label: "Warranty", value: product.warranty },
                  ].map((spec) => (
                    <div key={spec.label}>
                      <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{spec.label}</p>
                      <p className="text-sm font-bold text-gray-900">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            </ScrollReveal3D>
          </div>
        </div>
      </section>

      {product.images.length > 1 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Gallery</span>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Product Views</h2>
              <p className="text-gray-500">Multiple angles of the {product.name}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 perspective-1000">
              {product.images.map((img, i) => (
                <ScrollReveal3D key={i} direction="up" delay={i * 100}>
                <TiltCard tiltDegree={3} glare={false}>
                <div className="relative h-72 rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm hover-lift-3d">
                  <Image
                    src={img}
                    alt={`${product.name} - view ${i + 1}`}
                    fill
                    className="object-contain p-8"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                </TiltCard>
                </ScrollReveal3D>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9] opacity-95 animate-gradient-shift" />
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="animate-fade-in-up delay-100 text-3xl md:text-4xl font-bold text-white mb-4">Interested in {product.name}?</h2>
          <p className="animate-fade-in-up delay-200 text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Contact our sales team for pricing, availability, and installation details.
          </p>
          <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="group btn-3d inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              Get a Quote
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link href="/products" className="btn-3d inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              Browse All Products
            </Link>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <span className="text-[#1447E6] font-semibold text-sm tracking-widest uppercase mb-3 block">Related Products</span>
              <h2 className="text-2xl font-bold text-gray-900">You May Also Like</h2>
            </div>
            <ProductCardGrid products={relatedProducts} columns={3} />
          </div>
        </section>
      )}
    </>
  );
}
