/*3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.*/

const prompt = require('prompt-sync')();

let distancia = Number(prompt("Digite a distancia a pecorrer:"));

if (distancia <=200) {

let passagem = (distancia) * 0.5;

console.log ("O preço da passagem:R$ " + passagem + ".");

}
else {

    let passagem = (distancia) * 0.45;

    console.log ("O preço da passagem:R$ " + passagem + ".");

}