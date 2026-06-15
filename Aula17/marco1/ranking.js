const prompt = require('prompt-sync')();

let nome = [];
let pontuacao = [];
let idade = [];

let cadastrado = 0;
let pontSoma = 0;
let flag = 0;

console.log(" ************* Ranking LAA ************* ")
console.log("----------------------------------------------")

while (!flag) {   // algumas refatorações para input
    while (!flag) {
        nome[cadastrado] = prompt("Nome do competidor: ");
        const regex = /^[\p{L}'\s-]+$/u;
        nome[cadastrado] = nome[cadastrado].trim()
        if (nome[cadastrado] === "") {
            console.log("O nome nao pode ficar vazio. Digite novamente.")
            continue;
        } else if (!regex.test(nome[cadastrado])) {
            console.log("Nome inválido. Não use números ou caracteres especiais. Digite novamente.");
            continue;
        } else {
            break;
        }
    }
    while (!flag) {
        pontuacao[cadastrado] = prompt("Pontuação do competidor: ").trim();
        if (pontuacao[cadastrado] === "") {
            console.log("Pontuação vazia. Digite uma pontuação válida (em número).")
            continue;
        }
        pontuacao[cadastrado] = Number(pontuacao[cadastrado]);
        if (isNaN(pontuacao[cadastrado]) === true || pontuacao[cadastrado] < 0) {
            console.log("Digite uma pontuação válida (em número).")
            continue;
        } else {
            break;
        }
    }
    while (!flag) {
        idade[cadastrado] = prompt("Idade do competidor: ").trim();
        if ( idade[cadastrado] === "") {
            console.log("Idade vazia. Digite novamente.")
            continue;
        }
        if (isNaN(idade[cadastrado]) === true || idade[cadastrado] < 14 || idade[cadastrado] > 60) {
            console.log("Digite uma idade válida permitida.")
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
console.log(" ************* Lista de participantes da LAA*************")
for (let i = 0; i < cadastrado; i++) {
    if (pontuacao[i] > pontMedia) {
        acimaMedia += 1;
    }
    console.log(`Competidor ${i + 1}: ${nome[i]}`);
    console.log(`Pontuação: ${pontuacao[i]}`);
    console.log(`Idade: ${idade[i]}`);
    console.log("----------------------------------------------")
}

const nomeVenceu = nome[pontuacao.indexOf(Math.max(...pontuacao))];
const nomeUltimo = nome[pontuacao.indexOf(Math.min(...pontuacao))];

let pontMediana = 0;
pontuacao.sort((a, b) => a - b);  // ajuste de feedback
const numMediana = (cadastrado - 1) / 2;
if (Number.isInteger(numMediana) === true) {
    pontMediana = pontuacao[numMediana];
} else {
    pontMediana = (pontuacao[Math.ceil(numMediana)] + pontuacao[Math.floor(numMediana)]) / 2;
}

console.log(" ************* Ranking LAA ************* ")
console.log("Vencedor: " + nomeVenceu);
console.log("Último colocado: " + nomeUltimo + "\n");
console.log("Pontuação média: " + pontMedia);
console.log("Mediana da pontuação: " + pontMediana);
console.log("Número de competidores acima da média: " + acimaMedia);