/*15. Desenvolva um programa que leia 10 números inteiros e guarde-os em um vetor. No
final, mostre quais são os números pares que foram digitados e em que posições eles
estão armazenados.*/

const prompt = require('prompt-sync')();

let sequencia = []

for(let i = 0; i < 10; i++) {
    let numero = Number(prompt("Digite um dos numeros: "))
    sequencia.push(numero)
}

for(let i = 0; i < 10; i++) {
    if (sequencia[i]%2==0) {
        console.log("O item " + i + " da sequencia com valor de " + sequencia[i] + " é par.")
    }
}