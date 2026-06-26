import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore our full range of energy storage systems: residential, commercial, industrial, portable, and monitoring solutions.",
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
