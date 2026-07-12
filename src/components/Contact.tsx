"use client";

import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock API Submit call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 md:px-12"
    >
      <div className="glow-bg glow-purple -top-10 left-10"></div>
      <div className="glow-bg glow-indigo bottom-0 right-10"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold mb-2">Kontak</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-white">
            Hubungi Saya
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-3"></div>
        </div>

        {/* 2 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-xl text-white tracking-wide">
                Mari Berkolaborasi!
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Apakah Anda memiliki ide projek menarik, ingin merekrut saya sebagai bagian dari tim Anda, atau sekadar ingin menyapa? Silakan kirimkan pesan Anda melalui formulir kontak atau hubungi saya langsung.
              </p>
            </div>

            {/* List of contact links */}
            <div className="space-y-6 my-8">
              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block uppercase tracking-wider">Email</span>
                  <a
                    href={`mailto:${personalInfo.socials.email}`}
                    className="text-sm font-semibold text-slate-300 hover:text-white transition-colors"
                  >
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-indigo-400 group-hover:border-indigo-500 group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 font-medium block uppercase tracking-wider">Lokasi</span>
                  <span className="text-sm font-semibold text-slate-300">
                    Jakarta, Indonesia
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Indicator */}
            <div className="p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></div>
              <span className="text-xs font-semibold text-indigo-300">
                Membalas email Anda dalam kurun waktu 24 jam.
              </span>
            </div>
          </div>

          {/* Contact Form (Right) */}
          <div className="lg:col-span-7">
            <div className="glass-effect p-8 rounded-3xl border border-slate-800/40 relative">
              {isSubmitted ? (
                /* Success Message */
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <div className="p-4 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-12 h-12 animate-bounce" />
                  </div>
                  <h3 className="font-heading font-bold text-2xl text-white">
                    Pesan Terkirim!
                  </h3>
                  <p className="text-slate-400 text-sm max-w-sm">
                    Terima kasih telah menghubungi saya. Saya telah menerima pesan Anda dan akan segera menghubungi Anda kembali.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold transition-all cursor-pointer"
                  >
                    Kirim Pesan Baru
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Budi"
                        className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        Alamat Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="budi@example.com"
                        className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Subjek Pesan
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Penawaran Kolaborasi Projek"
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                      Isi Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tuliskan detail ide Anda di sini..."
                      className="w-full bg-slate-950/80 border border-slate-900 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-700 text-white font-bold tracking-wide transition-all shadow-lg shadow-indigo-600/20 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
