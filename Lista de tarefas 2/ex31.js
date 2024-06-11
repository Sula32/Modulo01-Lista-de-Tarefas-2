/*31. Escreva um algoritmo que leia um número inteiro A e uma matriz V 30 x 30 de inteiros.
Conte quantos valores iguais a A estão na matriz. Crie, a seguir, uma matriz X contendo
todos os elementos de V diferentes de A. Mostre os resultados.*/

const prompt = require('prompt-sync')();

function lerMatriz() {
    let matriz = [];
    for (let i = 0; i < 30; i++) {
        matriz[i] = [];
        for (let j = 0; j < 30; j++) {
            matriz[i][j] = parseInt(prompt(`Digite o valor para a posição [${i + 1}][${j + 1}]: `));
        }
    }
    return matriz;
}

function contarValoresIguais(matriz, A) {
    let contador = 0;
    for (let i = 0; i < 30; i++) {
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] === A) {
                contador++;
            }
        }
    }
    return contador;
}

function criarMatrizX(matriz, A) {
    let matrizX = [];
    for (let i = 0; i < 30; i++) {
        matrizX[i] = [];
        for (let j = 0; j < 30; j++) {
            if (matriz[i][j] !== A) {
                matrizX[i][j] = matriz[i][j];
            }
        }
    }
    return matrizX;
}

let A = parseInt(prompt("Digite um número inteiro A: "));
console.log("Digite os valores da matriz V(30x30):");
let V = lerMatriz();

let quantidadeA = contarValoresIguais(V, A);

let X = criarMatrizX(V, A);

console.log(`Quantidade de valores iguais a ${A} na matriz V: ${quantidadeA}`);
console.log("Matriz X:");
for (let i = 0; i < 30; i++) {
    console.log(X[i].filter(el => el !== undefined).join(' '));
}