"use client";

import React, { useState, useSyncExternalStore, useEffect, useRef, createContext, useContext } from "react";

interface StatsContextValue {
  hoveredId: number | null;
  setHoveredId: (id: number | null) => void;
  isMobile: boolean;
  reducedMotion: boolean;
}

const StatsContext = createContext<StatsContextValue | null>(null);

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

export function useStatsContext() {
  const ctx = useContext(StatsContext);
  if (!ctx) throw new Error("useStatsContext must be used within AnimatedStatsSection");
  return ctx;
}

interface AnimatedStatsSectionProps {
  children: React.ReactNode;
  className?: string;
  disableHover?: boolean;
}

const transitionEasing = "cubic-bezier(0.22, 1, 0.36, 1)";

export function AnimatedStatsSection({ children, className = "", disableHover = false }: AnimatedStatsSectionProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSectionVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hoverDisabled = disableHover || isMobile || reducedMotion;

  return (
    <StatsContext.Provider value={{ hoveredId, setHoveredId, isMobile, reducedMotion }}>
      <div
        ref={sectionRef}
        className={className}
        style={{
          opacity: sectionVisible ? 1 : 0,
          transform: sectionVisible ? "translateY(0)" : "translateY(30px)",
          transition: `opacity 700ms ${transitionEasing}, transform 700ms ${transitionEasing}`,
          willChange: hoverDisabled ? "auto" : "transform, filter, opacity",
        }}
        onMouseLeave={() => { if (!hoverDisabled) setHoveredId(null); }}
      >
        {children}
      </div>
    </StatsContext.Provider>
  );
}
