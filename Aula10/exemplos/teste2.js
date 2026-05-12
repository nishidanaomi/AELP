const prompt = require("prompt-sync") ()

const x = Number(prompt("x: "))
const y = Number(prompt("y: "))

const aux = x * x + y
const valor$ = aux + 10

console.log(`${aux}, ${valor$}`)