
const flipTwo = fn => (x, y) => fn(y, x);

const none = (arr, fn) => arr.every(v => !fn(v));

const not = fn => (...args) => !fn(...args);

const filterNot = arr => fn => arr.filter(not(fn));

const unary = fn => (...args) => fn(args[0]);

const isNegative = x => x < 0;

console.log(
    none(
        [
            1, 2, 3
        ],
        function(x) {
            return x == 1;
        }
    )
);

console.log(
    none(
        [
            4, 2, 3
        ],
        function(x) {
            return x == 1;
        }
    )
);

console.log(
    filterNot(
        [
            4, 2, 3
        ]
    )(function () { return 10;})
);