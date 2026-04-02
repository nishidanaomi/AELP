const frm = document.querySelector("form")
const resp1 = document.querySelector("#outPromocao")
const resp2 = document.querySelector("#outTerceiroProduto")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const produto = frm.nomeProduto.value
    const preco = parseFloat(frm.valorPreco.value)

    const desconto = preco * 0.5
    const total = (preco * 2) + desconto

    const descontoBrl = desconto.toFixed(2).replace(".",",")
    const totalBrl = total.toFixed(2).replace(".", ",")

    resp1.innerHTML = `<span class="produto-destaque">${produto}</span> <span class="promocao-destaque">Promoção:</span> Leve 3 por <span class="preco-destaque">R$ ${totalBrl}</span>`
    resp2.innerHTML = `Nessa promoção o 3º produto custa apenas <span class="preco-destaque">R$ ${descontoBrl}</span>`
})