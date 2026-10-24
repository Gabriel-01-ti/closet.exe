# CLOSET.exe — versão 3.1

Jogo de moda, cartas de caos e análise combinatória. Funciona com arquivos locais e em hospedagem estática, incluindo GitHub Pages.

## Como abrir

1. Extraia TODO o ZIP para uma pasta.
2. Abra o arquivo index.html no navegador.
3. Mantenha as pastas assets e vendor junto dos arquivos do jogo.

Não abra o HTML diretamente de dentro do ZIP. Nenhuma instalação é necessária para jogar.

Para desenvolvimento, com Node.js instalado:
- npm run dev
- abra o endereço informado pelo servidor.
- npm test executa as verificações de regras, interface e relógios.

## Como jogar

1. Escolha o personagem feminino ou masculino. Cada armário tem peças e cortes próprios.
2. Digite seu nome e escolha 30, 45, 60 ou 90 segundos para o cálculo. Recomendação para a primeira partida: 60 ou 90.
3. Clique em START GAME, leia a ocasião e as duas regras e inicie a montagem.
4. Nos 30 segundos de montagem, selecione parte de cima, parte de baixo, sapato e acessório. “Sem acessório” é uma escolha válida, exceto quando o caos exigir um acessório.
5. Após 12 segundos, uma Carta de Caos muda o armário. O relógio da montagem pausa durante a carta e o cálculo.
6. No Combo IQ, conte os looks que respeitam as duas regras e a carta. Use o Princípio Fundamental da Contagem e descarte as combinações proibidas.
7. Responda, volte ao look e finalize as quatro escolhas antes de terminar o tempo.

O menu “Como jogar” contém instruções completas, exemplos de cálculo, regras e dicas. Abrir o guia ou os créditos durante a montagem pausa a partida; fechar retoma o tempo.

## Cálculo e descontos das regras

Use as quantidades do armário depois da carta: parte de cima × parte de baixo × sapato × acessório. Os bloqueios da carta já foram retirados dessas quantidades.

Desconte os looks que falham na primeira regra. Aplique a segunda somente aos que sobraram, contando cada look proibido uma única vez. Exemplo didático: 24 combinações − 6 sem vermelho = 18; entre essas 18, retire 6 que não têm elegância suficiente; resultado: 12 looks válidos.

A regra de elegância exige ao menos duas peças elegantes entre parte de cima, parte de baixo e sapato; o acessório não entra nesse mínimo. A regra do vermelho aceita vermelho em qualquer categoria. Proibido tênis elimina os looks com tênis. O limite de R$ 90 é por peça e já é aplicado pela carta ao armário.

No Combo IQ, abra “Como calcular e fazer os descontos?” para ver os descontos reais da rodada. Depois da resposta, aparece a conta completa, com cada subtração.

## Pontuação

- Estilo: até 100 pontos.
- Velocidade: até 100 pontos.
- Combo IQ: 100 pontos pela resposta correta dentro do prazo.
- Total máximo: 300 pontos.
- Acertar o cálculo também dá 500 estrelas de carreira, separadas dos 300 pontos.

Nome, ranking e estrelas são salvos no navegador deste aparelho. O jogo não usa contas nem sincroniza o ranking entre aparelhos.

## Ajustes desta versão

- Acessórios ajustados ao rosto, pescoço, mãos e pulso; a parte traseira dos lenços e colares fica atrás do corpo.
- Acessórios masculinos próprios: transversal vermelha, bolsa carteiro, corrente de prata, relógio clássico, óculos retangulares e bandana vermelha. As quantidades, os preços e as regras de contagem permanecem iguais.

- Calçados ficam sob as calças: aparece a parte da frente, sem canos atravessando o tecido.
- Com saias e bermudas, as botas continuam com o cano visível.
- Novas peças masculinas com cortes próprios: polos, camisas, camiseta, suéter, blazer e jaqueta.
- Ajustes de ombros, golas e encaixe no corpo; composição compartilhada entre PixiJS e Canvas.
- Painéis com fundo sólido, texto maior e contraste reforçado.
- Provador e armário empilhados no celular; relógio da montagem visível durante a partida.
- Guia completo e créditos disponíveis no menu e no rodapé.

## Cartas físicas

Abra CARTAS-DE-CAOS.html para imprimir as cartas. Na emergência do jogo, escolha “Tenho uma carta física” e aplique o efeito retirado. O jogo lista apenas cartas que alteram o desafio e mantêm ao menos um look válido.

## Desenvolvido por

Gabriel Klemm Biesek — Buda  
Instagram: https://www.instagram.com/budaa_01/

Fernando Rodrigues Fortes  
Instagram: https://www.instagram.com/fefortes14/

## Recursos

PixiJS está incluído localmente em vendor, com sua licença. Não é necessário baixar bibliotecas para jogar. Sem WebGL, o jogo usa Canvas; a composição HTML também permanece como alternativa de compatibilidade.
