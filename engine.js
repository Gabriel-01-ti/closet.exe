(function(root){
 'use strict';
 const items={
  "top": [
    {
      "id": "pink",
      "name": "Blusa romântica",
      "color": "#e69cba",
      "trim": "#f5c3d6",
      "seam": "#be7295",
      "price": 95,
      "formal": true,
      "kind": "blouse",
      "tags": [
        "date",
        "cafe",
        "graduation"
      ]
    },
    {
      "id": "shirt",
      "name": "Camisa nuvem",
      "color": "#fff9ed",
      "trim": "#e9e4de",
      "seam": "#c7bdc4",
      "price": 70,
      "formal": true,
      "kind": "shirt",
      "tags": [
        "travel",
        "graduation",
        "cafe"
      ]
    },
    {
      "id": "redtop",
      "name": "Corset cereja",
      "color": "#b92d46",
      "trim": "#d64961",
      "seam": "#8c243d",
      "red": true,
      "price": 65,
      "formal": true,
      "kind": "top",
      "tags": [
        "party",
        "show",
        "date",
        "fashion"
      ]
    },
    {
      "id": "blazer",
      "name": "Blazer midnight",
      "color": "#363345",
      "lapel": "#51475e",
      "trim": "#eee6dc",
      "seam": "#827086",
      "price": 180,
      "formal": true,
      "kind": "blazer",
      "tags": [
        "fashion",
        "graduation",
        "party"
      ]
    },
    {
      "id": "tee",
      "name": "Camiseta stardust",
      "color": "#f7f2e9",
      "print": "#9f7cba",
      "seam": "#d0c5d0",
      "price": 45,
      "formal": false,
      "kind": "tee",
      "tags": [
        "travel",
        "show",
        "cafe"
      ]
    },
    {
      "id": "knit",
      "name": "Tricô framboesa",
      "color": "#b13b5b",
      "seam": "#822b47",
      "red": true,
      "price": 85,
      "formal": false,
      "kind": "knit",
      "tags": [
        "date",
        "cafe",
        "travel"
      ]
    },
    {
      "id": "jacket",
      "name": "Jaqueta denim",
      "color": "#7397b6",
      "seam": "#526f92",
      "price": 150,
      "formal": false,
      "kind": "jacket",
      "tags": [
        "travel",
        "show",
        "fashion"
      ]
    },
    {
      "id": "satin",
      "name": "Cetim matcha",
      "color": "#7d9e89",
      "trim": "#abc6b5",
      "seam": "#4e7663",
      "price": 89,
      "formal": true,
      "kind": "satin",
      "tags": [
        "date",
        "graduation",
        "fashion"
      ]
    }
  ],
  "bottom": [
    {
      "id": "jeans",
      "name": "Jeans wide leg",
      "color": "#7298bd",
      "seam": "#4e7299",
      "price": 80,
      "formal": false,
      "kind": "pants",
      "tags": [
        "travel",
        "show",
        "cafe"
      ]
    },
    {
      "id": "trousers",
      "name": "Calça alfaiataria",
      "color": "#393546",
      "seam": "#64576d",
      "price": 90,
      "formal": true,
      "kind": "pants",
      "tags": [
        "fashion",
        "graduation",
        "date"
      ]
    },
    {
      "id": "skirt",
      "name": "Saia cereja",
      "color": "#b72f49",
      "seam": "#8c233d",
      "red": true,
      "price": 65,
      "formal": true,
      "kind": "skirt",
      "tags": [
        "party",
        "fashion",
        "date"
      ]
    },
    {
      "id": "miniskirt",
      "name": "Saia midnight",
      "color": "#383443",
      "seam": "#6b5c73",
      "price": 75,
      "formal": true,
      "kind": "skirt",
      "tags": [
        "party",
        "show",
        "fashion"
      ]
    },
    {
      "id": "shorts",
      "name": "Short areia",
      "color": "#dbc9b2",
      "seam": "#ad957f",
      "price": 60,
      "formal": false,
      "kind": "shorts",
      "tags": [
        "travel",
        "cafe",
        "show"
      ]
    },
    {
      "id": "midi",
      "name": "Saia midi lavanda",
      "color": "#b9a3cf",
      "seam": "#8e72aa",
      "price": 110,
      "formal": true,
      "kind": "skirt",
      "length": "midi",
      "tags": [
        "date",
        "graduation",
        "fashion"
      ]
    }
  ],
  "shoe": [
    {
      "id": "sneaker",
      "name": "Tênis cloud",
      "color": "#fff9ed",
      "trim": "#c7b2d9",
      "seam": "#bbaec2",
      "price": 85,
      "formal": false,
      "kind": "sneaker",
      "tags": [
        "travel",
        "show",
        "cafe"
      ]
    },
    {
      "id": "rose-sneaker",
      "name": "Tênis rosé",
      "color": "#d795a8",
      "trim": "#f5d2db",
      "sole": "#eee5df",
      "seam": "#a3637c",
      "price": 90,
      "formal": false,
      "kind": "sneaker",
      "tags": [
        "travel",
        "cafe",
        "date"
      ]
    },
    {
      "id": "boot",
      "name": "Bota city",
      "color": "#39333f",
      "seam": "#766272",
      "price": 120,
      "formal": true,
      "kind": "boot",
      "tags": [
        "fashion",
        "party",
        "show"
      ]
    },
    {
      "id": "tallboot",
      "name": "Bota canela",
      "color": "#987258",
      "seam": "#c29a7c",
      "price": 160,
      "formal": true,
      "kind": "boot",
      "tall": true,
      "tags": [
        "fashion",
        "show",
        "date"
      ]
    },
    {
      "id": "sandal",
      "name": "Sandália dourada",
      "color": "#c5a05c",
      "seam": "#936d42",
      "price": 75,
      "formal": true,
      "open": true,
      "kind": "sandal",
      "tags": [
        "date",
        "graduation",
        "party"
      ]
    },
    {
      "id": "loafer",
      "name": "Mocassim clássico",
      "color": "#3e343a",
      "seam": "#7c6870",
      "price": 89,
      "formal": true,
      "kind": "loafer",
      "tags": [
        "fashion",
        "graduation",
        "cafe"
      ]
    }
  ],
  "accessory": [
    {
      "id": "none",
      "name": "Sem acessório",
      "color": "#eee8f7",
      "price": 0,
      "kind": "none",
      "tags": []
    },
    {
      "id": "bag",
      "name": "Bolsa vermelha",
      "color": "#b92e49",
      "seam": "#873047",
      "red": true,
      "price": 60,
      "kind": "bag",
      "tags": [
        "fashion",
        "date",
        "cafe"
      ]
    },
    {
      "id": "cream-bag",
      "name": "Bolsa vanilla",
      "color": "#e6dac4",
      "seam": "#ab957e",
      "price": 85,
      "kind": "bag",
      "tags": [
        "travel",
        "graduation",
        "cafe"
      ]
    },
    {
      "id": "necklace",
      "name": "Colar de estrelas",
      "color": "#c5a15e",
      "price": 35,
      "kind": "necklace",
      "tags": [
        "graduation",
        "party",
        "show"
      ]
    },
    {
      "id": "earrings",
      "name": "Argolas douradas",
      "color": "#c3a25d",
      "price": 30,
      "kind": "earrings",
      "tags": [
        "date",
        "graduation",
        "party"
      ]
    },
    {
      "id": "glasses",
      "name": "Óculos catwalk",
      "color": "#453642",
      "price": 55,
      "kind": "glasses",
      "tags": [
        "fashion",
        "travel",
        "show"
      ]
    },
    {
      "id": "scarf",
      "name": "Lenço cereja",
      "color": "#b62f4d",
      "trim": "#dc879b",
      "seam": "#85283f",
      "red": true,
      "price": 40,
      "kind": "scarf",
      "tags": [
        "cafe",
        "fashion",
        "date"
      ]
    }
  ]
};
 items.top.push({id:'tradition',name:'Prenda · corpete',color:'#2546a4',price:85,formal:true,kind:'blouse',tags:['graduation','date','party']});
 items.bottom.push({id:'tradition',name:'Prenda · saia longa',color:'#2546a4',price:90,formal:true,kind:'skirt',length:'long',tags:['graduation','date','party']});
 items.shoe.push({id:'tradition',name:'Sapato de prenda',color:'#27262b',price:85,formal:true,kind:'closed',tags:['graduation','date','party']});
 const categories=Object.keys(items);
 const occasions=[{id:'party',name:'Festa',icon:'🪩',desc:'Brilhe até o último flash.'},{id:'date',name:'Primeiro encontro',icon:'💌',desc:'A primeira impressão é sua.'},{id:'travel',name:'Viagem',icon:'✈️',desc:'Pronta para o próximo destino.'},{id:'show',name:'Show',icon:'🎤',desc:'Seu look também é o headliner.'},{id:'graduation',name:'Formatura',icon:'🎓',desc:'Uma noite para guardar.'},{id:'cafe',name:'Café',icon:'☕',desc:'Um café. Muitos olhares.'},{id:'fashion',name:'Fashion Week',icon:'📸',desc:'A rua é sua passarela.'}];
 const rules=[{id:'elegant',name:'Precisa ser elegante',icon:'✨',help:'Ao menos 2 peças elegantes entre blusa, parte de baixo e sapato; um look original elegante conta como um conjunto.'},{id:'red',name:'Uma peça vermelha',icon:'♥',help:'Vermelho na blusa, parte de baixo, bolsa ou lenço.'},{id:'noSneaker',name:'Proibido tênis',icon:'✕',help:'Escolha bota, sandália, mocassim ou sapato de prenda. O look original informa o calçado que inclui.'}];
 const cards=[{id:'ripped',icon:'💔',title:'Sua saia rasgou.',desc:'Todas as saias estão bloqueadas.',short:'Sem saias'},{id:'rain',icon:'🌧️',title:'Começou a chover.',desc:'Sapatos abertos estão bloqueados.',short:'Sem sapatos abertos'},{id:'friend',icon:'👯',title:'Look repetido!',desc:'Sua amiga apareceu com a mesma blusa. Essa peça está bloqueada.',short:'Blusa bloqueada'},{id:'budget',icon:'💳',title:'Cartão recusado.',desc:'Agora cada peça precisa custar até R$ 90.',short:'Até R$ 90 por peça'},{id:'paparazzi',icon:'📸',title:'Paparazzi!',desc:'Agora é obrigatório usar um acessório.',short:'Acessório obrigatório'}];
 const pick=(arr,rng=Math.random)=>arr[Math.floor(rng()*arr.length)];
 const isOnePiece=look=>!!look?.top?.onePiece;
 const activeCategories=look=>isOnePiece(look)?['top','accessory']:categories;
 function available(round,category){return items[category].filter(p=>{const c=round.chaos;if(!c)return true;if(c.id==='ripped'&&(p.kind==='skirt'||p.chaosGroup==='tailoring'))return false;if(c.id==='rain'&&(p.open||p.onePiece&&p.openShoes))return false;if(c.id==='friend'&&p.id===c.blockedId)return false;if(c.id==='budget'&&p.price>90)return false;if(c.id==='paparazzi'&&p.id==='none')return false;return true;});}
 function ruleOK(id,look){if(id==='elegant')return isOnePiece(look)?!!look.top.formal:['top','bottom','shoe'].filter(c=>look[c]?.formal).length>=2;if(id==='red')return !!look.top?.red||categories.some(c=>look[c]?.red);if(id==='noSneaker')return isOnePiece(look)?look.top.shoeKind!=='sneaker':!!look.shoe&&look.shoe.kind!=='sneaker';return true;}
 function complete(look){return activeCategories(look).every(c=>!!look[c]);}
 function valid(round,look){const active=activeCategories(look);return complete(look)&&round.rules.every(r=>ruleOK(r.id,look))&&active.every(c=>available(round,c).some(p=>p.id===look[c].id));}
 function enumerate(round){const pools=Object.fromEntries(categories.map(c=>[c,available(round,c)])),result=[];for(const top of pools.top.filter(p=>!p.onePiece))for(const bottom of pools.bottom)for(const shoe of pools.shoe)for(const accessory of pools.accessory){const look={top,bottom,shoe,accessory};if(valid(round,look))result.push(look);}for(const top of pools.top.filter(p=>p.onePiece))for(const accessory of pools.accessory){const look={top,accessory};if(valid(round,look))result.push(look);}return result;}
 function countBreakdown(round){
  const pools=Object.fromEntries(categories.map(c=>[c,available(round,c)])),regularTops=pools.top.filter(p=>!p.onePiece),onePieceTops=pools.top.filter(p=>p.onePiece);
  const baseRegular=originalCatalog.top.filter(p=>!p.onePiece).length*items.bottom.length*items.shoe.length*items.accessory.length;
  const baseOnePiece=(originalLooks[activeCharacter]?1:0)*items.accessory.length;
  const regularTotal=regularTops.length*pools.bottom.length*pools.shoe.length*pools.accessory.length,onePieceTotal=onePieceTops.length*pools.accessory.length,total=regularTotal+onePieceTotal,baseTotal=baseRegular+baseOnePiece;
  const steps=round.rules.map(rule=>({id:rule.id,name:rule.name,before:0,discount:0,after:0}));
  const candidates=[];for(const top of regularTops)for(const bottom of pools.bottom)for(const shoe of pools.shoe)for(const accessory of pools.accessory)candidates.push({top,bottom,shoe,accessory});for(const top of onePieceTops)for(const accessory of pools.accessory)candidates.push({top,accessory});
  for(const look of candidates)for(let i=0;i<steps.length;i++){if(!ruleOK(steps[i].id,look)){steps[i].discount++;break;}}
  let remaining=total;for(const step of steps){step.before=remaining;remaining-=step.discount;step.after=remaining;}
  const regularFormula=`${regularTops.length} blusas × ${pools.bottom.length} partes de baixo × ${pools.shoe.length} sapatos × ${pools.accessory.length} acessórios`,onePieceFormula=`${onePieceTops.length} looks completos × ${pools.accessory.length} acessórios`,formula=[regularTotal?regularFormula:'',onePieceTotal?onePieceFormula:''].filter(Boolean).join(' + ');
  return {pools:Object.fromEntries(categories.map(c=>[c,pools[c].length])),regularTops:regularTops.length,onePieceLooks:onePieceTops.length,regularTotal,onePieceTotal,formula:formula||'0',baseTotal,total,blockedByChaos:baseTotal-total,steps,discounted:total-remaining,valid:remaining};
 }
 function createRound(rng=Math.random){const sorted=[...rules];const first=pick(sorted,rng);const second=pick(sorted.filter(r=>r!==first),rng);return {occasion:pick(occasions,rng),rules:[first,second],chaos:null};}
 function chaosOptions(round,look={}){const before=enumerate(round).length;return cards.map(c=>({...c,blockedId:c.id==='friend'?(look.top?.id||'pink'):null})).filter(c=>{const n=enumerate({...round,chaos:c}).length;return n>0&&n<before;});}
 function applyChaos(round,card){return {...round,chaos:card};}
 function answers(n,rng=Math.random){const s=new Set([n]);for(const v of [n+6,Math.max(1,n-6),n*2,Math.max(1,Math.floor(n/2)),n+12]){if(s.size===4)break;s.add(v);}const a=[...s];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function score(round,look,remaining,correct){const active=activeCategories(look),filled=active.filter(c=>look[c]).length,hits=round.rules.filter(r=>ruleOK(r.id,look)).length,fit=isOnePiece(look)?Number(look.top.tags.includes(round.occasion.id)):['top','bottom','shoe'].filter(c=>look[c]?.tags.includes(round.occasion.id)).length,maxFit=isOnePiece(look)?1:3,legal=active.every(c=>!look[c]||available(round,c).some(p=>p.id===look[c].id)),style=legal?Math.round(60*hits/round.rules.length+30*fit/maxFit+10*filled/active.length):0,speed=complete(look)?Math.round(60+40*Math.max(0,Math.min(30,remaining))/30):0,iq=correct?100:0;return {style,speed,iq,total:style+speed+iq};}
 function rank(total){return total<=120?'Fashion Disaster 💀':total<=200?'Closet Rookie':total<=260?'It Girl ✨':'CHER WOULD APPROVE 💅';}
 const originalCatalog=Object.fromEntries(categories.map(c=>[c,items[c].map(p=>({...p,tags:[...p.tags]}))]));
 const originalLooks={ana:{id:'original-ana',name:'Look original · Ana',image:'assets/people/ana-look.png',price:85,kind:'shorts',shoeKind:'sneaker',formal:false,tags:['party','show','fashion'],openShoes:false},isadora:{id:'original-isadora',name:'Look original · Isadora',image:'assets/people/isadora-look.png',price:85,kind:'skirt',shoeKind:'sneaker',formal:false,tags:['party','show','fashion'],openShoes:false},livia:{id:'original-livia',name:'Look original · Lívia',image:'assets/people/livia-look.png',price:85,kind:'trousers',shoeKind:'sneaker',formal:false,tags:['travel','cafe','fashion'],openShoes:false},nicole:{id:'original-nicole',name:'Look original · Nicole',image:'assets/people/nicole-look.png',price:85,kind:'trousers',shoeKind:'sneaker',formal:false,red:true,tags:['travel','cafe','fashion'],openShoes:false},sophia:{id:'original-sophia',name:'Look original · Sophia',image:'assets/people/sophia-look.png',price:85,kind:'skirt',shoeKind:'flat',formal:true,tags:['graduation','date','party'],openShoes:false}};
 const profiles={muse:{top:{tee:{name:'Camisa lavanda'},knit:{name:'Blusa framboesa'}}}};
 function characterProfile(){return 'muse';}
 let activeCharacter='muse';
 function setCharacter(id){
  activeCharacter=originalLooks[id]?id:'ana';
  for(const c of categories)items[c].splice(0,items[c].length,...originalCatalog[c].filter(p=>!(activeCharacter==='icon'&&c==='accessory'&&p.id==='scarf')).map(p=>({...p,tags:[...p.tags],...(profiles.muse[c]?.[p.id]||{})})));
  items.top.unshift({...originalLooks[activeCharacter],onePiece:true,tags:[...originalLooks[activeCharacter].tags]});
  cards[0].title='Costura abriu.';
  cards[0].desc='Todas as saias estão bloqueadas.';
  cards[0].short='Sem saias';
 }
 const api={characterProfile,countBreakdown,setCharacter,items,categories,occasions,rules,cards,pick,available,ruleOK,complete,valid,enumerate,createRound,chaosOptions,applyChaos,answers,score,rank,originalLook:id=>items.top.find(p=>p.onePiece&&p.id==='original-'+id),visibleCategories:look=>isOnePiece(look)?['top','accessory']:categories};if(typeof module!=='undefined')module.exports=api;else root.ClosetEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
