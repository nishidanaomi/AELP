const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const D = Number(valores.shift()) // distancia (km)
const R = Number(valores.shift()) // dinheiro (reais)
const L = Number(valores.shift()) // litros (tanque)
const P = Number(valores.shift()) // postos (qtd)
const G = Number(valores.shift()) // gasolina (preço)
//  carro faz 10km/L
const viagemL = D / 10 // Litros para viagem toda
const postosD = P > 0 ? D / (P + 1) : 0  // qts km tem posto
const autonomiaD = 10 * L

if ( (P === 0 && D > autonomiaD) || (P > 0 && postosD > autonomiaD)) {
    console.log("Nao pode viajar.")
} else if ( L <= viagemL ) {
    const completarL = viagemL - L
    const custoR = completarL * G
    if ( R >= custoR ) {
        const sobraR = R - custoR
        console.log("Pode viajar.")
        console.log(`R$: ${sobraR}`)
    } else {
        console.log("Nao pode viajar.")
    }
} else {
    console.log("Pode viajar.")
    console.log(`R$: ${R}`)
}