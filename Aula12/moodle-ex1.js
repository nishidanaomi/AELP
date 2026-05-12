const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const a = Number(valores.shift())
const b = Number(valores.shift())
const c = Number(valores.shift())