const prompt = require('prompt-sync')()

const fruta = prompt("Digite o nome da fruta: ")
const qtd = Number(prompt("Digite a quantidade: "))

if (qtd < 1) {
    console.log("Quantidade inválida!")
} else if (fruta === '') {
    console.log("Fruta inválida!")
} else {
    let mensagem = fruta
    for (let i = 2; i <= qtd; i++) {
        if (i % 5 === 0) {
            mensagem += ' * ' + fruta + '\n'
        } else if (i % 5 === 1) {
            mensagem += fruta
        } else {
            mensagem += ' * ' + fruta
        }
    }
    console.log(mensagem)
}