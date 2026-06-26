import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={`mb-6 ${className}`}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <Link href="/" className="text-gray-400 hover:text-[#1447E6] transition-colors" itemProp="item">
            <span itemProp="name">Home</span>
          </Link>
          <meta itemProp="position" content="1" />
        </li>
        {items.map((item, index) => {
          const position = index + 2;
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="flex items-center gap-1.5" itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
              <svg className="w-3.5 h-3.5 text-gray-300 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 18l6-6-6-6" />
              </svg>
              {isLast || !item.href ? (
                <span className="text-gray-600 font-medium" itemProp="name" aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="text-gray-400 hover:text-[#1447E6] transition-colors" itemProp="item">
                  <span itemProp="name">{item.label}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(position)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
