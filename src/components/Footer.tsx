"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/lib/basePath";

const socials = [
  {
    label: "Facebook", href: "https://facebook.com/power2go",
    color: "#1877F2",
    icon: <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />,
    viewBox: "0 0 24 24",
  },
  {
    label: "LinkedIn", href: "https://linkedin.com/company/power2go",
    color: "#0A66C2",
    icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />,
    viewBox: "0 0 24 24",
  },
  {
    label: "Twitter", href: "https://twitter.com/power2go",
    color: "#1DA1F2",
    icon: <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />,
    viewBox: "0 0 512 512",
  },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const productLinks = [
  { label: "Residential Systems", href: "/products" },
  { label: "Commercial Solutions", href: "/products" },
  { label: "Portable Solutions", href: "/products" },
  { label: "Industrial Solutions", href: "/products" },
];

const supportLinks = [
  { label: "Documentation", href: "/contact" },
  { label: "Installation Guidance", href: "/contact" },
  { label: "FAQs", href: "/faq" },
  { label: "Warranty", href: "/contact" },
  { label: "Contact Support", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0d1726] relative overflow-hidden" role="contentinfo">
      <div className="gradient-line absolute top-0 inset-x-0" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-10">
            {/* Brand */}
            <div className="lg:col-span-3">
              <Link href="/" className="flex items-center gap-2 mb-5" aria-label="Power2Go Home">
                <Image src={`${basePath}/logo-dark.png`} alt="Power2Go" width={160} height={40} className="h-9 w-auto" />
              </Link>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                Power2Go is Pakistan&apos;s leading manufacturer of advanced energy storage solutions, powering homes, businesses, and industries with clean, reliable energy.
              </p>
              <div className="flex items-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Power2Go on ${s.label}`}
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white/80 border border-white/20 bg-white/5 hover:-translate-y-0.5 transition-all duration-200"
                    style={{ '--hover-bg': s.color } as React.CSSProperties}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = s.color;
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'transparent';
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.05)';
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.2)';
                    }}
                  >
                    <svg viewBox={s.viewBox} fill="currentColor" className="w-4 h-4" aria-hidden="true">
                      {s.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-5">Quick Links</h3>
              <ul className="space-y-3" role="list">
                {quickLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 text-sm hover:text-white transition-colors duration-200">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-5">Products</h3>
              <ul className="space-y-3" role="list">
                {productLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 text-sm hover:text-white transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div className="lg:col-span-2">
              <h3 className="text-white font-bold text-base mb-5">Support</h3>
              <ul className="space-y-3" role="list">
                {supportLinks.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="text-white/60 text-sm hover:text-white transition-colors duration-200">{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="lg:col-span-3">
              <h3 className="text-white font-bold text-base mb-5">Contact</h3>
              <ul className="space-y-4" role="list">
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#50A2FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <div>
                    <p className="text-white/70 text-sm font-medium">Karachi Office</p>
                    <p className="text-white/50 text-xs">1D-27 Sector 30, Korangi Industrial Area, Karachi</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#50A2FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                  </svg>
                  <a href="tel:111-P2G-247" className="text-white/60 text-sm hover:text-blue-300 transition-colors">111-P2G-247</a>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#50A2FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                  <a href="mailto:info@power2go.energy" className="text-white/60 text-sm hover:text-blue-300 transition-colors">info@power2go.energy</a>
                </li>
              </ul>
            </div>
          </div>

        <div className="gradient-line mb-7 mt-12" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} Power2Go. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="/privacy" className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200">Terms of Service</Link>
            <Link href="/cookies" className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
