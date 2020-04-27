var readline = require('readline-sync')

var n1 = readline.question("Digite o numero : ")

if (n1 >= 100 && n1 <= 200){
    console.log("O numero está dentro do intervalo de 100 á 200")
} else {
    console.log("O numero está fora do intervalo de 100 á 200")

}