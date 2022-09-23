const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {

    // Teste se productDetails é uma função.
   expect(typeof productDetails).toBe('function'); 

    // Teste se o retorno da função é um array.
    expect(Array.isArray(productDetails())).toBe(true); 

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(productDetails().length).toBe(2); 

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    const a = productDetails()[0];
    const b = productDetails()[1];
    expect(typeof a && typeof b).toBe('object'); 
    
    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    const first = productDetails('produto 1', 'produto 2')[0];
    const second = productDetails('produto 1', 'produto 2')[1]
    expect(first).not.toEqual(second); 

    // Teste se os dois productIds terminam com 123.
    const entradas0 = productDetails()[0];
    const entradas1 = productDetails()[1];
    const id0 = entradas0.details.productId;
    const id1 = entradas1.details.productId;
    const comeco123Id0 = id0.length-3;
    const comeco123Id1 = id1.length-3;

    expect(comeco123Id0).toBe(id0.search(/123/));
    expect(comeco123Id1).toBe(id1.search(/123/));
  });
});
