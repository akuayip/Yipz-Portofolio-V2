# Yipz-Portofolio-V2

Portfolio multi-page berbasis Next.js untuk menampilkan proyek AI/ML sebagai case study yang berfokus pada masalah, proses, bukti, dan kontribusi personal.

## Menjalankan secara lokal

```bash
npm install
cp .env.example .env.local
npm run dev
```

Buka `http://localhost:3000`.

Pemeriksaan produksi:

```bash
npm run lint
npm run typecheck
npm run build
npm start
```

## Mengganti dummy

### Profil, kontak, dan CV

- Edit `content/profile.ts` untuk nama, headline, bio, email, GitHub, dan LinkedIn.
- Letakkan foto asli di `public/images/portrait.webp`, lalu isi `portraitPath` dengan `/images/portrait.webp` di `content/profile.ts`. Foto tersebut otomatis dipakai pada lanyard hero. Placeholder About dapat diganti terpisah dengan `next/image`.
- Letakkan CV di `public/resume/cv.pdf`, isi `resumePath` pada profil, lalu aktifkan tautan unduh pada halaman About.
- Placeholder foto dan CV saat ini sengaja tidak berpura-pura sebagai aset pemilik.

### Proyek

Data proyek berada di `content/projects/index.ts` dan tipenya di `content/projects/types.ts`.

- Setiap proyek memiliki array `media` untuk Flex Carousel pada halaman case study.
- Simpan screenshot asli di `public/images/projects/<slug>/`, lalu isi `src` dengan path seperti `/images/projects/<slug>/overview.webp` serta ganti `title`, `caption`, dan `alt` dummy.

Sebelum mengubah `contentStatus` menjadi `verified`, lengkapi:

- tanggal, jenis proyek, tim, dan peran personal;
- asal masalah dan bukti riset;
- data, lisensi/consent, pembagian dataset, baseline, dan metode evaluasi;
- hasil dengan unit, ukuran data uji, hardware, dan konteks;
- batasan, failure cases, pelajaran, dan tautan asli;
- screenshot, diagram, atau sample output yang boleh dipublikasikan.

Empat record awal masih `draft`. Angka Mamba-YOLO dari master spec tidak ditampilkan karena sumber, dataset, hardware, dan metodologinya belum diverifikasi.

## Demo AI

Tanpa endpoint, `/projects/[slug]/demo` menampilkan keadaan **Demo coming soon** dan tidak membuat hasil inferensi palsu.

Variabel environment tersedia di `.env.example`:

- `HF_TOKEN`: token server-side untuk endpoint privat;
- `HF_SPACE_ID`: identifier Hugging Face Space;
- `MODEL_API_BASE_URL`: base URL FastAPI atau provider lain;
- `NEXT_PUBLIC_SITE_URL`: URL kanonis situs.

Implementasi final perlu membuat adapter per model karena klasifikasi, object detection, dan text generation memiliki format input/output berbeda. Route `app/api/inference/route.ts` sudah menolak file lebih dari 5 MB dan merespons aman saat provider belum dikonfigurasi. Tambahkan validasi MIME, timeout, rate limit, dan allowlist endpoint bersamaan dengan provider yang nyata.

Jangan menyimpan token di variabel dengan prefix `NEXT_PUBLIC_` dan jangan commit `.env.local`.

## Intro dan aksesibilitas

- Intro dapat dilewati sejak frame pertama dan hanya berjalan sekali per browser tab.
- `prefers-reduced-motion` langsung melewati intro dan menyembunyikan scene 3D.
- Konten hero tetap berupa HTML semantik serta tidak bergantung pada WebGL.
- Navigasi keyboard, focus indicator, skip link, dan fallback responsive telah disiapkan.

## Deployment Vercel

1. Push repository ke Git provider.
2. Import project ke Vercel dengan framework preset Next.js.
3. Isi environment variables yang benar di Project Settings. Rahasia hanya masuk ke environment server.
4. Set `NEXT_PUBLIC_SITE_URL` ke domain produksi, lalu deploy ulang agar sitemap dan canonical base memakai URL final.
5. Tambahkan domain di Vercel → Domains dan ikuti record DNS yang diberikan provider domain.

Live model sebaiknya di-host terpisah di Hugging Face Spaces atau layanan FastAPI dengan compute yang sesuai. Uji cold start, timeout, ukuran model, GPU/CPU, biaya, dan limit request sebelum mengaktifkan tombol inferensi publik.

## Struktur utama

```text
app/                       routes, metadata, sitemap, API
components/                layout, intro, 3D scene, cards, filters
content/profile.ts         profil dan link publik
content/projects/          schema dan project records
public/images/             foto dan media proyek
public/resume/             CV final
IMPLEMENTATION_PLAN.md     rencana awal
```

## Status konten

- `sample`: teks contoh umum;
- `draft`: proyek nyata dengan detail belum lengkap;
- `verified`: klaim telah dicek pemilik dan memiliki konteks/sumber.

Lakukan pengecekan manual pada 360 px, 768 px, 1024 px, dan desktop sebelum publikasi. Jalankan audit Lighthouse pada build produksi dan catat nilai aktual; jangan mengklaim skor yang belum diuji.
