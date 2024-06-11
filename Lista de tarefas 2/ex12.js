/*12. Faça um programa que mostre os 10 primeiros elementos da Sequência de Fibonacci.
Ex.: 1, 1, 2, 3, 5, 8, 13, 21.*/

let sequencia = []

for(let i = 0; i < 10; i++) {
    if (sequencia.length < 2) {
        sequencia.push(1)
    }
    else {
        sequencia.push(sequencia[i-2] + sequencia[i-1])
    }
    console.log(sequencia[i])
}