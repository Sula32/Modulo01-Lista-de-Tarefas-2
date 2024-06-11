/*44. Escreva uma função que conte quantas propriedades do tipo string existem em um
objeto e retorne esse número.
*/

function contarPropriedadesString(objeto) {
  let contador = 0;
  for (const chave in objeto) {
    if (typeof objeto[chave] === "string") {
      contador++;
    }
  }
  return contador;
}

const exemplo = {
  a: "Olá",
  b: 42,
  c: "Mundo"
};

console.log(contarPropriedadesString(exemplo));