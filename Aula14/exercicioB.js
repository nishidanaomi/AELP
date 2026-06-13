const prompt = require('prompt-sync')();

const numeros = [];
console.log("Digite os números. Para encerrar, deixe em branco e aperte Enter.")

while (true) {
    let entrada = prompt("Digite o número: ");
    entrada = entrada.trim();

    if (entrada === "") {
        break;
    }

    let novoNum = Number(entrada);
    if (isNaN(novoNum)) {
        console.log("Digite um número válido.");
        continue;
    }

    if (numeros.includes(novoNum)) {
        console.log("Esse número já foi digitado. Digite outro número.");
        continue;
    }

    numeros.push(novoNum);
}

if (numeros.length < 2) {
    console.log("Você digitou números insuficientes para analisar a ordem.")
} else {
    let ordenado = true;

    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numeros[i - 1]) {
            ordenado = false;
            break;
        }
    }

    if (ordenado) {
        console.log("Parabéns, os números estão em ordem crescente.");
    } else {
        console.log("Atenção: Os números NÃO estão em ordem crescente.")
    }
}