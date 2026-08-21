(function(){
  const cards = [
    // TROOPS — mudah diedit: hp, damage, speed, range, attackSpeed, cost, count, rarity, dll.
    {id:'swordsman',type:'troop',name:'Swordsman',emoji:'⚔️',rarity:'common',cost:3,hp:760,damage:125,speed:58,range:22,attackSpeed:.9,count:1,radius:11,target:'any',projectile:false,color:'#d7dce8'},
    {id:'archer',type:'troop',name:'Archer Duo',emoji:'🏹',rarity:'common',cost:3,hp:360,damage:92,speed:55,range:125,attackSpeed:1.05,count:2,radius:8,target:'any',projectile:true,color:'#83d4a4'},
    {id:'tank',type:'troop',name:'Iron Guard',emoji:'🛡️',rarity:'rare',cost:5,hp:1900,damage:145,speed:34,range:24,attackSpeed:1.35,count:1,radius:15,target:'buildings',projectile:false,color:'#9ca9bb'},
    {id:'rogue',type:'troop',name:'Rogue',emoji:'🗡️',rarity:'common',cost:2,hp:330,damage:160,speed:82,range:19,attackSpeed:.65,count:1,radius:8,target:'any',projectile:false,color:'#d58bff'},
    {id:'spearman',type:'troop',name:'Spear Squad',emoji:'🔱',rarity:'common',cost:2,hp:250,damage:70,speed:63,range:65,attackSpeed:.85,count:3,radius:7,target:'any',projectile:true,color:'#c4e273'},
    {id:'bomber',type:'troop',name:'Bomber',emoji:'💣',rarity:'rare',cost:3,hp:330,damage:220,speed:48,range:100,attackSpeed:1.5,count:1,radius:9,target:'ground',projectile:true,splash:36,color:'#ffbd66'},
    {id:'giant',type:'troop',name:'Colossus',emoji:'🗿',rarity:'epic',cost:6,hp:2850,damage:210,speed:28,range:26,attackSpeed:1.6,count:1,radius:18,target:'buildings',projectile:false,color:'#b89a7e'},
    {id:'mage',type:'troop',name:'Fire Mage',emoji:'🔥',rarity:'epic',cost:4,hp:510,damage:185,speed:46,range:118,attackSpeed:1.25,count:1,radius:10,target:'any',projectile:true,splash:42,color:'#ff795e'},
    {id:'frost',type:'troop',name:'Frost Witch',emoji:'❄️',rarity:'epic',cost:4,hp:560,damage:115,speed:45,range:115,attackSpeed:1,count:1,radius:10,target:'any',projectile:true,splash:28,slow:.35,color:'#84d8ff'},
    {id:'knight',type:'troop',name:'Knight',emoji:'🗡️',rarity:'rare',cost:4,hp:1150,damage:180,speed:50,range:23,attackSpeed:1.05,count:1,radius:12,target:'any',projectile:false,color:'#7db0ff'},
    {id:'berserker',type:'troop',name:'Berserker',emoji:'🪓',rarity:'epic',cost:4,hp:900,damage:245,speed:67,range:23,attackSpeed:.95,count:1,radius:12,target:'any',projectile:false,color:'#ff6d6d'},
    {id:'ranger',type:'troop',name:'Ranger',emoji:'🎯',rarity:'rare',cost:5,hp:470,damage:250,speed:49,range:165,attackSpeed:1.45,count:1,radius:9,target:'any',projectile:true,color:'#8ee89a'},
    {id:'minions',type:'troop',name:'Sky Minions',emoji:'🦇',rarity:'common',cost:3,hp:210,damage:78,speed:78,range:18,attackSpeed:.78,count:4,radius:7,target:'any',projectile:false,flying:true,color:'#7f86e8'},
    {id:'dragon',type:'troop',name:'Baby Drake',emoji:'🐲',rarity:'legendary',cost:5,hp:980,damage:160,speed:53,range:95,attackSpeed:1.25,count:1,radius:13,target:'any',projectile:true,flying:true,splash:34,color:'#72d48b'},
    {id:'golem',type:'troop',name:'Stone Golem',emoji:'🪨',rarity:'legendary',cost:7,hp:3900,damage:185,speed:22,range:25,attackSpeed:1.75,count:1,radius:20,target:'buildings',projectile:false,color:'#7f8997'},
    {id:'gunner',type:'troop',name:'Arc Gunner',emoji:'⚡',rarity:'rare',cost:4,hp:620,damage:135,speed:50,range:110,attackSpeed:.72,count:1,radius:10,target:'any',projectile:true,color:'#ffe56b'},
    {id:'assassin',type:'troop',name:'Shadow',emoji:'🥷',rarity:'legendary',cost:5,hp:700,damage:330,speed:88,range:18,attackSpeed:1.05,count:1,radius:10,target:'any',projectile:false,color:'#4f5567'},
    {id:'healer',type:'troop',name:'Battle Healer',emoji:'💚',rarity:'epic',cost:4,hp:800,damage:95,speed:54,range:23,attackSpeed:1.1,count:1,radius:11,target:'any',projectile:false,healAura:18,color:'#9ef0c3'},
    {id:'ram',type:'troop',name:'Battle Ram',emoji:'🐏',rarity:'rare',cost:4,hp:1200,damage:260,speed:72,range:20,attackSpeed:1.2,count:1,radius:13,target:'buildings',projectile:false,color:'#c89a63'},
    {id:'necromancer',type:'troop',name:'Necromancer',emoji:'☠️',rarity:'legendary',cost:5,hp:620,damage:130,speed:42,range:120,attackSpeed:1.15,count:1,radius:10,target:'any',projectile:true,spawnEvery:6,spawnId:'spearman',spawnCount:1,color:'#a98df0'},
    {id:'paladin',type:'troop',name:'Paladin',emoji:'🛡️',rarity:'legendary',cost:5,hp:1550,damage:170,speed:45,range:25,attackSpeed:1.05,count:1,radius:13,target:'any',projectile:false,shield:350,color:'#f4dc79'},
    {id:'cannoncart',type:'troop',name:'Cannon Cart',emoji:'💥',rarity:'epic',cost:5,hp:1050,damage:210,speed:38,range:135,attackSpeed:1.25,count:1,radius:13,target:'ground',projectile:true,color:'#9a7d64'},
    {id:'phoenix',type:'troop',name:'Phoenix',emoji:'🦅',rarity:'legendary',cost:6,hp:1200,damage:205,speed:69,range:35,attackSpeed:.9,count:1,radius:14,target:'any',projectile:false,flying:true,reviveOnce:true,color:'#ff9a4d'},

    // SPELLS
    {id:'fireball',type:'spell',name:'Fireball',emoji:'☄️',rarity:'rare',cost:4,damage:420,radius:78,color:'#ff744d'},
    {id:'freeze',type:'spell',name:'Freeze',emoji:'🧊',rarity:'epic',cost:4,damage:80,radius:90,freeze:3.2,color:'#8ee7ff'},
    {id:'zap',type:'spell',name:'Zap',emoji:'⚡',rarity:'common',cost:2,damage:180,radius:70,stun:.75,color:'#fff36a'},
    {id:'healspell',type:'spell',name:'Healing Light',emoji:'✨',rarity:'rare',cost:3,heal:350,radius:85,color:'#9effc7'},
    {id:'meteor',type:'spell',name:'Meteor',emoji:'🌠',rarity:'legendary',cost:6,damage:720,radius:95,color:'#ff6652'},
    {id:'poison',type:'spell',name:'Poison Cloud',emoji:'☣️',rarity:'epic',cost:4,damagePerSecond:95,duration:5,radius:88,color:'#9bd34f'},

    // BUILDINGS
    {id:'cannon',type:'building',name:'Cannon',emoji:'🛢️',rarity:'common',cost:3,hp:1150,damage:155,range:140,attackSpeed:1.05,duration:32,radius:18,target:'ground',color:'#88705b'},
    {id:'tesla',type:'building',name:'Tesla',emoji:'⚡',rarity:'rare',cost:4,hp:980,damage:185,range:125,attackSpeed:.85,duration:30,radius:17,target:'any',color:'#5e8ea8'},
    {id:'inferno',type:'building',name:'Inferno Tower',emoji:'🔥',rarity:'epic',cost:5,hp:1450,damage:115,range:135,attackSpeed:.45,duration:35,radius:20,target:'any',ramp:true,color:'#b96345'},
    {id:'spawner',type:'building',name:'Barracks',emoji:'🏕️',rarity:'rare',cost:5,hp:1600,damage:0,range:0,attackSpeed:2,duration:38,radius:21,target:'none',spawnEvery:5,spawnId:'swordsman',spawnCount:1,color:'#8a754d'}
  ];

  const storageKey='game_arena_cards_v2';
  const clone=x=>JSON.parse(JSON.stringify(x));
  function load(){try{const x=JSON.parse(localStorage.getItem(storageKey));if(Array.isArray(x)&&x.length)return x}catch(e){}return clone(cards)}
  window.CardDB={
    defaults:clone(cards), cards:load(),
    save(){localStorage.setItem(storageKey,JSON.stringify(this.cards))},
    reset(){this.cards=clone(cards);this.save()},
    byId(id){return this.cards.find(c=>c.id===id)},
    list(type){return type?this.cards.filter(c=>c.type===type):this.cards}
  };
  // Kompatibilitas dengan kode lama/editor lama.
  window.UnitDB={get units(){return CardDB.cards},set units(v){CardDB.cards=v},defaults:CardDB.defaults,save:()=>CardDB.save(),reset:()=>CardDB.reset(),byId:id=>CardDB.byId(id)};
})();
