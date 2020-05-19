// Imprime cada caracter de uma string em uma linha .

var rs = require('readline-sync');

var input = rs.question("Digite a palavra a ser divida por caractere: ")
var i = input.length 
var index = 0


while(index < i){
    console.log(input.charAt(index))
    index++
}
