"use client";
import React, { useState } from "react";
import Link from "next/link";

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: "Visit Us",
    lines: [
      { bold: "Karachi Office:", text: "1D-27 Sector 30, Korangi Industrial Area, Karachi, Pakistan" },
      { bold: "Lahore Office:", text: "10 Ali Block Garden Town, Lahore" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
        <rect x="2" y="4" width="20" height="16" rx="2"/>
      </svg>
    ),
    title: "Email Us",
    lines: [
      { bold: "", text: "info@power2go.energy" },
      { bold: "", text: "sales@power2go.energy" },
      { bold: "", text: "support@power2go.energy" },
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#1447E6]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
    title: "Business Hours",
    lines: [
      { bold: "Monday – Friday:", text: "9 AM – 6 PM" },
      { bold: "Saturday:", text: "10 AM – 4 PM" },
      { bold: "Sunday:", text: "Closed" },
    ],
  },
];

const locations = [
  {
    city: "Karachi",
    address: "1D-27 Sector 30, Korangi Industrial Area, Karachi, Pakistan",
    phone: "111-P2G-247",
    mapUrl: "https://maps.google.com/?q=Korangi+Industrial+Area+Karachi",
  },
  {
    city: "Lahore",
    address: "10 Ali Block Garden Town, Lahore",
    phone: "(042) 3591 1165-69",
    mapUrl: "https://maps.google.com/?q=Garden+Town+Lahore",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", subject: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative overflow-hidden min-h-[320px] md:min-h-[340px] flex items-center pt-14">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1447E6] via-[#0d1726] to-[#01b0d9]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1726]/40 via-transparent to-transparent" />
        <div className="absolute right-[-80px] top-10 h-72 w-72 rounded-full bg-[#1447E6]/30 blur-3xl animate-pulse" />
        <div className="absolute left-[-60px] bottom-0 h-60 w-60 rounded-full bg-[#01b0d9]/20 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-left">Contact Us</h1>
          <p className="text-white/80 text-lg max-w-xl animate-fade-in-left delay-100">
            Get in touch with our team. We&apos;re here to answer your questions and help you find the perfect energy solution.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{card.title}</h3>
                <div className="flex flex-col gap-1">
                  {card.lines.map((line, j) => (
                    <p key={j} className="text-gray-600 text-sm">
                      {line.bold && <span className="font-medium text-gray-800">{line.bold} </span>}
                      {line.text}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 animate-fade-in-up">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-7">We will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500 text-sm">Thank you for reaching out. Our team will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      required
                      className="form-input"
                      placeholder="your.email@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+92-300-1234567"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      required
                      className="form-input"
                      placeholder="How can we help you?"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500">*</span></label>
                    <textarea
                      required
                      rows={4}
                      className="form-input resize-none"
                      placeholder="Tell us more about your inquiry..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full justify-center mt-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/>
                    </svg>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            <div className="animate-fade-in-up delay-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Locations</h2>

              <div className="rounded-2xl overflow-hidden border border-gray-200 h-52 mb-6 bg-gradient-to-br from-[#1447E6]/5 to-[#01b0d9]/5 flex items-center justify-center relative">
                <div className="text-center text-gray-400">
                  <div className="text-4xl mb-2">🗺️</div>
                  <p className="text-sm font-medium text-gray-600">Interactive Map</p>
                  <p className="text-xs text-gray-400">Korangi Industrial Area, Karachi</p>
                </div>
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMjAgMjBhMTAgMTAgMCAwIDEtMTAgMTAgMTAgMTAgMCAwIDEgMTAtMTAgMTAgMTAgMCAwIDEgMTAtMTAgMTAgMTAgMCAwIDEtMTAgMTB6IiBmaWxsPSIjMTQ0N0U2IiBmaWxsLW9wYWNpdHk9IjAuMDYiLz48L3N2Zz4=')] opacity-50" />
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
                    <svg className="w-5 h-5 text-gray-300 group-hover:text-[#1447E6] transition-colors mt-1 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
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
        <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute bottom-[-100px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[#22c55e]/10 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">Ready to Power Your Future?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto animate-fade-in-up delay-100">
            Explore our range of energy storage solutions or speak with our sales team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
            <Link href="/products" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#1447E6] font-semibold rounded-xl hover:bg-gray-100 hover:shadow-xl hover:shadow-black/20 transition-all duration-200">
              View Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <a href="tel:111-P2G-247" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-white/40 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white transition-all duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg>
              Call Us Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
