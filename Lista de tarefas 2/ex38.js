/*38. Elabore um algoritmo que leia um vetor de 6 posições e após sua leitura leia outra
variável identificadora que calcule a operação conforme a informação contida nesta
variável:
1- soma dos elementos;
2- produto dos elementos;
3- média dos elementos;
4- ordene os elementos em ordem crescente;
5- mostre o vetor.*/

const prompt = require('prompt-sync')();

function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 6; i++) {
        vetor[i] = parseFloat(prompt(`Digite o valor para a posição ${i + 1}: `));
    }
    return vetor;
}

function somaElementos(vetor) {
    let soma = 0;
    for (let elemento of vetor) {
        soma += elemento;
    }
    return soma;
}

function produtoElementos(vetor) {
    let produto = 1;
    for (let elemento of vetor) {
        produto *= elemento;
    }
    return produto;
}

function mediaElementos(vetor) {
    let soma = somaElementos(vetor);
    return soma / vetor.length;
}

function ordenarCrescente(vetor) {
    return vetor.sort((a, b) => a - b);
}

console.log("Digite os valores do vetor:");
let meuVetor = lerVetor();

let operacao = parseInt(prompt("Digite a operação desejada (1- soma, 2- produto, 3- média, 4- ordenação crescente, 5- mostrar vetor): "));

switch (operacao) {
    case 1:
        console.log("Soma dos elementos:", somaElementos(meuVetor));
        break;
    case 2:
        console.log("Produto dos elementos:", produtoElementos(meuVetor));
        break;
    case 3:
        console.log("Média dos elementos:", mediaElementos(meuVetor));
        break;
    case 4:
        console.log("Vetor ordenado:", ordenarCrescente(meuVetor));
        break;
    case 5:
        console.log("Vetor:", meuVetor);
        break;
    default:
        console.log("Operação inválida!");
}