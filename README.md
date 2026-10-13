# Social Media Special

Gudang konten sosial media Waroengku (TikTok/Reels): video dan carousel edukasi AI yang **sudah final dan siap unggah**, lengkap dengan caption, cover, jadwal tayang, dan catatan performa.

Konten dibuat di workspace HyperFrames (`C:\BOT\HyperFrames`) — repo ini hanya menyimpan **hasil akhirnya**. Proyek sumber (HTML, naskah, suara) tetap di HyperFrames.

## Isi repo

```
Social Media Special/
├── README.md              ← kamu di sini
├── CONTRIBUTING.md        cara menambah, mengubah, menghapus, dan memakai postingan
├── AGENTS.md              aturan untuk agen AI (CLAUDE.md menunjuk ke sini)
├── JADWAL-UPLOAD.md       SATU-SATUNYA sumber jadwal, status, link, dan performa
├── docs/
│   ├── alur-kerja.md      dari ide → HyperFrames → posts/ → TikTok → performa
│   └── keputusan.md       kenapa strukturnya begini (video tidak di-push, dll.)
├── scripts/
│   └── cek.mjs            pemeriksa kesehatan repo (jalankan sebelum commit)
└── posts/
    └── <projek>/          1 folder = 1 postingan, nama = nama projek HyperFrames
        ├── caption.txt            JUDUL + DESKRIPSI siap tempel
        ├── <projek>-cover.jpg     cover video (1080×1920)
        ├── <projek>-master60.mp4  file UNGGAH (60 fps, 16 Mbps)   ⟵ lokal saja, tidak di-push
        ├── <projek>-preview.mp4   versi kecil buat cek di HP       ⟵ lokal saja, tidak di-push
        ├── slide-01.jpg …         carousel 9:16 (slide-01 = cover)
        └── 3x4/                   carousel versi 3:4 (1080×1440), kalau ada
```

## Pakai cepat

| Mau apa | Perintah / langkah |
|---|---|
| Lihat apa yang siap tayang | buka `JADWAL-UPLOAD.md` → tabel Antrean, status 🟢 |
| Unggah satu postingan | ikuti "Checklist tiap upload" di `JADWAL-UPLOAD.md` |
| Bikin postingan video baru | dari HyperFrames: `bash ../tools/siap_upload.sh <nama>` → otomatis masuk `posts/<nama>/` |
| Cek repo sehat | `node scripts/cek.mjs` (0 error = aman di-commit) |
| Tambah / hapus / arsipkan | lihat `CONTRIBUTING.md` |

## Yang tidak ada di GitHub (sengaja)

Video (`.mp4/.mov/.webm`), audio (`.mp3/.wav/.m4a` — suara clone owner adalah data biometrik), dan arsip (`.zip/.rar`) **hanya ada di PC lokal** (`C:\BOT\Social Media Special`). Alasannya: 4 master video sudah lebih dari 100 MB (batas per file GitHub) dan totalnya ±530 MB. Detail: `docs/keputusan.md`.

Artinya: clone repo ini di PC lain → caption, cover, slide, dan jadwal ikut; video harus dibuat ulang dari HyperFrames atau disalin manual.

## Hak cipta

Semua konten © Waroengku. Repo ini publik untuk dilihat, **bukan** untuk dipakai ulang — tidak ada lisensi open source, jadi semua hak dilindungi. Logo pihak ketiga (Claude, ChatGPT, dll.) milik pemiliknya masing-masing dan muncul hanya sebagai bahan edukasi.
