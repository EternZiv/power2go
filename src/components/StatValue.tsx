"use client";

import React, { useEffect, useRef, useState } from "react";

interface StatValueProps {
  value: string;
  className?: string;
  as?: "span" | "p";
}

export function StatValue({ value, className = "", as: Tag = "span" }: StatValueProps) {
  const numMatch = value.match(/^([\d.]+)(.*)$/);
  const isNumeric = numMatch !== null && !isNaN(parseFloat(numMatch[1]));
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const done = useRef(false);

  useEffect(() => {
    if (!isNumeric || !numMatch) return;
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !done.current) {
          done.current = true;
          const target = parseFloat(numMatch[1]);
          const suffix = numMatch[2] || "";
          const startTime = performance.now();
          const decimals = value.includes(".") ? 1 : 0;
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / 1200, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(target * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [isNumeric, numMatch, value]);

  if (!isNumeric) {
    return <Tag className={className}>{value}</Tag>;
  }

  const target = parseFloat(numMatch![1]);
  const suffix = numMatch![2] || "";
  const decimals = value.includes(".") ? 1 : 0;
  const display = decimals ? displayed.toFixed(decimals) : String(Math.round(displayed));

  return <Tag ref={ref as any} className={className}>{display}{suffix}</Tag>;
}
