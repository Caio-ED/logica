var rs = require('readline-sync')

function menudeopções(){
    console.log(' a - saldo\n b - saque\n c - deposito\n d - sair ')
}

var saldo = 0

while(true){
    var opcaoSel = rs.question(menudeopções())
    switch(opcaoSel){

        case 'a':
            console.log(`Saldo Atual: ${saldo}\n`)
            break;

        case 'b':
            let vretirada = rs.questionFloat('Valor do saque: ')
            if(vretirada > saldo){
                console.log("\n Voce nao tem essa quantia...voltando ao menu. \n")
            } else {
                saldo = saldo - vretirada
            }
            break;

        case 'c':
            let vdeposito = rs.questionFloat('Valor do Deposito: ')
            saldo = saldo + vdeposito
            break;

        case 'd':
            return

        default:
            console.log('Por favor, Selecione uma das Opções...\n')
    }
}
