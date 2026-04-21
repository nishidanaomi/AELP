/* PROGRAMA CAIXA ELETRÔNICO: Em um determinado momento do dia, apenas notas de 10, 50 e 100 estão disponíveis em um terminal de caixa eletrônico. Elaborar um programa que leia um valor de saque de um cliente, verifique sua validade (ou seja, se pode ser pago com as notas disponíveis) e informe o número mínimo de notas de 100, 50 e 10 necessárias para pagar esse saque. A função Math.floor() pode ser utilizada neste programa */

const prompt = require("prompt-sync")()

const entrada = prompt("Valor de saque: R$ ")
const saqueSolicitado = Number(entrada)

if (isNaN(saqueSolicitado || saqueSolicitado !== 0 || saqueSolicitado % 10 <= 0 )) {
    console.log("Valor para saque inválido para notas disponíveis (R$ 10, 50, 100)")
} else {
    const notas100 = Math.floor(saqueSolicitado / 100)
    const resto100 = saqueSolicitado % 100
    const notas50 = Math.floor(resto100 / 50)
    const resto50 = resto100 % 50
    const notas10 = Math.floor(resto50 / 10)

    if (notas100 > 0) {
        console.log(`Notas de R$100: ${notas100}`)
    }
    if (notas50 > 0) {
        console.log(`Notas de R$50: ${notas50}`)
    }
    if (notas10 > 0) {
        console.log(`Notas de R$10: ${notas10}`)
    }
}