/*
 * Projeto LAA: Sistema de Ranking
 * Marco 3: Interface e Interação (Funções e Eventos)
 *
 * PONTO DE PARTIDA DA EQUIPE (não é o gabarito). Este arquivo já traz o Marco 2
 * inteiro REORGANIZADO EM FUNÇÕES e funcionando: ao abrir o index.html, a página
 * já mostra os 8 competidores ordenados, com métricas e carimbo. Ninguém começa
 * do zero. O trabalho do Marco 3 tem um aquecimento de refatoração (TODO 0) e
 * três TODOs de interação, que fazem a página REAGIR ao usuário.
 *
 * >>> ONDE SALVAR (porta de entrega) <<<
 *   Ao final de cada bloco, salvem ESTE arquivo (ranking.js) na pasta da Semana 3
 *   e reenviem index.html, ranking.js e estilo.css. Trabalho deixado em subpasta,
 *   em arquivo com outro nome ou dentro de .zip NÃO conta como entregue. No
 *   checkpoint, o Analista de Qualidade abre o index.html a partir DESTE arquivo e
 *   mostra a página reagindo a um clique.
 *
 * >>> REGIME DE IA NESTA SEMANA (autonomia alta, sobre o kit) <<<
 *   A IA PODE gerar trechos candidatos para os TODOs (inclusive o corpo de função).
 *   A equipe especifica com precisão, integra, RODA, confere (esperado × observado)
 *   e registra no Diário. EXCEÇÕES (Modo Aprendiz — a IA EXPLICA, vocês escrevem):
 *   o TODO 0 (extrair uma função) e o TODO 1 (ligar o botão ao evento). Não peçam
 *   à IA para refatorar o arquivo nem para entregar pronta a linha do evento.
 */

// 1) ESTADO. A lista agora PODE crescer (o usuário vai adicionar competidores);
//    por isso é 'let', e não 'const'.
let competidores = [
  { nome: "Ana Prado",      pontuacao: 920, idade: 17 },
  { nome: "Bruno Lima",     pontuacao: 880, idade: 19 },
  { nome: "Carla Souza",    pontuacao: 970, idade: 18 },
  { nome: "Daniel Moraes",  pontuacao: 760, idade: 20 },
  { nome: "Elisa Rocha",    pontuacao: 845, idade: 16 },
  { nome: "Felipe Antunes", pontuacao: 690, idade: 21 },
  { nome: "Gabriela Nunes", pontuacao: 905, idade: 18 },
  { nome: "Heitor Vieira",  pontuacao: 815, idade: 19 }
];

// ===================================================================
// FUNÇÕES PRONTAS (do Marco 2, agora encapsuladas). Não precisam mexer aqui;
// precisam ENTENDER, porque a arguição pode perguntar. Repare que cada função
// faz UMA coisa e recebe a lista por parâmetro.
// ===================================================================

function ordenarRanking(lista) {
  lista.sort((a, b) => b.pontuacao - a.pontuacao);
}

function calcularMetricas(lista) {
  let vencedor = lista[0];
  let ultimo = lista[0];
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    soma += lista[i].pontuacao;
    if (lista[i].pontuacao > vencedor.pontuacao) { vencedor = lista[i]; }
    if (lista[i].pontuacao < ultimo.pontuacao) { ultimo = lista[i]; }
  }
  const media = soma / lista.length;
  let acimaDaMedia = 0;
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].pontuacao > media) { acimaDaMedia++; }
  }
  return { vencedor, ultimo, media, acimaDaMedia, total: lista.length };
}

