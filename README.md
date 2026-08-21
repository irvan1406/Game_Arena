# Arena Tactics

Game strategi arena real-time berbasis web, terinspirasi genre lane/tower battler. Tidak memakai aset atau nama milik game lain.

## Fitur
- Arena 1v1 melawan AI.
- 18 tipe pasukan bawaan.
- Sistem energi/elixir, deck 8 kartu, hand 4 kartu, rotasi kartu.
- 2 side tower + 1 king/base tower per sisi.
- Unit melee, ranged, flying, splash, healer, building-targeting.
- Editor statistik unit langsung dari browser.
- Ubah HP, damage, speed, range, attack cooldown, cost, count, radius, splash, heal, target, warna.
- Simpan config di localStorage.
- Export/import seluruh statistik unit sebagai JSON.
- Responsive untuk desktop dan HP.
- Vanilla HTML/CSS/JS, tanpa dependency dan tanpa build step.

## Jalankan
Buka `index.html` langsung, atau pakai static server:

```bash
python -m http.server 8080
```

Lalu buka `http://localhost:8080`.

## Struktur
- `index.html` UI utama
- `styles.css` tampilan responsif
- `src/units.js` database/default statistik pasukan
- `src/game.js` engine game, AI, combat, tower, editor

## Edit pasukan lewat kode
Nilai default ada di `src/units.js`. Contoh:

```js
{id:'swordsman', cost:3, hp:760, damage:125, speed:58, range:22, attackSpeed:0.9}
```

Atau buka tombol **Editor Unit** di dalam game.

## Rencana pengembangan berikutnya
Multiplayer WebSocket/Firebase, spell cards, building cards, matchmaking, akun, upgrade unit, chest/reward, replay, ranked ladder, sound, animasi sprite, dan WebView Android shell.
