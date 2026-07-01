import type { Metadata } from "next";
import FaqContent from "./page-content";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find answers to common questions about Power2Go energy storage products, battery technology, technical specifications, services, and support.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ | Power2Go",
    description:
      "Find answers to common questions about Power2Go energy storage products, battery technology, technical specifications, services, and support.",
    images: [
      {
        url: "/images/8.png",
        width: 1200,
        height: 630,
        alt: "Power2Go frequently asked questions",
      },
    ],
  },
};

export default function FAQPage() {
  return <FaqContent />;
}
