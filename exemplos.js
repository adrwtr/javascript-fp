const getRandomLetter = () => {
    const min = "A".charCodeAt();
    const max = "Z".charCodeAt();

    return String.fromCharCode(
        Math.floor(Math.random() * (1 + max - min)) + min
    );
};


const getRandomFileName = (fileExtension = "") => {
    const NAME_LENGTH = 12;
    let namePart = new Array(NAME_LENGTH);

    for (let i = 0; i < NAME_LENGTH; i++) {
        namePart[i] = getRandomLetter();
    }

    return namePart.join("") + fileExtension;
};

const sum3 = (x, y, z) => x + y + z;

const mySum = myArray.reduce((x, y) => x + y, 0);


const roundFix2 = (a, n) => {
    let r = a > 0 ? Math.ceil(n) : Math.floor(n);
    a += n - r;
    return {
        a,
        r
    };
};

const shuffle = arr => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let r = Math.floor(Math.random() * (len - i));
        [arr[i], arr[i + r]] = [arr[i + r], arr[i]];
    }
    return arr;
};

const average = arr => arr.reduce(sum, 0) / arr.length;

const reverseString = str => {
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
};

const reverseString2 = str => str.split("").reduceRight((x, y) => x + y, "");

const range = (start, stop) => new Array(stop - start).fill(0).map((v, i) => start + i);

const factorialByRange = n => range(1, n + 1).reduce((x, y) => x * y, 1);

const objCopy = obj => {
    let copy = Object.create(Object.getPrototypeOf(obj));
    Object.getOwnPropertyNames(obj).forEach(
        prop => Object.defineProperty(copy, prop, Object.getOwnPropertyDescriptor(obj, prop)));
    return copy;
};


const binaryOp1 = op => {
    switch (op) {
        case "+":
            return (x, y) => x + y;
        case "-":
            return (x, y) => x - y;
        case "*":
            return (x, y) => x * y;
            //
            // etc.
            //
    }
}


const binaryOp2 = op => new Function("x", "y", `return x ${op} y;`);

const binaryLeftOp = (x, op) =>
    (y) => binaryOp2(op)(x, y);

const binaryOpRight = (op, y) =>
    (x) => binaryOp2(op)(x, y);


const curryByBind = fn =>
    fn.length === 0 ? fn() : p => curryByBind(fn.bind(null, p));


const partialByClosure = (fn, ...args) => {
    const partialize = (...args1) => (...args2) => {
        for (let i = 0; i < args1.length && args2.length; i++) {
            if (args1[i] === undefined) {
                args1[i] = args2.shift();
            }
        }
        const allParams = [...args1, ...args2];
        return (allParams.includes(undefined) ||
            allParams.length < fn.length ?
            partialize :
            fn)(...allParams);
    };
    return partialize(...args);
};


const partialCurryingByBind = fn =>
    fn.length === 0 ?
    fn() :
    (...pp) => partialCurryingByBind(fn.bind(null, ...pp));


const partialCurryByClosure = fn => {
    const curryize = (...args1) => (...args2) => {
        const allParams = [...args1, ...args2];
        return (allParams.length < func.length ? curryize : fn)(
            ...allParams
        );
    };
    return curryize();
};



console.log(getRandomLetter());
console.log(getRandomFileName(".txt"));
console.log(range(2, 5));
console.log(factorialByRange(10));