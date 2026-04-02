const frm = document.querySelector("form")
const outValor = document.querySelector("#outValorPagar")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = parseFloat(frm.inPrecoMinuto.value)
    const tempo = parseFloat(frm.inTempoCliente.value)
    const total = Math.ceil(tempo / 15) * valor

    outValor.innerText = `Valor a Pagar R$: ${total.toFixed(2).replace(".", ",")}`
})

frm.addEventListener("reset", () => {
    outValor.innerText = ""
})