/*33. Faça um algoritmo que leia uma matriz 3 x 3 e após a leitura, multiplique os
elementos da diagonal principal com a média dos elementos da diagonal secundária.   */

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 3; i++) {
        matriz[i] = [];
        for (let j = 0; j < 3; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function calcularMediaDiagonalSecundaria(matriz) {
    let soma = 0;
    for (let i = 0; i < 3; i++) {
        soma += matriz[i][2 - i];
    }
    return soma / 3;
}

console.log("Digite os valores da matriz 3x3:");
let matriz = lerMatriz();

let mediaDiagonalSecundaria = calcularMediaDiagonalSecundaria(matriz);

for (let i = 0; i < 3; i++) {
    matriz[i][i] *= mediaDiagonalSecundaria;
}

console.log("Matriz após a multiplicação dos elementos da diagonal principal pela média da diagonal secundária:");
for (let i = 0; i < 3; i++) {
    console.log(matriz[i].join(' '));
}