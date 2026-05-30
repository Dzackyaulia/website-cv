# 📋 Panduan Deploy ke Vercel

Portfolio Anda sudah siap untuk di-deploy! Ikuti langkah-langkah berikut:

## Step 1: Persiapkan Repository di GitHub

```bash
# Buka terminal di folder project
cd "d:\website cv"

# Initialize git repository
git init

# Add semua file
git add .

# Commit pertama
git commit -m "Initial commit: Portfolio website"

# Buat repository baru di GitHub (https://github.com/new)
# Kemudian add remote
git remote add origin https://github.com/YOUR_USERNAME/portfolio-dzacky.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

## Step 2: Deploy ke Vercel

### Opsi A: Melalui Vercel Dashboard (Recommended)

1. Buka https://vercel.com dan login dengan akun GitHub Anda
2. Klik tombol **"Add New..."** → **"Project"**
3. Pilih repository **portfolio-dzacky** dari daftar
4. Vercel akan auto-detect sebagai Next.js project
5. Klik **"Deploy"** dan tunggu proses selesai
6. Portfolio Anda akan live di `portfolio-dzacky.vercel.app`

### Opsi B: Melalui Vercel CLI

```bash
# Install Vercel CLI (jika belum)
npm install -g vercel

# Deploy
vercel

# Follow prompts untuk setup awal
# Vercel akan membuat domain otomatis untuk Anda
```

## Step 3: Custom Domain (Optional)

Jika ingin pakai domain custom (contoh: dzackyaulia.com):

1. Beli domain terlebih dahulu
2. Di Vercel Dashboard → project Anda → **Settings** → **Domains**
3. Tambahkan domain Anda
4. Follow instruksi untuk update DNS settings di domain registrar
5. Wait sampai DNS propagate (biasanya 24-48 jam)

## Step 4: Monitoring & Updates

Setelah deploy:

1. Setiap kali Anda push ke branch main, Vercel auto-deploy
2. Cek deployment status di Vercel Dashboard
3. View logs untuk troubleshooting
4. Domain Anda akan auto-update

## 🔧 Troubleshooting

### Build Failed?
```bash
# Cek error di terminal lokal
npm run build

# Fix issue dan push lagi
git add .
git commit -m "Fix build issue"
git push
```

### Port 3000 sudah digunakan?
```bash
# Run di port lain
npm run dev -- -p 3001
```

### Dependencies conflict?
```bash
# Delete node_modules dan reinstall
rm -r node_modules
npm install
```

## ✅ Checklist Sebelum Deploy

- [ ] Semua konten di CV sudah diupdate di website
- [ ] Contact form bekerja baik
- [ ] Link social media sudah di-update
- [ ] Mobile responsive terlihat bagus
- [ ] Tidak ada console error
- [ ] Loading speed cepat
- [ ] Meta tags sudah proper

## 📊 Monitoring Website

Setelah deploy, Anda bisa monitor:

- **Vercel Analytics**: Lihat performance metrics
- **Vercel Speed Insights**: Check Core Web Vitals
- **Google Analytics** (optional): Add tracking untuk visitor analytics

## 🚀 Keep It Updated

Tips untuk menjaga website tetap fresh:

1. Update projects section reguler dengan project baru
2. Add new skills saat Anda learn hal baru
3. Update experience saat ada pengalaman baru
4. Check links berfungsi dengan baik
5. Test di berbagai devices reguler

## 📞 Support

Jika ada masalah:
- Cek Vercel Error Log di dashboard
- Baca dokumentasi: https://vercel.com/docs
- Contact Vercel Support: https://vercel.com/support

---

**Good luck! Semoga portfolio Anda impressive dan membuka banyak peluang! 🎉**
