/* 
João tem um peixe a menos que Inara. Ela tem um a menos que
Ana, que tem o dobro de João. Quantos peixes têm cada um? 

João = Inara - 1    então   João = (Ana - 1) - 1
Inara = Ana - 1           = João = (João * 2) - 2
Ana = João * 2            = 0 = 1 * João - 2
                          = João = 2
*/

const joao = 2;
const inara = ana - 1;
const ana = joao * 2;

console.log('João tem ${joao}, Ana tem ${ana} e Inara tem ${inara}');