# CLOSET.exe — Studio Edition

Jogo de moda e análise combinatória, feito em HTML, CSS e JavaScript puro.

## O que esta versão inclui

- Dois personagens ilustrados em vetor, inspirados nas referências fornecidas.
- Corpo, roupas e acessórios usam a mesma base de coordenadas. O segundo personagem possui uma adaptação de proporções aplicada tanto ao corpo quanto às peças.
- 8 blusas, 6 partes de baixo, 6 calçados e 7 escolhas de acessórios (incluindo “Sem acessório”).
- 2.016 combinações antes das regras e das Cartas de Caos.
- Ocasiões e regras sorteadas, 30 segundos de montagem, 5 Cartas de Caos e pergunta de 10 segundos.
- Pontuação de estilo, velocidade e matemática; estrelas de carreira e ranking de hoje.
- O ranking e o personagem escolhido são salvos apenas neste navegador. Não existe banco de dados nem ranking compartilhado entre dispositivos.
- Funciona sem instalação de dependências e sem serviços externos.

## Testar no computador

Extraia o ZIP e abra **index.html** no Chrome, Edge ou Firefox. Todos os arquivos devem permanecer juntos.

Para servir por HTTP, se você tem Node.js instalado:

```sh
npm run dev
```

Abra o endereço exibido no terminal. A porta padrão é 4173.

## Colocar no GitHub Pages

1. Envie **o conteúdo da pasta** para a raiz do seu repositório. O index.html deve ficar na raiz, sem uma pasta adicional acima dele.
2. Ative o GitHub Pages nas configurações do repositório e selecione a branch e a pasta em que você colocou o index.html.
3. Quando o GitHub informar que a implantação terminou, abra a URL fornecida por ele.

O pacote não contém credenciais, identificadores de hospedagem, fotos originais ou configurações vinculadas a uma conta do ChatGPT.

## Como jogar

Escolha um dos personagens no provador, digite seu nome e clique em START GAME. Confira a ocasião e as duas regras e comece a montar o look. As peças com o selo ELEGANTE contam para a regra de elegância.

Após 12 segundos de montagem, a emergência pausa o relógio. Retire uma carta na tela ou selecione o efeito da carta física. A pergunta de matemática tem um relógio próprio de 10 segundos. Depois, o tempo da montagem continua de onde parou.

“Sem acessório” é uma escolha válida, exceto após a carta Paparazzi. As peças bloqueadas pelo caos são retiradas automaticamente do look. O jogo só permite finalizar manualmente um look completo que cumpre as regras; ao esgotar o tempo, ele avalia o que foi montado.

## Matemática e pontuação

Cada look contém exatamente uma escolha de cada categoria. A contagem percorre as combinações e mantém apenas as que cumprem as duas regras e o efeito de caos. As regras do vermelho e da elegância dependem de mais de uma categoria; portanto, multiplicar as quantidades disponíveis nem sempre dá o total de looks válidos. A pergunta oferece a quantidade descartada como dica e a explicação final mostra o produto e a filtragem.

- Elegância: ao menos duas peças elegantes entre blusa, parte de baixo e calçado.
- Vermelho: pode estar na blusa, parte de baixo ou acessório.
- Proibido tênis: bloqueia a validade de ambos os modelos de tênis.
- STYLE: até 60 pelas regras, 30 por adequação das peças principais à ocasião e 10 por completar as quatro escolhas.
- SPEED: com as quatro escolhas completas, 60 + 40 × segundos restantes / 30, arredondado; se faltar uma escolha, vale 0.
- COMBO IQ: 100 por uma resposta correta em até 10 segundos; caso contrário, 0.
- Total: até 300. As 500 estrelas de uma resposta correta são progresso separado e não aumentam o total acima de 300.

A avaliação de estilo é baseada nas tags das peças, não em uma IA.

## Cartas físicas

O arquivo **CARTAS-DE-CAOS.html** contém as cinco cartas e uma página de instruções. Abra no navegador e use Imprimir para imprimir ou salvar em PDF. Durante o caos, abra “Tenho uma carta física”. Apenas cartas que alteram a rodada e preservam pelo menos uma solução aparecem. Caso uma carta não apareça, retire outra.

## Estrutura

- index.html: interface.
- style.css: tema e responsividade.
- engine.js: peças, regras, contagem e pontuação.
- avatar.js: corpos, rostos, roupas e encaixe vetorial.
- app.js: interação, sorteio, cronômetros e armazenamento local.
- tests/verify.cjs: testes da lógica e da integridade do desenho.
- scripts/serve.cjs: servidor local, sem dependências.

## Verificação

Com Node.js:

```sh
npm test
```

Validação: contagem e regras testadas automaticamente; fluxo testado em DOM simulado; 54 miniaturas SVG renderizadas sem erro. A conferência da interface em um navegador real não foi concluída neste ambiente.

As ilustrações são interpretações estilizadas das fotos, não retratos fotográficos. Para modificar nomes, preços, cores e tags das peças, edite engine.js. Para mudar o desenho e os pontos de encaixe, edite avatar.js.
