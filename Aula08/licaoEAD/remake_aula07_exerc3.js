/* Elaborar um programa para uma lan house de um aeroporto. O programa deve ler o valor de cada 15 minutos de uso de um computador e
o tempo de uso por um cliente em minutos. Informe o valor a ser pago pelo cliente, sabendo que as frações extras de 15 minutos devem ser cobradas de forma integral. */

const prompt = require("prompt-sync")()

console.log("Lan House JS")
const valor = prompt("Valor por 15min de uso: R$ ")
const tempo = prompt("Tempo de uso do Cliente (minutos): ")
const total = Math.ceil(tempo / 15) * valor

console.log(`Valor a Pagar ${total.toLocaleString('pt-br', {style:'currency',currency:'BRL'})}`)