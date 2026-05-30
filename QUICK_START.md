# 🚀 Quick Start Guide

## Setup Lokal (5 Menit)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Buka di Browser
Kunjungi: http://localhost:3000

## 📝 Editing Content

### Ubah Konten
Edit file di folder `components/`:
- `Hero.tsx` - Nama, intro, contact info
- `About.tsx` - Tentang section
- `Education.tsx` - Pendidikan
- `Experience.tsx` - Pengalaman
- `Skills.tsx` - Keahlian & sertifikasi
- `Projects.tsx` - Proyek portfolio
- `Contact.tsx` - Contact form

### Ubah Styling
Edit `tailwind.config.js` untuk:
- Warna theme
- Font size
- Spacing

## 🎨 Customize Warna

Buka `tailwind.config.js` dan ubah:

```javascript
colors: {
  primary: '#0F172A',      // Background gelap
  secondary: '#1E293B',    // Background medium
  accent: '#3B82F6',       // Warna highlight (ganti jadi warna favorit)
},
```

## 📱 Test Responsive

```bash
# Buka dev tools (F12) dan lihat mobile view
# Atau test di: http://localhost:3000
```

## ✅ Build untuk Production

```bash
npm run build
npm start
```

## 🌐 Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Atau baca:** [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

## 🆘 Masalah Umum

### Port 3000 error?
```bash
npm run dev -- -p 3001
```

### Module not found?
```bash
npm install
```

### Build error?
```bash
npm run build
```

---

**Selesai! Sekarang silakan develop & customize sesuai keinginan! 🎉**
