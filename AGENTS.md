# AGENTS.md — Social Media Special

Gudang hasil final konten sosmed owner Waroengku (Muh. Rifqi). Produksi ada di `C:\BOT\HyperFrames` (baca `HyperFrames/AGENTS.md` untuk membuat konten). Bahasa ke owner: Indonesia santai; commit message & kode: Inggris.

## Aturan
1. **Status/jadwal/link/performa hanya di `JADWAL-UPLOAD.md`.** Jangan menulis status di file lain.
2. 1 postingan = `posts/<tanggal>_<projek>/`, nama sama dengan projek HyperFrames. Struktur isi: `README.md`.
3. Tambah/ubah/hapus postingan: ikuti `CONTRIBUTING.md` persis. Menghapus folder postingan = tanya owner dulu (video lokal ikut hilang).
4. Sebelum commit: `node scripts/cek.mjs` harus 0 error.
5. Jangan commit video/audio/arsip (sudah di `.gitignore`), `.env`, cookie, token, atau rekaman suara owner. Repo ini **publik**.
6. Push ke GitHub dan mengubah visibilitas repo = tanya owner dulu.
7. Keputusan struktur baru → catat di `docs/keputusan.md`.

## Pertanyaan umum owner → jawabannya di mana
- "Apa yang siap tayang / jadwal minggu ini?" → `JADWAL-UPLOAD.md` tabel Antrean.
- "Performa konten X?" → `JADWAL-UPLOAD.md` tabel Performa.
- "Repo sehat nggak?" → `node scripts/cek.mjs`.
- "Gaya apa buat konten berikutnya?" → bukan di sini: `HyperFrames/docs/katalog-gaya.md`.
