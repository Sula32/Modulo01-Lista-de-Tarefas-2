/*27. Elaborar um algoritmo que leia uma matriz M(6,6) e um valor A. Após a leitura,
multiplicar a matriz M pelo valor A e colocar os valores da matriz multiplicados por A em
um vetor V(36). Escrever o vetor V no final.*/

const prompt = require('prompt-sync')();

function multiplicarMatrizPorValor(matriz, valor) {
    let vetor = [];
    let index = 0;
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            vetor[index++] = matriz[i][j] * valor;
        }
    }
    return vetor;
}

function lerMatriz(rows, cols) {
    let matriz = [];
    for (let i = 0; i < rows; i++) {
        matriz[i] = [];
        for (let j = 0; j < cols; j++) {
            matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

console.log("Digite os valores da matriz M(6,6):");
let M = lerMatriz(6, 6);
let A = parseFloat(prompt("Digite o valor A: "));

let V = multiplicarMatrizPorValor(M, A);

console.log("Vetor V:");
console.log(V);