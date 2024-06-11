/*35. Elaborar um algoritmo que leia um conjunto de 30 valores e os coloca em 2 vetores
conforme forem pares ou ímpares. O tamanho do vetor é de 5 posições. Se algum vetor
estiver cheio, escrevê-lo. Terminada a leitura, escrever o conteúdo dos dois vetores. Cada
vetor pode ser preenchido quantas vezes forem necessárias.*/

const prompt = require('prompt-sync')();

function classificarNumeros() {
    let pares = [];
    let impares = [];
    let contadorPares = 0;
    let contadorImpares = 0;

    for (let i = 0; i < 30; i++) {
        let numero = parseInt(prompt(`Digite o ${i + 1}º número: `));

        if (numero % 2 === 0) {
            pares[contadorPares] = numero;
            contadorPares++;
            if (contadorPares === 5) {
                console.log("Vetor de pares cheio:", pares);
                contadorPares = 0;
                pares = [];
            }
        } else {
            impares[contadorImpares] = numero;
            contadorImpares++;
            if (contadorImpares === 5) {
                console.log("Vetor de ímpares cheio:", impares);
                contadorImpares = 0;
                impares = [];
            }
        }
    }

    if (contadorPares > 0) {
        console.log("Vetor de pares:", pares);
    }
    if (contadorImpares > 0) {
        console.log("Vetor de ímpares:", impares);
    }
}

classificarNumeros();