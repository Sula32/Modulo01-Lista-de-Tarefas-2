/*6. Crie um jogo onde o computador vai sortear um número entre 1 e 5. O jogador vai
tentar descobrir qual foi o valor sorteado.*/

const prompt = require('prompt-sync')();

    let numero = Math.floor((Math.random(4))*5)+1
    let palpite = Number(prompt("Tente adivinhar um numero de 1 a 5: "))
    if (palpite == numero){
        console.log("Voce acertou!!!!")
    }
    else {
        console.log("Voce errou :(")
    }
