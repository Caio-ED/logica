// verificar se um numero é divisor de outro

var readline = require('readline-sync')

var n1 = readline.question("Digite o numero : ")
var n2 = readline.question("Digite o Divisor : ")

if (n1 % n2 == 0){
    console.log(n2 , " é um divisor de " ,  n1 )
} else {
    console.log(n2 , " não é um divisor de " ,  n1 )
}

