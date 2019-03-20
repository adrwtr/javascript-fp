// retorna uma funções com os argumentos trocados
const flipTwoArgs = fn => (argA, argB) => fn(argB, argA);

// retorna um array com valores de..até. Ex: 1 até 3 => [1, 2, 3]
const range = (nr_start, nr_stop) => new Array(nr_stop - nr_start)
    .fill(0)
    .map(
        (arrValores, nr_indice) => nr_start + nr_indice
    );

// retorna uma função com uma operação matemática
const binaryOp = op => {
    switch (op) {
        case "+":
            return (x, y) => x + y;
        case "-":
            return (x, y) => x - y;
        case "*":
            return (x, y) => x * y;
        case "/":
            return (x, y) => x / y;
        case "%":
            return (x, y) => x % y;
    }

    return 0;
}

// retorna uma função aguardando o segundo argumento para computar
// = x + 10
const binaryLeftOp = (x, op) => (y) => binaryOp(op)(x, y);

// retorna uma função aguardando o primeiro argumento para computar
// = 10 + x
const binaryOpRight = (op, y) => (x) => binaryOp(op)(x, y);

// apenas nega a função every
const none = (arr, fn) => arr.every(v => !fn(v));

// chama a função e retorna a negação dela
const not = fn => (...args) => !fn(...args);

// filtra usando o not
// retorna uma função que irá filtrar um array
// essa função espera receber uma função de filtro que será negada !
const filterNot = arr => fn => arr.filter(not(fn));

// recebe varios argumentos
// porém executa apenas no primeiro
const unary = fn => (...args) => fn(args[0]);

// executa a função apenas uma unica vez
const once = func => {
    let done = false;

    return (...args) => {
        if (!done) {
            done = true;
            return func(...args);
        }
    };
};

// pega um atributo do objeto
const getField = attr => obj => obj[attr];

module.exports = {
    'flipTwoArgs' : flipTwoArgs,
    'range' : range,
    'binaryOp' : binaryOp,
    'binaryLeftOp' : binaryLeftOp,
    'binaryOpRight' : binaryOpRight,
    'none' : none,
    'not' : not,
    'filterNot' : filterNot,
    'unary' : unary,
    'once' : once,
    'getField' : getField
};