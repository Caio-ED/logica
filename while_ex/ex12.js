// receber 15 numeros de entrada e fazer a media

var rs = require('readline-sync');

var i = 0;
var soma = 0;

while(i < 15){
    var input = rs.questionInt("Digite um numero: ");
    soma = soma + input;
    i++
}
console.log(soma / 15);