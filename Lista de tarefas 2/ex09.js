/*9. Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final,
mostre o total de salário pago aos homens e o total pago às mulheres. O programa vai
perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um
funcionário.*/

const prompt = require('prompt-sync')();


let pagof = 0
let pagom = 0
let condiçao = 1

while (condiçao == 1) {

    let salario = Number(prompt("Digite o salario da pessoa: "));
    let sexo = prompt("Digite o sexo da pessoa: \nHomem - M        Mulher - F");

    if (sexo == 'F' || sexo == 'f') {
        console.log("Salario somado aos do sexo feminino")
        pagof += salario
    }
    else  if (sexo == 'M' || sexo == 'm') {
        console.log("Salario somado aos do sexo masculino")
        pagom += salario
    }
    else {
        console.log("Sexo nao identificado")
    }

    condiçao = Number(prompt("Deseja continuar?\n1- Sim     2- Nao: "));
}

console.log("O salario pago aos homens foi de: R$"+ pagom)
console.log("O salario pago as mulheres foi de: R$"+ pagof)