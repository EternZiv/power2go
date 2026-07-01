"use client";
import React, { useState, useEffect, useRef, useCallback, useSyncExternalStore } from "react";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Power2Go's residential battery system has completely transformed our home. We haven't seen a single power outage interruption since installation, and our electricity bill dropped by over 60%. The monitoring app gives us full visibility into our energy usage.",
    name: "Ahmed Raza",
    title: "Homeowner",
    company: "Karachi",
    rating: 5,
  },
  {
    quote: "We installed the P2G HV Energy Vault for our office building and the results have been outstanding. The peak demand management alone saved us 40% on our monthly bills. The installation was seamless and the support team has been exceptional.",
    name: "Fatima Hassan",
    title: "Operations Director",
    company: "Tech Solutions Pvt Ltd",
    rating: 5,
  },
  {
    quote: "As a manufacturing facility, power quality is critical for our equipment. The industrial PowerStack system has not only eliminated costly downtime but also improved our power factor. The ROI has been even better than projected.",
    name: "Usman Khan",
    title: "Plant Manager",
    company: "Orient Industries",
    rating: 5,
  },
];

const companyLogos = [
  { name: "Multinet", className: "text-white/30" },
  { name: "Orient Power", className: "text-white/30" },
  { name: "Tech Solutions", className: "text-white/30" },
  { name: "Green Energy Corp", className: "text-white/30" },
  { name: "Pakistan Solar", className: "text-white/30" },
];

function useMediaQuery(query: string): boolean {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(query);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(query).matches,
    () => false,
  );
}

interface TestimonialsProps {
  className?: string;
}

export function Testimonials({ className = "" }: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animState, setAnimState] = useState<'idle' | 'fadeOut' | 'fadeIn'>('idle');
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef(0);

  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const goTo = useCallback((index: number) => {
    if (reducedMotion) {
      setActiveIndex(index);
      return;
    }
    if (animState !== 'idle') return;
    setAnimState('fadeOut');
    setTimeout(() => {
      setActiveIndex(index);
      setAnimState('fadeIn');
      setTimeout(() => {
        setAnimState('idle');
      }, 400);
    }, 300);
  }, [animState, reducedMotion]);

  const goToNext = useCallback(() => {
    goTo((activeIndex + 1) % testimonials.length);
  }, [activeIndex, goTo]);

  const goToPrev = useCallback(() => {
    goTo((activeIndex - 1 + testimonials.length) % testimonials.length);
  }, [activeIndex, goTo]);

  useEffect(() => {
    if (reducedMotion || paused || animState !== 'idle') return;
    const id = setTimeout(goToNext, 2000);
    return () => clearTimeout(id);
  }, [activeIndex, reducedMotion, paused, animState, goToNext]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goToNext();
      else goToPrev();
    }
  };

  const isIdle = animState === 'idle';
  const isFadeOut = animState === 'fadeOut';
  const isFadeIn = animState === 'fadeIn';

  const current = testimonials[activeIndex];

  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726] via-[#1447E6]/90 to-[#0d1726]" />
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#22c55e]/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-14 animate-fade-in-up">
          <span className="text-[#22c55e] font-semibold text-sm tracking-widest uppercase mb-3 block">Testimonials</span>
          <h2 className="text-3xl md:text-[36px] font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Hear from homeowners, businesses, and industry partners who trust Power2Go.
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          ref={containerRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12"
            style={{
              opacity: isIdle ? 1 : isFadeOut ? 0 : 1,
              transform: isFadeOut ? 'translateZ(0) scale(0.96)' : 'translateZ(0) scale(1)',
              transition: isFadeOut
                ? 'opacity 300ms, transform 300ms'
                : isFadeIn
                  ? 'opacity 400ms cubic-bezier(0.22, 1, 0.36, 1), transform 400ms cubic-bezier(0.22, 1, 0.36, 1)'
                  : 'none',
              willChange: 'transform, opacity',
            }}
          >
            <div className="flex items-center gap-1 mb-6">
              {Array.from({ length: current.rating }).map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 italic">
              &ldquo;{current.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1447E6] to-[#01b0d9] flex items-center justify-center text-white font-bold text-lg">
                {current.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <p className="text-white font-semibold">{current.name}</p>
                <p className="text-white/50 text-sm">{current.title}, {current.company}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6" role="tablist" aria-label="Testimonial selection">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  if (i === activeIndex) return;
                  if (reducedMotion) setActiveIndex(i);
                  else goTo(i);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "bg-white w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`View testimonial ${i + 1}`}
                aria-selected={i === activeIndex}
                role="tab"
              />
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-10">
          <p className="text-center text-white/40 text-sm mb-6 uppercase tracking-wider font-medium">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
            {companyLogos.map((logo) => (
              <div key={logo.name} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/40 text-xs font-bold">
                  {logo.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                </div>
                <span className="text-white/40 text-sm font-medium">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
