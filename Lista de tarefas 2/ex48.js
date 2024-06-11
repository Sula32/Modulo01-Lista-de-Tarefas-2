/*48. Você recebe dois objetos que representam o inventário de duas lojas diferentes:
inventarioLojaA e inventarioLojaB. Cada chave é um item, e o valor é a quantidade desse
item em estoque. Escreva uma função que combine os inventários em um único objeto.
Se um item aparecer em ambas as lojas, some as quantidades.*/

function combinarInventarios(inventarioLojaA, inventarioLojaB) {
  const inventarioCombinado = { ...inventarioLojaA };
  for (const item in inventarioLojaB) {
    if (inventarioCombinado[item]) {
      inventarioCombinado[item] += inventarioLojaB[item];
    } else {
      inventarioCombinado[item] = inventarioLojaB[item];
    }
  }
  return inventarioCombinado;
}

const inventarioLojaA = { maça: 10, banana: 20 };
const inventarioLojaB = { banana: 15, laranja: 25 };
console.log(combinarInventarios(inventarioLojaA, inventarioLojaB));