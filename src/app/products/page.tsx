import type { Metadata } from "next";
import ProductsContent from "./page-content";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore Power2Go's complete range of advanced energy storage systems including residential, commercial, industrial, and portable solutions with LiFePO₄ battery technology.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Products | Power2Go",
    description:
      "Explore Power2Go's complete range of advanced energy storage systems including residential, commercial, industrial, and portable solutions with LiFePO₄ battery technology.",
    images: [
      {
        url: "/images/5.png",
        width: 1200,
        height: 630,
        alt: "Power2Go product range",
      },
    ],
  },
};

export default function ProductsPage() {
  return <ProductsContent />;
}
