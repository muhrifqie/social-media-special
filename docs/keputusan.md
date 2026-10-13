# Keputusan

Catat keputusan baru di atas (terbaru di atas). Format: tanggal · keputusan · alasan.

- **2026-10-14 · Repo dibuat, hasil final dipindah dari HyperFrames.** `HyperFrames/konten/<projek>/upload/` → `posts/<projek>/`, `upload-3x4/` → `posts/<projek>/3x4/`, `JADWAL-UPLOAD.md` ikut pindah. 161 file, 553.885.525 byte — dicek sama persis sebelum & sesudah (dipindah, bukan disalin). Render mentah & versi lama tetap di HyperFrames (bisa dibuat ulang). Alasan: owner mau hasil konten terpisah dari workspace produksi dan rapi untuk GitHub.
- **2026-10-14 · Video & audio tidak di-push.** `.mp4/.mov/.webm/.mp3/.wav/.m4a/.zip/.rar` di-gitignore. Alasan: 4 master > 100 MB (batas GitHub per file: prompt-kalkulator 155 MB, konten-claude-hf 117 MB, claude-ux-dark 101 MB, prompt-4-bahan 100 MB); Git LFS gratis cuma 1 GB/bulan; audio suara clone owner = biometrik. Opsi lain yang ditolak: Git LFS (bayar), kompres < 100 MB (kualitas turun).
- **2026-10-14 · Repo publik** (pilihan owner). Risiko yang sudah disampaikan sekali: rencana konten, caption draft, dan angka performa terbuka untuk kompetitor; logo pihak ketiga ikut terpajang. Tidak ada lisensi open source → semua hak dilindungi.
- **2026-10-14 · Status hanya di `JADWAL-UPLOAD.md`.** Tidak ada `post.json` per folder supaya tidak ada dua sumber yang bisa bertentangan. `scripts/cek.mjs` mencocokkan JADWAL dengan isi `posts/`.
- **2026-10-14 · Nama folder = nama projek HyperFrames** (tanpa nomor/tanggal). Nomor feed & tanggal tayang ada di JADWAL. Alasan: skrip HyperFrames cukup tahu nama projek untuk menulis ke sini.
