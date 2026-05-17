const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

let a = Number(valores.shift());
let b = Number(valores.shift());
let c = Number(valores.shift());

const delta = (b ** 2) - (4 * a * c);

if (a === 0) {
    console.log("NEESG");
} else if (delta < 0) {
    console.log("NRR");
} else {

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b - Math.sqrt(delta)) / (2 * a);

    console.log(x1.toFixed(2))
    console.log(x2.toFixed(2))
}