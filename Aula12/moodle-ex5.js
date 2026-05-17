const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

let a = Number(valores.shift());
let b = Number(valores.shift());
let c = Number(valores.shift());
let aux;  // criei uma variavel com valor Undefined

if (a < b) {
    aux = a;
    a = b;
    b = aux;
}
if (a < c) {
    aux = a;
    a = c;
    c = aux;
}
if (b < c) {
    aux = b;
    b = c;
    c = aux;
}
console.log(a)
console.log(b)
console.log(c)