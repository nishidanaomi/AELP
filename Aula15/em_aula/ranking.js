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
const media = soma / competidores.length;

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

document.getElementById("espaco-podio").innerHTML = 
`<div class="podio">
  <div class="lugar primeiro">1º Lugar - ${competidores[0].nome}</div>
  <div class="lugar">2º Lugar - ${competidores[1].nome}</div>
  <div class="lugar">3º Lugar - ${competidores[2].nome}</div>
</div>`

const botaoEfeito = document.getElementById("btn-atualizar")
botaoEfeito.addEventListener("click", function() {
  window.location.reload();
})

document.getElementById("metricas").innerHTML = blocoMetricas;
document.getElementById("corpo-ranking").innerHTML += linhas;
document.getElementById("carimbo").textContent = carimbo;
