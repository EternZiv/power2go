"use client";
import React from "react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ reset }: ErrorProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-500 to-red-400 flex items-center justify-center mx-auto mb-8 shadow-lg shadow-red-200">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Something Went Wrong</h1>
        <p className="text-gray-500 leading-relaxed mb-8">
          An unexpected error occurred. Please try again or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={reset} className="btn-primary">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M1 4v6h6M23 20v-6h-6" />
              <path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
            </svg>
            Try Again
          </button>
          <a href="mailto:info@power2go.energy" className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl border-2 border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
