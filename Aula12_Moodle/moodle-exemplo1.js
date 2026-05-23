const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const A = Number(valores.shift());
const B = Number(valores.shift());

console.log(`X = ${A + B}`);
