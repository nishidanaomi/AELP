const prompt = require('prompt-sync')({ sigint: true})

const numero = Number(prompt('Número: '))

if (numero <= 0 || isNaN(numero)) {
    console.log('Informe um número válido...')
} else {
    let i = numero
    let resposta = ''
    while (i > 0) {
        resposta += i + (i === 1 ? '' : ', '); // Remove a virgula do último número ( ? = se for verdadeiro então executa o que vem a seguir / : = funciona como um if, se não for verdadeiro então...)
        i--;
    }
    console.log(resposta)
}