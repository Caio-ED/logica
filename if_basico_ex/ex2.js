//Verifica se um numero é par ou impar .

var readline = require('readline-sync')

var num = readline.question("Digite o numero que voce quer verificar se é par: ")
if(num % 2 == 0){
    console.log("Este numero é par")
} else {
    console.log("Este numero é impar")
}