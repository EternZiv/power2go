"use client";

import React, { useState, useSyncExternalStore } from "react";
import Link from "next/link";

export interface FocusCardItem {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href?: string;
  iconBg?: string;
}

interface FocusCardsProps {
  items: FocusCardItem[];
  gridClass?: string;
  cardClass?: string;
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

const transitionCss = "350ms cubic-bezier(0.22, 1, 0.36, 1)";

export function FocusCards({ items, gridClass, cardClass }: FocusCardsProps) {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 639px)");

  const gridStyles = gridClass || "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5";

  function renderCard(item: FocusCardItem, i: number, isActive: boolean, isInactive: boolean) {
    const content = (
      <>
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 text-2xl ${
            item.iconBg
              ? isActive
                ? item.iconBg.replace("100", "200")
                : item.iconBg
              : ""
          }`}
          style={{
            transform: isActive ? "scale(1.1)" : "scale(1)",
            transition: `transform ${transitionCss}`,
          }}
        >
          {item.icon}
        </div>
        <h3
          className="text-lg font-bold text-gray-900 mb-2"
          style={{
            color: isActive ? "#1447E6" : undefined,
            transition: `color ${transitionCss}`,
          }}
        >
          {item.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
        {item.href && (
          <div
            className="mt-4 flex items-center gap-1 text-[#1447E6] text-sm font-medium"
            style={{
              transform: isActive ? "translateX(4px)" : "translateX(0)",
              transition: `transform ${transitionCss}`,
            }}
          >
            Learn more
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        )}
      </>
    );

    if (item.href) {
      return (
        <Link
          key={i}
          href={item.href}
          className={cardClass || "sol-card"}
          style={{
            transform: isActive ? "scale(1.18)" : isInactive ? "scale(0.90)" : "scale(1)",
            opacity: isInactive ? 0.75 : 1,
            filter: isInactive ? "blur(2px) saturate(0.9)" : "none",
            boxShadow: isActive
              ? "0 24px 64px rgba(20,71,230,0.18), 0 8px 24px rgba(20,71,230,0.10)"
              : isInactive
                ? "0 1px 2px rgba(0,0,0,0.04)"
                : "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
            zIndex: isActive ? 10 : 0,
            transition: `transform ${transitionCss}, opacity ${transitionCss}, filter ${transitionCss}, box-shadow ${transitionCss}`,
            willChange: "transform, filter, opacity",
          }}
          onMouseEnter={() => setHoveredId(i)}
          onMouseLeave={() => setHoveredId(null)}
          aria-label={`Learn more about ${item.title}`}
        >
          {content}
        </Link>
      );
    }

    return (
      <div
        key={i}
        className={cardClass || "sol-card"}
        style={{
          transform: isActive ? "scale(1.18)" : isInactive ? "scale(0.90)" : "scale(1)",
          opacity: isInactive ? 0.75 : 1,
          filter: isInactive ? "blur(2px) saturate(0.9)" : "none",
          boxShadow: isActive
            ? "0 24px 64px rgba(20,71,230,0.18), 0 8px 24px rgba(20,71,230,0.10)"
            : isInactive
              ? "0 1px 2px rgba(0,0,0,0.04)"
              : "0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.04)",
          zIndex: isActive ? 10 : 0,
          transition: `transform ${transitionCss}, opacity ${transitionCss}, filter ${transitionCss}, box-shadow ${transitionCss}`,
          willChange: "transform, filter, opacity",
        }}
        onMouseEnter={() => setHoveredId(i)}
        onMouseLeave={() => setHoveredId(null)}
      >
        {content}
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className={gridStyles}>
        {items.map((item, i) => (
          item.href ? (
            <Link
              key={i}
              href={item.href}
              className={cardClass || "sol-card"}
              aria-label={`Learn more about ${item.title}`}
            >
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 text-2xl ${item.iconBg || ""}`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              {item.href && (
                <div className="mt-4 flex items-center gap-1 text-[#1447E6] text-sm font-medium">
                  Learn more
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </Link>
          ) : (
            <div key={i} className={cardClass || "sol-card"}>
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 text-2xl ${item.iconBg || ""}`}>
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          )
        ))}
      </div>
    );
  }

  return (
    <div className={gridStyles}>
      {items.map((item, i) => renderCard(item, i, hoveredId === i, hoveredId !== null && hoveredId !== i))}
    </div>
  );
}
