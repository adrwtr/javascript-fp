var mocha = require('mocha');
var assert = require('assert');

const funcoes = {
    'math' : require('../math')
};


describe(
    'Funções matemáticas',
    function() {
        it(
            'Fatorial',
            function() {
                assert.equal(
                    funcoes.math.factorialSimples(10),
                    3628800
                );
            }
        )

        it(
            'Fibonacci',
            function() {
                assert.equal(
                    funcoes.math.fibonacciCache(10),
                    55
                );
            }
        )
    }
);
