/* Elaborar um programa que leia o nome de uma pessoa. */

const prompt = require("prompt-sync")()

console.log("<<< Programa Olá Você! >>>")
const nome = prompt("Qual seu nome? ")

if (nome) {
    console.log(`Olá, ${nome}!`)}
    else {
        console.log(`Ops! Você não digitou.`)
    }