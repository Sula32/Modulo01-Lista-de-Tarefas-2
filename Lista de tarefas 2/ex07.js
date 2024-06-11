/*7. Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um
carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. Além disso, o
cliente paga por Km percorrido. Faça um programa que leia o tipo de carro alugado
(popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. No final,
mostre o preço a ser pago de acordo com os dados a seguir:
Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km*/

const prompt = require("prompt-sync")();

let tipo = Number(prompt("Digite o tipo de carro a ser alugado:\n1- Carro popular       2- Carro de luxo\n"));
let dias = Number(prompt("Digite por quantos dias ele alugou o carro: "));
let distancia = Number(prompt("Digite quantos kms ele percorreu com o carro: "));

if (tipo < 2 || tipo > 0 || distancia > 0 || dias > 0) {
    if (tipo == 1) {
        if (distancia < 100) {
            let preço = (90 * dias) + (distancia * 0.2);
        }
        else {
            let preço = (90 * dias) + (distancia * 0.1);
        }

        console.log("O preço final pelo carro alugado foi de: " + preço)
    }
    else {
        if (distancia < 200) {
            let preço = (150 * dias) + (distancia * 0.3);
        }
        else {
            let preço = (150 * dias) + (distancia * 0.25);
        }

        console.log("O preço final pelo carro alugado foi de: " + preço)
    }
}
