// Se negativo multiplicar por 3 e se positivo por 2

var readline = require('readline-sync')

var input = readline.questionInt("Digite um numero: ")
if(input < 0){
    input = input * 3
} else {
    input = input * 2
}
console.log(input)