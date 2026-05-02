// cria referência ao form e elemento onde será exibida a resposta
const frm = document.querySelector("form")
const resp = document.querySelector("h3")
const painel = document.querySelector('.painel-resultados')

// "ouvinte" de evento (porteiro), aciionando quando o botão submit for clicado
frm.addEventListener("submit", (e) => {
    e.preventDefault()          // cancela o comportamento padrão (o envio do formulário/recarregamento)

    // aqui estamos pegando os dados digitados no form do HTML (input)
    const nome = frm.inNome.value
    const Masculino = frm.inMasculino.checked
    const altura = Number(frm.inAltura.value)
    const peso = Number(frm.inPeso.value)

    let pesoIdeal                                // declara a variável pesoIdeal
    if (Masculino) {                        // se masculino (ou, if === true)
        pesoIdeal = 52 + (0.75 * (altura - 152.4))
    } else {
        pesoIdeal = 49 + (0.67 * (altura - 152.4))
    }

    let pesoAjustado =  ((peso - pesoIdeal) * 0.25) + pesoIdeal  // seguindo as instruções da tabela

    // apresenta a resposta (altera o conteúdo do elemento h3 da página)
    outNome.innerText = `Olá, ${nome}! `
    outIdeal.innerText = `Seu peso ideal é ${pesoIdeal.toFixed(2).replace(".",",")} kg.`  // troquei o ponto por vírgula na resposta do peso
    outAjustado.innerText =`Seu peso ideal ajustado é ${pesoAjustado.toFixed(2).replace(".",",")} kg.`

    // style.display acessa o css pelo js para fazer um elemento aparecer e/ou sumir
    painel.style.display = 'flex' // para aparecer o painel de resultados no html que ocutei pelo css
})
   // limpa o conteúdo do elemento h3 que exibe a resposta
    frm.addEventListener("reset", () => {
    outNome.innerText = ""
    outIdeal.innerText = ""
    outAjustado.innerText = ""

    painel.style.display = 'none' // volta esconder o painel quando clicar em 'limpar'
    })