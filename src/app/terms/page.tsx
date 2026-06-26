import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "Terms of Service | Power2Go",
  description: "Power2Go's terms and conditions governing the use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/10.png`}
          alt="Power2Go terms of service"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Terms of Service" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Terms of Service</h1>
            <p className="text-white/80 text-lg animate-fade-in-left delay-100">Last updated: June 2026</p>
            <p className="text-white/60 text-sm mt-4 max-w-2xl animate-fade-in-left delay-200">
              Please read these terms carefully before using our website or purchasing our products and services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              By accessing and using the Power2Go website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Company Information</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Power2Go is a leading provider of advanced Energy Storage Systems (ESS), Industrial Hybrid Power Solutions, and Power Conversion Systems (PCS) in Pakistan. We are established through the strategic collaboration of Multinet, Orient Power, and Shams Power.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Use of Website</h2>
            <p className="text-gray-600 leading-relaxed mb-5">You agree to use our website only for lawful purposes and in a way that does not infringe upon the rights of others. Prohibited activities include:</p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Unauthorized access to our systems or data</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Interference with website functionality or security</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Misrepresentation of identity or affiliation</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Uploading malicious code or content</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              All content on this website — including text, graphics, logos, images, product specifications, datasheets, and software — is the property of Power2Go or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Product Information</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We strive to ensure that product descriptions, specifications, and pricing are accurate. However, we reserve the right to correct errors and update information without prior notice. All products are subject to availability and our standard terms and conditions of sale.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Power2Go shall not be liable for any indirect, incidental, special, or consequential damages arising from the use of our website or products. Our total liability shall not exceed the amount paid by you for the specific product or service in question.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our website may contain links to third-party websites. We are not responsible for the content, privacy practices, or terms of these external sites.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting. Your continued use of the website after changes constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Governing Law</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              These terms shall be governed by and construed in accordance with the laws of Pakistan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Karachi, Pakistan.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Contact</h2>
            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-5">
              <p className="text-gray-700 font-medium">Email: <a href="mailto:info@power2go.com.pk" className="text-[#1447E6] hover:underline">info@power2go.com.pk</a></p>
              <p className="text-gray-700 font-medium mt-2">Phone: 111-P2G-247 (111-724-247)</p>
              <p className="text-gray-700 font-medium mt-2">Address: 1D-27 Sector 30, Korangi Industrial Area, Karachi, Pakistan</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
