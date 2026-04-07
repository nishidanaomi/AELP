/*
Um supermercado está com uma promoção. Para aumentar suas vendas no
setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando
50% de desconto (para um item) na compra de três unidades do produto. Elaborar
um programa que leia descrição e preço de um produto. Após, apresente as
mensagens indicando a promoção – conforme exibido a seguir
*/

const prompt = require("prompt-sync")()
const produto = prompt(`Produto: `)
const preco = prompt(`Preço: R$ `)

const promocao = Number(preco * 0.5).toFixed(2)
const total = Number((2 * preco) + promocao).toFixed(2)

console.log(`Produto: ${produto}
Preço: R$ ${preco}
${produto} - Promoção: Leve 3 por R$ ${total}
O 3º produto custa apenas R$ ${promocao}`)