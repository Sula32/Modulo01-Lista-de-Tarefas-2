/*10. Crie um programa usando a estrutura “faça enquanto” que leia vários números. A
cada laço, pergunte se o usuário quer continuar ou não. No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares.*/

const prompt = require('prompt-sync')();

let menor = 0
let soma = 0;
let somapares = 0;
let condiçao = 1;
let repetiçao = 0;

while (condiçao == 1) {

    repetiçao += 1;
    let numero = Number(prompt("Digite o numero: "));
    if (repetiçao == 1) {
        menor = numero
    }

    soma += numero

    if (numero%2==0) {
        somapares +=1
    }

    if (menor > numero) {
        menor = numero
    }
    
    condiçao = Number(prompt("Deseja continuar?\n1- Sim     2- Nao: "));

}

console.log("O somatório entre todos os valores; " + soma);
console.log("Qual foi o menor valor digitado;" + menor);
console.log("A média entre todos os valores; " + (soma/repetiçao));
console.log("Quantos valores são pares; " + somapares);