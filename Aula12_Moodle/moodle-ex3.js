const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const codigo = Number(valores.shift());
const qtd = Number(valores.shift());

const precos = [5.30, 6.00, 3.20, 2.50];
const precoUnd = precos[codigo - 1];
let total = precoUnd * qtd

if (qtd >= 15 || total >= 40.00) {
    let desc = total * 0.85

    console.log(`R$ ${desc.toFixed(2)}`)
} else {
    console.log(`R$ ${total.toFixed(2)}`)
}