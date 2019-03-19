// Aplica na função os argumentos passados como se fosse array
const demethodizeApplyArrArgs = fn => (arg0, ...args) => fn.apply(arg0, args);

// aplica na função os argumentos na ordem passada
const demethodizeCall = fn => (arg0, ...args) => fn.call(arg0, ...args);

// faz o bind dentro de um objeto - e chama a função
const demethodizeBindObject = fn => (...args) => fn.bind(...args)();

module.exports = {
    'demethodizeApplyArrArgs' : demethodizeApplyArrArgs,
    'demethodizeCall' : demethodizeCall,
    'demethodizeBindObject' : demethodizeBindObject
};