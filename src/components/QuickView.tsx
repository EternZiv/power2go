"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface QuickViewProduct {
  slug: string;
  name: string;
  sku: string;
  category: string;
  capacity: string;
  power: string;
  warranty: string;
  tags: string[];
  images: string[];
  description?: string;
  voltage?: string;
  cells?: string;
}

interface QuickViewProps {
  product: QuickViewProduct;
  onClose: () => void;
}

export function QuickView({ product, onClose }: QuickViewProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const dialogId = `quickview-${product.slug}`;
  const titleId = `${dialogId}-title`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-gray-100 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-48 bg-gradient-to-br from-gray-50 to-slate-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-contain p-6"
            sizes="(max-width: 512px) 100vw, 512px"
          />
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-md text-xs font-semibold bg-[#1447E6] text-white shadow-md">
            {product.category}
          </span>
        </div>

        <div className="p-6">
          <h3 id={titleId} className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-400 font-mono mb-3">{product.sku}</p>
          {product.description && (
            <p className="text-sm text-gray-600 mb-4 leading-relaxed">{product.description}</p>
          )}
          <div className="grid grid-cols-3 gap-3 mb-4 pb-4 border-b border-gray-100">
            <div>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Capacity</p>
              <p className="text-sm font-bold text-gray-900">{product.capacity}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Power</p>
              <p className="text-sm font-bold text-gray-900">{product.power}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Warranty</p>
              <p className="text-sm font-bold text-gray-900">{product.warranty}</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {product.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 bg-blue-50 text-[#1447E6] rounded-md text-xs font-medium">{tag}</span>
            ))}
          </div>
          <Link
            href={`/products/${product.slug}`}
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-2.5 max-sm:min-h-[44px] rounded-lg text-sm font-semibold text-white bg-[#1447E6] hover:bg-[#103ed6] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-200"
          >
            View Full Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
