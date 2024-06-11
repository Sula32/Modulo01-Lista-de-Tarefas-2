/*11. Desenvolva um programa que leia o primeiro termo e a razão de uma PA (Progressão
Aritmética), mostrando na tela os 10 primeiros elementos da PA e a soma entre todos os
valores da sequência*/

const prompt = require('prompt-sync')();


let numero = Number(prompt("Digite o primeiro elemento: "));
let razao = Number(prompt("Digite a razao da pa: "));

console.log(1 + " : " + numero)

for (let i=2; i <= 10; i++) {
    numero += razao
    console.log(i + " : " + numero)
}