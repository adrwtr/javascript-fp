// retorna uma funções com os arquivos trocados
const flipTwoArgs = fn => (x, y) => fn(y, x);

module.exports = {
    'flipTwoArgs' : flipTwoArgs
};