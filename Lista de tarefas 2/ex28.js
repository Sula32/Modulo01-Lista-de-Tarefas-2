/*28. Fazer um algoritmo para receber uma matriz 10 x 10 e devolver o resultado pedido no
item:
a) a soma dos elementos acima da diagonal principal;
b) a soma dos elementos abaixo da diagonal principal;*/

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 10; i++) {
        matriz[i] = [];
        for (let j = 0; j < 10; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function somaAcimaDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (j > i) {
                soma += matriz[i][j];
            }
        }
    }
    return soma;
}

function somaAbaixoDiagonalPrincipal(matriz) {
    let soma = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (i > j) {
                soma += matriz[i][j];
            }
        }
    }
    return soma;
}

console.log("Digite os valores da matriz 10x10:");
let matriz = lerMatriz();

let somaAcima = somaAcimaDiagonalPrincipal(matriz);
let somaAbaixo = somaAbaixoDiagonalPrincipal(matriz);

console.log("Soma dos elementos acima da diagonal principal:", somaAcima);
console.log("Soma dos elementos abaixo da diagonal principal:", somaAbaixo);