import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Power2Go | Advanced Energy Storage Solutions in Pakistan",
  description:
    "Leading manufacturer of advanced battery storage systems for residential, commercial, and industrial applications. Maximize your energy independence with Power2Go.",
  keywords: "energy storage, battery storage, solar battery, Pakistan, residential, commercial, industrial, LiFePO4",
  openGraph: {
    title: "Power2Go | Advanced Energy Storage Solutions",
    description: "Discover cutting-edge battery storage systems for every application.",
    url: "https://power2go.energy",
    siteName: "Power2Go",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans antialiased overflow-x-hidden">
        <Header />
        <main className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