// Função de segurança, PRONTA para uso: troca < e > por texto, para um nome
// digitado não virar HTML. Vocês vão APLICÁ-la no TODO 3.
function escaparHTML(texto) {
  return String(texto).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function montarLinhas(lista) {
  let linhas = "";
  for (let i = 0; i < lista.length; i++) {
    const c = lista[i];
    const posicao = i + 1;
    // O nome abaixo será DIGITADO pelo usuário a partir do Marco 3 — ver TODO 3.
    linhas += `<tr><td>${posicao}º</td><td>${c.nome}</td><td>${c.pontuacao}</td><td>${c.idade}</td></tr>`;
  }
  return linhas;
}

function montarMetricas(m) {
  return `
    <p>Competidores: <strong>${m.total}</strong></p>
    <p>Pontuação média: <strong>${m.media.toFixed(1)}</strong></p>
    <p>Vencedor: <strong>${m.vencedor.nome}</strong> (${m.vencedor.pontuacao} pts)</p>
    <p>Último colocado: <strong>${m.ultimo.nome}</strong> (${m.ultimo.pontuacao} pts)</p>
    <p>Acima da média: <strong>${m.acimaDaMedia}</strong></p>
  `;
}

// ===================================================================
// TODO 0 — EXTRAIR UMA FUNÇÃO (aquecimento de refatoração).
//   Modo Aprendiz: a IA EXPLICA como se extrai uma função; a refatoração é feita
//   por vocês. Refatorar é mudar a ORGANIZAÇÃO do código SEM mudar o que ele faz.
//   As funções acima já vieram prontas; falta UMA. Dentro de renderizar()
//   (abaixo), o cálculo do carimbo de data/hora está embutido. Movam-no para uma
//   função chamada gerarCarimbo() que RETORNE o texto, e troquem o trecho
//   embutido por uma chamada a ela.
//
//   Como conferir (esperado × observado): a refatoração NÃO muda a tela. Antes e
//   depois, o carimbo deve aparecer igual no topo da página. Se sumir, faltou
//   chamar a função; se aparecer em dobro, o trecho antigo não foi removido.
// ===================================================================

// Orquestradora: re-desenha a página inteira a partir do estado atual da lista.
function renderizar() {
  ordenarRanking(competidores);
  const m = calcularMetricas(competidores);
  document.getElementById("metricas").innerHTML = montarMetricas(m);
  document.getElementById("corpo-ranking").innerHTML = montarLinhas(competidores);
  // TODO 0: o cálculo do carimbo (abaixo) deve virar a função gerarCarimbo().
  const agora = new Date();
  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  document.getElementById("carimbo").textContent = `Ranking gerado em ${data} às ${hora}`;
}


// ===================================================================
// TODO 2 — COMPLETAR a função que roda quando o usuário clica em "Adicionar".
//   (Numeramos por dependência: o TODO 1 liga o botão A ESTA função.)
//   A função precisa: ler os três campos; validar; adicionar à lista; limpar os
//   campos; e, no fim, chamar renderizar() para a tela acompanhar.
//
//   Pistas (a IA pode gerar este corpo; vocês integram, rodam e conferem):
//     - ler um campo:  document.getElementById("campo-nome").value
//     - texto sem espaços nas pontas:  .trim()
//     - virar número:  Number(document.getElementById("campo-pontuacao").value)
//     - número inválido (campo vazio ou texto) vira NaN -> testar com Number.isNaN(...)
//     - adicionar à lista:  competidores.push({ nome: ..., pontuacao: ..., idade: ... })
//
//   ARMADILHA SILENCIOSA (conferir esperado × observado): se vocês adicionarem à
//   lista mas ESQUECEREM de chamar renderizar() no fim, o competidor entra nos
//   dados mas a TELA NÃO MUDA — e não aparece erro nenhum. Cliquem e confiram:
//   esperado = a tabela ganha uma linha na posição certa; observado = ?
// ===================================================================
function adicionarCompetidor() {
  // (escrevam aqui: ler campos -> validar -> push -> limpar campos -> renderizar())
}


// ===================================================================
// TODO 3 — PROTEGER o nome digitado (validação de segurança).
//   Agora o nome vem do usuário. Na função montarLinhas (acima), o nome é inserido
//   com  ${c.nome}  — texto cru. Troquem por  ${escaparHTML(c.nome)}.
//
//   Como conferir (esperado × observado): cadastrem um competidor cujo NOME seja
//     <b>teste</b>
//   ANTES de escapar: o nome aparece em NEGRITO (o navegador interpretou a tag) —
//   sinal de que entrada do usuário está sendo executada como HTML.
//   DEPOIS de escapar: aparece o texto literal <b>teste</b>. É o comportamento certo.
// ===================================================================


// ===================================================================
// TODO 1 — LIGAR o botão ao evento de clique (Modo Aprendiz: a IA explica, vocês
//   escrevem a linha). Sem isto, o botão "Adicionar" não faz nada — e não dá erro.
//
//   Um EVENTO é um trecho de código que roda DEPOIS, quando uma ação acontece
//   (aqui, o clique) — não de cima para baixo no carregamento. Liga-se assim:
//
//       document.getElementById("ID-DO-BOTAO").addEventListener("click", FUNCAO);
//
//   Descubram, com a IA EXPLICANDO (não entregando): qual é o id do botão no
//   index.html? Passa-se o NOME da função (adicionarCompetidor) ou a chamada com
//   parênteses? Por que a diferença importa? Escrevam a linha e testem o clique.
// ===================================================================
// (escrevam aqui a ligação do botão)


// Primeira renderização ao carregar a página (já pronta — mostra os 8 competidores).
renderizar();
