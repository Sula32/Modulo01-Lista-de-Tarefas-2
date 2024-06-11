/* 18. Crie um registro com o nome do funcionário, cargo e salário. Leia este registro para
um funcionário e ao final escreva o conteúdo do registro.*/

const prompt = require('prompt-sync')();

let nomes = []
let idades = []

for(let i = 0; i < 9; i++) {
    let nome = prompt("Digite o nome desta pessoa: ")
    let idade = Number(prompt("Digite a idade desta pessoa: "))
    nomes.push(nome)
    idades.push(idade)
}
