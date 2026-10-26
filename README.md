# Muhamad Andika Rafli — Portfolio

Portofolio personal menggunakan Next.js App Router, TypeScript, Tailwind CSS v4, dan komponen Button bergaya shadcn/ui.

## Menjalankan secara lokal

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Build production

```bash
npm run build
npm start
```

## Struktur

- `app/page.tsx` — seluruh section portofolio dan data yang mudah diedit
- `app/globals.css` — tema dark, layout, dan styling responsif
- `components/ui/button.tsx` — Button bergaya shadcn/ui
- `lib/utils.ts` — utilitas `cn`

## Sebelum dipublikasikan

1. Perbarui objek `projects` pada `app/page.tsx` dengan nama, deskripsi, URL GitHub, dan demo yang valid. Tombol sengaja nonaktif jika tautan belum diisi.
2. Lengkapi nama SMA/SMK, jurusan, tahun pendidikan, dan mata kuliah bila diperlukan.
3. Tambahkan URL verifikasi sertifikat jika tersedia.
4. Tinjau kembali detail pengalaman kerja dan status pekerjaan agar sesuai kondisi terbaru.

## Menambahkan shadcn/ui

Proyek ini menggunakan pola komponen shadcn/ui dan konfigurasi `components.json`. Untuk menambahkan komponen lain, jalankan CLI shadcn sesuai dokumentasi resminya.


## Galeri foto proyek

Kartu proyek menampilkan album foto bertumpuk. Klik album untuk membuka modal, pilih thumbnail atau gunakan tombol panah keyboard. Tekan Escape untuk menutup. Foto disimpan di `public/projects/`, dengan daftar path pada array `projects` di `app/page.tsx`.
