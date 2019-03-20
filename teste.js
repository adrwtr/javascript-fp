const roundFix2 = (a, n) => {
    let r = a > 0 ? Math.ceil(n) : Math.floor(n);
    a += n - r;
    return {
        a,
        r
    };
};

const reverseString2 = str => str.split("").reduceRight((x, y) => x + y, "");

const objCopy = obj => {
    let copy = Object.create(Object.getPrototypeOf(obj));
    Object.getOwnPropertyNames(obj).forEach(
        prop => Object.defineProperty(copy, prop, Object.getOwnPropertyDescriptor(obj, prop)));
    return copy;
};


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