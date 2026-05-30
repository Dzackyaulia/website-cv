'use client';

import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

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
    alert('Terima kasih! Pesan Anda telah dikirim.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-slate-800/30">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        <span className="gradient-text">Hubungi Saya</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-all">
            <div className="flex gap-4 items-start">
              <Mail className="text-accent mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">Email</h3>
                <a
                  href="mailto:dzackyaulia005@gmail.com"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  dzackyaulia005@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-all">
            <div className="flex gap-4 items-start">
              <Phone className="text-accent mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">WhatsApp/Telepon</h3>
                <a
                  href="tel:+6282337481312"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  +62 823-3748-1312
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-700/50 backdrop-blur p-6 rounded-lg border border-slate-600 hover:border-accent transition-all">
            <div className="flex gap-4 items-start">
              <MapPin className="text-accent mt-1" size={24} />
              <div>
                <h3 className="text-lg font-semibold text-accent mb-2">Lokasi</h3>
                <p className="text-gray-300">Bandung, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Nama Anda"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Anda"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors"
            />
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Pesan Anda"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-gray-100 placeholder-gray-500 focus:border-accent focus:outline-none transition-colors resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-accent hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Send size={20} />
            Kirim Pesan
          </button>
        </form>
      </div>
    </section>
  );
}
