const prompt = require('prompt-sync')()
const num1 = prompt(`Digite o primeiro número: `)
const num2 = prompt(`Digite o segundo número: `)
const numero1 = Number(num1.replace(',','.'))
const numero2 = Number(num2.replace(',','.'))
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Você precisa digitar números válidos.");
} else {
const soma = numero1 + numero2
const resultado = soma.toString().replace('.',',')
console.log(`A soma dos números ${num1} e ${num2} é igual a ${resultado}`)
}