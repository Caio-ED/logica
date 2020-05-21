var rs = require('readline-sync')

var valorproduto = rs.questionFloat('Digite o Preço do Produto: ')
var menuPagamento = '\
1 - A vista em Dinheiro ou cheque - desc. 10% \
\n2 - A vista no cartao de credito - desc 15%\
\n3 - Em duas vezes no cartão - juros 10%\n'

var opcaopagamento = rs.questionInt(menuPagamento)
var precofinal = 0
switch(opcaopagamento){
    case 1:
        precofinal = valorproduto - (valorproduto * 0.1)
    break
    case 2:
        precofinal = valorproduto - (valorproduto * 0.15)
    break
    case 3:
        precofinal = valorproduto + (valorproduto * 0.1)
    break
    default:
        console.log('Voce não escolheu um meio de pagamento valido, Fim.')
}

console.log(precofinal)