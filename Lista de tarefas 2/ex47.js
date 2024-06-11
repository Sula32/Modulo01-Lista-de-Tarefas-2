/*47. Crie uma função que transforme um objeto de entrada aplicando uma função
fornecida a cada uma das propriedades do objeto, retornando um novo objeto com os
resultados.*/

function aplicarFuncaoEmPropriedades(objeto, funcao) {
  const resultado = {};
  for (const chave in objeto) {
    resultado[chave] = funcao(objeto[chave]);
  }
  return resultado;
}

const objeto = { a: 1, b: 2, c: 3 };
const dobrar = x => x * 2;
console.log(aplicarFuncaoEmPropriedades(objeto, dobrar));