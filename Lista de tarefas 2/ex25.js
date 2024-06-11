/*25. Faça um algoritmo que leia uma matriz de 15 X 20 de números reais e mostre a soma
de cada coluna separadamente.*/

const prompt = require('prompt-sync')();

function somaColunas(matriz) {
    let somaColunas = new Array(matriz[0].length).fill(0); 
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            somaColunas[j] += matriz[i][j]; 
        }
    }
    return somaColunas;
}

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 15; i++) {
        matriz[i] = [];
        for (let j = 0; j < 20; j++) {
            let numero = parseFloat(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
            matriz[i][j] = numero;
        }
    }
    return matriz;
}

console.log("Por favor, digite os valores da matriz:");
let matriz = lerMatriz();

let somaDasColunas = somaColunas(matriz);

console.log("Soma de cada coluna:");
somaDasColunas.forEach((soma, index) => console.log(`Coluna ${index + 1}: ${soma}`));