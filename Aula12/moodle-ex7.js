const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const valor1 = Number(valores.shift());
const valor2 = Number(valores.shift());
const valor3 = Number(valores.shift());

if (valor1 <= valor2 && valor1 <= valor3) {
    console.log("Primeiro produto")
} else if (valor2 <= valor1 && valor2 <= valor3) {
    console.log("Segundo produto")
} else {
    console.log("Terceiro produto")
}