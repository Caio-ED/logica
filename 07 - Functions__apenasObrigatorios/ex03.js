var rs = require('readline-sync')

function retornaDiasvividos(anos){
    console.log(anos)
    var totaldias = (anos[0] * 365)+ (anos[1] * 30) + anos[2] * 1
    return(`Voce esta vivo a ${totaldias} dias`)
}

var entrada = rs.question('Digite anos meses e dias separados por espaço: ').split(" ")

console.log(retornaDiasvividos(entrada))