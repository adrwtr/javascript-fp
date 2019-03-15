const funcoes = {
    'high_order' : require('./high_order')
};

const arrSequecia = [1, 2, 3, 4, 5];

// funcao com 2 argumentos
const logComposto = (ds_stringA, ds_stringB) => console.log(ds_stringA, ds_stringB);

// funcao com 1 argumento
const logSimples = (ds_valor) => console.log(ds_valor);

// soma simples
const somaSimples = (nr_v1, nr_v2) => nr_v1 + nr_v2;

// soma com 3 argumentos
const soma3 = (x, y, z) => x + y + z;

// a soma de todos os valores, dividido pelo total de valores
const average = arr => arr.reduce(somaSimples, 0) / arr.length;

// Usando as funções

// log das funcoes no arquivo importado
console.log(funcoes.high_order.flipTwoArgs);
// result => [Function: flipTwoArgs]

logSimples(funcoes.high_order.flipTwoArgs);
// result => [Function: flipTwoArgs]

// executa função com 2 args
logComposto('valor 1', 'valor 2');
// result => valor 1 valor 2

// aplica high order que altera a ordem dos argumentos
const logCompostoFlipTwoArgs = funcoes.high_order.flipTwoArgs(logComposto);
logCompostoFlipTwoArgs('valor 1', 'valor 2');
// result => valor 2 valor 1

// aplica higth order map -> aplica a função elemento por elemento
// deve imprimir os elementos da lista
arrSequecia.map(logSimples);
// result => 1\n 2\n 3\n 5\n

// aplica higth order reduce
// array.reduce(callback[, valorInicial])
arrSequecia.reduce(logSimples);
// result => 1\n undefined\n undefined\n undefined\n undefined\n

// aplica higth order reduce
// array.reduce(callback[, valorInicial])
logSimples(
    arrSequecia.reduce(somaSimples)
);
// result => 15

// chama funcao de média
logSimples(
    average(arrSequecia)
);
// result => 3


