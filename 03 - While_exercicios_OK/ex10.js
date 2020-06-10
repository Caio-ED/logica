//imprimir todos os divisores de um numero

var rs = require('readline-sync');

var input = rs.questionInt("Digite um numero: ");

var i = 0;

console.log("os Divisores de ", input, "são: ")

while(i <= input){

    if(input % i == 0){
        console.log(i)

    }
    i++
}