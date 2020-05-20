//recebe 5 num, mostra produto dos impares e soma dos pares

var rs = require('readline-sync');

var i = 0;
var produto = 0;
var soma = 0;

while(i < 5){
    var input = rs.questionInt("Digite um numero: ");
    if(input % 2 == 0){
        soma = soma + input;
    }else if(input % 2 == 1){
        produto = produto * input;
    }
    i++
}

console.log("A soma dos pares é igual a:", soma, "\nE o Produto dos impares é igual a:", produto)
