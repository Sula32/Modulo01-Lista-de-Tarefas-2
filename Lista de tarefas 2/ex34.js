/*34. Faça um algoritmo que leia uma matriz 50 x 50 de números reais. A seguir, multiplique
cada linha pelo elemento da diagonal principal daquela linha. Mostre a matriz após as
multiplicações.*/

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 50; i++) {
        matriz[i] = [];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function multiplicarLinhaPeloElementoDiagonalPrincipal(matriz) {
    for (let i = 0; i < 50; i++) {
        let elementoDiagonalPrincipal = matriz[i][i];
        for (let j = 0; j < 50; j++) {
            matriz[i][j] *= elementoDiagonalPrincipal;
        }
    }
}

function exibirMatriz(matriz) {
    for (let i = 0; i < 50; i++) {
        console.log(matriz[i].join(' '));
    }
}

console.log("Digite os valores da matriz 50x50:");
let matriz = lerMatriz();

multiplicarLinhaPeloElementoDiagonalPrincipal(matriz);

console.log("Matriz após a multiplicação de cada linha pelo elemento da diagonal principal:");
exibirMatriz(matriz);