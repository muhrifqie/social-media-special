# Mengelola postingan

Satu aturan dasar: **1 postingan = 1 folder `posts/<projek>/`**, dan **status/jadwal hanya ditulis di `JADWAL-UPLOAD.md`**. Jangan bikin catatan status di tempat lain — supaya tidak ada dua versi yang saling bertentangan.

Nama folder = nama projek di `C:\BOT\HyperFrames\konten\<projek>` (huruf kecil, pakai tanda hubung: `slide-hermes`, `prompt-kalkulator`). Postingan carousel diawali `slide-`.

## Menambah postingan

### Video
1. Bikin & selesaikan di HyperFrames (alur lengkap: `docs/alur-kerja.md`).
2. Dari `C:\BOT\HyperFrames\konten`: `bash ../tools/siap_upload.sh <projek>`
   → otomatis membuat `posts/<projek>/` berisi `-master60.mp4`, `-preview.mp4`, `-cover.jpg`, `caption.txt`.
   Sudah punya render & cuma mau ulang cover/caption: tambah `--skip-render`.
3. Cover seragam feed (opsional): tambah entri di `HyperFrames/covers/covers.json`, jalankan `python tools/make_covers.py <projek>` → cover masuk ke `posts/<projek>/`.

### Carousel
1. Ekspor slide JPG dari projek HyperFrames ke `posts/<projek>/slide-01.jpg …` (9:16, 1080×1920).
2. Versi 3:4 (kalau ada) ke `posts/<projek>/3x4/`.
3. Tulis `posts/<projek>/caption.txt` (format di bawah).

### Lalu, untuk keduanya
4. Tambah 1 baris di tabel **Antrean** `JADWAL-UPLOAD.md`: nomor lanjut, tanggal & jam (WIB), `` `<projek>` `` dalam backtick, format, baris/desain cover, status.
5. `node scripts/cek.mjs` → harus `0 error`.
6. Commit: `git add -A && git commit -m "feat(posts): add <projek>"`.

### Format `caption.txt`
```
JUDUL
<maks 90 karakter>

DESKRIPSI
<isi, daftar poin, CTA "Follow buat info pengetahuan AI terbaru 🔔", hashtag>
```

## Setelah tayang
1. Di `JADWAL-UPLOAD.md`: isi tanggal, jam, link; status → ✅.
2. 24 jam kemudian: isi baris di tabel **Performa** (views, like, komen, save, share).
3. Commit: `git commit -am "docs(jadwal): <projek> tayang"`.

## Mengubah postingan
- Ganti file langsung di `posts/<projek>/` (nama file tetap sama), atau jalankan ulang `siap_upload.sh`.
- Video sudah tayang tapi mau diunggah ulang (contoh: #06 versi 3:4 → 9:16): tulis alasannya di kolom status, jangan bikin folder baru.

## Menghapus / mengarsipkan
- **Batal tayang tapi mungkin dipakai lagi** → biarkan foldernya, status di JADWAL jadi `⚪ ditunda` + alasan.
- **Benar-benar dibuang** → hapus baris di JADWAL **dan** folder `posts/<projek>/` dalam satu commit: `git rm -r posts/<projek>` lalu `git commit -m "chore(posts): remove <projek> — <alasan>"`. Video lokal di folder itu ikut terhapus dari disk — pastikan memang tidak perlu (proyek sumber tetap di HyperFrames, jadi bisa dirender ulang).
- Jangan menghapus postingan yang sudah ✅ tayang; cukup biarkan sebagai arsip.

## Memakai ulang (tanpa bikin dobel)
- **Caption/hashtag mirip** → salin dari `posts/<projek-lama>/caption.txt`, jangan menulis dari nol.
- **Gaya visual sama** → mulai dari projek HyperFrames-nya (lihat `HyperFrames/docs/katalog-gaya.md`), bukan dari file di sini.
- **Upload ulang ke platform lain (Reels/Shorts)** → pakai file yang sama di `posts/<projek>/`; catat link platform tambahan di kolom link JADWAL (pisahkan dengan `·`).
- Sebelum bikin konten baru, cek tabel Antrean & folder `posts/` dulu supaya topiknya tidak mengulang.

## Konvensi commit
`feat(posts): …` tambah postingan · `fix(posts): …` ganti file · `docs(jadwal): …` jadwal/performa · `chore: …` rapi-rapi. Pesan commit dalam bahasa Inggris.
