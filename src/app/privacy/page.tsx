import React from "react";
import Image from "next/image";
import type { Metadata } from "next";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";
import { AnimatedStatsSection } from "@/components/AnimatedStatsSection";
import { AnimatedStatCard } from "@/components/AnimatedStatCard";
import { StatValue } from "@/components/StatValue";

export const metadata: Metadata = {
  title: "Privacy Policy | Power2Go",
  description: "Power2Go's privacy policy outlines how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden min-h-[60vh] md:min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/9.png`}
          alt="Power2Go privacy policy"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent pointer-events-none" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Privacy Policy" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Privacy Policy</h1>
              <p className="text-white/80 text-lg animate-fade-in-left delay-100">Last updated: June 2026</p>
              <p className="text-white/60 text-sm mt-4 max-w-2xl animate-fade-in-left delay-200">
                We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data.
              </p>
            </div>
            <AnimatedStatsSection className="hidden lg:grid grid-cols-2 gap-4 perspective-1000">
              <AnimatedStatCard index={0}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="3" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Policies Covered</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={1}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">June 2026</p>
                  <p className="text-white/70 text-sm mt-1">Last Updated</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={2}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <p className="text-3xl font-bold text-[#22c55e]">GDPR</p>
                  <p className="text-white/70 text-sm mt-1">Compliant</p>
                </div>
              </AnimatedStatCard>
              <AnimatedStatCard index={3}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <StatValue value="100%" className="text-3xl font-bold text-[#22c55e]" as="p" />
                  <p className="text-white/70 text-sm mt-1">Transparent</p>
                </div>
              </AnimatedStatCard>
            </AnimatedStatsSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Introduction</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Power2Go (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Personal Information</h3>
            <p className="text-gray-600 leading-relaxed mb-5">We may collect personal information that you voluntarily provide when you:</p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Fill out our contact form (name, email, phone number, company)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Subscribe to our newsletter (email address)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Request a quotation or product information</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Communicate with our customer support team</span>
              </li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-600 leading-relaxed mb-5">
              When you visit our website, we may automatically collect certain information including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-5">We use the collected information for the following purposes:</p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>To respond to your inquiries and provide customer support</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>To send you marketing communications (with your consent)</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>To improve our website and services</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>To comply with legal obligations</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Protection</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encryption, access controls, and secure data storage.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Third-Party Services</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              We may engage trusted third parties to perform functions on our behalf, such as hosting, analytics, and email delivery. These service providers have access to personal information only as necessary to perform their functions and are contractually obligated to maintain confidentiality.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Our website uses cookies to enhance your browsing experience. You can control cookie preferences through your browser settings. Please see our <a href="/cookies" className="text-[#1447E6] hover:underline">Cookie Policy</a> for more information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Your Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-5">You have the right to:</p>
            <ul className="space-y-2 mb-5">
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Access your personal data held by us</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Request correction or deletion of your data</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Object to or restrict processing of your data</span>
              </li>
              <li className="flex items-start gap-3 text-gray-600">
                <svg className="w-5 h-5 text-[#22c55e] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></svg>
                <span>Withdraw consent at any time</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Related Policies</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Please also review our <a href="/terms" className="text-[#1447E6] hover:underline">Terms of Service</a> for information about the terms governing your use of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              If you have questions about this Privacy Policy, please contact us at:
            </p>
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
