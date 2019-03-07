const memoize3 = fn => {
    let cache = {};
    const PRIMITIVES = ["number", "string", "boolean"];
    return (...args) => {
        let strX =
            args.length === 1 && PRIMITIVES.includes(typeof args[0]) ?
            args[0] :
            JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
};



const memoize = fn => {
    let cache = {};
    return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
};


const memoize2 = fn => {
    if (fn.length === 1) {
        let cache = {};
        return x => (x in cache ? cache[x] : (cache[x] = fn(x)));
    } else {
        return fn;
    }
};


const memoize4 = fn => {
    let cache = {};
    return (...args) => {
        let strX = JSON.stringify(args);
        return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
    };
};



