var mocha = require('mocha');
var assert = require('assert');

const funcoes = {
    'high_order' : require('../high_order')
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

// aplica a função fatorial, usando range
const factorialByRange = n => funcoes.high_order.range(1, n + 1)
    .reduce(
        (x, y) => x * y, 1
    );

// faz o numero vezes 2
// vezes2 => n -> n
const vezes2 = funcoes.high_order.binaryLeftOp(
    2,
   '*'
);


describe(
    'Exemplos de uso das funçoes',
    function() {
        it(
            'aplica high order que altera a ordem dos argumentos',
            function() {
                const logCompostoFlipTwoArgs = funcoes.high_order.flipTwoArgs(logComposto);
                logCompostoFlipTwoArgs('valor 1', 'valor 2');
                assert(true);
            }
        );

        it(
            'Map',
            function() {
                // aplica higth order map -> aplica a função elemento por elemento
                // array.map(callback[, indice]) => array
                assert.deepEqual(
                    arrSequecia.map(factorialByRange),
                    [1, 2, 6, 24, 120]
                );
            }
        );


        it(
            'Reduce',
            function() {
                // aplica higth order reduce
                // array.reduce(callback[, valorInicial]) => number
                assert.equal(
                    arrSequecia.reduce(somaSimples),
                    15
                );
            }
        );

        it(
            'Average',
            function() {
                // chama funcao de média
                assert.equal(
                    average(arrSequecia),
                    3
                );
            }
        );

        it(
            'Range',
            function() {
                // chama funcao de média
                assert.deepEqual(
                    funcoes.high_order.range(5, 10),
                    [5, 6, 7, 8, 9]
                );

                assert.equal(
                    factorialByRange(4),
                    24
                )
            }
        );

        it(
            'binaryOp',
            function() {
                // exemplo de binaryOp
                assert.equal(
                    funcoes.high_order.binaryOp('+')(1, 2),
                    3
                );

                // aplica reduce e binaryOp
                assert.equal(
                    arrSequecia.reduce(
                        funcoes.high_order.binaryOp('-')
                    ),
                    -13
                );

                assert.equal(
                    vezes2(4),
                    8
                );
            }
        );
    }
);
