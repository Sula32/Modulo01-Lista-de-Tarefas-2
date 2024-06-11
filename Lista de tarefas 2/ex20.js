/*Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada
no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
Matrícula:
Nome:
Salário bruto:
Dedução INSS:
Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do
INSS)*/

const prompt = require('prompt-sync')();

let matriculas = []
let nomes = []
let salariosbruto = []
let deducoes = []
let salariosliquido = []

for(let i = 0; i < 80; i++) {
    let matricula = Number(prompt("Digite o numero da matricula do funcionario: "))
    let nome = prompt("Digite o nome do funcionario: ")
    let salariobruto = Number(prompt("Digite o salario bruto: "))

    matriculas.push(matricula)
    nomes.push(nome)
    salariosbruto.push(salariobruto)
    deducoes.push(salariobruto*0.12)
    salariosliquido.push(salariobruto - (salariobruto*0.12))
}

for(let i = 0; i < nomes.length ; i++) {

    console.log("Matricula: " + matriculas[i] + "\n" +
    "Nome: " + nomes[i] + "\n" +
    "Salário bruto: " + salariosbruto[i] + "\n" +
    "Dedução INSS: " + deducoes[i] + "\n" +
    "Salário liquido: " + salariosliquido[i]
    )
}