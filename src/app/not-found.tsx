import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#1447E6] to-[#01b0d9] flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-200">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Page Not Found</h2>
        <p className="text-gray-500 leading-relaxed mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M3 12h18M12 5l7 7-7 7" />
            </svg>
            Go Home
          </Link>
          <Link href="/products" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            View Products
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
