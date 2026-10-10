# Interaction & Motion Plan — AI/ML Portfolio

Status: **siap ditinjau; belum diimplementasikan**.

## 1. Tujuan pengalaman

Interaksi harus membuat portfolio terasa seperti sistem yang hidup dan responsif, sekaligus membantu pengunjung memahami hirarki konten. Gerak kursor, hover, dan scroll dipakai untuk:

- memperkuat identitas AI/ML melalui respons jaringan, data, dan koneksi;
- menunjukkan elemen yang dapat dibuka atau dieksplorasi;
- menjaga alur membaca dari hero menuju proyek dan case study;
- memberi kesan premium tanpa menghambat recruiter yang ingin membaca cepat.

Prinsip utama: setiap gerakan punya alasan, amplitudonya kecil, tidak menggeser layout, dan selalu memiliki fallback untuk touch, reduced motion, serta perangkat tanpa WebGL.

## 2. Arah interaksi utama

### A. Global cursor field

Pada desktop dengan fine pointer, posisi kursor menghasilkan dua nilai ter-normalisasi (`-1` sampai `1`) yang dibagikan melalui CSS variables atau satu motion controller.

- Background glow tipis mengikuti kursor dengan smoothing, bukan menempel tepat di pointer.
- Elemen dekoratif bergerak dalam kedalaman berbeda untuk menciptakan parallax.
- Tidak memakai custom cursor yang menggantikan pointer bawaan karena dapat mengganggu usability.
- Update menggunakan `requestAnimationFrame`; event tidak memicu React render pada setiap pixel.
- Efek dimatikan pada touch device dan `prefers-reduced-motion`.

### B. Hero sebagai interaction stage

Hero menjadi pengalaman pointer paling kuat di situs.

1. Neural network mengikuti arah kursor dengan rotasi dan kedalaman yang lebih terasa daripada versi saat ini.
2. Kamera bergeser sangat kecil berlawanan arah pointer agar jaringan terasa memiliki ruang.
3. Headline memakai parallax per baris: baris depan bergerak 2–4 px, lapisan dekoratif 8–12 px.
4. Portrait card melakukan tilt maksimal sekitar 3 derajat serta highlight lembut berdasarkan posisi pointer di dalam kartu.
5. Monogram/foto bergerak lebih lambat daripada card untuk memberi efek kedalaman.
6. Saat pointer meninggalkan hero, seluruh elemen kembali ke posisi netral dengan spring/easing halus.
7. Scroll awal mengecilkan opacity jaringan dan menggeser hero sedikit sebelum bagian Selected Work masuk.

Efek hero tidak boleh membuat teks sulit dipilih, mengubah posisi CTA, atau menyebabkan motion sickness.

### C. Magnetic CTA dan link

Untuk tombol utama dan link penting:

- tombol bergerak 2–5 px menuju kursor ketika pointer berada dekat area tombol;
- teks/icon memiliki offset sedikit berbeda untuk menciptakan kedalaman;
- border/fill bertransisi dari titik masuk pointer;
- fokus keyboard memakai state visual yang setara tanpa gerakan magnetik;
- semua tombol kembali tepat ke posisi asli ketika pointer keluar.

Dipakai hanya pada `Explore projects`, `About me`, CTA footer, dan link utama case study. Tidak diterapkan pada setiap link navigasi agar pengalaman tetap tenang.

## 3. Interaksi per bagian

| Area | Interaksi desktop | Touch/mobile | Tujuan |
| --- | --- | --- | --- |
| Header | Border dan backdrop menguat ketika scroll; active link berupa garis yang bergeser | State scroll yang sama | Menjaga orientasi |
| Brand mark | Node kecil di mark bergeser mengikuti pointer lokal | Tap feedback singkat | Memberi identitas sistem jaringan |
| Hero headline | Reveal per baris dan micro-parallax pointer | Reveal opacity/translate sederhana | Memperkuat first impression |
| Portrait | Tilt, highlight, inner parallax | Static card dengan tap feedback | Memberi kedalaman tanpa foto palsu |
| Scroll cue | Pulse pelan; hilang setelah halaman mulai di-scroll | Disembunyikan seperti sekarang | Menunjukkan arah eksplorasi |
| Project visual | Perspective tilt lokal, orbit bergerak, grid bergeser 4–8 px | Tap state dan visual tetap informatif | Membuat tiap proyek terasa dapat dieksplorasi |
| Project title | Underline/character reveal yang mengikuti hover card | Tidak bergantung pada hover | Menghubungkan visual dan judul |
| Project metadata | Technical highlights masuk saat hover/focus, tanpa menutup info utama | Selalu terlihat atau expandable | Menambah konteks teknis |
| Capability cards | Cursor spotlight lokal, nomor bergerak kecil, border menyala | Static contrast state | Memberi detail pada bagian gelap |
| Toolbox tags | Repulsion ringan antar tag atau stagger saat masuk viewport | Stagger sederhana | Menghindari logo-cloud yang statis |
| About portrait | Parallax lebih lambat dan lebih tenang dari hero | Static | Menjaga konsistensi visual |
| Footer CTA | Magnetic link dan accent line mengikuti pointer | Tap feedback | Menutup halaman dengan affordance jelas |

