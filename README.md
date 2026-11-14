# CLOSET.exe — edição 3.11

Jogo de moda, cartas de caos e análise combinatória. Esta edição tem sete personagens femininas: Muse, Flora, Ana, Isadora, Lívia, Nicole e Sophia. As cinco novas personagens usam as fotos escolhidas para este jogo e compartilham o armário feminino.

## Como abrir

1. Extraia o ZIP inteiro para uma pasta.
2. Abra `index.html` no navegador.
3. Mantenha a pasta `assets` junto dos arquivos do jogo.

Não abra o HTML diretamente de dentro do ZIP. Não é necessário instalar nada.

## Como jogar

1. Escolha uma personagem, digite seu nome e selecione o tempo do Combo IQ: 30, 45, 60 ou 90 segundos. Para a primeira partida, recomendamos 60 ou 90 segundos.
2. Clique em START GAME, leia a ocasião e as duas regras e inicie a montagem.
3. Durante os 30 segundos da montagem, escolha parte de cima, parte de baixo, sapatos e acessório. “Sem acessório” é permitido, exceto quando uma carta exigir um.
4. A Carta de Caos aparece durante a rodada e altera o armário. O relógio da montagem pausa durante a carta e o cálculo.
5. No Combo IQ, conte os looks que respeitam as duas regras e a carta. Use o Princípio Fundamental da Contagem e desconte as combinações proibidas.
6. Responda e finalize as quatro escolhas antes de o tempo terminar.

O menu “Como jogar” tem instruções completas, exemplos, regras e dicas. Abrir o guia ou os créditos durante a montagem pausa a partida; fechar retoma o tempo.

## Cálculo

Use as quantidades disponíveis depois da carta: partes de cima × partes de baixo × sapatos × acessórios. Desconte primeiro os looks que falham na primeira regra e aplique a segunda regra às combinações restantes, contando cada look proibido uma única vez.

Exemplo: 24 combinações − 6 sem vermelho = 18; dessas 18, retire 6 que não têm elegância suficiente; restam 12 looks válidos.

A regra de elegância exige ao menos duas peças elegantes entre parte de cima, parte de baixo e sapatos. O acessório não entra nesse mínimo. A regra do vermelho aceita vermelho em qualquer categoria. “Proibido tênis” elimina looks com tênis. O Combo IQ mostra os descontos reais da rodada e a conta completa depois da resposta.

## Pontuação

- Estilo: até 100 pontos.
- Velocidade: até 100 pontos.
- Combo IQ: 100 pontos pela resposta correta dentro do prazo.
- Total máximo: 300 pontos.
- Acertar o cálculo também dá 500 estrelas de carreira, separadas dos pontos.

Nome, ranking e estrelas ficam salvos no navegador deste aparelho. O jogo não usa contas nem sincroniza o ranking entre aparelhos.

## Personagens e armário

Muse e Flora são as personagens originais. Ana, Isadora, Lívia, Nicole e Sophia foram acrescentadas a partir das cinco fotos escolhidas. As sete usam as roupas e os acessórios femininos disponíveis no jogo.

## Traje de prenda

Na prévia livre, escolha VESTIR PRENDA. Durante uma partida, monte o traje pelas categorias do armário: corpete azul com mangas e rendas, saia longa azul e sapatos fechados. O corpete e a saia formam o vestido de prenda.

As peças seguem referências tradicionais do Rio Grande do Sul. Referência: https://www.mtg.org.br/wp-content/uploads/2026/01/Diretrizes-para-a-Pilcha-Gaucha-2025.pdf

## Cartas físicas

Abra `CARTAS-DE-CAOS.html` para imprimir as cartas. Durante a emergência, escolha “Tenho uma carta física” e aplique o efeito retirado. O jogo lista apenas cartas que alteram o desafio e deixam ao menos um look válido.

## Créditos

Gabriel Klemm Biesek — Buda  
Instagram: https://www.instagram.com/budaa_01/

Fernando Rodrigues Fortes  
Instagram: https://www.instagram.com/fefortes14/

## Recursos

A composição dos personagens usa Canvas e arquivos locais. Os recursos necessários para jogar estão incluídos no ZIP. PixiJS e sua licença ficam na pasta `vendor`.
