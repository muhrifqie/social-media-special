# Alur kerja: ide → tayang → performa

```
 ide/topik ──► HyperFrames (C:\BOT\HyperFrames)                       ──► repo ini (posts/)  ──► TikTok/Reels ──► JADWAL (performa)
              brief.md → 3 opsi gaya → naskah ACC → build → QA → render      siap_upload.sh         checklist upload    24 jam setelah tayang
```

## 1. Di HyperFrames (produksi)
Semua aturan produksi ada di sana — jangan disalin ke repo ini:
- Pintu masuk agen: `HyperFrames/AGENTS.md` + skill `video-waroengku`.
- Pilih gaya: `HyperFrames/docs/katalog-gaya.md` (3 opsi dari tingkat SUKA).
- Aturan kualitas: `HyperFrames/docs/aturan-global.md` (naskah di-ACC owner dulu, suara Cartesia, QA error 0).
- Proyek dibuat di `HyperFrames/konten/<projek>/`.

## 2. Ke repo ini (hasil final)
- Video: `bash ../tools/siap_upload.sh <projek>` dari `HyperFrames/konten` → `posts/<projek>/`.
- Carousel: ekspor JPG ke `posts/<projek>/`.
- Lokasi tujuan bisa diganti dengan variabel lingkungan `SMS_DIR` (default `C:\BOT\Social Media Special`). Dipakai oleh `tools/siap_upload.sh` dan `tools/make_covers.py`.
- Tambah baris JADWAL → `node scripts/cek.mjs` → commit.

## 3. Unggah
Ikuti "Checklist tiap upload" di `JADWAL-UPLOAD.md`. Ringkas: file `-master60.mp4` (bukan `-preview`), cover `-cover.jpg`, JUDUL & DESKRIPSI dari `caption.txt`, privasi Semua orang, HD aktif. Jangan pakai trik metadata (video pernah balik ke "Only me", 10 Okt).

## 4. Setelah tayang
Isi link & ✅, lalu performa 24 jam. Angka performa dipakai HyperFrames untuk memilih gaya & topik berikutnya (`HyperFrames/docs/pelajaran.md`).

## Ritme
1 postingan tiap 2 hari, jam default 19:00 WIB. Grid profil TikTok 3 kolom → 1 baris = 3 postingan dengan desain cover sama.
