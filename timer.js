/* Deadline-based countdown. The calculation clock is independent of the look clock. */
(function(root){'use strict';
class QuizCountdown {
  constructor({seconds=30,onTick=()=>{},onExpire=()=>{},now=()=>performance.now(),schedule=(fn)=>setInterval(fn,50),cancel=(id)=>clearInterval(id)}={}){
    if(!Number.isFinite(seconds)||seconds<=0)throw new RangeError('Duração inválida');
    this.durationMs=seconds*1000;this.onTick=onTick;this.onExpire=onExpire;this.now=now;this.schedule=schedule;this.cancel=cancel;this.handle=null;this.state='idle';this.remainingValue=this.durationMs;
  }
  get remainingMs(){return this.state==='running'?Math.max(0,this.deadline-this.now()):this.remainingValue;}
  start(){this.stop();this.remainingValue=this.durationMs;this.deadline=this.now()+this.durationMs;this.state='running';this.pulse();if(this.state==='running')this.handle=this.schedule(()=>this.pulse());return this;}
  pulse(){if(this.state!=='running')return;const remaining=this.remainingMs;this.onTick({remainingMs:remaining,seconds:Math.ceil(remaining/1000),progress:remaining/this.durationMs});if(remaining<=0){this.remainingValue=0;this.state='expired';this.clear();this.onExpire();}}
  clear(){if(this.handle!==null){this.cancel(this.handle);this.handle=null;}}
  stop(){this.remainingValue=this.remainingMs;this.clear();if(this.state==='running')this.state='stopped';return this.remainingValue;}
}
class QuizQuestionView {
  constructor(seconds,document=root.document){this.duration=seconds;this.document=document;}
  html(engine,round,labels,choices){const pools=engine.categories.map(c=>engine.available(round,c).length),discarded=pools.reduce((a,b)=>a*b,1)-round.afterCount;return '<section class="quiz-clock" id="quizClockPanel" data-state="running" aria-label="Relógio do cálculo"><div class="quiz-clock-heading"><span><b>TEMPO DO CÁLCULO</b><small>O relógio do look está pausado.</small></span><output class="quiz-clock-value" id="quizTime" role="timer" aria-live="off" aria-label="Tempo restante para responder">'+this.format(this.duration)+'</output></div><div id="quizProgress" class="quiz-progress" role="progressbar" aria-label="Tempo restante do cálculo" aria-valuemin="0" aria-valuemax="'+this.duration+'" aria-valuenow="'+this.duration+'"><span id="quizProgressBar"></span></div><p id="quizCountdownMessage">Leia a conta com calma e escolha uma resposta.</p></section><div class="modal-eyebrow quiz-eyebrow">A MATEMÁTICA ENTROU NO CHAT</div><h2>Quantos looks<br>válidos sobraram?</h2><p class="modal-intro">Conte apenas os looks que obedecem às <b>duas regras</b> e à <b>carta de caos</b>.</p><div class="formula">'+engine.categories.map((c,i)=>pools[i]+' '+(c==='bottom'?'partes de baixo':labels[c].toLowerCase())).join(' × ')+'<br><small>Multiplique as opções e retire os looks que descumprem as regras.</small></div><p class="quiz-hint">Dica: '+discarded+' combinações desse total descumprem as regras. Subtraia-as.</p><details class="calculation-guide physical-control"><summary>Como calcular e fazer os descontos?</summary>'+this.mathSteps(engine,round,labels,false)+'</details><div class="answer-grid">'+choices.map(n=>'<button class="answer-button" data-answer="'+n+'">'+n+'</button>').join('')+'</div>';}
  mathSteps(engine,round,labels,solved=false){
    const b=engine.countBreakdown(round),factors=engine.categories.map(c=>b.pools[c]);
    const descriptions={
      red:'looks sem nenhuma peça vermelha, incluindo os acessórios',
      elegant:'looks com zero ou apenas uma peça elegante entre parte de cima, parte de baixo e sapato',
      noSneaker:'looks que usam tênis'
    };
    const effect={
      ripped:'as peças indicadas na carta já foram retiradas',
      rain:'os calçados abertos já foram retirados',
      friend:'a parte de cima bloqueada já foi retirada',
      budget:'as peças que custam mais de R$ 90 já foram retiradas de cada categoria',
      paparazzi:'a opção “Sem acessório” já foi retirada'
    };
    return '<div class="math-explanation">'+(round.chaos?'<p><b>Primeiro, aplique o caos:</b> '+effect[round.chaos.id]+'. Os números abaixo já usam o armário atualizado. Não desconte os bloqueios novamente.</p>':'')+
      '<ol class="math-steps"><li><b>Calcule o total de combinações disponíveis.</b><p>Escolha uma opção de cada categoria: '+engine.categories.map(c=>b.pools[c]+' '+(c==='bottom'?'partes de baixo':labels[c].toLowerCase())).join(', ')+'.</p><div class="formula">'+factors.join(' × ')+(solved?' = <b>'+b.total+'</b>':'')+'</div></li>'+
      b.steps.map((step,i)=>'<li><b>Regra '+(i+1)+': '+step.name+'.</b><p>'+((i===0)?'Entre todas as combinações disponíveis':'Apenas entre os looks que passaram pela regra anterior')+', retire <b>'+step.discount+'</b> '+descriptions[step.id]+'.</p>'+(solved?'<div class="formula">'+step.before+' − '+step.discount+' = <b>'+step.after+'</b></div>':'')+'</li>').join('')+
      '<li><b>'+(solved?'Resultado da rodada.':'Faça a subtração final.')+'</b><div class="formula">'+(solved?b.total:b.pools.top+' × '+b.pools.bottom+' × '+b.pools.shoe+' × '+b.pools.accessory)+' − '+b.steps.map(s=>s.discount).join(' − ')+(solved?' = <b>'+b.valid+' looks válidos</b>':'')+'</div></li></ol>'+
      '<p class="help-note"><b>Cada look sai uma única vez.</b> O desconto da segunda regra conta somente os looks que ainda sobraram. Assim, uma combinação que viola as duas regras não é descontada duas vezes. Os descontos aqui são quantidades de looks proibidos.</p></div>';
  }
  format(seconds){return String(Math.floor(seconds/60)).padStart(2,'0')+':'+String(seconds%60).padStart(2,'0');}
  paint({seconds,progress}){const get=id=>this.document.getElementById(id);get('quizTime').textContent=this.format(seconds);get('quizProgress').setAttribute('aria-valuenow',String(seconds));get('quizProgressBar').style.width=(progress*100)+'%';get('quizClockPanel').dataset.state=seconds<=10?'urgent':'running';get('quizCountdownMessage').textContent=seconds<=10?'Últimos '+seconds+' segundos. Escolha sua resposta.':'Leia a conta com calma e escolha uma resposta.';}
}
if(typeof module!=='undefined')module.exports={QuizCountdown,QuizQuestionView};else{root.QuizCountdown=QuizCountdown;root.QuizQuestionView=QuizQuestionView;}
})(typeof globalThis!=='undefined'?globalThis:this);
