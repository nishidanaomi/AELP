const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const a = Number(valores.shift())
const b = Number(valores.shift())
const c = Number(valores.shift())

if (a + b > c && a + c > b && b + c > a) {
    if (a === b && b === c) {
        console.log("Equilatero")
    } else if (a != b && b != c && a != c) {
        console.log("Escaleno")
    } else {
        console.log("Isosceles")
    }
} else {
        console.log("Nao eh triangulo")
    }