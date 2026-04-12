/*
Elaborar um programa que leia o nome de uma pessoa.
*/

const prompt = require("prompt-sync")()

const nome = prompt(`Programa Olá Você!
Qual seu nome? `)

console.log(`Olá, ${nome}!`)