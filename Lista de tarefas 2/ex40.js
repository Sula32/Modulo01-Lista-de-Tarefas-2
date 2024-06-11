/*40. Faça um algoritmo que leia um vetor de 5 elementos inteiros, correspondentes ao
resultado oficial da Loto. A seguir, leia 50 conjuntos de vetores (com 5 elementos inteiros
cada), representando as apostas feitas. Compare os números das apostas com o
resultado oficial e mostre uma mensagem ("Ganhador") se todos os números
corresponderem ao resultado oficial. (Observação: não é necessário procurar por ternos
e quadras, apenas por quinas.)*/

const prompt = require('prompt-sync')();

function lerVetor() {
    let vetor = [];
    for (let i = 0; i < 5; i++) {
        vetor[i] = parseInt(prompt(`Digite o número ${i + 1} da aposta: `));
    }
    return vetor;
}

function verificarAposta(resultadoOficial, aposta) {
    for (let i = 0; i < 5; i++) {
        if (resultadoOficial.indexOf(aposta[i]) === -1) {
            return false;
        }
    }
    return true;
}

console.log("Digite o resultado oficial da Loto (5 números):");
let resultadoOficial = lerVetor();

let ganhadores = 0;
for (let i = 1; i <= 50; i++) {
    console.log(`\nAposta ${i}:`);
    let aposta = lerVetor();
    if (verificarAposta(resultadoOficial, aposta)) {
        console.log("Ganhador!");
        ganhadores++;
    }
}

console.log(`\nTotal de ganhadores: ${ganhadores}`);