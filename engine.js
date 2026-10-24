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
 const categories=Object.keys(items);
 const occasions=[{id:'party',name:'Festa',icon:'🪩',desc:'Brilhe até o último flash.'},{id:'date',name:'Primeiro encontro',icon:'💌',desc:'A primeira impressão é sua.'},{id:'travel',name:'Viagem',icon:'✈️',desc:'Pronta para o próximo destino.'},{id:'show',name:'Show',icon:'🎤',desc:'Seu look também é o headliner.'},{id:'graduation',name:'Formatura',icon:'🎓',desc:'Uma noite para guardar.'},{id:'cafe',name:'Café',icon:'☕',desc:'Um café. Muitos olhares.'},{id:'fashion',name:'Fashion Week',icon:'📸',desc:'A rua é sua passarela.'}];
 const rules=[{id:'elegant',name:'Precisa ser elegante',icon:'✨',help:'Ao menos 2 peças elegantes entre blusa, parte de baixo e sapato.'},{id:'red',name:'Uma peça vermelha',icon:'♥',help:'Vermelho na blusa, parte de baixo, bolsa ou lenço.'},{id:'noSneaker',name:'Proibido tênis',icon:'✕',help:'Escolha bota, sandália ou mocassim.'}];
 const cards=[{id:'ripped',icon:'💔',title:'Sua saia rasgou.',desc:'Todas as saias estão bloqueadas.',short:'Sem saias'},{id:'rain',icon:'🌧️',title:'Começou a chover.',desc:'Sapatos abertos estão bloqueados.',short:'Sem sapatos abertos'},{id:'friend',icon:'👯',title:'Look repetido!',desc:'Sua amiga apareceu com a mesma blusa. Essa peça está bloqueada.',short:'Blusa bloqueada'},{id:'budget',icon:'💳',title:'Cartão recusado.',desc:'Agora cada peça precisa custar até R$ 90.',short:'Até R$ 90 por peça'},{id:'paparazzi',icon:'📸',title:'Paparazzi!',desc:'Agora é obrigatório usar um acessório.',short:'Acessório obrigatório'}];
 const pick=(arr,rng=Math.random)=>arr[Math.floor(rng()*arr.length)];
 function available(round,category){return items[category].filter(p=>{const c=round.chaos;if(!c)return true;if(c.id==='ripped'&&(p.kind==='skirt'||p.chaosGroup==='tailoring'))return false;if(c.id==='rain'&&p.open)return false;if(c.id==='friend'&&p.id===c.blockedId)return false;if(c.id==='budget'&&p.price>90)return false;if(c.id==='paparazzi'&&p.id==='none')return false;return true;});}
 function ruleOK(id,look){if(id==='elegant')return ['top','bottom','shoe'].filter(c=>look[c]?.formal).length>=2;if(id==='red')return categories.some(c=>look[c]?.red);if(id==='noSneaker')return !!look.shoe&&look.shoe.kind!=='sneaker';return true;}
 function complete(look){return categories.every(c=>!!look[c]);}
 function valid(round,look){return complete(look)&&round.rules.every(r=>ruleOK(r.id,look))&&categories.every(c=>available(round,c).some(p=>p.id===look[c].id));}
 function enumerate(round){const a=categories.map(c=>available(round,c));const result=[];for(const top of a[0])for(const bottom of a[1])for(const shoe of a[2])for(const accessory of a[3]){const l={top,bottom,shoe,accessory};if(valid(round,l))result.push(l);}return result;}
 function countBreakdown(round){
  const pools=Object.fromEntries(categories.map(c=>[c,available(round,c)]));
  const baseTotal=categories.reduce((n,c)=>n*items[c].length,1),total=categories.reduce((n,c)=>n*pools[c].length,1);
  const steps=round.rules.map(rule=>({id:rule.id,name:rule.name,before:0,discount:0,after:0}));
  for(const top of pools.top)for(const bottom of pools.bottom)for(const shoe of pools.shoe)for(const accessory of pools.accessory){
   const look={top,bottom,shoe,accessory};
   for(let i=0;i<steps.length;i++){if(!ruleOK(steps[i].id,look)){steps[i].discount++;break;}}
  }
  let remaining=total;for(const step of steps){step.before=remaining;remaining-=step.discount;step.after=remaining;}
  return {pools:Object.fromEntries(categories.map(c=>[c,pools[c].length])),baseTotal,total,blockedByChaos:baseTotal-total,steps,discounted:total-remaining,valid:remaining};
 }
 function createRound(rng=Math.random){const sorted=[...rules];const first=pick(sorted,rng);const second=pick(sorted.filter(r=>r!==first),rng);return {occasion:pick(occasions,rng),rules:[first,second],chaos:null};}
 function chaosOptions(round,look={}){const before=enumerate(round).length;return cards.map(c=>({...c,blockedId:c.id==='friend'?(look.top?.id||'pink'):null})).filter(c=>{const n=enumerate({...round,chaos:c}).length;return n>0&&n<before;});}
 function applyChaos(round,card){return {...round,chaos:card};}
 function answers(n,rng=Math.random){const s=new Set([n]);for(const v of [n+6,Math.max(1,n-6),n*2,Math.max(1,Math.floor(n/2)),n+12]){if(s.size===4)break;s.add(v);}const a=[...s];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
 function score(round,look,remaining,correct){const filled=categories.filter(c=>look[c]).length;const hits=round.rules.filter(r=>ruleOK(r.id,look)).length;const fit=['top','bottom','shoe'].filter(c=>look[c]?.tags.includes(round.occasion.id)).length;const legal=categories.every(c=>!look[c]||available(round,c).some(p=>p.id===look[c].id));const style=legal?Math.round(60*hits/round.rules.length+30*fit/3+10*filled/4):0;const speed=complete(look)?Math.round(60+40*Math.max(0,Math.min(30,remaining))/30):0;const iq=correct?100:0;return {style,speed,iq,total:style+speed+iq};}
 function rank(total){return total<=120?'Fashion Disaster 💀':total<=200?'Closet Rookie':total<=260?'It Girl ✨':'CHER WOULD APPROVE 💅';}
 const originalCatalog=Object.fromEntries(categories.map(c=>[c,items[c].map(p=>({...p,tags:[...p.tags]}))]));
 const profiles={
 muse:{top:{tee:{name:'Camisa lavanda'},knit:{name:'Blusa framboesa'}}},
 icon:{
  top:{pink:{name:'Polo rosé',kind:'polo'},shirt:{name:'Camisa de linho',kind:'shirt'},redtop:{name:'Polo cereja',kind:'polo'},blazer:{name:'Blazer masculino',kind:'blazer'},tee:{name:'Camiseta off-white',kind:'tee'},knit:{name:'Suéter vinho',kind:'knit'},jacket:{name:'Jaqueta jeans masculina',kind:'jacket'},satin:{name:'Camisa matcha',kind:'shirt'}},
  bottom:{jeans:{name:'Jeans reto masculino'},trousers:{name:'Calça social masculina'},skirt:{name:'Bermuda vinho',kind:'shorts',chaosGroup:'tailoring'},miniskirt:{name:'Bermuda preta',kind:'shorts',chaosGroup:'tailoring'},shorts:{name:'Bermuda chino',kind:'shorts'},midi:{name:'Calça chino cinza',kind:'pants',chaosGroup:'tailoring'}},
  shoe:{'rose-sneaker':{name:'Tênis urbano rosé'},tallboot:{name:'Bota de couro'},sandal:{name:'Sandália de couro'}},
  accessory:{bag:{name:'Transversal vermelha',kind:'crossbody'},'cream-bag':{name:'Bolsa carteiro',kind:'messenger'},necklace:{name:'Corrente de prata',kind:'chain'},earrings:{name:'Relógio clássico',kind:'watch'},glasses:{name:'Óculos retangulares',kind:'glasses'},scarf:{name:'Bandana vermelha',kind:'bandana'}}
 }};
 let activeCharacter='muse';
 function setCharacter(id){
  activeCharacter=id==='icon'?'icon':'muse';
  for(const c of categories)items[c].splice(0,items[c].length,...originalCatalog[c].map(p=>({...p,tags:[...p.tags],...(profiles[activeCharacter][c]?.[p.id]||{})})));
  cards[0].title='Costura abriu.';
  cards[0].desc=activeCharacter==='icon'?'As bermudas vinho e preta e a calça chino cinza estão bloqueadas.':'Todas as saias estão bloqueadas.';
  cards[0].short=activeCharacter==='icon'?'Sem as peças de alfaiataria marcadas':'Sem saias';
 }
 const api={countBreakdown,setCharacter,items,categories,occasions,rules,cards,pick,available,ruleOK,complete,valid,enumerate,createRound,chaosOptions,applyChaos,answers,score,rank};if(typeof module!=='undefined')module.exports=api;else root.ClosetEngine=api;
})(typeof globalThis!=='undefined'?globalThis:this);
