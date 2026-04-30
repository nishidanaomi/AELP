// Cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// "Ouvinte" de evento (porteiro), aciionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()          // Cancela o comportamento padrão (o envio do formulário/recarregamento)

    const nome = frm.inNome.value
    const Masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)

    let peso                                // declara a variável peso
    if (Masculino) {                        // se masculino (ou, if === true)
        peso = 52 + (0.75 * (altura - 152.4))
    } else {
        peso = 49 + (0.67 * (altura - 152.4))
    }
    

    // Apresenta a resposta (altera o conteúdo do elemento h3 da página)
    resp.innerText = `${nome}: Seu peso ideal é ${peso.toFixed(3)} kg.`
    resp.innerText = `E seu peso ideal ajustado é ${peso.toFixed(3)} kg.`
})
   // limpa o conteúdo do elemento h3 que exibe a resposta
    frm.addEventListener("reset", () => {
    resp.innerText = ""
    })   