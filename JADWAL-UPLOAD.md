# Jadwal upload sosmed

Satu-satunya sumber jadwal & status postingan (pindah dari `C:\BOT\HyperFrames` 14 Okt 2026). File siap upload ada di `posts/<tanggal>_<projek>/` (repo ini). Isinya: master60 atau slide JPG, cover, dan `caption.txt`. Carousel versi 3:4 di `posts/<tanggal>_<projek>/3x4/`.
Waktu dalam WIB. Grid TikTok punya 3 kolom, jadi **1 baris = 3 postingan dengan desain cover yang sama**.

**Status:** ✅ tayang · 🟢 siap upload · 🟡 butuh langkah lagi · ⚪ belum dibuat
**Jam default:** 19:00 WIB. Ini titik awal saja, belum dari data. Setelah 5–6 postingan, cocokkan dengan TikTok Studio → Analitik → Pengikut → "Aktivitas pengikut".

## Antrean

| No | Tanggal | Jam | Projek | Format | Baris / desain cover | Status | Link postingan |
|---|---|---|---|---|---|---|---|
| 01 | — | — | `claude-ux-dark` | Video 52 dtk | Baris 1 · Kanvas Seleksi | ✅? konfirmasi | |
| 02 | — | — | `konten-claude-hf` | Video 61 dtk | Baris 1 · Kanvas Seleksi | ✅? konfirmasi | |
| 03 | — | — | `prompt-4-bahan` | Video 52 dtk | Baris 1 · Kanvas Seleksi | ✅? konfirmasi | |
| 04 | Min 11 Okt 2026 | 19:00 | `slide-repo-vibe` | Carousel 11 foto 9:16 | Baris 2 · Repo Card Dark | 🟢 siap | |
| 05 | Sel 13 Okt 2026 | 19:00 | `slide-code-agent` | Carousel 12 foto 9:16 | Baris 2 · Repo Card Dark | 🟢 siap | |
| 06 | Kam 15 Okt 2026 | 19:00 | `slide-hidden-gem` | Carousel 12 foto 9:16 | Baris 2 · Repo Card Dark | 🟡 sudah tayang versi 3:4 → hapus & unggah ulang versi 9:16 | |
| 07 | Sab 17 Okt 2026 | 19:00 | `slide-hermes` | Carousel 8 foto 9:16 | Baris 3 · **Hermes Blue** | 🟢 siap | |
| 08 | Sen 19 Okt 2026 | 19:00 | `slide-claude-code` | Carousel 11 foto 9:16 + 3:4 (8 fitur khas) | Baris 3 · gaya situs resmi (Claude) | 🟢 siap | |
| 09 | **Sen 12 Okt 2026** | 19:00 | `slide-chatgpt` | Carousel 11 foto 9:16 + 3:4 (Codex vs Claude Code, sisi dev) | Baris 3 · gaya situs resmi (ChatGPT) | 🟢 siap | |
| 10 | Rab 14 Okt 2026 (usul) | 19:00 | `prompt-kalkulator` | Video 80 dtk · seri "1 Prompt, Langsung Jadi" eps 1 | Baris 4 · **Notif iOS** (gelap + kartu terang) | 🟢 siap | |
| 11 | Rab 21 Okt 2026 (usul) | 19:00 | `halusinasi-ai` | Video 110 dtk · Cara kerja AI #02 (AI ngarang/halusinasi, suara Mr. P) | Baris 4 · **Incoming Call + Vowel Marks** (gelap, coral/biru) | 🟢 siap | |

Cadangan (baris 4+): `ai-air-emoji`, `ai-air-listrik` (video fun fact; butuh cover baris berikutnya + caption + master60).

Ritme: 1 postingan tiap 2 hari. Satu baris (3 postingan) selesai dalam ±6 hari, jadi feed tetap rapi per baris.

## Checklist tiap upload

1. Buka `posts/<tanggal>_<projek>/`.
2. Upload file sesuai format:
   - **Video**: `<projek>-master60.mp4` (jangan pakai `-preview`), lalu cover pilih `<projek>-cover.jpg`.
   - **Carousel**: `slide-01.jpg` … sesuai urutan. Slide 01 otomatis jadi cover.
3. Salin dari `caption.txt`: bagian **JUDUL** ke kolom judul, bagian **DESKRIPSI** ke kolom deskripsi (carousel foto punya dua kolom).
4. Privasi **Semua orang**. Kualitas upload **HD** aktif (Pengaturan → Pengaturan unggah).
5. Setelah tayang:
   - isi tanggal, jam, dan link di tabel ini;
   - ubah status jadi ✅.
6. Hari berikutnya, catat performa 24 jam di bawah.

## Performa (isi 24 jam setelah tayang)

| No | Views | Like | Komen | Save | Share | Catatan |
|---|---|---|---|---|---|---|
| 01 | 28.000 | 2.384 | | | | angka dari `HyperFrames/docs/pelajaran.md` 11 Okt (pemenang); belum dicek ulang di TikTok Studio |
| 02 | 333 | | | | | konten "di balik layar" paling sepi (pelajaran.md 11 Okt) |
| 03 | 3.900 | | | | | screenshot owner 11 Okt (memori sesi HyperFrames) |
| 04 | | | | | | |
| 05 | | | | | | |
| 07 | 765 | | | | | baru beberapa jam (screenshot owner 11 Okt) — artinya sudah tayang, tapi Antrean masih 🟢 17 Okt → konfirmasi |
| 10 | | | | | | |

## Cara menambah konten baru

Lengkapnya di `CONTRIBUTING.md`. Ringkasnya:
1. Buat projek di HyperFrames: `cd C:\BOT\HyperFrames\konten && npx -y hyperframes@0.8.154 init <nama> --non-interactive`.
2. Video: `bash ../tools/siap_upload.sh <nama>` (dari folder `konten/`) → hasil langsung masuk `posts/<tanggal>_<nama>/` di repo ini. Carousel: ekspor JPG ke `posts/<tanggal>_<nama>/` (+ `posts/<tanggal>_<nama>/3x4/` kalau ada versi 3:4).
3. Tambah baris di tabel Antrean. Nomor lanjut, dan baris cover ganti desain tiap 3 postingan.
4. Cek: `node scripts/cek.mjs`.
