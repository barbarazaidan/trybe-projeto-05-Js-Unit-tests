/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante através do qual será possível
  cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto que permite:

  - Ler o menu cadastrado;
  - Fazer pedidos;
  - Verificar o que foi pedido;
  - Somar o valor da conta.

  A estrutura deste código e deste objeto já está definida e você precisa implementá-la.
  Abaixo você verá uma série de testes e passos que irão guiar você e, que devem NECESSARIAMENTE ser realizados em ordem para o bom desenvolvimento do sistema.

  Desenvolvimento:
  - Uma função:
    createMenu()
  - Recebe um parâmetro que é um objeto, o menu:
    Exemplo: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.

  A função createMenu() então, retornará um novo objeto. Este novo objeto contém algumas chaves e ao acessar cada uma delas temos os seguintes retornos:

  - Uma chave `fetchMenu` retornando o menu, que nada mais é que o objeto passado como parâmetro para createMenu()

    Exemplo:
    const meuRestaurante = createMenu({
      food: {'coxinha': 3.90, 'sanduiche', 9.90},
      drinks: {'agua': 3.90, 'cerveja': 6.90}
    });

    meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` armazenando um array de strings. Cada string é a chave de um pedido.
    Exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` armazenando uma função. Essa função recebe uma string como parâmetro e essa string deve ser adicionada à lista armazenada em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função. Essa função faz a soma do preço de todos os pedidos, retornando essa soma de preços com acréscimo de 10%.

  Comportamento:
    const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} })

    meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

    meuRestaurante.order('coxinha') // Retorno: undefined

    meuRestaurante.consumption // Retorno: ['coxinha']

    meuRestaurante.pay() // Retorno: 4.29

  IMPORTANTE - FAÇA OS TESTES E PASSOS DE ACORDO COM A SEQUÊNCIA INDICADA NO README DO PROJETO!

  BOAS PRÁTICAS TDD: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E VOLTE A ESTE ARQUIVO QUANDO FOR INDICADO!

*/

// PASSO 1: Crie uma função `createMenu()` que, recebendo um objeto como parâmetro, retorna esse objeto no seguinte formato: 
//  { fetchMenu: () => objetoPassadoPorParametro }.
//
// Agora faça o TESTE 4 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu()` uma chave de nome `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, ao receber uma string como parâmetro, 
// adiciona essa string ao array de `objetoRetornado.consumption`. Essa nova função será adicionada à chave `order`.
// 
// DICA PARA DESENVOLVIMENTO: 
// - Definir a função `createMenu()`
// - Definir o objeto que a `createMenu()` retorna, mas separadamente 
// - E depois, definir essa nova função que será atribuída a `order`.
// ```
// const restaurant = {}
//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`. 
// // Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` armazenando uma função
// que:
// - percorrerá item a item de `objetoRetornado.consumption`;
// - fará a soma do preço desses itens;
// - retornará o valor somado acrescido de 10%.
// DICA: para isso, você precisará percorrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

// ---------------------------------------------------------------------------------------------------------------------
// INICIO DA RESOLUÇÃO 

const menu = { food: { coxinha: 3.9, sopa: 9.9 }, drink: { agua: 3.9, cerveja: 6.9 } };

const restaurant = {};

const orderFromMenu = (request) => {
  restaurant.consumption.push(request);
};

// Eu tinha feito apenas como está abaixo, só que dava erro NaN, pois quando tinha uma chave de drink, eu tentava acessar direto no menu de comida e não dava certo. Era preciso ter uma comparação antes.
// --------------------------------------------------------------------------------------------------------------------------------------
// const totalFood = () => {
//   let somaFood = 0;
//   const menuFood = restaurant.fetchMenu().food;
//   const consumo = restaurant.consumption; 
//   for (let index = 0; index < restaurant.consumption.length; index += 1) {  
//     somaFood += menuFood[consumo];
//   }
//   return somaFood;
// };
// ----------------------------------------------------------------------------------------------------------------------------------------

