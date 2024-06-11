/*45. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é
o número de vezes que a string aparece no array*/

function contarOcorrencias(array) {
  const resultado = {};
  array.forEach(item => {
    resultado[item] = (resultado[item] || 0) + 1;
  });
  return resultado;
}

const array = ["a", "b", "c", "a", "b", "a"];
console.log(contarOcorrencias(array));