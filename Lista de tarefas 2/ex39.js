/*39. Faça um algoritmo que leia um vetor (A) de 100 posições. Em seguida, compacte o
vetor, retirando os valores nulos e negativos. Coloque o resultado no vetor B*/

const prompt = require('prompt-sync')();

function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 100; i++) {
        vetor[i] = parseFloat(prompt(`Digite o valor para a posição ${i + 1}: `));
    }
    return vetor;
}

function compactarVetor(vetor) {
    let vetorCompactado = [];
    for (let elemento of vetor) {
        if (elemento > 0) {
            vetorCompactado.push(elemento);
        }
    }
    return vetorCompactado;
}

console.log("Digite os valores do vetor A:");
let vetorA = lerVetor();

let vetorB = compactarVetor(vetorA);

console.log("Vetor B (compactado):", vetorB);