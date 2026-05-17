const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const a = Number(valores.shift());
const b = Number(valores.shift());
const c = Number(valores.shift());

let media = (a+b+c)/3;
let numeros = [a, b, c];
let contador = 0;

for (let i= 0; i <3; i++) {
    if (numeros[i]> media) {
        contador++;
    }
}

console.log(contador)