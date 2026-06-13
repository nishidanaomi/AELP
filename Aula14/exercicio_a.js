const prompt = require('prompt-sync')();

const clubes = [];

while (true) {
    console.log("Digite o nome dos clubes. Precione enter para encerrar as entradas.");

    while (true) {
        let nome = prompt("Digite o nome do Clube: ");
        if (nome === "") {
            break;
        }
        clubes.push(nome);
    }

    if (clubes === 0) {
        console.log("O vetor não pode ser vazio.")
    } else if (clubes.length % 2 !== 0) {
        console.log("O número de clubes deve ser PAR para montar a tabela.")
    } else {
        console.log("**** Tabela de jogos ****")
        for (let i = 0; i < clubes.length / 2; i++) {
            console.log(`${clubes[i]} x ${clubes[clubes.length - 1 - i]}`);
        }
        break;
    }
}