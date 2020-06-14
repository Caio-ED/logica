const rs = require('readline-sync');

function mostraTabuada(n){
    for(i=1; i < 10; i++){
        let res = n * i
        console.log(`${n} X ${i} = ${res}`)
    }
}

var n = rs.questionInt("Digite um numero para ver a Tabuada: ");
mostraTabuada(n)