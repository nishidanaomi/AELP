const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const ano = Number(valores.shift())

if (ano % 400 === 0) {
    console.log("BISSEXTO")
} else if (ano % 100 === 0) {
    console.log("NAOBISSEXTO")
} else if (ano % 4 === 0) {
    console.log("BISSEXTO")
} else {
    console.log("NAOBISSEXTO")
}