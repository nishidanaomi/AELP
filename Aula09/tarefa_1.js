/* PROGRAMA FUSO HORÁRIO: Sabendo que o fuso horário da França em relação ao Brasil é de +5 horas (no horário de verão na França), elaborar um programa que leia a hora no Brasil e informe a hora na França. */

const prompt = require('prompt-sync')()
// entrada
console.log("---PROGRAMA FUSO HORÁRIO---")
const horarioBrasil = prompt("Que horas são? (HH:mm):")
// processamento
// O comando .split(":") quebra a frase em um array: ["22", "30"]
const partes = horarioBrasil.split(":")
const horas = Number(partes[0])
const minutos = Number(partes[1])
const fusoFranca = 5
let horarioFranca = horas + fusoFranca
if (horarioFranca >= 24) {
    horarioFranca = horarioFranca - 24
}
// Usamos .padStart(2, '0') para garantir que apareça "HH:mm"
const horasFormatadas = horarioFranca.toString().padStart(2, '0')
const minutosFormatados = minutos.toString().padStart(2, '0')
// saída
console.log(`No horario de verão da França são: ${horasFormatadas}:${minutosFormatados}`)
