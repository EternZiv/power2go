"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { basePath } from "@/lib/basePath";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/solutions", label: "Solutions" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact Us" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 border-b border-white/30"
          : "bg-white/60 backdrop-blur-xl border-b border-white/20"
      }`}
      role="banner"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-[52px]">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0" aria-label="Power2Go Home">
            <Image
              src={`${basePath}/logo-light.png`}
              alt="Power2Go"
              width={110}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? "text-[#1447E6] bg-blue-50/50 active"
                      : "text-gray-700 hover:text-[#1447E6] hover:bg-gray-50"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                {menuOpen ? (
                  <><path d="M6 18L18 6M6 6l12 12" /></>
                ) : (
                  <><path d="M4 6h16M4 12h16M4 18h16" /></>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-white/30 shadow-lg animate-fade-in" role="navigation" aria-label="Mobile navigation">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-blue-50 text-[#1447E6]"
                      : "text-gray-700 hover:bg-gray-50 hover:text-[#1447E6]"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
