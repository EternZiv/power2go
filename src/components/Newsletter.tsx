"use client";
import React, { useState } from "react";

interface NewsletterProps {
  className?: string;
  variant?: "dark" | "light";
}

export function Newsletter({ className = "", variant = "dark" }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setErrorMsg("Please enter a valid email address.");
      setStatus("error");
      return;
    }
    setStatus("loading");
    try {
      const res = await fetch("https://formspree.io/f/yourNewsletterFormID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: trimmed }),
      });
      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setErrorMsg("Subscription failed. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  const isDark = variant === "dark";

  return (
    <div className={`${className}`}>
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className={`rounded-2xl p-8 md:p-12 text-center ${
          isDark ? "bg-gradient-to-br from-[#1447E6] to-[#01b0d9]" : "bg-gray-50 border border-gray-100"
        }`}>
          <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${isDark ? "text-white" : "text-gray-900"}`}>
            Stay Updated
          </h3>
          <p className={`text-base mb-6 max-w-lg mx-auto ${isDark ? "text-white/70" : "text-gray-500"}`}>
            Get the latest news, product updates, and energy saving tips delivered to your inbox.
          </p>

          {status === "success" ? (
            <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl ${
              isDark ? "bg-white/15 text-white" : "bg-green-50 text-green-700"
            }`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <span className="font-medium">Thanks for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" noValidate>
              <div className="flex-1">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => { setEmail(e.target.value); setStatus("idle"); }}
                  className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all ${
                    isDark
                      ? "bg-white/15 text-white placeholder:text-white/50 border border-white/20 focus:border-white/50 focus:bg-white/20"
                      : "bg-white border border-gray-200 text-gray-900 placeholder:text-gray-400 focus:border-[#1447E6] focus:ring-2 focus:ring-[#1447E6]/10"
                  } ${status === "error" ? "ring-2 ring-red-400" : ""}`}
                  aria-invalid={status === "error"}
                  aria-describedby={status === "error" ? "newsletter-error" : undefined}
                />
                {status === "error" && (
                  <p id="newsletter-error" className="text-red-400 text-xs mt-1 text-left">{errorMsg}</p>
                )}
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  isDark
                    ? "bg-white text-[#1447E6] hover:bg-gray-100 disabled:opacity-60"
                    : "bg-[#1447E6] text-white hover:bg-[#103ed6] disabled:opacity-60"
                }`}
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                      <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                    </svg>
                    Subscribing...
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
