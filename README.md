# Portfolio Mhd Teuku Dzacky Aulia

Portfolio website modern yang dibuat dengan Next.js, React, dan Tailwind CSS. Website ini responsive dan siap untuk di-deploy di Vercel.

## 🚀 Features

- ✨ Modern dan minimalis design
- 📱 Fully responsive untuk semua device
- 🎨 Gradient theme dengan warna profesional
- ⚡ Fast performance dengan Next.js
- 🔍 SEO optimized
- 💬 Contact form
- 📄 Showcase pengalaman, pendidikan, dan skill

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📋 Prerequisites

Pastikan Anda memiliki:
- Node.js 16+ terinstall
- npm atau yarn
- Git
- Akun Vercel (untuk deployment)

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

atau dengan yarn:

```bash
yarn install
```

### 2. Run Development Server

```bash
npm run dev
```

atau dengan yarn:

```bash
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

### 3. Build untuk Production

```bash
npm run build
npm start
```

## 📦 Deployment ke Vercel

### Metode 1: Menggunakan Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Ikuti instruksi yang muncul di terminal

### Metode 2: Menggunakan GitHub + Vercel

1. Push project ke GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

2. Buka [vercel.com](https://vercel.com) dan login dengan akun GitHub Anda

3. Klik "New Project" dan pilih repository Anda

4. Vercel akan otomatis mendeteksi Next.js dan mengkonfigurasi settings

5. Klik "Deploy"

## 📝 Customization

### Mengubah Data Pribadi

Edit file-file berikut untuk menyesuaikan konten:

- **Hero Section**: `components/Hero.tsx`
- **About Section**: `components/About.tsx`
- **Education**: `components/Education.tsx`
- **Experience**: `components/Experience.tsx`
- **Skills**: `components/Skills.tsx`
- **Projects**: `components/Projects.tsx`

### Mengubah Warna

Edit `tailwind.config.js` di bagian colors:

```javascript
colors: {
  primary: '#0F172A',      // Warna background utama
  secondary: '#1E293B',    // Warna background sekunder
  accent: '#3B82F6',       // Warna accent/highlight
},
```

## 📧 Contact Form

Untuk mengaktifkan contact form, Anda bisa mengintegrasikan dengan:
- EmailJS
- SendGrid
- Formspree
- Nodemailer

Edit file `components/Contact.tsx` untuk menambahkan integrasi email service.

## 📱 Responsive Design

Website ini sudah dioptimalkan untuk:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 🖥️ Desktop (1024px+)
- 🖥️ Large screens (1280px+)

## 🔍 SEO

Website sudah dilengkapi dengan:
- Meta tags
- Open Graph tags
- Sitemap ready
- Mobile friendly

## 📄 License

Proyek ini gratis untuk digunakan. Silakan customize sesuai kebutuhan Anda.

## 💡 Tips

1. Ganti social media links di `Hero.tsx` dengan link Anda yang sebenarnya
2. Tambahkan portfolio projects dengan link GitHub dan demo
3. Update contact information dengan data terbaru
4. Tambahkan favicon di `public/favicon.ico`
5. Test di berbagai device sebelum deploy final

## 🤝 Support

Jika ada pertanyaan atau saran, silakan hubungi melalui:
- Email: dzackyaulia005@gmail.com
- WhatsApp: +62 823-3748-1312

---

Made with ❤️ by Mhd Teuku Dzacky Aulia
