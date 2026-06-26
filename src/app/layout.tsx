import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SkipToContent } from "@/components/SkipToContent";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://power2go.energy";
const siteName = "Power2Go";
const description = "Leading manufacturer of advanced battery storage systems for residential, commercial, and industrial applications. Maximize your energy independence with Power2Go.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1447E6" },
    { media: "(prefers-color-scheme: dark)", color: "#0b1322" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Advanced Energy Storage Solutions in Pakistan`,
    template: `%s | ${siteName}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: "Power2Go" }],
  generator: "Next.js",
  keywords: [
    "energy storage",
    "battery storage",
    "solar battery",
    "Pakistan",
    "residential",
    "commercial",
    "industrial",
    "LiFePO4",
    "power backup",
    "solar energy",
    "battery system",
  ],
  referrer: "origin-when-cross-origin",
  creator: "Power2Go",
  publisher: "Power2Go",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${siteName} | Advanced Energy Storage Solutions`,
    description,
    images: [
      {
        url: "/logo-light.png",
        width: 512,
        height: 512,
        alt: "Power2Go Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Advanced Energy Storage Solutions`,
    description,
    images: ["/logo-light.png"],
    creator: "@power2go",
  },
  icons: {
    icon: "/logo-light.png",
    shortcut: "/logo-light.png",
    apple: "/logo-light.png",
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteName,
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  category: "energy",
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
        <SkipToContent />
        <Header />
        <main id="main-content" className="flex-1 pt-14">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
