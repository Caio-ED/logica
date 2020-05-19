//imprimir a tabuada de um numero

var rs = require('readline-sync');

var input = rs.questionInt("Digite um numero: ");

var i = 0;

console.log("A tabuada de ", input , "é:")
while(i <= 10){
    console.log(i, "X", input, "=", input * i)
    i++
}