/* CLOSET dress-up rig: shared photographic coordinates, per-body fitting and garment occlusion. */
(function(root){'use strict';
const manifest=root.CLOSET_ASSETS||(typeof module!=='undefined'?require('./asset-manifest.js'):null);
const W=768,H=1152;
const characters=[{id:'muse',label:'Feminino 1',subtitle:'Original',profile:'muse'},{id:'flora',label:'Feminino 2',subtitle:'Foto enviada',profile:'muse'},{id:'rio',label:'Masculino 1',subtitle:'Foto enviada',profile:'icon'},{id:'pampa',label:'Masculino 2',subtitle:'Foto enviada',profile:'icon'}];
const getCharacter=id=>characters.find(c=>c.id===(id==='icon'?'rio':id))||characters[0];
const profile=id=>getCharacter(id).profile;
const longBottom=(look,id)=>['jeans','trousers'].includes(look.bottom?.id)||(profile(id)==='icon'&&look.bottom?.id==='midi');
class CharacterRig {
 constructor(id){this.character=getCharacter(id);this.id=this.character.id;this.profile=this.character.profile;this.config=manifest.characters[this.id];}
 descriptors(look){
  const accessory=look.accessory,neckAccessory=accessory&&['scarf','necklace'].includes(accessory.id),watch=this.profile==='icon'&&accessory?.id==='earrings';
  const accessoryPaths=accessory?(manifest.pieces[this.profile+':accessory:'+accessory.id]||[]):[],list=[];
  if(neckAccessory)for(const path of accessoryPaths)list.push({path,category:'accessory-back',item:accessory});
  list.push({path:this.config.body,category:'body',footwear:look.shoe,bottomId:look.bottom?.id,topId:look.top?.id});
  if(this.profile==='muse')list.push({path:this.config.body,category:'hair-back'});
  const joined=look.top?.id==='tradition'&&look.bottom?.id==='tradition'&&(this.profile==='muse'||look.shoe?.id==='tradition');
  const tucked=this.profile==='icon'&&look.bottom?.id==='tradition'&&look.shoe?.kind==='boot';
  const order=joined?(this.profile==='muse'?['shoe','outfit','accessory']:['outfit','accessory']):tucked?['bottom','shoe','top','accessory']:['shoe','bottom','top','accessory'];
  for(const category of order){
   if(category==='outfit'){
    
    list.push({path:manifest.outfits[this.profile],category:'outfit',item:look.top});
    list.push({path:this.config.body,category:this.profile==='muse'?'female-neck':'neck',item:look.top});continue;
   }
   const item=look[category];if(!item||item.id==='none'||(category==='accessory'&&watch))continue;
   for(const path of manifest.pieces[this.profile+':'+category+':'+item.id]||[])list.push({path,category,item,topId:look.top?.id,bottomId:look.bottom?.id,frontOnly:category==='shoe'&&longBottom(look,this.id)});
   if(category==='top'&&this.profile==='icon')list.push({path:this.config.body,category:'neck',item});
   if(category==='top'&&this.profile==='muse'&&['shirt','tee','blazer','jacket','knit','tradition'].includes(item.id))list.push({path:this.config.body,category:'female-neck',item});
   if(category==='accessory'&&this.profile==='icon'&&['bag','cream-bag'].includes(item.id))list.push({path:this.config.body,category:'accessory-arm',item,top:look.top});
  }
  list.push({path:this.config.hands,category:'hands'});if(watch)for(const path of accessoryPaths)list.push({path,category:'accessory',item:accessory});return list;
 }
 layers(look){return this.descriptors(look).map(d=>d.path);}
 layerStyle(d){
  if(d.category==='hair-back')return 'clip-path:inset(0 0 79.34% 0)';
  if(d.category==='accessory'&&d.item.id==='scarf')return this.profile==='muse'?'clip-path:polygon(0 100%,0 20.3%,41% 20.3%,45% 21.8%,49.5% 22.2%,54% 21.8%,58% 20.3%,100% 20.3%,100% 100%)':'clip-path:polygon(0 100%,0 21%,40% 21%,45% 22.2%,49.5% 22.6%,54% 22.2%,60% 21%,100% 21%,100% 100%)';
  if(d.category==='accessory'&&d.item.id==='necklace')return 'clip-path:inset('+(this.profile==='muse'?'22.57%':'20.75%')+' 0 0 0)';
  if(d.category==='body'&&d.footwear&&!d.footwear.open)return 'clip-path:inset(0 0 '+(this.profile==='icon'&&d.footwear.id==='tradition'&&d.bottomId==='tradition'?'25.35%':'7.12%')+' 0)';
  if(d.frontOnly)return 'clip-path:inset(93.2% 0 0 0)';
  if(d.category==='female-neck'&&d.item.id==='tradition')return 'clip-path:polygon(44% 16%,55.6% 16%,56% 18.4%,50% 19.5%,43.5% 18.4%)';
  if(d.category==='female-neck')return 'clip-path:polygon(44% 16%,55.6% 16%,56.2% 20%,53% 23.7%,49.9% 24.8%,46% 23.7%,43.4% 20%)';
  if(d.category==='neck')return 'clip-path:polygon(41.7% 13%,57.8% 13%,57.4% 17%,54% 20.5%,50% 21.2%,45% 20%,42% 17%)';
  return '';
 }
 render(look){const p=this.config.photo;return '<div class="rig-fallback" role="img" aria-label="Personagem '+this.character.label+' com o look escolhido">'+this.descriptors(look).filter(d=>d.category!=='chest-base'&&!(p&&['neck','female-neck'].includes(d.category))).map(d=>{let style=this.layerStyle(d);if(p&&d.category==='body'){const bottom=d.footwear&&!d.footwear.open?(this.profile==='icon'&&d.footwear.id==='tradition'&&d.bottomId==='tradition'?'25.35%':'7.12%'):'0';style='filter:'+p.tone+';clip-path:inset(18.23% 0 '+bottom+' 0)';}else if(p&&d.category==='hands')style+=';filter:'+p.tone;return '<img src="'+d.path+'" alt="" draggable="false" decoding="async" style="'+style+'">'+(p&&d.category==='body'?photoMarkup(this.id):'');}).join('')+'</div>';}

}
class AccessoryFitter {
 static frontPath(ctx,id,item){
  ctx.beginPath();
  if(item.id==='scarf'){
   const male=profile(id)==='icon',side=male?242:234,front=male?260:255;
   ctx.moveTo(0,H);ctx.lineTo(0,side);ctx.lineTo(male?305:316,side);
   ctx.quadraticCurveTo(343,front-2,380,front);ctx.quadraticCurveTo(417,front-2,male?459:446,side);
   ctx.lineTo(W,side);ctx.lineTo(W,H);ctx.closePath();
  }else ctx.rect(0,profile(id)==='icon'?239:260,W,H);
 }
 static render(image,d,id){
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  const item=d.item,male=profile(id)==='icon';if(male&&item.id==='glasses'){ctx.translate(383,117);ctx.scale(.91,.91);ctx.translate(-383,-117);}
  if(male&&['bag','cream-bag'].includes(item.id)&&!d.preview){
   ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.shadowColor='#21172555';ctx.shadowBlur=3;ctx.shadowOffsetX=1.5;
   ctx.strokeStyle=item.id==='bag'?'#302a2e':'#59432f';ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(278,226);ctx.quadraticCurveTo(350,371,item.id==='bag'?432:419,532);ctx.stroke();
   ctx.shadowColor='transparent';ctx.strokeStyle=item.id==='bag'?'#79676d':'#a18765';ctx.lineWidth=.9;ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(275,227);ctx.quadraticCurveTo(347,372,item.id==='bag'?429:416,533);ctx.stroke();ctx.restore();
  }
  if(male&&item.id==='earrings'&&!d.preview){
   // The watch is centered on the wrist, above the hand sprite.
   ctx.drawImage(image,157,617,57,30,190,596,42,22);
  }else if(!male&&item.id==='earrings'){
   if(id==='flora'){ctx.drawImage(image,313,128,60,61,331,165,20,24);ctx.drawImage(image,390,128,61,61,420,164,20,24);}else{ctx.drawImage(image,313,128,60,61,312,166,25,27);ctx.drawImage(image,390,128,61,61,425,166,25,27);}
  }else if(!male&&['bag','cream-bag'].includes(item.id)){
   ctx.drawImage(image,488,618,133,145,487,632,119,130);
  }else if(!male&&item.id==='glasses'){
   if(id==='flora')ctx.drawImage(image,325,107,113,45,337,101,92,36);else ctx.drawImage(image,325,107,113,45,326,111,107,43);
  }else ctx.drawImage(image,0,0,W,H);
  if(['necklace','scarf'].includes(item.id)&&!d.preview){
   ctx.save();ctx.globalCompositeOperation=d.category==='accessory-back'?'destination-out':'destination-in';
   this.frontPath(ctx,id,item);ctx.fillStyle='#000';ctx.fill();ctx.restore();
  }
  return canvas;
 }
}

function insetSleeves(source,limit=654){const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');ctx.drawImage(source,0,0);for(let y=210;y<Math.min(654,limit<654?limit+16:654);y++){const strength=limit<654?1-smooth(limit-16,limit+16,y):1,d0=y<300?(y-210)/9:y<450?10+(y-300)*.08:y<620?22+(y-450)*8/170:30,d=d0*strength;const sx=[0,100,235,275,493,533,668,W],dx=[0,100+d,235+d,275,493,533-d,668-d,W];ctx.clearRect(0,y,W,1);for(let i=0;i<sx.length-1;i++)ctx.drawImage(source,sx[i],y,sx[i+1]-sx[i],1,dx[i],y,dx[i+1]-dx[i],1);}return canvas;}

const smooth=(a,b,v)=>{const t=Math.min(1,Math.max(0,(v-a)/(b-a)));return t*t*(3-2*t);};
const bodyProportions={muse:{head:1.035,headY:.035,torso:.985,hip:.99},flora:{head:1.13,headY:.10,torso:.98,hip:.985},rio:{head:1.065,headY:.04,torso:.97,hip:.985,waistLift:18},pampa:{head:1.085,headY:.055,torso:.97,hip:.985,waistLift:18}};
function proportionate(source,id){
 const p=bodyProportions[getCharacter(id).id],out=document.createElement('canvas');out.width=W;out.height=H;const ctx=out.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
 function targetY(y){return y+(y-115)*p.headY*(1-smooth(190,250,y))-(p.waistLift||0)*smooth(242,565,y)*(1-smooth(700,1140,y));}
 for(let y=0;y<H;y++){const head=1-smooth(182,248,y),torso=smooth(205,270,y)*(1-smooth(580,700,y)),hip=smooth(580,700,y)*(1-smooth(1030,1140,y));const sx=1+(p.head-1)*head+(p.torso-1)*torso+(p.hip-1)*hip,y1=targetY(y),y2=targetY(y+1);ctx.drawImage(source,0,y,W,1,(W-W*sx)/2,y1,W*sx,Math.max(1,y2-y1+.35));}
 return out;
}
function rowBounds(map,y){const v=Math.max(0,Math.min(map.length-1,y/4)),a=Math.floor(v),b=Math.min(a+1,map.length-1),t=v-a;return [map[a][0]*(1-t)+map[b][0]*t,map[a][1]*(1-t)+map[b][1]*t];}
function insetX(x,y,limit=654){if(y<210||y>=654)return x;const strength=limit<654?1-smooth(limit-16,limit+16,y):1,d0=y<300?(y-210)/9:y<450?10+(y-300)*.08:y<620?22+(y-450)*8/170:30,d=d0*strength;const a=[0,100,235,275,493,533,668,W],b=[0,100+d,235+d,275,493,533-d,668-d,W];for(let i=0;i<a.length-1;i++)if(x<=a[i+1])return b[i]+(x-a[i])*(b[i+1]-b[i])/(a[i+1]-a[i]);return x;}
function fitFabric(source,d,id){
 const fit=manifest.fit,raw=fit?.pieces[d.path],body=fit?.bodies[getCharacter(id).id];if(!raw||!body)return source;
 const out=document.createElement('canvas');out.width=W;out.height=H;const ctx=out.getContext('2d');ctx.imageSmoothingQuality='high';ctx.drawImage(source,0,0);
 const male=profile(id)==='icon',ease=!male&&d.item?.id==='pink'?19:male?12:10;
 const longSleeve=male?['shirt','blazer','knit','jacket','satin','tradition'].includes(d.item?.id):['blazer','jacket'].includes(d.item?.id);
 for(let y=178;y<624;y++){
  let [l,r]=rowBounds(raw.rows,y);if(r-l<45)continue;
  if(male){const limit=raw.sleeveEnd<450?raw.sleeveEnd:654;l=insetX(l,y,limit);r=insetX(r,y,limit);}
  const [bl,br]=rowBounds(body.rows,y),seamEase=ease*(1-.75*smooth(500,620,y)),fade=(1-smooth(600,626,y)),allow=longSleeve?smooth(248,278,y)*(1-smooth(584,608,y)):0,nl=l+(Math.max(0,bl-seamEase-l)+Math.min(0,bl-seamEase-l)*allow)*fade,nr=r-(Math.max(0,r-br-seamEase)+Math.min(0,r-br-seamEase)*allow)*fade;
  if(Math.abs(nl-l)+Math.abs(nr-r)<.2)continue;
  const cl=330,cr=438;
  if(l>=cl-12||r<=cr+12)continue;
  ctx.clearRect(0,y,W,1);
  ctx.drawImage(source,l,y,cl-l,1,nl,y,cl-nl,1);
  ctx.drawImage(source,cl,y,cr-cl,1,cl,y,cr-cl,1);
  ctx.drawImage(source,cr,y,r-cr+1,1,cr,y,nr-cr+1,1);
 }
 return out;
}
function fitFemaleShoulders(source,d,id){
 if(profile(id)!=='muse'||d.category!=='top'||!['shirt','tee','blazer','jacket','knit'].includes(d.item?.id))return source;
 const c=document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d');ctx.imageSmoothingQuality='high';ctx.drawImage(source,0,0);
 for(let x=180;x<590;x++){const lift=14*smooth(28,90,Math.abs(x-384));if(lift<.1)continue;ctx.clearRect(x,190,1,250);ctx.drawImage(source,x,190,1,70,x,190,1,70-lift);ctx.drawImage(source,x,260,1,180,x,260-lift,1,180+lift);}
 return c;
}
function hideFemaleBase(ctx,d,id){
 const core=manifest.fit?.bodies[id]?.core;if(!core)return;
 const topPath=manifest.pieces['muse:top:'+d.topId]?.[0],topEnd=manifest.fit?.pieces[topPath]?.box?.[3]||536,bottomPath=manifest.pieces['muse:bottom:'+d.bottomId]?.[0],bottomStart=d.topId?500:(manifest.fit?.pieces[bottomPath]?.box?.[1]||501)-1,covered=longBottom({bottom:{id:d.bottomId}},id)||d.bottomId==='tradition',end=covered?646:627;
 for(let y=355;y<end;y++){
  const top=d.topId&&y<Math.min(627,topEnd),bottom=d.bottomId&&y>=bottomStart;
  if(!top&&!bottom)continue;if(bottom&&y>=550){ctx.clearRect(250,y,270,1);continue;}const [l,r]=core[y];
  if(r-l>12){const left=Math.max(y<400?310:250,l-3),right=Math.min(y<400?458:520,r+4);ctx.clearRect(left,y,right-left,1);}
  else if(bottom&&y>=500)ctx.clearRect(250,y,270,1);
 }
}

function repairedSkin(image,id){
 const out=document.createElement('canvas');out.width=W;out.height=H;const ctx=out.getContext('2d');ctx.drawImage(image,0,0);
 if(profile(id)!=='muse'){ctx.clearRect(0,202,336,14);ctx.clearRect(434,202,W-434,14);return out;}
 const skin=document.createElement('canvas');skin.width=W;skin.height=H;const sc=skin.getContext('2d');sc.imageSmoothingQuality='high';
 const a=id==='flora'?[306,346,428,467]:[298,330,434,466];sc.save();sc.beginPath();sc.moveTo(a[0],218);sc.lineTo(a[1],218);sc.lineTo(a[1]+4,329);sc.lineTo(a[0]-4,329);sc.closePath();sc.moveTo(a[2],218);sc.lineTo(a[3],218);sc.lineTo(a[3]+4,329);sc.lineTo(a[2]-4,329);sc.closePath();sc.rect(321,285,125,43);sc.clip();
 sc.drawImage(image,370,224,24,18,290,214,190,120);sc.restore();sc.globalCompositeOperation='destination-in';sc.drawImage(image,0,0);ctx.drawImage(skin,0,0);return out;
}
function fittedShoe(image,d,id){
 const box=manifest.fit?.pieces[d.path]?.box,feet=manifest.fit?.bodies[getCharacter(id).id]?.feet;if(!box||!feet)return image;
 const side=/-1\.webp$/.test(d.path)?1:0,center=(box[0]+box[2])/2,dx=feet[side]-center,dy=1138-box[3],out=document.createElement('canvas');out.width=W;out.height=H;out.getContext('2d').drawImage(image,dx,dy);return out;
}



function fitBottom(source,d,id){
 const data=manifest.fit?.pieces[d.path],body=manifest.fit?.bodies[getCharacter(id).id];if(!data||!body)return source;
 const male=profile(id)==='icon',isOutfit=d.category==='outfit';if(isOutfit&&!male)return source;
 const pants=isOutfit||(d.category==='bottom'&&(longBottom({bottom:{id:d.item?.id}},id)||(male&&d.item?.id==='tradition')));
 const topPath=manifest.pieces[profile(id)+':top:'+d.topId]?.[0],top=manifest.fit.pieces[topPath],waistY=data.box[1]+12;
 const median=(map,y)=>{const v=[-12,-8,-4,0,4,8,12].map(o=>rowBounds(map,y+o)).filter(p=>p[1]-p[0]>80).sort((a,b)=>(a[1]-a[0])-(b[1]-b[0]));return v[Math.floor(v.length/2)]||[280,488];};
 let ratio=1;
 if(!isOutfit){
  const raw=median(data.rows,waistY),b=median(body.waist,waistY);let target=b[1]-b[0]+8;
  if(top&&top.torso&&top.box[3]>data.box[1]+4){const ty=Math.min(waistY,top.box[3]-14);let t=median(top.torso,ty);if(male){const limit=top.sleeveEnd<450?top.sleeveEnd:654;t=t.map(x=>insetX(x,ty,limit));}target=Math.min(target,t[1]-t[0]-8);}
  ratio=Math.max(.78,Math.min(1,target/Math.max(1,raw[1]-raw[0])));
 }
 const c=document.createElement('canvas');c.width=W;c.height=H;const ctx=c.getContext('2d');ctx.imageSmoothingQuality='high';const end=data.legEnd||1070,legs=data.legs||body.feet;
 for(let y=Math.max(0,data.box[1]-2);y<Math.min(H,data.box[3]+2);y++){
  const raw=rowBounds(data.rows,y),l=raw[0],r=raw[1];if(r-l<2)continue;
  if(isOutfit&&y<650){ctx.drawImage(source,0,y,W,1,0,y,W,1);continue;}
  const scale=1+(ratio-1)*(1-smooth(waistY+24,waistY+(pants?135:82),y)),nl=384+(l-384)*scale,nr=384+(r-384)*scale;
  const w=pants?smooth(650,Math.max(760,end),y):0,dx1=(body.feet[0]-legs[0])*w,dx2=(body.feet[1]-legs[1])*w;
  if(l<384&&nl<384)ctx.drawImage(source,l,y,384-l,1,nl+dx1,y,384-nl,1);
  if(r>384&&nr>384)ctx.drawImage(source,384,y,r-384+1,1,384+dx2,y,nr-384+1,1);
 }
 return c;
}

class SpriteCache {
 constructor(){this.images=new Map();this.bodies=new Map();this.fitted=new Map();this.thumbnails=new Map();this.textures=new WeakMap();}
 image(path){if(!this.images.has(path))this.images.set(path,new Promise((resolve,reject)=>{let attempts=0;const load=()=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>{if(attempts++<1){setTimeout(load,100);return;}this.images.delete(path);reject(new Error('Não foi possível carregar '+path));};image.src=path;};load();}));return this.images.get(path);}
 async body(id){
  const config=manifest.characters[getCharacter(id).id],photo=config.photo;
  if(!photo){if(!this.bodies.has(id))this.bodies.set(id,this.image(config.body).then(image=>repairedSkin(image,id)).catch(error=>{this.bodies.delete(id);throw error;}));return this.bodies.get(id);}
  if(!this.bodies.has(id))this.bodies.set(id,(async()=>{
   const [body,face,matte]=await Promise.all([this.image(config.body),this.image(photo.path),this.image(photo.mask)]),canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');
   ctx.filter=photo.tone;ctx.drawImage(body,0,0,W,H);ctx.filter='none';ctx.clearRect(0,0,W,210);
   const cut=document.createElement('canvas');cut.width=W;cut.height=H;const cc=cut.getContext('2d');cc.setTransform(...photo.matrix);cc.drawImage(face,0,0);cc.setTransform(1,0,0,1,0,0);
   const mask=document.createElement('canvas');mask.width=W;mask.height=H;const mc=mask.getContext('2d');mc.setTransform(...photo.matrix);mc.drawImage(matte,0,0);mc.setTransform(1,0,0,1,0,0);mc.globalCompositeOperation='destination-out';const fade=mc.createLinearGradient(0,215,0,245);fade.addColorStop(0,'rgba(0,0,0,0)');fade.addColorStop(1,'rgba(0,0,0,1)');mc.fillStyle=fade;mc.fillRect(330,215,108,H-215);
   cc.globalCompositeOperation='destination-in';cc.drawImage(mask,0,0);ctx.drawImage(cut,0,0);return canvas;
  })());return this.bodies.get(id);
 }
 async surface(d,id){const key=[id,d.category,d.path,d.category.includes('neck')?d.item.id:'',d.frontOnly?'toe':'full',d.preview?'preview':'worn',d.top?.id||'',d.footwear?.id||'',d.bottomId||'',['body','bottom'].includes(d.category)?d.topId||'':''].join(':');if(!this.fitted.has(key))this.fitted.set(key,this.fit(d,id).catch(error=>{this.fitted.delete(key);throw error;}));const task=this.fitted.get(key);this.fitted.delete(key);this.fitted.set(key,task);while(this.fitted.size>40)this.fitted.delete(this.fitted.keys().next().value);return task;}
 async fit(d,id){
  const source=d.path,male=profile(id)==='icon'&&d.category==='top';
  const config=manifest.characters[getCharacter(id).id];const rawImage=source===config.body&&!['chest-base','hair-back'].includes(d.category)?await this.body(id):await this.image(source),image=source===config.body?rawImage:d.category==='shoe'&&!d.preview?fittedShoe(rawImage,d,id):rawImage,canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});if(['hands','chest-base'].includes(d.category)&&config.photo)ctx.filter=config.photo.tone;ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  if(d.category==='hair-back'){
   // Restore original hair over the skin repair and behind the garments.
   ctx.save();ctx.beginPath();ctx.rect(0,0,W,212);
   if(id==='flora'){ctx.moveTo(270,204);ctx.lineTo(342,204);ctx.lineTo(334,218);ctx.lineTo(328,224);ctx.lineTo(320,228);ctx.lineTo(310,232);ctx.lineTo(280,234);ctx.lineTo(270,234);ctx.closePath();ctx.moveTo(425,204);ctx.lineTo(472,204);ctx.lineTo(474,225);ctx.lineTo(458,225);ctx.lineTo(444,218);ctx.lineTo(432,212);ctx.closePath();}
   else{ctx.moveTo(260,204);ctx.lineTo(343,204);ctx.lineTo(334,218);ctx.lineTo(322,230);ctx.lineTo(305,237);ctx.lineTo(293,245);ctx.lineTo(271,253);ctx.lineTo(260,253);ctx.closePath();ctx.moveTo(424,204);ctx.lineTo(495,204);ctx.lineTo(506,257);ctx.lineTo(486,248);ctx.lineTo(465,239);ctx.lineTo(447,232);ctx.lineTo(435,218);ctx.closePath();ctx.moveTo(270,238);ctx.lineTo(299,238);ctx.lineTo(289,302);ctx.lineTo(287,346);ctx.lineTo(294,381);ctx.lineTo(310,419);ctx.lineTo(278,419);ctx.closePath();ctx.moveTo(457,237);ctx.lineTo(525,237);ctx.lineTo(525,419);ctx.lineTo(449,419);ctx.lineTo(463,379);ctx.lineTo(468,331);ctx.lineTo(480,291);ctx.closePath();}
   ctx.clip();ctx.drawImage(image,0,0,W,H);ctx.restore();
  }else if(d.category==='chest-base'){ctx.drawImage(image,336,245,17,47,297,234,20,66);ctx.drawImage(image,420,245,17,47,442,234,18,66);}
  else if(['accessory','accessory-back'].includes(d.category)){ctx.drawImage(AccessoryFitter.render(image,d,id),0,0);}
  else if(d.category==='accessory-arm'){
   ctx.save();ctx.beginPath();ctx.moveTo(500,320);ctx.bezierCurveTo(545,318,555,346,562,378);ctx.lineTo(587,468);ctx.lineTo(608,552);ctx.lineTo(614,647);ctx.lineTo(548,660);ctx.lineTo(547,596);ctx.lineTo(537,512);ctx.lineTo(520,440);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,W,H);
   if(d.top){const path=manifest.pieces[profile(id)+':top:'+d.top.id]?.[0];if(path)ctx.drawImage(await this.surface({path,category:'top',item:d.top},id),0,0);}
   ctx.restore();
  }
  else if(profile(id)==='muse'&&d.category==='top'){ctx.drawImage(image,0,0,W,H);}
  else if(d.category==='top'){
   const regular=male,from=regular?180:210,to=regular?650:620;
   // Fitted fabric with a straighter men's waist; preserve original sleeve anchors.
   for(let y=from;y<to;y++){
    const scale=1;
    ctx.drawImage(image,0,y,W,1,(W-W*scale)/2,y,W*scale,1);
   }
  }else if(d.category==='female-neck'){const front=d.item.id==='tradition'?225:['jacket','knit'].includes(d.item.id)?265:286;ctx.save();ctx.beginPath();ctx.moveTo(338,185);ctx.lineTo(427,185);ctx.lineTo(432,d.item.id==='tradition'?211:232);ctx.bezierCurveTo(426,d.item.id==='tradition'?219:245,407,front-10,383,front);ctx.bezierCurveTo(361,front-10,339,d.item.id==='tradition'?220:246,333,d.item.id==='tradition'?212:234);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,W,H);ctx.restore();}else if(d.category==='neck'){const front=['tee','knit'].includes(d.item.id)?225:244;ctx.save();ctx.beginPath();ctx.moveTo(320,148);ctx.lineTo(444,148);ctx.lineTo(441,193);ctx.bezierCurveTo(438,216,414,front,384,front);ctx.bezierCurveTo(352,front,326,217,322,194);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,W,H);ctx.restore();}else ctx.drawImage(image,0,0,W,H);
  if(male&&!manifest.fitted){const fitted=document.createElement('canvas');fitted.width=W;fitted.height=H;const fc=fitted.getContext('2d');fc.drawImage(canvas,0,340,W,H-340,0,340,W,H-340);for(let x=0;x<W;x++){const lift=18*Math.min(1,Math.max(0,(Math.abs(x-384)-55)/50));fc.drawImage(canvas,x,180,1,160,x,180-lift,1,160+lift);}ctx.clearRect(0,0,W,H);ctx.drawImage(fitted,0,0);}
  if(!manifest.assetsPrepared&&root.location?.protocol!=='file:'){const pixels=ctx.getImageData(0,0,W,H),a=pixels.data;
  for(let i=0;i<a.length;i+=4){
   if(a[i+3]<28){a[i+3]=0;continue;}

  }
  if(d.category==='top'){
   const labels=new Uint16Array(W*H),queue=new Int32Array(W*H);let label=0,largest=0,largestSize=0;
   for(let seed=0;seed<W*H;seed++){
    if(labels[seed]||a[seed*4+3]<=32)continue;label++;let head=0,tail=1;queue[0]=seed;labels[seed]=label;
    while(head<tail){const p=queue[head++],x=p%W;for(const n of [x?p-1:-1,x<W-1?p+1:-1,p-W,p+W])if(n>=0&&n<W*H&&!labels[n]&&a[n*4+3]>32){labels[n]=label;queue[tail++]=n;}}
    if(tail>largestSize){largestSize=tail;largest=label;}
   }
   for(let p=0;p<W*H;p++)if(labels[p]!==largest)a[p*4+3]=0;
  }
  ctx.putImageData(pixels,0,0);}
  if(d.category==='top'){
   if(male&&['tee','knit'].includes(d.item?.id))ctx.clearRect(0,0,W,213);
   // Remove detached pixels left by the original clothing cutouts.
   ctx.clearRect(0,0,W,178);ctx.clearRect(0,654,W,H-654);
   if(profile(id)==='muse'){ctx.clearRect(0,0,180,H);ctx.clearRect(580,0,W-580,H);}
  }
  
  if(['rio','pampa'].includes(getCharacter(id).id)&&(d.category==='top'||d.category==='outfit')){const limit=d.category==='top'&&(manifest.fit?.pieces[d.path]?.sleeveEnd||654)<450?manifest.fit.pieces[d.path].sleeveEnd:654,fitted=insetSleeves(canvas,limit);ctx.clearRect(0,0,W,H);ctx.drawImage(fitted,0,0);}
  if(['top','outfit'].includes(d.category)&&!d.preview){const fitted=fitFabric(canvas,d,id);if(fitted!==canvas){ctx.clearRect(0,0,W,H);ctx.drawImage(fitted,0,0);}}
  if(d.category==='top'&&!d.preview){const fitted=fitFemaleShoulders(canvas,d,id);if(fitted!==canvas){ctx.clearRect(0,0,W,H);ctx.drawImage(fitted,0,0);}}
  if((d.category==='bottom'||d.category==='outfit')&&!d.preview){const fitted=fitBottom(canvas,d,id);if(fitted!==canvas){ctx.clearRect(0,0,W,H);ctx.drawImage(fitted,0,0);}}
  if(d.category==='body'&&id==='flora'){for(let y=212;y<260;y++){const t=smooth(212,260,y),left=338-94*t,right=430+83*t;ctx.clearRect(0,y,left,1);ctx.clearRect(right,y,W-right,1);}}
  if(d.category==='body'&&d.topId){const male=profile(id)==='icon',open=!male&&['pink','redtop','satin'].includes(d.topId),longSleeve=male?['shirt','blazer','knit','jacket','satin','tradition'].includes(d.topId):['blazer','jacket'].includes(d.topId);if(!open){ctx.clearRect(0,212,336,90);ctx.clearRect(432,212,W-432,90);const garment=manifest.pieces[profile(id)+':top:'+d.topId]?.[0],cuff=manifest.fit?.pieces[garment]?.sleeveEnd||620,end=longSleeve||(!male&&d.topId==='tradition')?Math.max(302,Math.min(596,cuff-24)):334;ctx.clearRect(0,302,W,end-302);}}
  if(d.category==='body'){const long=longBottom({bottom:{id:d.bottomId}},id),skirt=d.bottomId==='tradition'&&profile(id)==='muse';if(profile(id)==='muse')hideFemaleBase(ctx,d,id);else if(d.bottomId&&(long||skirt))ctx.clearRect(275,526,220,120);if(long||skirt)ctx.clearRect(0,645,W,(skirt?1090:1070)-645);}
  if(d.category==='body'&&d.footwear&&!d.footwear.open){const y=profile(id)==='icon'&&d.footwear.id==='tradition'&&d.bottomId==='tradition'?860:(longBottom({bottom:{id:d.bottomId}},id)?1082:1070);ctx.clearRect(0,y,W,H-y);}
  if(d.frontOnly){const path=manifest.pieces[profile(id)+':bottom:'+d.bottomId]?.[0],box=manifest.fit?.pieces[path]?.box,hem=box?Math.min(1100,Math.max(1050,box[3]-8)):1074;ctx.clearRect(0,0,W,hem);}
  return canvas;
 }
 async texture(surface){if(!this.textures.has(surface))this.textures.set(surface,root.PIXI.Texture.from(surface));return this.textures.get(surface);}
 async thumbnail(item,category,id){
  if(profile(id)==='icon'&&category==='accessory')return 'assets/thumb-icon-accessory-'+item.id+'.webp';
  const key=[id,category,item.id].join(':');if(this.thumbnails.has(key))return this.thumbnails.get(key);
  const task=(async()=>{const paths=manifest.pieces[profile(id)+':'+category+':'+item.id]||[],canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');
   for(const path of paths)ctx.drawImage(await this.surface({path,category,item,frontOnly:false,preview:true},id),0,0);
   const a=ctx.getImageData(0,0,W,H).data;let x1=W,y1=H,x2=0,y2=0;
   for(let y=0;y<H;y++)for(let x=0;x<W;x++)if(a[(y*W+x)*4+3]>40){x1=Math.min(x1,x);x2=Math.max(x2,x);y1=Math.min(y1,y);y2=Math.max(y2,y);}
   const thumb=document.createElement('canvas');thumb.width=240;thumb.height=240;const tc=thumb.getContext('2d');
   if(x2>x1&&y2>y1){const w=x2-x1+1,h=y2-y1+1,s=218/Math.max(w,h);tc.drawImage(canvas,x1,y1,w,h,(240-w*s)/2,(240-h*s)/2,w*s,h*s);}
   return thumb.toDataURL('image/png');
  })();this.thumbnails.set(key,task);return task;
 }
}
let cache=null;const sharedCache=()=>cache||(cache=new SpriteCache());
class DressingRoom {
 constructor(host){this.host=host;this.cache=sharedCache();this.version=0;this.renderer='canvas';this.app=null;this.ready=this.initialize();}
 async initialize(){if(manifest.assetsPrepared)return;if(!root.PIXI||root.location?.protocol==='file:')return;try{const app=new root.PIXI.Application();await app.init({width:W,height:H,backgroundAlpha:0,antialias:true,autoStart:false,preference:'webgl',resolution:1});this.app=app;this.renderer='pixi';app.canvas.className='rig-canvas';app.canvas.setAttribute('aria-hidden','true');}catch(error){this.renderer='canvas';console.info('CLOSET: composição Canvas ativa.',error.message);}}
 async setLook(look,id){
  const token=++this.version,rig=new CharacterRig(id);this.host.innerHTML=rig.render(look);this.host.setAttribute('aria-busy','true');
  try{
   const surfaces=await Promise.all(rig.descriptors(look).map(d=>this.cache.surface(d,rig.id)));await this.ready;if(token!==this.version)return;
   let canvas;
   if(this.app){
    const textures=await Promise.all(surfaces.map(s=>this.cache.texture(s)));if(token!==this.version)return;
    this.app.stage.removeChildren().forEach(s=>s.destroy({texture:false,textureSource:false}));
    for(const texture of textures){const sprite=new root.PIXI.Sprite(texture);sprite.width=W;sprite.height=H;this.app.stage.addChild(sprite);}
    this.app.render();canvas=this.app.canvas;
   }else{canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;canvas.className='rig-canvas';const ctx=canvas.getContext('2d');surfaces.forEach(s=>ctx.drawImage(s,0,0));}
   canvas=proportionate(canvas,rig.id);
   canvas.className='rig-canvas';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Personagem '+rig.character.label+' com as roupas escolhidas');
   this.host.replaceChildren(canvas);this.host.dataset.renderer=this.renderer;
  }catch(error){this.host.dataset.renderer='html';console.info('CLOSET: prévia original preservada.',error.message);}
  finally{if(token===this.version)this.host.setAttribute('aria-busy','false');}
 }
}
function render(look,id){return new CharacterRig(id).render(look);}
function photoMarkup(id,viewBox='0 0 768 1152'){const p=manifest.characters[getCharacter(id).id].photo;if(!p)return '';const key='photo-'+getCharacter(id).id+(viewBox==='0 0 768 1152'?'-body':'-portrait');return '<svg class="photo-face" viewBox="'+viewBox+'" aria-hidden="true"><defs><mask id="'+key+'" maskUnits="userSpaceOnUse" x="0" y="0" width="'+p.width+'" height="'+p.height+'" style="mask-type:alpha"><image href="'+p.mask+'" width="'+p.width+'" height="'+p.height+'"/></mask></defs><g transform="matrix('+p.matrix.join(' ')+')"><image href="'+p.path+'" width="'+p.width+'" height="'+p.height+'" mask="url(#'+key+')"/></g></svg>';}
function portrait(id){const c=getCharacter(id);if(manifest.characters[c.id].photo)return photoMarkup(id,'270 0 228 228');return '<img src="'+manifest.characters[c.id].portrait+'" alt="" draggable="false">';}
function thumbnail(item,category,id='muse'){
 if(item.id==='none')return '<span class="empty-accessory" aria-hidden="true">∅</span>';
 return '<img class="item-photo" data-fit-item="'+item.id+'" data-fit-category="'+category+'" src="assets/thumb-'+profile(id)+'-'+category+'-'+item.id+'.webp" alt="" loading="lazy" decoding="async">';
}
function paintThumbnails(host,id){if(root.location?.protocol==='file:')return;(host.querySelectorAll?.('[data-fit-item]')||[]).forEach(async image=>{
 const category=image.dataset.fitCategory,item=root.ClosetEngine.items[category].find(p=>p.id===image.dataset.fitItem);
 if(!item)return;try{const src=await sharedCache().thumbnail(item,category,id);if(image.isConnected)image.src=src;}catch(error){console.info('CLOSET: miniatura original preservada.',error.message);}
});}
const api={proportionate,bodyProportions,characters,getCharacter,profile,render,portrait,thumbnail,paintThumbnails,CharacterRig,DressingRoom,SpriteCache};
if(typeof module!=='undefined')module.exports=api;else root.ClosetAvatar=api;
})(typeof globalThis!=='undefined'?globalThis:this);
