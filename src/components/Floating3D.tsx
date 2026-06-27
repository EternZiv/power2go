"use client";
import React, { useEffect, useRef } from "react";

interface Floating3DProps {
  children: React.ReactNode;
  className?: string;
  amplitude?: number;
  speed?: number;
  rotate?: number;
}

export function Floating3D({ children, className = "", amplitude = 6, speed = 3, rotate = 2 }: Floating3DProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const startY = 0;
    let startTime = Date.now();
    let raf: number;

    const animate = () => {
      const t = (Date.now() - startTime) / 1000;
      const y = Math.sin(t * speed) * amplitude;
      const r = Math.sin(t * speed * 0.7) * rotate;
      el.style.transform = `perspective(800px) translateY(${y}px) rotateX(${r}deg)`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [amplitude, speed, rotate]);

  return <div ref={ref} className={className}>{children}</div>;
}
