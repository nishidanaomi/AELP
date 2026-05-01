const prompt = require('prompt-sync')({ sigint: true})  // Se o usuário apertar Ctrl + C, encerre o programa imediatamente

let num
do {
    num = Number(prompt('Número: '))
    if (num === 0 || isNaN(num)) {
        console.log('Digite um número válido...')
    }
} while (num === 0 || isNaN(num))

    // monta a lista de pares entre 1 e num
    let pares = `Pares entre 1 e ${num}: `
    if (num > 1){
        pares += '2'
    }
    // a partir do 4, incrementando de 2 em 2
    for (let i = 4; i <= num; i += 2) {
        pares += ', ' + i
    }
    console.log(pares)