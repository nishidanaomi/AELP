const fs = require("fs");

const input = process.platform === "win32"
    ? fs.readFileSync("entradas.txt", "utf8")
    : fs.readFileSync("/dev/stdin", "utf8");

const valores = input.trim().split(/\s+/);

const diasDaSemana = ["domingo", "segunda", "terca", "quarta", "quinta", "sexta", "sabado"];

for (let i = 0; i < valores.length; i++) {
    let numDia = Number(valores[i]);
    let diaPorExtenso = diasDaSemana[numDia - 1];

    console.log(diaPorExtenso)
}