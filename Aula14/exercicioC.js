const prompt = require('prompt-sync')();

const candidatos = [];
console.log("**** Lista de candidatos do Concurso ****");

while (true) {
    let inNome = prompt("Digite o NOME do candidato: ");
    inNome = inNome.trim();
    const regex = /^[\p{L}'\s-]+$/u;

    if (inNome === "") {
        console.log("Campo vazio. Digite um nome.");
        continue
    } else if (!regex.test(inNome)) {
        console.log("Nome inválido. Digite um nome válido.")
        continue
    } else {
        let inNota = prompt("Digite a NOTA do candidato: ").trim();
        inNota = Number(inNota);

        if (inNota < 0 || isNaN(inNota)) {
            console.log("Nota inválida. Digite novamente.");
            continue
        } else {
            candidatos.push({ nome: inNome, nota: inNota });
            console.log("--------------------------------------");
        }
    }
    let sair = prompt("Deseja cadastrar mais Candidatos? (s/n)").trim();
    sair = sair.toLowerCase()
    if ( sair === "n" ) {
        break;
    } else {
        continue;
    }

}

const notaCorte = prompt("Digite a nota de corte: ").trim();
const nota = Number(notaCorte);
const aprovados = candidatos.filter(c => c.nota >= nota);
const ordemDecrescente = aprovados.sort((a, b) => b.nota - a.nota);


console.log(" **** Candidados Aprovados **** ");

for (const candidato of ordemDecrescente) {
    console.log(`Nome: ${candidato.nome} - Nota: ${candidato.nota}`);
}
