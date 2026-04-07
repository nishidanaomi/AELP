/*
Um supermercado está com uma promoção. Para aumentar suas vendas no
setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando
50% de desconto (para um item) na compra de três unidades do produto. Elaborar
um programa que leia descrição e preço de um produto. Após, apresente as
mensagens indicando a promoção.
*/

const prompt = require("prompt-sync")()
const produto = prompt(`Produto: `)
const preco = Number(prompt(`Preço: R$ `))

if (isNaN(preco) || preco <= 0) {
    console.log("Erro: Por favor, digite um preço numérico válido.")
} else {
const promocao = preco * 0.5
const total = (2 * preco) + promocao

console.log(`Produto: ${produto}`)
console.log(`Preço: ${preco.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
console.log(`${produto} - Promoção: Leve 3 por ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
console.log(`O 3º produto custa apenas ${promocao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`)
}