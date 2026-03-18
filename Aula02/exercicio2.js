/* Uma colher de sopa corresponde a três colheres de chá. Uma
pessoa que está doente tem que tomar três colheres de sopa de um
remédio por dia. No final de uma semana, qual a quantidade de
colheres de chá desse remédio que ela terá tomado?

1 colher de sopa = 3 colheres de chá
3 colheres de sopa de remédio / dia == 9 colheres de chá
1 semana / 7 dias = ? colher de chá
9 colheres de chá / dia * 7 dias = 63 colheres de chá 
resultado = 63 colheres de chá */

const colherSopaPorDia = 3; // 3 colheres de sopa por dia
  colherSopaParaCha = 3; // 3 colheres de chá = 1 colher de sopa
  umaSemana = 7; // 7 dias

  const colherChaPorDia = colherSopaPorDia * colherSopaParaCha;

  const totalColherChaUmaSemana = colherChaPorDia * umaSemana;

 console.log ('A quantidade de colheres de chá por semana de remédio é de ' + totalColherChaUmaSemana);

