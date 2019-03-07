const demethodize1 = fn => (arg0, ...args) => fn.apply(arg0, args);
const demethodize2 = fn => (arg0, ...args) => fn.call(arg0, ...args);
const demethodize3 = fn => (...args) => fn.bind(...args)();


const name = "teste";
const result = name.split("").map(x => x.toUpperCase());
console.log(result);
// ["F", "U", "N", "C", "T", "I", "O", "N", "A", "L"]


// or

const map = demethodize3(Array.prototype.map);
const toUpperCase = demethodize3(String.prototype.toUpperCase);
const result2 = map(name, toUpperCase);
// ["F", "U", "N", "C", "T", "I", "O", "N", "A", "L"]
console.log(result2);
