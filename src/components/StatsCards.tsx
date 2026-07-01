"use client";

import React, { useState, useSyncExternalStore, useEffect, useRef } from "react";

interface StatItem {
  value: string;
  label: string;
}

interface StatsCardsProps {
  stats: StatItem[];
}

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

const iconSvgs = [
  <svg key="uptime" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="grade" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
  </svg>,
  <svg key="chip" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 002.25-2.25V6.75a2.25 2.25 0 00-2.25-2.25H6.75A2.25 2.25 0 004.5 6.75v10.5a2.25 2.25 0 002.25 2.25z" />
  </svg>,
  <svg key="clock" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
];

const transitionCss = "700ms cubic-bezier(0.22, 1, 0.36, 1)";

function CountUp({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [value, setValue] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / 1200, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [active, target]);

  const display = target === 99.9 ? value.toFixed(1) : String(Math.round(value));
  return <>{display}{suffix}</>;
}

export function StatsCards({ stats }: StatsCardsProps) {
  const [sectionVisible, setSectionVisible] = useState(false);
  const [itemStage, setItemStage] = useState(stats.map(() => 0));
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery("(max-width: 767px)");

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

  useEffect(() => {
    if (!sectionVisible) return;
    const timers: number[] = [];
    stats.forEach((_, i) => {
      timers.push(window.setTimeout(() => {
        setItemStage((prev) => {
          const n = [...prev];
          n[i] = 1;
          return n;
        });
      }, i * 120));
      timers.push(window.setTimeout(() => {
        setItemStage((prev) => {
          const n = [...prev];
          n[i] = 2;
          return n;
        });
      }, 400 + i * 120));
      timers.push(window.setTimeout(() => {
        setItemStage((prev) => {
          const n = [...prev];
          n[i] = 3;
          return n;
        });
      }, 800 + i * 120));
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [sectionVisible, stats]);

  const [glowState, setGlowState] = useState(stats.map(() => false));

  useEffect(() => {
    if (!sectionVisible) return;
    const timers: number[] = [];
    stats.forEach((_, i) => {
      timers.push(window.setTimeout(() => {
        setGlowState((prev) => {
          const n = [...prev];
          n[i] = true;
          return n;
        });
      }, i * 120 + 500));
      timers.push(window.setTimeout(() => {
        setGlowState((prev) => {
          const n = [...prev];
          n[i] = false;
          return n;
        });
      }, i * 120 + 900));
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [sectionVisible, stats]);

  const handleHover = (isMobile ? null : (i: number | null) => setHoveredId(i));

  return (
    <div
      ref={sectionRef}
      className="bg-[#0d1726] py-14 relative overflow-hidden"
      style={{
        opacity: sectionVisible ? 1 : 0,
        transform: sectionVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity ${transitionCss}, transform ${transitionCss}`,
      }}
    >
      <div className="gradient-line absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => {
            const stage = itemStage[i];
            const isActive = hoveredId === i;
            const isInactive = hoveredId !== null && hoveredId !== i;

            return (
              <div
                key={i}
                className="py-4 relative"
                style={{
                  transform: handleHover
                    ? isActive
                      ? "scale(1.12) translateY(-8px)"
                      : isInactive
                        ? "scale(0.95)"
                        : "scale(1)"
                    : "scale(1)",
                  opacity: handleHover && isInactive ? 0.65 : 1,
                  filter: handleHover && isInactive ? "blur(1.5px)" : "blur(0px)",
                  boxShadow: isActive
                    ? "0 20px 60px rgba(34,197,94,0.25), 0 8px 24px rgba(34,197,94,0.15)"
                    : isInactive
                      ? "0 1px 2px rgba(0,0,0,0.05)"
                      : "none",
                  zIndex: isActive ? 10 : 0,
                  transition: `transform ${transitionCss}, opacity ${transitionCss}, filter ${transitionCss}, box-shadow ${transitionCss}`,
                  willChange: "transform, opacity, filter",
                  transformStyle: "preserve-3d",
                }}
                onMouseEnter={() => handleHover?.(i)}
                onMouseLeave={() => handleHover?.(null)}
              >
                <div
                  className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-white/10 mb-3 mx-auto text-[#22c55e]"
                  style={{
                    opacity: stage >= 1 ? 1 : 0,
                    transform: stage >= 1 ? "scale(1)" : "scale(0.8)",
                    transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 400ms cubic-bezier(0.22, 1, 0.36, 1), scale ${transitionCss}`,
                    boxShadow: glowState[i]
                      ? "0 0 24px rgba(34,197,94,0.5)"
                      : "0 0 0px transparent",
                    scale: isActive ? "1.10" : "1",
                  }}
                >
                  {iconSvgs[i]}
                </div>

                <p
                  className="text-2xl md:text-3xl font-extrabold text-[#22c55e]"
                  style={{
                    opacity: stage >= 2 ? 1 : 0,
                    transform: stage >= 2 ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
                    color: isActive ? "#4ade80" : undefined,
                    transitionTimingFunction: isActive ? undefined : undefined,
                  }}
                >
                  {s.value === "99.9%" ? (
                    <CountUp target={99.9} suffix="%" active={stage >= 2} />
                  ) : s.value === "5 Years" ? (
                    <CountUp target={5} suffix=" Years" active={stage >= 2} />
                  ) : s.value === "A-Grade" || s.value === "Advanced" ? (
                    <ZeroFadeText value={s.value} active={stage >= 2} />
                  ) : (
                    s.value
                  )}
                </p>

                <p
                  className="text-white/60 text-sm mt-1 font-medium"
                  style={{
                    opacity: stage >= 3 ? 1 : 0,
                    transform: stage >= 3 ? "translateY(0)" : "translateY(8px)",
                    transition: `opacity 500ms cubic-bezier(0.22, 1, 0.36, 1), transform 500ms cubic-bezier(0.22, 1, 0.36, 1)`,
                  }}
                >
                  {s.label}
                </p>

                {i < stats.length - 1 && (
                  <div
                    className="absolute right-0 top-1/2 w-px bg-white/15"
                    style={{
                      height: "40%",
                      transform: stage >= 1 ? "scaleY(1)" : "scaleY(0)",
                      opacity: stage >= 1 ? 1 : 0,
                      transformOrigin: "center",
                      transition: `transform 700ms cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.1}s, opacity 700ms cubic-bezier(0.22, 1, 0.36, 1) ${0.1 + i * 0.1}s`,
                      boxShadow: "0 0 6px rgba(34,197,94,0.3)",
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ZeroFadeText({ value, active }: { value: string; active: boolean }) {
  const [showZero, setShowZero] = useState(true);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setShowZero(false), 400);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <span>
      <span
        style={{
          opacity: showZero ? 1 : 0,
          transition: "opacity 500ms cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        0
      </span>
      {value}
    </span>
  );
}
