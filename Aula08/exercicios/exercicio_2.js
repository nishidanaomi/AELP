/*
Elaborar um programa para uma empresa que leia o salário e o tempo que um
funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o
funcionário recebe um acréscimo de 1% no salário, calcule e informe o salário final
e o número de quadriênios a que o funcionário tem direito. 
*/

const prompt = require('prompt-sync')()
const salario = Number(prompt('Salário (R$): '))
const tempo = Number(prompt('Tempo (anos): '))
if (isNaN(salario) || salario <= 0 || isNaN(tempo) || tempo < 0) {
    console.log("Erro: Por favor, digite um preço numérico válido.")
} else {
const quadrienio = Math.floor(tempo / 4)
const acrescimo = quadrienio * 0.01
const salarioFinal = salario * (1 + acrescimo)

console.log(`Quadriênios: ${quadrienio}`)
console.log(`Salário Final: ${salarioFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
}