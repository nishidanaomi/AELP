/*
Elaborar um programa para uma empresa que leia o salário e o tempo que um
funcionário trabalha na empresa. Sabendo que a cada 4 anos (quadriênio) o
funcionário recebe um acréscimo de 1% no salário, calcule e informe o salário final
e o número de quadriênios a que o funcionário tem direito. Segue exemplo de
execução
*/

const prompt = require('prompt-sync')()
const salario = prompt('Salário (R$): ')
const tempo = prompt('Tempo (anos): ')

const quadrienio = Math.floor(tempo / 4)
const 