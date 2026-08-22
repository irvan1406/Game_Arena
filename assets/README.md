# Assets Game_Arena

Folder aset visual game. Gunakan nama file sesuai `id` kartu di `src/units.js` agar UI otomatis memakai gambar.

Struktur:

- `assets/cards/<id>.webp` — artwork kartu 3D, rasio disarankan 4:5.
- `assets/troops/<id>.webp` — sprite/render pasukan transparan.
- `assets/spells/<id>.webp` — artwork spell.
- `assets/buildings/<id>.webp` — artwork building/tower.
- `assets/arenas/<arena-id>.webp` — background arena.
- `assets/ui/` — frame kartu, ikon, badge, tombol.
- `assets/effects/` — efek visual tambahan.

Contoh: kartu dengan `id: 'swordsman'` akan mencoba memuat `assets/cards/swordsman.webp`. Jika file belum ada, game tetap memakai emoji bawaan sebagai fallback.

Untuk performa WebView, utamakan WebP/AVIF dan jaga ukuran tiap artwork sekitar 100–350 KB.