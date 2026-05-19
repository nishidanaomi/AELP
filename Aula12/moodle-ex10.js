const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const D = Number(valores.shift())
const R = Number(valores.shift())
const L = Number(valores.shift())
const P = Number(valores.shift())
const G = Number(valores.shift())

// 10km/L
// entrada >=0
// totalL = D / 10, se totalL <= L;
// abastecerL = totalL - L;
// custoG = abastecerL * G , R >= custoG ? %== R-custoG ,: nao pode viajar
// 