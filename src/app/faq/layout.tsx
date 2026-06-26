import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Power2Go",
  description: "Frequently asked questions about Power2Go's energy storage solutions, products, services, and technology.",
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
