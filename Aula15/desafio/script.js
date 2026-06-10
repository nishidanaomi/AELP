const competidores = [
  { nome: "Ana Prado",      pontuacao: 920, idade: 17 },
  { nome: "Bruno Lima",     pontuacao: 880, idade: 19 },
  { nome: "Carla Souza",    pontuacao: 970, idade: 18 },
  { nome: "Daniel Moraes",  pontuacao: 760, idade: 20 },
  { nome: "Elisa Rocha",    pontuacao: 845, idade: 16 },
  { nome: "Felipe Antunes", pontuacao: 690, idade: 21 },
  { nome: "Gabriela Nunes", pontuacao: 905, idade: 18 },
  { nome: "Heitor Vieira",  pontuacao: 815, idade: 19 }
];

function renderizarPainel() {
    competidores.sort((a, b) => b.pontuacao - a.pontuacao);

    let vencedor = competidores[0];
    let ultimo = competidores[0];
    for (let i = 1; i < competidores.length; i++) {
    if (competidores[i].pontuacao > vencedor.pontuacao) {
        vencedor = competidores[i];
    }
    if (competidores[i].pontuacao < ultimo.pontuacao) {
        ultimo = competidores[i];
    }
}

let soma = 0;
for (let i = 0; i < competidores.length; i++) {
  soma += competidores[i].pontuacao;
}
const media = competidores.lenght > 0 ? soma / competidores.length : 0;

let acimaDaMedia = 0;
for (let i = 0; i < competidores.length; i++) {
  if (competidores[i].pontuacao > media) {
    acimaDaMedia++;
  }
}

let carimbo = "";
const Data = new Date();
carimbo = `Ranking gerado em ${Data.toLocaleDateString("pt-BR")} às ${Data.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}`;

const blocoMetricas = `
  <p>Competidores: <strong>${competidores.length}</strong></p>
  <p>Pontuação média: <strong>${media.toFixed(1)}</strong></p>
  <p>Vencedor: <strong>${vencedor.nome}</strong> (${vencedor.pontuacao} pts)</p>
  <p>Último colocado: <strong>${ultimo.nome}</strong> (${ultimo.pontuacao} pts)</p>
  <p>Acima da média: <strong>${acimaDaMedia}</strong></p>
`;

let linhas = "";
for (let i = 0; i < competidores.length; i++) {
  const c = competidores[i];
  const posicao = i + 1;

  let destacar = "";
  linhas += `<tr><td>${posicao}</td><td>${competidores[i].nome}</td><td>${competidores[i].pontuacao}</td><td>${competidores[i].idade}</td></tr>`
}

const p1 = competidores[0] ? competidores[0].nome : "---";
const p2 = competidores[1] ? competidores[1].nome : "---";
const p3 = competidores[2] ? competidores[2].nome : "---";
const blocoPodio = `
    <div class="podio">
      <div class="lugar primeiro">1º Lugar - ${p1}</div>
      <div class="lugar">2º Lugar - ${p2}</div>
      <div class="lugar">3º Lugar - ${p3}</div>
    </div>
  `;

const botaoEfeito = document.getElementById("btn-atualizar")
botaoEfeito.addEventListener("click", function() {
  window.location.reload();
})

document.getElementById("metricas").innerHTML = blocoMetricas;
document.getElementById("espaco-podio").innerHTML = blocoPodio;
document.getElementById("corpo-ranking").innerHTML = linhas;
document.getElementById("carimbo").textContent = carimbo;
}

renderizarPainel();

document.getElementById("btn-adicionar").addEventListener("click", function() {

    const campoNome = document.getElementById("input-nome");
  const campoPontos = document.getElementById("input-points") || document.getElementById("input-pontos"); // Garante o ID correto
  const campoIdade = document.getElementById("input-idade");

  const nome = campoNome.value.trim();
  const pontos = parseInt(campoPontos.value);
  const idade = parseInt(campoIdade.value);

  if (nome === "" || isNaN(pontos) || isNaN(idade)) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  competidores.push({nome: nome, pontuacao: pontos, idade: idade });

  renderizarPainel(); //renderiza dnv com lista atualizada

  campoNome.value= ""; //limpa os campos para próxima entrada
  campoPontos.value = "";
  campoIdade.value = "";
});