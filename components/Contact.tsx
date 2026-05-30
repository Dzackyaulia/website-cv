'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate email service here (Emailjs, SendGrid, etc.)
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 2000);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40">
      <div className="animate-slide-in-up text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="gradient-text">Hubungi Saya</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6">Tertarik untuk berkolaborasi? Mari kita terhubung!</p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4"></div>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi saya melalui salah satu cara di bawah ini.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-14">
        {/* Contact Info */}
        <div className="space-y-6 animate-fade-in">
          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors animate-pulse-slow">
                <Mail className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">Email</h3>
                <a
                  href="mailto:dzackyaulia005@gmail.com"
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  dzackyaulia005@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors">
                <Phone className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">WhatsApp/Telepon</h3>
                <a
                  href="tel:+6282337481312"
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium"
                >
                  +62 823-3748-1312
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors">
                <MapPin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors">Lokasi</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors">Bandung, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-delay">
          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Nama Anda</label>
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/40 rounded-lg text-gray-100 placeholder-gray-500 focus:bg-slate-700/50 focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Email Anda</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/40 rounded-lg text-gray-100 placeholder-gray-500 focus:bg-slate-700/50 focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-300 mb-3">Pesan Anda</label>
            <textarea
              name="message"
              placeholder="Tulis pesan Anda di sini..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/40 rounded-lg text-gray-100 placeholder-gray-500 focus:bg-slate-700/50 focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform ${
              submitted
                ? 'bg-green-500/50 text-white'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 text-white hover:scale-105'
            }`}
          >
            {submitted ? (
              <>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Pesan Terkirim!
              </>
            ) : (
              <>
                <Send size={20} />
                Kirim Pesan
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
