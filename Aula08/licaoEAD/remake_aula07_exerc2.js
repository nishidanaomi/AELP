/* Um supermercado está com uma promoção. Para aumentar suas vendas no setor de higiene, cada etiqueta de produto deve exibir uma mensagem anunciando 50% de desconto (para um item) na compra de três unidades do produto. Elaborar um programa que leia descrição e preço de um produto. Após, apresente as mensagens indicando a promoção */
const prompt = require("prompt-sync")()

const produto = Number(prompt("Produto: "))
const preco = Number(prompt("Preço R$: "))

if ( isNaN(produto) isNaN(preco) )
const desconto = preco * 0.5
const total = (preco * 2) + desconto

const descontoBrl = desconto.toLocaleString('pt-br', { style:'currency', currency:'BRL' })
const totalBrl = total.toLocaleString('pt-br', { style:'currency', currency:'BRL' })

console.log(`${produto}Promoção: Leve 3 por ${totalBrl}`)
console.log(`Nessa promoção o 3º produto custa apenas ${descontoBrl}`)