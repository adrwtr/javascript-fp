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

const shuffle = arr => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        let r = Math.floor(Math.random() * (len - i));
        [arr[i], arr[i + r]] = [arr[i + r], arr[i]];
    }
    return arr;
};

const reverseString = str => {
    let arr = str.split("");
    arr.reverse();
    return arr.join("");
};

const reverseString2 = str => str.split("").reduceRight((x, y) => x + y, "");

const objCopy = obj => {
    let copy = Object.create(Object.getPrototypeOf(obj));
    Object.getOwnPropertyNames(obj).forEach(
        prop => Object.defineProperty(copy, prop, Object.getOwnPropertyDescriptor(obj, prop)));
    return copy;
};


module.exports = {
    'getRandomLetter' : getRandomLetter,
    'getRandomFileName' : getRandomFileName,
    'shuffle' : shuffle,
    'reverseString' : reverseString
};