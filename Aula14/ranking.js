const prompt = require('prompt-sync')();

let nome = [];
let pontuacao = [];
let idade = [];

let cadastrado = 0;
let pontSoma = 0;
let flag = 0;

console.log("-----------------------")

while (!flag) {
        while (!flag) {
        nome[cadastrado] = prompt("Nome do competidor: ").trim();
        if ( nome[cadastrado] === "") {
            console.log("Digite novamente um nome válido")
            continue;
        } else {
            break;
        }
    }
    while (!flag) {
        pontuacao[cadastrado] = Number(prompt("Pontuação do competidor: "));
        if (isNaN(pontuacao[cadastrado]) === true || pontuacao[cadastrado] < 0) {
            console.log("Digite novamente uma pontuação válida (em número)")
            continue;
        } else {
            break;
        }
    }
    while (!flag) {
        idade[cadastrado] = Number(prompt("Idade do competidor: "));
        if (isNaN(idade[cadastrado]) === true || idade[cadastrado] < 14 || idade[cadastrado] > 60) {
            console.log("Digite novamente uma idade válida (em número)")
            continue;
        } else {
            break;
        }
    }
    console.log("-----------------------")
    cadastrado += 1;
    pontSoma += pontuacao[cadastrado - 1];

    if (cadastrado >= 8) {
        while (!flag) {
            const continuar = prompt("Fazer mais cadastro? (s/n): ");
            if (continuar.toLowerCase() === "n") {
                flag = 1;
            } else if (continuar.toLowerCase() === "s") {
                break;
            } else {
                continue;
            }
        }
    }
}

const pontMedia = pontSoma / cadastrado;
let acimaMedia = 0;
for (let i = 0; i < cadastrado; i++) {
    if (pontuacao[i] > pontMedia) {
        acimaMedia += 1;
    }

    console.log(`Competidor ${i + 1}: ${nome[i]}`);
    console.log(`Pontuação: ${pontuacao[i]}`);
    console.log(`Idade: ${idade[i]}`);
    console.log("-----------------------")
}

const nomeVenceu = nome[pontuacao.indexOf(Math.max(...pontuacao))];
const nomeUltimo = nome[pontuacao.indexOf(Math.min(...pontuacao))];

let pontMediana = 0;
pontuacao.sort();
const numMediana = (cadastrado - 1) / 2;
if (Number.isInteger(numMediana) === true) {
    pontMediana = pontuacao[numMediana];
} else {
    pontMediana = (pontuacao[Math.ceil(numMediana)] + pontuacao[Math.floor(numMediana)]) / 2;
}

console.log("Vencedor: " + nomeVenceu);
console.log("Último colocado: " + nomeUltimo + "\n");
console.log("Pontuação média: " + pontMedia);
console.log("Mediana da pontuação: " + pontMediana);
console.log("Número de competidores acima da média: " + acimaMedia);