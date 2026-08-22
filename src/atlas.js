(()=>{
const IDS=['swordsman','archer','giant','spearman','dragon','fireball','minions','rogue','knight','cannon','bomber','golem'];
const pos=new Map(IDS.map((id,i)=>[id,{c:i%3,r:Math.floor(i/3)}]));
const url='assets/cards/card-atlas.webp?v=3';
function frameStyle(id){const p=pos.get(id);if(!p)return null;return {backgroundImage:`url("${url}")`,backgroundSize:'300% 400%',backgroundPosition:`${p.c*50}% ${p.r*(100/3)}%`}}
function addFrame(el,id){const s=frameStyle(id);if(!el||!s||el.querySelector('.atlas-art'))return;const art=document.createElement('div');art.className='atlas-art';Object.assign(art.style,s);el.prepend(art);const em=el.querySelector('.emoji');if(em)em.style.opacity='0'}
function findCardByName(name){return CardDB?.cards?.find(c=>c.name===name)}
function refresh(){document.querySelectorAll('.collection-card[data-id]').forEach(el=>addFrame(el,el.dataset.id));document.querySelectorAll('#hand .card').forEach(el=>{const c=findCardByName(el.querySelector('.name')?.textContent||'');if(c)addFrame(el,c.id)});document.querySelectorAll('.deck-slot').forEach(el=>{if(el.querySelector('.atlas-art'))return;const c=CardDB?.cards?.find(x=>(el.textContent||'').includes(x.name));if(c)addFrame(el,c.id)})}
const img=new Image();img.src=url;
function draw(ctx,id,x,y,size,team='p',anim=0){const p=pos.get(id);if(!p||!img.complete||!img.naturalWidth)return false;const sw=img.naturalWidth/3,sh=img.naturalHeight/4;ctx.save();ctx.translate(x,y);const bob=Math.sin(anim)*1.4;ctx.translate(0,bob);ctx.shadowColor='rgba(0,0,0,.48)';ctx.shadowBlur=7;ctx.shadowOffsetY=4;ctx.beginPath();ctx.arc(0,0,size*.54,0,Math.PI*2);ctx.clip();ctx.drawImage(img,p.c*sw,p.r*sh,sw,sh,-size/2,-size/2,size,size);ctx.restore();ctx.save();ctx.strokeStyle=team==='p'?'#59a7ff':'#ff6677';ctx.lineWidth=2.5;ctx.beginPath();ctx.arc(x,y+bob,size*.54,0,Math.PI*2);ctx.stroke();ctx.restore();return true}
new MutationObserver(refresh).observe(document.documentElement,{childList:true,subtree:true});window.addEventListener('load',refresh);window.GameAtlas={url,draw,refresh,has:id=>pos.has(id)};
})();