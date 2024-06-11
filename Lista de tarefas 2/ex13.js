/*13.Crie um programa que preencha automaticamente (usando lógica, não apenas
atribuindo diretamente) um vetor numérico com 15 posições com os primeiros elementos
da sequência de Fibonacci.*/

let sequencia = []

for(let i = 0; i < 15; i++) {
    if (sequencia.length < 2) {
        sequencia.push(1)
    }
    else {
        sequencia.push(sequencia[i-2] + sequencia[i-1])
    }
    console.log(sequencia[i])
}