/*16. Crie uma lógica que preencha um vetor de 20 posições com números aleatórios
(entre 0 e 99) gerados pelo computador. Logo em seguida, mostre os números gerados e
depois coloque o vetor em ordem crescente, mostrando no final os valores ordenados.*/

const prompt = require('prompt-sync')();

let sequencia = []

for(let i = 0; i < 20; i++) {
    let numero = Math.floor(Math.random(100)*100)
    if (numero in sequencia) {
        i -= 1
    }
    else {
        sequencia.push(numero)
    }
}

console.log(sequencia.sort((sequencia, ordenada) => sequencia - ordenada))