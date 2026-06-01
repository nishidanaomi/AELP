const prompt = require('prompt-sync')();

const competidores = [];
let flag = 0;

console.log("------------------------------------");

while (!flag) {
    let nome;
    let pontuacao;
    let idade;

    while (true) {
    nome = prompt("Nome do competidor: ").trim();
    const apenasLetras = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/; // regex = para validar strings de texto

    if (nome === "") {
        console.log("O nome não pode ficar vazio! Digite novamente.");
    }else if (!apenasLetras.test(nome)) {
        console.log("Nome inválido. Não use números ou caracteres especiais.")
    } else {
        break;
    }
    }

    while (!flag) {
        inPontuacao = prompt("Pontuação do competidor: ");
        if ( inPontuacao.trim() === "") {
            console.log("Pontuação vazia. Digite uma pontuação válida (em número)")
            continue;
        }
        pontuacao = Number(inPontuacao);
        if (isNaN(pontuacao) || pontuacao < 0 ) {
            console.log("Digite novamente uma pontuação válida (em número).");
            continue;
        }
        break;
    }

    while (!flag) {
        idade = Number(prompt("Idade do competidor: "));
        if (isNaN(idade) || idade < 14 || idade > 60) {
            console.log("Digite novamente uma idade válida permitida.");
            continue;
        }
        break;
    }
    
    if (competidores.length >= 8) {
        while (!flag) {
            const continuar = prompt("Fazer mais cadastro? (s/n): ");
            if (continuar.toLowerCase() === "n") {
                flag = 1;
            } else if (continuar.toLowerCase() === "s") {
                break;
            }
        }
    }

    competidores.push({ nome, pontuacao, idade });
    console.log("------------------------------------");
}

const totalCompetidores = competidores.length;

let pontSoma = 0;
for (let i = 0; i < totalCompetidores; i++) {
    pontSoma = pontSoma + competidores[i].pontuacao;
}
const pontMedia = pontSoma / totalCompetidores;

let maiorNota = competidores[0].pontuacao;
let menorNota = competidores[0].pontuacao;

for (let i = 1; i < totalCompetidores; i++) {
    if (competidores[i].pontuacao > maiorNota) {
        maiorNota = competidores[i].pontuacao;
    }
    if (competidores[i].pontuacao < menorNota) {
        menorNota = competidores[i].pontuacao;
    }
}

let nomesVencedores = "";
let nomesUltimos = "";
let acimaMedia = 0;

for (let i = 0; i < totalCompetidores; i++) { // contador de c acima da media
if (competidores[i].pontuacao > pontMedia) {
        acimaMedia = acimaMedia + 1;
    }
    if (competidores[i].pontuacao === maiorNota) { // acumulador vencedores
        if (nomesVencedores === "") {
            nomesVencedores = competidores[i].nome;
        } else {
            nomesVencedores = nomesVencedores + ", " + competidores[i].nome;
        }
    }
    if (competidores[i].pontuacao === menorNota) {  // acumulador ultimos
        if (nomesUltimos === "") {
            nomesUltimos = competidores[i].nome;
        } else {
            nomesUltimos = nomesUltimos + ", " + competidores[i].nome;
        }
    }
}
let apenasPontos = [];  // pra ordenar e separar as pont. pra mediana
for (let i = 0; i < totalCompetidores; i++) {
    apenasPontos[i] = competidores[i].pontuacao;
}
apenasPontos.sort((a, b) => a - b);  // ordenação

let pontMediana = 0;
const numMediana = (totalCompetidores - 1) / 2;

if (Number.isInteger(numMediana)) {
    pontMediana = apenasPontos[numMediana];
} else {
    pontMediana = (apenasPontos[Math.ceil(numMediana)] + apenasPontos[Math.floor(numMediana)]) / 2;
}

console.log("**** RESULTADOS DO RANKING - LAA ****"  + "\n")
console.log(`Vencedor(es): ${nomesVencedores} (Nota: ${maiorNota})`);
console.log(`Último(s) colocado(s): ${nomesUltimos} (Nota: ${menorNota}) \n`);
console.log(`Pontuação média: ${pontMedia.toFixed(2)}`);
console.log(`Mediana da pontuação: ${pontMediana}`);
console.log(`Número de competidores acima da média: ${acimaMedia}`);

console.log("\n" + "**** RANKING DE COMPETIDORES - LAA ****"  + "\n")

let ranking = [...competidores];
ranking.sort((a, b) => b.pontuacao - a.pontuacao);  // ordenando do maior pro menor

for (let i = 0; i < ranking.length; i++) {
    console.log(`${i + 1}º Lugar: ${ranking[i].nome} - Pontuação: ${ranking[i].pontuacao}`);
}