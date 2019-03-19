// função fatorial recursiva simples
function factorialSimples(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorialSimples(n - 1);
    }
}

let cacheFibonacci = [];

const fibonacciCache = (n) => {
    if (cacheFibonacci[n] == undefined) {
        if (n == 0) {
            cacheFibonacci[0] = 0;
        } else if (n == 1) {
            cacheFibonacci[1] = 1;
        } else {
            cacheFibonacci[n] = fibonacciCache(n - 2) + fibonacciCache(n - 1);
        }
    }

    return cacheFibonacci[n];
}

module.exports = {
    'factorialSimples' : factorialSimples,
    'fibonacciCache' : fibonacciCache
};