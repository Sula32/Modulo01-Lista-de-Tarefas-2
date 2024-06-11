/*32. Escrever um algoritmo que lê uma matriz M(12,13) e divida todos os 13 elementos de
cada uma das 12 linhas de M pelo maior elemento em módulo daquela linha. Escrever a
matriz lida e a modificada.*/

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 13; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function encontrarMaiorModuloLinha(matriz, linha) {
    let maiorModulo = Math.abs(matriz[linha][0]);
    for (let j = 1; j < 13; j++) {
        let moduloAtual = Math.abs(matriz[linha][j]);
        if (moduloAtual > maiorModulo) {
            maiorModulo = moduloAtual;
        }
    }
    return maiorModulo;
}

function dividirPorMaiorModuloLinha(matriz, linha, maiorModulo) {
    for (let j = 0; j < 13; j++) {
        matriz[linha][j] /= maiorModulo;
    }
}

function imprimirMatriz(matriz) {
    for (let i = 0; i < 12; i++) {
        console.log(matriz[i].join(' '));
    }
}

console.log("Digite os valores da matriz 12x13:");
let M = lerMatriz();

for (let i = 0; i < 12; i++) {
    let maiorModuloLinha = encontrarMaiorModuloLinha(M, i);
    dividirPorMaiorModuloLinha(M, i, maiorModuloLinha);
}

console.log("Matriz lida:");
imprimirMatriz(M);