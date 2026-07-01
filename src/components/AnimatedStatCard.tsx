"use client";

import React, { useState, useEffect } from "react";
import { useStatsContext } from "./AnimatedStatsSection";

interface AnimatedStatCardProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const transitionEasing = "cubic-bezier(0.22, 1, 0.36, 1)";

export function AnimatedStatCard({ children, index, className = "" }: AnimatedStatCardProps) {
  const { hoveredId, setHoveredId, isMobile, reducedMotion } = useStatsContext();
  const [visible, setVisible] = useState(false);

  const isActive = hoveredId === index;
  const isInactive = hoveredId !== null && hoveredId !== index;
  const hoverDisabled = isMobile || reducedMotion;

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), index * 120);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hoverDisabled
            ? "scale(1)"
            : isActive
              ? "scale(1.12) translateY(-8px)"
              : isInactive
                ? "scale(0.95)"
                : "scale(1)"
          : "scale(0.95) translateY(10px)",
        filter: hoverDisabled ? "none" : isInactive ? "blur(1.5px)" : "blur(0px)",
        transition: `transform 700ms ${transitionEasing}, opacity 700ms ${transitionEasing}, filter 700ms ${transitionEasing}`,
        willChange: "transform, opacity, filter",
      }}
      onMouseEnter={() => { if (!hoverDisabled) setHoveredId(index); }}
    >
      {children}
    </div>
  );
}
