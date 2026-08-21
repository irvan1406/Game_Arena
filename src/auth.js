(function(){
  const USERS_KEY='game_arena_users_v2';
  const SESSION_KEY='game_arena_session_v2';
  const PROGRESS_KEY='game_arena_progress_v2';
  const norm=s=>String(s||'').trim().toLowerCase();
  const clone=x=>JSON.parse(JSON.stringify(x));
  function users(){try{return JSON.parse(localStorage.getItem(USERS_KEY))||[]}catch(e){return[]}}
  function saveUsers(v){localStorage.setItem(USERS_KEY,JSON.stringify(v))}
  function progressMap(){try{return JSON.parse(localStorage.getItem(PROGRESS_KEY))||{}}catch(e){return{}}}
  function saveProgress(v){localStorage.setItem(PROGRESS_KEY,JSON.stringify(v))}
  function defaultProgress(username){
    const econ=GameConfig.economy;
    return {username,displayName:username,gold:econ.startGold,gems:econ.startGems,trophies:0,wins:0,losses:0,
      deck:['swordsman','archer','knight','bomber','giant','mage','fireball','cannon'],
      levels:{},xp:{},selectedArena:'grass',createdAt:Date.now(),lastLogin:Date.now()};
  }
  function ensureProgress(username,displayName){const m=progressMap(),k=norm(username);if(!m[k])m[k]=defaultProgress(username);if(displayName)m[k].displayName=displayName;m[k].lastLogin=Date.now();saveProgress(m);return clone(m[k])}
  function owner(){return GameConfig.ownerAccount}
  window.Auth={
    login(username,password){
      const u=String(username||'').trim(), p=String(password??'');
      const o=owner();
      if(norm(u)===norm(o.username)&&p===String(o.password)){
        const session={username:o.username,displayName:o.displayName||o.username,role:'owner'};
        localStorage.setItem(SESSION_KEY,JSON.stringify(session));ensureProgress(o.username,session.displayName);return {ok:true,session};
      }
      const found=users().find(x=>norm(x.username)===norm(u));
      if(!found||found.password!==p)return {ok:false,error:'Username atau password salah'};
      const session={username:found.username,displayName:found.displayName||found.username,role:'user'};
      localStorage.setItem(SESSION_KEY,JSON.stringify(session));ensureProgress(found.username,session.displayName);return {ok:true,session};
    },
    register(username,password){
      const u=String(username||'').trim(),p=String(password??'');
      if(u.length<3)return {ok:false,error:'Username minimal 3 karakter'};
      if(!p.length)return {ok:false,error:'Password tidak boleh kosong'};
      const o=owner(), arr=users();
      if(norm(u)===norm(o.username)||arr.some(x=>norm(x.username)===norm(u)))return {ok:false,error:'Username sudah dipakai'};
      arr.push({username:u,displayName:u,password:p,createdAt:Date.now()});saveUsers(arr);
      return this.login(u,p);
    },
    session(){try{return JSON.parse(localStorage.getItem(SESSION_KEY))}catch(e){return null}},
    logout(){localStorage.removeItem(SESSION_KEY)},
    isOwner(){return this.session()?.role==='owner'},
    getProgress(){const s=this.session();if(!s)return null;return ensureProgress(s.username,s.displayName)},
    saveProgress(p){const s=this.session();if(!s||!p)return;const m=progressMap();m[norm(s.username)]=clone(p);saveProgress(m)},
    updateProfile({displayName,password}){
      const s=this.session();if(!s)return {ok:false,error:'Belum login'};
      if(s.role==='owner'){
        if(displayName){s.displayName=String(displayName).trim();localStorage.setItem(SESSION_KEY,JSON.stringify(s));const p=this.getProgress();p.displayName=s.displayName;this.saveProgress(p)}
        return {ok:true,note:'Nama tampilan owner berubah lokal. Username/password owner tetap diedit dari src/config.js di GitHub.'};
      }
      const arr=users(), idx=arr.findIndex(x=>norm(x.username)===norm(s.username));if(idx<0)return {ok:false,error:'Akun tidak ditemukan'};
      if(displayName)arr[idx].displayName=String(displayName).trim();if(password!==undefined&&String(password).length)arr[idx].password=String(password);saveUsers(arr);
      s.displayName=arr[idx].displayName;localStorage.setItem(SESSION_KEY,JSON.stringify(s));const p=this.getProgress();p.displayName=s.displayName;this.saveProgress(p);return {ok:true};
    },
    exportData(){return {users:users().map(({password,...x})=>x),progress:progressMap()}},
    resetLocalAccounts(){localStorage.removeItem(USERS_KEY);localStorage.removeItem(PROGRESS_KEY);localStorage.removeItem(SESSION_KEY)}
  };
})();