## 4. Selected Work: sistem hover yang lebih kaya

Setiap kartu proyek memakai satu controller lokal berdasarkan posisi pointer relatif terhadap visual.

### Saat pointer masuk

- card mendapat perspective tilt maksimal 2–3 derajat;
- grid bergerak pada lapisan belakang;
- orbit dan garis bergerak dengan kecepatan berbeda;
- nomor proyek bergeser sedikit ke arah berlawanan;
- label `View case study` dan technical tags mendapat accent state;
- seluruh kartu menjadi satu area intent tanpa membuat semua teks menjadi satu link besar.

### Saat pointer bergerak

- efek memakai interpolasi agar tidak bergetar;
- posisi di-clamp agar card tidak tampak miring berlebihan;
- gerakan dihentikan ketika card keluar viewport.

### Saat pointer keluar

- transform kembali ke nol;
- animasi yang masih berjalan dibatalkan atau ditimpa, sehingga tidak terjadi antrean animasi.

Untuk touch device, informasi hover harus tetap terbaca. Visual boleh memberi respons singkat ketika ditekan tetapi navigasi tidak memerlukan tap ganda.

## 5. Scroll choreography

Scroll animation dibagi menjadi urutan kecil, bukan satu timeline panjang yang mengendalikan seluruh halaman.

### Homepage

1. Hero: headline, subheading, CTA, dan portrait masuk berurutan setelah intro selesai atau langsung ketika intro dilewati.
2. Selected Work heading: reveal saat 20–30% area masuk viewport.
3. Setiap project card: visual dan teks masuk dari arah berbeda dengan jarak maksimal 24–40 px.
4. Capability section: background transition dan kartu muncul berurutan.
5. About/toolbox: teks masuk lebih tenang; tags memakai stagger singkat.

### Project index

- Pergantian filter memakai layout transition: card yang keluar fade/scale ringan dan card yang tersisa berpindah halus.
- Jumlah hasil berubah melalui accessible live region.
- Filter tetap responsif tanpa menunggu animasi selesai.

### Case study

- Progress line vertikal mengikuti posisi baca.
- Item table of contents aktif berubah berdasarkan section yang terlihat.
- Section number mendapat accent saat section aktif.
- Hero visual memakai scroll parallax kecil dan berhenti sebelum konten teknis.
- Diagram/gambar yang nanti ditambahkan dapat memakai reveal mask, tetapi teks utama tetap langsung tersedia.

## 6. Page transition

Perpindahan halaman memakai transisi singkat sekitar 250–400 ms:

- route baru masuk dengan opacity dan translate kecil;
- header tetap stabil;
- tidak menahan navigasi demi animasi keluar;
- fokus dipindahkan ke konten utama setelah navigasi;
- transisi dimatikan pada reduced motion.

Tidak memakai full-screen wipe pada setiap navigasi karena intro sinematik sudah menjadi momen besar saat kunjungan pertama.

## 7. Intro sinematik versi lanjutan

Intro yang ada dipertahankan dan diperbaiki:

- posisi kursor sedikit memengaruhi node sejak frame awal;
- node yang dekat kursor melakukan repulsion lembut;
- gerak kamera 3D nyata dipakai pada perangkat yang mampu;
- transisi intro ke hero memakai shared visual rhythm sehingga jaringan terasa berpindah ke background hero;
- klik `Skip intro` membatalkan timeline dan resource secara langsung, lalu menampilkan hero pada state final;
- intro tidak dijalankan ulang pada internal navigation.

## 8. Arsitektur implementasi yang direncanakan

Komponen/utilitas baru:

```text
components/motion/
  motion-provider.tsx       pointer state, reduced motion, device capability
  cursor-field.tsx          ambient glow global
  magnetic-link.tsx         reusable magnetic CTA
  reveal.tsx                viewport reveal wrapper
  route-transition.tsx      transisi konten halaman
  scroll-progress.tsx       progress case study
  use-pointer-tilt.ts       tilt lokal tanpa React render per frame
  use-capability-tier.ts    menentukan full/reduced/static experience
```

Komponen yang diperbarui:

