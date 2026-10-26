# CLOSET.exe — versão 3.10

Jogo de moda, cartas de caos e análise combinatória. Funciona com arquivos locais e em hospedagem estática, incluindo GitHub Pages.

## Como abrir

1. Extraia TODO o ZIP em uma pasta nova.
2. Abra o arquivo index.html no navegador.
3. Mantenha as pastas assets e vendor junto dos arquivos do jogo.

Não abra o HTML diretamente de dentro do ZIP. Nenhuma instalação é necessária para jogar.

Para desenvolvimento, com Node.js instalado:
- npm run dev
- abra o endereço informado pelo servidor.
- npm test executa as verificações de regras, interface e relógios.

## Como jogar

1. Escolha um dos quatro personagens: dois femininos e dois masculinos. Os três personagens adicionados foram refeitos a partir das fotografias de referência, com postura alinhada e união contínua entre cabeça, pescoço e corpo. A personagem feminina original continua disponível. As peças e os acessórios seguem o armário de cada gênero.
2. Digite seu nome e escolha 30, 45, 60 ou 90 segundos para o cálculo. Recomendação para a primeira partida: 60 ou 90.
3. Clique em START GAME, leia a ocasião e as duas regras e inicie a montagem.
4. Nos 30 segundos de montagem, selecione parte de cima, parte de baixo, sapato e acessório. “Sem acessório” é uma escolha válida, exceto quando o caos exigir um acessório.
5. Após 12 segundos, uma Carta de Caos muda o armário. O relógio da montagem pausa durante a carta e o cálculo.
6. No Combo IQ, conte os looks que respeitam as duas regras e a carta. Use o Princípio Fundamental da Contagem e descarte as combinações proibidas.
7. Responda, volte ao look e finalize as quatro escolhas antes de terminar o tempo.

O menu “Como jogar” contém instruções completas, exemplos de cálculo, regras e dicas. Abrir o guia ou os créditos durante a montagem pausa a partida; fechar retoma o tempo.

## Cálculo e descontos das regras

A contagem considera o armário do personagem selecionado.

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

## Personagens

- Feminino 1: personagem original.
- Feminino 2: personagem baseado na fotografia enviada.
- Masculino 1 e Masculino 2: personagens baseados nas duas fotografias enviadas.
- O masculino anterior foi retirado da seleção.
- As demais peças e os acessórios foram preservados.

## Trajes do Rio Grande do Sul

Na prévia livre, clique em VESTIR PILCHA ou VESTIR PRENDA. Durante a partida, selecione os trajes pelas três categorias do armário.

- Masculino: camisa com colete e lenço vermelho, bombacha com guaiaca e botas.
- Feminino: corpete azul com mangas e rendas, saia longa azul e sapatos fechados. Corpete e saia formam o vestido de prenda.
- Os trajes são inspirados em referências tradicionais do RS. Referência: https://www.mtg.org.br/wp-content/uploads/2026/01/Diretrizes-para-a-Pilcha-Gaucha-2025.pdf
- O armário feminino tem 9 partes de cima × 7 partes de baixo × 7 calçados × 7 acessórios = 3.087 combinações. O masculino tem 6 acessórios, após a retirada da bandana: 9 × 7 × 7 × 6 = 2.646 combinações. O cálculo usa as quantidades atualizadas automaticamente.
- A carta Costura abriu também bloqueia a bombacha masculina, junto das peças de alfaiataria marcadas.

## Ajustes desta versão

- Cabeças masculinas maiores em relação aos ombros; tronco mais estreito e curto, com pernas e acessórios acompanhando o ajuste.
- Saia lavanda restaurada com pregas contínuas e recorte transparente, sem as faixas quebradas.
- Blusas femininas alinhadas aos ombros, sem a base bege aparecendo acima da roupa ou nas laterais da cintura.

- Bandana avulsa retirada do armário masculino; lenço da pilcha preservado.
- Relógio masculino centralizado no pulso e dimensionado para a largura do braço.
- Trocar de um personagem feminino usando lenço para um masculino seleciona “Sem acessório”.

- Cabelo feminino preservado por uma camada própria, sem cortes causados pelas máscaras das blusas.
- Cabeças masculinas redimensionadas em relação aos ombros, mantendo os mesmos rostos e as peças ajustadas.
- Vestido de prenda completo preservado quando o ajuste inferior não precisa de transformação.

- Recortes das imagens preparados antes da distribuição, removendo sobras de fundo também na abertura local.
- A versão local e a hospedada usam a mesma composição Canvas.
- Cós ajustado à cintura e à barra da camisa para evitar pontas nas laterais.
- Pernas das calças e sapatos alinhados aos mesmos pontos de apoio.
- Parte da frente dos calçados aparece sob a barra da calça.
- Camisas de manga curta preservam o caimento do tronco sem receber a deformação usada nas mangas longas.
- Referências, quatro personagens, dois armários, pilchas, guia, créditos e regras de cálculo mantidos.

## Cartas físicas

Abra CARTAS-DE-CAOS.html para imprimir as cartas. Na emergência do jogo, escolha “Tenho uma carta física” e aplique o efeito retirado. O jogo lista apenas cartas que alteram o desafio e mantêm ao menos um look válido.

## Desenvolvido por

Gabriel Klemm Biesek — Buda  
Instagram: https://www.instagram.com/budaa_01/

Fernando Rodrigues Fortes  
Instagram: https://www.instagram.com/fefortes14/

## Recursos

A composição dos personagens usa Canvas com recursos locais. Os arquivos necessários para jogar estão incluídos no ZIP. PixiJS e sua licença permanecem na pasta vendor.
