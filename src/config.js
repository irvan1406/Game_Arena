// KONFIGURASI UTAMA GAME_ARENA
// Akun khusus pemilik bisa diedit langsung dari file ini di GitHub.
window.GameConfig = {
  version: '2.1.0',
  title: 'Arena Tactics',
  ownerAccount: {
    username: 'Irvan',
    password: '1',
    displayName: 'Irvan',
    role: 'owner'
  },
  economy: {
    startGold: 5000,
    startGems: 250,
    winGold: 120,
    loseGold: 35,
    winTrophy: 30,
    loseTrophy: 18,
    upgradeBaseCost: 80,
    maxCardLevel: 15
  },
  battle: {
    durationSeconds: 180,
    maxEnergy: 10,
    startEnergy: 5,
    normalEnergyPerSecond: 0.72,
    doubleEnergyPerSecond: 1.25
  },
  arenas: [
    {id:'grass', name:'Emerald Field', minTrophy:0, ground:'#57914d', river:'#54a6d8', bridge:'#bd965e'},
    {id:'desert', name:'Sunset Ruins', minTrophy:300, ground:'#bf955a', river:'#5ea9cb', bridge:'#8a6b46'},
    {id:'ice', name:'Frozen Gate', minTrophy:700, ground:'#9ccbd7', river:'#4c9fcd', bridge:'#d9edf0'},
    {id:'lava', name:'Inferno Keep', minTrophy:1200, ground:'#594747', river:'#dc633f', bridge:'#8e6750'}
  ],
  // URL ini dipakai APK WebView. Setelah GitHub Pages aktif, edit game cukup commit web saja.
  webShellUrl: 'https://irvan1406.github.io/Game_Arena/'
};
