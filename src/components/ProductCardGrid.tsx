"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { QuickView } from "@/components/QuickView";
import { TiltCard } from "@/components/TiltCard";

interface ProductItem {
  slug: string;
  name: string;
  sku: string;
  category: string;
  capacity: string;
  power: string;
  warranty: string;
  tags: string[];
  gradient: string;
  images: string[];
  description?: string;
}

interface ProductCardGridProps {
  products: ProductItem[];
  columns?: 3 | 4;
}

export function ProductCardGrid({ products, columns = 4 }: ProductCardGridProps) {
  const router = useRouter();
  const [quickViewProduct, setQuickViewProduct] = useState<ProductItem | null>(null);

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 perspective-1000`}>
        {products.map((p, i) => (
          <TiltCard key={i} tiltDegree={5} glare={true}>
          <div
            className="product-card group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${i * 0.12}s` }}
            onClick={() => router.push(`/products/${p.slug}`)}
          >
            <div className={`relative h-52 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <Image
                src={p.images[0]}
                alt={p.name}
                fill
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${columns === 3 ? "33vw" : "25vw"}`}
              />
              <span className="absolute top-3 left-3 z-10 inline-flex items-center rounded-md px-2.5 py-1 font-medium text-xs bg-[#1447E6] text-white shadow-md">
                {p.category}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setQuickViewProduct(p);
                }}
                className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110"
                aria-label={`Quick view ${p.name}`}
              >
                <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
            </div>

            <div className="p-4 sm:p-5 flex flex-col flex-1">
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-[#1447E6] transition-colors text-lg leading-snug">{p.name}</h3>
              <p className="text-sm text-gray-500 mb-3">{p.sku}</p>

              {p.description && (
                <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">{p.description}</p>
              )}

              <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-gray-100">
                {[
                  { label: "Capacity", value: p.capacity, color: "text-blue-600" },
                  { label: "Power", value: p.power, color: "text-green-600" },
                  { label: "Warranty", value: p.warranty, color: "text-purple-600" },
                ].map((spec) => (
                  <div key={spec.label}>
                    <p className={`text-xs font-medium ${spec.color} mb-0.5`}>{spec.label}</p>
                    <p className="text-xs font-semibold text-gray-900">{spec.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded-md text-xs font-medium">{tag}</span>
                ))}
              </div>

            </div>

            <div className="px-5 pb-4 mt-auto">
              <span
                onClick={(e) => { e.stopPropagation(); router.push(`/products/${p.slug}`); }}
                className="group inline-flex items-center gap-1 text-[#1447E6] text-sm font-medium cursor-pointer hover:underline"
              >
                Learn more
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </div>
          </div>
          </TiltCard>
        ))}
      </div>

      {quickViewProduct && (
        <QuickView product={quickViewProduct} onClose={() => setQuickViewProduct(null)} />
      )}
    </>
  );
}
