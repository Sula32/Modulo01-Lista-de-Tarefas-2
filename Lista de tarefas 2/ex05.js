/*5. Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).*/

const prompt = require('prompt-sync')();

let jogador1 = Number(prompt("Digite oque o jogador 1 vai jogar:\n1- Tesoura       2- Pedra      3- Papel\n"));
let jogador2 = Number(prompt("Digite oque o jogador 2 vai jogar:\n1- Tesoura       2- Pedra      3- Papel\n"));


if ((jogador1 < 4 || jogador1 > 0) && (jogador2 < 4 || jogador2 > 0)) {
    if ((jogador1 == 1 || jogador2 == 3) && (jogador1 == 2 || jogador2 == 1) && (jogador1 == 3 || jogador2 == 2)) {

        console.log("Jogador 1 venceu")
    }
    else {
        console.log("Jogador 2 venceu")
    }
}
else{
    console.log("Um dos jogadores nao selecionou nada")
}