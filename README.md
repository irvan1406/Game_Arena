# Arena Tactics / Game_Arena

Game strategi arena real-time berbasis web dengan troop, spell, building, deck 8 kartu, progres akun, upgrade, ekonomi, arena bertingkat, AI, dan Android WebView shell.

## Akun
Akun owner bawaan dikonfigurasi di `src/config.js`:

```js
ownerAccount: {
  username: 'Irvan',
  password: '1',
  displayName: 'Irvan',
  role: 'owner'
}
```

Akun biasa bisa daftar dari layar awal selama username belum digunakan. Pada versi statis ini akun dan progres tersimpan di `localStorage` perangkat/browser. Untuk sinkron lintas HP, storage bisa dipindahkan ke Firebase nanti tanpa mengubah engine battle.

> Catatan: repo publik membuat kredensial owner di `src/config.js` dapat dilihat siapa pun. Sistem ini memang ditujukan sebagai login sederhana/prototipe, bukan autentikasi aman untuk data sensitif.

## Fitur v2
- Login username/password dan pendaftaran akun lokal.
- Akun khusus owner `Irvan` yang dapat diubah dari GitHub.
- Progres terpisah per username: gold, gems, trophy, wins, losses, deck, level kartu, arena.
- Koleksi 30+ kartu: troop, spell, dan building.
- Rarity common / rare / epic / legendary.
- Upgrade level kartu memakai gold.
- Deck 8 kartu dengan rotasi 4 kartu aktif.
- Battle 1v1 vs AI, tower + king tower, energy normal/double.
- Arena unlock berdasarkan trophy.
- Animasi movement bobbing, projectile glow, hit/death particles, spell ring, poison zone, freeze/stun, building animation, tower pulse, dan revive Phoenix.
- Owner editor untuk mengubah statistik kartu secara lokal.
- Semua default kartu mudah diedit di `src/units.js`.
- Seluruh setting ekonomi, akun owner, arena, battle duration, dan URL shell ada di `src/config.js`.

## File penting yang sering diedit
- `src/config.js` — akun owner, ekonomi, arena, URL WebView.
- `src/units.js` — semua troop/spell/building dan statistiknya.
- `src/game.js` — engine battle dan animasi.
- `src/app.js` — login, lobby, koleksi, deck, profil, progres.
- `styles.css` — UI game.

Contoh troop:

```js
{id:'swordsman', type:'troop', cost:3, hp:760, damage:125, speed:58, range:22, attackSpeed:.9}
```

## WebView shell Android — build sekali
Folder `android-shell/` berisi aplikasi Android tipis yang hanya membuka:

`https://irvan1406.github.io/Game_Arena/`

Workflow `.github/workflows/build-webshell-apk.yml` membangun APK. Setelah APK terpasang, perubahan HTML/CSS/JS tidak memerlukan rebuild APK: cukup update web GitHub Pages. Rebuild APK hanya diperlukan jika mengubah kode native Android atau URL WebView.

## GitHub Pages
Workflow `.github/workflows/deploy-pages.yml` deploy web dari `main`. Di repository Settings → Pages, gunakan **GitHub Actions** sebagai source jika belum aktif.

## Jalankan web lokal

```bash
python -m http.server 8080
```

Lalu buka `http://localhost:8080`.
