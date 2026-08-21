(function(){
  const defaults = [
    {id:'swordsman',name:'Swordsman',emoji:'⚔️',cost:3,hp:760,damage:125,speed:58,range:22,attackSpeed:0.9,count:1,radius:11,target:'any',projectile:false,color:'#d7dce8'},
    {id:'archer',name:'Archer',emoji:'🏹',cost:3,hp:360,damage:92,speed:55,range:125,attackSpeed:1.05,count:2,radius:8,target:'any',projectile:true,color:'#83d4a4'},
    {id:'tank',name:'Iron Guard',emoji:'🛡️',cost:5,hp:1900,damage:145,speed:34,range:24,attackSpeed:1.35,count:1,radius:15,target:'buildings',projectile:false,color:'#9ca9bb'},
    {id:'rogue',name:'Rogue',emoji:'🗡️',cost:2,hp:330,damage:160,speed:82,range:19,attackSpeed:0.65,count:1,radius:8,target:'any',projectile:false,color:'#d58bff'},
    {id:'spearman',name:'Spearman',emoji:'🔱',cost:2,hp:250,damage:70,speed:63,range:65,attackSpeed:0.85,count:3,radius:7,target:'any',projectile:true,color:'#c4e273'},
    {id:'bomber',name:'Bomber',emoji:'💣',cost:3,hp:330,damage:220,speed:48,range:100,attackSpeed:1.5,count:1,radius:9,target:'ground',projectile:true,splash:36,color:'#ffbd66'},
    {id:'giant',name:'Colossus',emoji:'🗿',cost:6,hp:2850,damage:210,speed:28,range:26,attackSpeed:1.6,count:1,radius:18,target:'buildings',projectile:false,color:'#b89a7e'},
    {id:'mage',name:'Fire Mage',emoji:'🔥',cost:4,hp:510,damage:185,speed:46,range:118,attackSpeed:1.25,count:1,radius:10,target:'any',projectile:true,splash:42,color:'#ff795e'},
    {id:'frost',name:'Frost Witch',emoji:'❄️',cost:4,hp:560,damage:115,speed:45,range:115,attackSpeed:1.0,count:1,radius:10,target:'any',projectile:true,splash:28,color:'#84d8ff'},
    {id:'knight',name:'Knight',emoji:'🗡️',cost:4,hp:1150,damage:180,speed:50,range:23,attackSpeed:1.05,count:1,radius:12,target:'any',projectile:false,color:'#7db0ff'},
    {id:'berserker',name:'Berserker',emoji:'🪓',cost:4,hp:900,damage:245,speed:67,range:23,attackSpeed:0.95,count:1,radius:12,target:'any',projectile:false,color:'#ff6d6d'},
    {id:'ranger',name:'Ranger',emoji:'🎯',cost:5,hp:470,damage:250,speed:49,range:165,attackSpeed:1.45,count:1,radius:9,target:'any',projectile:true,color:'#8ee89a'},
    {id:'minions',name:'Sky Minions',emoji:'🦇',cost:3,hp:210,damage:78,speed:78,range:18,attackSpeed:0.78,count:4,radius:7,target:'any',projectile:false,flying:true,color:'#7f86e8'},
    {id:'dragon',name:'Baby Drake',emoji:'🐲',cost:5,hp:980,damage:160,speed:53,range:95,attackSpeed:1.25,count:1,radius:13,target:'any',projectile:true,flying:true,splash:34,color:'#72d48b'},
    {id:'golem',name:'Stone Golem',emoji:'🪨',cost:7,hp:3900,damage:185,speed:22,range:25,attackSpeed:1.75,count:1,radius:20,target:'buildings',projectile:false,color:'#7f8997'},
    {id:'gunner',name:'Arc Gunner',emoji:'⚡',cost:4,hp:620,damage:135,speed:50,range:110,attackSpeed:0.72,count:1,radius:10,target:'any',projectile:true,color:'#ffe56b'},
    {id:'assassin',name:'Shadow',emoji:'🥷',cost:5,hp:700,damage:330,speed:88,range:18,attackSpeed:1.05,count:1,radius:10,target:'any',projectile:false,color:'#4f5567'},
    {id:'healer',name:'Battle Healer',emoji:'💚',cost:4,hp:800,damage:95,speed:54,range:23,attackSpeed:1.1,count:1,radius:11,target:'any',projectile:false,healAura:18,color:'#9ef0c3'}
  ];
  const key='arena_tactics_units_v1';
  function clone(x){return JSON.parse(JSON.stringify(x))}
  function load(){try{const x=JSON.parse(localStorage.getItem(key));if(Array.isArray(x)&&x.length)return x}catch(e){}return clone(defaults)}
  window.UnitDB={defaults:clone(defaults),units:load(),save(){localStorage.setItem(key,JSON.stringify(this.units))},reset(){this.units=clone(defaults);this.save()},byId(id){return this.units.find(u=>u.id===id)}};
})();
