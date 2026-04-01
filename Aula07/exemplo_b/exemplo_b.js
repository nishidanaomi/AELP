// referência ao form e ao elemento h3 (onde será exibida resposta)
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "ouvinte" do evento, acionado pelo botão submit
frm.addEventListener("submit", (e) => {
const quilo = Number(frm.inQuilo.value)   // obtém os dados dos campos e transforma em numero
const consumo = Number(frm.inConsumo.value)
const valor = (quilo/1000) * consumo // calcula
resp.innerText = `Valor a pagar R$ ${valor.toFixed(2)}` // exibe resposta

e.preventDefault() //previne o reload da página (defaut)
})