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
            }
        );
    }
);