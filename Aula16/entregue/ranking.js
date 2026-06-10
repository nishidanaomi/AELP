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

function ordenarRanking(lista) {
  lista.sort((a, b) => b.pontuacao - a.pontuacao);
}
function ordenarRankingNome(lista) {
  lista.sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"));
}
function ordenarRankingIdade(lista) {
  lista.sort((a, b) => b.idade - a.idade);
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

function escaparHTML(texto) {
  return String(texto).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function montarLinhas(lista) {
  let linhas = "";
  for (let i = 0; i < lista.length; i++) {
    const c = lista[i];
    const posicao = i + 1;
    linhas += `<tr><td>${posicao}º</td><td>${escaparHTML(c.nome)}</td><td>${c.pontuacao}</td><td>${c.idade}</td>
               <td><button id="btn-remover" class="botao" onclick="removerCompetidor(${i})">Remover</button></td></tr>`;
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

function gerarCarimbo() {
  const agora = new Date();
  const data = agora.toLocaleDateString("pt-BR");
  const hora = agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  document.getElementById("carimbo").textContent = `Ranking gerado em ${data} às ${hora}`;
}

function renderizar() {
  if (ordem.value == "pontuacao") {
    ordenarRanking(competidores);
  } else if (ordem.value == "nome") {
    ordenarRankingNome(competidores);
  } else {
    ordenarRankingIdade(competidores);
  }
  const m = calcularMetricas(competidores);
  document.getElementById("metricas").innerHTML = montarMetricas(m);
  document.getElementById("corpo-ranking").innerHTML = montarLinhas(competidores);
  document.getElementById("podio").innerHTML = 
  `<div class="podio">
  <div class="lugar primeiro">1º Lugar - ${escaparHTML(m.vencedor.nome)}</div>
  <div class="lugar">2º Lugar - ${escaparHTML(competidores[1].nome)}</div>
  <div class="lugar">3º Lugar - ${escaparHTML(competidores[2].nome)}</div>
</div>`
  gerarCarimbo();
}

let aviso = document.getElementById("aviso");

function adicionarCompetidor() {
  const getNome = document.getElementById("campo-nome").value.trim();
  const getPontuacao = Number(document.getElementById("campo-pontuacao").value.trim());
  const getIdade = Number(document.getElementById("campo-idade").value.trim());

  if (getNome === "" || getPontuacao === "" || getIdade === "") {
    aviso.textContent = "Preecha o(s) campo(s)";
  } else if (isNaN(getPontuacao) || getPontuacao < 0 ) { 
    aviso.textContent = "Número(s) inválido(s)"
  } else if ( getIdade < 14 || getIdade > 60 || isNaN(getIdade)) {
    aviso.textContent = "Idade não permitida ou inválida" 
  } else {
    competidores.push({ nome: getNome, pontuacao: getPontuacao, idade: getIdade });
    document.getElementById("campo-nome").value = "";
    document.getElementById("campo-pontuacao").value = "";
    document.getElementById("campo-idade").value = "";
    aviso.textContent = "";
    renderizar();
  }
}

function removerCompetidor(v) {
  if (competidores.length > 8) {
    competidores.splice(v, 1);
    renderizar();
  } else {
    aviso.textContent = "Mantenha no mínimo 8 competidores";
  }
}

document.getElementById("btn-adicionar").addEventListener('click', adicionarCompetidor);

const ordem = document.getElementById("ordem");
ordem.addEventListener("change", renderizar);

renderizar();