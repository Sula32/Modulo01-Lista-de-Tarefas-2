/*49. Você recebe um array de objetos representando transações financeiras. Cada
transação possui id, valor, data, e categoria. Escreva uma função que retorne um objeto
onde as chaves são as categorias, e os valores são arrays de transações pertencentes a
essa categoria. Adicionalmente, inclua um subtotal de valores por categoria.*/

function categorizarTransacoes(transacoes) {
  const resultado = {};
  transacoes.forEach(transacao => {
    if (!resultado[transacao.categoria]) {
      resultado[transacao.categoria] = { transacoes: [], subtotal: 0 };
    }
    resultado[transacao.categoria].transacoes.push(transacao);
    resultado[transacao.categoria].subtotal += transacao.valor;
  });
  return resultado;
}

const transacoes = [
  { id: 1, valor: 100, data: "01/01/2024", categoria: "Alimentação" },
  { id: 2, valor: 50, data: "02/01/2024", categoria: "Transporte" },
  { id: 3, valor: 200, data: "03/01/2024", categoria: "Alimentação" }
];
console.log(categorizarTransacoes(transacoes));