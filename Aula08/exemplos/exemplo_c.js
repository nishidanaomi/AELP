const prompt = require("prompt-sync")() // adiciona o pacote ao programa
// lê os dados de entrada
const pesoKg = Number(prompt("Peso da ração (kg): "))
const consumo = Number(prompt("Consumo diário (g): "))
// cálculo das respostas 
const pesoGr =  pesoKg * 1000  // cria a variável auxiliar pesoGr
const duracao = Math.floor(pesoGr / consumo)
const sobra = pesoGr % consumo
// dados de saída
console.log('*'.repeat(30))
console.log(`Duração: ${duracao} dias`)
console.log(`Sobra: ${sobra} g`)
console.log('*'.repeat(30))