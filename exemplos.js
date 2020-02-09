var arrDados = [
    {
        'nome' : 'backlog',
        'cards' : 20,
    },

    {
        'nome' : 'Dev',
        'cards' : 2,
    },

    {
        'nome' : 'QA',
        'cards' : 2,
    },

    {
        'nome' : 'Terminado',
        'cards' : 0,
    },
];


function getTotalParaCadaLista(
    arrDados
) {
    var novoArr = [];

    arrDados.forEach(
        (arrLista, i) => {
            // recebe a soma dele com todo o resto
            var soma = arrLista.cards;

            arrDados.forEach(
                (arrTemp, t) => {
                    if (t > i) {
                        soma += arrTemp.cards;
                    }
                }
            );

            novoArr.push({
                'nome' : arrLista.nome,
                'cards' : arrLista.cards,
                'total' : soma
            });
        }
    );


    console.log(novoArr);
}


getTotalParaCadaLista(arrDados);