- `hero-scene.tsx`: pointer smoothing, camera parallax, pause saat tidak terlihat.
- `cinematic-intro.tsx`: timeline cancellation, shared reveal state, cleanup lebih kuat.
- `project-card.tsx` dan `project-visual.tsx`: pointer tilt dan layered parallax.
- `site-header.tsx`: scroll state dan active indicator transition.
- halaman project detail: active table of contents serta reading progress.
- `globals.css`: motion tokens, hover/focus states, dan reduced-motion override.

GSAP tetap dipakai untuk timeline dan ScrollTrigger. React Three Fiber menangani scene 3D. CSS transition dipakai untuk microinteraction sederhana. Tidak menambah animation library baru.

## 9. Motion tokens

Gerakan akan memakai batas konsisten:

| Token | Nilai awal | Pemakaian |
| --- | --- | --- |
| Fast | 140–180 ms | hover warna, border, focus response |
| Standard | 260–360 ms | tombol, card state, nav indicator |
| Reveal | 500–750 ms | section reveal dan headline |
| Slow | 900–1200 ms | ambient/parallax return |
| Pointer tilt | maksimum 2–3° | portrait dan project visual |
| Pointer translate | maksimum 4–12 px | layered parallax |
| Scroll reveal distance | maksimum 24–40 px | section entrance |

Nilai akhir ditentukan melalui visual QA; amplitudo akan dikurangi jika teks atau kontrol terasa tidak stabil.

## 10. Performance dan capability tiers

### Tier A — full motion

Desktop, fine pointer, WebGL tersedia, reduced motion tidak aktif:

- 3D hero, pointer parallax, card tilt, scroll choreography, ambient cursor field.

### Tier B — reduced visual load

Tablet/mobile atau perangkat dengan kemampuan terbatas:

- hero statis atau 2D, reveal sederhana, tap feedback, tanpa pointer field dan tilt.

### Tier C — reduced motion/static

`prefers-reduced-motion`, WebGL gagal, atau JavaScript animation gagal:

- konten final langsung tampil;
- tidak ada transform kontinu;
- hover hanya mengubah warna/border;
- semua navigasi dan informasi tetap berfungsi.

Guardrail teknis:

- satu global pointer listener, bukan listener per elemen;
- transform dan opacity saja untuk animasi kontinu;
- frame loop 3D berhenti ketika tab/scene tidak terlihat;
- device pixel ratio dibatasi;
- ScrollTrigger dibersihkan saat route/unmount;
- tidak ada state React yang di-update setiap `pointermove`;
- layout tetap stabil saat animasi gagal.

## 11. Urutan implementasi

1. **Motion foundation:** provider, motion tokens, capability tiers, reduced-motion handling, dan cleanup.
2. **Hero interaction:** cursor field, 3D response, headline depth, portrait tilt, dan magnetic CTA.
3. **Project exploration:** project card tilt/parallax, synchronized text state, filter transition.
4. **Scroll storytelling:** homepage reveals, capability spotlight, toolbox stagger.
5. **Case study navigation:** reading progress, active table of contents, section states.
6. **Page transition:** route entrance dan focus management.
7. **Intro integration:** sambungkan intro dengan final hero state dan perbaiki skip/cancellation.
8. **Quality pass:** desktop/mobile, keyboard, touch, reduced motion, WebGL failure, tab visibility, dan performance profiling.

## 12. Verifikasi setelah implementasi

- Pointer diuji dari sudut ke sudut dan saat bergerak cepat; elemen selalu kembali ke posisi nol.
- Tidak ada transform yang membuat halaman melebar atau menimbulkan horizontal scroll.
- Hover, focus keyboard, dan touch memberi affordance yang setara.
- Intro dapat dilewati segera pada setiap fase tanpa meninggalkan scroll lock.
- Reduced motion menonaktifkan gerak kontinu dan scroll-linked motion.
- Scene berhenti saat berada di luar viewport atau tab tidak aktif.
- Filter proyek tidak menyebabkan layout jump dan screen reader menerima jumlah hasil.
- Active section case study sesuai posisi baca.
- Lint, typecheck, production build, console check, dan responsive review pada 360, 768, 1024, serta desktop berhasil.
- Lighthouse/performance diukur pada build produksi dan hanya nilai aktual yang dilaporkan.

## 13. Prioritas visual

Jika waktu implementasi perlu dibagi, urutan prioritasnya:

1. Hero pointer interaction dan portrait tilt.
2. Project card layered parallax.
3. Case study reading progress/active navigation.
4. Capability spotlight dan magnetic CTA.
5. Page transition dan penyempurnaan intro.

Empat prioritas pertama memberi peningkatan pengalaman paling terlihat tanpa membuat situs terasa ramai.
