/*24. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/

function elementosNegativosPorLinha(M) {
    let C = [];
    for (let i = 0; i < M.length; i++) {
        let count = 0;
        for (let j = 0; j < M[i].length; j++) {
            if (M[i][j] < 0) {
                count++;
            }
        }
        C.push(count);
    }
    return C;
}

let M = [
    [-2, 3, -1, 5, 0, -4, 6, -2],
    [1, -5, 2, -3, 0, 7, 4, -1],
    [4, -2, 0, 8, -3, 6, -1, 2],
    [0, 2, -4, 6, 1, -2, 3, -5],
    [-3, 1, -2, 4, -5, 7, -1, 3],
    [2, 3, 5, -1, 0, -2, -4, 7]
];

let C = elementosNegativosPorLinha(M);
console.log(C);