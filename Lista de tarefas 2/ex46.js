/*46. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/

function totalVendasPorVendedor(vendas) {
  const resultado = {};
  vendas.forEach(venda => {
    if (!resultado[venda.vendedor]) {
      resultado[venda.vendedor] = 0;
    }
    resultado[venda.vendedor] += venda.valor;
  });
  return resultado;
}

const vendas = [
  { vendedor: "João", valor: 100 },
  { vendedor: "Maria", valor: 200 },
  { vendedor: "João", valor: 300 }
];
console.log(totalVendasPorVendedor(vendas));