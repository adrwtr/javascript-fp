// var once = require("./once");

const flipTwo = fn => (x, y) => fn(y, x);
const demethodize = fn => (arg0, ...args) => fn.apply(arg0, args);

const average = arr => arr.reduce(sum, 0) / arr.length;
const getField = attr => obj => obj[attr];
const myMap = curry(flipTwo(demethodize(map)));
const getLat = curry(getField)("lat");


const getAllLats = curry(myMap)(getLat);

let averageLat2 = pipeline(curry(myMap)(curry(getField)("lat")), average);