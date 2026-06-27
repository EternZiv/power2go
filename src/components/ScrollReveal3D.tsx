"use client";
import React, { useEffect, useRef, useState } from "react";

interface ScrollReveal3DProps {
  children: React.ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
}

export function ScrollReveal3D({ children, className = "", direction = "up", delay = 0 }: ScrollReveal3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setRevealed(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    const px = 60;
    const deg = 15;
    switch (direction) {
      case "up":    return `perspective(800px) translateY(${px}px) rotateX(${deg}deg)`;
      case "down":  return `perspective(800px) translateY(${-px}px) rotateX(${-deg}deg)`;
      case "left":  return `perspective(800px) translateX(${px}px) rotateY(${-deg}deg)`;
      case "right": return `perspective(800px) translateX(${-px}px) rotateY(${deg}deg)`;
    }
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? "perspective(800px) translate(0) rotateX(0) rotateY(0)" : getTransform(),
        transition: `opacity 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98), transform 0.8s cubic-bezier(0.21, 0.47, 0.32, 0.98)`,
      }}
    >
      {children}
    </div>
  );
}
