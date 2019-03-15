const funcoes = {
    'high_order' : require('./high_order')
};

// funcao com 2 argumentos
function logComposto(ds_stringA, ds_stringB)
{
    console.log(
        ds_stringA,
        ds_stringB
    );
}


// log das funcoes no arquivo importado
console.log(funcoes.high_order.flipTwoArgs);

// executa função com 2 args
logComposto('valor 1', 'valor 2');

// aplica high order que altera a ordem dos argumentos
const logCompostoFlipTwoArgs = funcoes.high_order.flipTwoArgs(logComposto);
logCompostoFlipTwoArgs('valor 1', 'valor 2');

