# 🍕 Mio's Pizza - Elit Modern Web Sitesi

İtalyan pizza geleneğini İstanbul'un kalbine taşıyan Mio's Pizza'nın resmi web sitesi. Modern, interaktif ve lüks bir kullanıcı deneyimi sunar.

## ✨ Özellikler

### 🎨 Modern Tasarım
- **Glassmorphism Efektleri** - Şık cam efektli bileşenler
- **Gradient Animasyonlar** - Dinamik renk geçişleri
- **Parallax Scrolling** - Derinlik hissi veren animasyonlar
- **Micro-interactions** - Kullanıcı etkileşimlerinde ince detaylar
- **Responsive Design** - Tüm cihazlarda mükemmel görünüm

### 🚀 Performans
- **Next.js 15** - En son App Router teknolojisi
- **Server Components** - Hızlı sayfa yüklemeleri
- **Optimized Images** - Next.js Image component ile optimize edilmiş görseller
- **Framer Motion** - Smooth ve performanslı animasyonlar

### 🎯 Kullanıcı Deneyimi
- **Interaktif Galeri** - Modal ile büyütülebilen fotoğraflar
- **QR Kod Menü** - Dijital menüye hızlı erişim
- **Doğrudan İletişim** - Tek tıkla telefon ve WhatsApp
- **Harita Entegrasyonu** - Google Maps ile konum
- **Smooth Scroll** - Akıcı sayfa geçişleri

## 🛠️ Teknolojiler

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4.16
- **Animations**: Framer Motion
- **Image Optimization**: Next.js Image
- **Icons**: SVG & Emoji

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build

# Production server'ı başlat
npm start
```

## 🌐 Sayfalar

### Ana Sayfa (`/`)
- **Hero Section** - Cinematic açılış
- **Hakkımızda** - İşletme hikayesi
- **Galeri** - Fotoğraf galerisi
- **İletişim** - İletişim bilgileri ve harita

### Menüler (`/menuler`)
- **QR Kod** - Dijital menü erişimi
- **Popüler Pizzalar** - Öne çıkan ürünler
- **CTA Section** - Sipariş çağrısı

## 🎨 Renk Paleti

```css
--pizza-red: #dc2626        /* Ana kırmızı */
--pizza-red-dark: #991b1b   /* Koyu kırmızı */
--pizza-green: #16a34a      /* Ana yeşil */
--pizza-green-dark: #15803d /* Koyu yeşil */
--pizza-yellow: #fbbf24     /* Sarı */
--pizza-gold: #d4af37       /* Altın */
```

## 📱 İletişim Bilgileri

- **Kozyatağı**: 0216 999 50 57 · 0531 345 58 00 (WhatsApp)
- **Erenköy**: 0216 759 54 34 · 0533 558 54 34 (WhatsApp)
- **Instagram**: [@pizzamios](https://instagram.com/pizzamios)
- **Adres (Kozyatağı)**: Kozyatağı mh. Kadıpaşa sk. No:28/C Kadıköy, İstanbul

## 🎯 Özellikler Detay

### Glassmorphism
Modern cam efekti ile şık ve çağdaş görünüm. Navbar ve kartlarda kullanılmıştır.

### Animasyonlar
- **Fade In/Out**: Scroll'a göre görünüm
- **Hover Effects**: Kart ve buton etkileşimleri
- **Parallax**: Mouse hareketine duyarlı arka plan
- **Scale Animations**: Yakınlaştırma efektleri
- **Rotate Animations**: Dönme efektleri

### Responsive Breakpoints
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 📝 Geliştirme Notları

### Yeni Sayfa Ekleme
```typescript
// app/yeni-sayfa/page.tsx
export default function YeniSayfa() {
  return (
    <div>İçerik</div>
  );
}
```

### Yeni Bileşen Ekleme
```typescript
// components/YeniBilesen.tsx
"use client";
import { motion } from "framer-motion";

export default function YeniBilesen() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      İçerik
    </motion.div>
  );
}
```

## 🚀 Production Checklist

- [ ] Gerçek logo ekle (`public/logo.png`)
- [ ] Favicon güncelle (`app/favicon.ico`)
- [ ] Google Maps koordinatlarını düzelt
- [ ] SEO metadata'yı kontrol et
- [ ] Analytics ekle (Google Analytics, etc.)
- [ ] Performance testi yap
- [ ] Mobil test yap
- [ ] Browser compatibility testi

## 📄 Lisans

© 2025 Mio's Pizza. Tüm hakları saklıdır.

---

**Geliştiren**: Modern Next.js Stack
**Versiyon**: 1.0.0
**Son Güncelleme**: Ekim 2025
