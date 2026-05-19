const prompt = require('prompt-sync')({ sigint: true })

const fruta = prompt("Digite o nome da fruta: ")
const qtd = Number(prompt("Digite a quantidade: "))
let mensagem = ""

if ( qtd > 0) {
for (let i = 1; i < qtd; i++) {
    mensagem = mensagem + fruta + ' * '
} if
mensagem = mensagem + fruta
console.log(mensagem)
} else {
    console.log("Quantidade inválida")
}