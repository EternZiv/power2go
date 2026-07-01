"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { basePath } from "@/lib/basePath";
import { Breadcrumb } from "@/components/Breadcrumb";
import { TiltCard } from "@/components/TiltCard";
import { Floating3D } from "@/components/Floating3D";
import { ScrollReveal3D } from "@/components/ScrollReveal3D";

const CONTACT_FORM_URL = "https://formspree.io/f/yourFormID";
const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Visit Us",
    lines: [
      { bold: "Karachi Office:", text: "1D-27 Sector 30, Korangi Industrial Area, Karachi" },
      { bold: "Lahore Office:", text: "10 Ali Block, Garden Town, Lahore" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
      </svg>
    ),
    title: "Call Us",
    lines: [
      { bold: "Karachi:", text: "111-P2G-247" },
      { bold: "Lahore:", text: "(042) 3591 1165-69" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
      </svg>
    ),
    title: "Email Us",
    lines: [
      { bold: "Support:", text: "info@power2go.com.pk" },
      { bold: "Sales:", text: "sales@power2go.com.pk" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Office Hours",
    lines: [
      { bold: "Mon–Fri:", text: "9:00 AM – 6:00 PM" },
      { bold: "Saturday:", text: "10:00 AM – 4:00 PM" },
    ],
  },
];

const locations = [
  {
    city: "Karachi",
    address: "1D-27 Sector 30, Korangi Industrial Area, Karachi",
    phone: "111-P2G-247",
    mapUrl: "https://maps.google.com/?q=1D-27+Sector+30+Korangi+Industrial+Area+Karachi",
    embedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_KEY&q=1D-27+Sector+30+Korangi+Industrial+Area+Karachi",
  },
  {
    city: "Lahore",
    address: "10 Ali Block, Garden Town, Lahore",
    phone: "(042) 3591 1165-69",
    mapUrl: "https://maps.google.com/?q=10+Ali+Block+Garden+Town+Lahore",
    embedUrl: "https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_KEY&q=10+Ali+Block+Garden+Town+Lahore",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!form.name.trim()) errors.name = "Name is required";
    if (!form.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Invalid email format";
    if (!form.phone.trim()) errors.phone = "Phone is required";
    if (!form.subject.trim()) errors.subject = "Subject is required";
    if (!form.message.trim()) errors.message = "Message is required";
    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch(CONTACT_FORM_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
        setFieldErrors({});
      } else {
        setErrorMsg("Failed to send. Please try again or email us directly.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const handleChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (fieldErrors[field]) setFieldErrors({ ...fieldErrors, [field]: "" });
  };

  const phoneLink = (text: string) => {
    const digits = text.replace(/[^\d]/g, "");
    return digits ? `tel:${digits}` : "#";
  };

  return (
    <>
      <section className="relative overflow-hidden min-h-[100dvh] flex items-center pt-14">
        <Image
          src={`${basePath}/images/7.png`}
          alt="Power2Go contact and support team"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1726]/90 via-[#0d1726]/70 to-[#1447E6]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/60 via-transparent to-transparent" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <Breadcrumb items={[{ label: "Contact Us" }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Contact Us</h1>
              <p className="text-white/80 text-lg max-w-xl animate-fade-in-left delay-100 leading-relaxed">
                Get in touch with our team. We&apos;re here to answer your questions, provide quotations, and help you find the perfect energy solution for your needs.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 animate-fade-in-left delay-200">
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>24h Response Time</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Free Consultation</span>
                </div>
                <div className="flex items-center gap-2 text-white/70 text-sm">
                  <svg className="w-5 h-5 text-[#22c55e]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>Pan-Pakistan Support</span>
                </div>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-2 gap-4 animate-fade-in-right delay-300 perspective-1000">
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={2}><p className="text-3xl font-bold text-[#22c55e]">2</p></Floating3D>
                <p className="text-white/70 text-sm mt-1">Office Locations</p>
              </div></TiltCard>
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={2.5}><p className="text-3xl font-bold text-[#22c55e]">111</p></Floating3D>
                <p className="text-white/70 text-sm mt-1">P2G-247 Hotline</p>
              </div></TiltCard>
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={3}><p className="text-3xl font-bold text-[#22c55e]">Mon-Sat</p></Floating3D>
                <p className="text-white/70 text-sm mt-1">Business Hours</p>
              </div></TiltCard>
              <TiltCard tiltDegree={5} glare={false}><div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <Floating3D amplitude={3} speed={3.5}><p className="text-3xl font-bold text-[#22c55e]">WhatsApp</p></Floating3D>
                <p className="text-white/70 text-sm mt-1">Quick Chat</p>
              </div></TiltCard>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {contactCards.map((card, i) => (
              <ScrollReveal3D key={i} direction="up" delay={i * 100}>
              <TiltCard tiltDegree={5} glare={false}>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-base">{card.title}</h3>
                <div className="space-y-0.5">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-gray-500 text-sm">
                      <span className="font-medium text-gray-700">{line.bold}</span>{" "}
                      {line.text.includes("@") ? (
                        <a href={`mailto:${line.text}`} className="hover:text-[#1447E6] transition-colors">{line.text}</a>
                      ) : line.text.match(/[\d\s()-]+/) ? (
                        <a href={phoneLink(line.text)} className="hover:text-[#1447E6] transition-colors">{line.text}</a>
                      ) : (
                        line.text
                      )}
                    </p>
                  ))}
                </div>
              </div>
              </TiltCard>
              </ScrollReveal3D>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">Fill out the form and we&apos;ll get back to you within 24 hours.</p>

              {status === "success" ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                  <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className={`form-input ${fieldErrors.name ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""}`}
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      aria-invalid={!!fieldErrors.name}
                      aria-describedby={fieldErrors.name ? "err-name" : undefined}
                    />
                    {fieldErrors.name && <p id="err-name" className="text-red-500 text-xs mt-1">{fieldErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className={`form-input ${fieldErrors.email ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""}`}
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      aria-invalid={!!fieldErrors.email}
                      aria-describedby={fieldErrors.email ? "err-email" : undefined}
                    />
                    {fieldErrors.email && <p id="err-email" className="text-red-500 text-xs mt-1">{fieldErrors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      className={`form-input ${fieldErrors.phone ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""}`}
                      placeholder="+92-300-1234567"
                      value={form.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      aria-invalid={!!fieldErrors.phone}
                      aria-describedby={fieldErrors.phone ? "err-phone" : undefined}
                    />
                    {fieldErrors.phone && <p id="err-phone" className="text-red-500 text-xs mt-1">{fieldErrors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      className={`form-input ${fieldErrors.subject ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""}`}
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={(e) => handleChange("subject", e.target.value)}
                      aria-invalid={!!fieldErrors.subject}
                      aria-describedby={fieldErrors.subject ? "err-subject" : undefined}
                    />
                    {fieldErrors.subject && <p id="err-subject" className="text-red-500 text-xs mt-1">{fieldErrors.subject}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      className={`form-input resize-none ${fieldErrors.message ? "border-red-400 focus:border-red-500 focus:ring-red-200" : ""}`}
                      placeholder="Tell us more about your inquiry..."
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "err-message" : undefined}
                    />
                    {fieldErrors.message && <p id="err-message" className="text-red-500 text-xs mt-1">{fieldErrors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary w-full justify-center mt-2"
                  >
                    {status === "sending" ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                          <path d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" fill="currentColor" className="opacity-75" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                          <path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>
                        </svg>
                        Send Message
                      </>
                    )}
                  </button>
                  {status === "error" && (
                    <p className="text-red-500 text-sm text-center">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>

            <div className="lg:col-span-2 animate-fade-in-up delay-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>

              <div className="rounded-2xl overflow-hidden border border-gray-200 h-48 mb-6 bg-gray-100 relative">
                <iframe
                  title="Karachi Office Location"
                  src={locations[0].embedUrl}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href="https://wa.me/92111247247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-green-50 border border-green-100 hover:bg-green-100 transition-colors mb-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 group-hover:text-[#1447E6] transition-colors">Chat on WhatsApp</p>
                  <p className="text-xs text-gray-500">Quick replies within minutes</p>
                </div>
                <svg className="w-4 h-4 text-green-500 ml-auto" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14 21 3"/>
                </svg>
              </a>

              <div className="flex items-center gap-3 px-5 py-3 rounded-xl bg-blue-50 border border-blue-100 mb-6">
                <div className="w-10 h-10 rounded-full bg-[#1447E6] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Support Email</p>
                  <a href="mailto:info@power2go.com.pk" className="text-xs text-[#1447E6] hover:underline">info@power2go.com.pk</a>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {locations.map((loc, i) => (
                  <a
                    key={i}
                    href={loc.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start justify-between p-5 bg-white rounded-xl border border-gray-200 hover:border-[#1447E6] hover:shadow-md transition-all duration-200 group"
                  >
                    <div>
                      <h3 className="font-bold text-gray-900 group-hover:text-[#1447E6] transition-colors">{loc.city}</h3>
                      <p className="text-gray-500 text-sm mt-0.5">{loc.address}</p>
                      <p className="text-[#1447E6] text-sm font-medium mt-1">{loc.phone}</p>
                    </div>
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-[#1447E6] transition-colors mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9] opacity-95" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Ready to Power Your Future?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Explore our range of energy storage solutions or speak with our sales team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/products" className="group btn-3d inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              View Products
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="tel:111-P2G-247" className="btn-3d inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
