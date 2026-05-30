# 📁 Struktur Project

```
portfolio-dzacky/
├── app/
│   ├── globals.css              # Tailwind CSS gaya global
│   ├── layout.tsx               # Layout utama (metadata, HTML structure)
│   └── page.tsx                 # Halaman home dengan navbar
│
├── components/
│   ├── Header.tsx               # Header component
│   ├── Hero.tsx                 # Section intro/welcome
│   ├── About.tsx                # Section tentang saya
│   ├── Education.tsx            # Section pendidikan
│   ├── Experience.tsx           # Section pengalaman
│   ├── Skills.tsx               # Section keahlian
│   ├── Projects.tsx             # Section proyek portfolio
│   ├── Contact.tsx              # Section form kontak
│   └── Footer.tsx               # Footer
│
├── public/                      # Statis files (favicon, images)
│
├── package.json                 # Dependencies & scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.js           # Tailwind CSS theming
├── postcss.config.js            # PostCSS plugins
├── next.config.js               # Next.js configuration
├── vercel.json                  # Vercel deployment config
│
├── .env.example                 # Template environment variables
├── .eslintrc.json               # ESLint rules
├── .gitignore                   # Git ignore patterns
│
├── README.md                    # Dokumentasi lengkap
├── QUICK_START.md               # Panduan mulai cepat
├── DEPLOYMENT_GUIDE.md          # Panduan deploy ke Vercel
└── STRUCTURE.md                 # File ini
```

## 📌 Penjelasan File Penting

### `package.json`
Berisi dependencies (Next.js, React, Tailwind CSS) dan scripts:
- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm start` - Jalankan production build

### `components/`
Setiap file berisi React component untuk section di halaman:
- Semua component modular dan reusable
- Styling menggunakan Tailwind CSS
- Ada contoh data yang bisa di-customize

### `app/`
Menggunakan Next.js App Router (modern):
- `layout.tsx` - Wrapper utama dengan metadata
- `page.tsx` - Halaman utama dengan navigasi
- `globals.css` - CSS global dan utility classes

### `tailwind.config.js`
Konfigurasi Tailwind:
- Custom colors (primary, secondary, accent)
- Bisa tambah fonts, spacing, dll

## 🎯 Customization Points

1. **Warna**: Edit di `tailwind.config.js`
2. **Konten**: Edit di file `components/*.tsx`
3. **Fonts**: Update di `app/layout.tsx`
4. **Meta tags**: Update di `app/layout.tsx`

## 🚀 Deployment

Website siap deploy ke Vercel:
1. Push ke GitHub
2. Connect ke Vercel
3. Deploy otomatis setiap push

Baca: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

*Semua file sudah ready! Silakan customise dan deploy! 🎉*
