/*30. Escrever um algoritmo que lê uma matriz M(5,5) e cria 2 vetores SL(5) e SC(5) que
contenham, respectivamente, as somas das linhas e das colunas de M. Escrever a matriz
e os vetores criados.*/

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

function calcularSomas(matriz) {
    let SL = []; 
    let SC = []; 

    for (let i = 0; i < 5; i++) {
        SL[i] = 0;
        SC[i] = 0;
    }

    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            SL[i] += matriz[i][j]; 
            SC[j] += matriz[i][j]; 
        }
    }

    return { SL, SC };
}

console.log("Digite os valores da matriz 5x5:");
let matriz = lerMatriz();

let { SL, SC } = calcularSomas(matriz);

console.log("Matriz:");
matriz.forEach(row => console.log(row.join(' ')));

console.log("Vetor SL (somas das linhas):", SL);
console.log("Vetor SC (somas das colunas):", SC);