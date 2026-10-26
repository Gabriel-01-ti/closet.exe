const assert=require('node:assert/strict');
const {QuizCountdown,QuizQuestionView}=require('../timer.js');
for(const seconds of [30,45,60,90]){
  let time=100,expired=0,scheduled,cleared=0;const ticks=[];
  const clock=new QuizCountdown({seconds,now:()=>time,onTick:t=>ticks.push(t),onExpire:()=>expired++,schedule:fn=>(scheduled=fn,1),cancel:()=>cleared++});
  clock.start();assert.equal(ticks[0].seconds,seconds);assert.equal(ticks[0].progress,1);
  time+=10001;scheduled();assert.equal(expired,0);assert.equal(ticks.at(-1).seconds,seconds-10);
  time=100+seconds*1000-1;scheduled();assert.equal(ticks.at(-1).seconds,1);assert.equal(expired,0);
  time++;scheduled();assert.equal(expired,1);assert.equal(clock.remainingMs,0);assert.equal(ticks.at(-1).seconds,0);
  scheduled();assert.equal(expired,1);assert.equal(cleared,1);
}
let time=0,expired=0;
const suspended=new QuizCountdown({seconds:30,now:()=>time,onExpire:()=>expired++,schedule:()=>1,cancel:()=>{}}).start();
time=75000;suspended.pulse();assert.equal(expired,1);assert.equal(suspended.remainingMs,0);
const stopped=new QuizCountdown({seconds:60,now:()=>time,onExpire:()=>expired++,schedule:()=>1,cancel:()=>{}}).start();
time+=12500;stopped.stop();const left=stopped.remainingMs;time+=100000;stopped.pulse();assert.equal(stopped.remainingMs,left);assert.equal(expired,1);
assert.throws(()=>new QuizCountdown({seconds:0}),RangeError);
const nodes=new Map(),document={getElementById(id){if(!nodes.has(id))nodes.set(id,{style:{},dataset:{},setAttribute(k,v){this[k]=v;}});return nodes.get(id);}};
const view=new QuizQuestionView(90,document);
assert.equal(view.format(90),'01:30');assert.equal(view.format(30),'00:30');assert.equal(view.format(0),'00:00');
view.paint({seconds:11,progress:.5});assert.equal(nodes.get('quizClockPanel').dataset.state,'running');
view.paint({seconds:10,progress:1/3});assert.equal(nodes.get('quizTime').textContent,'00:10');assert.equal(nodes.get('quizClockPanel').dataset.state,'urgent');assert.equal(nodes.get('quizProgress')['aria-valuenow'],'10');
console.log('PASS TIMER: 30/45/60/90 segundos, prazo exato, aba suspensa, parada, expiração única, formato e alerta final.');
