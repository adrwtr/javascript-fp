var once = require("./once");

function avisar(teste) {
    console.log('mensagem: ' + teste);
}

let nova = once(avisar);

nova(1);
nova(2);