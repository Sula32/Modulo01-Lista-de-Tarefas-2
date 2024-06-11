/*1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.*/

const prompt = require('prompt-sync')();

let qtd_cigarros = Number(prompt("Quantidade de Cigarros fumados por dia:"));
let anos_fumando = Number(prompt("Quantidade de anos fumando:"));

let cigarros_total = qtd_cigarros * (anos_fumando * 365);
let minutos_perdidos = cigarros_total * 10;

console.log ("O fumante perdeu: " + minutos_perdidos + " Minutos de vida.")