/* 
Escreva um algoritmo para lavar uma louça.

(entrada)
- pilha de louças sujas;
- recursos: esponja, sabão e água
(processo)
Enquanto houver louça suja, faça:
    Pegar item: Retirar um item da pilha de louça suja;
    Avaliar nível de sujeira: Se estiver muito sujo deixar de molho e retorna-la para pilha de louça suja;
        se não: Prosseguir para a lavagem;
    Ensaboar: Passar a esponja com sabão no item;
    Enxaguar: Abrir a torneira, remover o sabão e desligar a torneira depois;
    Teste de Qualidade (Condicional):
        se o item ainda tiver gordura, então voltar a linha 10;
        se não: colocar no escorredor;
Para terminar:
    Limpar a pia;
    Desligar a Torneira;
*/

const loucaSuja = ["panela", "prato", "talhere", "copo"];
console.log(`Vamos começar a lavar essa louça...`)
for (let item of loucaSuja) {
    console.log ( `Pegando na pilha de louça sujas o/a ${item} ...`);
    console.log (`Ensaboando aqui o/a ${item}...`);
    console.log (`Agora vamos enxaguar o/a ${item}.`);
    console.log (`Agora o/a ${item} tá limpo. Só colocar no escorredor!`);
}
console.log(`E prontinho! Terminamos de lavar tudo!`);