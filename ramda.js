// testes de ramda-js

// obj, valor, propriedade
var fnEncontrarValorNaProp = R.curry(
    (
        objEncontrar, value, fnPropriedade
    ) => fnPropriedade(objEncontrar) == value
);

// seleciona o local
this.objLocalPai = R.find(
    fnEncontrarValorNaProp(
        R.__,
        this.arrAcrvClassificacao.cd_local,
        R.prop('cd_local')
    ),
    this.arrLocalPai
);

// seleciona a tabela siga
this.objTabelaClassificacao = R.find(
    fnEncontrarValorNaProp(
        R.__,
        this.arrAcrvClassificacao.cd_siga,
        R.prop('cd_siga')
    ),
    this.arrTabelaClassificacao
);