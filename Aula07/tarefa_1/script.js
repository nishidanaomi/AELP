const frm = document.querySelector("form") // Busca a tag <form>
const resp = document.querySelector("#outResposta") // Não esquecer a # do id

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.nomeUsuario.value
    resp.innerText = `Olá, ${nome}!`
})