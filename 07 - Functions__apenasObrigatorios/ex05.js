const rs = require('readline-sync');

function menorNumero(array){
    let menor = Math.min(...array);
    console.log(menor)
    return menor
}

var numeros =[]
for(i =0 ; i< 2;i++){
    numeros[i] = rs.questionInt('Digite o primeiro numero: ')
}
console.log(numeros)
console.log(`O menor numero é ${menorNumero(numeros)}`);