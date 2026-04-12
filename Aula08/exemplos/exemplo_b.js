const prompt = require("prompt-sync")() // adiciona o pacote ao programa

const veiculo = prompt("Veículo: ") // lê os dados de entrada
const preco = Number(prompt("Preço R$: "))

const entrada = preco * 0.5 // calcula o valor das entradas 
const parcela = (preco * 0.5 / 12) // ... e das parcelas

console.log('*'.repeat(30))
console.log(`Promoção: $ ${veiculo}`) //exibe as respostas
console.log(`Entrada de R$: ${entrada.toFixed(2)}`)
console.log(`+12x de R$ ${parcela.toFixed(2)}`)
console.log('*'.repeat(30))