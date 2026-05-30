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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
          <span className="gradient-text">Hubungi Saya</span>
        </h2>
        <p className="text-gray-400 text-lg mb-6 animate-fade-in-up animate-delay-100">Tertarik untuk berkolaborasi? Mari kita terhubung!</p>
        <div className="w-20 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 animate-underline-expand"></div>
        <p className="text-gray-400 max-w-2xl mx-auto animate-fade-in-up animate-delay-200">
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Hubungi saya melalui salah satu cara di bawah ini.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-14">
        {/* Contact Info */}
        <div className="space-y-6 animate-fade-in">
          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover-lift animate-fade-in-scale">
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors animate-pulse-slow">
                <Mail className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors animate-fade-in-up">Email</h3>
                <a
                  href="mailto:dzackyaulia005@gmail.com"
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium animate-fade-in-up animate-delay-100"
                >
                  dzackyaulia005@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover-lift animate-fade-in-scale" style={{ animationDelay: '100ms' }}>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors animate-pulse-slow" style={{ animationDelay: '0.2s' }}>
                <Phone className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors animate-fade-in-up">WhatsApp/Telepon</h3>
                <a
                  href="tel:+6282337481312"
                  className="text-gray-300 hover:text-blue-300 transition-colors font-medium animate-fade-in-up animate-delay-100"
                >
                  +62 823-3748-1312
                </a>
              </div>
            </div>
          </div>

          <div className="group bg-gradient-to-br from-slate-700/30 to-slate-800/30 backdrop-blur-md p-7 rounded-2xl border border-slate-600/40 hover:border-blue-400/60 transition-all duration-500 hover:bg-gradient-to-br hover:from-slate-700/50 hover:to-slate-800/50 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 hover-lift animate-fade-in-scale" style={{ animationDelay: '200ms' }}>
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-blue-500/20 rounded-lg group-hover:bg-blue-500/40 transition-colors animate-pulse-slow" style={{ animationDelay: '0.4s' }}>
                <MapPin className="text-blue-400 group-hover:text-blue-300 transition-colors" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-blue-300 mb-2 group-hover:text-blue-200 transition-colors animate-fade-in-up">Lokasi</h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors animate-fade-in-up animate-delay-100">Bandung, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in-delay">
          <div className="animate-fade-in-up">
            <label className="block text-sm font-semibold text-gray-300 mb-3">Nama Anda</label>
            <input
              type="text"
              name="name"
              placeholder="Masukkan nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/40 rounded-lg text-gray-100 placeholder-gray-500 focus:bg-slate-700/50 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 hover:border-slate-500/60"
            />
          </div>

          <div className="animate-fade-in-up animate-delay-100">
            <label className="block text-sm font-semibold text-gray-300 mb-3">Email Anda</label>
            <input
              type="email"
              name="email"
              placeholder="Masukkan email Anda"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/40 rounded-lg text-gray-100 placeholder-gray-500 focus:bg-slate-700/50 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 hover:border-slate-500/60"
            />
          </div>

          <div className="animate-fade-in-up animate-delay-200">
            <label className="block text-sm font-semibold text-gray-300 mb-3">Pesan Anda</label>
            <textarea
              name="message"
              placeholder="Tulis pesan Anda di sini..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-700/30 border border-slate-600/40 rounded-lg text-gray-100 placeholder-gray-500 focus:bg-slate-700/50 focus:border-blue-500 focus:outline-none transition-all duration-300 focus:scale-105 hover:border-slate-500/60 resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitted}
            className={`w-full px-6 py-3 font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 transform hover-lift animate-fade-in-up animate-delay-300 ${
              submitted
                ? 'bg-green-500/50 text-white animate-pulse-glow'
                : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-lg hover:shadow-blue-500/50 text-white hover:scale-105'
            }`}
          >
            {submitted ? (
              <>
                <svg className="w-5 h-5 animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Pesan Terkirim!
              </>
            ) : (
              <>
                <Send size={20} className="group-hover:animate-bounce" />
                Kirim Pesan
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
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
