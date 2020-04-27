var readline = require('readline-sync')

var input = readline.questionInt("Digite um numero: ")
if(input < 0){
    input = input * 3
    console.log(input)
} else {
    input = input * 2
    console.log(input)
}