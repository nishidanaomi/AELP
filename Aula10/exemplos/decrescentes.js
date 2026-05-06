const prompt = require('prompt-sync')({ sigint: true })

const numero = Number(prompt('Número: '))

if (numero === 0 || isNaN(numero)) {
    console.log('Informe um número válido...')
} else {
let resposta = `Entre ${numero} e 1: ${numero} `
    // for DECRESCENTE - note o i--
    for (let i = numero - 1; i > 0; i--) {
        resposta += ', ' + i
    }
    resposta = resposta + "."
    console.log(resposta)
}