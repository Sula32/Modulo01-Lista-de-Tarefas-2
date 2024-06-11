/*26. Dadas duas matrizes numéricas A[1..3,1..5] e B[1..3,1..5], calcular a matriz produto
P[1..3,1..5].*/

function multiplicarMatrizes(A, B) {
    if (A[0].length !== B.length) {
        console.log("O número de colunas da matriz A deve ser igual ao número de linhas da matriz B.");
        return;
    }

    let P = [];
    for (let i = 0; i < A.length; i++) {
        P[i] = [];
        for (let j = 0; j < B[0].length; j++) {
            let soma = 0;
            for (let k = 0; k < A[0].length; k++) {
                soma += A[i][k] * B[k][j];
            }
            P[i][j] = soma;
        }
    }
    return P;
}

// escrever o valor da matrizes aqui
let A = [
    [1, 2, 3],
    [4, 5, 6]
];

let B = [
    [7, 8],
    [9, 10],
    [11, 12]
];

let P = multiplicarMatrizes(A, B);

if (P) {
    console.log("Matriz produto P:");
    P.forEach(row => console.log(row.join(' ')));
}