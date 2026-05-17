const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const n = Number(valores.shift());

if( n === 0) {
    console.log("NULO");
} else if ( n > 0) {
    if( n % 2 === 0) {
        console.log("POSITIVO PAR")
    } else {
        console.log("POSITIVO IMPAR")
    }
} else {
    if( n % 2 === 0) {
        console.log("NEGATIVO PAR")
    } else {
        console.log("NEGATIVO IMPAR")
    }
}