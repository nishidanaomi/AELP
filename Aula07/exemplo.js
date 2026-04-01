const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2;
    resp.innerText = `Média = ${media.toFixed(2)}`
    e.preventDefault()
})