/*22. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando
dados sobre o salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até R$
350,00.*/

const prompt = require('prompt-sync')();

let horarios = []
let condicao = 1
let contagem = 1
let salarios = 0
let filhos = 0
let numsalario = 0
let maior =0

while (condicao == 1) {

    let salario = Number(prompt("Digite o salario desta pessoa: "))
    if (contagem == 1) {
        maior = salario
    }
    if (maior < salario) {
        maior = salario
    }
    if (salario <= 350) {
        numsalario += 1
    }
    salarios += salario
    filhos += Number(prompt("Digite o numero de filhos desta pessoa: "))
    
    condicao = Number(prompt("Deseja continuar?\n1- Sim     2- Nao: "))
    contagem += 1
}

console.log("Media dos salarios por pessoa : " + (salarios/contagem))
console.log("Media de filhos por pessoa : " + (filhos/contagem))
console.log("O maior salario dentre as pessoas analizadas : " + maior)
console.log("A porcentagem de pessoas com salario menor que 350 : " + (numsalario*100)/contagem) + "%."