/*42. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/

function propriedadesArrays(objeto) {
    const resultado = {};
    for (const chave in objeto) {
      if (Array.isArray(objeto[chave])) {
        resultado[chave] = objeto[chave];
      }
    }
    return resultado;
  }
  
const dados = {
    inteiro: 250,
    numeros: [1, 2, 3],
    texto: "Olá",
    array: [4, 5, 6],
    outroArray: ["a", "b", "c"]
};
  
console.log(propriedadesArrays(dados));