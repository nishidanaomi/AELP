/*
Elaborar um programa para uma empresa que leia o salário e o tempo que um
funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o
funcionário recebe um acréscimo de 1% no salário, calcule e informe o salário final
e o número de quadriênios a que o funcionário tem direito. 
*/

const prompt = require('prompt-sync')()
const salario = Number(prompt('Salário (R$): '))
const tempo = Number(prompt('Tempo (anos): '))
const quadrienio = Math.floor(tempo / 4)

const salarioFinal = (quadrienio * 0.01) * Number(salario) + Number(salario)
const resultado = salarioFinal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })

console.log(`Quadriênios: ${quadrienio}`)
console.log(`Salário Final: ${resultado}`)