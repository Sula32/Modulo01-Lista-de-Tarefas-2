/*23. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da
diagonal principal são iguais a 1 e os demais são nulos */

function matrizIdentidade() {
    let MI = [];
    for (let i = 0; i < 7; i++) {
        MI[i] = [];
        for (let j = 0; j < 7; j++) {
            MI[i][j] = (i === j) ? 1 : 0;
        }
    }
    MI.forEach(row => console.log(row.join(' ')));
}

matrizIdentidade();