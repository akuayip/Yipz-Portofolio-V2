# Rencana Implementasi Portfolio AI/ML

Status: **planning untuk ditinjau; implementasi website belum dimulai**.

## 1. Dasar keputusan

- Sumber kebutuhan: `CODEX_AI_ML_PORTFOLIO_MASTER_SPEC.md` yang diberikan pemilik.
- Permintaan pemilik saat ini adalah membuat rencana sebelum implementasi. Instruksi dalam spesifikasi untuk langsung membangun semua fase tidak dijalankan pada tahap ini.
- Folder proyek saat diperiksa masih kosong dan belum merupakan repository Git. Tidak ada kode atau konvensi lama yang perlu dipertahankan.
- Screenshot hero yang disebut spesifikasi belum tersedia di folder proyek. Arah visual sementara mengikuti deskripsi: ivory, burnt orange, tipografi gelap, hero dua kolom, dan portrait berbentuk rounded rectangle.
- Project, CV, dan foto akan menggunakan konten dummy yang **jelas diberi label** dan mudah diganti. Tidak ada pencapaian, metrik, tautan, foto pribadi, atau hasil model yang direka seolah nyata.

## 2. Hasil yang akan dibuat

Website Next.js App Router + TypeScript + Tailwind CSS, dengan halaman:

| Rute | Isi utama |
| --- | --- |
| `/` | Hero, selected projects, kemampuan, ringkasan tentang pemilik, kontak |
| `/projects` | Daftar proyek dan filter status/topik |
| `/projects/[slug]` | Case study yang memakai template bersama |
| `/projects/[slug]/demo` | Status demo; UI inferensi hanya aktif bila endpoint nyata dikonfigurasi |
| `/about` | Bio, pengalaman, dan area CV |
| `/contact` | Kanal kontak yang hanya aktif jika URL/alamat asli tersedia |

Termasuk navigasi desktop/mobile, halaman 404/error, metadata SEO, sitemap, README, `.env.example`, dan panduan mengganti konten serta deployment.

## 3. Sistem konten dan placeholder

Konten dipisah dari komponen agar nanti cukup mengubah file data/aset, tanpa membongkar layout.

| Bahan | Bentuk dummy awal | Cara mengganti nanti |
| --- | --- | --- |
| Profil | `Your Name`, headline/bio contoh dengan label `Sample content` | Edit `content/profile.ts` |
| Foto | Ilustrasi/siluet netral dengan label `Portrait placeholder`; bukan wajah rekaan pemilik | Ganti aset `public/images/portrait.*` dan alt text di profil |
| CV | Kartu `CV sample / coming soon`; tidak ditampilkan sebagai riwayat hidup asli atau tombol unduh palsu | Tambahkan PDF ke `public/resume/`, isi path dalam profil; barulah tombol unduh aktif |
| Proyek | Draft untuk empat kandidat di spesifikasi: Mamba-YOLO Head Detection, Fishare, Journease, dan konsep stimulasi komunikasi; teks kosong/sampel diberi label `Draft — details pending` | Edit satu file per proyek di `content/projects/`; isi bukti, gambar, tautan, dan kontribusi personal |
| Visual proyek | Ilustrasi konseptual berlabel `Conceptual visual` | Ganti dengan screenshot/diagram asli dan alt text |
| Metrik | Kosong sampai ada sumber dan konteks evaluasi | Isi nilai, definisi, dataset, hardware, metode, dan status verifikasi |
| Demo AI | `Demo coming soon`, tanpa tombol inferensi palsu | Hubungkan Space/FastAPI nyata melalui konfigurasi server |
| Kontak | Teks contoh tanpa link aktif | Isi email, GitHub, LinkedIn asli di profil |

Setiap proyek memiliki `contentStatus: sample | draft | verified` dan hanya data `verified` yang boleh tampil sebagai klaim final. Pada preview pengembangan, draft tetap terlihat dengan penanda jelas supaya desain bisa ditinjau.

## 4. Rancangan pengalaman

