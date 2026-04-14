/*  PROGRAMA RAIZ QUADRADA: Elaborar um programa que leia um número e calcule sua raiz quadrada. Caso a raiz seja exata (quadrados perfeitos), informá-la, caso contrário, informe: “Não há raiz exata para ...”. */
// math.sqrt () = raiz quadrada
// Number.isInteger = número.é inteiro?
// .trim = limpa os espaços digitados

const prompt = require('prompt-sync')()

console.log("--- PROGRAMA RAIZ QUADRADA ---")
console.log("Vamos te ajudar a descobrir se o número da raíz quadrada é exata!")
const entrada = prompt("Qual a raíz quadrada do número: ")
const raiz = Number(entrada)

if (isNaN(raiz) || raiz < 0 || entrada.trim === "") {
    console.log("Erro: Digite um número inteiro válido.")
} else {
    const resultado = Math.sqrt(raiz)
    if (Number.isInteger(resultado)) {
        console.log(`O Resultado da raiz quadrada de ${raiz} é: ${resultado}`)
    } else {
        console.log(`Não há raiz exata para ${raiz}`) 
    }
}