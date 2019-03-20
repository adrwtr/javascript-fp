var mocha = require('mocha');
var assert = require('assert');

describe(
    'Definições importantes do Javascript',
    function() {

        it(
            'operador ... - spread',
            function() {

                // recebe varios argumentos, e retorna o primeiro
                let testeA = (...args) => args[0];
                let testeB = (...args) => args[1];
                let testeC = (...args) => (args);

                // nao é possivel retornar ...args
                // porém, ele pode ser usado como argumentos separados passados para uma função
                let testeD = (arg1, arg2) => (arg1 + arg2);
                let testeE = (...args) => testeD(...args);

                // aplica o array "...args"
                const demethodize1 = fn => (arg0, ...args) => fn.apply(arg0, args);

                // aplica os parametros de ...args na função arg0 conforme TesteE e TesteD
                const demethodize2 = fn => (arg0, ...args) => fn.call(arg0, ...args);

                assert.equal(
                    testeA(1, 2),
                    1
                );

                assert.equal(
                    testeB(1, 2),
                    2
                );

                // observe que aqui transfomou em array
                assert.deepEqual(
                    testeC(1, 2),
                    [1, 2]
                );

                assert.equal(
                    testeE(1, 2),
                    3
                );

                // qntos argumentos a função tem?
                assert.equal(
                    testeD.length,
                    2
                );
            }
        );

        it(
            'operador in',
            function() {
                let objTeste = {
                    'propertyA' : 'value - 1',
                    'propertyB' : 'value - 2'
                }

                assert.equal(
                    ('propertyA' in objTeste),
                    true
                );

                assert.equal(
                    ('propertyB' in objTeste),
                    true
                );

                assert.equal(
                    ('propertyC' in objTeste),
                    false
                );
            }
        );

        it(
            'lambda',
            function() {
                const testLambda1 = fn => 2;

                const testLambda2 = fn => {
                    return x => 3;
                };

                const testLambda3 = fn => {
                    let a = 0;
                    return x => a = 4;
                };

                assert.equal(
                    testLambda1(),
                    2
                );

                assert.equal(
                    testLambda2()(),
                    3
                );

                assert.equal(
                    testLambda3()(),
                    4
                );
            }
        );
    }
);