var mocha = require('mocha');
var assert = require('assert');

const funcoes = {
    'high_order' : require('../high_order'),
    'demethodize' : require('../demethodize'),
    'math' : require('../math'),
};


const arrSequecia = [1, 2, 3, 4, 5];

// apenas retorna o valor
const simplesRetorno = (retornar) => retornar;

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
            'Flip Args - FlipTwo',
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
            'Filter',
            function() {
                // deve filtrar e trazer os valores do array
                assert.deepEqual(
                    arrSequecia.filter(v => v % 2 == 0),
                    [2, 4]
                )

                // todos os elementos passam pela função?
                assert.equal(
                    arrSequecia.every(v => v % 2 == 0),
                    false
                )

                assert.equal(
                    [2, 4, 6].every(v => v % 2 == 0),
                    true
                )

                // none é a negacao de every
                assert.equal(
                    funcoes.high_order.none(
                        [2, 4, 6],
                        v => v % 2 == 0
                    ),
                    false
                )

                assert.equal(
                    funcoes.high_order.filterNot(
                        [2, 4, 6]
                    )((v => v % 2 == 0)),
                    false
                )
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

        it(
            'unary',
            function() {
                var processo = funcoes.high_order.unary(simplesRetorno);

                // recebe varios argumentos
                // porém executa apenas no primeiro
                assert.deepEqual(
                    processo(
                        [1, 2],
                        [3, 4]
                    ),
                    [1, 2]
                );

            }
        );

        it(
            'Demethodize - Transformar o metodo de uma classe em um função que suporta vários tipos',
            function() {
                let string = 'MinhaString';
                const bindMap = funcoes.demethodize
                    .demethodizeBindObject(Array.prototype.map);

                const toUpperCase = funcoes.demethodize
                    .demethodizeBindObject(String.prototype.toUpperCase);

                // exemplo de demethodize
                assert.deepEqual(
                    bindMap(string, toUpperCase),
                    [ 'M', 'I', 'N', 'H', 'A', 'S', 'T', 'R', 'I', 'N', 'G' ]
                );
            }
        );

        it(
            'once',
            function() {
                var somar1vez = funcoes.high_order.once(somaSimples);

                assert.equal(
                    somar1vez(1, 2),
                    3
                );

                assert.equal(
                    somar1vez(1, 2),
                    undefined
                );
            }
        );

        it(
            'getField',
            function() {
                let objTeste = {
                    'propertyA' : 'value - 1',
                    'propertyB' : 'value - 2'
                }

                let getPropertyB = funcoes.high_order.getField(
                    'propertyB'
                );

                assert.equal(
                    getPropertyB(objTeste),
                    'value - 2'
                );
            }
        );

        it(
            'curry',
            function() {

                // curry funcao simples
                let somaCurry = v1 => v2 => somaSimples(v1, v2);
                let soma10 = somaCurry(10);

                assert.equal(
                    soma10(10),
                    20
                );

                // curry para 2 parametros
                let curry2p = fn => v1 => v2 => fn(v1, v2);
                let MinhaSoma2p = curry2p(somaSimples);
                let soma20 = MinhaSoma2p(20);

                assert.equal(
                    soma20(20),
                    40
                );

                // curry para varios parametros
                const curryXp = fn =>
                    fn.length === 0 ? fn() : p => curryXp(fn.bind(null, p));

                let MinhaSoma3p = curryXp(soma3);
                let soma30 = MinhaSoma3p(30);
                let soma50 = soma30(20);

                assert.equal(
                    soma50(10),
                    60
                );
            }
        );


    }
);