1. **10–15 detik pertama:** nama, peran AI/ML, proposisi nilai, dan CTA proyek langsung terbaca. Konten hero tetap HTML biasa sehingga tidak bergantung pada animasi.
2. **Visual:** warna dasar `#F5F1ED`, permukaan hangat, aksen burnt orange, ruang putih luas, kartu proyek editorial, dan fokus yang terlihat untuk keyboard. Nilai warna akan disesuaikan bila perlu demi kontras.
3. **Intro sinematik:** satu rangkaian sekitar 3–4 detik: boot microcopy → jaringan partikel → gerak kamera 3D → reveal tipografi. Tombol `Skip intro` tersedia sejak awal; hanya berjalan penuh sekali per sesi tab.
4. **Fallback:** `prefers-reduced-motion` langsung menampilkan hero; perangkat lemah, mobile, atau WebGL gagal memakai animasi 2D ringan atau hero statis.
5. **Case study:** `Quick read` untuk ringkasan dan bukti, `Deep dive` untuk asal ide → masalah → riset → rencana → solusi → implementasi → keputusan → validasi → dampak → refleksi. Bagian tanpa data tidak dipaksakan tampil.
6. **Demo:** arsitektur adapter per provider. Unggahan dan pemanggilan model lewat route server dengan validasi dan batasan; UI menampilkan status nyata, tanpa prediksi buatan.

## 5. Struktur kerja yang direncanakan

```text
app/                    halaman, metadata, API route
components/             layout, hero, intro, kartu proyek, case study, demo
content/profile.ts      profil dan tautan
content/projects/       satu file bertipe per proyek
lib/                    query konten, konfigurasi, adapter demo
public/images/          placeholder dan gambar final
public/resume/          CV final jika sudah disediakan
README.md               setup, edit konten, deployment
.env.example            contoh konfigurasi tanpa rahasia
```

## 6. Urutan implementasi setelah rencana disetujui

1. **Fondasi:** inisialisasi Next.js, TypeScript, Tailwind; token visual, layout responsif, navigasi, schema konten, dummy profil dan proyek.
2. **Konten:** homepage, index proyek, template case study, about/contact, placeholder visual/CV, metadata dan sitemap.
3. **Motion:** intro GSAP + React Three Fiber, tombol skip, persistence per sesi, cleanup, reduced-motion dan fallback tanpa WebGL; lalu interaksi scroll/hover yang ringan.
4. **Demo AI:** route dan provider adapter, status tidak terkonfigurasi, validasi input dan penanganan error. Inferensi aktif hanya setelah endpoint nyata tersedia.
5. **Kualitas:** lint, typecheck, production build, smoke test navigasi, pengujian keyboard, reduced-motion, WebGL fallback, dan tampilan 360/768/1024 px serta desktop. Ukur performa bila alat tersedia; laporkan hasil yang benar-benar dijalankan.
6. **Dokumentasi:** langkah run lokal, lokasi penggantian setiap dummy, cara menambah proyek, konfigurasi Hugging Face/FastAPI, dan deployment Vercel.

## 7. Kriteria selesai untuk versi dummy

- Semua rute utama bisa dibuka, responsif, dan memiliki keadaan kosong/draft yang jujur.
- Project detail menggunakan satu template dan hanya merender bagian yang punya data.
- Foto dan CV dummy jelas dibedakan dari aset asli.
- Intro dapat dilewati dan tidak menghalangi konten; fallback motion dan WebGL berfungsi.
- Demo tanpa endpoint secara eksplisit menampilkan `Demo coming soon`.
- Tidak ada tautan palsu, klaim metrik tanpa verifikasi, token di browser, atau hasil AI simulasi.
- Build lokal berhasil dan hasil tes dicatat di README/laporan akhir.

## 8. Bahan yang nanti diperlukan dari pemilik

Implementasi dummy dapat dimulai tanpa bahan ini. Untuk mengganti placeholder dan menyiapkan publikasi final, diperlukan:

- Nama publik, peran, bio, email, GitHub/LinkedIn.
- Foto asli, CV PDF, dan screenshot referensi hero jika perlu kemiripan visual yang presisi.
- Untuk tiap proyek: tanggal, peran pribadi vs kontribusi tim, masalah awal, proses, screenshot, arsitektur, hasil terukur beserta metode evaluasi, batasan, serta tautan asli.
- Untuk demo: model/weights, format input-output, endpoint yang benar-benar aktif, biaya/limitasi komputasi, dan kredensial melalui environment lokal.
- Domain hanya diperlukan saat hendak publikasi, bukan untuk pengembangan lokal.
