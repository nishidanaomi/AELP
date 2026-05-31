const prompt = require('prompt-sync')();

const competidores = [];
let flag = 0;

console.log("-----------------------");

while (!flag) {
    let nome;
    let pontuacao;
    let idade;

    while (true) {
    nome = prompt("Nome do competidor: ").trim();
    const apenasLetras = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (nome === "") {
        console.log("O nome não pode ficar vazio! Digite novamente.");
    }else if (!apenasLetras.test(nome)) {
        console.log("Nome inválido. Não use números ou caracteres especiais.")
    } else {
        break;
    }
    }

    while (!flag) {
        pontuacao = Number(prompt("Pontuação do competidor: "));
        if (isNaN(pontuacao) || pontuacao < 0) {
            console.log("Digite novamente uma pontuação válida (em número)");
            continue;
        }
        break;
    }

    while (!flag) {
        idade = Number(prompt("Idade do competidor: "));
        if (isNaN(idade) || idade < 14 || idade > 60) {
            console.log("Digite novamente uma idade válida (em número)");
            continue;
        }
        break;
    }

    competidores.push({ nome, pontuacao, idade });
    console.log("-----------------------");

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
}

const totalCompetidores = competidores.length;

// reduzir array inteiro em único valor / 0 onde começa contagem / c = cada 1competidor
//Pega o que já está no cofrinho (soma) e adiciona a pontuação do competidor atual (c.pontuacao)
const pontSoma = competidores.reduce((soma, c) => soma + c.pontuacao, 0);
const pontMedia = pontSoma / totalCompetidores;

let acimaMedia = 0;
competidores.forEach((c, i) => {
    if (c.pontuacao > pontMedia) acimaMedia++;
    
    console.log(`Competidor ${i + 1}: ${c.nome}`); // +1 porque a contagem começa do 0
    console.log(`Pontuação: ${c.pontuacao}`);
    console.log(`Idade: ${c.idade}`);
    console.log("-----------------------");
});

//... = para fazer copia do array / .sort(.....) = organizar de forma nº cresc comparando pontuação do competidor a com a do competidor b
const ordenadosPorPontos = [...competidores].sort((a, b) => a.pontuacao - b.pontuacao);
const nomeUltimo = ordenadosPorPontos[0].nome;
const nomeVenceu = ordenadosPorPontos[totalCompetidores - 1].nome;

const apenasPontos = competidores.map(c => c.pontuacao).sort((a, b) => a - b);
let pontMediana = 0;
const numMediana = (totalCompetidores - 1) / 2;

if (Number.isInteger(numMediana)) {
    pontMediana = apenasPontos[numMediana];
} else {
    pontMediana = (apenasPontos[Math.ceil(numMediana)] + apenasPontos[Math.floor(numMediana)]) / 2;
}

console.log(`Vencedor: ${nomeVenceu}`);
console.log(`Último colocado: ${nomeUltimo} \n`);
console.log(`Pontuação média: ${pontMedia.toFixed(2)}`);
console.log(`Mediana da pontuação: ${pontMediana}`);
console.log(`Número de competidores acima da média: ${acimaMedia}`);