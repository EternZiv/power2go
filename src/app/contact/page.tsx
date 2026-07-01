import type { Metadata } from "next";
import ContactContent from "./page-content";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Power2Go's team. Contact us for quotations, technical support, energy assessments, and more. Offices in Karachi and Lahore.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us | Power2Go",
    description:
      "Get in touch with Power2Go's team. Contact us for quotations, technical support, energy assessments, and more.",
    images: [
      {
        url: "/images/7.png",
        width: 1200,
        height: 630,
        alt: "Power2Go contact and support",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
