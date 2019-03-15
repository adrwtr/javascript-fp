// retorna uma funções com os argumentos trocados
const flipTwoArgs = fn => (x, y) => fn(y, x);

module.exports = {
    'flipTwoArgs' : flipTwoArgs
};