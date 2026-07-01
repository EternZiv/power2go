"use client";
import React, { useEffect, useState } from "react";
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
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = React.useCallback(() => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  }, [onClose]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleClose]);

  const dialogId = `quickview-${product.slug}`;
  const titleId = `${dialogId}-title`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${isClosing ? "pointer-events-none" : ""}`}
      onClick={handleClose}
    >
      <div className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${isClosing ? "animate-overlay-close" : "animate-overlay-open"}`} />
      <div
        className={`relative w-full max-w-[740px] bg-white rounded-2xl shadow-2xl overflow-hidden group ${isClosing ? "animate-modal-close" : "animate-modal-open"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white hover:shadow-lg hover:scale-[1.08] hover:rotate-90 transition-all duration-[250ms]"
          aria-label="Close"
        >
          <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="relative h-56 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.12),transparent_70%)] opacity-60 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
          <div className="absolute inset-0 animate-float-slow">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-contain p-6 transition-transform duration-500 hover:scale-[1.03]"
              sizes="(max-width: 740px) 100vw, 740px"
            />
          </div>
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#1447E6] text-white shadow-md ring-1 ring-white/30 backdrop-blur-sm hover:brightness-110 transition-all duration-200">
            {product.category}
          </span>
        </div>

        <div className="p-6">
          <h3 id={titleId} className="text-xl font-bold text-gray-900 mb-2 animate-fade-in-up">{product.name}</h3>
          <p className="text-sm text-gray-400 font-mono mb-3 animate-fade-in-up delay-100">{product.sku}</p>
          {product.description && (
            <p className="text-sm text-gray-600 mb-5 leading-relaxed animate-fade-in-up delay-200">{product.description}</p>
          )}
          <div className="grid grid-cols-3 gap-3 mb-5 pb-5 border-b border-gray-100">
            {[
              { label: "Capacity", value: product.capacity },
              { label: "Power", value: product.power },
              { label: "Warranty", value: product.warranty },
            ].map((spec, i) => (
              <div key={spec.label} className="animate-fade-in" style={{ animationDelay: `${0.3 + i * 0.08}s` }}>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{spec.label}</p>
                <p className="text-sm font-bold text-gray-900">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.tags.map((tag, i) => (
              <span key={tag} className="px-2.5 py-1 bg-blue-50 text-[#1447E6] rounded-md text-xs font-medium hover:-translate-y-0.5 hover:bg-blue-100 hover:shadow-sm transition-all duration-200 animate-fade-in" style={{ animationDelay: `${0.35 + i * 0.08}s` }}>{tag}</span>
            ))}
          </div>
          <Link
            href={`/products/${product.slug}`}
            onClick={handleClose}
            className="group w-full flex items-center justify-center gap-2 py-2.5 max-sm:min-h-[44px] rounded-lg text-sm font-semibold text-white bg-[#1447E6] hover:bg-[#103ed6] hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] active:scale-[0.98] transition-all duration-200"
          >
            View Full Details
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