// Essa comparação também não deu certo, pois o que eu estava comparando era, por exemplo, coxinha === menuFood.coxinha, ou seja, o nome da chave com o resultado dela, que é um número. Então sempre retornava 0. 
// ----------------------------------------------------------------------------------------------------------------------------------------
// const totalFood = () => {
//   let somaFood = 0;
//   const menuFood = restaurant.fetchMenu().food;
//   const consumo = restaurant.consumption; 
//   for (let index = 0; index < restaurant.consumption.length; index += 1) {
//     if (consumo[index] === menuFood[consumo[index]]) {
//     somaFood += menuFood[consumo[index]];
//     }
//   }
//   return somaFood;
// };
// ----------------------------------------------------------------------------------------------------------------------------------------

// Eu tentei usar o código abaixo e funciona, mas o lint reclama dizendo que não se deve usar o método Object.prototype 'hasOwnProperty' do objeto de destino.
// --------------------------------------------------------------------------------------------------------------------------------------
// const totalFood = () => {
//   let somaFood = 0;
//   const menuFood = restaurant.fetchMenu().food;
//   for (let index = 0; index < restaurant.consumption.length; index += 1) {
//     if (menuFood.hasOwnProperty([restaurant.consumption[index]])) {
//     somaFood += menuFood[restaurant.consumption[index]];
//     }
//   }
//   return somaFood;
// };
// ---------------------------------------------------------------------------------------------------------------------------------------

// No código abaixo, o IN serve para verificar se tal chave existe no objeto a seguir. Ele retorna um booleano.
const totalFood = () => {
  let somaFood = 0;
  const menuFood = restaurant.fetchMenu().food;
  for (let index = 0; index < restaurant.consumption.length; index += 1) {
    if (restaurant.consumption[index] in menuFood) {
    somaFood += menuFood[restaurant.consumption[index]];
    }
  }
  return somaFood;
};

// O código abaixo funciona, mas o Lint reclamou da complexidade dele, dizendo para eu reduzir de 6 para 5. Então precisei refatorar com os vários códigos acima.
// ---------------------------------------------------------------------------------------------------------------------------------------
// const totalDrink = () => {
//   let somaDrink = 0;
//   const drink = Object.entries(menu.drink);
//   for (let index = 0; index < restaurant.consumption.length; index += 1) {
//     for (let index1 = 0; index1 < drink.length; index1 += 1) {
//       if (restaurant.consumption[index] === drink[index1][0]) {
//         somaDrink += drink[index1][1];
//       }
//     }
//   }
//   return somaDrink;
// };
// ---------------------------------------------------------------------------------------------------------------------------------------

const totalDrink = () => {
  let somaDrink = 0;
  const menuDrink = restaurant.fetchMenu().drink;
  for (let index = 0; index < restaurant.consumption.length; index += 1) {
    if (restaurant.consumption[index] in menuDrink) {
      somaDrink += menuDrink[restaurant.consumption[index]];
    }
  }
  return somaDrink;
};

const totalValor = () => {
  let soma = 0;
  let somaComGorgeta = 0;
  soma = (totalFood() + totalDrink());
  somaComGorgeta = soma + soma * 0.1;
  return somaComGorgeta;
};

const createMenu = (objetoMenu) => {
  const retornaMenu = () => objetoMenu; // o lint reclamou quando coloquei a função direto no fetchMenu

  restaurant.fetchMenu = retornaMenu;
  restaurant.consumption = [];
  restaurant.order = orderFromMenu;
  restaurant.pay = totalValor;
  
  return restaurant;
};

createMenu(menu);

restaurant.order('coxinha');
restaurant.order('agua');
restaurant.order('coxinha');

// console.log(Object.entries(menu.drink));
// console.log(Object.entries(menu.food));
// console.log (totalDrink());
// console.log(totalFood());
// console.log(restaurant.fetchMenu());
// console.log(restaurant.consumption;
// console.log(restaurant.order('coxinha'));
// console.log(restaurant.pay());

module.exports = createMenu;
