/*21. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e
retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal
= 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/

const prompt = require('prompt-sync')();

let altura = Number(prompt("Digite a altura da pessoa: "))
let sexo = prompt("Digite o sexo da pessoa: f - feminino        m - masculino : ")
let pesoideal = 0

if (sexo == 'f'){
    pesoideal = 62.1 * altura - 44.7
}
else {
    pesoideal = 72.7 * altura - 58
}

console.log("O peso ideal para esta pessoa é " + pesoideal + "Kgs")