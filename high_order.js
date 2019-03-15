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


module.exports = {
    'flipTwoArgs' : flipTwoArgs,
    'range' : range,
    'binaryOp' : binaryOp,
    'binaryLeftOp' : binaryLeftOp,
    'binaryOpRight' : binaryOpRight
};