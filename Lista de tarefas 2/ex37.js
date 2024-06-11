/*37. Escreva um algoritmo que leia um vetor G de 20 elementos caractere que representa
o gabarito de uma prova. A seguir, para cada um dos 50 alunos da turma, leia o vetor de
respostas (R) do aluno e conte o número de acertos. Mostre o número de acertos do
aluno e uma mensagem “APROVADO” se a quantidade de acertos for maior ou igual a 12;
e mostre uma mensagem de “REPROVADO”, caso contrário.*/

const prompt = require('prompt-sync')();

function lerRespostasAluno() {
    let respostas = prompt("Digite as respostas do aluno (até 20 caracteres): ");
    return respostas.toUpperCase().split('');
}

function contarAcertos(gabarito, respostas) {
    let acertos = 0;
    for (let i = 0; i < gabarito.length; i++) {
        if (gabarito[i] === respostas[i]) {
            acertos++;
        }
    }
    return acertos;
}

console.log("Digite o gabarito da prova (até 20 caracteres): ");
let gabarito = prompt().toUpperCase().split('');

for (let aluno = 1; aluno <= 50; aluno++) {
    console.log(`\nAluno ${aluno}:`);
    let respostasAluno = lerRespostasAluno();
    let numAcertos = contarAcertos(gabarito, respostasAluno);
    console.log(`Número de acertos: ${numAcertos}`);
    if (numAcertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}