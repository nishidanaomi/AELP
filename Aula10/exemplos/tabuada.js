
const prompt = require('prompt-sync')({ sigint: true})

// lê o número informado pelo usuário
const numero = Number(prompt('Informe um número: '))

//valida a entrada
if (numero === 0 || isNaN(numero)) { // zero ou o valor não pode ser convertido para número
    console.log('Informe um número válido...')
} else {
    //imprime a tabuada do número, de 1 até 10
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}