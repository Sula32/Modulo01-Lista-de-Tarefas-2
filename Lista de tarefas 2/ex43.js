/*43. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência
sobre as do obj1 em caso de conflitos*/

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
  }
  
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };

console.log(combinarObjetos(obj1, obj2));