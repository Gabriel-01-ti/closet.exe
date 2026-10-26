const assert=require('node:assert/strict'),E=require('../engine.js'),T=require('../timer.js');
let cases=0,overlapFound=false;
for(const character of ['muse','flora','rio','pampa']){
 E.setCharacter(character);
 const baseTotal=E.characterProfile(character)==='icon'?2646:3087;
 for(let i=0;i<E.rules.length;i++)for(let j=0;j<E.rules.length;j++){
  if(i===j)continue;
  const rules=[E.rules[i],E.rules[j]];
  const cards=[null,...E.cards.filter(c=>c.id!=='friend'),...E.items.top.map(p=>({...E.cards.find(c=>c.id==='friend'),blockedId:p.id}))];
  for(const chaos of cards){
   const round={occasion:E.occasions[0],rules,chaos};
   const b=E.countBreakdown(round),all=E.enumerate({...round,rules:[]}).length;
   assert.equal(b.total,all);
   assert.equal(b.baseTotal,baseTotal);
   assert.equal(b.blockedByChaos,baseTotal-all);
   let previous=all;
   for(let k=0;k<rules.length;k++){
    const valid=E.enumerate({...round,rules:rules.slice(0,k+1)}).length;
    assert.equal(b.steps[k].before,previous);
    assert.equal(b.steps[k].discount,previous-valid);
    assert.equal(b.steps[k].after,valid);
    previous=valid;
   }
   const expected=E.enumerate(round).length;
   assert.equal(b.valid,expected);
   assert.equal(b.total-b.steps.reduce((n,s)=>n+s.discount,0),expected);
   assert.equal(E.countBreakdown({...round,rules:[...rules].reverse()}).valid,expected);
   const naiveDiscount=rules.reduce((n,r)=>n+all-E.enumerate({...round,rules:[r]}).length,0);
   if(naiveDiscount>b.discounted)overlapFound=true;
   const html=new T.QuizQuestionView(60).mathSteps(E,round,{top:'Blusas',bottom:'Parte de baixo',shoe:'Sapatos',accessory:'Acessórios'},true);
   assert(html.includes(expected+' looks válidos'));
   cases++;
  }
 }
}
assert(overlapFound,'A verificação precisa cobrir regras com descontos sobrepostos.');
E.setCharacter('muse');
console.log('PASS COUNTING: '+cases+' casos; descontos reais por regra e carta; resultados independentes da ordem; nenhum look descontado duas vezes.');
