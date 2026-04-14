const prompt = require('prompt-sync')()
// Entradas
const n1 = Number(prompt())
const n2 = Number(prompt())
// Processamento 
const media = (n1 + n2) / 2
// Saída
console.log(`Média = ${media.toFixed(2)}`)
// Condição
if (media >= 9.0) {
    console.log("Conceito: A")
} else if (media >= 7.5) {
    console.log("Conceito: B")
} else if (media >= 6.0) {
    console.log("Conceito: C")
} else {
    console.log(`Conceito: D`)
}