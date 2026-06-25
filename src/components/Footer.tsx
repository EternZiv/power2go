"use client";

import Link from "next/link";
import Image from "next/image";
import { FadeInStagger, FadeInStaggerItem } from "@/components/animations";
import { basePath } from "@/lib/basePath";

export function Footer() {
  return (
    <footer className="bg-[#0d1726]">
      <div className="gradient-line" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <FadeInStagger>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

            {/* Brand column */}
            <FadeInStaggerItem className="lg:col-span-3">
              <Link href="/" className="inline-block mb-5">
                <Image src={`${basePath}/logo-light.png`} alt="Power2Go" width={160} height={40} className="h-9 w-auto brightness-0 invert" />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
                Leading manufacturer of advanced energy storage solutions for residential, commercial, and industrial applications.
              </p>
              <div className="flex gap-2.5">
                {[
                  { label: "LinkedIn", href: "#", color: "#0A66C2", icon: <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />, viewBox: "0 0 448 512" },
                  { label: "YouTube", href: "#", color: "#FF0000", icon: <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />, viewBox: "0 0 576 512" },
                  { label: "Facebook", href: "#", color: "#1877F2", icon: <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />, viewBox: "0 0 512 512" },
                  { label: "Instagram", href: "#", color: "#E4405F", icon: <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />, viewBox: "0 0 448 512" },
                  { label: "Twitter", href: "#", color: "#1DA1F2", icon: <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />, viewBox: "0 0 512 512" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
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
                    <svg viewBox={s.viewBox} fill="currentColor" className="w-4 h-4">{s.icon}</svg>
                  </a>
                ))}
              </div>
            </FadeInStaggerItem>

            {/* Products */}
            <FadeInStaggerItem className="lg:col-span-3">
              <h3 className="text-white font-bold text-base mb-5">Products</h3>
              <ul className="space-y-3">
                {["Residential Systems", "Commercial Solutions", "Portable Solutions", "Industrial Solutions"].map((item) => (
                  <li key={item}>
                    <Link href="/products" className="text-white/60 text-sm hover:text-white transition-colors duration-200">{item}</Link>
                  </li>
                ))}
              </ul>
            </FadeInStaggerItem>

            {/* Support */}
            <FadeInStaggerItem className="lg:col-span-3">
              <h3 className="text-white font-bold text-base mb-5">Support</h3>
              <ul className="space-y-3">
                {[
                  ["Documentation", "/"],
                  ["Installation Guidance", "/"],
                  ["FAQs", "/"],
                  ["Warranty", "/"],
                  ["Contact Support", "/contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <Link href={href} className="text-white/60 text-sm hover:text-white transition-colors duration-200">{label}</Link>
                  </li>
                ))}
              </ul>
            </FadeInStaggerItem>

            {/* Contact */}
            <FadeInStaggerItem className="lg:col-span-3">
              <h3 className="text-white font-bold text-base mb-5">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#50A2FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                  <span className="text-white/60 text-sm leading-snug">1D-27 Sector 30, Korangi Karachi, Pakistan</span>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#50A2FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-white/60 text-sm">Karachi: 111-P2G-247</span>
                    <span className="text-white/60 text-sm">Lahore: (042) 3591 1165-69</span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <svg className="w-4 h-4 text-[#50A2FF] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>
                  <a href="mailto:info@power2go.energy" className="text-white/60 text-sm hover:text-blue-300 transition-colors">info@power2go.energy</a>
                </li>
              </ul>
            </FadeInStaggerItem>
          </div>
        </FadeInStagger>

        <div className="gradient-line mb-7" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-white/40 text-sm">© 2026 Power2Go. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-white/50 text-sm hover:text-white/80 transition-colors duration-200">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
