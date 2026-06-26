import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cookie Policy | Power2Go",
  description: "Power2Go's cookie policy explaining how we use cookies and similar technologies on our website.",
};

export default function CookiesPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/11.png`}
          alt="Power2Go cookie policy"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Cookie Policy" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Cookie Policy</h1>
            <p className="text-white/80 text-lg animate-fade-in-left delay-100">Last updated: June 2026</p>
            <p className="text-white/60 text-sm mt-4 max-w-2xl animate-fade-in-left delay-200">
              Learn how we use cookies and similar technologies to enhance your browsing experience on our website.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. What Are Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how you interact with the site, and improve your browsing experience.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Use Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-5">Power2Go uses cookies for the following purposes:</p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Cookie Type</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Purpose</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Duration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Essential", "Required for website functionality and security", "Session"],
                    ["Preference", "Remember your settings and preferences", "1 year"],
                    ["Analytics", "Understand how visitors use our website", "2 years"],
                    ["Marketing", "Deliver relevant content and advertisements", "90 days"],
                  ].map((row, i) => (
                    <tr key={i} className="border-t border-gray-100">
                      {row.map((cell, ci) => (
                        <td key={ci} className="px-4 py-3 text-gray-600">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We may use third-party services such as Google Analytics to analyze website traffic. These services may set their own cookies. We do not control these cookies and recommend reviewing the privacy policies of these third parties.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Managing Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Block all cookies</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Delete existing cookies</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Set preferences for specific websites</span>
              </li>
            </ul>
            <p className="text-gray-600 leading-relaxed mb-5">
              Please note that blocking essential cookies may affect website functionality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Contact</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              If you have questions about our use of cookies, please contact us at <a href="mailto:info@power2go.com.pk" className="text-[#1447E6] hover:underline">info@power2go.com.pk</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
