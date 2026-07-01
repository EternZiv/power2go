"use client";
import React, { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
  className?: string;
}

function parseValue(value: string): { prefix: string; number: number; suffix: string } {
  const match = value.match(/^([^\d]*)([\d,.]+)([^\d]*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  const num = parseFloat(match[2].replace(/,/g, ""));
  return { prefix: match[1] || "", number: isNaN(num) ? 0 : num, suffix: match[3] || "" };
}

export function AnimatedCounter({ value, duration = 1500, className = "" }: AnimatedCounterProps) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const { prefix, number: target, suffix } = parseValue(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(Math.round(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  const displayStr = target >= 1000 ? displayed.toLocaleString() : String(displayed);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayStr}{suffix}
    </span>
  );
}
