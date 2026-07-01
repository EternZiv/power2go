import type { Metadata } from "next";
import BlogContent from "./page-content";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Power2Go blog — insights, updates, and expert guides on energy storage technology, battery chemistry, solar integration, and maximizing your energy independence.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Blog | Power2Go",
    description:
      "Power2Go blog — insights, updates, and expert guides on energy storage technology, battery chemistry, solar integration, and maximizing your energy independence.",
    images: [
      {
        url: "/images/6.png",
        width: 1200,
        height: 630,
        alt: "Power2Go blog",
      },
    ],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
