/*2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da
multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.*/

const prompt = require('prompt-sync')();

let velocidade = Number(prompt("Digite a velocidade de seu carro:"));

if (velocidade > 80) {

let multa = (velocidade - 80) * 5;

console.log ("Voce foi multado em R$ " + multa + "!");
}
else {

    console.log ("Voce esta dentro do limite de velocidade.");

}