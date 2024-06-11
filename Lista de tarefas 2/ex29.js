/*29. Escreva um algoritmo que leia uma matriz M(5,5) e calcule as somas:
a) da linha 4 de M;
b) da coluna 2 de M;
c) da diagonal principal;
d) todos os elementos da matriz M.
Escrever essas somas e a matriz.*/

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 5; i++) {
        matriz[i] = [];
        for (let j = 0; j < 5; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function somaLinha(matriz, linha) {
    let soma = 0;
    for (let j = 0; j < matriz[0].length; j++) {
        soma += matriz[linha][j];
    }
    return soma;
}

function somaColuna(matriz, coluna) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][coluna];
    }
    return soma;
}

function somaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        soma += matriz[i][i];
    }
    return soma;
}

function somaTotalMatriz(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j];
        }
    }
    return soma;
}

console.log("Digite os valores da matriz 5x5:");
let matriz = lerMatriz();

let somaLinha4 = somaLinha(matriz, 3); 
let somaColuna2 = somaColuna(matriz, 1); 
let somaDiagonal = somaDiagonalPrincipal(matriz); 
let somaTotal = somaTotalMatriz(matriz); // todos os elementos

console.log("Soma da linha 4:", somaLinha4);
console.log("Soma da coluna 2:", somaColuna2);
console.log("Soma da diagonal principal:", somaDiagonal);
console.log("Soma total da matriz:", somaTotal);
console.log("Matriz:");
matriz.forEach(row => console.log(row.join(' ')));