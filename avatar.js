/* CLOSET dress-up rig: shared photographic coordinates, per-body fitting and garment occlusion. */
(function(root){'use strict';
const manifest=root.CLOSET_ASSETS||(typeof module!=='undefined'?require('./asset-manifest.js'):null);
const W=768,H=1152;
const characters=[{id:'muse',label:'Feminino',subtitle:'Blusas, saias & alfaiataria'},{id:'icon',label:'Masculino',subtitle:'Polos, camisas & bermudas'}];
const getCharacter=id=>characters.find(c=>c.id===id)||characters[0];
const longBottom=(look,id)=>['jeans','trousers'].includes(look.bottom?.id)||(id==='icon'&&look.bottom?.id==='midi');
class CharacterRig {
 constructor(id){this.character=getCharacter(id);this.id=this.character.id;this.config=manifest.characters[this.id];}
 descriptors(look){
  const accessory=look.accessory,neckAccessory=accessory&&['scarf','necklace'].includes(accessory.id),watch=this.id==='icon'&&accessory?.id==='earrings';
  const accessoryPaths=accessory?(manifest.pieces[this.id+':accessory:'+accessory.id]||[]):[];
  const list=[];
  if(neckAccessory)for(const path of accessoryPaths)list.push({path,category:'accessory-back',item:accessory});
  list.push({path:this.config.body,category:'body'});
  for(const category of ['shoe','bottom','top','accessory']){
   const item=look[category];if(!item||item.id==='none'||(category==='accessory'&&watch))continue;
   for(const path of manifest.pieces[this.id+':'+category+':'+item.id]||[])list.push({path,category,item,frontOnly:category==='shoe'&&longBottom(look,this.id)});
   if(category==='top'&&this.id==='icon')list.push({path:this.config.body,category:'neck',item});
   if(category==='top'&&this.id==='muse'&&['shirt','tee','blazer','jacket'].includes(item.id))list.push({path:this.config.body,category:'female-neck',item});
   if(category==='accessory'&&this.id==='icon'&&['bag','cream-bag'].includes(item.id))list.push({path:this.config.body,category:'accessory-arm',item,top:look.top});
  }
  list.push({path:this.config.hands,category:'hands'});
  if(watch)for(const path of accessoryPaths)list.push({path,category:'accessory',item:accessory});
  return list;
 }
 layers(look){return this.descriptors(look).map(d=>d.path);}
 layerStyle(d){
  if(d.category==='accessory'&&d.item.id==='scarf')return this.id==='muse'?'clip-path:polygon(0 100%,0 20.3%,41% 20.3%,45% 21.8%,49.5% 22.2%,54% 21.8%,58% 20.3%,100% 20.3%,100% 100%)':'clip-path:polygon(0 100%,0 21%,40% 21%,45% 22.2%,49.5% 22.6%,54% 22.2%,60% 21%,100% 21%,100% 100%)';
  if(d.category==='accessory'&&d.item.id==='necklace')return 'clip-path:inset('+(this.id==='muse'?'22.57%':'20.75%')+' 0 0 0)';
  if(d.frontOnly)return 'clip-path:inset(93.2% 0 0 0)';
  if(d.category==='female-neck')return 'clip-path:polygon(44% 16%,55.6% 16%,56.2% 20%,53% 23.7%,49.9% 24.8%,46% 23.7%,43.4% 20%)';
  if(d.category==='neck')return 'clip-path:polygon(41.7% 13%,57.8% 13%,57.4% 17%,54% 20.5%,50% 21.2%,45% 20%,42% 17%)';
  return '';
 }
 render(look){return '<div class="rig-fallback" role="img" aria-label="Personagem '+this.character.label+' com o look escolhido">'+this.descriptors(look).map(d=>'<img src="'+d.path+'" alt="" draggable="false" decoding="async" style="'+this.layerStyle(d)+'">').join('')+'</div>';}

}
const FEMALE_SLEEVE_ROWS={"blazer":{"320":[259,289,485,519],"321":[259,289,485,519],"322":[259,289,485,518],"323":[259,288,485,518],"324":[259,288,485,518],"325":[259,288,485,518],"326":[259,288,485,517],"327":[260,288,485,517],"328":[260,287,485,517],"329":[260,287,485,517],"330":[260,287,485,516],"331":[260,287,485,516],"332":[260,287,485,516],"333":[260,286,485,516],"334":[260,286,485,516],"335":[260,286,485,515],"336":[260,286,485,515],"337":[260,286,485,515],"338":[260,285,485,515],"339":[260,285,485,515],"340":[260,285,486,515],"341":[260,285,486,515],"342":[260,285,486,515],"343":[259,284,486,515],"344":[259,284,486,516],"345":[259,284,486,516],"346":[259,284,486,516],"347":[259,284,486,516],"348":[259,283,486,516],"349":[259,283,486,517],"350":[259,283,486,517],"351":[259,283,486,517],"352":[259,283,486,517],"353":[258,280,486,517],"354":[258,279,486,517],"355":[258,279,486,518],"356":[258,279,486,518],"357":[258,279,486,518],"358":[258,279,486,518],"359":[258,278,486,518],"360":[258,278,486,519],"361":[258,278,486,519],"362":[258,278,486,519],"363":[258,278,486,519],"364":[258,278,486,519],"365":[257,277,486,519],"366":[257,277,486,520],"367":[257,277,486,520],"368":[257,277,486,520],"369":[256,277,486,520],"370":[256,277,486,520],"371":[256,277,486,520],"372":[255,278,486,521],"373":[255,278,486,521],"374":[255,278,486,521],"375":[255,278,484,521],"376":[255,278,484,521],"377":[254,278,484,521],"378":[254,278,484,521],"379":[254,278,484,521],"380":[254,278,484,522],"381":[254,278,486,522],"382":[254,278,486,522],"383":[253,278,485,522],"384":[253,278,485,522],"385":[253,278,485,522],"386":[253,278,483,522],"387":[253,278,483,523],"388":[252,279,485,523],"389":[252,279,485,523],"390":[252,279,485,523],"391":[252,279,485,523],"392":[252,279,485,523],"393":[252,279,485,523],"394":[251,279,485,524],"395":[251,279,485,524],"396":[251,279,485,525],"397":[251,279,485,525],"398":[251,279,485,525],"399":[251,279,485,526],"400":[250,279,485,526],"401":[250,280,485,526],"402":[250,280,485,526],"403":[250,280,485,527],"404":[250,280,485,527],"405":[250,280,484,527],"406":[250,280,484,527],"407":[250,280,484,527],"408":[250,280,484,527],"409":[250,280,484,527],"410":[250,280,484,527],"411":[250,280,484,527],"412":[250,280,484,527],"413":[251,280,484,528],"414":[251,281,485,528],"415":[250,281,484,528],"416":[250,281,484,528],"417":[249,281,485,528],"418":[249,281,485,529],"419":[248,281,485,529],"420":[248,281,485,529],"421":[247,281,485,529],"422":[247,281,485,530],"423":[246,281,485,530],"424":[246,281,485,530],"425":[246,281,485,530],"426":[245,281,485,530],"427":[245,281,485,531],"428":[244,282,485,531],"429":[244,282,485,531],"430":[244,282,485,531],"431":[243,282,485,532],"432":[243,282,485,532],"433":[243,282,485,532],"434":[242,282,485,532],"435":[242,282,485,532],"436":[242,282,486,533],"437":[241,281,486,533],"438":[241,281,487,533],"439":[241,281,487,533],"440":[240,281,487,534],"441":[240,280,488,534],"442":[240,280,488,534],"443":[239,280,489,534],"444":[239,279,489,534],"445":[239,279,490,535],"446":[238,279,490,535],"447":[238,278,491,535],"448":[237,278,491,535],"449":[237,278,491,536],"450":[237,278,492,536],"451":[236,277,492,536],"452":[236,277,493,536],"453":[235,277,493,536],"454":[235,276,494,537],"455":[235,276,494,537],"456":[234,276,495,537],"457":[234,275,495,537],"458":[234,275,496,538],"459":[233,275,496,538],"460":[233,275,497,538],"461":[232,274,497,538],"462":[232,274,498,538],"463":[231,274,499,539],"464":[231,273,499,539],"465":[231,273,500,539],"466":[230,273,500,539],"467":[230,272,501,539],"468":[230,272,501,540],"469":[229,272,502,540],"470":[229,271,502,540],"471":[228,271,503,540],"472":[228,271,503,541],"473":[228,271,504,541],"474":[227,270,504,541],"475":[227,270,505,541],"476":[226,270,505,541],"477":[226,269,506,542],"478":[226,269,507,542],"479":[225,269,507,542],"480":[225,268,508,542],"481":[224,268,508,543],"482":[224,268,508,543],"483":[224,267,509,543],"484":[223,267,509,543],"485":[223,267,510,543],"486":[222,266,510,544],"487":[222,266,511,544],"488":[222,266,511,544],"489":[221,265,512,544],"490":[221,265,512,544],"491":[220,265,512,545],"492":[220,264,513,545],"493":[220,264,513,545],"494":[219,264,514,545],"495":[219,264,514,545],"496":[219,263,515,546],"497":[218,263,515,546],"498":[218,263,516,546],"499":[218,262,516,546],"500":[217,262,517,546],"501":[217,262,517,546],"502":[217,261,518,547],"503":[216,261,518,547],"504":[216,261,518,547],"505":[216,260,519,547],"506":[215,260,519,547],"507":[215,260,520,548],"508":[214,259,520,548],"509":[214,259,521,548],"510":[214,259,521,548],"511":[213,258,522,548],"512":[213,258,522,548],"513":[213,257,522,549],"514":[212,257,523,549],"515":[212,257,523,549],"516":[212,256,524,549],"517":[211,256,524,549],"518":[211,255,525,549],"519":[210,255,525,550],"520":[210,255,525,550],"521":[210,254,526,550],"522":[210,254,526,550],"523":[209,253,527,550],"524":[209,253,527,551],"525":[208,252,527,551],"526":[208,252,528,551],"527":[208,252,528,551],"528":[207,251,528,551],"529":[207,250,529,551],"530":[207,250,529,552],"531":[206,249,529,552],"532":[206,249,530,552],"533":[206,248,530,552],"534":[205,247,530,552],"535":[205,247,531,553],"536":[205,246,531,553],"537":[204,245,532,553],"538":[204,245,532,553],"539":[204,244,533,553],"540":[203,244,533,553],"541":[203,243,534,554],"542":[203,242,534,554],"543":[202,242,535,554],"544":[202,241,535,554],"545":[202,241,536,554],"546":[201,240,536,555],"547":[201,240,536,555],"548":[201,239,537,555],"549":[201,238,537,555],"550":[200,238,538,555],"551":[200,237,538,555],"552":[200,237,539,556],"553":[199,236,539,556],"554":[199,236,540,556],"555":[199,235,540,556],"556":[199,234,541,556],"557":[198,234,541,557],"558":[198,233,541,557],"559":[198,233,542,557],"560":[197,232,542,557],"561":[197,232,543,557],"562":[197,231,543,557],"563":[197,231,543,558],"564":[197,231,544,558],"565":[197,230,544,558],"566":[197,230,544,558],"567":[197,230,544,558],"568":[197,230,544,558],"569":[196,230,545,558],"570":[196,230,545,558],"571":[196,230,545,558],"572":[196,229,545,558],"573":[196,229,545,558],"574":[196,229,546,558],"575":[196,229,546,558],"576":[196,229,546,559],"577":[196,229,546,559],"578":[196,229,546,559],"579":[196,228,547,559],"580":[195,228,547,559],"581":[195,228,547,559],"582":[195,228,547,559],"583":[195,228,547,559],"584":[195,227,548,559],"585":[195,227,548,559],"586":[195,227,548,559],"587":[195,227,548,559],"588":[195,227,548,559],"589":[195,226,549,560],"590":[195,226,549,560],"591":[194,226,549,560],"592":[194,226,549,560],"593":[194,226,550,560],"594":[194,226,550,560],"595":[194,226,550,560],"596":[196,225,550,560],"597":[197,225,550,560],"598":[198,225,550,560],"599":[199,225,551,560],"600":[201,225,551,560],"601":[202,225,551,560],"602":[203,224,551,561],"603":[205,224,552,561],"604":[206,224,552,561],"605":[208,224,552,561],"606":[209,224,552,561],"607":[210,223,553,561],"608":[212,223,553,561],"609":[214,223,553,561],"610":[216,223,553,561],"611":[217,223,554,560],"612":[220,222,554,558],"613":[0,-1,0,-1],"614":[0,-1,0,-1],"615":[0,-1,0,-1]},"jacket":{"320":[246,289,485,503],"321":[246,289,485,503],"322":[246,289,485,503],"323":[246,288,485,503],"324":[247,288,485,503],"325":[247,288,485,503],"326":[247,288,485,502],"327":[247,288,485,502],"328":[247,287,485,502],"329":[247,287,485,502],"330":[247,287,485,502],"331":[247,287,485,502],"332":[247,287,485,501],"333":[247,286,485,501],"334":[247,286,485,501],"335":[247,286,485,501],"336":[247,286,485,501],"337":[247,286,485,501],"338":[247,285,485,501],"339":[247,285,485,501],"340":[247,285,486,501],"341":[247,285,486,501],"342":[247,285,486,501],"343":[246,284,486,501],"344":[246,284,486,502],"345":[246,284,486,502],"346":[246,284,486,502],"347":[246,284,486,502],"348":[246,283,486,502],"349":[245,283,486,502],"350":[245,283,486,503],"351":[245,283,486,503],"352":[245,283,486,503],"353":[245,282,486,503],"354":[244,282,486,503],"355":[244,282,486,503],"356":[244,282,486,504],"357":[244,282,486,504],"358":[243,281,486,504],"359":[243,281,486,504],"360":[243,281,486,504],"361":[243,281,486,505],"362":[242,281,486,505],"363":[242,282,486,505],"364":[242,282,486,505],"365":[242,282,486,505],"366":[241,282,485,505],"367":[241,282,485,506],"368":[241,283,485,506],"369":[241,283,485,506],"370":[240,283,485,506],"371":[240,283,485,506],"372":[240,283,485,506],"373":[240,284,485,507],"374":[240,284,485,507],"375":[239,284,484,507],"376":[239,284,484,507],"377":[239,284,484,507],"378":[239,285,484,507],"379":[239,285,484,507],"380":[238,285,484,507],"381":[238,285,484,508],"382":[238,285,484,508],"383":[238,286,484,508],"384":[238,286,484,508],"385":[237,286,484,508],"386":[237,286,483,508],"387":[237,286,483,508],"388":[237,287,483,508],"389":[237,287,483,508],"390":[237,287,483,508],"391":[237,287,483,508],"392":[236,287,483,508],"393":[236,288,483,508],"394":[236,288,483,508],"395":[236,288,482,508],"396":[236,288,482,508],"397":[236,288,482,509],"398":[236,289,482,509],"399":[236,289,482,509],"400":[235,289,482,509],"401":[235,289,482,510],"402":[235,289,482,510],"403":[234,289,482,510],"404":[234,289,482,511],"405":[233,289,482,511],"406":[233,289,482,512],"407":[232,288,483,512],"408":[232,288,483,512],"409":[231,288,483,513],"410":[231,288,483,513],"411":[230,288,483,513],"412":[230,288,483,513],"413":[229,288,483,514],"414":[229,288,483,514],"415":[228,288,483,514],"416":[228,288,483,515],"417":[227,288,483,515],"418":[227,288,483,515],"419":[227,287,484,515],"420":[226,287,484,515],"421":[226,287,484,515],"422":[226,287,484,515],"423":[225,287,484,515],"424":[225,287,484,515],"425":[225,287,484,515],"426":[225,287,484,515],"427":[224,287,484,515],"428":[224,287,484,516],"429":[224,287,484,516],"430":[224,287,484,517],"431":[224,287,484,517],"432":[224,286,485,518],"433":[223,286,485,519],"434":[222,286,485,519],"435":[222,286,485,519],"436":[222,286,485,520],"437":[222,286,485,520],"438":[221,286,485,521],"439":[221,286,485,521],"440":[221,286,485,521],"441":[221,286,485,522],"442":[221,286,485,522],"443":[220,286,485,522],"444":[220,285,486,523],"445":[220,285,486,523],"446":[220,285,486,523],"447":[219,285,486,524],"448":[219,285,486,524],"449":[219,285,486,525],"450":[219,285,486,525],"451":[219,285,486,526],"452":[218,284,487,526],"453":[218,284,487,527],"454":[218,283,488,527],"455":[218,283,488,527],"456":[217,282,489,528],"457":[217,282,489,528],"458":[217,281,490,528],"459":[217,281,490,529],"460":[217,281,491,529],"461":[216,280,491,530],"462":[216,280,492,530],"463":[216,279,492,530],"464":[216,279,493,531],"465":[215,278,493,531],"466":[215,278,494,532],"467":[215,278,494,532],"468":[215,277,495,532],"469":[215,277,495,533],"470":[214,276,496,533],"471":[214,276,496,534],"472":[214,275,497,534],"473":[214,275,497,534],"474":[213,274,498,535],"475":[213,274,498,535],"476":[213,274,498,535],"477":[213,273,499,536],"478":[213,273,499,536],"479":[212,272,500,537],"480":[212,272,500,537],"481":[212,260,501,537],"482":[212,271,501,538],"483":[211,259,502,538],"484":[211,258,502,539],"485":[211,258,503,539],"486":[211,257,503,539],"487":[211,256,504,540],"488":[210,256,504,540],"489":[210,255,505,540],"490":[210,255,505,541],"491":[210,254,506,541],"492":[210,253,506,541],"493":[210,253,507,542],"494":[209,252,507,542],"495":[209,251,508,542],"496":[209,251,508,543],"497":[209,250,509,543],"498":[209,249,509,543],"499":[208,249,510,544],"500":[208,248,510,544],"501":[208,248,510,544],"502":[208,247,511,545],"503":[208,246,511,545],"504":[208,246,512,545],"505":[207,245,512,546],"506":[207,245,513,546],"507":[207,244,513,546],"508":[207,244,513,547],"509":[207,243,514,547],"510":[206,242,514,547],"511":[206,242,515,548],"512":[206,241,515,548],"513":[206,240,516,549],"514":[206,240,516,549],"515":[206,240,516,549],"516":[205,239,517,549],"517":[205,238,517,549],"518":[205,238,518,549],"519":[205,237,518,550],"520":[205,255,518,550],"521":[204,236,519,550],"522":[204,254,519,550],"523":[204,253,520,550],"524":[204,253,520,551],"525":[204,252,521,551],"526":[204,252,521,551],"527":[203,252,521,551],"528":[203,251,522,551],"529":[203,251,522,551],"530":[203,250,523,552],"531":[203,250,523,552],"532":[202,230,524,552],"533":[202,229,524,552],"534":[202,229,524,552],"535":[202,228,525,553],"536":[202,227,525,553],"537":[202,227,526,553],"538":[201,226,526,553],"539":[201,226,527,553],"540":[201,225,527,553],"541":[201,225,527,554],"542":[201,224,528,554],"543":[201,224,528,554],"544":[200,223,528,554],"545":[200,223,529,554],"546":[200,222,529,555],"547":[200,222,529,555],"548":[200,221,530,555],"549":[199,221,530,555],"550":[199,220,530,555],"551":[199,220,531,555],"552":[199,219,531,556],"553":[199,219,532,556],"554":[199,218,532,556],"555":[198,218,532,556],"556":[198,217,533,556],"557":[198,217,533,557],"558":[198,216,533,557],"559":[198,216,534,557],"560":[197,215,534,557],"561":[197,215,534,557],"562":[197,215,535,557],"563":[197,215,535,558],"564":[197,214,535,558],"565":[197,214,536,558],"566":[197,214,536,558],"567":[197,214,536,558],"568":[197,214,537,558],"569":[196,213,537,558],"570":[196,213,538,558],"571":[196,213,538,558],"572":[196,213,538,558],"573":[196,213,539,558],"574":[196,212,539,558],"575":[196,212,539,558],"576":[196,212,540,559],"577":[196,211,540,559],"578":[196,211,540,559],"579":[196,211,541,557],"580":[195,211,541,555],"581":[195,210,541,553],"582":[195,210,541,551],"583":[195,210,542,549],"584":[195,210,542,548],"585":[195,209,542,546],"586":[196,209,542,544],"587":[198,209,542,542],"588":[0,-1,0,-1],"589":[0,-1,0,-1],"590":[0,-1,0,-1],"591":[0,-1,0,-1],"592":[0,-1,0,-1],"593":[0,-1,0,-1],"594":[0,-1,0,-1],"595":[0,-1,0,-1],"596":[0,-1,0,-1],"597":[0,-1,0,-1],"598":[0,-1,0,-1],"599":[0,-1,0,-1],"600":[0,-1,0,-1],"601":[0,-1,0,-1],"602":[0,-1,0,-1],"603":[0,-1,0,-1],"604":[0,-1,0,-1],"605":[0,-1,0,-1],"606":[0,-1,0,-1],"607":[0,-1,0,-1],"608":[0,-1,0,-1],"609":[0,-1,0,-1],"610":[0,-1,0,-1],"611":[0,-1,0,-1],"612":[0,-1,0,-1],"613":[0,-1,0,-1],"614":[0,-1,0,-1],"615":[0,-1,0,-1]},"satin":{"235":[298,301,468,471],"236":[297,301,468,472],"237":[297,301,467,472],"238":[297,302,467,472],"239":[297,302,467,472],"240":[298,302,467,472],"241":[298,302,467,472],"242":[298,303,467,472],"243":[298,303,467,471],"244":[298,303,466,471],"245":[298,303,466,471],"246":[298,303,466,471],"247":[298,303,465,471],"248":[298,303,465,471],"249":[298,303,465,471],"250":[298,304,465,471],"251":[298,304,465,470],"252":[298,304,465,470],"253":[298,304,465,470],"254":[299,304,465,470],"255":[299,305,465,470],"256":[299,305,465,470],"257":[299,305,465,470],"258":[299,305,464,470],"259":[299,305,464,470],"260":[299,305,464,470],"261":[299,305,464,470],"262":[300,305,464,470],"263":[300,305,464,470],"264":[300,305,464,470],"265":[300,305,463,469],"266":[300,305,463,469],"267":[300,305,463,469],"268":[300,305,463,469],"269":[300,305,463,469],"270":[300,305,463,469],"271":[300,305,463,469],"272":[300,306,463,468],"273":[300,306,463,468],"274":[300,306,463,468],"275":[300,306,463,468],"276":[300,306,463,468],"277":[300,306,463,468],"278":[300,307,463,468],"279":[301,307,463,468],"280":[301,307,463,468],"281":[301,307,463,468],"282":[301,307,463,468],"283":[301,307,463,468],"284":[301,307,462,468],"285":[302,307,462,468],"286":[302,307,462,468],"287":[301,308,461,468],"288":[300,309,461,468],"289":[300,311,459,469],"290":[300,313,456,470]}};

/* Fit the existing women's pieces to the model's shoulder, arm and waist anchors. */
class FemaleGarmentFitter {
 static at(points,y){if(y<=points[0][0])return points[0].slice(1);for(let i=1;i<points.length;i++){const b=points[i],a=points[i-1];if(y<=b[0]){const t=(y-a[0])/(b[0]-a[0]);return a.slice(1).map((v,n)=>v+(b[n+1]-v)*t);}}return points[points.length-1].slice(1);}
 static render(image,d){
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  if(d.category==='bottom'){ctx.drawImage(image,0,0,W,H);return canvas;}
  const id=d.item.id,long=['blazer','jacket'].includes(id);
  const maps={
   pink:[[230,235],[280,288],[340,346],[400,400],[537,534]],
   knit:[[230,235],[280,288],[340,346],[400,400],[537,534]],
   redtop:[[230,234],[280,290],[340,347],[400,400],[537,534]],
   shirt:[[210,212],[270,272],[340,343],[400,400],[537,534]],
   tee:[[210,212],[270,272],[340,343],[400,400],[537,534]],
   satin:[[235,235],[278,290],[400,404],[537,534]],
   blazer:[[210,210],[615,615]],
   jacket:[[210,210],[530,530],[612,591]]
  };
  const width={
   pink:[[230,.82,384],[280,.82,384],[320,.86,384],[380,1,384]],
   knit:[[230,.82,384],[280,.82,384],[320,.86,384],[380,1,384]],
   redtop:[[230,.50,384],[280,.50,384],[320,.78,384],[380,1,384]],
   shirt:[[210,1,384],[280,.94,384],[320,.96,384],[380,1,384]],
   tee:[[210,1,384],[280,.94,384],[320,.96,384],[380,1,384]],
   satin:[[235,1,384],[537,1,384]],
   blazer:[[210,.96,397],[240,.96,397],[280,1.04,394],[320,1.08,390]],
   jacket:[[210,1,377],[240,1,377],[280,1.02,377],[320,1.04,374]]
  };
  const arms=[[320,246,293,466,516],[360,244,288,466,510],[400,241,282,471,513],[450,226,275,479,528],[500,218,256,498,537],[540,212,239,516,543],[580,205,230,526,550],[612,200,235,520,555]];
  const cuts=[[320,290,485],[360,282,486],[400,290,482],[450,286,486],[500,264,510],[540,247,527],[580,232,541],[615,227,547]];
  const rows=FEMALE_SLEEVE_ROWS[id];
  const map=maps[id]||maps.shirt;
  for(let y=map[0][0];y<map[map.length-1][0];y++){
   const sy=this.at(map,y)[0],iy=Math.max(0,Math.min(H-1,Math.round(sy)));
   if(long&&y>=320){
    const [leftCut,rightCut]=this.at(cuts,sy),[lo,li,ri,ro]=this.at(arms,y);
    // Torso stays continuous; sleeves follow each arm rather than the asset's original pose.
    ctx.drawImage(image,leftCut,sy,rightCut-leftCut,1,leftCut-5,y,rightCut-leftCut,1);
    const row=rows[iy];if(!row)continue;
    const [slo,sli,sri,sro]=row;
    if(sli>=slo)ctx.drawImage(image,slo,sy,sli-slo+1,1,lo-4,y,li-lo+8,1);
    if(sro>=sri)ctx.drawImage(image,sri,sy,sro-sri+1,1,ri-4,y,ro-ri+8,1);
   }else if(id==='satin'&&y<278){
    // Match the straps to the model's shoulders, covering the base outfit's straps.
    const row=FEMALE_SLEEVE_ROWS.satin[iy];if(!row)continue;
    const [lo,li,ri,ro]=row;
    if(li>=lo)ctx.drawImage(image,lo,sy,li-lo+1,1,299,y,14,1);
    if(ro>=ri)ctx.drawImage(image,ri,sy,ro-ri+1,1,442,y,14,1);
   }else{
    const [scale,center]=this.at(width[id]||width.shirt,y);
    ctx.drawImage(image,0,sy,W,1,379-center*scale,y,W*scale,1);
   }
  }
  return canvas;
 }
}


class AccessoryFitter {
 static frontPath(ctx,id,item){
  ctx.beginPath();
  if(item.id==='scarf'){
   const male=id==='icon',side=male?242:234,front=male?260:255;
   ctx.moveTo(0,H);ctx.lineTo(0,side);ctx.lineTo(male?305:316,side);
   ctx.quadraticCurveTo(343,front-2,380,front);ctx.quadraticCurveTo(417,front-2,male?459:446,side);
   ctx.lineTo(W,side);ctx.lineTo(W,H);ctx.closePath();
  }else ctx.rect(0,id==='icon'?239:260,W,H);
 }
 static render(image,d,id){
  const canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d');ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  const item=d.item,male=id==='icon';
  if(male&&['bag','cream-bag'].includes(item.id)&&!d.preview){
   ctx.save();ctx.lineCap='round';ctx.lineJoin='round';ctx.shadowColor='#21172555';ctx.shadowBlur=3;ctx.shadowOffsetX=1.5;
   ctx.strokeStyle=item.id==='bag'?'#302a2e':'#59432f';ctx.lineWidth=13;ctx.beginPath();ctx.moveTo(278,226);ctx.quadraticCurveTo(350,371,item.id==='bag'?432:419,532);ctx.stroke();
   ctx.shadowColor='transparent';ctx.strokeStyle=item.id==='bag'?'#79676d':'#a18765';ctx.lineWidth=.9;ctx.setLineDash([3,4]);ctx.beginPath();ctx.moveTo(275,227);ctx.quadraticCurveTo(347,372,item.id==='bag'?429:416,533);ctx.stroke();ctx.restore();
  }
  if(!male&&item.id==='earrings'){
   ctx.drawImage(image,313,128,60,61,312,166,25,27);
   ctx.drawImage(image,390,128,61,61,425,166,25,27);
  }else if(!male&&['bag','cream-bag'].includes(item.id)){
   ctx.drawImage(image,488,618,133,145,487,632,119,130);
  }else if(!male&&item.id==='glasses'){
   ctx.drawImage(image,325,107,113,45,326,111,107,43);
  }else ctx.drawImage(image,0,0,W,H);
  if(['necklace','scarf'].includes(item.id)&&!d.preview){
   ctx.save();ctx.globalCompositeOperation=d.category==='accessory-back'?'destination-out':'destination-in';
   this.frontPath(ctx,id,item);ctx.fillStyle='#000';ctx.fill();ctx.restore();
  }
  return canvas;
 }
}

class SpriteCache {
 constructor(){this.images=new Map();this.fitted=new Map();this.thumbnails=new Map();this.textures=new WeakMap();}
 image(path){if(!this.images.has(path))this.images.set(path,new Promise((resolve,reject)=>{const image=new Image();image.onload=()=>resolve(image);image.onerror=()=>{this.images.delete(path);reject(new Error('Não foi possível carregar '+path));};image.src=path;}));return this.images.get(path);}
 async surface(d,id){const key=[id,d.category,d.path,d.category.includes('neck')?d.item.id:'',d.frontOnly?'toe':'full',d.preview?'preview':'worn',d.top?.id||''].join(':');if(!this.fitted.has(key))this.fitted.set(key,this.fit(d,id));return this.fitted.get(key);}
 async fit(d,id){
  const source=d.path,male=id==='icon'&&d.category==='top';
  const image=await this.image(source),canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;
  const ctx=canvas.getContext('2d',{willReadFrequently:true});ctx.imageSmoothingEnabled=true;ctx.imageSmoothingQuality='high';
  if(['accessory','accessory-back'].includes(d.category)){ctx.drawImage(AccessoryFitter.render(image,d,id),0,0);}
  else if(d.category==='accessory-arm'){
   ctx.save();ctx.beginPath();ctx.moveTo(500,320);ctx.bezierCurveTo(545,318,555,346,562,378);ctx.lineTo(587,468);ctx.lineTo(608,552);ctx.lineTo(614,647);ctx.lineTo(548,660);ctx.lineTo(547,596);ctx.lineTo(537,512);ctx.lineTo(520,440);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,W,H);
   if(d.top){const path=manifest.pieces[id+':top:'+d.top.id]?.[0];if(path)ctx.drawImage(await this.surface({path,category:'top',item:d.top},id),0,0);}
   ctx.restore();
  }
  else if(id==='muse'&&d.category==='top'){ctx.drawImage(FemaleGarmentFitter.render(image,d),0,0);}
  else if(d.category==='top'){
   const regular=male,from=regular?180:210,to=regular?650:620;
   // Fitted fabric with a straighter men's waist; preserve original sleeve anchors.
   for(let y=from;y<to;y++){
    const scale=1;
    ctx.drawImage(image,0,y,W,1,(W-W*scale)/2,y,W*scale,1);
   }
  }else if(d.category==='female-neck'){ctx.save();ctx.beginPath();ctx.moveTo(338,185);ctx.lineTo(427,185);ctx.lineTo(432,232);ctx.bezierCurveTo(426,253,407,273,383,286);ctx.bezierCurveTo(361,274,339,254,333,234);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,W,H);ctx.restore();}else if(d.category==='neck'){const front=['tee','knit'].includes(d.item.id)?225:244;ctx.save();ctx.beginPath();ctx.moveTo(320,148);ctx.lineTo(444,148);ctx.lineTo(441,193);ctx.bezierCurveTo(438,216,414,front,384,front);ctx.bezierCurveTo(352,front,326,217,322,194);ctx.closePath();ctx.clip();ctx.drawImage(image,0,0,W,H);ctx.restore();}else ctx.drawImage(image,0,0,W,H);
  if(male&&!manifest.fitted){const fitted=document.createElement('canvas');fitted.width=W;fitted.height=H;const fc=fitted.getContext('2d');fc.drawImage(canvas,0,340,W,H-340,0,340,W,H-340);for(let x=0;x<W;x++){const lift=18*Math.min(1,Math.max(0,(Math.abs(x-384)-55)/50));fc.drawImage(canvas,x,180,1,160,x,180-lift,1,160+lift);}ctx.clearRect(0,0,W,H);ctx.drawImage(fitted,0,0);}
  if(root.location?.protocol!=='file:'){const pixels=ctx.getImageData(0,0,W,H),a=pixels.data;
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
   // Remove detached pixels left by the original clothing cutouts.
   ctx.clearRect(0,0,W,178);ctx.clearRect(0,654,W,H-654);
   if(id==='muse'){ctx.clearRect(0,0,180,H);ctx.clearRect(580,0,W-580,H);}
  }
  if(d.frontOnly)ctx.clearRect(0,0,W,1074);
  return canvas;
 }
 async texture(surface){if(!this.textures.has(surface))this.textures.set(surface,root.PIXI.Texture.from(surface));return this.textures.get(surface);}
 async thumbnail(item,category,id){
  if(id==='icon'&&category==='accessory')return 'assets/thumb-icon-accessory-'+item.id+'.webp';
  const key=[id,category,item.id].join(':');if(this.thumbnails.has(key))return this.thumbnails.get(key);
  const task=(async()=>{const paths=manifest.pieces[id+':'+category+':'+item.id]||[],canvas=document.createElement('canvas');canvas.width=W;canvas.height=H;const ctx=canvas.getContext('2d');
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
 async initialize(){if(!root.PIXI||root.location?.protocol==='file:')return;try{const app=new root.PIXI.Application();await app.init({width:W,height:H,backgroundAlpha:0,antialias:true,autoStart:false,preference:'webgl',resolution:1});this.app=app;this.renderer='pixi';app.canvas.className='rig-canvas';app.canvas.setAttribute('aria-hidden','true');}catch(error){this.renderer='canvas';console.info('CLOSET: composição Canvas ativa.',error.message);}}
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
   canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Personagem '+rig.character.label+' com as roupas escolhidas');
   this.host.replaceChildren(canvas);this.host.dataset.renderer=this.renderer;
  }catch(error){this.host.dataset.renderer='html';console.info('CLOSET: prévia original preservada.',error.message);}
  finally{if(token===this.version)this.host.setAttribute('aria-busy','false');}
 }
}
function render(look,id){return new CharacterRig(id).render(look);}
function portrait(id){const c=getCharacter(id);return '<img src="'+manifest.characters[c.id].portrait+'" alt="" draggable="false">';}
function thumbnail(item,category,id='muse'){
 if(item.id==='none')return '<span class="empty-accessory" aria-hidden="true">∅</span>';
 return '<img class="item-photo" data-fit-item="'+item.id+'" data-fit-category="'+category+'" src="assets/thumb-'+getCharacter(id).id+'-'+category+'-'+item.id+'.webp" alt="" loading="lazy" decoding="async">';
}
function paintThumbnails(host,id){if(root.location?.protocol==='file:')return;(host.querySelectorAll?.('[data-fit-item]')||[]).forEach(async image=>{
 const category=image.dataset.fitCategory,item=root.ClosetEngine.items[category].find(p=>p.id===image.dataset.fitItem);
 if(!item)return;try{const src=await sharedCache().thumbnail(item,category,id);if(image.isConnected)image.src=src;}catch(error){console.info('CLOSET: miniatura original preservada.',error.message);}
});}
const api={characters,getCharacter,render,portrait,thumbnail,paintThumbnails,CharacterRig,DressingRoom,SpriteCache};
if(typeof module!=='undefined')module.exports=api;else root.ClosetAvatar=api;
})(typeof globalThis!=='undefined'?globalThis:this);
